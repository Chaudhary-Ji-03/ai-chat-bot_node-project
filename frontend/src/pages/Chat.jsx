import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import ChatBox from "../components/ChatBox";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="chat-page">
      <header>
        <h1>AI Chatbot</h1>
        <button onClick={handleLogout}>Logout</button>
      </header>
      <ChatBox token={user} />
    </div>
  );
};

export default Chat;
