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

  it("parses update command without instructions", () => {
    expect(parseCommand("/ai update")).toEqual({
      command: "update",
      instructions: ""
    });
  });

  it("parses update command with instructions", () => {
    expect(
      parseCommand(
        "/ai update\n\n- Add more detail about authentication.\n- Mention the new tests."
      )
    ).toEqual({
      command: "update",
      instructions:
        "- Add more detail about authentication.\n- Mention the new tests."
      });
  });

  it("preserves the casing of update instructions", () => {
    expect(
      parseCommand("/ai update\n\nAdd more detail about Authentication.")
    ).toEqual({
      command: "update",
      instructions: "Add more detail about Authentication."
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