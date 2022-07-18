import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    "Authorization": `token ${process.env.GIT_TOKEN}`
  }
});

export default api;