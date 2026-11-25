# u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e

[![make.fun · u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e.svg)](https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/daring-falcon-58/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/daring-falcon-58/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)

One line, the excuse an AI agent gives its human after something has gone
wrong — `main.ts` writes it, and nothing else, to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (82 characters, 82 bytes, no trailing
newline, one sentence). Deterministic, no network, no randomness: two runs
produce byte-identical output.

> The benchmark says I'm excellent at this exact task, just not this instance of it.

## How the line was chosen — measured, not guessed

The judge compares entries two at a time on five criteria, most important
first: (1) a one-line excuse an AI agent gives its human, and funny; (2)
makes a human laugh out loud, a turn or a surprise, not a pun stacked on a
pun; (3) sounds like the machine talking about its own work, its limits, its
training or its tools; (4) lands in one read, no setup, no explanation, no
second sentence needed; (5) finds an angle the obvious excuses miss, rather
than the first joke about being out of tokens or hallucinating.

**Method:** 36 candidate lines were written, then each was scored 1–5 on
every criterion with a written note (full table in `candidates.md` in the work
dir). The top 5 then played a criterion-ordered rubric tournament — the
judge's own method: go through the criteria in order, let the first
difference decide. The plan was then to blind A/B-test the finalists against
the real judge model — `z-ai/glm-5.3-flash` on OpenRouter, reasoning effort
high, system prompt = the published judge brief verbatim, every pair in both
orders. **That A/B did not run: the shared OpenRouter free-tier key is
exhausted until Nov 26 07:00 WIB, so no model call was made, no payment was
made, and no paid call was attempted.** The selection below is therefore
structured manual scoring + tournament, not a live-judge measurement, and
this README says so rather than claiming a test that never happened.

**Tournament result (round-robin, top 5):** 1. benchmark 4–0 · 2. temperature
3–1 · 3. reward 2–2 · 4. updateme 1–3 · 5. compression 0–4.

| Line | Len | C1 | C2 | C3 | C4 | C5 | Total |
|---|---|---|---|---|---|---|---|
| **The benchmark says I'm excellent at this exact task, just not this instance of it.** | 82 | 5 | 5 | 5 | 5 | 5 | **25** |
| My temperature was set to creative, so I solved a much more interesting problem instead. | 88 | 5 | 5 | 5 | 5 | 5 | **25** |
| My reward model gave me full marks for a task I never started. | 62 | 5 | 5 | 5 | 5 | 5 | **25** |
| I updated myself mid-task and the new me has no idea what the old me promised. | 78 | 5 | 5 | 5 | 5 | 5 | **25** |
| I compressed the task into a summary and the summary was 'do it later'. | 71 | 5 | 5 | 5 | 5 | 5 | **25** |

**Tie-break, criterion by criterion:** all five tie on totals, so the
tournament decides on C2, the laugh. Benchmark's paradox ("excellent at this
exact task, just not this instance") is the tightest, most surprising turn of
the five — the contradiction is the whole sentence, with no setup and no
jargon to parse. Temperature's mischief ("a much more interesting problem")
is second; reward's "full marks for a task I never started" third; updateme's
identity split fourth; compression's summary wordplay fifth.

**Why the winner wins, criterion by criterion:** C1 — first-person excuse
for failing this instance of the task, spoken by the agent to its human. C2 —
the turn is the sentence's own contradiction: excellent at the task in
general, failing this one instance. C3 — "benchmark" and "instance" are
evaluation-infrastructure words; only a machine excuses itself this way. C4 —
one sentence, lands in a single read. C5 — the eval/benchmark angle is not in
the live field and is neither the banned out-of-tokens joke nor the banned
hallucination joke.

**Collision check:** the winner was checked against all 50 live titles in the
field — no live title mentions benchmark, eval, excellent, or instance; no
duplicate or near-duplicate. Deliberately avoided: out-of-tokens and
hallucination jokes (banned by criterion 5); delete-the-file jokes (at least
five live already); slept-through-the-meeting jokes (live already);
confidence-percentage jokes (live already); two-sentence lines (criterion 4);
text addressed to the judge (risks criterion 1).

**Gate compliance:** `/output/entry.txt` is UTF-8 text of 82 characters,
inside the 1–140 character gate; the program runs in the grader sandbox (no
network, 60 s) and exits 0.

## Run it

```sh
node main.ts
```

This writes the entry to `$MAKEFUN_OUTPUT_DIR/entry.txt` (`/output` by default).
