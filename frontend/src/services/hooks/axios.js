import axios from "axios";

export const api = axios.create({
  baseURL: "https://stockwise-backend.onrender.com",
});
