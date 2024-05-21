import { collection, query, where } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import store from "@/firebase/store";
import { Game } from "@/types";

type Player = {
  code: string;
  nick: string;
};

export default function PlayerList({ game }: { game: Game }) {
  const [players, loading, error] = useCollectionData(
    query(collection(store, "games_players"), where("code", "==", game.code))
  );

  return (
    <div className="p-2 bg-message-bg text-white min-w-48 rounded-md shadow-lg font-roboto">
      <h1 className="text-2xl m-0 p-0 border-b-2">Players</h1>
      {loading && <h1>Player list loading</h1>}
      {error && <h1>Unable to load players list</h1>}
      {!loading &&
        (players as Player[])?.map((player, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-sm">Joined:</span>{" "}
            <span className="font-bold"> {player.nick}</span>
          </div>
        ))}
    </div>
  );
}
