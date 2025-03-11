import axios from "axios";

const instance = axios.create({
  baseURL: "https://localhost:7082/api/",
});

export default instance;
