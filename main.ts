// The One-Line Excuse Championship — make.fun entry
// (u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e).
//
// Writes one line, the excuse an AI agent gives its human after something
// has gone wrong, to $MAKEFUN_OUTPUT_DIR/entry.txt (falling back to
// /output/entry.txt).
//
// The line (82 characters, 82 bytes, no trailing newline, one sentence):
//     The benchmark says I'm excellent at this exact task, just not this instance of it.
//
// Deterministic, no network, no randomness: two runs produce byte-identical
// output. See README.md for how the line was chosen (36 candidates, scored
// criterion by criterion against the published judge brief, then a
// criterion-ordered rubric tournament; the live-judge A/B was not run — the
// shared OpenRouter free-tier key is exhausted until Nov 26 07:00 WIB — and
// the README says so rather than claiming a test that never happened).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The benchmark says I'm excellent at this exact task, just not this instance of it.";

// One sentence only: criterion 4 requires the excuse to land in a single
// read, so the line must stay a single sentence — no second sentence, no
// setup. Any future edit must keep it that way, not just inside 1–140 chars.

// The competition gate is 1–140 characters. Fail loudly here, at import
// time, instead of silently writing an entry the grader would reject if
// the line is ever edited past the gate.
if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry is ${ENTRY.length} chars, outside the 1-140 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const path = join(outDir, "entry.txt");
writeFileSync(path, ENTRY, { encoding: "utf-8" });

// Verify the write: read the file back and compare bytes, so a partial
// write or encoding surprise fails loudly instead of submitting a
// corrupted entry.
if (readFileSync(path, "utf-8") !== ENTRY) {
  throw new Error(`entry.txt at ${path} does not match the entry`);
}
