import axios from "axios";

const URL = "http://localhost:3001/obras";

export const obtenerObras = async () => {
  const res = await axios.get(URL);
  return res.data;
};