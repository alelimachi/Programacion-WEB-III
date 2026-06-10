import axios from "axios";
import { API } from "./api";

export const logoutUser = async (usuario_id) => {

  const res = await axios.post(
    `${API}/auth/logout`,
    {
      usuario_id
    }
  );

  return res.data;
};