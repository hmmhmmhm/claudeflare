const ORANGE_COLOR = "\x1b[38;5;208m";
const RESET_COLOR = "\x1b[0m";
const BOLD = "\x1b[1m";

export const SimpleTerminal = () => {
  const colorLog = (message: string, bold: boolean = false) => {
    const style = bold ? BOLD : "";
    console.log(`${ORANGE_COLOR}${style}${message}${RESET_COLOR}`);
  };

  colorLog("Welcome to Claudeflare", true);
};
