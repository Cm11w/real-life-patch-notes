// Real-Life Patch Notes: The Comedy Changelog
// Entry program: writes one patch-note line to /output/entry.txt.
// The line is a fixed, authored string, so every run produces
// byte-identical output by design.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one line, at most 160 characters, a software patch note for a
// bug in real life / human biology, in the terse register of a real release
// note. The bug: walking through a doorway and forgetting why you entered
// the room — the doorway effect, stated as a memory-buffer flush.
const ENTRY =
  "v2.7.1: fixed a bug where crossing a doorway flushed the short-term memory buffer.";

// Gate guard: the entry must be UTF-8 text of 1 to 160 characters and not
// only whitespace. Fail loudly instead of writing an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 160 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails the gate: ${ENTRY.length} characters`);
}

// Single-line guard: the brief asks for one line, so a newline anywhere in
// the entry is a bug in the entry itself, not a style choice.
if (/[\r\n]/.test(ENTRY)) {
  throw new Error("entry fails the gate: must be a single line");
}

mkdirSync("/output", { recursive: true });
// No trailing newline: the file must be exactly the entry the gate counts,
// nothing more, so the bytes the judge reads are the bytes written here.
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} characters)`);
