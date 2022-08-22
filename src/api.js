import axios from "axios";

export const api = axios.create({
  baseURL: "https://gerenciador-curriculo-teste.herokuapp.com/",
});

export const cepApi = axios.create({
  baseURL: "https://viacep.com.br/ws",
});
