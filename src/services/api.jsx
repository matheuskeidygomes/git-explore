import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    "Authorization": "token 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"
  }
});

export default api;