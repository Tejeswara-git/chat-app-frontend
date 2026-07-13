import axios from "axios";

const api = axios.create({
    baseURL: "https://chat-app-backend-hr3l.onrender.com/api"
});

export default api;