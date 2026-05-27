import "./App.css";
import { AuthProvider } from "./shared/context/AuthContext";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
