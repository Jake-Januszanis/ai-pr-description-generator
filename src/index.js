import "dotenv/config";
import { parseCommand } from "./parseCommand.js";
import { getPullRequest } from "./getPullRequest.js";
import { generateDescription } from "./descriptionGenerator.js";
import { formatDescription } from "./formatDescription.js";
import { updatePullRequest } from "./updatePullRequest.js";

const comment = process.env.COMMENT_BODY;
const { command } = parseCommand(comment);

if (!command) {
  console.log("No recognized AI command.");
  process.exit(0);
}

console.log(`Recognized command: ${command}`);

if (command === "generate") {
  const pullRequest = await getPullRequest(
    process.env.GITHUB_OWNER,
    process.env.GITHUB_REPO,
    Number(process.env.GITHUB_PR_NUMBER)
  );

  const description = await generateDescription(pullRequest);
  const formattedDescription = formatDescription(description);

  await updatePullRequest(
    process.env.GITHUB_OWNER,
    process.env.GITHUB_REPO,
    Number(process.env.GITHUB_PR_NUMBER),
    formattedDescription
  );

  console.log("PR description generated and updated.");
}