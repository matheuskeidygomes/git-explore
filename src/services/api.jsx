import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    "Authorization": "token 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"
  }
});

export default api;