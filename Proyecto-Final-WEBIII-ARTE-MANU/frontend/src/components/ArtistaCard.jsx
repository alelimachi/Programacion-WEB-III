function ArtistaCard({ artista }) {
  return (
    <div className="card h-100 shadow">

      <img
        src={artista.foto}
        className="card-img-top"
        alt={artista.nombre}
      />

      <div className="card-body">

        <h4>{artista.nombre}</h4>

        <p>
          <strong>Nacionalidad:</strong>
          {" "}
          {artista.nacionalidad}
        </p>

        <p>{artista.biografia}</p>

      </div>

    </div>
  );
}

export default ArtistaCard;