import { useCurrentUserUnsafe } from "@/context/userHooks";
import { Game } from "@/types";

export default function HostControl({ game }: { game: Game }) {
  const user = useCurrentUserUnsafe();

  const imTheHost = game.host === user.uid;

  return (
    <>
      {imTheHost ? (
        <button className="text-white font-roboto font-medium p-2 rounded-md shadow-lg bg-card-icon transition-all hover:shadow">
          Start the game
        </button>
      ) : (
        <h1 className="text-white font-roboto-condensed font-medium p-2 text-2xl">
          Waiting for the host to start the game
        </h1>
      )}
    </>
  );
}
