import { parseCommand } from "../src/parseCommand.js";

describe("parseCommand", () => {
  it("parses the generate command", () => {
    expect(parseCommand("/ai generate")).toEqual({
      command: "generate"
    });
  });
  
  it("handles surrounding whitespace and capitalization", () => {
    expect(parseCommand("  /AI GENERATE  ")).toEqual({
      command: "generate"
    });
  });

  it("parses the update command", () => {
    expect(parseCommand("/ai update")).toEqual({
      command: "update"
    });
  });

  it("ignores non-AI comments", () => {
    expect(parseCommand("Looks good to me!")).toEqual({
      command: null
    });
  });

  it("ignores unsupported AI commands", () => {
    expect(parseCommand("/ai review")).toEqual({
      command: null
    });
  });

  it("ignores commands that start with /ai but aren't supported", () => {
    expect(parseCommand("/ai needs to generate")).toEqual({
      command: null
    });
  });
});