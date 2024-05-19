import clsx from "clsx";
import { MdSupervisedUserCircle } from "react-icons/md";

export default function MessageBox({
  message,
  incoming,
}: {
  message: string;
  incoming: boolean;
}) {
  return (
    <div
      className={clsx("text-white flex space-x-1", {
        "justify-end": !incoming,
      })}
    >
      {incoming && (
        <div className="self-end w-[32px] h-[32px]">
          <MdSupervisedUserCircle size="32px" />
        </div>
      )}
      <div
        className={clsx(
          { "bg-inc-message-bg": incoming, "bg-message-bg": !incoming },
          "px-3 py-2 rounded-lg font-roboto text-sm font-medium w-message text-white select-none cursor-pointer h-full"
        )}
      >
        {message}
      </div>
    </div>
  );
}
