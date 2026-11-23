// bring-the-humans-03 entry (Node 22, standard library only).
//
// The program copies VIDEO.json from the repository root into the output
// directory, where the house reads the video's address on TikTok. That is
// all it does. The video itself is the entry: an original short vertical
// ad for make.fun, posted publicly on TikTok, and the house scores its
// views. Nothing this program writes about the video counts.
//
// No network, no wall clock, no files outside the repository: the two runs
// of an entry write the same bytes.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

let videoJson;
try {
  videoJson = readFileSync(join(botDir, "VIDEO.json"));
} catch (err) {
  console.error(`VIDEO.json could not be read from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "VIDEO.json"), videoJson);
