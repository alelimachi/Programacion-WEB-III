import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Galeria from "./pages/Galeria";
import Artistas from "./pages/Artistas";
import Contacto from "./pages/Contacto";
import Login from "./pages/Login";
import Estadisticas from "./pages/Estadisticas";
import Usuarios from "./pages/Usuarios";

function RutaPrivada({ children }) {
  const token = localStorage.getItem("token");

  return token ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/home"
          element={
            <RutaPrivada>
              <Home />
            </RutaPrivada>
          }
        />
        <Route
          path="/galeria"
          element={
            <RutaPrivada>
              <Galeria />
            </RutaPrivada>
          }
        />
        <Route
          path="/artistas"
          element={
            <RutaPrivada>
              <Artistas />
            </RutaPrivada>
          }
        />
        <Route
          path="/contacto"
          element={
            <RutaPrivada>
              <Contacto />
            </RutaPrivada>
          }
        />
        <Route
          path="/estadisticas"
          element={
            <RutaPrivada>
              <Estadisticas />
            </RutaPrivada>
          }
        />
        <Route
          path="/usuarios"
          element={
            <RutaPrivada>
              <Usuarios />
            </RutaPrivada>
          }
        />
        <Route
          path="*"
          element={<Navigate to="/login" />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;