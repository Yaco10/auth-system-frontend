import { useAuth } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { use, useEffect } from "react";

export function Menu(){
    const { isAuth } = useAuth();
    const token = localStorage.getItem("authToken");
    
    useEffect(() => {
      try {
        const response = await axios.get(
          "/users/perfil", // URL de la API
          {}, // Cuerpo vacío (porque es un POST sin body)
          {
            headers: {
              Authorization: `Bearer ${token}` // Token en el header
            }
          }
        );
        if (response.status === 200) {
            console.log('Datos enviados correctamente:', response.data);
           
           
        }
    } catch (error) {
        console.error('Hubo un error al enviar los datos:', error);
    }
  
    }, [token]);
    
  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return <h1>Bienvenido al menú</h1>;

}