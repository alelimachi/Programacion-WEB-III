import { useState, useEffect } from "react";
import ArtistaCard from "../components/ArtistaCard";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";


import {
  obtenerArtistas,
  crearArtista,
  eliminarArtista,
  actualizarArtista
} from "../services/artistaService";

function Artistas() {
  const usuario = JSON.parse(
  localStorage.getItem("usuario")
);

const esAdmin = usuario?.rol === "admin";

  const [artistas, setArtistas] = useState([]);
  const [estado, setEstado] = useState("");
  const [nombre, setNombre] = useState("");

  // EDIT
  const [editId, setEditId] = useState(null);
  const [editNombre, setEditNombre] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);

  useEffect(() => {
    cargarArtistas();
  }, []);
  const generarPDF = () => {

  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Reporte de Artistas - MUSA", 14, 20);

  const datos = artistas.map((artista) => [
    artista.id,
    artista.nombre,
    artista.nacionalidad || "No registrada"
  ]);

  autoTable(doc, {
    head: [["ID", "Nombre", "Nacionalidad"]],
    body: datos,
    startY: 30
  });

  doc.save("reporte_artistas.pdf");
};

  const cargarArtistas = async () => {
    try {
      const data = await obtenerArtistas();

      console.log("DATA RECIBIDA:", data);
      console.log("TIPO:", typeof data);
      console.log("ES ARRAY:", Array.isArray(data));
      setArtistas(data);
      setEstado(`✅ Conectado (${data.length} artistas)`);
    } catch (error) {
      setEstado("❌ Error de conexión");
    }
  };

  /* ================= CREAR ================= */
  const agregarArtista = async () => {
    if (!nombre) return alert("Nombre requerido");

    await crearArtista({ nombre });

    setNombre("");
    cargarArtistas();
  };

  /* ================= ELIMINAR ================= */
  const eliminar = async (id) => {
    await eliminarArtista(id);
    cargarArtistas();
  };

  /* ================= ABRIR EDIT ================= */
  const abrirEditar = (artista) => {
    setEditId(artista.id);
    setEditNombre(artista.nombre);
    setMostrarModal(true);
  };

  /* ================= GUARDAR EDIT ================= */
const guardarEdicion = async () => {
  if (!editNombre) return alert("Nombre requerido");

  try {
    const res = await actualizarArtista(editId, {
      nombre: editNombre
    });

    console.log("RESPUESTA:", res);

    setMostrarModal(false);
    cargarArtistas();

  } catch (error) {
    console.error("ERROR COMPLETO:", error);
    alert(error.message);
  }
};

  return (
    <div className="artistas-page">

      {/* ================= HERO ORIGINAL ================= */}
      <div className="artistas-hero text-center py-5">

        <h1 style={{
          fontFamily: "Cinzel, serif",
          fontSize: "4rem",
          color: "#d4af37",
          textShadow: "3px 3px 15px rgba(0,0,0,0.5)"
        }}>
          NUESTROS ARTISTAS
        </h1>

        <p className="lead text-light">
          Conoce a los artistas que forman parte de MUSA
          y explora sus obras y estilos.
        </p>

        <button
          className="btn btn-warning btn-lg mt-3"
          onClick={cargarArtistas}
        >
          Actualizar Artistas
        </button>
        <button
         className="btn btn-danger btn-lg mt-3 ms-2"
         onClick={generarPDF}
        >
          Generar PDF
      </button>
      </div>

      {/* ================= IMÁGENES (TU DISEÑO ORIGINAL) ================= */}
      <div className="container mt-5">

        <div className="row text-center">

          <div className="col-md-4">
            <h4 style={{ fontFamily: "Cinzel, serif", color: "#d4af37" }}>
              Artistas Destacados
            </h4>

            <img
              src="/mi amada.jpeg"
              alt="Artistas"
              className="img-fluid rounded shadow mt-3"
              style={{ height: "300px", objectFit: "cover" }}
            />
          </div>

          <div className="col-md-4">
            <h4 style={{ fontFamily: "Cinzel, serif", color: "#d4af37" }}>
              Obras Exclusivas
            </h4>

            <img
              src="/obra.png"
              alt="Obras"
              className="img-fluid rounded shadow mt-3"
              style={{ height: "300px", objectFit: "cover" }}
            />
          </div>

          <div className="col-md-4">
            <h4 style={{ fontFamily: "Cinzel, serif", color: "#d4af37" }}>
              Arte Boliviano
            </h4>

            <img
              src="/img3.jpeg"
              alt="Arte"
              className="img-fluid rounded shadow mt-3"
              style={{ height: "300px", objectFit: "cover" }}
            />
          </div>

        </div>
      </div>

      {/* ================= FORM CREAR ================= */}
      <div className="container mt-5 text-center">

        <input
          type="text"
          placeholder="Nombre artista"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="form-control w-50 mx-auto"
        />
        {esAdmin && (
        <button
          className="btn btn-success mt-3"
          onClick={agregarArtista}
        >
          Agregar Artista
        </button>
      )}
      </div>

      {/* ================= ESTADO ================= */}
      {estado && (
        <div className="container mt-3">
          <div className="alert alert-info text-center">
            {estado}
          </div>
        </div>
      )}

      {/* ================= LISTA ================= */}
      <div className="container mt-5">

        <h2 className="text-center mb-4"
          style={{ color: "#d4af37", fontFamily: "Cinzel, serif" }}
        >
          Galería de Artistas
        </h2>

        <div className="row">

          {artistas.length > 0 ? (
            artistas.map((artista) => (
              <div className="col-md-4 mb-4" key={artista.id}>

                <ArtistaCard artista={artista} />

                {/* EDITAR */}
                {esAdmin && (
                  <button
                    className="btn btn-primary mt-2 w-100"
                    onClick={() => abrirEditar(artista)}
                  >
                    Editar
                  </button>
                )}
                
                {/* ELIMINAR */}
             {esAdmin && (
              <button
                className="btn btn-danger mt-2 w-100"
                onClick={() => eliminar(artista.id)}
              >
                Eliminar
              </button>
            )}
              </div>
            ))
          ) : (
            <p className="text-center text-light">
              No existen artistas registrados.
            </p>
          )}

        </div>
      </div>

      {/* ================= MODAL EDIT ================= */}
      {mostrarModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "10px",
              width: "400px",
              textAlign: "center"
            }}
          >
            <h3>Editar Artista</h3>

            <input
              type="text"
              value={editNombre}
              onChange={(e) => setEditNombre(e.target.value)}
              className="form-control mt-3"
            />

            <div className="mt-3">
              <button
                className="btn btn-success me-2"
                onClick={guardarEdicion}
              >
                Guardar
              </button>

              <button
                className="btn btn-secondary"
                onClick={() => setMostrarModal(false)}
              >
                Cancelar
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default Artistas;