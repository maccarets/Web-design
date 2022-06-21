import axios from "axios";

export default axios.create({
  baseURL: "localhost:8081/api",
  headers: {
    "Content-type": "application/json"
  }
});
