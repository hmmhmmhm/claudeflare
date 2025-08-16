import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { jsxRenderer } from "hono/jsx-renderer";
import { Layout } from "./components/layout.js";

const app = new Hono();

app.use("*", jsxRenderer());

app.get("/", (c) => {
  // @ts-ignore
  return c.render(<Layout />);
});

export function startWebServer(port: number = 3000) {
  console.log(`🚀 Starting ClaudeFlare web server on port ${port}`);
  console.log(`📱 Open http://localhost:${port} in your browser`);
  console.log(`🌐 Or access from your phone using your computer's IP address`);

  serve({
    fetch: app.fetch,
    port,
  });
}
