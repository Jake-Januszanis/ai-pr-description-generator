import OpenAI from "openai";
import { buildGeneratePrompt, buildUpdatePrompt } from "./prompt.js";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function generateDescription(pr, options) {
  let prompt;

  if (options.mode === "generate") {
    prompt = buildGeneratePrompt(pr);
  } else if (options.mode === "update") {
    prompt = buildUpdatePrompt(pr, options.instructions);
  }

  const response = await client.responses.create({
    model: "gpt-5-mini",
    input: prompt,
    text: {
    format: {
      type: "json_schema",
      name: "pr_description",
      strict: true,
      schema: {
        type: "object",
        properties: {
          summary: {
            type: "string"
          },
          changes: {
            type: "array",
            items: {
              type: "string"
            }
          },
          testing: {
            type: "array",
            items: {
              type: "string"
            }
          }
        },
      required: ["summary", "changes", "testing"],
      additionalProperties: false
      }
    }
    }
  });

  return JSON.parse(response.output_text);
}