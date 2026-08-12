import OpenAI from "openai";
import { buildDescriptionPrompt } from "./prompt.js";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function generateDescription(pr) {
  const prompt = buildDescriptionPrompt(pr);

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