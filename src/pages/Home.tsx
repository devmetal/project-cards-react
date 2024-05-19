import { MdLogin } from "react-icons/md";
import MessengerCard from "../components/MessengerCard";
import { useCurrentUser } from "@/context/userHooks.ts";
import { Link } from "react-router-dom";

export default function Home() {
  const user = useCurrentUser();

  return (
    <main className="main p-10">
      <div className="flex justify-center mb-11 space-x-8">
        <MessengerCard
          incoming="Hey, just got back from yoga. Feeling flexible, wanna join?"
          reply="I'm in the middle of a heated debate with my microwave. Can't leave now."
        />
        <MessengerCard
          incoming="Hey, just got back from yoga. Feeling flexible, wanna join?"
          reply="I'm in the middle of a heated debate with my microwave. Can't leave now."
        />
      </div>
      <h1 className="text-center font-roboto-condensed text-3xl font-bold text-white">
        Project Cards
      </h1>
      {user ? (
        <h2 className="text-center font-roboto-condensed text-2xl font-bold text-white">
          <span>Welcome</span> {user.displayName}
        </h2>
      ) : (
        <div className="flex justify-center">
          <Link to="/login">
            <button className="mt-4 text-white font-roboto font-bold p-2 rounded-md shadow-md bg-card-icon transition-all hover:-translate-y-1 hover:shadow">
              Pls login before create of join
            </button>
          </Link>
        </div>
      )}
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
