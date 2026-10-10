# Changelog — meresophist.xyz

Tabulated record of the home restructure (grouped masonry index, snap + GSAP disclosure, more room per section).

| # | Area | Change | Status |
|---|------|--------|--------|
| 1 | Typography | Courier Prime replaces JetBrains Mono (from prior round) | done |
| 2 | Palettes | 5 switchable themes (Papyrus/Pompeii/Marble/Attic/Nocturne) + topbar cycler | done |
| 3 | Motif | Greek meander strip (top + subpage divider), pixel-noise grain, meander favicon | done |
| 4 | Motion | GSAP parallax (hero/marquee velocity/subpage) | done |
| 5 | **Home IA** | Replace 19 sticky panels with hero + **5 grouped sections** (Letters / Word & Page / Image & Time / Hand & Object / The Record) — the missing throughline | in progress |
| 6 | **Topic view** | Topics become a **masonry grid** of cards; headings moved top-left; cards carry 5 entries + "All entries" link (room to grow) | in progress |
| 7 | **Tabularium** | Home table removed; active endeavors distribute into grouped cards; Tabularium page regrouped by subject area | in progress |
| 8 | Nav | Topnav + right rail now navigate the 5 groups (fewer items, less overwhelm); `aria-current` highlights the current topic's group | in progress |
| 9 | **Snap** | CSS `scroll-snap-type: y proximity` on root + `scroll-snap-align` on hero/groups; GSAP `scrollTo` for rail/topnav jumps | in progress |
| 10 | **Disclosure** | GSAP staggered card + group-head reveal on scroll into view (progressive disclosure); degrades to static without JS/motion | in progress |
| 11 | Data | TOPICS rewritten (18 cards, grouped, 5 items each) + new GROUPS array | delegated |
| 12 | Data | Tabularium page "Active entries" regrouped into 5 subject headings | delegated |
| 13 | Verification | `node --check` + DOM-shim route boot tests | pending |
| 14 | Repo | Commit finished state to git | pending |
