---
draft: true
date: 2026-02-06
author: 'Loi Tran'
title: 'Designing an Exchange from First Principles — Part III: Public Security Challenge & Transparency'
description: 'Exploring how transparency and verifiable security can build trust in trading platforms. We outline a public read-only demo and a challenge for ethical hackers to test our authorization system.'
series: 'Designing an Exchange from First Principles'
part: 3
tags:
  - security
  - transparency
  - trading platform
  - authorization
  - demo
  - bug bounty
---

# A Public Challenge: Read‑Only Access, Real Systems, Real Guarantees

Most software products ask you to trust them.

Trust the marketing page.
Trust the roadmap.
Trust the security claims.
Trust that the screenshots represent something real.

In 2026, that feels… outdated.

This project takes a different approach.

## The premise

I’m building an exchange‑like system: wallets, deposits, orders, withdrawals, dashboards — the kind of infrastructure people usually only show behind closed doors or in pitch decks.

Instead of hiding it, I plan to do something unusual:

**Give the public authenticated, read‑only access to the system.**

Anyone can sign in.
Anyone can inspect orders, balances, and activity.
No write access. No admin privileges. No secrets exposed.

And then comes the challenge.

> **If you can insert even one order record or one withdrawal record as a read‑only user, I will pay you.**

This is not a stunt. It’s a statement about how the system is built.

## What this challenge is (and isn’t)

This is **not** “hack my server.”
It’s **not** an invitation to attack infrastructure.
It’s **not** about denial‑of‑service, social engineering, or cloud exploits.

This challenge is very specific:

- You authenticate as a user with a `viewer` role
- You are allowed to see data, not modify it
- You try to violate that rule

If you can:

- Escalate privileges
- Exploit broken authorization
- Abuse an unintended mutation endpoint
- Insert a persisted order or withdrawal record

Then the system failed, and I want to know.

That’s worth paying for.

## Why do this publicly?

Because most real failures don’t happen at the “Hollywood hacking” level.

They happen when:

- Read‑only users can write
- Users can see or affect data they shouldn’t
- Authorization logic is assumed correct, not proven

This challenge is about **authorization integrity**, one of the most common and most expensive classes of real-world bugs.

By making the claim public, it becomes falsifiable.

Either:

- Someone breaks it, and I learn immediately
- Or no one does, and the claim stands — provisionally, honestly, without bravado

Both outcomes are useful.

## What you’ll be able to see

Participants will be able to:

- Authenticate into a real dashboard
- Inspect live (or testnet) activity
- Observe how deposits become orders
- See how balances and histories are tracked
- Understand the system as it actually exists, not as a diagram

What you won’t be able to do:

- Create, modify, or delete records
- Trigger transactions
- Access secrets, keys, or infrastructure
- Affect other users or production systems

All sensitive operations and credentials live server‑side. The client only receives data explicitly intended for display.

## Why transparency matters

Modern platforms ask for trust while offering opacity.
Closed systems, vague assurances, and “security by policy” are the norm.

This experiment explores a different direction:

- Transparency as a feature
- Verifiability instead of promises
- Confidence demonstrated through exposure, not secrecy

You don’t have to believe claims about robustness.
You can try to break them.

## About risk

Yes, there is risk in exposing real systems.
That’s why this is scoped carefully:

- Read‑only roles
- Isolated environments
- Explicit rules of engagement
- Clear success criteria

The goal isn’t chaos. It’s signal.

## Why now?

Because building software isn’t the hard part anymore.
Deploying it isn’t either.
What’s hard is credibility.

This is one attempt — not the only one — to earn it.

If you’re curious, skeptical, or confident you can break it:
you’ll be welcome to try.

More details will follow when the challenge opens.
