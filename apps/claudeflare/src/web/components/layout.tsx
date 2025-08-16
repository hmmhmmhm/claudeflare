import { TerminalApp } from "./terminal-app.js";

interface LayoutProps {
  title?: string;
}

export const Layout = ({ title = "ClaudeFlare Terminal" }: LayoutProps) => (
  <html lang="ko">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <style>
        {`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            background-color: #0d1117;
            color: #c9d1d9;
            font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
            height: 100vh;
            overflow: hidden;
        }
        
        @media (max-width: 768px) {
            body {
                font-size: 12px;
            }
        }
        `}
      </style>
    </head>
    <body>
      <TerminalApp />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener('DOMContentLoaded', function() {
            let history = [];
            const input = document.querySelector('.terminal-input');
            const content = document.querySelector('.terminal-content');
            
            if (!input || !content) return;
            
            // 포커스 관리
            document.addEventListener('click', () => {
              input.focus();
            });
            
            // 초기 포커스
            setTimeout(() => input.focus(), 100);
            
            // 키보드 이벤트
            input.addEventListener('keydown', function(e) {
              if (e.key === 'Enter' && input.value.trim()) {
                const command = input.value.trim();
                let output = '';
                
                switch(command.toLowerCase()) {
                  case 'help':
                    output = 'Available commands:<br>• help - Show this help<br>• clear - Clear terminal<br>• status - Show server status<br>• version - Show version';
                    break;
                  case 'clear':
                    const historyContainer = document.querySelector('.history-container');
                    if (historyContainer) historyContainer.innerHTML = '';
                    input.value = '';
                    return;
                  case 'status':
                    output = '✅ Server: Running<br>🌐 Port: ' + location.port + '<br>📡 Connected devices: 1';
                    break;
                  case 'version':
                    output = 'ClaudeFlare v0.0.3';
                    break;
                  default:
                    output = 'Command not found: ' + command + '<br>Type "help" for available commands.';
                }
                
                // 히스토리에 추가
                const historyContainer = document.querySelector('.history-container');
                if (historyContainer) {
                  const historyItem = document.createElement('div');
                  historyItem.innerHTML = 
                    '<div class="prompt-line"><span class="prompt">claudeflare$</span> <span>' + command + '</span></div>' +
                    '<div class="output">' + output + '</div>';
                  historyContainer.appendChild(historyItem);
                }
                
                input.value = '';
                content.scrollTop = content.scrollHeight;
              }
            });
          });
        `,
        }}
      />
    </body>
  </html>
);
