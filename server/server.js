const {createServer} = require("http")
const { Server }= require("socket.io")
const express = require("express");
const path = require("path");

const app = express();

const httpServer= createServer()
const socket= new Server(httpServer, {
    cors: {
        origin: "*"
    }
})

// socket.on("connection", (socket)=> {
//     console.log(socket)
// })


socket.on("connection", (socket) => {
    socket.on("user-message", (message) => {
      socket.emit("message", message);
    });
  });

  app.use(express.static(path.resolve("./public")));
  
  app.get("/", (req, res) => {
    return res.sendFile("/public/index.html");
  });

httpServer.listen(3000, ()=>{
    console.log("server is connected")
})