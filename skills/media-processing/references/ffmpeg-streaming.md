
# FFmpeg for Streaming & HTTP Playback

Patterns for creating streaming-friendly outputs (HLS, progressive MP4).

## Progressive MP4 for Web

Use `-movflags +faststart` so players can start quickly:

```bash
ffmpeg -i input.mp4 \
  -c:v libx264 -preset medium -crf 23 \
  -c:a aac -b:a 128k \
  -movflags +faststart \
  output-web.mp4
```

Serve over HTTPS with correct `Content-Type: video/mp4`.

## HTTP Live Streaming (HLS)

### Basic HLS

```bash
ffmpeg -i input.mp4 \
  -codec:V libx264 -codec:a aac \
  -start_number 0 \
  -hls_time 6 \
  -hls_list_size 0 \
  -f hls playlist.m3u8
```

- `-hls_time` – segment duration (seconds)
- `-hls_list_size 0` – keep all segments listed (VOD).

### Multi-Bitrate HLS (Ladder)

```bash
ffmpeg -i input.mp4 \
  -filter:v:0 scale=w=1920:h=1080:force_original_aspect_ratio=decrease -c:v:0 libx264 -b:v:0 5000k \
  -filter:v:1 scale=w=1280:h=720:force_original_aspect_ratio=decrease  -c:v:1 libx264 -b:v:1 3000k \
  -filter:v:2 scale=w=854:h=480:force_original_aspect_ratio=decrease   -c:v:2 libx264 -b:v:2 1500k \
  -map v:0 -map a:0 \
  -map v:1 -map a:0 \
  -map v:2 -map a:0 \
  -var_stream_map "v:0,a:0 v:1,a:1 v:2,a:2" \
  -master_pl_name master.m3u8 \
  -f hls -hls_time 6 -hls_list_size 0 \
  -hls_segment_filename "v%v/seg_%03d.ts" "v%v/playlist.m3u8"
```

This is verbose—start from FFmpeg docs or simpler examples and adapt.

## DASH (High-Level)

For MPEG-DASH, use `-f dash`, but HLS is usually enough unless you have specific platform needs.

```bash
ffmpeg -i input.mp4 \
  -map 0:v -map 0:a \
  -c:v libx264 -c:a aac \
  -f dash manifest.mpd
```

## Live Ingest (RTMP Example)

```bash
ffmpeg -re -i input.mp4 \
  -c:v libx264 -preset veryfast -maxrate 3000k -bufsize 6000k \
  -c:a aac -b:a 128k \
  -f flv rtmp://live.example.com/app/stream-key
```

- `-re` – read input at native rate (emulates live).

## Practical Notes

- Use **constant frame rate** outputs for better player compatibility.
- Keep audio in common formats (AAC, Opus).
- Test with `ffplay`, browser video elements, and your target players/CDN.


