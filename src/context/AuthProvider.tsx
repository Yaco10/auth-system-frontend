import { AuthContext } from "./AuthContext"
import { ReactNode, useState, useContext } from "react"

interface Props {
    children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
    const [isAuth, setIsAuth] = useState(false);
  
    return (
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        {children}
      </AuthContext.Provider>
    );
  }; 
  
  
  
  export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth debe usarse dentro de un AuthProvider");
    }
    return context;
  };