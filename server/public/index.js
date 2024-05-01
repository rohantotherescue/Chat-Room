const socket = io();
      const sendBtn = document.getElementById("sendBtn");
      const messageInput = document.getElementById("message");
      const allMessages = document.getElementById("messages");

      socket.on("message", (message) => {
        const p = document.createElement("p");
        p.innerText = message;
        allMessages.appendChild(p);
      });

      sendBtn.addEventListener("click", (e) => {
        const message = messageInput.value;
        console.log(message);
        socket.emit("user-message", message);
      });



//when you have a button to connect

// const connectBtn = document.getElementById("connectBtn");
// const sendBtn = document.getElementById("sendBtn");
// const messageInput = document.getElementById("message");
// const allMessages = document.getElementById("messages");
// let socket;

// connectBtn.addEventListener("click", (e) => {
//   const portInput = document.getElementById("port");
//   const portNo = portInput.value;
//   const serverUrl = `http://localhost:${portNo}`;
//   console.log(serverUrl);
  
//   // Establish the connection
//   socket = io(); //serverUrl
  
//   // Listen for messages
//   socket.on("message", (message) => {
//     const p = document.createElement("p");
//     p.innerText = message;
//     allMessages.appendChild(p);
//   });
  
//   // Listen for connection event
//   socket.on("connect", () => {
//     console.log("Connected to server");
//   });
// });

// sendBtn.addEventListener("click", (e) => {
//   if (!socket) {
//     console.error("Not connected to server yet");
//     return;
//   }

//   const message = messageInput.value;
//   console.log(message);
//   socket.emit("user-message", message);
// });
