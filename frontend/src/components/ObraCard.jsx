function ObraCard({ obra }) {
  return (
    <div className="card shadow-lg border-0 h-100">
      <img
        src={obra.imagen}
        className="card-img-top"
        alt={obra.titulo}
        style={{
          height: "250px",
          objectFit: "cover"
        }}
      />

      <div className="card-body">
        <h4 className="fw-bold">
          {obra.titulo}
        </h4>

        <p className="text-muted">
          {obra.descripcion}
        </p>

        <h5 className="text-success">
          {obra.precio} Bs
        </h5>
      </div>
    </div>
  );
}

export default ObraCard;