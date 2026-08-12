

export function formatDescription(description) {
  return `## Summary

${description.summary}

## Changes

${description.changes.map(change => `- ${change}`).join("\n")}

## Testing

${description.testing.map(test => `- ${test}`).join("\n")}
`;
}