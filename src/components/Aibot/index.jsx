import React, { Component } from "react";
import "./index.css";

class ChatBot extends Component {
  state = {
    open: false,
    messages: [],
    input: "",
  };

  toggleBot = () => {
    this.setState({ open: !this.state.open });
  };

  sendMessage = async () => {
    const { input, messages } = this.state;

    if (!input.trim()) return;

    // Push user message
    const userMessage = { sender: "user", text: input };
    this.setState({
      messages: [...messages, userMessage],
      input: "",
    });

    try {
      const res = await fetch("http://localhost:5000/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      const botMessage = {
        sender: "bot",
        text: data.reply || "No response",
      };

      this.setState((prevState) => ({
        messages: [...prevState.messages, botMessage],
      }));
    } catch (error) {
      this.setState((prevState) => ({
        messages: [
          ...prevState.messages,
          { sender: "bot", text: "⚠️ Error connecting to AI" },
        ],
      }));
    }
  };

  render() {
    const { open, messages, input } = this.state;

    return (
      <>
        {/* Floating Button */}
        <div className="chatbot-icon" onClick={this.toggleBot}>
          🤖
        </div>

        {/* Chat Window */}
        {open && (
          <div className="chatbot-box">
            <div className="chatbot-header">
              AI Assistant
              <span className="chatbot-close" onClick={this.toggleBot}>
                ✖
              </span>
            </div>

            <div className="chatbot-messages">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={
                    msg.sender === "user"
                      ? "chat-msg user-msg"
                      : "chat-msg bot-msg"
                  }
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="chatbot-input-box">
              <input
                type="text"
                value={input}
                placeholder="Type a message..."
                onChange={(e) => this.setState({ input: e.target.value })}
                onKeyDown={(e) => e.key === "Enter" && this.sendMessage()}
              />
              <button onClick={this.sendMessage}>Send</button>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default ChatBot;
