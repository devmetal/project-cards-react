import { useCurrentGame } from "@/context/gameHooks";
import HostControl from "./components/HostControls";
import PlayerList from "./components/PlayerList";

export default function Lobby() {
  const game = useCurrentGame();

  if (!game) {
    // todo: create some ui
    return null;
  }

  return (
    <main className="main p-10 flex flex-col justify-center gap-4">
      <section className="flex justify-center">
        <HostControl game={game} />
      </section>
      <section className="flex justify-center">
        <PlayerList game={game} />
      </section>
    </main>
  );
}
