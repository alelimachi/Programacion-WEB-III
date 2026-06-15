import "../styles/pages.css";

function Contacto() {
  return (
    <div className="contacto-page">
      <div className="contacto-hero text-center">
        <h1 className="contacto-title">
          Contáctanos
        </h1>

        <p className="contacto-subtitle">
          Estamos disponibles para resolver tus consultas,
          colaborar con artistas y promover el arte digital.
        </p>
      </div>

      <div className="container mt-5">
        <div className="row g-4">
          <div className="col-md-7">
            <div className="card shadow-lg border-0 contacto-card">
              <div className="card-body p-4">

                <h3 className="mb-4">
                  Envíanos un mensaje
                </h3>

                <form>

                  <div className="mb-3">
                    <label className="form-label">
                      Nombre Completo
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ingrese su nombre"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      Correo Electrónico
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      placeholder="correo@gmail.com"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      Asunto
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Motivo del mensaje"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      Mensaje
                    </label>

                    <textarea
                      rows="5"
                      className="form-control"
                      placeholder="Escriba aquí su mensaje..."
                    ></textarea>
                  </div>

                  <button
                    className="btn btn-warning btn-lg w-100"
                  >
                    Enviar Mensaje
                  </button>

                </form>

              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="card shadow-lg border-0 contacto-info">

              <div className="card-body p-4">

                <h3 className="mb-4">
                  Información
                </h3>

                <p>
                  📍 La Paz, Bolivia
                </p>

                <p>
                  📧 contacto@musa.com
                </p>

                <p>
                  📱 +591 77777777
                </p>

                <hr />

                <h5>
                  Horarios de Atención
                </h5>

                <p>
                  Lunes a Viernes
                  <br />
                  08:00 - 18:00
                </p>

                <div className="social-icons mt-4">

                  <button className="btn btn-outline-dark me-2">
                    Facebook
                  </button>

                  <button className="btn btn-outline-dark me-2">
                    Instagram
                  </button>

                  <button className="btn btn-outline-dark">
                    TikTok
                  </button>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Contacto;