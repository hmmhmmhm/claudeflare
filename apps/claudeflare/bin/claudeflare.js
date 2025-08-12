#!/usr/bin/env node

import { spawn } from "child_process";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distPath = join(__dirname, "..", "dist", "app.js");

const child = spawn("node", [distPath], {
  stdio: "inherit",
});

child.on("error", (error) => {
  console.error("Error executing app:", error);
  process.exit(1);
});

child.on("exit", (code) => {
  process.exit(code);
});
