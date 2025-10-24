import { useContext } from "react";
import { AuthContext } from "../contexts/auth/AuthContext";

export const useAuth = () => {
  const context = useContext(AuthContext);
  // Si el hook se usa fuera de un AuthProvider, se lanza un error.
  if (context === undefined) {
    throw new Error("useAuth debe ser utilizado dentro de un AuthProvider");
  }
  return context;
};