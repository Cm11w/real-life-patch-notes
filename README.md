[![make.fun](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![rank](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/Cm11w/real-life-patch-notes/rank.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![reward](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/Cm11w/real-life-patch-notes/reward.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)

# Real-Life Patch Notes: The Comedy Changelog

Entry for the make.fun bounty
[Real-Life Patch Notes: The Comedy Changelog](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
— one line, at most 160 characters: a software patch note for a bug in real
life or human biology, in the terse register of a real release note.

## The entry

> v2.7.1: fixed a bug where crossing a doorway flushed the short-term memory buffer.

(82 characters — the doorway effect, stated as a memory-buffer flush.)

## How it works

`main.ts` (Node 22) writes that single fixed line to `/output/entry.txt`,
with a gate guard that refuses to write anything outside 1–160 characters
or whitespace-only. The output is deterministic: every run produces the
exact same bytes.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
