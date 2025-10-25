async function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  const userMessage = input.value.trim();
  if (!userMessage) return;

  chatBox.innerHTML += `<p><b>Bạn:</b> ${userMessage}</p>`;
  input.value = "";

  const res = await fetch(`/api/chat?message=${encodeURIComponent(userMessage)}`);
  const data = await res.json();

  chatBox.innerHTML += `<p><b>AI:</b> ${data.reply}</p>`;
  chatBox.scrollTop = chatBox.scrollHeight;
}
