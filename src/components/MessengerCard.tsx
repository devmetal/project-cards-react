import {
  MdFavorite,
  MdInfo,
  MdOutlineVideoChat,
  MdSupervisedUserCircle,
  MdPhoneForwarded,
  MdArrowBack,
} from "react-icons/md";
import MessageBox from "./MessageBox";

export default function MessengerCard() {
  return (
    <div className="w-card h-card bg-black rounded-md gpt-shadow pt-4 px-3 flex flex-col">
      <div className="flex mb-10">
        <div className="flex flex-1 items-center gap-1">
          <MdArrowBack size={24} className="text-card-icon" />
          <MdSupervisedUserCircle className="text-card-icon" size="26px" />
          <h1 className="font-roboto-condensed text-lg text-white select-none">
            Project Cards
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <MdPhoneForwarded className="text-card-icon" size="26px" />
          <MdOutlineVideoChat className="text-card-icon" size="26px" />
          <MdInfo className="text-card-icon" size="26px" />
        </div>
      </div>
      <div className="flex flex-1 flex-col space-y-5 px-2">
        <MessageBox
          incoming
          message="Hey, just got back from yoga. Feeling flexible, wanna join?"
        />
        <MessageBox
          incoming={false}
          message="I'm in the middle of a heated debate with my microwave. Can't leave now."
        />
      </div>
      <div className="flex justify-center py-2">
        <MdFavorite
          size="70"
          className="text-slate-400 hover:text-card-icon transition-transform hover:-translate-y-2 cursor-pointer"
        />
      </div>
    </div>
  );
}
