
# Media Format Compatibility Notes

High-level guidance on choosing containers/codecs for web, mobile, and desktop playback.

## Video Containers & Codecs

- **MP4 (H.264 + AAC)**
  - Safest choice for web and mobile
  - Plays in essentially all modern browsers and devices
  - Good default: `libx264` + `aac`

- **WebM (VP9/VP8 + Opus/Vorbis)**
  - Great for modern browsers (Chrome/Firefox/Edge)
  - Not universally supported in some legacy environments
  - Good secondary format when pushing for smaller sizes with VP9.

- **MKV**
  - Flexible, good for archival and tooling
  - Not ideal as a primary web delivery container.

## Recommended Defaults

- **General web playback**
  - Container: `mp4`
  - Video: `libx264`, CRF 20–24, preset `medium`
  - Audio: `aac` 128–192 kbps

- **Modern browsers / higher efficiency**
  - Container: `webm`
  - Video: `libvpx-vp9`, CRF 28–32
  - Audio: `libopus` 96–160 kbps

- **Archival / Source Masters**
  - Keep original camera/source format where practical
  - Or use high-bitrate `libx264`/`libx265` with lower CRF (e.g., 16–18).

## Image Formats

- **JPEG (`.jpg`, `.jpeg`)**
  - Photographic images, good compression
  - No transparency support.

- **PNG**
  - Lossless, supports transparency
  - Larger files; good for graphics, UI, logos.

- **WebP**
  - Modern alternative, supports lossy and lossless + transparency
  - Good for web if client support is acceptable.

- **TIFF**
  - Often used in print/pro workflows; large but flexible.

## Audio Formats

- **MP3**
  - Ubiquitous, lossy
  - Good general-purpose delivery format.

- **AAC / M4A**
  - Better efficiency than MP3 at lower bitrates
  - Very common in video containers.

- **Opus**
  - Excellent efficiency, ideal for streaming/VoIP
  - Best used in WebM/OGG containers.

- **FLAC / WAV**
  - Lossless; FLAC is compressed, WAV is uncompressed PCM.

## Choosing Formats

- If you need **maximum compatibility**, prefer:
  - Video: H.264 in MP4
  - Audio: AAC or MP3
  - Images: JPEG/PNG

- If you target **modern web only**, consider:
  - Video: H.264 MP4 + VP9 WebM variants
  - Images: WebP where supported, with PNG/JPEG fallbacks if needed.


