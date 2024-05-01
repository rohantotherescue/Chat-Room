const {createServer} = require("http")
const { Server }= require("socket.io")
const express = require("express");
const path = require("path");

const app = express();

const httpServer= createServer(app)
const socket= new Server(httpServer, {
    cors: {
        origin: "*"
    }
})


socket.on("connection", (socketio) => {
    socketio.on("user-message", (message) => {
      socket.emit("message", message);
    });
  });

app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
  return res.sendFile("/public/index.html");            
});

const PORT = 3000; //process.env.PORT ||

httpServer.listen(PORT, ()=>{
    console.log("server is connected on localhost:${PORT}")
})
