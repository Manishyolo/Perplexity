import app from './src/app.js';
import connectDB from './src/config/database.js';
import {generateResponse} from "./src/services/ai.service.js"
import  http from "http";
import {initSocket} from "./src/sockets/server.socket.js"
const PORT = 3000;


const httpServer = http.createServer(app);

initSocket(httpServer)

connectDB()



httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
