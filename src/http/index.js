import axios from "axios";
import store from "../store";
const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${store.state.auth.token}`,
  },
});

export default http;
