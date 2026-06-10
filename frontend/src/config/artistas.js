import { API } from "../config/api";

export const getArtistas = async () => {
  const res = await fetch(`${API}/artistas`);
  return res.json();
};

export const createArtista = async (data) => {
  const res = await fetch(`${API}/artistas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
};

export const deleteArtista = async (id) => {
  const res = await fetch(`${API}/artistas/${id}`, {
    method: "DELETE",
  });

  return res.json();
};