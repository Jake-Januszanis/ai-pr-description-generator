import "dotenv/config";
import { parseCommand } from "./parseCommand.js";

const comment = process.env.COMMENT_BODY;

const { command } = parseCommand(comment);

if (!command) {
  console.log("No recognized AI command.");
  process.exit(0);
}

console.log(`Recognized command: ${command}`);