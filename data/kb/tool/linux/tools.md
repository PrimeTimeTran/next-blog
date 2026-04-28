## Most useful CLI commands

| Command                    | Flags  | Arguments                  | Desc                                                |
| -------------------------- | ------ | -------------------------- | --------------------------------------------------- |
| ls                         | -la    | leetcode                   | list files in long format including hidden          |
|                            | -l     | .                          | long listing of current directory                   |
|                            |        |                            |                                                     |
| find                       | —      | . -name "\*.js"            | find JS files in current directory                  |
|                            | —      | home -type f               | find only files under /home                         |
|                            | -exec  | rm ;                       | execute command on each result                      |
|                            |        |                            |                                                     |
| grep                       |        | file.txt                   | search inside file content                          |
|                            | -r     | "text" .                   | recursive search "text" in dir                      |
|                            | -rn    | "text" .                   | recursive search "text" in dir showing line numbers |
|                            | -i     | "pattern" file.txt         | case-insensitive search                             |
|                            | -v     | "test" file.txt            | invert match (exclude matches)                      |
|                            | -E     | "apple \| banana" file.txt | extended regex matching                             |
|                            |        |                            |                                                     |
| cat                        |        | file.txt                   | show file content                                   |
|                            | -n     | file.txt                   | print file with line numbers                        |
|                            | —      | file1 file2                | concatenate files                                   |
|                            |        |                            |                                                     |
| cp                         | -r     | dir1 dir2                  | copy directory recursively                          |
|                            | -i     | file1 file2                | prompt before overwrite                             |
|                            |        |                            |                                                     |
| mv                         | -i     | file1 file2                | move/rename with confirmation                       |
|                            |        |                            |                                                     |
| rm                         | -rf    | dir/                       | force remove recursively                            |
|                            |        |                            |                                                     |
| tree                       | -L 2   | /path                      | limit directory depth                               |
|                            | -a     | .                          | include hidden files                                |
|                            |        |                            |                                                     |
|                            |        |                            |                                                     |
| fc                         |        |                            | fix command                                         |
|                            | -l     | —                          | list command history                                |
|                            | -ln    | —                          | list command and suppress line numbers              |
|                            | -e vim | —                          | edit command from history                           |
|                            |        |                            |                                                     |
|                            |        |                            |                                                     |
| yank                       | —      | file.txt                   | copy file contents to clipboard                     |
|                            | -l     | —                          | list clipboard history                              |
|                            |        |                            |                                                     |
| echo                       | —      | "hello"                    | print text                                          |
|                            |        |                            |                                                     |
| pwd                        | —      | —                          | print working directory                             |
|                            |        |                            |                                                     |
| cp                         |        |                            |                                                     |
|                            |        |                            |                                                     |
| ssh                        | -i     | key_path                   | use a specific private key for authentication       |
|                            | -p     | port                       | connect to a custom SSH port                        |
|                            | -L     | local:remote:host          | local port forwarding (tunnel traffic through SSH)  |
|                            |        |                            |                                                     |
| sed                        | -n     | —                          | suppress automatic printing (only print explicitly) |
|                            | -i     | file                       | edit file in place                                  |
|                            | -E     | script                     | enable extended regex syntax                        |
|                            | —      | 's/old/new/g' file         | substitute text (global replace pattern)            |
|                            |        |                            |                                                     |
| nc                         | -l     | port                       | listen on a port (server mode)                      |
|                            | -v     | host port                  | verbose connection output                           |
|                            | -z     | host port(s)               | scan ports without sending data (port check)        |
|                            | -u     | host port                  | use UDP instead of TCP                              |
|                            | -w     | seconds                    | set timeout for connections                         |
|                            |        |                            |                                                     |
| man                        |        | grep                       | print instructions on how to use grep command       |
|                            |        |                            |                                                     |
| mkdir                      | -p     | path                       | create parent directories as needed                 |
|                            | -v     | path                       | print a message for each created directory          |
|                            | —      | name                       | create a directory                                  |
|                            |        |                            |                                                     |
| tail                       | -n     | number file                | show last N lines of a file                         |
|                            | -f     | file                       | follow file output in real time                     |
|                            | -c     | number file                | show last N bytes of a file                         |
|                            |        |                            |                                                     |
| curl                       | -O     | url                        | download file using remote filename                 |
|                            | -o     | file url                   | save output to specific file                        |
|                            | -I     | url                        | fetch headers only                                  |
|                            | -L     | url                        | follow redirects                                    |
|                            |        |                            |                                                     |
| history                    | -c     | —                          | clear shell history                                 |
|                            | -d     | offset                     | delete specific entry                               |
|                            | -w     | file                       | write his to file                                   |
|                            |        |                            |                                                     |
| chmod                      | -R     | path                       | apply permissions recursively                       |
|                            | u+x    | file                       | add execute permission for user                     |
|                            | g+w    | file                       | add write permission for group                      |
|                            | o-r    | file                       | remove read permission for others                   |
|                            | —      | 755 file                   | set numeric permission mode                         |
|                            |        |                            |                                                     |
| touch                      |        |                            |                                                     |
|                            |        |                            |                                                     |
| vim                        |        |                            |                                                     |
| [[tool/git/commands\|git]] |        |                            |                                                     |
| [[kubectl]]                |        |                            |                                                     |

## Specific

| CLI    | Flags | Name | Description                                                                                                                                  |
| ------ | ----- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| ⚡️⚡️ |       |      | 1. 🧭                                                                                                                                        |
| git    |       |      |                                                                                                                                              |
| gcloud |       |      |                                                                                                                                              |
| rsync  |       |      | a fast and versatile command-line utility for synchronizing files and directories between two locations—locally or over a network using SSH. |
| mdutil |       |      | metadata                                                                                                                                     |
| rg     |       |      |                                                                                                                                              |
| ffmpeg |       |      |                                                                                                                                              |
| nmap   |       |      |                                                                                                                                              |
| psql   |       |      |                                                                                                                                              |
