#!/usr/bin/env node
'use strict';
/*
 * meresophist.xyz — local static server (zero dependencies, no build step).
 *
 *   node serve.js                 → serve on http://127.0.0.1:8080
 *   node serve.js --port 3000     → serve on a different port
 *   PORT=4000 node serve.js       → same, via environment
 *
 * On startup it prints a wiring report (are every local <script>/<link>/@font-face
 * target present?) and serves the files with correct MIME types + permissive
 * CORS headers, so fonts/JS load with no console warnings or cross-origin errors.
 */
const http = require('http');
const fs   = require('fs');
const path = require('path');

const ROOT = __dirname;
const args = process.argv.slice(2);
const portArg = args.indexOf('--port');
const PORT = Number(portArg > -1 ? args[portArg + 1] : process.env.PORT) || 8080;
const HOST = process.env.HOST || '127.0.0.1';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.js':   'text/javascript; charset=utf-8',
  '.mjs':  'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.ttf':  'font/ttf',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico':  'image/x-icon',
  '.md':   'text/plain; charset=utf-8',
  '.txt':  'text/plain; charset=utf-8',
};

/* ---------- wiring self-check ---------- */
function checkWiring(){
  const refs = new Set();
  const add = (r) => {
    if (!r) return;
    if (/^(https?:|data:|#|\/\/)/.test(r)) return; // external CDN / inline — not local
    refs.add(r.split('?')[0].split('#')[0]);
  };
  try {
    const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
    let m, re = /(?:src|href)="([^"]+)"/g;
    while ((m = re.exec(html))) add(m[1]);
  } catch (e) { console.error('  ✗ index.html missing'); }

  try {
    const css = fs.readFileSync(path.join(ROOT, 'styles.css'), 'utf8');
    let m, re = /url\('([^']+)'\)/g;
    while ((m = re.exec(css))) add(m[1]);
  } catch (e) { console.error('  ✗ styles.css missing'); }

  console.log('\n— wiring check —');
  let ok = true;
  [...refs].sort().forEach((r) => {
    const exists = fs.existsSync(path.join(ROOT, r));
    if (!exists) ok = false;
    console.log('  ' + (exists ? '✓' : '✗') + '  /' + r + (exists ? '' : '   ← MISSING'));
  });
  console.log(ok ? '  wiring: OK\n' : '  wiring: FAILED (see above)\n');
  return ok;
}

/* ---------- server ---------- */
const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
  let filePath = path.normalize(path.join(ROOT, urlPath === '/' ? 'index.html' : urlPath));

  // path-traversal guard
  const rel = path.relative(ROOT, filePath);
  if (rel.startsWith('..') || path.isAbsolute(rel)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache',
    });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n✗ Port ${PORT} is already in use. Try: node serve.js --port ${PORT + 1}\n`);
    process.exit(1);
  }
  throw err;
});

server.listen(PORT, HOST, () => {
  console.log('meresophist.xyz — local server');
  console.log(`  → http://${HOST}:${PORT}\n`);
  console.log('  Serving root :', ROOT);
  console.log('  CORS         : Access-Control-Allow-Origin: * on every response');
  console.log('  MIME         : .css→text/css · .js→text/javascript · .ttf→font/ttf');
  checkWiring();
});
