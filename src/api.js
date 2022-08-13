import axios from "axios";

const api = axios.create({
  baseURL: "https://gerenciador-curriculo-teste.herokuapp.com/",
});

export default api;
