## Download MP4 from site without "ability".

Streamed videos can be downloaded from any site in which you can watch the video.

1. Open Devtools
2. Find network request ending with something like ...playlist.m3u8
3. Check it has correct downstream formats & sequences

   - Grab that url and run
   - `curl -s https://www.example.com/media/12345.mu38`

4. Download with this command if everything checks out; replacing -o name and the last argument, the url.

```sh
yt-dlp \
  --add-header "Referer: https://site.com" \
  --add-header "User-Agent: Mozilla/5.0" \
  -o "File Name.mp4" \
  "https://url.m3u8"
```
