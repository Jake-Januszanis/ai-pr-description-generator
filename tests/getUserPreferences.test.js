import { getUserPreferences } from "./userPreferences.js";

describe("getUserPreferences", () => {
  it("uses default preferences when values are missing", () => {
    const preferences = getUserPreferences({});

    expect(preferences).toEqual({
      theme: "light",
      notifications: true,
      language: "en"
    });
  });

  it("preserves existing user preferences", () => {
    const preferences = getUserPreferences({
      theme: "dark",
      notifications: false,
      language: "es"
    });

    expect(preferences).toEqual({
      theme: "dark",
      notifications: false,
      language: "es"
    });
  });
});