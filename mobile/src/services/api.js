import axios from "axios";

// baseURl
// 192.168.1.107 - Do expo
// 3333 - Porta do backend
const api = axios.create({
  baseURL: "http://10.0.0.107:3333"
});

export default api;
