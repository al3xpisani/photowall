import axios from "axios";

const api = axios.create({
  //baseURL: "http://52.67.36.227"

  baseURL: "http://localhost:3003"
});

export default api;
