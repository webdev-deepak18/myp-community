#!/bin/bash
# Wrap a CMS embed page in a minimal document (brand fonts + fake 78px CMS header) for local preview.
# Usage: tools/preview/build-preview.sh pages/home-logged-out.html <out.html>
# Then: node tools/preview/cdp-capture.mjs "file:///<abs out.html>" <shots_dir> <width> <height> <ms> [<ms>...]
#   - captures real-time screenshots at each ms mark and prints hero state + document scrollWidth (overflow check)
#   - don't use chrome --virtual-time-budget for the hero: it freezes clip-path transitions mid-way.
set -e
SRC="$1"; OUT="$2"
PAGES_DIR="$(cd "$(dirname "$SRC")" && pwd -W 2>/dev/null || pwd)"
{
cat <<HEAD
<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<base href="file:///${PAGES_DIR}/">
<link href="https://fonts.googleapis.com/css2?family=Inria+Serif:wght@700&family=Inter:wght@500;600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
<style>body{margin:0}.fake-header{height:78px;background:#fff;border-bottom:1px solid #eee;display:flex;align-items:center;padding:0 24px;font:600 16px Inter}</style>
</head><body><div class="fake-header">MyPeople (CMS header placeholder)</div>
HEAD
cat "$SRC"
echo '</body></html>'
} > "$OUT"
echo "Preview written to $OUT"
