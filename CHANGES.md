# Changelog — meresophist.xyz

Tabulated record of the home restructure (grouped masonry index, snap + GSAP disclosure, more room per section). Final state: commit `24dd9e7`.

| # | Area | Change | Status |
|---|------|--------|--------|
| 1 | Typography | Courier Prime replaces JetBrains Mono (prior round) | done |
| 2 | Palettes | 5 switchable themes (Papyrus/Pompeii/Marble/Attic/Nocturne) + topbar cycler | done |
| 3 | Motif | Greek meander strip (top + subpage divider), pixel-noise grain, meander favicon | done |
| 4 | Motion | GSAP parallax (hero / marquee velocity / subpage) | done |
| 5 | **Home IA** | 19 sticky panels → hero + **5 grouped sections**: Letters / Word & Page / Image & Time / Hand & Object / The Record (the missing throughline) | done |
| 6 | **Topic view** | Topics → **masonry grid** of cards (`columns`), headings top-left (`.card-head`), 5 entries + "All entries ↗" per card | done |
| 7 | **Tabularium** | Home table removed; endeavors distributed into grouped cards; Tabularium page "Active entries" regrouped under 5 subject headings | done |
| 8 | Nav | Topnav + right rail navigate the 5 groups (6 items, no scroll); `aria-current` highlights the current topic's group via a topic→group map | done |
| 9 | **Snap** | `scroll-snap-type: y proximity` + `scroll-padding-top` on root; `scroll-snap-align` on hero/groups; GSAP `scrollTo` for rail/topnav jumps | done |
| 10 | **Disclosure** | GSAP `gsap.from` staggered reveal of group heads + cards on scroll into view; degrades to static without JS / under reduced motion | done |
| 11 | Data | `TOPICS` rewritten (18 cards, grouped, 5 items each) + new `GROUPS` array — delegated to subagent, spliced in | done |
| 12 | Data | Tabularium "Active entries" regrouped into 5 headings — delegated to subagent, spliced in | done |
| 13 | Verification | `node --check` + DOM-shim boot across routes; 18 cards / 5 groups; 0 unresolved links; 0 leftover `.panel`/table references | done |
| 14 | Repo | Committed `24dd9e7` on top of `9217ee5` | done |

## Structure of the new home

```
hero (full viewport, snap target)
└─ #index
   ├─ 01 · Letters        → Philosophy, Mathematics, Literature, Languages & Philology, Authors
   ├─ 02 · Word & Page    → Poetry & Writing, Copywriting, Atelier, Journal
   ├─ 03 · Image & Time   → Graphic Design, Drawing, Video Editing, 3D Modeling
   ├─ 04 · Hand & Object  → Game Development, Making Clothes, Making Jewelry
   └─ 05 · The Record     → Tabularium, About
```

Each topic card: number · title (top-left) · ↗ · kicker · 5 entry rows · "All entries ↗". The right rail and topbar snap to the five shelves.
