import axios from "axios";
const appAxios = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    Authorization: `Bearer `,
  },
  withCredentials: false,
});

export default appAxios;
