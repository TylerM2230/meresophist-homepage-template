const fs = require('fs');
const path = require('path');
const vm = require('vm');
const dir = process.argv[2] || process.cwd();

const contentJs = fs.readFileSync(path.join(dir, 'content.js'), 'utf8');
const appJs = fs.readFileSync(path.join(dir, 'app.js'), 'utf8');

function makeEl(tag){
  return {
    tagName:(tag||'div').toUpperCase(), style:{},
    classList:{ add(){}, remove(){}, toggle(){}, contains(){return false;} },
    dataset:{}, children:[], childNodes:[], attrs:{},
    _html:'', _text:'', _hidden:false,
    get innerHTML(){return this._html;}, set innerHTML(v){this._html=String(v);},
    get textContent(){return this._text;}, set textContent(v){this._text=String(v);},
    get hidden(){return this._hidden;}, set hidden(v){this._hidden=!!v;},
    offsetTop:0, offsetLeft:0, scrollWidth:0, scrollHeight:0, clientWidth:0, clientHeight:0, tabIndex:-1,
    appendChild(c){this.children.push(c);return c;}, removeChild(){}, insertBefore(){},
    setAttribute(k,v){this.attrs[k]=String(v);},
    getAttribute(k){return Object.prototype.hasOwnProperty.call(this.attrs,k)?this.attrs[k]:null;},
    removeAttribute(k){delete this.attrs[k];},
    addEventListener(){}, removeEventListener(){}, focus(){}, blur(){},
    querySelector(){return makeEl();}, querySelectorAll(){return [];}, closest(){return null;},
    getBoundingClientRect(){return {top:0,left:0,right:0,bottom:0,width:0,height:0};},
    scrollIntoView(){}, scrollTo(){},
  };
}

function makeSandbox(){
  const doc = {
    title:'', documentElement:makeEl('html'), body:makeEl('body'), head:makeEl('head'),
    fonts:{ready:Promise.resolve()},
    createElement(t){return makeEl(t);}, createDocumentFragment(){return makeEl('#fragment');},
    getElementById(){return makeEl('div');},
    querySelector(){return makeEl('div');}, querySelectorAll(){return [];},
    addEventListener(){}, removeEventListener(){},
  };
  const win = {
    innerWidth:1200, innerHeight:800, scrollY:0, scrollX:0,
    scrollTo(){}, addEventListener(){}, removeEventListener(){},
    matchMedia(){return {matches:false, media:'', addEventListener(){}, addListener(){}, removeEventListener(){}, removeListener(){}};},
  };
  const sb = {
    document:doc, window:win, location:{hash:''},
    localStorage:{getItem(){return null;}, setItem(){}, removeItem(){}},
    navigator:{},
    matchMedia:win.matchMedia,
    requestAnimationFrame(cb){cb(); return 1;}, cancelAnimationFrame(){},
    Promise, console, setTimeout, clearTimeout,
    Array, Object, JSON, Math, Date, RegExp, String, Number, Boolean, parseFloat, parseInt, isNaN,
    encodeURIComponent, decodeURIComponent,
  };
  return sb;
}

let failed = 0;
function check(name, cond){ if(cond){ console.log('  \u2713 ' + name); } else { console.log('  \u2717 ' + name); failed++; } }

/* ---------- boot + read data ---------- */
let sb = makeSandbox();
let ctx = vm.createContext(sb);
try { vm.runInContext(contentJs, ctx, {filename:'content.js'}); } catch(e){ console.error('content.js threw:', e); process.exit(1); }
try { vm.runInContext(appJs, ctx, {filename:'app.js'}); } catch(e){ console.error('app.js threw:', e); process.exit(1); }
const { TOPICS, GROUPS, PAGES } = vm.runInContext('({ TOPICS, GROUPS, PAGES })', ctx);

console.log('\n== data integrity ==');
check('TOPICS is an array of 18', Array.isArray(TOPICS) && TOPICS.length === 18);
check('GROUPS is an array of 5', Array.isArray(GROUPS) && GROUPS.length === 5);
const ids = TOPICS.map(t => t.id);
const pageKeys = Object.keys(PAGES);
check('PAGES covers all 18 topic ids', ids.every(id => pageKeys.includes(id)));
check('PAGES has no orphan keys', pageKeys.every(k => ids.includes(k)));
check('every group topic id exists', GROUPS.every(g => g.topics.every(tid => ids.includes(tid))));
check('group topic counts sum to 18', GROUPS.reduce((n,g)=>n+g.topics.length,0) === 18);

/* ---------- link resolution ---------- */
console.log('\n== link resolution ==');
const linkRe = /#\/[A-Za-z0-9\/\-_]+/g;
const links = [...new Set((contentJs + '\n' + appJs).match(linkRe) || [])];
function resolveLink(href){
  const parts = href.slice(2).split('/').filter(Boolean);
  let node = PAGES;
  for(let i=0;i<parts.length;i++){
    const p = parts[i];
    if(i===0){ if(!node[p] || !node[p].title) return false; node = node[p]; }
    else { if(!node.children || !node.children[p] || !node.children[p].title) return false; node = node.children[p]; }
  }
  return true;
}
const bad = links.filter(l => !resolveLink(l));
check('all ' + links.length + ' unique #/ links resolve', bad.length === 0);
if(bad.length) console.log('    unresolved:', bad.join(', '));

/* ---------- route render smoke (expose route via window) ---------- */
console.log('\n== route render smoke ==');
const appExposed = appJs.replace('(function(){', '(function(){ window.__runRoute = route;');
let sb2 = makeSandbox();
let ctx2 = vm.createContext(sb2);
try { vm.runInContext(contentJs, ctx2, {filename:'content.js'}); } catch(e){ console.error('content.js threw:', e); process.exit(1); }
try { vm.runInContext(appExposed, ctx2, {filename:'app.js (exposed)'}); } catch(e){ console.error('app.js (exposed) threw:', e); process.exit(1); }
function tryRoute(hash){
  sb2.location.hash = hash;
  try { sb2.window.__runRoute(); return true; }
  catch(e){ console.log('    ' + hash + ' threw: ' + e.message); return false; }
}
let ok = 0, total = 0;
ids.forEach(id => { total++; if(tryRoute('#/'+id)) ok++; });
const childRoutes = [];
for(const k of pageKeys){ const c = PAGES[k].children; if(c) for(const ck of Object.keys(c)) childRoutes.push('#/'+k+'/'+ck); }
childRoutes.forEach(r => { total++; if(tryRoute(r)) ok++; });
check(ok + ' / ' + total + ' real routes render without throwing', ok === total);
check('404 route renders without throwing', tryRoute('#/definitely-not-here'));

console.log('\n' + (failed ? 'FAILED (' + failed + ')' : 'ALL CHECKS PASSED'));
process.exit(failed ? 1 : 0);
