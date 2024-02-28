import axios from "axios";

const apiRequests = axios.create({
  baseURL: "https://prime.liara.run/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiRequests