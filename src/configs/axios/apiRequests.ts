import axios from "axios";

const apiRequests = axios.create({
  baseURL: "https://cms-app.liara.run",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiRequests