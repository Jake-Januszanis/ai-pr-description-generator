export function buildDescriptionPrompt(pr) {
  return `
    You are generating a GitHub pull request description.

    Based only on the information provided below, create a concise and accurate
    description of the changes.

    PR Title:
    ${pr.title}

    Commits:
    ${pr.commits.map(commit => `- ${commit}`).join("\n")}

    Diff:
    ${pr.diff}

    Create a concise and accurate PR description based on the provided information.

    Do not invent information that is not supported by the provided context.
    `;
}