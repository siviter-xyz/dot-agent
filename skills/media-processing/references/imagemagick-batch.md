
# ImageMagick Batch Processing Patterns

ImageMagick (`magick` CLI) is ideal for scripted, repeatable image workflows.

## Basic Structure

```bash
magick input.png -resize 800x600 output.png
```

In batch scenarios, you typically:

- Use shell loops (bash, PowerShell) **or**
- Use higher-level scripts (like `batch_resize.py`) to orchestrate many calls.

## Common Batch Operations

### Resize All Images in a Folder

```bash
mkdir -p out
for f in *.jpg; do
  magick "$f" -resize 1280x720 "out/$f"
done
```

### Convert Format (JPEG → WebP)

```bash
mkdir -p webp
for f in *.jpg; do
  magick "$f" -quality 85 "webp/${f%.*}.webp"
done
```

### Thumbnails (Square, Center-Cropped)

```bash
mkdir -p thumbs
for f in *.jpg; do
  magick "$f" \
    -resize 256x256^ \
    -gravity center -extent 256x256 \
    "thumbs/$f"
done
```

## Using `batch_resize.py`

The `batch_resize.py` script wraps patterns like these in a cross-platform Python CLI:

```bash
uv run skills/media-processing/scripts/batch_resize.py \
  images/ \
  --output out/ \
  --width 1280 \
  --strategy fit \
  --format webp \
  --parallel 4
```

Key options:

- `--strategy`: `fit`, `fill`, `cover`, `exact`, `thumbnail`
- `--format`: target format (e.g., `jpg`, `webp`)
- `--watermark`: overlay image (e.g., logo)
- `--parallel`: parallelism for large batches

Start with `--dry-run` to inspect commands:

```bash
uv run skills/media-processing/scripts/batch_resize.py images/ -o out --width 800 --dry-run
```


