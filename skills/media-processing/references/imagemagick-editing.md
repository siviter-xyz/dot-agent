
# ImageMagick Editing Cheatsheet

Quick reference for common single-image operations using `magick`.

## Basic Resize

```bash
magick input.jpg -resize 1280x720 output.jpg
```

- `1280x720` – max width/height, preserves aspect ratio
- Use `1280x720!` to force exact size (may distort).

## Crop

```bash
# Width x Height +X +Y
magick input.jpg -crop 800x600+10+10 cropped.jpg
```

Center crop to 1:1:

```bash
magick input.jpg -resize 800x800^ -gravity center -extent 800x800 square.jpg
```

## Rotate & Flip

```bash
magick input.jpg -rotate 90 rotated.jpg
magick input.jpg -flip flipped-vertically.jpg
magick input.jpg -flop flipped-horizontally.jpg
```

## Adjust Brightness / Contrast

```bash
magick input.jpg -brightness-contrast 10x5 adjusted.jpg
```

## Overlay / Watermark

```bash
magick input.jpg watermark.png \
  -gravity southeast -geometry +10+10 -composite \
  watermarked.jpg
```

## Add Text

```bash
magick input.jpg \
  -gravity south \
  -pointsize 32 -fill white -stroke black -strokewidth 2 \
  -annotate +0+20 "Sample Caption" \
  captioned.jpg
```

## Optimize for Web

```bash
magick input.png \
  -strip \
  -resize 1280x1280\> \
  -quality 85 \
  output.jpg
```

- `-strip` removes metadata
- `\>` only resizes if image is larger than target.


