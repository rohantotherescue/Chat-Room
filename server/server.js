const {createServer} = require("http")
const { Server }= require("socket.io")

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

httpServer.listen(3000, ()=>{
    console.log("server is connected")
})