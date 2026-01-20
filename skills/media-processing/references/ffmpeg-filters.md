
# FFmpeg Filter Basics

FFmpeg filters let you transform audio and video streams (scale, crop, overlay, mix, etc.).

## Syntax

```bash
ffmpeg -i input.mp4 -vf "filter1=params,filter2=params" -af "afilter1,afilter2" output.mp4
```

- `-vf` – video filter chain
- `-af` – audio filter chain
- Multiple filters are comma-separated and run left → right.

## Common Video Filters

### Scale

```bash
# Scale width to 1280, keep aspect ratio
ffmpeg -i input.mp4 -vf "scale=1280:-2" output.mp4
```

```bash
# Scale to fit within 1280x720, preserving aspect
ffmpeg -i input.mp4 -vf "scale='min(1280,iw)':'min(720,ih)'" output.mp4
```

### Crop

```bash
# Crop to 1920x800 centered
ffmpeg -i input.mp4 -vf "crop=1920:800" output.mp4
```

```bash
# Crop from top-left region
ffmpeg -i input.mp4 -vf "crop=640:360:0:0" output.mp4
```

### Draw Text (Requires libfreetype)

```bash
ffmpeg -i input.mp4 -vf "drawtext=text='Sample':x=10:y=H-th-10:fontcolor=white:shadowx=2:shadowy=2" \
  -c:a copy output.mp4
```

### Overlay (Watermark)

```bash
ffmpeg -i input.mp4 -i watermark.png \
  -filter_complex "overlay=W-w-10:H-h-10" \
  -c:a copy output.mp4
```

- `W`, `H` – main video width/height
- `w`, `h` – overlay width/height.

## Common Audio Filters

### Volume

```bash
ffmpeg -i input.mp3 -af "volume=1.5" louder.mp3
```

### Fade In / Fade Out

```bash
ffmpeg -i input.mp3 -af "afade=t=in:ss=0:d=3,afade=t=out:st=27:d=3" faded.mp3
```

- `d` – duration, `ss` – start time for fade-in, `st` – start time for fade-out.

### Low-Pass / High-Pass

```bash
ffmpeg -i input.wav -af "lowpass=f=3000" output.wav
ffmpeg -i input.wav -af "highpass=f=200" output.wav
```

## Filtergraph Tips

- Use `-filter_complex` when:
  - Multiple inputs (e.g., overlay, picture-in-picture)
  - Shared intermediate results
- Quote complex graphs to avoid shell interpretation issues.
- Start simple and build up; many FFmpeg errors are filtergraph typos.


