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