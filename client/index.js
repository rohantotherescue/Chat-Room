const socket = io("http://localhost:3000")
socket.on("connection", (response)=>{
    console.log(response)
})