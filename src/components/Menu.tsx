import { useAuth } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";
export function Menu(){
    const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return <h1>Bienvenido al menú</h1>;

}