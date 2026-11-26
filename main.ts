import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = "After years of thermostat wars, I finally earned my degree.";

if (!text.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (text.includes("\n") || text.includes("\r")) {
  throw new Error("entry must be a single line");
}
const length = [...text].length;
if (length < 1 || length > 140) {
  throw new Error(`entry must be 1 to 140 characters, got ${length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(text);
