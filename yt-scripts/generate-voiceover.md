## TERMINAL ONLY

The app only uses Personal Voice from Terminal

```sh
# Say speaks
say "Text to speak"
# Say speaks with personal voice

say -v LoiTwo  -o 2.mp4 "Are you kidding me?"

# This command create the file. The file also plays without issue.
say "Text to speak" -o output.wav  --data-format=LEF32@22050

# Both of these commands create the file, but it's silent.
say -v LoiTwo "Text to speak. Hello World I'm a lot of things. A developer...." -o output-loi.wav  --data-format=LEF32@22050

# Ditto
say -v LoiTwo "text to speak" -o output-loi.wav  --file-format='AIFF' && lame -m m output-loi.wav output-loi.mp3

say -v Karen -f input.txt -o the-recording.mp4

# Notes
# 1. Use a specific voice
# 2. Read from a file for the text to speak
# 3. Output a format
say -v LoiTwo -f tts.txt -o output-loi.wav --file-format=AIFF && lame -m m output-loi.wav output-loi.mp3
```

## Record System Audio while listening to Audio with Airpods

    - Quicktime: 16 Ch as recording input
    - Sound: Output - Multi 16 channel - Type: Aggregate device
    - Sound: Input - Black Hole 16ch - Type: Virtual

- Turn on quicktime audio recording
- Run say -v LoiTwo "...text..." from terminal
- Check it works.

invideo

## Quicktime Record Screen, Audio, Mic, No Airpods

- Background Music On
- Sound Output: Quicktime Input 16: type Aggregate device
- Sound Input: Quicktime Input 16: type Aggregate device
- Quicktime: New Screen Recording > Quicktime 16
- Midi Quicktime 16: MacOS Pro
  - Microphone checked
  - Background Music Checked
