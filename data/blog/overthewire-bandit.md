---
title: 'Data structures & Algorithms'
date: '2022-10-18'
tags: ['Data structures', 'Algorithms', 'Leetcode']
draft: true
summary: 'Two sum'
layout: PostSimple
bibliography: references-data.bib
canonicalUrl:
---

## 1. Over the wire

### Intro

## Bandit

0 - bandit0
`ssh bandit5@bandit.labs.overthewire.org -p 2220`
How to SSH into a remote machine

1 - NH2SXQwcBdpmTEzi3bvBHMM9H66vVXjL
How to handle dash file names.
Must use entire file path when cat the file

2 - rRGizSaX8Mk1RTb1CNQoXTcYZWU6lgzi
How to handle spaces in file names.
Must use escape slash before the spaces.

3 - aBZ0W5EmUfAf7kHTQeOwd8bauFJ2lAiG
`ls -al`
How to view hidden files. file in directory to view hidden files

4 - 2EW7BBsr6aMMoJ2HjW067dm8EgX26xNe
`file ./-file*`
How to identify human readable files. ASCII text files.

5 - lrIWWI6bB37kxfiCQZqUdOIYfr6eEeqR
`find ./ -type f -size 1033c ! -executable`
Search system for file depending on parameters

6 - P4L4vucdmLnm8I7Vl7jG1ApGSfjYKqJU
`find / -user bandit7 -group bandit6 -size 33c`
Search from root directory. Find file fitting certain parameters.

`cat /var/lib/dpkg/info/bandit7.password`
View specific file we got from the previous output

7 - z7WtoNQU2XfjmMtWA8u5rN4vzqu4v99S
`grep millionth data.txt`
Grep a large file for a specific string on a line.

8 - TESKZC0XvTetK0S9xNwm25STk5iWrBvP
`sort data.txt | uniq -u`
Sort the lines of the file based on the ones that are identical then grab only the unique one

9 - EN632PlfYiZbn3PhVK3XOGSlNInNE00t
`cat data.txt | strings -e s | grep ==`
Use strings to print the sequence of printable characters in files.

10 - G7w8LIi6J3kTb8A7j9LgrywtEUlyyp6s
`cat data.txt | base64 -d`
Decode from base64.

11 - 6zPeziLdR2RKNdNYFNb6nVCKzphlXHBM
The password for the next level is stored in the file data.txt, where all lowercase (a-z) and uppercase (A-Z) letters have been rotated by 13 positions

`cat data.txt | tr "A-Za-z" "N-ZA-Mn-za-m"`
Rotate chars by 13 using a special command

12 - JVNBBFSmZwKKOP0XbFXOoW8chDz5yVRv
The password for the next level is stored in the file data.txt, which is a hexdump of a file that has been repeatedly compressed. For this level it may be useful to create a directory under /tmp in which you can work using mkdir. For example: mkdir /tmp/myname123. Then copy the datafile using cp, and rename it using mv (read the manpages!)

`mkdir -p /tmp/workhere && cp data.txt /tmp/workhere && cd /tmp/workhere`
Create directory for tmp stuff, copy data.txt over, and move into that directory.

`cat data.txt | xxd -r > data`
Reverse hex dump

`mv data data2.gz`

`gzip -d data2.gz`
We change the suffix of data back to .gz, which means the file would be renamed to data2.gz. Then, we use gzip to decompress the file. Afterward, we use the file command to check the information of data2 again.

`mv data2 data3.bz`
`bzip2 -d data3.bz`
`file data3`

Run this loop a few times uncompressing

13 - wbWdlBxEir4CaE8LaPhauuOo6pwRmrDw
The password for the next level is stored in /etc/bandit_pass/bandit14 and can only be read by user bandit14. For this level, you don’t get the next password, but you get a private SSH key that can be used to log into the next level. Note: localhost is a hostname that refers to the machine you are working on

https://mayadevbe.me/posts/overthewire/bandit/level14/

Copy SSH to our local machine then mod it

`chmod 700 sshkey.private`

Use it to SSH into another machine

`ssh -i sshkey.private bandit14@bandit.labs.overthewire.org -p 2220`

14 - fGrHPx402xGC7U7rXKDaxiWFTOiF0ENq
The password for the next level can be retrieved by submitting the password of the current level to port 30000 on localhost.

`echo "fGrHPx402xGC7U7rXKDaxiWFTOiF0ENq" | nc localhost 30000`

15 - jN2kgmIXJ6fShzhT2avhotn4Zcka6tnt
The password for the next level can be retrieved by submitting the password of the current level to port 30001 on localhost using SSL encryption.

Helpful note: Getting “HEARTBEATING” and “Read R BLOCK”? Use -ign_eof and read the “CONNECTED COMMANDS” section in the manpage. Next to ‘R’ and ‘Q’, the ‘B’ command also works in this version of that command…

`openssl s_client -connect localhost:30001`

16 - JQttfApK4SeyHwDlI9SXGR50qclOAil1
The credentials for the next level can be retrieved by submitting the password of the current level to a port on localhost in the range 31000 to 32000. First find out which of these ports have a server listening on them. Then find out which of those speak SSL and which don’t. There is only 1 server that will give the next credentials, the others will simply send back to you whatever you send to it.

After getting the key you should create a bandit.key on local and then chmod it. Afterwards use the key to ssh into a remote machine for 17

```
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

`ssh -i bandit.key bandit17@bandit.labs.overthewire.org -p 2220`

17 -
18 -
19 -  
20 -
21 -
22 -
23 -
24 -
25 -
