
export function formatDescription(description) {
  return `## Summary

${description.summary}

${description.changes?.length
  ? `## Changes

${description.changes.map(change => `- ${change}`).join("\n")}`
  : ""}

${description.testing?.length
  ? `## Testing

${description.testing.map(test => `- ${test}`).join("\n")}`
  : ""}
`;
}