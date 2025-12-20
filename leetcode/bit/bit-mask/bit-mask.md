## Masks

How to create masks

```py
# 1. Hex literal (most common & readable)
mask = 0xFFFFFFFF

# 2. Power of two minus one (math-explicit)
mask = (1 << 32) - 1
# or
mask = pow(2, 32) - 1

# 3. Binary literal (least common, but explicit)
mask = 0b11111111111111111111111111111111

# 5. From bytes (rare but conceptually neat)
mask = int.from_bytes(b'\xff\xff\xff\xff', 'big')
# or little-endian:
mask = int.from_bytes(b'\xff\xff\xff\xff', 'little')

# 6. Using NumPy (only if you’re already using NumPy)
import numpy as np
mask = np.uint32(-1).item()

# For real code:
MASK_32 = (1 << 32) - 1
# or
MASK_32 = 0xFFFFFFFF

# For bit-manipulation problems (especially with negatives):
result &= 0xFFFFFFFF
```

## Hexidecimal

| Hex Value    | Binary (32-bit)                  | Description / Use Case                       |
| ------------ | -------------------------------- | -------------------------------------------- |
| `0x55555555` | 01010101010101010101010101010101 | Alternating 01 starting with 0 → powers of 4 |
| `0xAAAAAAAA` | 10101010101010101010101010101010 | Alternating 10 starting with 1               |
| `0x00000000` | 00000000000000000000000000000000 | All bits 0                                   |
| `0xFFFFFFFF` | 11111111111111111111111111111111 | All bits 1                                   |
| `0x00000001` | 00000000000000000000000000000001 | Least significant bit set                    |
| `0x00000002` | 00000000000000000000000000000010 | Second bit set                               |
| `0x00000004` | 00000000000000000000000000000100 | Third bit set                                |
| `0x00000008` | 00000000000000000000000000001000 | Fourth bit set                               |
| `0x0F0F0F0F` | 00001111000011110000111100001111 | Nibble-wise mask                             |
| `0x00FF00FF` | 00000000111111110000000011111111 | Byte-wise mask                               |
| `0x0000FFFF` | 00000000000000001111111111111111 | Lower 16 bits mask                           |
| `0xFFFF0000` | 11111111111111110000000000000000 | Upper 16 bits mask                           |

## Hex to Decimal & Binary

| Hex | Binary | Decimal | Notes / Explanation       |
| --- | ------ | ------- | ------------------------- |
| 0x0 | 0000   | 0       | Single hex digit → 4 bits |
| 0x1 | 0001   | 1       |                           |
| 0x2 | 0010   | 2       |                           |
| 0x3 | 0011   | 3       |                           |
| 0x4 | 0100   | 4       |                           |
| 0x5 | 0101   | 5       |                           |
| 0x6 | 0110   | 6       |                           |
| 0x7 | 0111   | 7       |                           |
| 0x8 | 1000   | 8       |                           |
| 0x9 | 1001   | 9       |                           |
| 0xA | 1010   | 10      | A = 10 decimal            |
| 0xB | 1011   | 11      | B = 11                    |
| 0xC | 1100   | 12      | C = 12                    |
| 0xD | 1101   | 13      | D = 13                    |
| 0xE | 1110   | 14      | E = 14                    |
| 0xF | 1111   | 15      | F = 15                    |

## Hex to Decimal & Binary(Multi-digit examples)

| Hex        | Binary (8-bit)                   | Decimal    | Notes                      |
| ---------- | -------------------------------- | ---------- | -------------------------- |
| 0x10       | 00010000                         | 16         | 1 × 16 + 0                 |
| 0x1F       | 00011111                         | 31         | 1 × 16 + 15                |
| 0xFF       | 11111111                         | 255        | 8 bits all ones            |
| 0x100      | 0000000100000000                 | 256        | 3 hex digits → 12 bits     |
| 0x1AB      | 000110101011                     | 427        | 1*256 + 10*16 + 11         |
| 0xFFFF     | 1111111111111111                 | 65535      | 16 bits all ones           |
| 0x55555555 | 01010101010101010101010101010101 | 1431655765 | 32-bit alternating 01 mask |
| 0xFFFFFFFF | 11111111111111111111111111111111 | 4294967295 | 32-bit all ones            |
