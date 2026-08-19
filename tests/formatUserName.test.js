import { formatUserName } from "../src/formatUserName.js";

describe("formatUserName", () => {
  it("formats a user with a first and last name", () => {
    expect(
      formatUserName({
        firstName: "Jake",
        lastName: "Januszanis",
      })
    ).toBe("Jake Januszanis");
  });

  it("returns only the first name when the last name is missing", () => {
    expect(
      formatUserName({
        firstName: "Jake",
      })
    ).toBe("Jake");
  });

  it("returns Anonymous when both names are missing", () => {
    expect(formatUserName({})).toBe("Anonymous");
  });

  it("trims whitespace from names", () => {
    expect(
      formatUserName({
        firstName: "  Jake ",
        lastName: " Januszanis  ",
      })
    ).toBe("Jake Januszanis");
  });
});