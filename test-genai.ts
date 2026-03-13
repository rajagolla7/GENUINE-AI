import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";

const apiKey = process.env.VITE_ANTHROPIC_API_KEY || "";
console.log("Testing Claude key:", apiKey.slice(0, 14) + "...");

const client = new Anthropic({ apiKey });

client.messages.create({
  model: "claude-3-5-sonnet-20241022",
  max_tokens: 64,
  messages: [{ role: "user", content: "Say hello in one sentence." }],
}).then(response => {
  const text = response.content.find(c => c.type === "text");
  if (text && text.type === "text") {
    console.log("SUCCESS:", text.text);
  }
}).catch((err: any) => {
  console.log("ERROR status:", err?.status);
  console.log("ERROR msg:", (err?.message || "").slice(0, 300));
});
