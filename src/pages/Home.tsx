import { MdLogin } from "react-icons/md";
import MessengerCard from "../components/MessengerCard";

export default function Home() {
  return (
    <main className="main p-10">
      <div className="flex justify-center mb-11 space-x-8">
        <MessengerCard />
        <MessengerCard />
      </div>
      <h1 className="text-center font-roboto-condensed text-3xl font-bold text-white">
        Project Cards
      </h1>
      <p className="text-center font-roboto text-lg text-white mb-4">
        Online party game where you have to find a funny reply to an incoming
        message.
      </p>
      <div className="flex justify-center">
        <div className="p-4 bg-ui-card-bg w-80 rounded-md gpt-shadow">
          <h2 className="font-roboto-condensed text-md font-medium text-white">
            Join with code
          </h2>
          <div className="flex items-center w-full space-x-2">
            <input
              type="text"
              className="flex-1 p-2 outline-none font-roboto font-bold text-1xl rounded-sm"
              placeholder="Game code"
            />
            <button className="text-white p-2 font-roboto font-bold rounded-md shadow-md bg-card-icon flex">
              <MdLogin size={24} />
            </button>
          </div>
          <button className="mt-4 text-white font-roboto font-bold p-2 rounded-md shadow-md bg-card-icon transition-all hover:-translate-y-1 hover:shadow">
            Create new game
          </button>
        </div>
      </div>
    </main>
  );
}
