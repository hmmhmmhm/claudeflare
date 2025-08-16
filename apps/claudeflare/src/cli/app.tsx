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

// 웹서버를 런타임에 동적 로딩
setTimeout(() => {
  import("../web/web-app.js").catch(() => {
    console.log("웹서버 모듈을 로드할 수 없습니다.");
  });
}, 0);

const isInteractiveSupported = checkInteractiveSupport();

if (isInteractiveSupported) {
  render(<ReceptionPanel />);
} else {
  SimpleTerminal();
}
