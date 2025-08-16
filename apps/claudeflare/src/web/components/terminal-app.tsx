export function TerminalApp() {
  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <div className="terminal-dots">
          <div className="dot red"></div>
          <div className="dot yellow"></div>
          <div className="dot green"></div>
        </div>
        <div className="terminal-title">claudeflare@web-terminal</div>
      </div>

      <div className="terminal-content">
        <div className="welcome-text">
          Welcome to ClaudeFlare Web Terminal 🚀
        </div>

        <div className="prompt-line">
          <span className="prompt">$</span>
          <span className="command">npx claudeflare</span>
        </div>
        <div className="output">Starting ClaudeFlare web interface...</div>

        <div className="info-text">
          🌐 Web server is running!
          <br />
          📱 You can now access Claude from your smartphone
          <br />
          💬 Terminal integration coming soon...
        </div>

        {/* Command History Container */}
        <div className="history-container"></div>

        {/* Input Line */}
        <div className="input-line">
          <span className="current-prompt">claudeflare$</span>
          <input
            type="text"
            className="terminal-input"
            placeholder="Type a command..."
          />
          <div className="cursor"></div>
        </div>
      </div>

      <style>{`
        .terminal-container {
            height: 100vh;
            display: flex;
            flex-direction: column;
            padding: 20px;
        }
        
        .terminal-header {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            padding: 10px 15px;
            background-color: #21262d;
            border-radius: 8px;
        }
        
        .terminal-dots {
            display: flex;
            gap: 8px;
            margin-right: 15px;
        }
        
        .dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
        }
        
        .dot.red { background-color: #ff5f56; }
        .dot.yellow { background-color: #ffbd2e; }
        .dot.green { background-color: #27ca3f; }
        
        .terminal-title {
            font-size: 14px;
            font-weight: 500;
        }
        
        .terminal-content {
            flex: 1;
            background-color: #161b22;
            border-radius: 8px;
            padding: 20px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
        }
        
        .welcome-text {
            color: #58a6ff;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 20px;
        }
        
        .prompt-line {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
        }
        
        .prompt, .current-prompt {
            color: #7c3aed;
            margin-right: 10px;
        }
        
        .command {
            color: #f85149;
        }
        
        .output {
            margin-left: 20px;
            margin-bottom: 15px;
            color: #8b949e;
        }
        
        .input-line {
            display: flex;
            align-items: center;
            margin-top: auto;
        }
        
        .terminal-input {
            background: transparent;
            border: none;
            color: #c9d1d9;
            font-family: inherit;
            font-size: 14px;
            outline: none;
            flex: 1;
        }
        
        .cursor {
            width: 10px;
            height: 18px;
            background-color: #c9d1d9;
            margin-left: 5px;
            animation: blink 1s infinite;
        }
        
        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
        
        .info-text {
            color: #f0883e;
            margin-bottom: 15px;
        }
        
        .history-container {
            flex: 1;
        }
        
        @media (max-width: 768px) {
            .terminal-container {
                padding: 10px;
            }
            
            .terminal-content {
                font-size: 12px;
            }
        }
      `}</style>
    </div>
  );
}
