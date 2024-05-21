import { Outlet } from "react-router-dom";

export default function InGame() {
  return (
    <>
      <h1 className="text-2xl text-white">Game Screen</h1>
      <Outlet />
    </>
  );
}
