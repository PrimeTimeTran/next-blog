# Retrieval-Augmented Generation (RAG)

## Core Idea

RAG combines **information retrieval + language generation** so a model can answer using **external knowledge sources** instead of relying only on its internal parameters.

---

## Why It Exists

Pure LLMs:

- can hallucinate
- have outdated knowledge
- lack access to private or dynamic data

RAG fixes this by letting the model **look things up before answering**.

---

## High-Level Flow

1. **User query**
2. **Retrieval step**

   - search external knowledge base (documents, vectors, database)

3. **Augmentation step**

   - retrieved context is added to the prompt

4. **Generation step**

   - LLM produces answer using both query + retrieved info

---

## Architecture Components

### 1. Query Encoder

Transforms user input into a vector representation.

### 2. Retriever

Finds relevant documents using similarity search (often vector search).

- dense retrieval (embeddings)
- sparse retrieval (keyword/BM25)
- hybrid systems

### 3. Knowledge Base

Stores external data:

- documents
- PDFs
- web pages
- internal company data

### 4. Generator (LLM)

Produces final response conditioned on retrieved context.

---

## Key Mechanism

Instead of:

> answer = LLM(query)

RAG does:

> answer = LLM(query + retrieved_context)

---

## Simplified Pipeline

```
Query → Embedding → Search → Top-k Documents → Prompt → LLM → Answer
```

---

## Strengths

- Reduces hallucinations
- Enables up-to-date knowledge
- Works with private data
- Easier than full model retraining
- Modular (swap knowledge without retraining model)

---

## Limitations

- Depends heavily on retrieval quality
- Can include irrelevant or noisy context
- Latency from search step
- Context window constraints (only top-k fits)

---

## Key Design Choices

- Chunk size (how documents are split)
- Embedding model quality
- Retrieval method (dense vs sparse)
- Reranking strategies
- Prompt formatting for context injection

---

## Intuition

A RAG system is like:

> a student (LLM) who is allowed to **open a textbook (retrieval)** before answering an exam question.

---

# Related Ideas

- Vector databases
- Embeddings
- Semantic search
- Tool-augmented LLMs
- Memory systems in AI agents

# Resources

Intro - https://huggingface.co/learn/cookbook/rag_zephyr_langchain
Unstructured Data - https://huggingface.co/learn/cookbook/rag_with_unstructured_data
Structured Generation - https://huggingface.co/learn/cookbook/structured_generation
Advanced - https://huggingface.co/learn/cookbook/advanced_rag
Evaluation - https://huggingface.co/learn/cookbook/rag_evaluation
Librarian - https://huggingface.co/learn/cookbook/rag_llamaindex_librarian
