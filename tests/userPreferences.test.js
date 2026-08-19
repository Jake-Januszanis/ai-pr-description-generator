import { getUserPreferences } from "../src/userPreferences.js";

describe("getUserPreferences", () => {
  it("returns defaults when preferences are missing", () => {
    expect(getUserPreferences({})).toEqual({
      theme: "light",
      notifications: true,
      language: "en",
    });
  });

  it("preserves existing preferences", () => {
    expect(
      getUserPreferences({
        theme: "dark",
        notifications: false,
        language: "es",
      })
    ).toEqual({
      theme: "dark",
      notifications: false,
      language: "es",
    });
  });
});