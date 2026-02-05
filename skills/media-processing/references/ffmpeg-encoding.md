
# FFmpeg Encoding Cheatsheet

Practical patterns for encoding and re-encoding media with FFmpeg.

## General Tips

- Always inspect inputs first:
  - `ffprobe -hide_banner -i input.mp4`
- Make commands **idempotent** and **explicit**:
  - Avoid relying on container defaults
  - Specify codecs, bitrates/CRF, and key flags
- Prefer **CRF-based** video quality for most workflows instead of fixed bitrates.

## Common Video Encodes

### H.264 for Web (MP4)

```bash
ffmpeg -i input.mov \
  -c:v libx264 -preset medium -crf 23 \
  -c:a aac -b:a 128k \
  -movflags +faststart \
  output.mp4
```

- Lower `-crf` = better quality, larger file (typical range: 18–28)
- `-preset` trades CPU for size (fast ↔ slow)
- `-movflags +faststart` optimizes for web streaming.

### H.265 / HEVC (Smaller, Slower)

```bash
ffmpeg -i input.mp4 \
  -c:v libx265 -preset slow -crf 26 \
  -c:a aac -b:a 128k \
  output-hevc.mp4
```

- Better compression than H.264 but slower and less universally supported.

### VP9 / WebM

```bash
ffmpeg -i input.mp4 \
  -c:v libvpx-vp9 -b:v 0 -crf 30 \
  -c:a libopus -b:a 128k \
  output.webm
```

- `-b:v 0` + `-crf` is the recommended VP9 quality mode.

## Audio Encoding

### MP3

```bash
ffmpeg -i input.wav \
  -c:a libmp3lame -b:a 192k \
  output.mp3
```

### AAC

```bash
ffmpeg -i input.wav \
  -c:a aac -b:a 128k \
  output.m4a
```

### Lossless FLAC

```bash
ffmpeg -i input.wav \
  -c:a flac \
  output.flac
```

## Two-Pass Encoding (Bitrate-Targeted)

Useful when you need a predictable average bitrate (e.g., constrained bandwidth).

```bash
ffmpeg -y -i input.mp4 \
  -c:v libx264 -b:v 2500k -pass 1 -an \
  -f mp4 /dev/null

ffmpeg -i input.mp4 \
  -c:v libx264 -b:v 2500k -pass 2 \
  -c:a aac -b:a 128k \
  output-2pass.mp4
```

## Upscaling / Downscaling with Encoding

```bash
ffmpeg -i input.mp4 \
  -vf "scale=1280:-2" \
  -c:v libx264 -crf 23 -preset medium \
  -c:a copy \
  output-720p.mp4
```

- `-2` lets FFmpeg pick the nearest even value for height to preserve aspect ratio.


