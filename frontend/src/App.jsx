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

// 🔐 PROTECCIÓN DE RUTAS
function RutaPrivada({ children }) {
  const token = localStorage.getItem("token");

  return token ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        {/* LOGIN AL INICIAR */}
        <Route
          path="/"
          element={<Navigate to="/login" />}
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* HOME */}
        <Route
          path="/home"
          element={
            <RutaPrivada>
              <Home />
            </RutaPrivada>
          }
        />

        {/* GALERIA */}
        <Route
          path="/galeria"
          element={
            <RutaPrivada>
              <Galeria />
            </RutaPrivada>
          }
        />

        {/* ARTISTAS */}
        <Route
          path="/artistas"
          element={
            <RutaPrivada>
              <Artistas />
            </RutaPrivada>
          }
        />

        {/* CONTACTO */}
        <Route
          path="/contacto"
          element={
            <RutaPrivada>
              <Contacto />
            </RutaPrivada>
          }
        />

        {/* ESTADISTICAS */}
        <Route
          path="/estadisticas"
          element={
            <RutaPrivada>
              <Estadisticas />
            </RutaPrivada>
          }
        />

        {/* USUARIOS */}
        <Route
          path="/usuarios"
          element={
            <RutaPrivada>
              <Usuarios />
            </RutaPrivada>
          }
        />

        {/* SI LA RUTA NO EXISTE */}
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