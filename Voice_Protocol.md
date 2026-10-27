# Research Writing Voice Protocol

**Kaushlendra Kumar | Version 3.0.1 | 23 October 2026**

For research papers, proceedings, technical notes and, with the qualifications below, research proposals. This is the current working protocol. It supersedes version 2.0 of 14 October 2026. The author's current instructions and edits control the task.

## 1. Read this before writing

Read the current manuscript, the requested editing scope and a relevant author-edited passage before changing prose. Understand what the calculation is trying to establish. Then write the argument so that the reason for each choice, the calculation and its consequence follow one another.

The closest current reference is *Helstrom Geometry with Time-Dependent Spectral Calibration*, especially Sections 3–5 in the 23 October 2026 source. The evidence companion, `00_COORDINATION/voice/EVIDENCE.md`, records earlier versions, specific instructions and before/after passages. Its examples have different provenance. A later version is not automatically wholly author-written, and advice pasted from another chatbot is not a sample of the author's prose.

The essential rules are these:

- Preserve passages the author has already edited. Make the requested local changes without silently replacing neighbouring sentences.
- Give the reason for a non-obvious construction before introducing it. A sequence of correct formulas still needs an argument.
- State what is given, what is chosen and what has been proved. Keep those roles distinct throughout a proof.
- Cite the equations actually used at the point of substitution or inference. Name unfamiliar notation when it appears.
- Remove repetition while retaining the intermediate explanation that makes a step understandable.
- Let the preceding result motivate the next question. End with what the calculation establishes or leaves unresolved.

The objective is to reduce the amount the author must rewrite while preserving mathematical accuracy. It is not a detector score. Do not promise human authorship, undetectability or fidelity that the author has not confirmed.

## 2. What this revision learns from the proceedings

Version 2 already recommended plain verbs, connected calculations and three editing passes. Those recommendations did not prevent several recurring failures. Bots continued to compress reasons into assertions, start successive paragraphs with unrelated choices, repeat already established restrictions and replace the author's wording during minor corrections.

The October revisions provide more specific evidence. The author asked for the purpose of the decreasing Dirac scale before its formula. He asked for the positivity condition and observation-window condition separately before their combined bound. He asked for equation references at the exact step where they were used. He also expanded a compressed proof to explain the Bloch-vector action, while deleting a finite-increment identity that did no independent work in this proceedings contribution.

These are different editorial decisions. Some passages need more reasoning and others need less. A uniform shortening pass cannot make that distinction.

The newer prose also retains expressions that a generic cleanup might delete: “We can now”, “To this end”, “This means”, “All that remains” and an occasional direct question. Their value depends on their place in the argument. They are not filler merely because they recur, and they are not phrases to insert mechanically.

**Evidence order.** First follow an explicit current instruction. Next use a passage the author identifies as edited or approved, together with its surrounding argument. Then use dated manuscript comparisons with corroborating edit records. Use assistant revision reports and older mixed drafts as context. Treat unattributed snapshot changes as mixed authorship. The evidence file labels these distinctions rather than pretending to reconstruct every keystroke.

## 3. Preserve the author's decisions

Before editing, identify the permitted region and read its latest text from disk. The user may be editing the same document. Do not work from an older chat extract when a newer source exists. Take a dated baseline, or retain a diff against the latest source, before making substantive changes.

For a request such as “only after Eq. (3.14)” or “just fix the last sentence”, the earlier passage is protected. Read it to learn its rhythm and dependencies, but do not rewrite it. If a correction outside the requested region is necessary for correctness, identify it explicitly. A stylistic preference is not such a necessity.

Correct spelling, agreement and genuinely unclear syntax locally. Keep the sentence's subject, order of reasoning and characteristic connective wording where they work. In the proceedings, “link-strengths that reproduces” needed an agreement correction. It did not require replacing the surrounding construction with a new polished paragraph. Conversely, an inaccurate description of equal-prior state discrimination required a content correction even though it appeared in an author-edited passage. Preserve voice without preserving an error.

A display, definition, equation label, citation, hypothesis or quantifier can carry a substantive choice. Do not alter these during a voice pass without identifying the mathematical reason. Do not restore a passage that the author removed merely because it occurred in an earlier draft or seemed useful to another bot.

At the end, compare the actual diff with the requested scope. If unchanged paragraphs have been recast, restore them before delivery. Report consequential changes plainly, without declaring the document “in your voice” on the strength of a word search.

## 4. Build a connected mathematical argument

### Motivate the choice

The local reader should know why a new ansatz, scale, coordinate or example appears. The explanation can be short. In the proceedings, the need is to obtain spectral growth while trace distance contracts. That calls for a decreasing Dirac scale, and positivity requires it to remain away from zero. These requirements give the reader a reason to examine the displayed choice.

Do not write a series of “We take… We choose… We obtain…” sentences with no account of their relationship. Equally, do not attach a paragraph of general motivation to every standard substitution. Explain the decision that the reader could not infer unaided.

### Distinguish the data from the construction

An existence proof needs a stable point of view. Start with the given record and candidate history. In the forward direction, assume a realization and use its properties. In the converse, choose the states, construct the channel, show its action and then choose the links that recover the record.

Do not use the unknown scale as if it had already been supplied, or introduce a convenient realization as though it were uniquely forced. The author's “All that remains is to choose suitable link strengths…” works because the preceding paragraph has already constructed the required state evolution.

### Explain the decisive intermediate step

The revised proof explains why the channel coefficients give a CPTP map and how conjugation changes the Bloch components before stating the resulting trace distance. That detail earns its place. A full background section on quantum channels would interrupt the argument. The amount of explanation is set by the local obstacle, not by a fixed preference for short or long paragraphs.

### Combine conditions after deriving them

The revival argument first obtains a positive-derivative condition at the chosen time. It then requires that time to lie inside the prescribed observation interval. Only then does it combine the inequalities into a maximum bound. Presenting the final maximum first hides why its two terms are there.

Do not repeat the parameter range immediately below a calculation when it was already fixed just above and nothing has changed. Keep a restriction at the place where it enters, and recall it only when the reader needs it.

### Let the result pose the next question

After constructing two realizations of the same spectral record, the next question is what additional data distinguish them. Scalar-reference distances then have a purpose. After recovering the scale, the next question is what freedom remains in the relative link strengths. This makes the opening of the following section part of the same argument.

A direct question is appropriate at such a real turning point. Do not manufacture a question-and-answer pattern at every paragraph boundary. Nor should a secondary observation, such as a rescaling identity, interrupt a paragraph whose job is to resolve a specific ambiguity.

## 5. Equations are part of the prose

Introduce the mathematical object, state the operation and put the necessary references beside it. For example, the author asked that the identities giving the trace distance in Bloch coordinates be cited before using the relation between its square and the squared Bloch-vector difference. “It follows” without a recoverable dependency is often too compressed.

When a formula will be used again, give it an equation number and refer back to it. In the proceedings, the exponential trace-distance history became a numbered equation because later constructions depended on it. Repeating the formula in prose each time obscured that dependency.

Place related formulas on separate aligned lines when that makes the relationship easier to read. The alternative trace-distance history and its scale belong in one numbered display with two lines. Supremum constraints belong on separate lines when a single crowded subscript makes them hard to read. These are reading decisions, not decorative typesetting.

Define the Lipschitz seminorm and its norm directly below the distance formula. Distinguish algebra elements from their represented operators. Use the established symbol consistently, and explain a nonstandard convention at its first use.

Choose the form of an identity that serves the current point. The scalar–scalar distance was expressed through the two scalar radii to make the Pythagorean relation visible. An additional equivalent expression through the calibration scale did not help that passage. More algebraically equivalent forms are not automatically more informative.

After a formula, state the consequence that is needed next. Do not translate every symbol into a sentence, and do not repeat the preceding introduction in new words. If the interpretation follows immediately and no further condition is needed, continue the calculation.

## 6. Words, transitions and rhythm

Use concrete mathematical nouns and ordinary verbs: choose, write, subtract, differentiate, substitute, combine, compare, obtain, recover, require, determine. A verb should describe the operation actually performed. “Shows” is too strong for a numerical suggestion and too vague where “differentiating” would identify the step.

The proceedings uses a conversational mathematical “we”. Expressions such as “We can now”, “To this end”, “Notice that”, “In this way” and “Going further” can make the route legible. Preserve them when they point to real progress. Avoid filling a page with the same opening, but fix repetition by clarifying the logic, not by rotating synonyms.

Useful transitions have distinct jobs:

- “To obtain…” states the target that motivates a choice.
- “Combining… with…” names the dependencies of a calculation.
- “Having established…” signals that a needed condition is now available.
- “All that remains…” identifies the part of the construction still to be supplied.
- “So far…” connects a completed result to the remaining question.
- “It would be useful to…” introduces a concrete unresolved calculation.

These are examples of functions, not a phrase bank. Do not put each one into every draft. The occasional expressive phrase in an author-edited paragraph is not permission to add conspicuous quirks elsewhere.

Prefer periods to unnecessary semicolons. Use a colon or dash when it genuinely improves the sentence. Preserve standard mathematical punctuation and purposeful contrasts. A claim that two constructions have different physical interpretations may need an explicit distinction. A decorative “not merely X, but Y” usually adds little.

Audit vague praise such as “powerful framework”, “rich interplay”, “crucial insight” and “opens exciting avenues”. Replace it with the object, calculation or unresolved question. Technical terms such as “robust” or “mechanism” remain legitimate when their meaning is specified. No isolated word establishes authorship or determines the quality of a passage.

Do not copy spoken hesitations, profanity, grammatical slips or accidental repetition into a paper. They are features of dictation or conversation, not instructions for academic prose. Likewise, do not make sentence lengths artificially irregular. Let a difficult step take more space than a routine one.

## 7. Decide what to cut and what to retain

Before deleting an explanation, identify what the reader would lose: a reason for a choice, a definition, a hypothesis, a dependency, an intermediate calculation or an interpretation. If one of these is unique and needed, preserve it or express it more clearly. If the passage repeats work already done and adds no useful orientation, remove it.

The proceedings supplies both tests. The finite-increment formula was removed because it repeated the instantaneous identity at two times and did not advance the differential-rate argument. The Bloch-affine calculation remained because it supplied a general rate formula. The channel proof was expanded where the action on the chosen states had been too compressed.

Do not impose a percentage reduction. Version 2's references to cutting 20–30% must not become a target, especially after the author has edited the draft. A successful revision can be longer if it repairs a missing argument. It can also become shorter because a general criterion replaces an arbitrary numerical illustration.

A proceedings contribution can recall a proved static result with attribution and enough explanation to use it. It need not reproduce the source paper's full proof. A new central claim needs its proof. A theorem-like environment is useful for a substantial reusable statement, not for every algebraic observation.

Use footnotes for a brief local clarification. The CPTP footnote needed the mathematical conditions, not just the expansion of the abbreviation or a miniature tutorial. A concise formula can reduce the word count while making the meaning more exact.

Keep captions focused on what the panels show and how to read them. Do not duplicate every parameter already given beside the discussion. Place the figure near the argument that uses it, without splitting the first steps of a new section. Recheck equation wrapping and pagination in the actual PDF.

## 8. Openings, discussion and outlook

An opening should establish the specific problem and the construction needed to address it. Define terms for the intended readership and proceed to the relevant calculation. Avoid a broad promise about connecting geometry and physics that could introduce almost any paper.

The discussion should recover the purpose of the investigation before recounting the examples. In the proceedings, “We started with a depolarizing evolution” was inadequate because it left out why that example mattered. The revised discussion first identifies the moving-link calibration problem, then explains what the depolarizing example establishes, what question it raises and what the scalar references resolve.

A list of correct results can still read as a dead discussion. Connect results through their implications and limits. Use a short recap where it restores orientation, even if the same objects appeared in the introduction. The rule against repetition does not prohibit a purposeful summary.

Future work should name an unresolved question and a calculation or test that could address it. The proceedings outlook asks how sampling uncertainty affects reconstructed trace distance, whether the scalar-anchored model can be implemented, and how anisotropic links alter the calibration problem. These questions follow from assumptions or limits of the present construction.

Keep the public status of other work accurate. Do not turn the outlook into a catalogue of unpublished companion results, or imply that a planned paper has already established the proposed extension. An internal result can guide a next step without being advertised as a public fact.

## 9. Use a revision process matched to the request

**For a new draft or an authorized broad rewrite:** read the closest voice sample and write down the section's mathematical job. Draft the argument. Then make three distinct passes: dependencies and correctness; redundancy and allocation of detail; sentence-level voice and presentation. Recheck equations and citations after the prose changes. Each pass may leave a good passage unchanged.

**For author-edited text:** preserve the latest wording as the baseline. Read the surrounding argument, make the requested changes and check their consequences. Do not use the three-pass instruction as authority for a whole-document rewrite. Whole-document reading can be useful while the write scope stays local.

**For a final production pass:** check grammar that affects meaning, equation references, bibliography, figure placement and PDF layout. Do not reopen the argument or replace settled phrasing unless a substantive problem is found. State that problem directly.

The internal check should answer:

1. Is each new choice motivated at the point where it appears?
2. Are given data, free choices and conclusions distinct?
3. Can the reader follow the equation references and decisive intermediate steps?
4. Did compression remove a reason that the author wanted visible?
5. Did the edit remain inside the requested scope and preserve the author's settled wording?
6. Are the conclusion and next question supported by the calculation?

Report the actual changes and any unresolved mathematical issue. Supply the compiled document when one was requested. For a substantial rewrite, show a few representative before/after passages. For a two-word correction, do not manufacture a long audit report. A phrase-count script may locate candidates for reading, but it must never automatically rewrite prose or certify voice.

## 10. Corpus, confidence and proposals

The closest new corpus is the proceedings source and its dated revision history. The evidence companion provides frozen passages and user instructions. Use it for the type of writing illustrated, rather than treating the whole manuscript as a universal template.

Version 2's established reference corpus is retained: arXiv:2310.00391 and 2212.01341 for solo proceedings, arXiv:2202.12215 for the solo thesis, and arXiv:2312.01317 and 2106.05952 for coauthored technical work. Their bibliographic descriptions and roles are inherited from v2. They were not all independently reread for v3. Consult the actual relevant passage before claiming to have calibrated against it. Coauthored prose is not exclusive evidence of one person's sentence style.

Research proposals need their own calibration. The October proceedings strongly supports rules about reasoning order, specificity and preserving edits. It does not yet establish the author's preferred proposal structure, personal register or institutional-fit language. The planned author revisions to upcoming proposals are the next dataset, not evidence already incorporated here.

Pending those revisions, use conservative transfer: identify the concrete problem, explain the author's relevant work and contribution, give a feasible next calculation, and state what its outcome would establish. Distinguish completed work from plans. Check institutional claims. Avoid interchangeable promises of impact and a forced symmetry between projects. Preserve an explicitly chosen programme structure, including any required pillars, rather than rejecting it because a style guide dislikes lists.

When the new proposal edits arrive, preserve the before/after pair, record which changes the author made or requested, and identify which lessons are proposal-specific. Add a separate mode if the evidence warrants it. Do not rewrite existing submitted proposals or schedule updates merely because this protocol mentions future work.

## 11. One current protocol across apps

The canonical bot-readable file is `/Users/kaushlendrakumar/Desktop/rThreads/Voice_Protocol.md`. The matching reader copy is `Voice_Protocol.pdf` in the same directory. Project-level copies are ordinary files for compatibility with cloud sync. The protocol build refreshes these copies from the canonical files. Changes to the root instruction files can be propagated with `00_COORDINATION/voice/sync_project_copies.py`. Historical versions remain in `00_COORDINATION/voice/archive/`.

Before drafting, reopen the current protocol. Do not rely on an old PDF attached to a chat or on a remembered version. Project instructions point to the canonical file, but an app without filesystem access needs the current files supplied explicitly. A pointer cannot guarantee that an arbitrary chatbot has read them.

The evidence and maintenance files live in `00_COORDINATION/voice/`. The Markdown is the editable protocol. The PDF and LaTeX representation are generated from it. Do not maintain divergent PDF-only edits. After a protocol change, rebuild the PDF, inspect its pages, update the version and changelog, refresh the project copies, and retain the previous version.

Future updates should be based on attributable revisions, not on a chatbot's self-assessment. Record the source version, requested scope, before/after text, authorship confidence, inferred lesson and any counterexample. Promote a repeated preference or explicit instruction to a rule. Keep a one-off choice local to its context. If a new instruction contradicts an older rule, preserve the history and update the current rule.

## 12. Starter instructions

**New draft.** Read `Voice_Protocol.md`, the current project source and a relevant author-edited example. Develop the argument from the problem through the choices and calculation to its consequence. Follow v3's revision process. Preserve mathematical scope and identify uncertainty. Do not optimize for a detector score.

**Local revision.** Read the current file and the author's requested boundary. Preserve the edited passages outside that boundary. Use the neighbouring prose as the closest voice sample. Make only the requested corrections and the necessary dependent fixes, then check the diff and compiled result.

**Protocol update.** Compare dated drafts with explicit author instructions. Label mixed or uncertain provenance. Extract decisions about argument, detail and expression, with traceable examples. Update the single canonical protocol and its PDF together. Do not turn isolated phrases into a compulsory style.
