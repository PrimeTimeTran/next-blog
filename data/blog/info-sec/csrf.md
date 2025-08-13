---
draft: false
date: 2016-11-01
title: 'Understanding CSRF: How Cross-Site Request Forgery Attacks Work'
tags: ['info-sec', 'web-security', 'csrf', 'authentication']
summary: 'Cross-Site Request Forgery (CSRF) is a web vulnerability where attackers trick users into submitting unwanted actions on a web application where they are authenticated. This guide explains how CSRF works, the risks it poses, and how to protect your applications using strategies like anti-CSRF tokens and same-site cookies.'
---

# Introduction

**Cross-Site Request Forgery (CSRF)** is a type of attack where a malicious website tricks a user's browser into making an unwanted request to a different site where the user is already authenticated.

In other words, the attacker exploits the **trust a web application has in the user's browser**.

---

## 🔍 How CSRF Works

Let’s say you’re logged into `bank.com`, and you have a cookie in your browser that keeps your session active.

Now, you visit a malicious website `evil.com` that contains this code:

```html
<img src="https://bank.com/transfer?amount=1000&to=attacker123" />
```

When your browser loads this image, it makes a **GET request** to `bank.com`, **automatically including your session cookie** — just like a normal request from you.

If `bank.com` doesn’t have CSRF protection, it will think this is a legitimate action by you, and the transfer will succeed.

---

## 🎯 Real-World Example

- You're logged into your email.
- You click a link to a shady site.
- That site makes a **hidden POST request** to your email account settings, changing your password.

If the email provider doesn’t verify the authenticity of the request (e.g., using CSRF tokens), you’re compromised.

---

## 🛡️ How to Prevent CSRF

### ✅ 1. Use CSRF Tokens

- Include a **unique token** in forms or headers.
- The server verifies this token before processing the request.
- An attacker can’t predict or steal it (assuming no XSS exists).

### ✅ 2. Use SameSite Cookies

- `SameSite=Lax` or `SameSite=Strict` prevents the browser from sending cookies with **cross-site requests**.
- This is now the default behavior in modern browsers.

### ✅ 3. Require Re-authentication for Critical Actions

- For sensitive tasks (e.g., transferring money, changing passwords), ask the user to **re-enter their password**.

### ✅ 4. Check Referer or Origin Headers

- Validate that the request came from your own site.
- Less reliable but can be an additional layer.

---

## 🔄 CSRF vs. XSS

|                   | CSRF                          | XSS                                |
| ----------------- | ----------------------------- | ---------------------------------- |
| **Target**        | Application logic (actions)   | The user (via the browser)         |
| **Attack Vector** | A malicious external site     | Injected script in trusted site    |
| **Needs Login?**  | ✅ Yes                        | ❌ Not always                      |
| **Prevented by**  | CSRF tokens, SameSite cookies | Escaping input, sanitizing scripts |

---

## Conclusion

CSRF is dangerous because it exploits **authenticated sessions** and happens **without the user's knowledge**. Even though modern browsers are getting better at enforcing cookie policies, developers still need to **explicitly implement CSRF protection** on the server side.

If your app lets users perform important actions, make sure they’re **truly the one requesting it.**
