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

// socket.on("connection", (socket)=> {
//     console.log(socket)
// })


socket.on("connection", (socketio) => {
    socketio.on("user-message", (message) => {
      socket.emit("message", message);
    });
  });

//   app.get("/", (req, res) => {
//     return res.sendFile("C:/Users/rohan/OneDrive/Desktop/MAIN/PROJECT/meme server/server/public/index.html");
//   });

app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
  return res.sendFile("/public/index.html");            
});

// const PORT = process.env.PORT || 3000;

httpServer.listen(PORT, ()=>{
    console.log("server is connected on localhost:${PORT}")
})
