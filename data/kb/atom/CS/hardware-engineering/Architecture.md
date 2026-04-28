---
tags:
  - cs
  - architecture
---

# Architecture

## Bit vs Byte

- Bit is 0 or 1.
- Byte is 8 bits.
- De factor standard since ISO/IEC 2382-1:1993

## Apple Architectures

- ARM (AArch64/ARM64): Used in ARM processors, including Apple Silicon.
- x86 (x86_64/x64/Intel 64): Used in Intel and AMD processors.

## Apple Silicon

- AArch64, ARM64

## x86-64

sixteen 64-bit registers in x86-64

## Big vs Little Endian

The order in which least and most significant bytes are stored.

- Big Endian

  - Most significant byte of word in the smallest address
  - Least significant byte of word in the largest address

- Little Endian
  - Least significant byte of word in the lowest address
  - Most significant byte of word in the highest address

## Binary to Hexidecimal

0000 0000 to 1111 1111

is the same as

00 to FF

## Hexdump

```
00000000  30 31 32 33 34 35 36 37  38 39 41 42 43 44 45 46  |0123456789ABCDEF|
```

- Each hex pair (30, 31, 32, etc.) is converted to a decimal value.
  - 30:
    - Decimal Value: 3 _ 16^1 + 0 _ 16^0 = 48
    - ASCII Character: The character corresponding to ASCII code 48 is '0'.
  - 31:
    - Decimal Value: 3 _ 16^1 + 1 _ 16^0 = 49
    - ASCII Character: The character corresponding to ASCII code 49 is '1'.

1. **Offset**: `00000000`

   - This is the memory offset or address of the first byte in the line. In this case, it indicates the starting position is `0x00000000`.

2. **Hexadecimal Bytes**: `30 31 32 33 34 35 36 37  38 39 41 42 43 44 45 46`

   - These are the hexadecimal representations of the bytes in memory. Each pair of hexadecimal digits represents one byte (8 bits).

3. **ASCII Representation**: `|0123456789ABCDEF|`
   - This is the human-readable ASCII equivalent of the hexadecimal bytes. Characters that correspond to printable ASCII values are shown directly. Non-printable characters are often represented by a dot (`.`) or another placeholder.

### Explanation of Each Part

#### Offset: `00000000`

- Indicates that the byte sequence starts at the beginning (offset 0) of the memory or file.

#### Hexadecimal Bytes

- `30` in hex = `48` in decimal = `0` in ASCII
- `31` in hex = `49` in decimal = `1` in ASCII
- `32` in hex = `50` in decimal = `2` in ASCII
- `33` in hex = `51` in decimal = `3` in ASCII
- `34` in hex = `52` in decimal = `4` in ASCII
- `35` in hex = `53` in decimal = `5` in ASCII
- `36` in hex = `54` in decimal = `6` in ASCII
- `37` in hex = `55` in decimal = `7` in ASCII
- `38` in hex = `56` in decimal = `8` in ASCII
- `39` in hex = `57` in decimal = `9` in ASCII
- `41` in hex = `65` in decimal = `A` in ASCII
- `42` in hex = `66` in decimal = `B` in ASCII
- `43` in hex = `67` in decimal = `C` in ASCII
- `44` in hex = `68` in decimal = `D` in ASCII
- `45` in hex = `69` in decimal = `E` in ASCII
- `46` in hex = `70` in decimal = `F` in ASCII

#### ASCII Representation: `|0123456789ABCDEF|`

- This is a readable representation of the hex bytes, showing their ASCII equivalents.
- Each byte is converted from its hexadecimal value to its corresponding ASCII character.
- The `|` characters are delimiters used to clearly separate the ASCII representation from the hexadecimal bytes.

### Summary

The hex dump shows the memory offset, the hexadecimal byte values, and the corresponding ASCII characters for easy interpretation. The `|` characters are just visual delimiters and are not part of the data itself. They help to distinguish the ASCII representation of the bytes from the hexadecimal representation.

## Sections of Assembly Program

.text, .data, .rodata, and .bss sections

The six major sections of program memory correspond to executable code, statically allocated variables, dynamically allocated variables, and automatically allocated variables.
