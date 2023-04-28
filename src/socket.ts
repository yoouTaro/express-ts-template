import { Server } from "http";
import { Socket, Server as SocketServer } from "socket.io";

function socketSetup(server: Server): void {
  const io: SocketServer = new SocketServer(server);
  io.on("connection", (socket: Socket) => {
    console.log("a user connected");

    // Handle incoming messages
    socket.on("chat_message", (msg: string) => {
      console.log(`message: ${msg}`);
      io.emit("chat_message", msg); // Broadcast the message to all connected clients
    });

    // Handle disconnection
    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
}

export default socketSetup;
