import { useEffect, useState } from "react";
import ObraCard from "../components/ObraCard";
import { obtenerObras } from "../services/obraService";
import { Link } from "react-router-dom";

function Galeria() {
  const [obras, setObras] = useState([]);

  useEffect(() => {
    cargarObras();
  }, []);

  const cargarObras = async () => {
    try {
      const data = await obtenerObras();
      setObras(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="page">
      <div
        id="carouselGaleria"
        className="carousel slide mb-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">

          <div className="carousel-item active">
            <img
              src="/obra.png"
              className="d-block w-100 carousel-img"
              alt="Obra 1"
            />
          </div>

          <div className="carousel-item">
            <img
              src="/img2.png"
              className="d-block w-100 carousel-img"
              alt="Obra 2"
            />
          </div>

          <div className="carousel-item">
            <img
              src="/img3.jpeg"
              className="d-block w-100 carousel-img"
              alt="Obra 3"
            />
          </div>
           <div className="carousel-item">
            <img
              src="/obra1.png"
              className="d-block w-100 carousel-img"
              alt="Obra 3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselGaleria"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselGaleria"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>
<div className="hero-galeria text-center">

  <h1 className="musa-title">
     MUSA
  </h1>

  <h2 className="galeria-subtitle">
    Galería de Arte Contemporáneo
  </h2>

  <p className="hero-text">
    Descubre obras únicas, artistas Bolivianos y
    expresiones culturales que reflejan la identidad,
    creatividad de nuestro negocio.
  </p>

 <div className="hero-buttons">

  <Link
    to="/Contacto"
    className="btn btn-warning btn-lg me-3"
  >
    Contacto
  </Link>

  <Link
    to="/artistas"
    className="btn btn-outline-light btn-lg"
  >
    Conocer Artistas
  </Link>

</div>
</div>

<div className="container mb-5">
  <div className="row">

    <div className="col-md-6 text-center">
      <img
        src="/banner-arte.jpg"
        alt="Arte 1"
        className="img-fluid rounded shadow-lg"
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover"
        }}
      />
    </div>

    <div className="col-md-6 text-center">
      <img
        src="/29e51b0f-c407-4da3-b395-5b00aaad54b4.jpeg"
        alt="Arte 2"
        className="img-fluid rounded shadow-lg"
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover"
        }}
      />
    </div>

  </div>
</div>
      <div className="container">
        <div className="row">

          {obras.map((obra) => (
            <div key={obra.id} className="col-md-4 mb-4">

              <ObraCard obra={obra} />

            </div>
          ))}

        </div>
      </div>

    </div>
    
  );
}

export default Galeria;