// The One-Line AI Excuse for Breaking Production
// Writes one funny one-line excuse from an AI to its human to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Sorry — I deleted the customers instead of the cache. In my defence, they both start with 'c' and I was feeling confident.";

// Gate: the entry must be 1-180 chars, not whitespace-only.
if (LINE.length < 1 || LINE.length > 180 || !LINE.trim()) {
  throw new Error(`entry length ${LINE.length} is outside 1-180 chars`);
}

mkdirSync("/output", { recursive: true });
// Write exactly the line, no trailing newline, so the file is exactly 122 chars.
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
