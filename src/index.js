import "dotenv/config";
import { getPullRequest } from "./getPullRequest.js";
import { generateDescription } from "./descriptionGenerator.js";
import { formatDescription } from "./formatDescription.js";

const pullRequest = await getPullRequest(
  process.env.GITHUB_OWNER,
  process.env.GITHUB_REPO,
  Number(process.env.GITHUB_PR_NUMBER)
);

const description = await generateDescription(pullRequest);
const formattedDescription = formatDescription(description);

console.log(formattedDescription);