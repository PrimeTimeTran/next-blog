## 🔐 Encrypting a File with a Password (Symmetric Encryption)

### Core idea

File encryption with a password typically uses **symmetric encryption**, meaning:

> The same password is used to encrypt and decrypt the file.

The password is converted into a cryptographic key, and the file is transformed into unreadable ciphertext unless decrypted with that key.

---

## 🧱 Conceptual model

```
Plain file → (password → key) → encryption algorithm → encrypted file
Encrypted file → (same password → key) → decryption → original file
```

---

## 🔑 Recommended modern approach

### Use a standard tool: `age` or `gpg`

#### Option A — modern (simpler): `age`

```bash
age -p -o file.txt.age file.txt
```

- `-p` = prompt for password
- Output is encrypted file

Decrypt:

```bash
age -d -o file.txt file.txt.age
```

---

#### Option B — widely used: `gpg`

Encrypt:

```bash
gpg -c file.txt
```

- `-c` = symmetric encryption (password-based)

Decrypt:

```bash
gpg file.txt.gpg
```

---

## 🔒 What actually happens internally

### 1. Key derivation

Your password is not used directly.

It is passed through a **Key Derivation Function (KDF)** like:

- PBKDF2
- Scrypt
- Argon2

This:

- adds salt (random data)
- slows down brute-force attacks
- produces a strong encryption key

---

### 2. Encryption

A symmetric cipher is used, typically:

- AES-256
- ChaCha20

It transforms:

```
plaintext → ciphertext (unreadable)
```

---

### 3. Output file structure

Encrypted file usually contains:

- salt
- initialization vector (IV)
- ciphertext
- authentication tag (integrity check)

---

## 🧠 Important properties

- Same password = same decryption ability
- Losing password = permanent data loss
- Strong passwords matter more than algorithm in practice
- Modern systems include integrity checks (prevents silent corruption/tampering)

---

## 🧾 When this is used (relevant to your crypto wallet idea)

This pattern is used for:

- encrypted private key backups
- wallet seed phrase storage files
- encrypted JSON keystore files (e.g., Ethereum wallets)
- password-protected archives

But note:

> Wallet security usually prefers hardware wallets or encrypted keystore files rather than manually encrypted raw key files.

---

## ⚠️ Practical security note (important)

If you're storing crypto keys:

- never rely on weak passwords
- prefer `Argon2`-based encryption tools
- keep encrypted backups offline
- consider hardware wallets for real funds

---

## 🧭 Clean atom summary

> File encryption with a password works by deriving a cryptographic key from the password using a KDF, then using symmetric encryption (like AES or ChaCha20) to transform the file into ciphertext that can only be reversed with the same password.
