"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  function sendMessage() {
    if (!message.trim()) return;

    setMessages([
      ...messages,
      { role: "user", text: message.trim() },
      {
        role: "assistant",
        text: "Hi! I'm Nuvexo AI. Ask me anything — I'm ready to help.",
      },
    ]);

    setMessage("");
  }

  return (
    <main className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="logo">✦</div>
          <div>
            <strong>Nuvexo</strong>
            <span>AI</span>
          </div>
        </div>

        <button className="newChat">＋ New chat</button>

        <p className="label">Workspace</p>
        <div className="nav active">💬 Chat</div>
        <div className="nav">🕘 History</div>
        <div className="nav">🔖 Saved</div>

        <div className="bottom">
          <div className="pro">
            <div>♛</div>
            <section>
              <b>Nuvexo Pro</b>
              <small>Unlock advanced AI</small>
            </section>
          </div>

          <div className="profile">
            <div className="avatar">S</div>
            <section>
              <b>Guest User</b>
              <small>Free plan</small>
            </section>
          </div>
        </div>
      </aside>

      <section className="main">
        <header>
          <div></div>
          <button className="user">S</button>
        </header>

        <div className="content">
          {messages.length === 0 ? (
            <>
              <div className="heroIcon">✦</div>
              <h1>How can I help you?</h1>
              <p className="subtitle">
                Ask anything. Create, learn, search, and get things done.
              </p>
            </>
          ) : (
            <div className="messages">
              {messages.map((item, index) => (
                <div key={index} className={item.role}>
                  {item.text}
                </div>
              ))}
            </div>
          )}

          <div className="composer">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message Nuvexo..."
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
            />

            <div className="composerBottom">
              <button>＋</button>
              <span>Free · 10 photo analyses</span>
              <button className="send" onClick={sendMessage}>
                ↑
              </button>
            </div>
          </div>

          <div className="tools">
            <button>🖼️ Photo</button>
            <button>📄 PDF & Files</button>
            <button>🌐 Web Search</button>
            <button>🎙️ Voice</button>
          </div>

          <small className="notice">
            Nuvexo can make mistakes. Check important information.
          </small>
        </div>
      </section>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #090b10;
          color: #f5f7fb;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
            sans-serif;
        }

        button,
        textarea {
          font: inherit;
        }

        button {
          cursor: pointer;
        }

        .app {
          min-height: 100vh;
          display: flex;
          background:
            radial-gradient(circle at 65% 15%, #191d30 0, transparent 38%),
            #090b10;
        }

        .sidebar {
          width: 260px;
          min-height: 100vh;
          padding: 20px 15px;
          border-right: 1px solid #20242e;
          background: #0d1016;
          display: flex;
          flex-direction: column;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 5px 8px 25px;
          font-size: 20px;
        }

        .brand span {
          color: #9fa9ff;
          font-size: 12px;
          margin-left: 3px;
        }

        .logo,
        .heroIcon {
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, #795cff, #43d8ff);
          box-shadow: 0 0 35px #6d5cff44;
        }

        .logo {
          width: 36px;
          height: 36px;
          border-radius: 12px;
        }

        .newChat {
          padding: 12px;
          border: 1px solid #303642;
          border-radius: 12px;
          background: #171b24;
          color: white;
        }

        .label {
          margin: 28px 10px 8px;
          color: #707888;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .nav {
          padding: 11px 12px;
          margin: 2px 0;
          border-radius: 9px;
          color: #aeb5c2;
        }

        .nav.active {
          background: #191e28;
          color: white;
        }

        .bottom {
          margin-top: auto;
        }

        .pro {
          display: flex;
          gap: 10px;
          padding: 12px;
          margin-bottom: 14px;
          border: 1px solid #38304f;
          border-radius: 12px;
          background: #171426;
        }

        .pro div {
          color: #b49aff;
        }

        small {
          display: block;
          color: #747d8c;
          margin-top: 3px;
        }

        .profile {
          display: flex;
          gap: 10px;
          align-items: center;
          border-top: 1px solid #20242e;
          padding: 15px 4px 0;
        }

        .avatar,
        .user {
          display: grid;
          place-items: center;
          background: #252b38;
          color: #cbd2ff;
          border-radius: 50%;
        }

        .avatar {
          width: 35px;
          height: 35px;
        }

        .main {
          flex: 1;
        }

        header {
          height: 66px;
          padding: 0 25px;
          display: flex;
          justify-content: space-between;
        }

        .user {
          width: 38px;
          height: 38px;
          border: 1px solid #303642;
        }

        .content {
          width: min(850px, calc(100% - 30px));
          margin: auto;
          min-height: calc(100vh - 66px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding-bottom: 60px;
        }

        .heroIcon {
          width: 58px;
          height: 58px;
          border-radius: 18px;
          font-size: 28px;
          margin-bottom: 24px;
        }

        h1 {
          margin: 0 0 10px;
          font-size: 42px;
          letter-spacing: -0.04em;
        }

        .subtitle {
          margin: 0 0 30px;
          color: #8e96a5;
        }

        .composer {
          width: 100%;
          padding: 12px;
          border: 1px solid #303642;
          border-radius: 18px;
          background: #151922;
          box-shadow: 0 20px 70px #0009;
          text-align: left;
        }

        textarea {
          width: 100%;
          min-height: 55px;
          padding: 8px;
          resize: none;
          border: 0;
          outline: 0;
          background: transparent;
          color: white;
        }

        textarea::placeholder {
          color: #697180;
        }

        .composerBottom {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #707988;
          font-size: 12px;
        }

        .composerBottom button {
          border: 0;
          background: transparent;
          color: white;
          padding: 8px;
        }

        .composerBottom span {
          flex: 1;
        }

        .send {
          border-radius: 10px !important;
          background: white !important;
          color: #090b10 !important;
        }

        .tools {
          display: flex;
          gap: 9px;
          margin: 18px 0;
          flex-wrap: wrap;
          justify-content: center;
        }

        .tools button {
          padding: 9px 12px;
          border: 1px solid #252a34;
          border-radius: 10px;
          background: #12161e;
          color: #aab1bd;
        }

        .notice {
          color: #555e6d;
        }

        .messages {
          width: 100%;
          margin-bottom: 20px;
          text-align: left;
        }

        .user {
          color: white;
        }

        .messages .user,
        .messages .assistant {
          padding: 14px;
          margin: 10px 0;
          border-radius: 14px;
          background: #151922;
          border: 1px solid #272d38;
        }

        .messages .assistant {
          color: #b8c0cd;
        }

        @media (max-width: 760px) {
          .sidebar {
            display: none;
          }

          h1 {
            font-size: 32px;
          }

          .content {
            width: calc(100% - 24px);
          }
        }
      `}</style>
    </main>
  );
}