import { supabase } from "@/lib/config/supabase";
import { Session } from "@supabase/supabase-js";
import { ReactNode, useEffect, useState } from "react";
import { AuthContext, AuthData } from "./AuthContext";

export const AuthProvider = (children: ReactNode) => {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
      //Ya existe una session activa?
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setIsLoading(false);
    });
    //Observer de la session
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log("Auth state changed:", { event: _event, session });
      setSession(session);
    });
    //Detener el observer
    return () => subscription.unsubscribe();
  }, []);

  const value: AuthData = {
    session,
    isLoading,
    isLoggedIn: !!session,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
