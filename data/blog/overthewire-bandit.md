---
title: 'Over The Wire - Bandit'
date: '2022-11-02'
tags: ['Infosec']
draft: false
summary: 'Over The Wire - Bandit'
layout: PostSimple
bibliography: references-data.bib
canonicalUrl:
---

## 1. Over the wire

### Intro

An overview of the techniques to overcome each level of over the wire's bandit.

## Bandit0 - SSH to remote machine

How to SSH into a remote machine.
Use SSH cli command with username, host and port.

```sh
ssh bandit0@bandit.labs.overthewire.org -p 2220
```

```sh
bandit0
```

## Bandit1 - How to handle dash file names

Use cat with an absolute or relative path `/home/bandit1` or or `./-`

```sh
ssh bandit1@bandit.labs.overthewire.org -p 2220
```

```sh
NH2SXQwcBdpmTEzi3bvBHMM9H66vVXjL
```

```sh
cat ./-
```

## Bandit2 - How to handle spaces in file names

Use escape character before spaces

```sh
ssh bandit2@bandit.labs.overthewire.org -p 2220
```

```sh
rRGizSaX8Mk1RTb1CNQoXTcYZWU6lgzi
```

```sh
cat ./spaces\ in\ this\ filename
```

## Bandit3 - How to view hidden files. file in directory to view hidden files

Search for hidden files.

```sh
ssh bandit3@bandit.labs.overthewire.org -p 2220
```

```sh
aBZ0W5EmUfAf7kHTQeOwd8bauFJ2lAiG
```

```sh
ls -al
```

## Bandit4 - How to identify human readable files. ASCII text files

How to identify human readable files. ASCII text files.

```sh
ssh bandit4@bandit.labs.overthewire.org -p 2220
```

```sh
2EW7BBsr6aMMoJ2HjW067dm8EgX26xNe
```

```sh
file ./-file*
```

## Bandit5 - Search system for file depending on parameters

```bash
ssh bandit5@bandit.labs.overthewire.org -p 2220
```

```bash
lrIWWI6bB37kxfiCQZqUdOIYfr6eEeqR
```

Search a path for file meeting parameters. After finding the file then cat it.

```bash
find ./ -type f -size 1033c ! -executable
```

## Bandit6 - Search from root directory. Find file fitting certain parameters

```sh
ssh bandit6@bandit.labs.overthewire.org -p 2220
```

```sh
P4L4vucdmLnm8I7Vl7jG1ApGSfjYKqJU
```

Search from root directory for file meeting specific parameters

```sh
find / -user bandit7 -group bandit6 -size 33c
```

View specific file we got from the previous output

```sh
cat /var/lib/dpkg/info/bandit7.password
```

## Bandit7 - Grep a large file for a specific string on a line

```sh
ssh bandit7@bandit.labs.overthewire.org -p 2220
```

```sh
z7WtoNQU2XfjmMtWA8u5rN4vzqu4v99S
```

Grep a large file for a specific string on a line.

```sh
grep -n millionth data.txt
```

## Bandit8 - Sort lines of file on the identicals then grab only the unique one

```sh
ssh bandit8@bandit.labs.overthewire.org -p 2220
```

```sh
TESKZC0XvTetK0S9xNwm25STk5iWrBvP
```

Sort the lines of the file based on the ones that are identical then grab
only the unique one.

```sh
sort data.txt | uniq -u
```

## Bandit9 - Use strings to print the sequence of printable characters in files

```sh
ssh bandit9@bandit.labs.overthewire.org -p 2220
```

```sh
EN632PlfYiZbn3PhVK3XOGSlNInNE00t
```

Use strings to print the sequence of printable characters in files.

```sh
cat data.txt | strings -e s | grep ==
```

## Bandit10 - Decode from base64

```sh
ssh bandit10@bandit.labs.overthewire.org -p 2220
```

```sh
G7w8LIi6J3kTb8A7j9LgrywtEUlyyp6s
```

```sh
cat data.txt | base64 -d
```

## Bandit11 - PW in data.txt, where all lowercase (a-z) and uppercase (A-Z) letters have been rotated by 13 positions

```sh
ssh bandit11@bandit.labs.overthewire.org -p 2220
```

```sh
6zPeziLdR2RKNdNYFNb6nVCKzphlXHBM
```

The password for the next level is stored in the file data.txt, where all
lowercase (a-z) and uppercase (A-Z) letters have been rotated by 13 positions

Rotate chars by 13 using a special command

```sh
cat data.txt | tr "A-Za-z" "N-ZA-Mn-za-m"
```

## Bandit12 - Create directory for tmp stuff, copy data.txt over, and move into that directory

The password for the next level is stored in the file data.txt, which is a hexdump
of a file that has been repeatedly compressed. For this level it may be useful to
create a directory under /tmp in which you can work using mkdir. For example:
mkdir /tmp/myname123. Then copy the datafile using cp, and rename it using mv
(read the manpages!)

```sh
ssh bandit12@bandit.labs.overthewire.org -p 2220
```

```sh
JVNBBFSmZwKKOP0XbFXOoW8chDz5yVRv
```

```sh
mkdir -p /tmp/workhere && cp data.txt /tmp/workhere && cd /tmp/workhere
```

Create directory for tmp stuff, copy data.txt over, and move into that directory.

```sh
cat data.txt | xxd -r > data
```

Reverse hex dump

```sh
mv data data2.gz
```

```sh
gzip -d data2.gz
```

We change the suffix of data back to .gz, which means the file would be renamed
to data2.gz. Then, we use gzip to decompress the file. Afterward, we use the file
command to check the information of data2 again.

`mv data2 data3.bz`
`bzip2 -d data3.bz`
`file data3`

Run this loop a few times uncompressing

13 - wbWdlBxEir4CaE8LaPhauuOo6pwRmrDw

The password for the next level is stored in /etc/bandit_pass/bandit14 and can
only be read by user bandit14. For this level, you don’t get the next password,
but you get a private SSH key that can be used to log into the next level. Note:
localhost is a hostname that refers to the machine you are working on

```sh
ssh bandit13@bandit.labs.overthewire.org -p 2220
```

```sh
wbWdlBxEir4CaE8LaPhauuOo6pwRmrDw
```

Use private key on bandit13 to ssh into bandit14

`ssh -i sshkey.private bandit14@bandit.labs.overthewire.org -p 2220`

Now check the file in this machine, `/etc/bandit_pass/bandit14`

14 - Use NC to send messages to local http server

The password for the next level can be retrieved by submitting the password of
the current level to port 30000 on localhost.

```sh
ssh bandit14@bandit.labs.overthewire.org -p 2220
```

```sh
fGrHPx402xGC7U7rXKDaxiWFTOiF0ENq
```

```sh
echo "fGrHPx402xGC7U7rXKDaxiWFTOiF0ENq" | nc localhost 30000
```

15 - Use OpenSSL to connect

```sh
ssh bandit15@bandit.labs.overthewire.org -p 2220
```

```sh
jN2kgmIXJ6fShzhT2avhotn4Zcka6tnt
```

The password for the next level can be retrieved by submitting the password of
the current level to port 30001 on localhost using SSL encryption.

Helpful note: Getting “HEARTBEATING” and “Read R BLOCK”? Use -ign_eof and read the
“CONNECTED COMMANDS” section in the manpage. Next to ‘R’ and ‘Q’, the ‘B’ command
also works in this version of that command…

```sh
openssl s_client -connect localhost:30001
```

Connect to the server and then enter the password to the current level.

```sh
jN2kgmIXJ6fShzhT2avhotn4Zcka6tnt
```

16 - Use nmap to identify open ports and openssl to send them passwords

```sh
ssh bandit16@bandit.labs.overthewire.org -p 2220
```

```sh
JQttfApK4SeyHwDlI9SXGR50qclOAil1
```

The credentials for the next level can be retrieved by submitting the password
of the current level to a port on localhost in the range 31000 to 32000. First
find out which of these ports have a server listening on them. Then find out which
of those speak SSL and which don’t. There is only 1 server that will give the
next credentials, the others will simply send back to you whatever you send to it.

After getting the key you should create a bandit.key on local and then chmod it.
Afterwards use the key to ssh into a remote machine for 17

Use `nmap` to identify open ports.

```sh
cat /etc/bandit_pass/bandit16 | openssl s_client -connect localhost:31046 -quiet
cat /etc/bandit_pass/bandit16 | openssl s_client -connect localhost:31518 -quiet
cat /etc/bandit_pass/bandit16 | openssl s_client -connect localhost:31691 -quiet
cat /etc/bandit_pass/bandit16 | openssl s_client -connect localhost:31790 -quiet
cat /etc/bandit_pass/bandit16 | openssl s_client -connect localhost:31960 -quiet
```

```sh
-----BEGIN RSA PRIVATE KEY-----
MIIEogIBAAKCAQEAvmOkuifmMg6HL2YPIOjon6iWfbp7c3jx34YkYWqUH57SUdyJ
imZzeyGC0gtZPGujUSxiJSWI/oTqexh+cAMTSMlOJf7+BrJObArnxd9Y7YT2bRPQ
Ja6Lzb558YW3FZl87ORiO+rW4LCDCNd2lUvLE/GL2GWyuKN0K5iCd5TbtJzEkQTu
DSt2mcNn4rhAL+JFr56o4T6z8WWAW18BR6yGrMq7Q/kALHYW3OekePQAzL0VUYbW
JGTi65CxbCnzc/w4+mqQyvmzpWtMAzJTzAzQxNbkR2MBGySxDLrjg0LWN6sK7wNX
x0YVztz/zbIkPjfkU1jHS+9EbVNj+D1XFOJuaQIDAQABAoIBABagpxpM1aoLWfvD
KHcj10nqcoBc4oE11aFYQwik7xfW+24pRNuDE6SFthOar69jp5RlLwD1NhPx3iBl
J9nOM8OJ0VToum43UOS8YxF8WwhXriYGnc1sskbwpXOUDc9uX4+UESzH22P29ovd
d8WErY0gPxun8pbJLmxkAtWNhpMvfe0050vk9TL5wqbu9AlbssgTcCXkMQnPw9nC
YNN6DDP2lbcBrvgT9YCNL6C+ZKufD52yOQ9qOkwFTEQpjtF4uNtJom+asvlpmS8A
vLY9r60wYSvmZhNqBUrj7lyCtXMIu1kkd4w7F77k+DjHoAXyxcUp1DGL51sOmama
+TOWWgECgYEA8JtPxP0GRJ+IQkX262jM3dEIkza8ky5moIwUqYdsx0NxHgRRhORT
8c8hAuRBb2G82so8vUHk/fur85OEfc9TncnCY2crpoqsghifKLxrLgtT+qDpfZnx
SatLdt8GfQ85yA7hnWWJ2MxF3NaeSDm75Lsm+tBbAiyc9P2jGRNtMSkCgYEAypHd
HCctNi/FwjulhttFx/rHYKhLidZDFYeiE/v45bN4yFm8x7R/b0iE7KaszX+Exdvt
SghaTdcG0Knyw1bpJVyusavPzpaJMjdJ6tcFhVAbAjm7enCIvGCSx+X3l5SiWg0A
R57hJglezIiVjv3aGwHwvlZvtszK6zV6oXFAu0ECgYAbjo46T4hyP5tJi93V5HDi
Ttiek7xRVxUl+iU7rWkGAXFpMLFteQEsRr7PJ/lemmEY5eTDAFMLy9FL2m9oQWCg
R8VdwSk8r9FGLS+9aKcV5PI/WEKlwgXinB3OhYimtiG2Cg5JCqIZFHxD6MjEGOiu
L8ktHMPvodBwNsSBULpG0QKBgBAplTfC1HOnWiMGOU3KPwYWt0O6CdTkmJOmL8Ni
blh9elyZ9FsGxsgtRBXRsqXuz7wtsQAgLHxbdLq/ZJQ7YfzOKU4ZxEnabvXnvWkU
YOdjHdSOoKvDQNWu6ucyLRAWFuISeXw9a/9p7ftpxm0TSgyvmfLF2MIAEwyzRqaM
77pBAoGAMmjmIJdjp+Ez8duyn3ieo36yrttF5NSsJLAbxFpdlc1gvtGCWW+9Cq0b
dxviW8+TFVEBl1O4f7HVm6EpTscdDxU+bCXWkfjuRb7Dy9GOtt9JPsX8MBTakzh3
vBgsyi/sN3RqRBcGU40fOoZyfAMT8s1m/uYv52O6IgeuZ/ujbjY=
-----END RSA PRIVATE KEY-----
```

Save key to a local file named `bandit.key`

`chmod 400 bandit.key`

```sh
ssh -i bandit.key bandit17@bandit.labs.overthewire.org -p 2220
```

17 -
There are 2 files in the homedirectory: passwords.old and passwords.new. The password
for the next level is in passwords.new and is the only line that has been changed
between passwords.old and passwords.new

```sh
diff passwords.new passwords.old
```

18 - hga5tuuCLF6fFzUpnagiMN8ssu9LFrdg
The password for the next level is stored in a file readme in the homedirectory.
Unfortunately, someone has modified .bashrc to log you out when you log in with SSH.

```ssh
ssh bandit18@bandit.labs.overthewire.org -p 2220 "cat ~/readme"
```

```sh
hga5tuuCLF6fFzUpnagiMN8ssu9LFrdg
```

Issue cat command with logic to read the password before being logged out.

19 - Use a binary to access a file as a different user.

```ssh
ssh bandit19@bandit.labs.overthewire.org -p 2220
```

```sh
awhqfNnAbc1naukrpqDYcF95h7HoMTrC
```

To gain access to the next level, you should use the setuid binary in the
homedirectory. Execute it without arguments to find out how to use it. The password
for this level can be found in the usual place (/etc/bandit_pass), after you have
used the setuid binary.

```sh
ls -al ./bandit20-do
./bandit20-do
./bandit20-do id
ls /etc/bandit_pass/bandit*
ls /etc/bandit_pass/bandit20
cat /etc/bandit_pass/bandit20
./bandit20-do cat /etc/bandit_pass/bandit20
```

20 - VxCazJaVykI6W36BkBU0mJTCM8rR95XT

```sh
ssh bandit20@bandit.labs.overthewire.org -p 2220
```

```sh
VxCazJaVykI6W36BkBU0mJTCM8rR95XT
```

There is a setuid binary in the homedirectory that does the following: it makes
a connection to localhost on the port you specify as a commandline argument. It
then reads a line of text from the connection and compares it to the password in
the previous level (bandit20). If the password is correct, it will transmit the
password for the next level (bandit21).

```sh
echo -n 'VxCazJaVykI6W36BkBU0mJTCM8rR95XT' | nc -l -p 1234 &
```

```sh

```

21 - Find password inside of cron job

```ssh
ssh bandit21@bandit.labs.overthewire.org -p 2220
```

```sh
NvEJF7oVjkddltPSrdKEFOllh9V1IBcq
```

```sh
cd /etc/cron.d

cat cronjob_bandit22
```

```sh
cat /usr/bin/cronjob_bandit22.sh
cat /tmp/t7O6lds9S0RqQh9aMcz6ShpAoZKF7fgv
```

22 -

Learn how to read a bash script

```ssh
ssh bandit22@bandit.labs.overthewire.org -p 2220
```

```sh
WdDozAdTM2z9DiFEQ2mGlwngMfj4EZff
```

```sh
cat /usr/bin/cronjob_bandit23.sh
```

```bash
#!/bin/bash

myname=$(whoami)
mytarget=$(echo I am user $myname | md5sum | cut -d ' ' -f 1)

echo "Copying passwordfile /etc/bandit_pass/$myname to /tmp/$mytarget"

cat /etc/bandit_pass/$myname > /tmp/$mytarget
```

23 - Create a script

A program is running automatically at regular intervals from cron, the time-based
job scheduler. Look in /etc/cron.d/ for the configuration and see what command is
being executed.

NOTE: This level requires you to create your own first shell-script. This is a
very big step and you should be proud of yourself when you beat this level!

NOTE 2: Keep in mind that your shell script is removed once executed, so you may
want to keep a copy around…

```ssh
ssh bandit23@bandit.labs.overthewire.org -p 2220
```

```sh
QYw0Y2aiA672PsMmh9puTQuhoz8SyR2G
```

```sh
cat /usr/bin/cronjob_bandit24.sh
```

```sh
#!/bin/bash

myname=$(whoami)

cd /var/spool/$myname/foo
echo "Executing and deleting all scripts in /var/spool/$myname/foo:"
for i in * .*;
do
    if [ "$i" != "." -a "$i" != ".." ];
    then
        echo "Handling $i"
        owner="$(stat --format "%U" ./$i)"
        if [ "${owner}" = "bandit23" ]; then
            timeout -s 9 60 ./$i
        fi
        rm -f ./$i
    fi
done
```

```sh
mkdir /tmp/rand
cd /tmp/rand
touch script.sh
```

```sh
#!/bin/bash
cat /etc/bandit_pass/bandit24 > /tmp/rand/password
```

```sh
cp script.sh /var/spool/bandit24/foo
chmod 777 /tmp/rand
```

24 -

```ssh
ssh bandit24@bandit.labs.overthewire.org -p 2220
```

```sh
VAfGXJ1PBSsPSnvsjI8p759leLZ9GGar
```

25 -
