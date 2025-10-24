import { Session } from "@supabase/supabase-js";
import { createContext } from "react";

export type AuthData = {
  session: Session | null;
  isLoading: boolean;
  isLoggedIn: boolean;
};

export const AuthContext = createContext<AuthData | undefined>(undefined);



