import { use } from "react";
import { GameContext } from "./GameProvider";

export const useCurrentGame = () => use(GameContext).game;

export const useCreateGame = () => use(GameContext).createGame;

export const useJoinGame = () => use(GameContext).joinGame;
