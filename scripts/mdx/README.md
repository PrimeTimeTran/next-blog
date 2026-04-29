# 🧠 MDX Pipeline

A rule-driven document compiler that operates via iterative source transformation + re-tokenization.

- multi-stage processing
- rules + transforms
- compiler-like flow
- extensibility (plugins later)

```sh
SOURCE (MDX/text)
   ↓
runRules (semantic analysis)
   ↓
fixes (rewrite plan)
   ↓
applyFixes (source transformation)
   ↓
tokenize (AST creation)
   ↓
regions[] (flat AST)
   ↓
render (codegen)
   ↓
OUTPUT
```

---

# 📦 What you’ve built so far (summary)

- **File walker**

  - Recursively loads `.md/.mdx` files from a target directory

- **Tokenizer**

  - Splits raw markdown into stable regions:

    - `text`
    - `code`
    - `math-block`
    - `math-inline`

  - Guarantees `.value` always exists (important fix)

- **Region model (AST-lite)**

  - Each region is a structured node
  - Enables rule isolation (no global string scanning)

- **Rule engine**

  - Runs per-region
  - Produces:

    - `diagnostics` (violations)
    - `fixes` (patch instructions)

  - Example rule: `no-h2`

- **Fix engine**

  - Applies deterministic transformations
  - Currently line-based replacement (first version)
  - Now correctly ordered BEFORE rendering

- **Renderer**

  - Reconstructs markdown from regions
  - Used as final serialization step

- **Diff/debug system**

  - Detects lossless roundtrips
  - Shows character-level divergence
  - Region-level inspection logs

- **CLI runner**

  - Supports:

    - `--dry`
    - target directory override

  - Batch processes KB/blog files

---

# MDX Fix Pipeline (Experimental Rule Engine)

This system processes Markdown / MDX files into a structured transformation pipeline to support linting, automated fixes, and future Obsidian → Blog migration.

---

## Raw Input

Raw markdown files are loaded from disk.

### Responsibilities

- Read `.md` and `.mdx` files
- Preserve raw content exactly as source of truth
- Provide input to tokenizer stage

---

## Tokenizer (Lexical Layer)

Converts raw text into structured regions.

### Region types

- `text`
- `code`
- `math-block` (`$$ ... $$`)
- `math-inline` (`$ ... $`)

### Responsibilities

- Preserve ordering
- Guarantee every region has:
  - `type`
  - `value`
- Ignore parsing inside code blocks
- Maintain strict structural boundaries

### Output

AST-like region array

---

## AST-like Regions

Internal representation of document structure.

### Why it exists

- Avoid string-based parsing
- Enable localized rule execution
- Prevent cross-region corruption

### Properties per region

- `type`
- `value`

Future extension:

- `startLine`
- `endLine`
- `position`
- `id`

---

## Rule Engine

Applies validation and transformation rules.

### Responsibilities

- Run per region
- Produce:
  - diagnostics (warnings/errors)
  - fixes (patch instructions)

### Example rules

- `no-h2` → disallow `##` headings
- `latex-must-be-wrapped`
- `no-inline-html`
- `obsidian-link-validator` (planned)

### Output

```js
{
  region,
  diagnostics: [],
  fixes: []
}
```

---

## Fix Engine

Applies deterministic transformations.

### Responsibilities

- Apply fixes AFTER rule execution
- Ensure stable mutation order
- Avoid string-based ambiguous replacement

### Fix types (current)

- `replace-line`

### Future upgrade (recommended)

- positional patches:

  - `{ line, column, replacement }`

### Critical rule

> fixes must be applied BEFORE rendering

---

## Renderer

Reconstructs markdown from regions.

### Responsibilities

- Join processed regions back into string
- Ensure deterministic output
- Maintain original ordering

### Output

Final markdown string

---

## Final Output

Written back to disk (or dry-run preview).

### Responsibilities

- Write only if changes detected
- Support dry-run mode
- Maintain safe overwrite behavior

---

## Diagnostics System

Collects rule violations.

### Responsibilities

- Attach:

  - file
  - rule name
  - message
  - snippet
  - line context

- Provide formatted CLI output
- Show surrounding context (future improvement)

---

## Context Extraction (Planned)

Enhance diagnostics with:

- surrounding lines (±3–5 lines)
- highlighted violation line
- region type awareness (code vs text)

---

## Obsidian Migration Layer (Planned)

Required for blog migration.

### Future rules

- `[[link]] → /slug`
- heading normalization
- frontmatter validation
- tag normalization

---

## Stability Requirements

System must guarantee:

- tokenizer invariants (no undefined values)
- deterministic region ordering
- idempotent fixes (no repeated mutation)
- lossless roundtrip unless fix applied

---

## CLI Usage

```sh
node runner.js --dry ./data/preview
```

### Flags

- `--dry` → no file writes
- `--verbose` → detailed diagnostics

---

# 🧭 What you haven’t built yet (important)

Based on your goal (Obsidian → blog system), next missing layers are:

- **positional fix system (line + column AST mapping)**
- **Obsidian link resolver (`[[...]]`)**
- **frontmatter parser + validator**
- **rule registry system (plugin-style)**
- **rule severity model (error/warn/info)**
- **source map between regions ↔ original file lines**
- **stable rule IDs for CI/build integration**

# TODO

- Add rule gating (very high value)
  - if (ctx.prev?.type === 'code-fence') return null
  - if (ctx.getLine(index - 1)?.trim() === '```') return null
- Block awareness for inCodeBlock, inMathBlock

| Status | name           |
| ------ | -------------- |
| [x]    | parses dir     |
| [x]    | dry run        |
| [x]    | tokenizer      |
| [x]    | rules          |
| [x]    | renderer       |
| [x]    | context window |
| [x]    | diagnostics    |
| [x]    | reporting      |
| [x]    | log levels     |
| []     |                |
| []     |                |
| []     |                |
