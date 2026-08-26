import { formatDescription } from "../src/formatDescription.js";

describe("formatDescription", () => {
  it("formats a PR description as Markdown", () => {
    const description = {
      summary: "Added user authentication.",
      changes: [
        "Added authentication middleware.",
        "Added login endpoint."
      ],
      testing: [
        "Added authentication tests."
      ]
    };

    const result = formatDescription(description);

    expect(result).toBe(`## Summary

Added user authentication.

## Changes

- Added authentication middleware.
- Added login endpoint.

## Testing

- Added authentication tests.
`);
  });
});

it("omits the Changes section when there are no changes", () => {
  const description = {
    summary: "Add a new feature.",
    changes: [],
    testing: ["Added unit tests."],
  };

  const result = formatDescription(description);

  expect(result).not.toContain("## Changes");
  expect(result).toContain("## Testing");
});

it("omits the Testing section when there are no tests", () => {
  const description = {
    summary: "Add a new feature.",
    changes: ["Added the new feature."],
    testing: [],
  };

  const result = formatDescription(description);

  expect(result).toContain("## Changes");
  expect(result).not.toContain("## Testing");
});

it("omits Changes and Testing when both are empty", () => {
  const description = {
    summary: "Update the README.",
    changes: [],
    testing: [],
  };

  const result = formatDescription(description);

  expect(result).not.toContain("## Changes");
  expect(result).not.toContain("## Testing");
  expect(result).toContain("## Summary");
  expect(result).toContain("Update the README.");
});