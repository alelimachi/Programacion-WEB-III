import { Link, useLocation } from "react-router-dom";
import { logoutUser } from "../config/logout";

function Navbar() {
  const location = useLocation();

  const logout = async () => {

  try {

    const usuario = JSON.parse(
      localStorage.getItem("usuario")
    );

    await logoutUser(usuario.id);

  } catch (error) {
    console.error(error);
  }

  localStorage.removeItem("token");
  localStorage.removeItem("usuario");

  window.location.href = "/login";
};

  if (location.pathname === "/login") {
    return null;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark musa-navbar">
      <div className="container">

        <Link className="navbar-brand musa-logo" to="/home">
          MUSA
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">

          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Inicio
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/galeria">
                Galería
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/artistas">
                Artistas
              </Link>
            </li>
              <li className="nav-item">
                <Link className="nav-link" to="/estadisticas">
                  Estadísticas
                </Link>
              </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contacto">
                Contacto
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/usuarios">
                Usuarios
              </Link>
            </li>

          </ul>

          <button
            className="btn btn-danger"
            onClick={logout}
          >
            Cerrar sesión
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;