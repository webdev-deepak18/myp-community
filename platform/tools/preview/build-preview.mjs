#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const [, , srcArg, outArg, mode] = process.argv;
if (!srcArg || !outArg) {
  console.error('Usage: node platform/tools/preview/build-preview.mjs <src.html> <out.html> [story]');
  process.exit(1);
}

const src = path.resolve(srcArg);
const out = path.resolve(outArg);

// Extract tenant dir (e.g. .../tenants/<tenant>)
const match = src.replace(/\\/g, '/').match(/^(.*tenants\/[^/]+)\/.*$/);
if (!match) {
  console.error('Page must live under tenants/<tenant>/');
  process.exit(1);
}

const tenantDir = match[1];
const headFile = path.join(tenantDir, 'preview-head.html');
if (!fs.existsSync(headFile)) {
  console.error(`Missing preview-head.html in ${tenantDir}`);
  process.exit(1);
}

const headContent = fs.readFileSync(headFile, 'utf8');
const headerHMatch = headContent.match(/header-height:\s*([0-9]+)/);
const headerH = headerHMatch ? headerHMatch[1] : '78';

const headerLabelMatch = headContent.match(/header-label:\s*(.*?)\s*-->/);
const headerLabel = headerLabelMatch ? headerLabelMatch[1] : 'CMS Header';

const pagesDir = path.dirname(src);
let storyHead = '';
if (mode === 'story') {
  const storyHeadPath = path.join(tenantDir, 'preview-head-story.html');
  if (fs.existsSync(storyHeadPath)) {
    storyHead = fs.readFileSync(storyHeadPath, 'utf8');
  }
}

const srcContent = fs.readFileSync(src, 'utf8');

const html = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<base href="file:///${pagesDir.replace(/\\/g, '/')}/">
${headContent}
${storyHead}
<style>body{margin:0}.fake-header{height:${headerH}px;background:#FFFDF9;border-bottom:1px solid #9DB2BF;display:flex;align-items:center;padding:0 24px;font:600 16px Roboto,sans-serif;color:#274B64}</style>
</head><body><div class="fake-header">${headerLabel}</div>
${mode === 'story' ? '<div class="mp-story-template-root"><div class="mp-story-content-wrap">' : ''}
${srcContent}
${mode === 'story' ? '</div></div>' : ''}
</body></html>`;

fs.writeFileSync(out, html, 'utf8');
console.log(`Preview written to ${out}`);
