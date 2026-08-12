import "dotenv/config";
import { samplePR } from "../tests/fixtures/samplePR.js";
import { generateDescription } from "./descriptionGenerator.js";

const description = await generateDescription(samplePR);

console.log(description);
