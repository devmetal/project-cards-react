import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import UserProvider from "./context/UserProvider.tsx";

import "./index.css";
import GameProvider from "./context/GameProvider.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import InGame from "./pages/InGame.tsx";
import Lobby from "./pages/Lobby/Lobby.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/game",
    element: (
      <ProtectedRoute>
        <InGame />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/game",
        element: <Lobby />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <GameProvider>
        <RouterProvider router={router} />
      </GameProvider>
    </UserProvider>
  </React.StrictMode>
);
