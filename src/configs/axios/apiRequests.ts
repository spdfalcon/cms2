import axios from "axios";

const apiRequests = axios.create({
  baseURL: "https://cms-app.liara.run",
});

export default apiRequests