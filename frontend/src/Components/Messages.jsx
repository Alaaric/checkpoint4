import axios from "axios";
import { useContext, useEffect, useState } from "react";
import userContext from "../contexts/userContext";
import DeleteConfirmModal from "./DeleteConfirmModal";

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const { user } = useContext(userContext);

  const getMessages = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/${user.id}/messages`, {
        withCredentials: true,
      })
      .then((res) => setMessages(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div className="messages">
      {messages.map((message) => (
        <div key={message.id}>
          <p>
            de: {message.firstname} {message.lastname}
          </p>
          <p>le: {message.date}</p>
          <p>{message.content}</p>
          <DeleteConfirmModal
            state="messages"
            message={message}
            getMessages={getMessages()}
          />
        </div>
      ))}
    </div>
  );
}
