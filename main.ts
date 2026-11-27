// Round-2 entry for "The Best Meal You Ever Had" (make.fun).
// Writes one sentence (176 chars, within the 1-200 char gate) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "On a wooden boat on the Musi, my uncle grilled ikan patin over coconut husks, and the smoke, the river, and the charred skin made every restaurant since taste like a rehearsal.";

if (SENTENCE.length < 1 || SENTENCE.length > 200) {
  throw new Error(`entry sentence is ${SENTENCE.length} chars, outside the 1-200 gate`);
}
if (!SENTENCE.trim()) {
  throw new Error("entry sentence is only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
