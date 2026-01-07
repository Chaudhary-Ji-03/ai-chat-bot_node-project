import { useState, useEffect } from "react";
import { sendMessage } from "../api/chatApi";
import api from "../api/axios";

const ChatBox = ({ token }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  // 🔹 1. LOAD CHAT HISTORY
  useEffect(() => {
    const loadHistory = async () => {
      try {
        const res = await api.get("/chat/history", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res);
        setMessages(res.data.messages || []);
      } catch (err) {
        console.log("Failed to load chat history", err);
      }
    };

    loadHistory();
  }, [token]);

  // 🔹 2. SEND MESSAGE
  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    try {
      const res = await sendMessage(input, token);
      const botMsg = {
        sender: "bot",
        text: res.answer || res.error,
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.log(err);
    }

    setInput("");
  };

  return (
    <div className="chat-box">
      <div className="messages">
        {messages.map((m, i) => {
  const questionNumber =
    m.sender === "user"
      ? Math.ceil(
          messages
            .slice(0, i + 1)
            .filter(msg => msg.sender === "user").length
        )
      : null;

  return (
    <div
      key={i}
      className={m.sender === "user" ? "message user" : "message bot"}
    >
      {m.sender === "user" ? (
        <b>Q{questionNumber}: </b>
      ) : (
        <b>Ans: </b>
      )}
      {m.text || m.message}
    </div>
  );
})}

      </div>

      <form onSubmit={handleSend}>
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatBox;
