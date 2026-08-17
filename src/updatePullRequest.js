import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

export async function updatePullRequest(owner, repo, pullNumber, body) {
  await octokit.rest.pulls.update({
    owner,
    repo,
    pull_number: pullNumber,
    body
  });
}