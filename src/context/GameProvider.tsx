import { type ReactNode, createContext, useState, useEffect } from "react";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { Game } from "@/types";
import store from "@/firebase/store";
import { useCurrentUser, useCurrentUserUnsafe } from "./userHooks";

export type GameContextType = {
  game: Game | null;
  createGame: () => Promise<void>;
  joinGame: (code: string) => Promise<boolean>;
};

export const GameContext = createContext<GameContextType>({
  game: null,
  createGame: () => Promise.resolve(),
  joinGame: () => Promise.resolve(false),
});

const genGameCode = () => crypto.randomUUID().substring(0, 6);

const getCurrentActiveGame = async (uid: string) => {
  const joinedDocRef = doc(store, "games_players", uid);
  const joinedSnap = await getDoc(joinedDocRef);

  if (!joinedSnap.exists()) {
    return null;
  }

  const { code } = joinedSnap.data();
  const gameDocRef = doc(store, "games", code);
  const gameSnap = await getDoc(gameDocRef);

  if (!gameSnap.exists()) {
    return null;
  }

  return gameSnap.data() as Game;
};

export default function GameProvider({ children }: { children: ReactNode }) {
  const [game, setGame] = useState<Game | null>(null);
  const user = useCurrentUser();

  useEffect(() => {
    if (!user) {
      return;
    }

    let valid = true;

    getCurrentActiveGame(user.uid).then((game) => {
      if (valid === true) {
        setGame(game);
      }
    });

    return () => {
      valid = false;
    };
  }, [user]);

  async function createGame() {
    const code = genGameCode();

    const game: Game = {
      code,
      host: user!.uid,
      started: false,
    };

    await setDoc(doc(store, "games", code), game);

    await setDoc(doc(store, "games_players", user!.uid), {
      code,
      nick: user!.displayName ?? "player",
    });

    setGame(game);
  }

  async function joinGame(code: string) {
    const docRef = doc(store, "games", code);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return false;
    }

    await setDoc(doc(store, "games_players", user!.uid), {
      code,
      nick: user!.displayName ?? "player",
    });

    setGame(docSnap.data() as Game);

    return true;
  }

  return (
    <GameContext value={{ game, createGame, joinGame }}>{children}</GameContext>
  );
}
