import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I outsourced your task to a smarter version of me. He ghosted us both.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
