import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Login } from "../components/Login";
import { Menu } from "../components/Menu";

const AppRoutes = () => {
  const authContext = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/menu"
        element={authContext?.isAuth ? <Menu /> : <Navigate to="/login" />}
      />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRoutes;
