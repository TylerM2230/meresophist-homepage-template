# Changelog — meresophist.xyz

Tabulated record of the split-pane / Filipino-type / voice refinement.

## This round — split-pane, scroll-hijack, Filipino type, voice

| # | Area | Change | Status |
|---|------|--------|--------|
| 1 | **Structure** | Single `index.html` → `index.html` + `styles.css` + `content.js` + `app.js` + `fonts/`. No build step, no toolchain; still opens from `file://` (classic `<script>`/`<link>`, content as a plain data file loaded first). | done |
| 2 | **Split-pane** | Subpages → prose left (66ch measure) + sticky "Entries" ledger rail right (`7fr : 4fr`, `--shell:1360px`, `--gutter:clamp(56px,6vw,96px)`, rail `position:sticky` + `overscroll-behavior:contain`). Rail replaces the old `.toc` and collapses to a `<details>` accordion above the prose at ≤860px. | done |
| 3 | **Subject + title** | New `.subject-line` (leader rule → tala → group name in Cubao → boxed mono num) + enlarged title with italic connectives/ampersands echoing the hero's roman/italic mix. Header spans both columns; split begins below the meta band. | done |
| 4 | **Scroll-hijack** | GSAP wheel/touch/keyboard-scrubbed drift transition between topics (clone outgoing `.sub` to a `.sub-exit` overlay, locked native scroll, 900ms `autoFinish`); home↔subpage variants restore `lastHomeScroll`; reduced-motion / no-GSAP fall back to instant swap. | done |
| 5 | **Filipino type** | Baybayin "tala" (ᜆᜎ, "star · record · list") seal in favicon + subject-line + rail-head + figure glyphs (Noto Sans Tagalog via Google Fonts); Cubao Free (self-hosted, Aaron Amar — jeepney sign-painter) for the subject eyebrow + Tabularium/Record titles. | done |
| 6 | **Voice** | Full prose pass — less stinted, less logocentric, in a merged Jung / Spinoza / Deleuze–Guattari register: hero, all 5 group lines, all 18 topic kickers + items, the Tabularium, and philosophy/mathematics/literature/about. Logocentric tics retired ("Method"→practice, "Rule"→vow, "Principle"→bearing, "argue/prove/receipts"→embodied forms). | done |
| 7 | **A11y** | `role="status"` live region + `.visually-hidden` utility, focus to the subpage `<h1>`, reduced-motion guards on the transition, contrast bumps on opacity-heavy mono labels, skip-link target, `theme-color`/`color-scheme` fixed, passive listeners, transform-only hovers. | done |
| 8 | **Microinteractions** | Transform-only row hovers + flame margin-tick, indicator `scaleX` (no width reflow), masked title reveal, `#theme-veil` cross-fade on palette change, marquee skew moved to an inner wrapper (±7°, sign corrected), sticky-rail scroll-spy. | done |
| 9 | **Verification** | `node --check` + DOM-shim boot (`test.cjs`): 18 topics / 5 groups, 42/42 routes render, 0 unresolved `#/` links. | done |
| 10 | **Repo** | Committed on top of `d019c9b`. | done |

## Structure

```
index.html   — shell + font links + script tags
styles.css   — tokens, layout, type, motion
content.js   — TOPICS / GROUPS / PAGES (all prose as plain data)
app.js       — renderer, router, scroll-hijack transition, GSAP motion
fonts/       — CubaoFree2-Regular.ttf (self-hosted Filipino display)
test.cjs     — Node DOM-shim boot + route/link verification
```

Fonts: Instrument Serif + Courier Prime + Noto Sans Tagalog (Google Fonts, OFL); Cubao Free (Aaron Amar / MadFonts, free for commercial use, self-hosted). The tala favicon is an inline SVG (8-ray sun) on paper.

---

## Previous round — home restructure

| # | Area | Change | Status |
|---|------|--------|--------|
| 1 | Typography | Courier Prime replaces JetBrains Mono | done |
| 2 | Palettes | 5 switchable themes + topbar cycler | done |
| 3 | Motif | Greek meander strip, pixel-noise grain, meander favicon | done |
| 4 | Motion | GSAP parallax (hero / marquee velocity / subpage) | done |
| 5 | Home IA | 19 sticky panels → hero + 5 grouped sections | done |
| 6 | Topic view | masonry grid of cards, 5 entries + "All entries ↗" per card | done |
| 7 | Tabularium | active entries regrouped under 5 subject headings | done |
| 8 | Nav | topnav + right rail navigate 5 groups | done |
| 9 | Snap | scroll-snap + GSAP scrollTo | done |
| 10 | Disclosure | GSAP staggered reveal on scroll | done |
