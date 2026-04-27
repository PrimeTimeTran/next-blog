## Guide to Generating Audio for Content Creation

- Personal Voice works from Terminal only.

---

## Workflow

- Write script to .txt file.
- Generate .mp3

  ```sh
  # 1. TTS from CLI string
  say -v Loi -o voiceover.mp3 "Hello Everyone. Today we're going to be solving LeetCode 70. Climbing Stairs"

  # 2. TTS from .txt file
  say -v Loi -f tts.txt -o voiceover.wav --file-format=AIFF && lame -m m voiceover.wav voiceover.mp3
  say -v LoiTwo -f voiceover-1.txt -o voiceover.wav --file-format=AIFF && lame -m m voiceover.wav voiceover.mp3
  ```

- Airdrop .mp3 to iPhone
- Select .mp3 inside of CapCut

## Record System Audio while listening to Audio with Airpods

    - Quicktime: 16 Ch as recording input
    - Sound: Output - Multi 16 channel - Type: Aggregate device
    - Sound: Input - Black Hole 16ch - Type: Virtual

---

- Turn on quicktime audio recording
- Run say -v LoiTwo "...text..." from terminal
- Check it works.

## Quicktime Record Screen, Audio, Mic, No Airpods

- Background Music On
- Sound Output: Quicktime Input 16: type Aggregate device
- Sound Input: Quicktime Input 16: type Aggregate device
- Quicktime: New Screen Recording > Quicktime 16
- Midi Quicktime 16: MacOS Pro
  - Microphone checked
  - Background Music Checked
