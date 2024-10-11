import React, { useState } from "react";
import "./styles.css";

const Chatbox = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isAILoading, setIsAILoading] = useState(false);

  const toggleChatbox = () => {
    setIsVisible(!isVisible);
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const addMessage = (text, sender) => {
    const now = new Date();
    const timestamp = `${now.getHours()}:${now
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
    setMessages((prev) => [...prev, { text, sender, time: timestamp }]);
  };

  const handleSendClick = () => {
    if (!userInput.trim()) return;
    addMessage(userInput, "user");
    sendMessage(userInput);
    setUserInput("");
  };

  const sendMessage = async (userInput) => {
    setIsAILoading(true);

    try {
      const response = await fetch("http://localhost:3001/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput }),
      });
      const data = await response.json();
      addMessage(data.message, "ai");
    } catch (error) {
      console.error("Error:", error);
    }

    setIsAILoading(false);
  };

  return (
    <div>
      <div
        className={`chat-icon ${isVisible ? "hidden" : ""}`}
        onClick={toggleChatbox}
      >
        <button className="chatBtn">
          <svg
            height="1.6em"
            fill="white"
            viewBox="0 0 1000 1000"
            y="0px"
            x="0px"
            version="1.1"
          >
            <path d="M881.1,720.5H434.7L173.3,941V720.5h-54.4C58.8,720.5,10,671.1,10,610.2v-441C10,108.4,58.8,59,118.9,59h762.2C941.2,59,990,108.4,990,169.3v441C990,671.1,941.2,720.5,881.1,720.5L881.1,720.5z M935.6,169.3c0-30.4-24.4-55.2-54.5-55.2H118.9c-30.1,0-54.5,24.7-54.5,55.2v441c0,30.4,24.4,55.1,54.5,55.1h54.4h54.4v110.3l163.3-110.2H500h381.1c30.1,0,54.5-24.7,54.5-55.1V169.3L935.6,169.3z M717.8,444.8c-30.1,0-54.4-24.7-54.4-55.1c0-30.4,24.3-55.2,54.4-55.2c30.1,0,54.5,24.7,54.5,55.2C772.2,420.2,747.8,444.8,717.8,444.8L717.8,444.8z M500,444.8c-30.1,0-54.4-24.7-54.4-55.1c0-30.4,24.3-55.2,54.4-55.2c30.1,0,54.4,24.7,54.4,55.2C554.4,420.2,530.1,444.8,500,444.8L500,444.8z M282.2,444.8c-30.1,0-54.5-24.7-54.5-55.1c0-30.4,24.4-55.2,54.5-55.2c30.1,0,54.4,24.7,54.4,55.2C336.7,420.2,312.3,444.8,282.2,444.8L282.2,444.8z"></path>
          </svg>
        </button>
      </div>
      {isVisible && (
        <div className={`chat-card ${isVisible ? "open" : ""}`}>
          <div className="chat-header">
            DOC
            <button className="exit-button" onClick={toggleChatbox}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>
          </div>
          <div
            className={`chat-window ${isAILoading ? "loading-opacity" : ""}`}
          >
            <ul className="message-list">
              <li className="ai-message">
                Hello! I am Doc, your online medical assistant. How can I help
                you today?
              </li>
              {messages.map((message, index) => (
                <li key={index} className={`${message.sender}-message`}>
                  {message.text}
                  <span className="message-timestamp">{message.time}</span>
                </li>
              ))}
              {isAILoading && (
                <div className="loading-indicator">
                  <svg width="64px" height="48px">
                    <polyline
                      points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
                      id="back"
                    ></polyline>
                    <polyline
                      points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
                      id="front"
                    ></polyline>
                  </svg>
                </div>
              )}{" "}
            </ul>
          </div>
          <div className="chat-input">
            <input
              type="text"
              className="message-input"
              placeholder="Type your message here..."
              value={userInput}
              onChange={handleInputChange}
            />
            <button className="send-button" onClick={handleSendClick}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
