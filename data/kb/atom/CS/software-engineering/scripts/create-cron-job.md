## How to create a Chron job to run regularly on MacOS

- Create Agent definition.

```sh
mkdir -p ~/Library/LaunchAgents
touch ~/Library/LaunchAgents/com.seepdeep.journalscript.plist
vi ~/Library/LaunchAgents/com.seepdeep.journalscript.plist
```

- Define task.

```sh
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.seepdeep.dailyjob</string>
    <key>ProgramArguments</key>
    <array>
        <string>/bin/bash</string>
        <string>/Users/future/Documents/Work/_Main/Journals/daily_job.sh</string>
    </array>
    <key>StartCalendarInterval</key>
    <dict>
        <key>Hour</key>
        <integer>16</integer>
        <key>Minute</key>
        <integer>25</integer>
    </dict>
    <key>StandardOutPath</key>
    <string>/Users/future/Documents/Work/_Main/Journals/daily_job.log</string>
    <key>StandardErrorPath</key>
    <string>/Users/future/Documents/Work/_Main/Journals/daily_job.log</string>
    <key>RunAtLoad</key>
    <true/>
</dict>
</plist>
```

- Load

```sh
launchctl load ~/Library/LaunchAgents/com.seepdeep.journalscript.plist
```

- Verify

```sh
launchctl list | grep com.seepdeep.journalscript
launchctl list | grep seepdeep
```

- Change Schedule

```sh
# Edit file and restart

code ~/Library/LaunchAgents/com.seepdeep.dailyjob.plist

launchctl unload ~/Library/LaunchAgents/com.seepdeep.dailyjob.plist && launchctl load ~/Library/LaunchAgents/com.seepdeep.dailyjob.plist
```

## Troubleshoot

chmod +x daily_job.sh daily_task.py daily_log.log daily_helper.sh daily_output.txt
chmod +x daily_job.log daily_output.txt "New Day.md"

## Interval

code ~/Library/LaunchAgents/com.seepdeep.jobinterval.plist

<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.seepdeep.jobinterval</string>
    <key>ProgramArguments</key>
    <array>
        <string>/bin/bash</string>
        <string>/Users/future/Documents/Work/_Main/Journals/job_interval.sh</string>
    </array>
    <key>StartInterval</key>
    <integer>60</integer> <!-- Run every 60 seconds (1 minute) -->
    <key>StandardOutPath</key>
    <string>/Users/future/Documents/Work/_Main/Journals/jobs_output/job_interval.log</string>
    <key>StandardErrorPath</key>
    <string>/Users/future/Documents/Work/_Main/Journals/jobs_output/job_interval.log</string>
    <key>RunAtLoad</key>
    <true/>
</dict>
</plist>

launchctl unload ~/Library/LaunchAgents/com.seepdeep.jobinterval.plist

launchctl unload ~/Library/LaunchAgents/com.seepdeep.jobinterval.plist && launchctl load ~/Library/LaunchAgents/com.seepdeep.jobinterval.plist

chmod +x job_interval.sh job_interval.py job_interval.log job_interval.sh job_interval.txt
chmod +x job_interval.log job_interval.txt "New Day.md"
