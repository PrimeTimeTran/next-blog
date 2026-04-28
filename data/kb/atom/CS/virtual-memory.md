---
tags:
  - cs
---

Virtual Address vs Physical Address

- Not Enough Memory
- Memory Fragmentation
- Security

# Not Enough Memory

1B per address
2^32 addresses = 232 bytes = 4 GiB
2^64 addresses = 16 million TiB (theoretical limit)

# Memory Fragmentation

Imaging offset

| Physical Memory |      |
| --------------- | ---- |
| 1 GB            | FREE |
| 1 GB            | USED |
| 1 GB            | USED |
| 1 GB            | FREE |

Without virtual memory this wouldn't be able to run 2 2 gb processes.

By adding virtual memory then a programs memory is mapped to a physical memory so it's possible to have the memory be noncontiguous.

# Security

Two different programs writing to the same register

CPU can access
registers of other devices

# Reality

| Physical Memory                                                                                                                   |     |
| --------------------------------------------------------------------------------------------------------------------------------- | --- |
| [MMIO](https://en.wikipedia.org/wiki/Memory-mapped_I/O_and_port-mapped_I/O) / [MPIO](https://en.wikipedia.org/wiki/Multipath_I/O) |     |
| MMIO / MPIO                                                                                                                       |     |
| RAM for OS                                                                                                                        |     |
| RAM for<br />Programs                                                                                                             |     |

[Bus](<https://en.wikipedia.org/wiki/Bus_(computing)>) -
[System Bus](https://en.wikipedia.org/wiki/System_bus) -

Swap Memory - Writing RAM memory to disk when the ram is full

# Virtual Memory

Words - What they work with, size of cpu register, 32-bits
Divided into chunks, pages
