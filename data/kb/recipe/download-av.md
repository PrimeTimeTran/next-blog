1. Search file doesn't exist
   find . -iname '**'
   find . -iname '**'
2. Find "playlist.m3u8"
   https://www.example.com/playlist.m3u8
3. Get Referrer headers
   - Chrome network tab. Copy as curl
4. Plugin referer, name, url
   yt-dlp \
    --add-header "Referer: https://website.com" \
    --add-header "User-Agent: Mozilla/5.0" \
    -o "NAME.mp4" \
   "https://www.example.com/playlist.m3u8"

### Update
