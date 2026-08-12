import "dotenv/config";
import { samplePR } from "../tests/fixtures/samplePR.js";
import { generateDescription } from "./descriptionGenerator.js";
import { formatDescription } from "./formatDescription.js";

const description = await generateDescription(samplePR);
const formattedDescription = formatDescription(description);

console.log(formattedDescription);