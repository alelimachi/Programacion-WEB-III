import axios from "axios";
import { API } from "./api";

export const loginUser = async (email, password) => {
  const res = await axios.post(`${API}/auth/login`, {
    email,
    password,
  });

  return res.data;
};