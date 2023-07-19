import axios from "axios";
import { useContext, useEffect, useState } from "react";
import userContext from "../contexts/userContext";

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const { user } = useContext(userContext);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/${user.id}/messages`)
      .then((res) => setMessages(res.data));
  }, []);
  console.log(messages);
  return (
    <div className="messages">
      {messages.map((message) => (
        <div key={message.id}>
          <p>
            de: {message.firstname} {message.lastname}
          </p>
          <p>le: {message.date}</p>
          <p>{message.content}</p>
        </div>
      ))}
    </div>
  );
}
