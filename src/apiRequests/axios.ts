import axios from "axios";

const instance = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character/",
});

export default instance;
