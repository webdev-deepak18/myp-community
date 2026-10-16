#!/bin/bash
# Wrap a tenant's CMS embed page in a minimal document for local preview:
# the tenant's fonts + host CSS (tenants/<tenant>/preview-head.html) and a fake CMS header.
# Usage: platform/tools/preview/build-preview.sh tenants/<tenant>/pages/<page>.html <out.html> [story]
#   story: also load tenants/<tenant>/preview-head-story.html (the story template's forced !important
#          rules) and wrap the page in its content wrapper, to catch host CSS overriding the embed.
# Then: node platform/tools/preview/cdp-capture.mjs "file:///<abs out.html>" <shots_dir> <width> <height> <ms> [<ms>...]
#   - captures real-time screenshots at each ms mark and prints document scrollWidth (overflow check)
#   - don't use chrome --virtual-time-budget for animated heroes: it freezes clip-path transitions mid-way.
set -e
SRC="$1"; OUT="$2"; MODE="$3"
TENANT_DIR="$(echo "$SRC" | sed -nE 's#^(.*tenants/[^/]+)/.*#\1#p')"
if [ -z "$TENANT_DIR" ] || [ ! -f "$TENANT_DIR/preview-head.html" ]; then
  echo "Page must live under tenants/<tenant>/ and that tenant needs a preview-head.html" >&2; exit 1
fi
HEAD_FILE="$TENANT_DIR/preview-head.html"
HEADER_H="$(sed -nE 's#.*header-height: *([0-9]+).*#\1#p' "$HEAD_FILE")"; HEADER_H="${HEADER_H:-78}"
HEADER_LABEL="$(sed -nE 's#.*header-label: *(.*) -->.*#\1#p' "$HEAD_FILE")"
PAGES_DIR="$(cd "$(dirname "$SRC")" && pwd -W 2>/dev/null || pwd)"
{
cat <<HEAD
<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<base href="file:///${PAGES_DIR}/">
HEAD
cat "$HEAD_FILE"
STORY_HEAD="$TENANT_DIR/preview-head-story.html"
if [ "$MODE" = "story" ] && [ -f "$STORY_HEAD" ]; then cat "$STORY_HEAD"; fi
cat <<HEAD
<style>body{margin:0}.fake-header{height:${HEADER_H}px;background:#fff;border-bottom:1px solid #eee;display:flex;align-items:center;padding:0 24px;font:600 16px sans-serif}</style>
</head><body><div class="fake-header">${HEADER_LABEL}</div>
HEAD
if [ "$MODE" = "story" ]; then echo '<div class="mp-story-template-root"><div class="mp-story-content-wrap">'; fi
cat "$SRC"
if [ "$MODE" = "story" ]; then echo '</div></div>'; fi
echo '</body></html>'
} > "$OUT"
echo "Preview written to $OUT"
