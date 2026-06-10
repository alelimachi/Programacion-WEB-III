import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* HERO */}
      <div className="container text-center mt-5">

        <h1
          className="display-1 fw-bold"
          style={{
            color: "#d4af37",
            fontFamily: "Cinzel, serif"
          }}
        >
          MUSA
        </h1>

        <p className="lead">
          Galería de Arte Digital Contemporáneo
        </p>

        {/* DROPDOWN */}
        <div className="dropdown mb-4">

          <button
            className="btn btn-warning dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Explorar
          </button>

          <ul className="dropdown-menu">

            <li>
              <Link
                className="dropdown-item"
                to="/galeria"
              >
                Galería
              </Link>
            </li>

            <li>
              <Link
                className="dropdown-item"
                to="/artistas"
              >
                Artistas
              </Link>
            </li>

            <li>
              <Link
                className="dropdown-item"
                to="/estadisticas"
              >
                Estadísticas
              </Link>
            </li>

          </ul>

        </div>

      </div>

      {/* CARRUSEL */}
      <div
        id="carouselMusa"
        className="carousel slide container mb-5"
        data-bs-ride="carousel"
      >

        <div className="carousel-inner">

          <div className="carousel-item active">
            <img
              src="/obra2.png"
              className="d-block w-100 rounded"
              alt="Arte"
              style={{
                height: "500px",
                objectFit: "cover"
              }}
            />
          </div>

          <div className="carousel-item">
            <img
              src="/uno.jpeg"
              className="d-block w-100 rounded"
              alt="Arte"
              style={{
                height: "500px",
                objectFit: "cover"
              }}
            />
          </div>

          <div className="carousel-item">
            <img
              src="/dos.jpeg"
              className="d-block w-100 rounded"
              alt="Arte"
              style={{
                height: "500px",
                objectFit: "cover"
              }}
            />
          </div>

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselMusa"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselMusa"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>

      {/* TARJETAS */}
      <div className="container">

        <div className="row">

          <div className="col-md-4 mb-4">

            <div className="card shadow h-100">

              <img
                src="/obra2.png"
                className="card-img-top"
                alt="Arte"
                style={{
                  height: "250px",
                  objectFit: "cover"
                }}
              />

              <div className="card-body text-center">

                <h5 className="card-title">
                  Obras Exclusivas
                </h5>

                <p>
                  Descubre piezas únicas de arte.
                </p>

              </div>

            </div>

          </div>

          <div className="col-md-4 mb-4">

            <div className="card shadow h-100">

              <img
                src="/uno.jpeg"
                className="card-img-top"
                alt="Arte"
                style={{
                  height: "250px",
                  objectFit: "cover"
                }}
              />

              <div className="card-body text-center">

                <h5 className="card-title">
                  Artistas
                </h5>

                <p>
                  Conoce a nuestros artistas.
                </p>

              </div>

            </div>

          </div>

          <div className="col-md-4 mb-4">

            <div className="card shadow h-100">

              <img
                src="/dos.jpeg"
                className="card-img-top"
                alt="Arte"
                style={{
                  height: "250px",
                  objectFit: "cover"
                }}
              />

              <div className="card-body text-center">

                <h5 className="card-title">
                  Cultura
                </h5>

                <p>
                  Arte que conecta generaciones.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* MODAL */}
      <div className="container text-center mb-5">

        <button
          className="btn btn-primary btn-lg"
          data-bs-toggle="modal"
          data-bs-target="#modalMusa"
        >
          Acerca de MUSA
        </button>

      </div>

      <div
        className="modal fade"
        id="modalMusa"
        tabIndex="-1"
      >
        <div className="modal-dialog">

          <div className="modal-content">

            <div className="modal-header">

              <h5 className="modal-title">
                Sobre MUSA
              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>

            </div>

            <div className="modal-body">

              <p>
                MUSA es una galería digital desarrollada
                para promover artistas y obras de arte
                contemporáneo.
              </p>

            </div>

            <div className="modal-footer">

              <button
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
}

export default Home;