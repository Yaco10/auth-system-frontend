import { useAuth } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { use, useEffect } from "react";

export function Menu(){
    const { isAuth } = useAuth();
    const token = localStorage.getItem("authToken");
    
    const MyComponent = ({ token }) => {
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("/users/perfil", {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });
    
            if (response.status === 200) {
              console.log("Datos recibidos correctamente:", response.data);
            }
          } catch (error) {
            console.error("Hubo un error al obtener los datos:", error);
          }
        };
    
        if (token) {
          fetchData();
        }
      }, [token]);
    
  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return <h1>Bienvenido al menú</h1>;

}