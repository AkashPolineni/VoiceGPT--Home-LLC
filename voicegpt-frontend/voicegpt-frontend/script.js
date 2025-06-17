const BACKEND_URL = "https://af6c5457-de96-4547-9995-3fc18f771fb1-00-3tby7lno7xp13.pike.replit.dev/ask";

function addMessage(role, text) {
  const chat = document.getElementById("chatWindow");
  const bubble = document.createElement("div");

  bubble.className =
    role === "user"
      ? "self-end bg-blue-100 text-blue-800 px-4 py-2 rounded-lg max-w-[80%] text-sm ml-auto animate-fade-in"
      : "self-start bg-gray-200 text-gray-800 px-4 py-2 rounded-lg max-w-[80%] text-sm mr-auto animate-fade-in";

  bubble.textContent = text;
  chat.appendChild(bubble);
  chat.scrollTop = chat.scrollHeight;
}

function showError(msg) {
  const box = document.getElementById("errorBox");
  box.textContent = "⚠️ " + msg;
  box.classList.remove("hidden");
  setTimeout(() => box.classList.add("hidden"), 4000);
}

function sendMessage() {
  const input = document.getElementById("textInput");
  const message = input.value.trim();
  if (!message) return;

  addMessage("user", message);
  input.value = "";
  addMessage("bot", "🤖 Thinking...");

  fetch(BACKEND_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: message })
  })
    .then(res => res.json())
    .then(data => {
      const chat = document.getElementById("chatWindow");
      chat.lastChild.remove(); // remove "Thinking..."
      addMessage("bot", data.reply || "🤖 No response from bot.");
      speakText(data.reply);
    })
    .catch(err => {
      const chat = document.getElementById("chatWindow");
      chat.lastChild.remove();
      showError("Bot could not respond. Check API or server.");
    });
}

function speakText(text) {
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
  }
}

function startListening() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) return showError("Speech recognition not supported");

  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";

  recognition.onstart = () => addMessage("bot", "🎙 Listening...");
  recognition.onresult = event => {
    const transcript = event.results[0][0].transcript;
    document.getElementById("textInput").value = transcript;
    sendMessage();
  };
  recognition.onerror = event => showError("Speech error: " + event.error);
  recognition.start();
}
