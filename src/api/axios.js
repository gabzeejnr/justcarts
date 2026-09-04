import axios from "axios";

const api = axios.create({
    baseURL: "https://justcarts-backend.onrender.com/api",
    withCredentials: true
})

export default api;