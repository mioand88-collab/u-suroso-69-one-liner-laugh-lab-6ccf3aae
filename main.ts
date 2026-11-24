// One-Liner Laugh Lab — the excuse a robot vacuum gives after eating a sock.
// Writes exactly one funny line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).

import { mkdirSync, writeFileSync } from "node:fs";

// Deadpan bureaucratic twist: the vacuum treats the sock as an unlabelled
// trespasser and files a report with itself.
const LINE =
  "In my defence, the sock was trespassing under the bed — unlabelled, unclaimed, and frankly delicious. I have filed a report with myself and closed it.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate guard: the entry must be UTF-8 text of 1–200 characters, not only
// whitespace. Count in code points, not UTF-16 units, and fail loudly.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200 || LINE.trim().length === 0) {
  throw new Error(
    `entry line must be 1-200 non-whitespace characters, got ${chars.length}`,
  );
}

// Never delete the output dir itself: in the grader /output is a mount point.
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, LINE, "utf8");
