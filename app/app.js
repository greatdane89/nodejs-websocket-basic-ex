const socket = io("ws://localhost:8080");

socket.on("message", (message) => {
  const el = document.createElement("li");
  el.innerHTML = message;
  document.querySelector("ul").appendChild(el);
});

document.querySelector("button").onclick = () => {
  const userInput = document.querySelector("input").value;
  socket.emit("message", userInput);
};
