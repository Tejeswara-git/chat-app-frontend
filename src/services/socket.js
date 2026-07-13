import { io } from "socket.io-client";

const socket = io("https://chat-app-backend-hr3l.onrender.com");

export default socket;