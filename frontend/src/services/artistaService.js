const API_URL = "http://localhost:3001/artistas";

/* ================= GET ================= */
export const obtenerArtistas = async () => {

  const token = localStorage.getItem("token");

  const res = await fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return await res.json();
};

/* ================= POST ================= */
export const crearArtista = async (data) => {

  const token = localStorage.getItem("token");

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data),
  });

  return await res.json();
};

/* ================= DELETE ================= */
export const eliminarArtista = async (id) => {

  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return await res.json();
};
/* ================= PUT (ACTUALIZAR) ================= */
export const actualizarArtista = async (id, data) => {

  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data),
  });

  return await res.json();
};