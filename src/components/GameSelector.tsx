import {
  useCreateGame,
  useCurrentGame,
  useJoinGame,
} from "@/context/gameHooks";
import { useEffect, useState } from "react";
import { MdLogin } from "react-icons/md";

export default function GameSelector() {
  const [code, setCode] = useState("");
  const createGame = useCreateGame();
  const joinGame = useJoinGame();
  const game = useCurrentGame();

  async function handleCreateGame() {
    await createGame();
  }

  async function handleJoinGame() {
    await joinGame(code);
  }

  useEffect(() => {
    console.log(game);
    // debug
  }, [game]);

  return (
    <div className="p-4 bg-ui-card-bg w-80 rounded-md gpt-shadow">
      <h2 className="font-roboto-condensed text-md font-medium text-white">
        Join with code
      </h2>
      <div className="flex items-center w-full space-x-2">
        <input
          type="text"
          className="flex-1 p-2 outline-none font-roboto font-bold text-1xl rounded-sm"
          placeholder="Game code"
          value={code}
          onChange={(e) => setCode(e.currentTarget.value)}
        />
        <button
          onClick={handleJoinGame}
          className="text-white p-2 font-roboto font-bold rounded-md shadow-md bg-card-icon flex"
        >
          <MdLogin size={24} />
        </button>
      </div>
      <button
        onClick={handleCreateGame}
        className="mt-4 text-white font-roboto font-bold p-2 rounded-md shadow-md bg-card-icon transition-all hover:-translate-y-1 hover:shadow"
      >
        Create new game
      </button>
    </div>
  );
}
