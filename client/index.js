const socket = io("http://localhost:3000")
const sendBtn = document.getElementById("sendBtn")
const messageInput = document.getElementById("message")
const allMessages = document.getElementById("messages")

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

socket.on("connection", (response)=>{
    console.log(response)
})