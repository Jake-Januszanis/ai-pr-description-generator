export function parseCommand(comment) {
  const lines = comment.trim().split("\n");
  const commandLine = lines[0].trim().toLowerCase();
  const instructions = lines.slice(1).join("\n").trim();

  console.log("Raw comment:", comment);
  console.log("Command line:", commandLine);
  console.log("Instructions:", instructions);

  if (commandLine === "/ai generate") {
    return { command: "generate" };
  }

  if (commandLine === "/ai update") {
    return { command: "update", instructions };
  }

  return { command: null };
}