import { render } from "ink";
import { ReceptionPanel } from "./reception-panel.js";
import { SimpleTerminal } from "./simple-terminal.js";

const checkInteractiveSupport = (): boolean => {
  try {
    return process.stdin.isTTY && process.stdout.isTTY;
  } catch {
    return false;
  }
};

const isInteractiveSupported = checkInteractiveSupport();

if (isInteractiveSupported) {
  render(<ReceptionPanel />);
} else {
  SimpleTerminal();
}
