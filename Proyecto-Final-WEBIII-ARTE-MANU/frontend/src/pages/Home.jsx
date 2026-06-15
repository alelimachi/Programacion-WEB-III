import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
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
      <div className="container mt-5 mb-5">

  <h2
    className="text-center mb-4"
    style={{
      color: "#d4af37",
      fontFamily: "Cinzel, serif",
      fontWeight: "bold"
    }}
  >
    Conoce MUSA
  </h2>

  <div className="accordion shadow-lg" id="accordionMusa">
    <div className="accordion-item border-0">

      <h2 className="accordion-header">

        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#objetivo"
          style={{
            background: "linear-gradient(90deg,#d4af37,#f4d03f)",
            color: "#000",
            fontWeight: "bold",
            fontSize: "20px"
          }}
        >
         OBJETIVO
        </button>

      </h2>

      <div
        id="objetivo"
        className="accordion-collapse collapse show"
        data-bs-parent="#accordionMusa"
      >
        <div
          className="accordion-body"
          style={{
            backgroundColor: "#ffff",
            fontSize: "18px"
          }}
        >
          Administrar artistas, obras de arte y usuarios
          mediante una aplicación web desarrollada con
          React en el frontend y NodeJS en el backend,
          permitiendo una gestión eficiente y segura.
        </div>
      </div>

    </div>
    <div className="accordion-item border-0">

      <h2 className="accordion-header">

        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mision"
          style={{
            background: "linear-gradient(90deg,#3498db,#5dade2)",
            color: "white",
            fontWeight: "bold",
            fontSize: "20px"
          }}
        >
         MISIÓN
        </button>

      </h2>

      <div
        id="mision"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionMusa"
      >
        <div
          className="accordion-body"
          style={{
            backgroundColor: "#f4f9ff",
            fontSize: "18px"
          }}
        >
          Promover y difundir el arte digital y
          contemporáneo mediante una plataforma moderna,
          accesible y segura para artistas y visitantes.
        </div>
      </div>

    </div>
    <div className="accordion-item border-0">

      <h2 className="accordion-header">

        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#vision"
          style={{
            background: "linear-gradient(90deg,#27ae60,#58d68d)",
            color: "white",
            fontWeight: "bold",
            fontSize: "20px"
          }}
        >
          VISIÓN
        </button>

      </h2>

      <div
        id="vision"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionMusa"
      >
        <div
          className="accordion-body"
          style={{
            backgroundColor: "#f4fff7",
            fontSize: "18px"
          }}
        >
          Convertirse en una referencia digital para la
          gestión y exposición de obras de arte,
          impulsando la cultura mediante tecnologías web
          innovadoras.
        </div>
      </div>

    </div>

  </div>

</div>
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