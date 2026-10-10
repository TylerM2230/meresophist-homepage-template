# Changelog — meresophist.xyz

Tabulated record of the sign-making pass + the aphoristic rhizome expansion.

## This round — Filipino sign-making, identity, and the rhizome

| # | Area | Change | Status |
|---|------|--------|--------|
| 1 | **Palette** | New "Jeepney" theme (cream enamel / candy-red flame / chrome-yellow acid) as the default; 6 themes total | done |
| 2 | **Type** | Cubao Free promoted to the display voice (brand, shelf titles, card titles, subject eyebrow); serif stays for long-form | done |
| 3 | **Baybayin** | Vertical top-to-bottom motto in the hero (ᜀᜇᜎ᜔ ᜐᜓᜎᜆ᜔ ᜄᜏ — study · writing · making) via `writing-mode:vertical-rl; text-orientation:upright`; tala seal retained (favicon, subject line, rail, figures) | done |
| 4 | **Roundness** | Rounded signboard corners (`--r:16px`), pill chips, rounded meta band | done |
| 5 | **Anchors** | Index numbers become flame blocks (`.num`, `.subject-num`) as visual anchors | done |
| 6 | **Justification** | Prose + table cells set `text-align:justify; hyphens:auto` | done |
| 7 | **Identity** | "Tyler Miranda" → "Tyler Aragon Miranda" throughout | done |
| 8 | **IA** | Authors folded into Literature (`/literature/borges|calvino|pessoa`); Programming & Computer Science added; 3 new shelves: Psychology & the Sacred, Signal & Mind, Metal Fire & Skin | done |
| 9 | **Content** | 13 new freestanding aphoristic nodes via dedicated researchers: set theory, group theory, EEG, BCI, analog computers, humanoid robots, Negroli armory, the forge, Philippine gold, Philippine tattoo, Jung, mysticism, shamanism — each with a glossary (KV), core ideas, a verified quotation, a figure, and cross-links | done |
| 10 | **Verification** | 21 topics / 5 shelves; 58/58 routes render; 58 unique links resolve; `node --check` clean | done |
| 11 | **Repo** | Committed on top of `de5a098` | done |

## Structure

```
index.html   — shell + font links + script tags
styles.css   — tokens, layout, type, motion
content.js   — TOPICS / GROUPS / PAGES (all prose as plain data)
app.js       — renderer, router, scroll-hijack transition, GSAP motion
fonts/       — CubaoFree2-Regular.ttf (self-hosted Filipino display)
serve.js     — zero-dependency static server + wiring self-check
test.cjs     — Node DOM-shim boot + route/link verification
```

---

## Previous round — split-pane, scroll-hijack, Filipino type, voice

| # | Area | Change | Status |
|---|------|--------|--------|
| 1 | Structure | Single index.html → index.html + styles.css + content.js + app.js (no build) | done |
| 2 | Split-pane | Prose left + sticky entries rail right (7fr:4fr, 1360px shell) | done |
| 3 | Subject/title | Leader rule + tala + Cubao group name + italic-connective title | done |
| 4 | Scroll-hijack | GSAP wheel-scrubbed topic transition with reduced-motion/no-GSAP fallback | done |
| 5 | Filipino type | Baybayin tala seal + Cubao Free sign-painter display | done |
| 6 | Voice | Prose pass in Jung/Spinoza/Deleuze-Guattari register; a11y + microinteractions | done |
