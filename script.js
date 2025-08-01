function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  const log = document.getElementById("chat-log");
  const msgLine = document.createElement("div");
  msgLine.textContent = "> " + message;
  log.appendChild(msgLine);
  log.scrollTop = log.scrollHeight;

  input.value = "";

  // Optional: Simulate bot response
  const botLine = document.createElement("div");
  botLine.textContent = "< echo: " + message;
  log.appendChild(botLine);
  log.scrollTop = log.scrollHeight;
}