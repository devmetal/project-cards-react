import { useCurrentUser } from "@/context/userHooks";
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const user = useCurrentUser();

  if (!user) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}
