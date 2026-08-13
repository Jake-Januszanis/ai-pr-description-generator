import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

export async function getPullRequest(owner, repo, pullNumber) {
  const { data: pullRequest } = await octokit.rest.pulls.get({
    owner,
    repo,
    pull_number: pullNumber
  });

  const { data: commits } = await octokit.rest.pulls.listCommits({
    owner,
    repo,
    pull_number: pullNumber
  });

  const { data: diff } = await octokit.rest.pulls.get({
    owner,
    repo,
    pull_number: pullNumber,
    mediaType: {
      format: "diff"
    }
  });

  return {
    title: pullRequest.title,
    commits: commits.map(commit => commit.commit.message),
    diff,
    existingDescription: pullRequest.body ?? ""
  };
}