import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Login } from "../components/Login";
import { Menu } from "../components/Menu";
import { Register } from "../components/Register";

const AppRoutes = () => {
  const authContext = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/register" element={<Register />} />
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
