import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import AppRoutes from "./Routes/Routes";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
};

export default App;
