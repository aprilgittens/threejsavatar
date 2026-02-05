import Anthropic from "@anthropic-ai/sdk";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

async function main() {
  // Get API key from .env file or environment variable
  const apiKey = process.env.ANTHROPIC_API_KEY || process.env.VITE_ANTHROPIC_API_KEY;
  
  if (!apiKey) {
    throw new Error("ANTHROPIC_API_KEY or VITE_ANTHROPIC_API_KEY not found in environment variables");
  }
  
  const anthropic = new Anthropic({
    apiKey: apiKey
  });

  const msg = await anthropic.messages.create({
    model: "claude-sonnet-4-5",
    max_tokens: 1000,
    messages: [
      {
        role: "user",
        content: "What should I search for to find the latest developments in renewable energy?"
      }
    ]
  });
  
  // Extract and log only the text content
  const textContent = msg.content[0];
  if (textContent.type === "text") {
    console.log(textContent.text);
  }
}

main().catch(console.error);