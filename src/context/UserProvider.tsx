/* eslint-disable react-refresh/only-export-components */

import React, { createContext } from "react";
import type { User } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/firebase/auth";

export const UserContext = createContext<User | null>(null);

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <h1>Auth State loading screen</h1>;
  }

  if (error) {
    console.error(error);
  }

  return <UserContext value={user!}>{children}</UserContext>;
}
