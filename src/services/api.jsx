import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    "Authorization": `token ${REACT_APP_VERCEL_ENV.GIT_TOKEN}`
  }
});

export default api;