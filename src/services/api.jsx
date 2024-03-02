import axios from "axios";

const api = axios.create({
  baseURL: "https://dailynotes-b.onrender.com",
});

export default api;
