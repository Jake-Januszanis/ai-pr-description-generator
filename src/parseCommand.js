export function parseCommand(comment) {
  const normalizedComment = comment.trim().toLowerCase();

  if (normalizedComment === "/ai generate") {
    return { command: "generate" };
  }

  if (normalizedComment === "/ai update") {
    return { command: "update" };
  }

  return { command: null };
}