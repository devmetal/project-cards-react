import { use } from "react";
import { UserContext } from "./UserProvider";

export const useCurrentUser = () => use(UserContext);

export const useCurrentUserUnsafe = () => use(UserContext)!;
