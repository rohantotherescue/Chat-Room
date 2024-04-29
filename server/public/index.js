// // const keys= require("keys.js")

// const port = document.getElementById("port")
// const connectBtn= document.getElementById("connectBtn")
// connectBtn.addEventListener("click", (e) => {
//   const portNo = port.value;
//   const serverUrl= "http://localhost:"+portNo;
//   console.log(serverUrl);
//   // const socket = io(serverUrl)
//   // socket.emit("user-message", message);
// });

// const socket = io(serverUrl || "http://localhost:3000")
// // const socket = io("http://localhost:"+port)
// const sendBtn = document.getElementById("sendBtn")
// const messageInput = document.getElementById("message")
// const allMessages = document.getElementById("messages")
// let socket;

// const port = document.getElementById("port")
// const connectBtn= document.getElementById("connectBtn")
// connectBtn.addEventListener("click", (e) => {
//   const portNo = port.value;
//   const serverUrl= "http://localhost:"+portNo;
//   console.log(serverUrl);
//   // const socket = io(serverUrl)
//   // socket.emit("user-message", message);
// });



// console.log(port)

// socket.on("message", (message) => {
//     const p = document.createElement("p");
//     p.innerText = message;
//     allMessages.appendChild(p);
//   });

//   sendBtn.addEventListener("click", (e) => {
//     const message = messageInput.value;
//     console.log(message);
//     socket.emit("user-message", message);
//   });

// socket.on("connection", (response)=>{
//     console.log(response)
// })



const connectBtn = document.getElementById("connectBtn");
const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("message");
const allMessages = document.getElementById("messages");
let socket;

connectBtn.addEventListener("click", (e) => {
  const portInput = document.getElementById("port");
  const portNo = portInput.value;
  const serverUrl = `http://localhost:${portNo}`;
  console.log(serverUrl);
  
  // Establish the connection
  socket = io(); //serverUrl
  
  // Listen for messages
  socket.on("message", (message) => {
    const p = document.createElement("p");
    p.innerText = message;
    allMessages.appendChild(p);
  });
  
  // Listen for connection event
  socket.on("connect", () => {
    console.log("Connected to server");
  });
});

sendBtn.addEventListener("click", (e) => {
  if (!socket) {
    console.error("Not connected to server yet");
    return;
  }

  const message = messageInput.value;
  console.log(message);
  socket.emit("user-message", message);
});
