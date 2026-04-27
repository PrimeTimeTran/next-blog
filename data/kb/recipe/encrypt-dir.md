You don’t usually encrypt a directory directly—you encrypt a _container that holds the directory contents_. A secrets is just a filesystem abstraction, so tools either archive it first or use a filesystem-level encryption layer.

---

# 🔐 Encrypting a Directory with a Password

## Core idea

To encrypt a directory, you typically:

> **bundle → encrypt → store as a single protected file**

or use a system that encrypts at the filesystem level.

---

# 🧱 Method 1: Archive + Encrypt (most common)

## Step 1: create an archive

```bash id="k2n9q1"
tar -czf secrets.tar.gz my-secrets/
```

## Step 2: encrypt it (password-based)

### Using GPG

```bash id="c8m2l3"
gpg -c secrets.tar.gz
```

Output:

- `secrets.tar.gz.gpg`

---

### Using age (modern alternative)

```bash id="q9v1x7"
tar -czf - my-secrets/ | age -p -o secrets.tar.gz.age
```

---

## Step 3: decrypt

```bash id="t5r8p0"
age -d -o - secrets.tar.gz.age | tar -xzf -
```

or:

```bash id="x1k4m6"
gpg secrets.tar.gz.gpg
tar -xzf secrets.tar.gz
```

---

# 🧱 Method 2: Encrypted archive tools (simpler UX)

## Examples:

- `zip` with password (weak, legacy)
- `7z` (better option)

### 7-Zip encryption:

```bash id="h6d2s9"
7z a -p my-secrets.7z my-secrets/
```

Decrypt:

```bash id="n3p8v2"
7z x my-secrets.7z
```

Notes:

- uses AES-256
- widely supported
- simpler than tar + gpg

---

# 🧱 Method 3: Filesystem-level encryption (advanced)

Instead of encrypting files manually:

## Examples:

- LUKS (Linux disk encryption)
- VeraCrypt containers

### Concept:

> You mount an encrypted “virtual drive”, and everything inside is automatically encrypted.

So:

- directory exists only inside encrypted volume
- nothing is exposed on disk unencrypted

---

# ⚖️ Choosing the right approach

## Use archive + encryption when:

- you want portability
- you’re sending backups
- you want simple file-based storage

## Use filesystem encryption when:

- you actively work inside the directory
- you want automatic encryption/decryption
- you want stronger operational security

---

# 🧠 Mental model

```id="z8p3k1"
Directory
  → Archive (tar/zip)
    → Encryption (AES/ChaCha20)
      → Encrypted file container
```

---

# 🔐 Security note (relevant to your crypto wallet use case)

If this is for:

- private keys
- seed phrases
- wallet backups

Best practice:

- avoid simple zip passwords
- prefer `age` or `gpg` (Argon2/KDF-backed)
- or better: hardware wallet + encrypted offline backup

---

# 🧭 Clean atom summary

> Directories are encrypted by first packaging them into an archive, then encrypting the resulting file using symmetric encryption, or by placing them inside an encrypted filesystem container that handles encryption transparently.
