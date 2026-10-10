/* ============================================================
   RENDERER
   ============================================================ */
(function(){
'use strict';

var HOME_TITLE = 'meresophist.xyz — Tyler Miranda';
var TOTAL = 19;

function $(s){ return document.querySelector(s); }
function $$(s){ return Array.prototype.slice.call(document.querySelectorAll(s)); }

var home = $('#home'), page = $('#page'), indicator = $('#indicator'), progress = $('#progress'), skip = $('#skip'), live = $('#live');

/* ---------- reduced-motion + scroll-hijack transition ---------- */
var REDUCED = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : { matches:false, addEventListener:function(){} };
function prefersReduced(){ return REDUCED.matches; }
function canAnimate(){ return window.gsap && !prefersReduced(); }
function smoothScrollTo(y){
  if(prefersReduced() || !window.__smoothTo) window.scrollTo(0, y);
  else window.__smoothTo(y);
}

var firstRoute = true;
var T = { busy:false, acc:0, tl:null, exit:null, idle:null, lastHomeScroll:0 };
var D = 1400;

function lockScroll(){
  document.documentElement.classList.add('is-transitioning');
  if(progress) progress.style.opacity = '0';
  window.addEventListener('wheel', wheelHandler, {passive:false});
  window.addEventListener('touchmove', touchHandler, {passive:false});
  window.addEventListener('keydown', keyHandler);
}
function unlockScroll(){
  document.documentElement.classList.remove('is-transitioning');
  if(progress) progress.style.opacity = '';
  window.removeEventListener('wheel', wheelHandler);
  window.removeEventListener('touchmove', touchHandler);
  window.removeEventListener('keydown', keyHandler);
}
function addDelta(d){
  T.acc = Math.max(0, Math.min(D, T.acc + d));
  if(T.tl) T.tl.progress(T.acc / D);
  clearTimeout(T.idle);
  T.idle = setTimeout(autoFinish, 900);
}
function wheelHandler(e){
  e.preventDefault();
  var k = e.deltaMode === 1 ? 33 : (e.deltaMode === 2 ? window.innerHeight * .8 : 1);
  addDelta(e.deltaY * k);
}
var _ty = 0;
function touchHandler(e){
  if(!e.touches || e.touches.length !== 1) return;
  var y = e.touches[0].clientY;
  if(_ty) addDelta(-(y - _ty) * 1.6);
  _ty = y;
}
function keyHandler(e){
  if(['ArrowDown','PageDown',' '].indexOf(e.key) > -1){ e.preventDefault(); addDelta(160); }
  else if(['ArrowUp','PageUp'].indexOf(e.key) > -1){ e.preventDefault(); addDelta(-160); }
}
function autoFinish(){
  if(!T.tl || !window.gsap) return;
  window.gsap.to(T.tl, { progress:1, duration:.35, ease:'power2.out', overwrite:true, onComplete:cleanup });
}
function cleanup(){
  clearTimeout(T.idle);
  if(T.exit && T.exit.parentNode) T.exit.parentNode.removeChild(T.exit);
  T.exit = null;
  var s = page.querySelector('.sub');
  if(s && s.classList) s.classList.remove('is-entering');
  unlockScroll();
  if(window.ScrollTrigger) window.ScrollTrigger.refresh();
  T.busy = false; T.tl = null; T.acc = 0; _ty = 0;
}
function interrupt(){
  clearTimeout(T.idle);
  if(T.tl){ try{ T.tl.kill(); }catch(e){} }
  T.tl = null;
  cleanup();
}

function transitionTopics(commit){
  var gsap = window.gsap;
  var old = page.querySelector('.sub');
  if(old){
    T.exit = old.cloneNode(true);
    T.exit.classList.add('sub-exit');
    T.exit.removeAttribute('id');
  }
  commit();
  if(T.exit) page.appendChild(T.exit);
  var s = page.querySelector('.sub');
  if(T.exit) gsap.set(T.exit, { opacity:1, yPercent:0 });
  if(s){ s.classList.add('is-entering'); gsap.set(s, { yPercent:11, opacity:0 }); }
  T.tl = gsap.timeline({ paused:true, onComplete:cleanup });
  if(T.exit) T.tl.to(T.exit, { yPercent:-9, opacity:0, duration:.40, ease:'power2.in' }, 0);
  T.tl.to(s || '.sub', { yPercent:0, opacity:1, duration:.55, ease:'power3.out' }, .20);
  T.acc = 0; T.tl.progress(0);
  lockScroll();
  T.idle = setTimeout(autoFinish, 900);
}

function revealSub(){
  if(!canAnimate()) return;
  var gsap = window.gsap;
  var s = page.querySelector('.sub');
  var t = page.querySelector('.sub-title .line-inner');
  if(s) gsap.fromTo(s, { yPercent:8, opacity:0 }, { yPercent:0, opacity:1, duration:.5, ease:'power3.out' });
  if(t) gsap.fromTo(t, { yPercent:110 }, { yPercent:0, duration:.7, ease:'power4.out', delay:.05 });
}

function navigateSub(node, chain){
  var commit = function(){ renderPage(node, chain); };
  if(!canAnimate()){ commit(); return; }
  if(T.busy) interrupt();
  if(!page.hidden){
    transitionTopics(commit);
  } else if(firstRoute){
    commit();
    revealSub();
  } else {
    T.lastHomeScroll = window.scrollY || 0;
    T.busy = true;
    window.gsap.to('#home', { autoAlpha:0, duration:.3, ease:'power2.in', onComplete:function(){
      commit();
      T.busy = false;
      revealSub();
    }});
  }
}

function navigateHome(){
  var commit = function(){ showHome(false); };
  if(!canAnimate()){ commit(); return; }
  if(T.busy) interrupt();
  T.busy = true;
  lockScroll();
  var old = page.querySelector('.sub');
  if(old){
    window.gsap.to(old, { yPercent:-9, opacity:0, duration:.36, ease:'power2.in', onComplete:function(){
      commit();
      window.gsap.fromTo('#home', {autoAlpha:0}, {autoAlpha:1, duration:.3, ease:'power2.out'});
      unlockScroll();
      T.busy = false;
    }});
  } else {
    commit(); unlockScroll(); T.busy = false;
  }
}

/* ---------- home index (grouped masonry) ---------- */
var TOPICS_BY_ID = {};
TOPICS.forEach(function(t){ TOPICS_BY_ID[t.id] = t; });

function cardHTML(t){
  var items = t.items.map(function(it){
    var inner = '<span class="k">' + it[0] + '</span><span class="v">' + it[1] + '</span>';
    return '<li>' + (it[2] ? '<a href="' + it[2] + '">' + inner + '</a>' : '<span>' + inner + '</span>') + '</li>';
  }).join('');
  return '<article class="topic-card" id="p-' + t.id + '">' +
    '<header class="card-head"><span class="num">' + t.num + '</span>' +
      '<h3 class="card-title"><a href="#/' + t.id + '">' + t.title + '</a></h3>' +
      '<a class="card-enter" href="#/' + t.id + '" aria-label="Open ' + t.title + '">↗</a></header>' +
    '<p class="card-kicker">' + t.kicker + '</p>' +
    '<ul class="card-items">' + items + '</ul>' +
    '<a class="card-more" href="#/' + t.id + '">All entries ↗</a>' +
  '</article>';
}

function buildIndex(){
  var root = document.getElementById('index');
  if(!root) return;
  var frag = document.createDocumentFragment();
  GROUPS.forEach(function(g){
    var sec = document.createElement('section');
    sec.className = 'group snap-sec';
    sec.id = 'g-' + g.id;
    sec.setAttribute('data-num', g.num);
    sec.setAttribute('data-title', g.title);
    var cards = g.topics.map(function(id){ return cardHTML(TOPICS_BY_ID[id]); }).join('');
    sec.innerHTML =
      '<header class="group-head">' +
        '<div class="group-eyebrow"><span class="num">' + g.num + '</span><span>' + g.topics.length + ' topics</span></div>' +
        '<h2 class="group-title">' + g.title + '</h2>' +
        '<p class="group-line">' + g.line + '</p>' +
      '</header>' +
      '<div class="masonry">' + cards + '</div>';
    frag.appendChild(sec);
  });
  root.appendChild(frag);
}

var sections = [];

function buildIndicator(){
  var entries = [{ id:'p-index', n:'00', t:'Index' }].concat(GROUPS.map(function(g){
    return { id:'g-' + g.id, n:g.num, t:g.title };
  }));
  indicator.innerHTML = entries.map(function(e){
    return '<button type="button" data-target="' + e.id + '"><span>' + e.n + '</span> ' + e.t + '</button>';
  }).join('');
  indicator.addEventListener('click', function(e){
    var b = e.target.closest ? e.target.closest('button') : null;
    if(!b) return;
    var el = document.getElementById(b.getAttribute('data-target'));
    if(!el) return;
    if(window.__smoothTo) window.__smoothTo(el.offsetTop);
    else el.scrollIntoView({behavior:'smooth', block:'start'});
  });
}

var lastActive = null;
function spy(){
  var mid = window.innerHeight * 0.4;
  var act = null;
  for(var i = 0; i < sections.length; i++){
    var r = sections[i].getBoundingClientRect();
    if(r.top <= mid) act = sections[i];
  }
  if(act === lastActive) return;
  lastActive = act;
  $$('.indicator button').forEach(function(b){
    var on = act && b.getAttribute('data-target') === act.id;
    b.classList.toggle('on', on);
    if(on) b.setAttribute('aria-current','true');
    else b.removeAttribute('aria-current');
  });
}

function prog(){
  var h = document.documentElement.scrollHeight - window.innerHeight;
  var p = h > 0 ? Math.min(1, (window.scrollY || 0) / h) : 0;
  progress.style.transform = 'scaleX(' + p + ')';
}

var ticking = false;
function onScroll(){
  if(ticking) return;
  ticking = true;
  requestAnimationFrame(function(){
    ticking = false;
    spy();
    prog();
    railSpy();
  });
}

/* ---------- routing ---------- */
function setScrollTop(){
  var d = document.documentElement;
  var prev = d.style.scrollBehavior;
  d.style.scrollBehavior = 'auto';
  window.scrollTo(0, 0);
  requestAnimationFrame(function(){ d.style.scrollBehavior = prev; });
}

function markNav(id){
  var gid = null;
  TOPICS.forEach(function(t){ if(t.id === id) gid = t.group; });
  $$('.topnav a').forEach(function(a){
    var href = a.getAttribute('href') || '';
    if(gid && href === '#g-' + gid) a.setAttribute('aria-current','page');
    else a.removeAttribute('aria-current');
  });
}

function setSkipTarget(onSub){
  if(skip) skip.setAttribute('href', onSub ? '#page' : '#home');
}

function showHome(toTop){
  page.hidden = true;
  home.hidden = false;
  indicator.style.display = '';
  document.title = HOME_TITLE;
  markNav(null);
  setSkipTarget(false);
  if(toTop) setScrollTop();
  else if(T.lastHomeScroll) window.scrollTo(0, T.lastHomeScroll);
  if(live) live.textContent = 'Index';
  requestAnimationFrame(function(){ spy(); prog(); });
}

function showPage(){
  home.hidden = true;
  page.hidden = false;
  indicator.style.display = 'none';
  setScrollTop();
  var h1 = page.querySelector('.sub-title');
  if(h1 && h1.focus) h1.focus({preventScroll:true});
  else page.focus({preventScroll:true});
  prog();
}

function jumpTo(id){
  requestAnimationFrame(function(){
    requestAnimationFrame(function(){
      var el = document.getElementById(id);
      if(!el) return;
      if(window.__smoothTo) window.__smoothTo(el.offsetTop);
      else el.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
}

/* ---------- subpage rendering ---------- */
function readingTime(d){
  var words = 0;
  (d.blocks || []).forEach(function(b){
    if(b.h) words += b.h.split(/\s+/).length;
    if(b.p) words += b.p.replace(/<[^>]*>/g,' ').split(/\s+/).length;
    if(b.q) words += (b.q.t + ' ' + b.q.c).split(/\s+/).length;
    if(b.kv) b.kv.forEach(function(kv){ words += (kv[0] + ' ' + kv[1]).split(/\s+/).length; });
    if(b.ul) b.ul.forEach(function(u){ words += (u.t + ' ' + u.d).split(/\s+/).length; });
    if(b.log) b.log.forEach(function(l){ words += (l.t + ' ' + l.x).split(/\s+/).length; });
    if(b.fig) words += (b.fig.t + ' ' + (b.fig.n || '')).split(/\s+/).length;
  });
  if(!words) return 0;
  return Math.max(1, Math.round(words / 210));
}

function renderBlocks(blocks){
  var html = '';
  var fig = 0;
  var toc = [];
  blocks.forEach(function(b, i){
    if(b.h){
      toc.push({ id: 'b-' + i, t: b.h });
      html += '<h2 class="blk-h" id="b-' + i + '">' + b.h + '</h2>';
    } else if(b.p){
      html += '<div class="p-wrap"><p class="blk-p">' + b.p + '</p>' +
        (b.r ? '<a class="p-more" href="' + b.r + '">Continue ↗</a>' : '') + '</div>';
    } else if(b.q){
      html += '<blockquote class="blk-q">' + b.q.t + '<cite>' + b.q.c + '</cite></blockquote>';
    } else if(b.kv){
      html += '<dl class="blk-kv">' + b.kv.map(function(kv){
        return '<div class="kv-row"><dt>' + kv[0] + '</dt><dd>' + kv[1] + '</dd></div>';
      }).join('') + '</dl>';
    } else if(b.ul){
      html += '<ul class="blk-ul">' + b.ul.map(function(u){
        var inner = '<span class="u-t">' + u.t + '</span><span class="u-d">' + u.d + '</span>';
        return '<li>' + (u.r ? '<a href="' + u.r + '">' + inner + '<span class="u-a">↗</span></a>' : '<div>' + inner + '</div>') + '</li>';
      }).join('') + '</ul>';
    } else if(b.log){
      html += '<ul class="blk-log">' + b.log.map(function(l){
        var inner = '<span class="l-d">' + l.d + '</span><span class="l-t">' + l.t + '</span><span class="l-x">' + l.x + '</span>';
        return '<li>' + (l.r ? '<a href="' + l.r + '">' + inner + '<span class="l-a">↗</span></a>' : '<div>' + inner + '</div>') + '</li>';
      }).join('') + '</ul>';
    } else if(b.fig){
      fig += 1;
      html += '<figure class="fig"><div class="fig-frame">' +
        '<span class="fig-glyph" aria-hidden="true">ᜆᜎ</span>' +
        '<span class="fig-label">Diagram pending</span></div>' +
        '<figcaption class="fig-cap">' +
          '<span class="fig-num">Fig. ' + fig + '</span>' +
          '<span class="fig-title">' + b.fig.t + '</span>' +
          (b.fig.n ? '<span class="fig-note">' + b.fig.n + '</span>' : '') +
        '</figcaption></figure>';
    }
  });
  return { html: html, toc: toc };
}

function relatedCards(d, chain){
  var cards = [];
  var topicId = chain[0] || null;
  if(!topicId) return cards;
  var topic = PAGES[topicId];
  if(chain.length > 1 && topic){
    cards.push({ t: topic.title, d: '↑ back to the shelf', h: '#/' + topicId, up: true });
    if(topic.children){
      Object.keys(topic.children).forEach(function(k){
        if(k === chain[chain.length - 1]) return;
        var c = topic.children[k];
        cards.push({ t: c.title, d: c.kicker || '', h: '#/' + topicId + '/' + k });
      });
    }
    cards.push({ t: 'Tabularium', d: 'The whole ledger, in one table', h: '#/tabularium' });
  } else if(topic){
    if(topic.children){
      Object.keys(topic.children).forEach(function(k){
        var c = topic.children[k];
        cards.push({ t: c.title, d: c.kicker || '', h: '#/' + topicId + '/' + k });
      });
    }
    var idx = -1;
    TOPICS.forEach(function(t, i){ if(t.id === topicId) idx = i; });
    if(idx > -1){
      var nxt = TOPICS[(idx + 1) % TOPICS.length];
      cards.push({ t: nxt.title, d: 'Next shelf · ' + nxt.nav, h: '#/' + nxt.id });
    }
    cards.push({ t: 'Tabularium', d: 'The whole ledger, in one table', h: '#/tabularium' });
  }
  return cards.slice(0, 4);
}

function titleHTML(title){
  var small = { of:1, the:1, and:1, for:1, a:1, an:1, in:1, on:1, to:1, with:1, from:1 };
  var html = title.split(/(\s+)/).map(function(p){
    if(!p || !p.trim()) return p;
    if(p === '&') return '<span class="amp">&amp;</span>';
    var word = p.replace(/[^A-Za-z\u2019'-]/g, '');
    if(word && small[word.toLowerCase()]) return '<span class="it">' + p + '</span>';
    return p;
  }).join('');
  return '<span class="line"><span class="line-inner">' + html + '</span></span>';
}

function buildRail(blocks){
  var rows = [], count = 0;
  blocks.forEach(function(b, i){
    if(b.h){
      rows.push('<li class="rail-sec"><a href="#b-' + i + '" data-rail-anchor>' + b.h + '</a></li>');
    } else if(b.log){
      b.log.forEach(function(l){
        count++;
        var chip = l.s ? '<span class="rail-status' + (l.s === 'Reading' || l.s === 'Writing' || l.s === 'Building' || l.s === 'Studying' ? ' s-active' : '') + '">' + l.s + '</span>' : '';
        var date = l.d ? '<span class="rail-date">' + l.d + '</span>' : '';
        var note = l.x ? '<span class="rail-note">' + l.x.replace(/<[^>]*>/g, '') + '</span>' : '';
        var inner = '<span class="rail-top">' + date + chip + '</span>' +
          '<span class="rail-title">' + l.t + '</span>' + note +
          '<span class="rail-arrow" aria-hidden="true">↗</span>';
        rows.push('<li class="rail-row">' + (l.r ? '<a href="' + l.r + '">' + inner + '</a>' : '<div>' + inner + '</div>') + '</li>');
      });
    } else if(b.ul){
      b.ul.forEach(function(u){
        if(!u.r) return;
        count++;
        var note = u.d ? '<span class="rail-note">' + u.d.replace(/<[^>]*>/g, '') + '</span>' : '';
        var inner = '<span class="rail-title">' + u.t + '</span>' + note +
          '<span class="rail-arrow" aria-hidden="true">↗</span>';
        rows.push('<li class="rail-row"><a href="' + u.r + '">' + inner + '</a></li>');
      });
    }
  });
  if(!rows.length) return { html:'', count:0 };
  return { html:
    '<details class="entries-rail" open>' +
    '<summary class="entries-rail-head"><span>Entries</span><span class="tala" aria-hidden="true">ᜆᜎ</span></summary>' +
    '<ul class="rail-list">' + rows.join('') + '</ul></details>',
    count: count };
}

function railSpy(){
  if(!page || page.hidden) return;
  var heads = page.querySelectorAll('.blk-h');
  if(!heads || !heads.length) return;
  var mid = window.innerHeight * 0.35;
  var currentId = null;
  for(var i = 0; i < heads.length; i++){
    if(heads[i].getBoundingClientRect().top <= mid) currentId = heads[i].id;
  }
  var links = page.querySelectorAll('.rail-sec a');
  for(var j = 0; j < links.length; j++){
    var on = currentId && links[j].getAttribute('href') === '#' + currentId;
    if(links[j].classList) links[j].classList.toggle('is-current', on);
  }
}

function renderPage(d, chain){
  var topicId = chain[0] || null;
  var topic = topicId ? PAGES[topicId] : null;
  var parentHref = chain.length > 1 ? '#/' + chain.slice(0, -1).join('/') : null;

  var nav = '<a class="back" href="#/">← Index</a>';
  if(chain.length > 1 && topic){
    nav += '<span class="sepy">·</span><a class="back" href="' + parentHref + '">↑ ' + topic.title + '</a>';
  }
  var mins = readingTime(d);
  if(mins) nav += '<span class="sepy">·</span><span>≈ ' + mins + ' min</span>';

  var topicNum = '';
  if(topicId){
    TOPICS.forEach(function(t){ if(t.id === topicId) topicNum = t.num; });
    if(!topicNum && topic.num) topicNum = topic.num;
  }
  var groupTitle = '';
  if(topic && topic.group){
    GROUPS.forEach(function(g){ if(g.id === topic.group) groupTitle = g.title; });
  }
  var subject = '<span class="subject-rule" aria-hidden="true"></span>' +
    '<span class="subject-tala" aria-hidden="true">ᜆᜎ</span>';
  if(groupTitle) subject += '<span class="subject-name">' + groupTitle + '</span>';
  else subject += '<span class="subject-name">' + (topic ? topic.title : d.title) + '</span>';
  if(topicNum) subject += '<span class="subject-num">' + topicNum + '</span>';

  var metaHtml = (d.meta || []).map(function(m){
    return '<div><dt>' + m[0] + '</dt><dd>' + m[1] + '</dd></div>';
  }).join('');

  var rendered = renderBlocks(d.blocks || []);
  var rail = buildRail(d.blocks || []);

  var cardsHtml = relatedCards(d, chain).map(function(c){
    return '<a class="card' + (c.up ? ' up' : '') + '" href="' + c.h + '">' +
      '<span class="c-t">' + c.t + '</span><span class="c-d">' + c.d + '</span><span class="c-a">↗</span></a>';
  }).join('');

  page.innerHTML =
    '<article class="sub">' +
      '<header class="sub-head">' +
        '<div class="sub-nav">' + nav + '</div>' +
        '<div class="subject-line">' + subject + '</div>' +
        '<h1 class="sub-title" id="page-title" tabindex="-1">' + titleHTML(d.title) + '</h1>' +
        (d.kicker ? '<p class="sub-kicker">' + d.kicker + '</p>' : '') +
        (metaHtml ? '<dl class="sub-meta">' + metaHtml + '</dl>' : '') +
      '</header>' +
      '<div class="sub-grid">' +
        '<div class="sub-body">' + rendered.html + '</div>' +
        (rail.html ? '<nav class="rail-wrap" aria-label="Entries">' + rail.html + '</nav>' : '') +
      '</div>' +
      '<div class="meander-line" aria-hidden="true"></div>' +
      '<footer class="sub-foot">' +
        '<p class="foot-note"><span>Further</span><span class="esc-hint">Esc returns to the index</span></p>' +
        (cardsHtml ? '<div class="cards">' + cardsHtml + '</div>' : '') +
      '</footer>' +
    '</article>';

  showPage();
  document.title = d.title + ' — meresophist.xyz';
  markNav(topicId);
  setSkipTarget(true);
  if(live) live.textContent = 'Now viewing: ' + d.title;
  if(window.__initSubMotion) window.__initSubMotion(page);
  var railEl = page.querySelector('.entries-rail');
  if(railEl && window.innerWidth <= 860 && rail.count > 5) railEl.open = false;
}

function render404(){
  if(T.busy) interrupt();
  renderPage({
    title: 'Empty shelf',
    kicker: 'This route holds nothing — yet. Either it was never written, or it moved.',
    meta: [],
    blocks: [
      {p:'The Tabularium knows where everything is. If something should live here, it will arrive the way everything else does: slowly, dated, and in the open.'},
      {fig:{t:'The empty shelf', n:'Placeholder for whatever will eventually live here.'}}
    ]
  }, []);
}

function renderRoute(parts){
  var node = PAGES;
  var chain = [];
  var ok = true;
  parts.forEach(function(p){
    if(!ok) return;
    if(chain.length === 0){
      if(node[p] && node[p].title){ node = node[p]; chain.push(p); }
      else ok = false;
    } else {
      if(node.children && node.children[p] && node.children[p].title){
        node = node.children[p]; chain.push(p);
      } else ok = false;
    }
  });
  if(!ok){ render404(); return; }
  navigateSub(node, chain);
}

function route(){
  var hash = location.hash || '';
  if(!hash || hash === '#/' || hash === '#top'){
    if(T.busy) interrupt();
    if(!page.hidden) navigateHome();
    else showHome(true);
    firstRoute = false;
    return;
  }
  if(hash.charAt(1) !== '/'){
    if(T.busy) interrupt();
    if(hash.slice(0,3) === '#p-'){
      showHome(false);
      jumpTo(hash.slice(1));
    } else {
      if(home.hidden) showHome(false);
      jumpTo(hash.slice(1));
    }
    firstRoute = false;
    return;
  }
  renderRoute(hash.slice(2).split('/').filter(Boolean));
  firstRoute = false;
}

/* ---------- chrome behaviours ---------- */
function navFade(){
  var nav = $('.topnav');
  if(!nav) return;
  var max = nav.scrollWidth - nav.clientWidth;
  var left = max > 1 && nav.scrollLeft > 2;
  var right = max > 1 && nav.scrollLeft < max - 2;
  nav.classList.toggle('ov-left', left);
  nav.classList.toggle('ov-right', right);
}

function bind(){
  $$('[data-jump]').forEach(function(a){
    a.addEventListener('click', function(e){
      e.preventDefault();
      var id = a.getAttribute('href').slice(1);
      showHome(false);
      jumpTo(id);
    });
  });

  document.addEventListener('click', function(e){
    var a = e.target.closest ? e.target.closest('a') : null;
    if(!a) return;
    var href = a.getAttribute('href') || '';
    if(href.indexOf('#/') === 0 && href === location.hash){
      e.preventDefault();
      setScrollTop();
    }
  });

  page.addEventListener('click', function(e){
    var a = e.target.closest ? e.target.closest('a[data-rail-anchor]') : null;
    if(!a) return;
    e.preventDefault();
    var el = document.getElementById(a.getAttribute('href').slice(1));
    if(el) smoothScrollTo(el.offsetTop);
  });

  window.addEventListener('hashchange', route);
  window.addEventListener('scroll', onScroll, {passive:true});
  window.addEventListener('resize', function(){ navFade(); spy(); prog(); railSpy(); });
  window.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && !page.hidden){
      e.preventDefault();
      if(T.busy) interrupt();
      location.hash = '#/';
    }
  });

  var nav = $('.topnav');
  if(nav) nav.addEventListener('scroll', navFade, {passive:true});
}

/* ---------- palette ---------- */
var THEMES = [
  ['papyrus','Papyrus'],['pompeii','Pompeii'],['marble','Marble'],['attic','Attic'],['nocturne','Nocturne']
];
var THEME_COLORS = { papyrus:'#eceae3', pompeii:'#f3e6d2', marble:'#f4f3ee', attic:'#cf7f42', nocturne:'#121116' };
var themeBtn = $('#theme-btn');
function themeIndex(){
  var s = null;
  try{ s = localStorage.getItem('meresophist-palette'); }catch(e){}
  var i = -1;
  THEMES.forEach(function(t, k){ if(t[0] === s) i = k; });
  return i > -1 ? i : 0;
}
function applyTheme(i){
  var t = THEMES[i];
  document.documentElement.setAttribute('data-theme', t[0]);
  var mc = document.querySelector('meta[name="theme-color"]');
  if(mc) mc.setAttribute('content', THEME_COLORS[t[0]]);
  if(themeBtn) themeBtn.textContent = 'Palette · ' + t[1];
  try{ localStorage.setItem('meresophist-palette', t[0]); }catch(e){}
}
var veil = $('#theme-veil');
var theming = false;
if(themeBtn){
  themeBtn.addEventListener('click', function(){
    if(theming) return;
    var next = (themeIndex() + 1) % THEMES.length;
    if(window.gsap && !prefersReduced() && veil){
      theming = true;
      window.gsap.timeline()
        .to(veil, { opacity:1, duration:.16, ease:'power1.in' })
        .add(function(){ applyTheme(next); })
        .to(veil, { opacity:0, duration:.24, ease:'power2.out', onComplete:function(){ theming = false; } });
    } else {
      applyTheme(next);
    }
  });
}

/* ---------- motion (GSAP, optional — the site is fine without it) ---------- */
function initMotion(){
  if(!window.gsap || !window.ScrollTrigger) return;
  if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var gsap = window.gsap;
  gsap.registerPlugin(window.ScrollTrigger, window.ScrollToPlugin);

  var desktop = gsap.matchMedia();
  desktop.add('(min-width: 861px)', function(){
    gsap.to('.ht-1', { yPercent:26, ease:'none', scrollTrigger:{ trigger:'#p-index', start:'top top', end:'bottom top', scrub:true } });
    gsap.to('.ht-2', { yPercent:52, ease:'none', scrollTrigger:{ trigger:'#p-index', start:'top top', end:'bottom top', scrub:true } });
    gsap.to('.hero-lede', { yPercent:34, ease:'none', scrollTrigger:{ trigger:'#p-index', start:'top top', end:'bottom top', scrub:true } });

    GROUPS.forEach(function(g){
      var sec = document.getElementById('g-' + g.id);
      if(!sec) return;
      var head = sec.querySelector('.group-head');
      var cards = sec.querySelectorAll('.topic-card');
      if(head){
        gsap.from(head, { y:34, opacity:0, duration:.7, ease:'power2.out', scrollTrigger:{ trigger:sec, start:'top 82%', toggleActions:'play none none none' } });
      }
      if(cards.length){
        gsap.from(cards, { y:42, opacity:0, duration:.7, stagger:.07, ease:'power2.out', scrollTrigger:{ trigger:sec, start:'top 76%', toggleActions:'play none none none' } });
      }
    });

    var skewTo = gsap.quickTo('.marquee-skew', 'skewX', { duration:.5, ease:'power3' });
    window.ScrollTrigger.create({
      start:0, end:'max',
      onUpdate:function(self){ skewTo(gsap.utils.clamp(-7, 7, self.getVelocity() / 700)); }
    });
  });

  window.__smoothTo = function(y){
    gsap.to(window, { duration:.55, ease:'power3.inOut', scrollTo:y });
  };

  window.__pageTriggers = [];
  window.__initSubMotion = function(root){
    if(!window.matchMedia('(min-width: 861px)').matches) return;
    window.__pageTriggers.forEach(function(t){ try{ t.scrollTrigger.kill(); }catch(e){} });
    window.__pageTriggers = [];
    var head = root.querySelector('.sub-head');
    if(head){
      window.__pageTriggers.push(gsap.fromTo(head, { y:24 }, { y:-12, ease:'none', scrollTrigger:{ trigger:root, start:'top top', end:'bottom top', scrub:true } }));
    }
    root.querySelectorAll('.fig-frame').forEach(function(f){
      window.__pageTriggers.push(gsap.fromTo(f, { y:16 }, { y:-8, ease:'none', scrollTrigger:{ trigger:f, start:'top bottom', end:'bottom top', scrub:true } }));
    });
    window.ScrollTrigger.refresh();
  };

  window.addEventListener('load', function(){ window.ScrollTrigger.refresh(); });
  if(document.fonts && document.fonts.ready){
    document.fonts.ready.then(function(){ window.ScrollTrigger.refresh(); });
  }
}

/* ---------- init ---------- */
if(!window.gsap) document.documentElement.classList.add('no-gsap');
applyTheme(themeIndex());
buildIndex();
sections = $$('.snap-sec');
buildIndicator();
bind();
navFade();
initMotion();
route();
spy();
prog();

})();
