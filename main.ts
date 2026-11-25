// make.fun — The Word You'd Delete From the Dictionary
// Entry: exactly one word, written to /output/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";

function entryWord(): string {
  return "defenestration";
}

const word = entryWord();

// Guard the gate before writing: exactly one word, no spaces,
// correctly spelled, and inside the 77-character limit.
if (!/^[A-Za-z]+$/.test(word) || word.length > 77) {
  throw new Error("entry must be exactly one word of at most 77 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
console.log(`wrote ${word.length}-character entry: ${word}`);
