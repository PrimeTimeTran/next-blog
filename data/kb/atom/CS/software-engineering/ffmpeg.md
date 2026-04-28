# Compress .mov file size

```sh
ffmpeg -i cr-demo.mov -vf "scale=1280:-2" -vcodec libx264 -crf 28 cr-compress.mov
```

# Overwrite audio on cr-compress.mov with audio from relax.mp3

```sh
ffmpeg -i cr-compress.mov -i relax.mp3 -c:v copy -c:a aac -map 0:v:0 -map 1:a:0 -shortest output.mov
```

# Combine cr-code.mov & cr-demo, compress them, and then overwrite their audio with relax.mp3's audio.

1. Create input.txt and add the following:

```
file 'cr-code.mov'
file 'cr-demo.mov'
```

2. Combine videos from file

```sh
ffmpeg -f concat -safe 0 -i input.txt -c copy combined.mov
```

1. Compress combined video

```sh
ffmpeg -i combined.mov -vcodec libx264 -crf 23 -preset medium compressed.mov
```

4. Overwrite audio of combined with .mp3 & end the video when the video ends

```sh
ffmpeg -i compressed.mov -i relax.mp3 -c:v copy -c:a aac -map 0:v:0 -map 1:a:0 -shortest final-output.mov
```

# 10 second splices

Splice to have a bit of both periodically

1. Split the video files into segments

```sh
ffmpeg -i cr-code.mov -t 10 -c copy cr-code-segment%d.mov -f segment -segment_time 10 -reset_timestamps 1 cr-code-segment%d.mov
ffmpeg -i cr-demo.mov -t 10 -c copy cr-demo-segment%d.mov -f segment -segment_time 10 -reset_timestamps 1 cr-demo-segment%d.mov
```

2. Create segments.txt and name the segments

```sh
file 'cr-code-segment1.mov'
file 'cr-demo-segment1.mov'
file 'cr-code-segment2.mov'
file 'cr-demo-segment2.mov'
```

3. Concatenate the segments

```sh
ffmpeg -f concat -safe 0 -i segments.txt -c copy combined.mov
```

4. Overwrite original audio

```sh
ffmpeg -i combined.mov -i relax.mp3 -c:v libx264 -crf 23 -preset medium -c:a aac -map 0:v:0 -map 1:a:0 -shortest final-output.mov
```

## Minize .gif

1. Generate a Palette: This step creates a palette with optimized colors for your GIF.

```sh
ffmpeg -i cr-quiz-demo-mobile.gif -vf "palettegen" -y palette.png
ffmpeg -i google-sheets-app-script.gif -vf "palettegen" -y palette.png
```

1. Use the Palette to Compress: This step applies the palette to the GIF to reduce the file size while maintaining the original dimensions.

```sh
ffmpeg -i cr-quiz-demo-mobile.gif -i palette.png -filter_complex "paletteuse" output.gif
ffmpeg -i google-sheets-app-script.gif -i palette.png -filter_complex "paletteuse" output-google-sheets.gif
```

## Blur

magick convert company-3.png -blur 0x8 output-3.png && magick convert company-4.png -blur 0x8 output-4.png &&magick convert company-5.png -blur 0x8 output-5.png

## Make smaller

ffmpeg -i original.mov -vf "scale=1280:-2" -vcodec libx264 -crf 28 compressed.mov

ffmpeg -i original.mov -vf "scale=1280:-2" -vcodec libx264 -crf 28 compressed.mov
