import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/", // ganti sesuai base URL API kamu
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default api;
