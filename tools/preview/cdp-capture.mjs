// Real-time hero capture via Chrome DevTools Protocol (Node 22 global WebSocket).
import { spawn } from 'node:child_process';
import { writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
const [,, url, outDir, width, height, ...times] = process.argv;
const prof = mkdtempSync(join(tmpdir(), 'cdp-'));
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe',
  ['--headless=new', '--remote-debugging-port=9333', `--user-data-dir=${prof}`, '--hide-scrollbars',
   '--allow-file-access-from-files', `--window-size=${width},${height}`, 'about:blank'], { stdio: 'ignore' });
const sleep = ms => new Promise(r => setTimeout(r, ms));
let targets;
for (let i = 0; i < 40; i++) { try { targets = await (await fetch('http://127.0.0.1:9333/json')).json(); break; } catch { await sleep(250); } }
const page = targets.find(t => t.type === 'page');
const ws = new WebSocket(page.webSocketDebuggerUrl);
await new Promise(r => ws.onopen = r);
let id = 0; const pending = {};
ws.onmessage = e => { const m = JSON.parse(e.data); if (m.id && pending[m.id]) { pending[m.id](m.result); delete pending[m.id]; } };
const send = (method, params = {}) => new Promise(r => { const i = ++id; pending[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
await send('Emulation.setDeviceMetricsOverride', { width: +width, height: +height, deviceScaleFactor: 1, mobile: +width < 600 });
await send('Page.navigate', { url });
const t0 = Date.now();
// Optional: MP_SCROLL=<css selector> scrolls that section into view before the captures
const scrollSel = process.env.MP_SCROLL;
let scrolled = !scrollSel;
for (const t of times) {
  if (!scrolled) {
    await sleep(800);
    await send('Runtime.evaluate', { expression: `document.querySelector(${JSON.stringify(scrollSel)}).scrollIntoView()` });
    scrolled = true;
  }
  await sleep(Math.max(0, +t - (Date.now() - t0)));
  const r = await send('Page.captureScreenshot', { format: 'png' });
  writeFileSync(join(outDir, `rt_${width}_${t}.png`), Buffer.from(r.data, 'base64'));
  const st = await send('Runtime.evaluate', { expression: "(function(){var h=document.getElementById('mpHero');var on=[].map.call(h.querySelectorAll('.mp_hero_scene'),function(s,i){return s.classList.contains('is-on')?i:null}).filter(function(x){return x!==null});return JSON.stringify({on:on,done:h.classList.contains('is-done'),docW:document.documentElement.scrollWidth})})()", returnByValue: true });
  console.log(t, st.result.value);
}
ws.close(); chrome.kill();
