## 🧠 When something _is_ an AI problem

Look for these signals:

### 1. **No clear rules (but humans can do it)**

- You can’t easily write step-by-step logic
- But a human can still perform the task intuitively

**Examples**

- Recognizing faces in images
- Understanding sentiment in text
- Translating languages

👉 If you catch yourself saying _“I know it when I see it”_ → that’s AI territory.

---

### 2. **Lots of messy or unstructured data**

- Text, images, audio, video
- Not clean rows/columns with strict formats

**Examples**

- Emails, chat logs
- Medical scans
- Voice recordings

👉 Traditional code struggles here; AI thrives.

---

### 3. **Patterns > exact answers**

- The goal is _good enough_, not perfect
- Probabilities instead of certainty

**Examples**

- Spam detection
- Recommendations (Netflix, Spotify)
- Fraud detection

👉 If outputs can be _“probably correct”_, AI fits.

---

### 4. **The solution improves with data**

- More examples = better performance
- You don’t “program” the solution—you train it

**Examples**

- Self-driving systems
- Personalized ads
- Speech recognition

👉 If data is the bottleneck, not logic → AI.

---

### 5. **Edge cases explode**

- Too many exceptions to handle manually

**Examples**

- Detecting all possible ways someone can write a scam email
- Handling natural language variations

👉 If rules become unmanageable → switch to AI.

---

## 🛠️ When it is _NOT_ an AI problem

Avoid AI if:

### 1. **Clear rules exist**

- You can define exact logic

**Examples**

- Sorting numbers
- Calculating taxes
- Validating form inputs

👉 Use traditional programming.

---

### 2. **Needs 100% correctness**

- No tolerance for errors

**Examples**

- Banking transactions
- Safety-critical systems (without oversight)

👉 AI is probabilistic → not ideal.

---

### 3. **Small data**

- Not enough examples to learn from

👉 AI will perform poorly or overfit.

---

### 4. **Simple logic disguised as “smart”**

- If-else rules can solve it cleanly

👉 Don’t overcomplicate.

---

## 🔧 Mental Model (Tool Analogy)

- **Hammer (rules-based code):**

  - Deterministic
  - Reliable
  - Precise

- **Screwdriver (AI):**

  - Flexible
  - Pattern-based
  - Approximate

👉 Use AI when:

> “I can’t explicitly program it, but I could show examples.”

---

## ⚡ Quick Decision Test

Ask yourself:

1. Can I write exact rules for this?
   → Yes → Not AI

2. Would examples work better than rules?
   → Yes → AI

3. Is “probably correct” acceptable?
   → Yes → AI

4. Does performance improve with more data?
   → Yes → AI

---

## 🔁 One-line heuristic

> **If the problem is about recognizing patterns in messy data with no clean rules, it’s an AI problem.**
