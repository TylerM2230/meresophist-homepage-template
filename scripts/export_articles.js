#!/usr/bin/env node
'use strict';
/*
 * Export every article and its current state to a single Markdown file,
 * intended for a handwritten editorial pass over the whole ledger.
 *
 *   node scripts/export_articles.js
 *
 * Reads content.js (plain data), resolves the tree, and writes ARTICLES.md
 * at the repository root.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'ARTICLES.md');

const contentJs = fs.readFileSync(path.join(ROOT, 'content.js'), 'utf8');
const ctx = vm.createContext({ console });
vm.runInContext(contentJs, ctx, { filename: 'content.js' });
const { TOPICS, GROUPS, PAGES } = vm.runInContext('({ TOPICS, GROUPS, PAGES })', ctx);

const topicById = {};
TOPICS.forEach(t => { topicById[t.id] = t; });
const groupById = {};
GROUPS.forEach(g => { groupById[g.id] = g; });

function esc(s){ return String(s == null ? '' : s).replace(/\|/g, '\\|'); }
function status(p){
  if(!p.meta || !p.meta.length) return '';
  return p.meta.map(m => `**${esc(m[0])}** — ${esc(m[1])}`).join(' · ');
}
function sections(p){
  const hs = (p.blocks || []).filter(b => b.h).map(b => b.h);
  return hs.length ? hs.map((h, i) => `${i + 1}. ${esc(h)}`).join('\n') : '';
}

const L = [];
const push = s => L.push(s);

push('# meresophist.xyz — Articles & Current State');
push('');
push('A complete inventory of every article in the ledger, with its route, shelf, one-line description, and current state. Generated for a handwritten pass over all the content.');
push('');
push(`_Generated ${new Date().toISOString().slice(0, 10)} from \`content.js\`._`);
push('');

/* Shelves */
push('## Shelves');
push('');
GROUPS.forEach(g => {
  push(`- **${esc(g.num)} · ${esc(g.title)}** — ${g.topics.map(id => topicById[id].title).join(' · ')}`);
});
push('');

/* Flat route index */
push('## Every route');
push('');
push('| Route | Title | State |');
push('|---|---|---|');
TOPICS.forEach(t => {
  push(`| \`#/${t.id}\` | ${esc(t.title)} | ${esc(status(PAGES[t.id]))} |`);
  const c = PAGES[t.id].children;
  if(c) Object.keys(c).forEach(k => {
    push(`| \`#/${t.id}/${k}\` | ${esc(c[k].title)} | ${esc(status(c[k]))} |`);
  });
});
push('');

/* Per-shelf detail */
push('---');
push('');
GROUPS.forEach(g => {
  push(`## ${esc(g.num)} · ${esc(g.title)}`);
  push('');
  push(`> ${esc(g.line)}`);
  push('');
  g.topics.forEach(id => {
    const t = topicById[id];
    const p = PAGES[id];
    push(`### ${esc(t.title)} — \`#/${id}\``);
    push('');
    if(p.kicker) push(`> ${esc(p.kicker)}`);
    push('');
    const st = status(p);
    push(st ? `**State:** ${st}` : '');
    const sec = sections(p);
    if(sec){ push(''); push('**Sections:**'); push(''); push(sec); }
    push('');
    const c = p.children;
    if(c){
      Object.keys(c).forEach(k => {
        const ch = c[k];
        push(`#### ${esc(ch.title)} — \`#/${id}/${k}\``);
        push('');
        if(ch.kicker) push(`> ${esc(ch.kicker)}`);
        push('');
        const cst = status(ch);
        push(cst ? `**State:** ${cst}` : '');
        const csec = sections(ch);
        if(csec){ push(''); push('**Sections:**'); push(''); push(csec); }
        push('');
      });
    }
  });
  push('---');
  push('');
});

fs.writeFileSync(OUT, L.join('\n'), 'utf8');
console.log('Wrote', OUT);
console.log('  topics:', TOPICS.length, '| shelves:', GROUPS.length, '| child articles:', Object.values(PAGES).reduce((n,p)=>n+(p.children?Object.keys(p.children).length:0),0));
