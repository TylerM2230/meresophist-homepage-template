const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'assets');
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

function renderPixelSVG(width, height, grid, palette) {
  // grid is an array of strings (rows)
  const rects = [];
  for (let y = 0; y < grid.length; y++) {
    const row = grid[y];
    for (let x = 0; x < row.length; x++) {
      const ch = row[x];
      if (ch === ' ' || ch === '.' || !palette[ch]) continue;
      const fill = palette[ch];
      // Optimize horizontal runs
      let run = 1;
      while (x + run < row.length && row[x + run] === ch) {
        run++;
      }
      rects.push(`<rect x="${x}" y="${y}" width="${run}" height="1" fill="${fill}" />`);
      x += run - 1;
    }
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" shape-rendering="crispEdges">
${rects.join('\n')}
</svg>`;
}

// Common Filipino sign-making inspired palette:
// Y: Chrome yellow (#ffd000)
// y: Soft yellow (#fff275)
// D: Deep gold/amber (#d48800)
// R: Fiesta flame red (#ff3838)
// r: Dark crimson (#b81414)
// C: Jeepney electric turquoise (#00e5ff)
// c: Deep cyan (#008ba3)
// G: Calamansi green (#2ed573)
// g: Forest green (#157a3c)
// W: Enamel white (#fdfbf7)
// w: Warm cream (#e8e2d5)
// K: Deep shadow indigo (#0a0f1d)
// k: Medium navy/metal (#1e293b)
// M: Magenta (#ff2a7a)
// O: Mango orange (#ff9f1a)
// P: Purple/plum (#8e44ad)
// B: Burnished brass (#b7791f)

const PAL = {
  Y: '#ffd000', y: '#fff275', D: '#d48800',
  R: '#ff3838', r: '#b81414',
  C: '#00e5ff', c: '#008ba3',
  G: '#2ed573', g: '#157a3c',
  W: '#fdfbf7', w: '#e8e2d5',
  K: '#0a0f1d', k: '#1e293b',
  M: '#ff2a7a', O: '#ff9f1a', P: '#8e44ad',
  B: '#b7791f', b: '#e58e26'
};

// 1. TALA STAR (32x32) — Philippine 8-point sunburst tala star
const TALA_STAR_GRID = [
  "..............KK..............",
  "..............YY..............",
  ".............YYYY.............",
  ".............YYYY.............",
  ".....KK......yYYy......KK.....",
  "......YY.....yYYy.....YY......",
  ".......YY....YYYY....YY.......",
  "........YY...YYYY...YY........",
  ".........YY..yYYy..YY.........",
  "..........YY.yYYy.YY..........",
  "...........YyYYYYyY...........",
  "...........YYRRRRYY...........",
  "..KKKK.....YRRRFRRY.....KKKK..",
  "..YYYYYYYYYRRFFF RRYYYYYYYYY..",
  "..YYYYYYYYYRRFFWWRRYYYYYYYYY..",
  "..YYYYYYYYYRRFFWWRRYYYYYYYYY..",
  "..KKKK.....YRRFFF RRY.....KKKK..",
  "...........YYRRRRYY...........",
  "...........YyYYYYyY...........",
  "..........YY.yYYy.YY..........",
  ".........YY..yYYy..YY.........",
  "........YY...YYYY...YY........",
  ".......YY....YYYY....YY.......",
  "......YY.....yYYy.....YY......",
  ".....KK......yYYy......KK.....",
  ".............YYYY.............",
  ".............YYYY.............",
  "..............YY..............",
  "..............KK..............",
  "..............................",
  "..............................",
  ".............................."
].map(r => r.replace(/F/g, 'Y'));

// 2. SHELF 01: LETTERS (48x48) — Illuminated manuscript codex, golden quill & starry cosmos
const SHELF_LETTERS_GRID = [
  "................................................",
  "..................KK............................",
  "..................YY............................",
  "..............KK.YYYY.KK..........KK............",
  "...............YYyYYyYY............YY...........",
  "................YYYYYY............YYYY..........",
  "...............YYyYYyYY............YY...........",
  "..............KK.YYYY.KK..........KK............",
  "..................YY............................",
  "..................KK.........KK.................",
  "............................YYYY................",
  ".............................YY.................",
  ".....................................KK.........",
  "....................................YyY.........",
  "...................................YyY..........",
  "..................................YyY...........",
  ".................................YyY............",
  "..................KKKKKKKKKK....YyY.............",
  "...........KKKKKKKWWWWWWWWWWKKKKkYKK............",
  ".........KKWWWWWWWWWWWWWWWWWWWWWkKK.............",
  "........KKWWWWWWWWWWWWWWWWWWWWWkKK..............",
  ".......KKWWWWWWWWWWWWWWWWWWWWWkKK...............",
  "......KKWWWWWWWWWWWWWWWWWWWWWkKK................",
  ".....KKWWWWwYYYYWWWWWWwYYYYWWkKK................",
  "....KKWWWWwYYYYWWWWWWwYYYYWWkKK.................",
  "....KKWWWwYYYYWWWWWWwYYYYWWWWkKK................",
  "...KKWWWWWWWWWWWWWWWWWWWWWWWWkKK................",
  "...KKWWWkKKKKkkKKKKKKkKKKKkkWkKK................",
  "...KKWWWWWWWWWWWWWWWWWWWWWWWWkKK................",
  "...KKWWWkKKKKkkKKKKKKkKKKKkkWkKK................",
  "...KKWWWWWWWWWWWWWWWWWWWWWWWWkKK................",
  "...KKWWWkKKKKkkKKKKKKkKKKKkkWkKK................",
  "...KKWWWWWWWWWWWWWWWWWWWWWWWWkKK................",
  "...KKWWWkKKKKkkKKKKKKkKKKKkkWkKK................",
  "...KKWWWWWWWWWWWWWWWWWWWWWWWWkKK................",
  "...KKWWWWWWWWWWWWWWWWWWWWWWWWkKK................",
  "...KKWWWWWWWWWWWWWWWWWWWWWWWWkKK................",
  "...KKWWWWWWWWWWWWWWWWWWWWWWWWkKK................",
  "...KKRRRRRRRRRRRRRRRRRRRRRRRRkKK................",
  "...KKRRRRRRRRRRRRRRRRRRRRRRRRkKK................",
  "...KKYYYYYYYYYYYYYYYYYYYYYYYYkKK................",
  "....KKkkkkkkkkkkkkkkkkkkkkkkkKK.................",
  "................................................",
  "................................................",
  "................................................",
  "................................................",
  "................................................",
  "................................................"
];

// 3. SHELF 02: WORD & PAGE (48x48) — Vintage typewriter & fountain pen
const SHELF_WORDPAGE_GRID = [
  "................................................",
  "................KKKKKKKKKKKKKK..................",
  "................KWWWWWWWWWWWWK..................",
  "................KWWwYYYYwWWWWK..................",
  "................KWWWWWWWWWWWWK..................",
  "................KWWkKKKKkWWWWK..................",
  "................KWWWWWWWWWWWWK..................",
  "................KWWkKKKKkWWWWK..................",
  "................KWWWWWWWWWWWWK..................",
  "................KWWWWWWWWWWWWK..................",
  "..............KKKWWWWWWWWWWWWKKK................",
  "............KKRRKWWWWWWWWWWWWKRRKK..............",
  "...........KRRRRKKKKKKKKKKKKKKRRRRK.............",
  "...........KRRRRkkkkkkkkkkkkkkRRRRK.............",
  "...........KRRRRRRRRRRRRRRRRRRRRRRK.............",
  "..........KKRRRRRRRRRRRRRRRRRRRRRRKK............",
  ".........KYYKKKKKKKKKKKKKKKKKKKKKKYYK...........",
  "........KYYYKKYYKKYYKKYYKKYYKKYYKKYYYK..........",
  "........KYYKKYYKKYYKKYYKKYYKKYYKKYYKYYK.........",
  ".......KYYYKKKKKKKKKKKKKKKKKKKKKKKKYYYK.........",
  ".......KYYYKKYYKKYYKKYYKKYYKKYYKKYYKYYK.........",
  ".......KYYYKKKKKKKKKKKKKKKKKKKKKKKKYYYK.........",
  "......KYYYYKKYYKKYYKKYYKKYYKKYYKKYYKYYYK........",
  "......KYYYYKKKKKKKKKKKKKKKKKKKKKKKKYYYYK........",
  "......KYYYYKKWWWWWWWWWWWWWWWWWWWWKKYYYYK........",
  "......KYYYYKKKKKKKKKKKKKKKKKKKKKKKKYYYYK........",
  ".....KYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYK.......",
  ".....KYYKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKYYK.......",
  ".....KYYKKCCCCCCCCCCCCCCCCCCCCCCCCCCKKYYK.......",
  ".....KYYKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKYYK.......",
  ".....KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK.......",
  "......KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK........",
  "................................................",
  "................................................",
  "................................................",
  "................................................",
  "................................................",
  "................................................",
  "................................................",
  "................................................",
  "................................................",
  "................................................",
  "................................................",
  "................................................",
  "................................................",
  "................................................",
  "................................................",
  "................................................"
];

// 4. SHELF 03: IMAGE & TIME (48x48) — Compass, prism & filmstrip
const SHELF_IMAGETIME_GRID = [
  "................................................",
  "......................KK........................",
  ".....................KYYK.......................",
  ".....................KYYK.......................",
  "....................KYYYYK......................",
  "....................KYYYYK......................",
  "...................KkYYYYkK.....................",
  "..................KkKYYYYKkK....................",
  ".................KkK.KYYK.KkK...................",
  "................KkK..KYYK..KkK..................",
  "...............KkK...KYYK...KkK.................",
  "..............KkK....KYYK....KkK................",
  ".............KkK.....KYYK.....KkK...............",
  "............KkK......KYYK......KkK..............",
  "...........KkK.......KYYK.......KkK.............",
  "..........KkK........KYYK........KkK............",
  ".........KkK.........KYYK.........KkK...........",
  "........KkK..........KYYK..........KkK..........",
  ".......KkK...........KYYK...........KkK.........",
  "......KkK............KYYK............KkK........",
  ".....KK..............KYYK..............KK.......",
  ".....................KYYK.......................",
  "......................KK........................",
  "........KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK........",
  "........KCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCK........",
  "........KCKKCKKCKKCKKCKKCKKCKKCKKCKKCKCK........",
  "........KCKKCKKCKKCKKCKKCKKCKKCKKCKKCKCK........",
  "........KCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCK........",
  "........KCRRRRRGGGGGBBBBBBYYYYYYCCCCCCCK........",
  "........KCRRRRRGGGGGBBBBBBYYYYYYCCCCCCCK........",
  "........KCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCK........",
  "........KCKKCKKCKKCKKCKKCKKCKKCKKCKKCKCK........",
  "........KCKKCKKCKKCKKCKKCKKCKKCKKCKKCKCK........",
  "........KCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCK........",
  "........KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK........",
  "................................................",
  "................................................",
  "................................................",
  "................................................",
  "................................................",
  "................................................",
  "................................................",
  "................................................",
  "................................................",
  "................................................",
  "................................................",
  "................................................",
  "................................................"
];

// 5. SHELF 04: HAND & OBJECT (48x48) — Anvil, gold mask & forging hammer
const SHELF_HANDOBJECT_GRID = [
  "................................................",
  "..................KKKK..........................",
  ".................KYYYYK.........................",
  "................KYYYYYYK........................",
  "...............KYYYYYYYYK.......................",
  "..............KYYYYYYYYYYK......KKKK............",
  "..............KYYKKKKKKYYK.....KYYYKK...........",
  ".............KYYK......KYYK...KYYYYYK...........",
  ".............KYYK.KKKK.KYYK..KYYYYYYK...........",
  ".............KYYK.KYYK.KYYK.KYYYYYYK............",
  ".............KYYK.KYYK.KYYKKYYYYYYK.............",
  "..............KYYKKKKKKYYKKYYYYYYK..............",
  "..............KYYYYYYYYYYKKYYYYYK...............",
  "...............KYYYYYYYYKKYYYYYK................",
  "................KYYYYYYKKYYYYYK.................",
  ".................KYYYYKKYYYYYK..................",
  "..................KKKKKkkkkkK...................",
  "......................KkkkkkK...................",
  ".....................KkkkkkkK...................",
  "....................KkkkkkkkK...................",
  "...................KkkkkkkkkK...................",
  ".........KKKKKKKKKKKKKKKKKKKKKKKKKKKKKK.........",
  "........KkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkK........",
  ".......KkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkK.......",
  "......KkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkK......",
  "......KkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkK......",
  ".......KKKKKKKKKKKKKkkkkkkkKKKKKKKKKKKKKK.......",
  "...................KkkkkkkK.....................",
  "...................KkkkkkkK.....................",
  "...................KkkkkkkK.....................",
  "..................KkkkkkkkkK....................",
  ".................KkkkkkkkkkkK...................",
  "................KkkkkkkkkkkkkK..................",
  "...............KkkkkkkkkkkkkkkK.................",
  "..............KkkkkkkkkkkkkkkkkK................",
  ".............KKKKKKKKKKKKKKKKKKKK...............",
  "................................................",
  "................................................",
  "................................................",
  "................................................",
  "................................................",
  "................................................",
  "................................................",
  "................................................",
  "................................................",
  "................................................",
  "................................................",
  "................................................"
];

// 6. SHELF 05: THE RECORD (48x48) — Tabularium registry, lantern & seal
const SHELF_RECORD_GRID = [
  "................................................",
  "......................KK........................",
  ".....................KYYK.......................",
  "....................KYYYYK......................",
  "...................KYYYYYYK.....................",
  "..................KKKKKKKKKK....................",
  ".................KCCCCCCCCCCK...................",
  "................KCCWWWWWWWWCCK..................",
  "................KCWWYYYYYYWWCK..................",
  "................KCWWYYYYYYWWCK..................",
  "................KCWWYYYYYYWWCK..................",
  "................KCCWWWWWWWWCCK..................",
  ".................KCCCCCCCCCCK...................",
  "..................KKKKKKKKKK....................",
  "...................KKKKKKKK.....................",
  "....................KK..KK......................",
  "............KKKKKKKKKKKKKKKKKKKKKKKK............",
  "..........KKBBBBBBBBBBBBBBBBBBBBBBBBKK..........",
  ".........KBBBBBBBBBBBBBBBBBBBBBBBBBBBBK.........",
  "........KBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBK........",
  "........KBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBK........",
  "........KBBBBBBBBKKKKKKKKKKBBBBBBBBBBBBK........",
  "........KBBBBBBKKYyYYYYYYyYYKKBBBBBBBBBK........",
  "........KBBBBBKYYyYYYYYYYYyYYKKBBBBBBBBK........",
  "........KBBBBBKYYYRRRRRRRRYYYKKBBBBBBBBK........",
  "........KBBBBBKYYYRRRFFRRRYYYKKBBBBBBBBK........",
  "........KBBBBBKYYYRRFFF RRYYYKKBBBBBBBBK........",
  "........KBBBBBKYYYRRRFFRRRYYYKKBBBBBBBBK........",
  "........KBBBBBKYYYRRRRRRRRYYYKKBBBBBBBBK........",
  "........KBBBBBKYYyYYYYYYYYyYYKKBBBBBBBBK........",
  "........KBBBBBBKKYyYYYYYYyYYKKBBBBBBBBBK........",
  "........KBBBBBBBBKKKKKKKKKKBBBBBBBBBBBBK........",
  "........KBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBK........",
  "........KBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBK........",
  ".........KBBBBBBBBBBBBBBBBBBBBBBBBBBBBK.........",
  "..........KKBBBBBBBBBBBBBBBBBBBBBBBBKK..........",
  "............KKKKKKKKKKKKKKKKKKKKKKKK............",
  "................................................",
  "................................................",
  "................................................",
  "................................................",
  "................................................",
  "................................................",
  "................................................",
  "................................................",
  "................................................",
  "................................................",
  "................................................"
].map(r => r.replace(/F/g, 'W'));

// 7. HERO SIGN (160x40) — Filipino signboard route badge with pinstripe, chrome grille & stars
function generateHeroSign() {
  const w = 160, h = 40;
  const rows = [];
  for (let y = 0; y < h; y++) {
    let row = '';
    for (let x = 0; x < w; x++) {
      // Outer border
      if (x === 0 || x === w - 1 || y === 0 || y === h - 1) row += 'K';
      else if (x === 1 || x === w - 2 || y === 1 || y === h - 2) row += 'Y';
      else if (x === 2 || x === w - 3 || y === 2 || y === h - 3) row += 'R';
      else if (x === 3 || x === w - 4 || y === 3 || y === h - 4) row += 'K';
      // Side headlights / tala medallions (left: x 6..18, right: x 141..153, y 10..29)
      else if (((x - 12)**2 + (y - 20)**2) <= 36) {
        let d = (x - 12)**2 + (y - 20)**2;
        row += d <= 4 ? 'W' : (d <= 16 ? 'Y' : 'R');
      } else if (((x - 147)**2 + (y - 20)**2) <= 36) {
        let d = (x - 147)**2 + (y - 20)**2;
        row += d <= 4 ? 'W' : (d <= 16 ? 'Y' : 'R');
      }
      // Top & Bottom pinstripe accents
      else if ((y === 6 || y === h - 7) && x > 24 && x < w - 25) {
        row += (x % 4 === 0) ? 'R' : 'Y';
      } else if ((y === 7 || y === h - 8) && x > 28 && x < w - 29) {
        row += 'C';
      }
      // Inner signboard field
      else {
        row += 'k';
      }
    }
    rows.push(row);
  }
  return renderPixelSVG(w, h, rows, PAL);
}

// 8. 21 TOPIC BADGES (32x32 each)
const TOPIC_TEMPLATES = {
  tabularium: [ // Archive drawer
    "................................",
    "....KKKKKKKKKKKKKKKKKKKKKKKK....",
    "...KYYYYYYYYYYYYYYYYYYYYYYYYK...",
    "...KYKKKKKKKKKKKKKKKKKKKKKKyK...",
    "...KYKWWWWWWWWWWWWWWWWWWWWKyK...",
    "...KYKWKKKKKKKKKKKKKKKKKKWKyK...",
    "...KYKWKYYYYYYYYYYYYYYYYKWKyK...",
    "...KYKWKYYKKKKKKKKKKKKYYKWKyK...",
    "...KYKWKYYKCCCCCCCCCCKYYKWKyK...",
    "...KYKWKYYKCCCCCCCCCCKYYKWKyK...",
    "...KYKWKYYKKKKKKKKKKKKYYKWKyK...",
    "...KYKWKYYYYYYYYYYYYYYYYKWKyK...",
    "...KYKWKKKKKKKKKKKKKKKKKKWKyK...",
    "...KYKWWWWWWWWWWWWWWWWWWWWKyK...",
    "...KYKKKKKKKKKKKKKKKKKKKKKKyK...",
    "...KYK..................KKKyK...",
    "...KYKKKKKKKKKKKKKKKKKKKKKKyK...",
    "...KYKWWWWWWWWWWWWWWWWWWWWKyK...",
    "...KYKWKKKKKKKKKKKKKKKKKKWKyK...",
    "...KYKWKYYYYYYYYYYYYYYYYKWKyK...",
    "...KYKWKYYKKKKKKKKKKKKYYKWKyK...",
    "...KYKWKYYKCCCCCCCCCCKYYKWKyK...",
    "...KYKWKYYKCCCCCCCCCCKYYKWKyK...",
    "...KYKWKYYKKKKKKKKKKKKYYKWKyK...",
    "...KYKWKYYYYYYYYYYYYYYYYKWKyK...",
    "...KYKWKKKKKKKKKKKKKKKKKKWKyK...",
    "...KYKWWWWWWWWWWWWWWWWWWWWKyK...",
    "...KYKKKKKKKKKKKKKKKKKKKKKKyK...",
    "...KYYYYYYYYYYYYYYYYYYYYYYYYK...",
    "....KKKKKKKKKKKKKKKKKKKKKKKK....",
    "................................",
    "................................"
  ],
  philosophy: [ // Greek column capital / Temple pillar
    "................................",
    "....KKKKKKKKKKKKKKKKKKKKKKKK....",
    "...KYYYYYYYYYYYYYYYYYYYYYYYYK...",
    "..KYYYYYYYYYYYYYYYYYYYYYYYYYYK..",
    "..KYYKKKKYYYYYYYYYYYYYYKKKKYYK..",
    "..KYYKWWKYYYYYYYYYYYYYYKWWKYYK..",
    "...KKKWWKYYYYYYYYYYYYYYKWWKKK...",
    ".....KWWKKKKKKKKKKKKKKKKWWK.....",
    ".....KWWWWWWWWWWWWWWWWWWWWK.....",
    ".....KKKKKKKKKKKKKKKKKKKKKK.....",
    "......KWWWWKWWWWKWWWWKWWWWK.....",
    "......KWWWWKWWWWKWWWWKWWWWK.....",
    "......KWWWWKWWWWKWWWWKWWWWK.....",
    "......KWWWWKWWWWKWWWWKWWWWK.....",
    "......KWWWWKWWWWKWWWWKWWWWK.....",
    "......KWWWWKWWWWKWWWWKWWWWK.....",
    "......KWWWWKWWWWKWWWWKWWWWK.....",
    "......KWWWWKWWWWKWWWWKWWWWK.....",
    "......KWWWWKWWWWKWWWWKWWWWK.....",
    "......KWWWWKWWWWKWWWWKWWWWK.....",
    "......KWWWWKWWWWKWWWWKWWWWK.....",
    "......KWWWWKWWWWKWWWWKWWWWK.....",
    "......KWWWWKWWWWKWWWWKWWWWK.....",
    ".....KKKKKKKKKKKKKKKKKKKKKK.....",
    "....KWWWWWWWWWWWWWWWWWWWWWWK....",
    "...KYYYYYYYYYYYYYYYYYYYYYYYYK...",
    "..KYYYYYYYYYYYYYYYYYYYYYYYYYYK..",
    "..KKKKKKKKKKKKKKKKKKKKKKKKKKKK..",
    "................................",
    "................................",
    "................................",
    "................................"
  ],
  mathematics: [ // Compass, proof triangle & Cantor infinity
    "................................",
    "...............KK...............",
    "..............KYYK..............",
    "..............KYYK..............",
    ".............KkYYkK.............",
    "............KkKYYKkK............",
    "...........KkK.YY.KkK...........",
    "..........KkK..YY..KkK..........",
    ".........KkK...YY...KkK.........",
    "........KkK....YY....KkK........",
    ".......KkKKKKKKKKKKKKKKkK.......",
    "......KkK..............KkK......",
    ".....KkK................KkK.....",
    "....KkK..................KkK....",
    "...KK......................KK...",
    "................................",
    ".......KKKK..........KKKK.......",
    ".....KKCCCCKK......KKCCCCKK.....",
    "....KCCCCCCCCK....KCCCCCCCCK....",
    "...KCCCCKKCCCCK..KCCCCKKCCCCK...",
    "...KCCCK..KCCCCKKCCCCK..KCCCK...",
    "...KCCCK...KCCCCCCCCK...KCCCK...",
    "...KCCCK....KCCCCCCK....KCCCK...",
    "...KCCCCK....KCCCCK....KCCCCK...",
    "....KCCCCCCCCKKKKKKCCCCCCCCK....",
    ".....KKCCCCKK......KKCCCCKK.....",
    ".......KKKK..........KKKK.......",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................"
  ],
  literature: [ // Borges library labyrinth & open book
    "................................",
    ".............KKKKKK.............",
    "...........KKYYYYYYKK...........",
    ".........KKYYKKKKKKYYKK.........",
    "........KYYKKCCCCCCKKYYK........",
    ".......KYYKCCKKKKKKCCKYYK.......",
    "......KYYKCCKYYYYYYKCCKYYK......",
    "......KYYKCCKYKKKKYKCCKYYK......",
    "......KYYKCCKYK..KYKCCKYYK......",
    "......KYYKCCKYKKKKYKCCKYYK......",
    "......KYYKCCKYYYYYYKCCKYYK......",
    ".......KYYKCCKKKKKKCCKYYK.......",
    "........KYYKKCCCCCCKKYYK........",
    ".........KKYYKKKKKKYYKK.........",
    "...........KKYYYYYYKK...........",
    ".............KKKKKK.............",
    "................................",
    ".......KKKKKKKKKKKKKKKKKK.......",
    ".....KKWWWWWWWWWWWWWWWWWWKK.....",
    "....KWWWWWWWWWWWWWWWWWWWWWWK....",
    "...KWWWWkKKKWKKKKKKKWKKKWWWWK...",
    "...KWWWWkKKKWKKKKKKKWKKKWWWWK...",
    "...KWWWWkKKKWKKKKKKKWKKKWWWWK...",
    "...KWWWWWWWWWWWWWWWWWWWWWWWWK...",
    "...KRRRRRRRRRRRRRRRRRRRRRRRRK...",
    "....KKKKKKKKKKKKKKKKKKKKKKKK....",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................"
  ],
  languages: [ // Rosetta tablet & Baybayin glyph "Ka"
    "................................",
    ".........KKKKKKKKKKKKK..........",
    "........KYYYYYYYYYYYYYK.........",
    ".......KYYWWWWWWWWWWWWYK........",
    "......KYYWKKKKKKKKKKKKWYK.......",
    "......KYWKK....KK....KKWYK......",
    "......KYWK.....KK.....KWYK......",
    "......KYWK.....KK.....KWYK......",
    "......KYWK...KKKKKK...KWYK......",
    "......KYWKKKKKKRRKKKKKKWYK......",
    "......KYWK...KKKKKK...KWYK......",
    "......KYWK.....KK.....KWYK......",
    "......KYWK.....KK.....KWYK......",
    "......KYWKK....KK....KKWYK......",
    "......KYWKKKKKKKKKKKKKKWYK......",
    "......KYWKKRRKKRRKKRRKKWYK......",
    "......KYWKKKKKKKKKKKKKKWYK......",
    "......KYWKKCCKKCCKKCCKKWYK......",
    "......KYWKKKKKKKKKKKKKKWYK......",
    "......KYWKKRRKKRRKKRRKKWYK......",
    "......KYWKKKKKKKKKKKKKKWYK......",
    "......KYWKKCCKKCCKKCCKKWYK......",
    "......KYWKKKKKKKKKKKKKKWYK......",
    "......KYYWWWWWWWWWWWWWWYK.......",
    ".......KYYYYYYYYYYYYYYYK........",
    "........KKKKKKKKKKKKKKK.........",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................"
  ],
  poetry: [ // Lyre with golden strings
    "................................",
    "......KKKK............KKKK......",
    ".....KYYYYK..........KYYYYK.....",
    ".....KYYkYK..........KYkYYK.....",
    ".....KYYkYK..........KYkYYK.....",
    ".....KYYkYK..........KYkYYK.....",
    ".....KYYkYK..KKKKKK..KYkYYK.....",
    ".....KYYkYKKKYYYYYYKKKYkYYK.....",
    ".....KYYkYK.KCCKKCCK.KYkYYK.....",
    "......KYYkY.KCCKKCCK.YkYYK......",
    "......KYYkY.KCCKKCCK.YkYYK......",
    ".......KYYk.KCCKKCCK.kYYK.......",
    ".......KYYk.KCCKKCCK.kYYK.......",
    "........KYY.KCCKKCCK.YYK........",
    "........KYY.KCCKKCCK.YYK........",
    ".........KYYKCCKKCCKYYK.........",
    "..........KYYCCKKCCYYK..........",
    "...........KYYKKKKYYK...........",
    "............KYYYYYYK............",
    ".............KYYYYK.............",
    ".............KYYYYK.............",
    "............KKYYYYKK............",
    "...........KYYYYYYYYK...........",
    "..........KYYYYYYYYYYK..........",
    ".........KKKKKKKKKKKKKK.........",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................"
  ],
  copywriting: [ // Letterpress lead slug / printer block
    "................................",
    ".....KKKKKKKKKKKKKKKKKKKKKK.....",
    "....KYYYYYYYYYYYYYYYYYYYYYYK....",
    "...KYKKKKKKKKKKKKKKKKKKKKKkK...",
    "...KYKWWWWWWWWWWWWWWWWWWWWKkK...",
    "...KYKWKKKKKKKKKKKKKKKKKKWKkK...",
    "...KYKWKRRRRRRRRKKRRRRRRKWKkK...",
    "...KYKWKRRKKKKRRKKRRKKRRKWKkK...",
    "...KYKWKRRKKKKRRKKRRKKRRKWKkK...",
    "...KYKWKRRRRRRRRKKRRRRRRKWKkK...",
    "...KYKWKRRKKKKRRKKRRKKRRKWKkK...",
    "...KYKWKRRKKKKRRKKRRKKRRKWKkK...",
    "...KYKWKRRKKKKRRKKRRKKRRKWKkK...",
    "...KYKWKKKKKKKKKKKKKKKKKKWKkK...",
    "...KYKWWWWWWWWWWWWWWWWWWWWKkK...",
    "...KYKKKKKKKKKKKKKKKKKKKKKkK...",
    "...KYkKKKKKKKKKKKKKKKKKKKkKkK...",
    "...KYkK..................KkKkK...",
    "...KYkK.KKKKKKKKKKKKKKKK.KkKkK...",
    "...KYkK.KYYYYYYYYYYYYYYK.KkKkK...",
    "...KYkK.KYYYYYYYYYYYYYYK.KkKkK...",
    "...KYkK.KKKKKKKKKKKKKKKK.KkKkK...",
    "...KYkKKKKKKKKKKKKKKKKKKKkKkK...",
    "...KYKKKKKKKKKKKKKKKKKKKKKkK...",
    "...KYYYYYYYYYYYYYYYYYYYYYYK....",
    "....KKKKKKKKKKKKKKKKKKKKKK.....",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................"
  ],
  atelier: [ // Painter palette & brush
    "................................",
    "..........KKKKKKKKK.............",
    "........KKYYYYYYYYYKK...........",
    ".......KYYYYYYYYYYYYYK..........",
    "......KYYYRRRRYYYYYYYYK.........",
    ".....KYYYRRRRRRYYYYYYYYK........",
    "....KYYYYYRRRRYYYYCCCCYK........",
    "....KYYYYYYYYYYYYCCCCCCYK.......",
    "....KYYGGGGYYYYYYYCCCCYYK.......",
    "....KYGGGGGGYYYYYYYYYYYYK.......",
    "....KYGGGGGGYYYYYKKKKKYYK.......",
    "....KYYGGGGYYYYYKK...KYYK.......",
    ".....KYYYYYYYYYYK.....KYK.......",
    "......KYYYYYYYYYK.....KYK.......",
    ".......KYYYMMMMYYKK..KYYK.......",
    "........KYMMMMMMYYKKKYYK........",
    ".........KYMMMMYYYYYYYK.........",
    "..........KYYYYYYYYYYK..........",
    "...........KKYYYYYYKK...........",
    ".............KKKKKK.............",
    "..................KK............",
    ".................KYYK...........",
    "................KYYYYK..........",
    "...............KkYYYYkK.........",
    "..............KkKYYYYKkK........",
    ".............KK..KYYK..KK.......",
    "..................KK............",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................"
  ],
  journal: [ // Notebook with bookmark ribbon & pen
    "................................",
    "......KKKKKKKKKKKKKKKKKKKK......",
    ".....KRRRRRRRRRRRRRRRRRRRRK.....",
    ".....KRKYYKYYYYYYYYYYYYYYRK.....",
    ".....KRKYYKYYYYYYYYYYYYYYRK.....",
    ".....KRKYYKYYYYYYYYYYYYYYRK.....",
    ".....KRKYYKYYYYYYYYYYYYYYRK.....",
    ".....KRKYYKYYYRRRYYYYYYYYRK.....",
    ".....KRKYYKYYYRRRYYYYYYYYRK.....",
    ".....KRKYYKYYYRRRYYYYYYYYRK.....",
    ".....KRKYYKYYYRRRYYYYYYYYRK.....",
    ".....KRKYYKYYYRRRYYYYYYYYRK.....",
    ".....KRKYYKYYYRRRYYYYYYYYRK.....",
    ".....KRKYYKYYYRRRYYYYYYYYRK.....",
    ".....KRKYYKYYYRRRYYYYYYYYRK.....",
    ".....KRKYYKYYYYYYYYYYYYYYRK.....",
    ".....KRKYYKYYYRRRYYYYYYYYRK.....",
    ".....KRKYYKYYRRRRRYYYYYYYRK.....",
    ".....KRKYYKYYRR.RRYYYYYYYRK.....",
    ".....KRKYYKYYYYYYYYYYYYYYRK.....",
    ".....KRKYYKYYYYYYYYYYYYYYRK.....",
    ".....KRKYYKYYYYYYYYYYYYYYRK.....",
    ".....KRKYYKYYYYYYYYYYYYYYRK.....",
    ".....KRRRRRRRRRRRRRRRRRRRRK.....",
    "......KKKKKKKKKKKKKKKKKKKK......",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................"
  ],
  design: [ // Layout grid & T-square
    "................................",
    "....KKKKKKKKKKKKKKKKKKKKKKKK....",
    "....KYYYYYYYYYYYYYYYYYYYYYYK....",
    "....KYKKKKKKKKKKKKKKKKKKKKyK....",
    "....KYKCCCCCCKkKKkKCCCCCCKyK....",
    "....KYKCCCCCCKkKKkKCCCCCCKyK....",
    "....KYKKKKKKKKkKKkKKKKKKKKyK....",
    "....KYKWWWWWWKkKKkKWWWWWWKyK....",
    "....KYKWWWWWWKkKKkKWWWWWWKyK....",
    "....KYKKKKKKKKkKKkKKKKKKKKyK....",
    "....KYKRRRRRRKkKKkKRRRRRRKyK....",
    "....KYKRRRRRRKkKKkKRRRRRRKyK....",
    "....KYKKKKKKKKkKKkKKKKKKKKyK....",
    "....KYYYYYYYYKkKKkKYYYYYYYYK....",
    "....KKKKKKKKKKkKKkKKKKKKKKKK....",
    "..............KkKKkK............",
    "..............KkKKkK............",
    "..............KkKKkK............",
    "..............KkKKkK............",
    "..............KkKKkK............",
    "..............KkKKkK............",
    "..............KkKKkK............",
    "..............KkKKkK............",
    "..............KkKKkK............",
    "..............KkKKkK............",
    "..............KKKKKK............",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................"
  ],
  drawing: [ // Charcoal stick & hand gesture
    "................................",
    "..............KKKK..............",
    ".............KYYYYK.............",
    "............KYYYYYYK............",
    "...........KYYYYYYYYK...........",
    "..........KYYYYYYYYYYK..........",
    "..........KYYKKKKKKYYK..........",
    ".........KYYK......KYYK.........",
    ".........KYYK......KYYK.........",
    ".........KYYK.KKKK.KYYK.........",
    ".........KYYKKYYYYKKYYK.........",
    "..........KYYYYYYYYYYK..........",
    "..........KYYYYYYYYYYK..........",
    "...........KKKKKKKKKK...........",
    "................................",
    "..........KKKKKKKKKKKK..........",
    ".........KkkkkkkkkkkkkK.........",
    "........KkkkkkkkkkkkkkkK........",
    ".......KkkkkkkkkkkkkkkkkK.......",
    "......KkkkkkkkkkkkkkkkkkkK......",
    ".....KkkkkkkkkkkkkkkkkkkkkK.....",
    ".....KKKKKKKKKKKKKKKKKKKKKK.....",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................"
  ],
  modeling: [ // 3D wireframe polyhedron
    "................................",
    "...............KK...............",
    ".............KKCCKK.............",
    "...........KKCCCCCCKK...........",
    ".........KKCCCCCCCCCCKK.........",
    ".......KKCCCCCCCCCCCCCCKK.......",
    ".....KKCCCCCCCCCCCCCCCCCCKK.....",
    "....KCCCCCCCCCCCCCCCCCCCCCCK....",
    "....KCCKKCCCCCCCCCCCCCCKKCCK....",
    "....KCCCCKKKKCCCCCCKKKKCCCCK....",
    "....KCCCCCCCCKKKKKKCCCCCCCCK....",
    "....KCCCCCCCCCCKKCCCCCCCCCCK....",
    "....KCCCCCCCCCCKKCCCCCCCCCCK....",
    "....KCCCCCCCCCCKKCCCCCCCCCCK....",
    "....KCCCCCCCCCCKKCCCCCCCCCCK....",
    "....KCCCCKKKKCCKKCCKKKKCCCCK....",
    "....KCCKK....KKKKKK....KKCCK....",
    "....KKK........KK........KKK....",
    "....KCCCCCCCCCCKKCCCCCCCCCCK....",
    "....KCCCCCCCCCCKKCCCCCCCCCCK....",
    "....KCCCCCCCCCCKKCCCCCCCCCCK....",
    "....KCCCCCCCCCCKKCCCCCCCCCCK....",
    "....KCCCCCCCCCCKKCCCCCCCCCCK....",
    "....KCCCCCCCCCCKKCCCCCCCCCCK....",
    "....KCCCCCCCCCCKKCCCCCCCCCCK....",
    ".....KKCCCCCCCCKKCCCCCCCCKK.....",
    ".......KKCCCCCCKKCCCCCCKK.......",
    ".........KKCCCCKKCCCCKK.........",
    "...........KKCCKKCCKK...........",
    ".............KKKKKK.............",
    "...............KK...............",
    "................................"
  ],
  video: [ // Cine camera & film frame
    "................................",
    "....KKKKKKKKKKKKKKKK............",
    "...KCCCCCCCCCCCCCCCCK...........",
    "..KCCKKKKKKKKKKKKKKCCK...KKKK...",
    "..KCKWWWWWWWWWWWWWWKCK..KCCCCK..",
    "..KCKWWKKWWWWWWKKWWKCK.KCCCCCCK.",
    "..KCKWWKKWWWWWWKKWWKCKKCCCCCCCCK",
    "..KCKWWWWWWWWWWWWWWKCKKCCCCCCCCK",
    "..KCKWWWWWWWWWWWWWWKCK.KCCCCCCK.",
    "..KCKWWKKWWWWWWKKWWKCK..KCCCCK..",
    "..KCKWWKKWWWWWWKKWWKCK...KKKK...",
    "..KCKWWWWWWWWWWWWWWKCK..........",
    "..KCCKKKKKKKKKKKKKKCCK..........",
    "...KCCCCCCCCCCCCCCCCK...........",
    "....KKKKKKKKKKKKKKKK............",
    "............KK..................",
    "...........KYYK.................",
    "..........KYYYYK................",
    ".........KYYYYYYK...............",
    "........KYYYYYYYYK..............",
    ".......KYYYYYYYYYYK.............",
    "......KKKKKKKKKKKKKK............",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................"
  ],
  clothes: [ // Tailor's shears & thread
    "................................",
    "........KK............KK........",
    ".......KYYK..........KYYK.......",
    "......KYYYYK........KYYYYK......",
    "......KYYkYK........KYkYYK......",
    "......KYYkYK........KYkYYK......",
    ".......KYYK..........KYYK.......",
    "........KK............KK........",
    ".........KK..........KK.........",
    "..........KK........KK..........",
    "...........KK......KK...........",
    "............KK....KK............",
    ".............KK..KK.............",
    "..............KKKK..............",
    "..............KRRK..............",
    ".............KKKKKK.............",
    "............KK....KK............",
    "...........KK......KK...........",
    "..........KK........KK..........",
    ".........KK..........KK.........",
    "........KK............KK........",
    ".......KK..............KK.......",
    "......KK................KK......",
    ".....KK..................KK.....",
    "....KK....................KK....",
    "...KK......................KK...",
    "..KK........................KK..",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................"
  ],
  jewelry: [ // Faceted diamond / gemstone ring
    "................................",
    ".............KKKK...............",
    "...........KKCCCCKK.............",
    ".........KKCCCCCCCCKK...........",
    ".......KKCCCCCCCCCCCCKK.........",
    ".....KKKKKKKKKKKKKKKKKKKK.......",
    ".....KCWCCWCCWCCWCCWCCWCK.......",
    ".....KCWCCWCCWCCWCCWCCWCK.......",
    "......KCWWCCWCCWCCWCCWCK........",
    ".......KCCCCCCCCCCCCCCK.........",
    "........KCCCCCCCCCCCCK..........",
    ".........KCCCCCCCCCCK...........",
    "..........KCCCCCCCCK............",
    "...........KCCCCCCK.............",
    "............KCCCCK..............",
    ".............KCCK...............",
    "..............KK................",
    "..........KKKKKKKKKK............",
    "........KKYYYYYYYYYYKK..........",
    ".......KYYKKKKKKKKKKYYK.........",
    "......KYYK..........KYYK........",
    "......KYYK..........KYYK........",
    "......KYYK..........KYYK........",
    ".......KYYKKKKKKKKKKYYK.........",
    "........KKYYYYYYYYYYKK..........",
    "..........KKKKKKKKKK............",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................"
  ],
  games: [ // D20 icosahedral die
    "................................",
    "...............KK...............",
    ".............KKCCKK.............",
    "...........KKCCCCCCKK...........",
    ".........KKCCCCCCCCCCKK.........",
    ".......KKKKKKKKKKKKKKKKKK.......",
    "......KCCKKKCCCCCCCCCKKKCCK.....",
    ".....KCCCCKKKKCCCCCKKKKCCCCK....",
    "....KCCCCCCKKKKKKKKKKCCCCCCK....",
    "...KCCCCCCCCCCKKKKCCCCCCCCCCK...",
    "...KCCCCKKCCCCCCCCCCCCKKCCCCK...",
    "...KCCKK..KKCCCCCCCCKK..KKCCK...",
    "...KKK......KKCCCCKK......KKK...",
    "...KCCKK......KKKK......KKCCK...",
    "...KCCCCKK.....KK.....KKCCCCK...",
    "...KCCCCCCKK...KK...KKCCCCCCK...",
    "...KCCCCCCCCKK.KK.KKCCCCCCCCK...",
    "...KCCCCCCCCCCKKKKCCCCCCCCCCK...",
    "...KCCCCCCCCCCCCKKCCCCCCCCCCK...",
    "....KCCCCCCCCCCCKKCCCCCCCCCK....",
    ".....KCCCCCCCCCKKKKCCCCCCCK.....",
    "......KCCCCCCCKK..KKCCCCCK......",
    ".......KCCCCCKK....KKCCCK.......",
    "........KCCCKK......KKCK........",
    ".........KKKK........KK.........",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................"
  ],
  programming: [ // Retro terminal CRT screen with prompt
    "................................",
    "....KKKKKKKKKKKKKKKKKKKKKKKK....",
    "...KCCCCCCCCCCCCCCCCCCCCCCCCK...",
    "..KCCKKKKKKKKKKKKKKKKKKKKKKCCK..",
    "..KCKGGGGGGGGGGGGGGGGGGGGGGKCK..",
    "..KCKGKKKKKKKKKKKKKKKKKKKKGKCK..",
    "..KCKGK..................KGKCK..",
    "..KCKGKGKK.............KKKGKCK..",
    "..KCKGKGKK.............KKKGKCK..",
    "..KCKGKGKKKKKKKKKKKKKKKKKKGKCK..",
    "..KCKGK..................KGKCK..",
    "..KCKGKKKKKKKKKKKKKKKKKKKKGKCK..",
    "..KCKGKGKGGGGGGGGGGGG....KGKCK..",
    "..KCKGK..................KGKCK..",
    "..KCKGKKKKKKKKKKKKKKKKKKKKGKCK..",
    "..KCKGKGGGGGG............KGKCK..",
    "..KCKGK..................KGKCK..",
    "..KCKGKKKKKKKKKKKKKKKKKKKKGKCK..",
    "..KCKGGGGGGGGGGGGGGGGGGGGGGKCK..",
    "..KCCKKKKKKKKKKKKKKKKKKKKKKCCK..",
    "...KCCCCCCCCCCCCCCCCCCCCCCCCK...",
    "....KKKKKKKKKKKKKKKKKKKKKKKK....",
    "............KKKKKK..............",
    "...........KCCCCCCK.............",
    ".........KKCCCCCCCCKK...........",
    "........KCCCCCCCCCCCCK..........",
    ".......KKKKKKKKKKKKKKKK.........",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................"
  ],
  psychology: [ // Jungian solar mandala & shadow
    "................................",
    "...............KK...............",
    ".............KKYYKK.............",
    "...........KKYYYYYYKK...........",
    ".........KKYYKKKKKKYYKK.........",
    "........KYYKKCCCCCCKKYYK........",
    ".......KYYKCCKKKKKKCCKYYK.......",
    "......KYYKCCKRRRRRRKCCKYYK......",
    ".....KYYKCCKRRKKKKRRKCCKYYK.....",
    "....KYYKCCKRKKKKKKKKRKCCKYYK....",
    "...KYYKCCKRKKKWWWWKKKRKCCKYYK...",
    "...KYYKCCKRKKWWWWWWKKRKCCKYYK...",
    "..KYYKCCKRKKWWWWWWWWKKRKCCKYYK..",
    "..KYYKCCKRKKWWWWWWWWKKRKCCKYYK..",
    "..KYYKCCKRKKWWWWWWWWKKRKCCKYYK..",
    "..KYYKCCKRKKWWWWWWWWKKRKCCKYYK..",
    "..KYYKCCKRKKWWWWWWWWKKRKCCKYYK..",
    "..KYYKCCKRKKWWWWWWWWKKRKCCKYYK..",
    "...KYYKCCKRKKWWWWWWKKRKCCKYYK...",
    "...KYYKCCKRKKKWWWWKKKRKCCKYYK...",
    "....KYYKCCKRKKKKKKKKRKCCKYYK....",
    ".....KYYKCCKRRKKKKRRKCCKYYK.....",
    "......KYYKCCKRRRRRRKCCKYYK......",
    ".......KYYKCCKKKKKKCCKYYK.......",
    "........KYYKKCCCCCCKKYYK........",
    ".........KKYYKKKKKKYYKK.........",
    "...........KKYYYYYYKK...........",
    ".............KKYYKK.............",
    "...............KK...............",
    "................................",
    "................................",
    "................................"
  ],
  neurotech: [ // Brainwave oscillograph trace & synapse
    "................................",
    "...............KK...............",
    "..............KCCK..............",
    ".............KCCCCK.............",
    ".............KCCCCK.............",
    "..............KCCK..............",
    "...............KK...............",
    "................................",
    "...KKKK..................KKKK...",
    "....KCCK................KCCK....",
    ".....KCCK..............KCCK.....",
    "......KKKK............KKKK......",
    "........KKKKKKKKKKKKKKKK........",
    "................................",
    "....KKKKKKKKKKKKKKKKKKKKKKKK....",
    "...KCCCCCCCCCCCCCCCCCCCCCCCCK...",
    "..KC........................CK..",
    "..KC...KK...................CK..",
    "..KC..KCCK.........KK.......CK..",
    "..KC.KCCCCK.......KCCK......CK..",
    "..KCKCCCCCCK.....KCCCCK.....CK..",
    "..KKCCCCCCCCK...KCCCCCCK...KCK..",
    "..KC.KKKKKKKKK.KKKKKKKKKK.KKCK..",
    "..KC........KCCK.......KCCK.CK..",
    "..KC.........KK.........KK..CK..",
    "..KCCCCCCCCCCCCCCCCCCCCCCCCCCK..",
    "...KKKKKKKKKKKKKKKKKKKKKKKKKK...",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................"
  ],
  metalwork: [ // Negroli armorer helmet & gold mask
    "................................",
    ".............KKKKKK.............",
    "...........KKYYYYYYKK...........",
    "..........KYYYYYYYYYYK..........",
    ".........KYYYYYYYYYYYYK.........",
    "........KYYKKKKKKKKKKYYK........",
    "........KYKRRRRRRRRRRKYK........",
    ".......KYKRRRRRRRRRRRRKYK.......",
    ".......KYKKKKKKKKKKKKKKKY.......",
    "......KYYKKWWWWWWWWWWKKYYK......",
    "......KYYKKWWWWWWWWWWKKYYK......",
    "......KYYKKKKKKKKKKKKKKYYK......",
    "......KYYYYYYYYYYYYYYYYYYK......",
    "......KYYYYYKKKKKKKKYYYYYK......",
    "......KYYYYKCCCCCCCCKYYYYK......",
    ".......KYYKCCCCCCCCCCKYYK.......",
    ".......KYYKCCCCCCCCCCKYYK.......",
    "........KYYKCCCCCCCCKYYK........",
    "........KYYYKKKKKKKKYYYK........",
    ".........KYYYYYYYYYYYYK.........",
    "..........KKYYYYYYYYKK..........",
    "............KKKKKKKK............",
    "..........KKKKKKKKKKKK..........",
    ".........KYYYYYYYYYYYYK.........",
    "........KYYYYYYYYYYYYYYK........",
    ".......KKKKKKKKKKKKKKKKKK.......",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................"
  ],
  about: [ // Author seal & tabularium writer desk
    "................................",
    ".............KKKKKK.............",
    "...........KKYyYYYYKK...........",
    "..........KYYRRRRRRYYK..........",
    ".........KYYRFFFFFFRYYK.........",
    "........KYYRFYYRRYYFRYYK........",
    "........KYYRFRRFFRRFRYYK........",
    "........KYYRFRRFFRRFRYYK........",
    "........KYYRFYYRRYYFRYYK........",
    ".........KYYRFFFFFFRYYK.........",
    "..........KYYRRRRRRYYK..........",
    "...........KKYyYYYYKK...........",
    ".............KKKKKK.............",
    "................................",
    "........KKKKKKKKKKKKKKKK........",
    ".......KWWWWWWWWWWWWWWWWK.......",
    "......KWWWWWWWWWWWWWWWWWWK......",
    ".....KWWkKKKkWWWWWWkKKKkWWK.....",
    ".....KWWkKKKkWWWWWWkKKKkWWK.....",
    ".....KWWWWWWWWWWWWWWWWWWWWK.....",
    ".....KWWkKKKkWWWWWWkKKKkWWK.....",
    ".....KWWWWWWWWWWWWWWWWWWWWK.....",
    ".....KKKKKKKKKKKKKKKKKKKKKK.....",
    "......KYYYYYYYYYYYYYYYYYYK......",
    ".......KYYYYYYYYYYYYYYYYK.......",
    "........KKKKKKKKKKKKKKKK........",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................",
    "................................"
  ]
};

// 9. SUBPAGE FIGURE ILLUSTRATIONS (128x56 each)
function generateFigureSVG(type) {
  const w = 128, h = 56;
  const rows = [];
  for (let y = 0; y < h; y++) {
    let row = '';
    for (let x = 0; x < w; x++) {
      // Border frame
      if (x === 0 || x === w - 1 || y === 0 || y === h - 1) row += 'K';
      else if (x === 1 || x === w - 2 || y === 1 || y === h - 2) row += 'Y';
      else if (x === 2 || x === w - 3 || y === 2 || y === h - 3) row += 'k';
      else if (type === 'proof') {
        // Geometric Pythagorean & diagonal grid
        let inGrid = (x % 8 === 0 || y % 8 === 0) && x > 8 && x < 120 && y > 6 && y < 50;
        let inTri = (x >= 40 && x <= 88 && y >= 14 && y <= 42 && (x - 40) + (y - 14) <= 48);
        let inHyp = Math.abs((x - 40) - (42 - y)) <= 1;
        row += inHyp ? 'R' : (inTri ? 'Y' : (inGrid ? 'c' : 'K'));
      } else if (type === 'gold') {
        // Philippine Oton gold death mask
        let dx = Math.abs(x - 64), dy = Math.abs(y - 28);
        if (dx <= 32 && dy <= 18) {
          if ((dx === 14 && dy <= 6) || (dx <= 6 && dy === 10)) row += 'K'; // eyes & mouth slit
          else if (dx === 0 && dy <= 8) row += 'r'; // nose ridge
          else if (dx > 28 || dy > 15) row += 'D'; // hammered edge
          else row += 'Y'; // gold leaf
        } else if ((dx + dy) % 6 === 0 && x > 12 && x < 116 && y > 8 && y < 48) {
          row += 'c'; // filigree stars
        } else {
          row += 'k';
        }
      } else if (type === 'eeg') {
        // Brainwave oscillation
        let wave = Math.round(28 + Math.sin((x - 10) * 0.22) * 10 + Math.sin((x - 10) * 0.55) * 5);
        if (y === wave) row += 'C';
        else if (Math.abs(y - wave) === 1) row += 'c';
        else if (y === 28 && x % 4 === 0) row += 'R';
        else if ((x % 16 === 0 || y % 14 === 0) && x > 6 && x < 122) row += 'k';
        else row += 'K';
      } else if (type === 'labyrinth') {
        // Borges hexagon maze
        let hex = ((x % 12 === 0) ^ (y % 10 === 0));
        let center = ((x - 64)**2 + (y - 28)**2) <= 100;
        row += center ? 'Y' : (hex && x > 10 && x < 118 && y > 6 && y < 50 ? 'C' : 'K');
      } else if (type === 'armor') {
        // Negroli Milanese embossed plate
        let cx = Math.abs(x - 64), cy = Math.abs(y - 28);
        if (cx <= 24 && cy <= 18) {
          if (cx <= 18 && cy <= 12) row += 'Y';
          else row += 'R';
        } else if ((cx + cy) % 8 === 0 && x > 8 && x < 120) {
          row += 'c';
        } else {
          row += 'k';
        }
      } else {
        // Atelier desk generic
        if (y === 38 && x > 10 && x < 118) row += 'Y';
        else if (y > 38 && (x === 20 || x === 108)) row += 'D';
        else if (x > 45 && x < 83 && y > 18 && y < 38) row += 'C';
        else row += 'k';
      }
    }
    rows.push(row);
  }
  return renderPixelSVG(w, h, rows, PAL);
}

// 10. FILIPINO SIGNMAKER PINSTRIPE BORDER STRIP (32x8)
const PINSTRIPE_GRID = [
  "YYYYRRRRCCCCGGGGYYYYRRRRCCCCGGGG",
  "KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK",
  "YYY.RRR.CCC.GGG.YYY.RRR.CCC.GGG.",
  "KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK",
  "YYY.RRR.CCC.GGG.YYY.RRR.CCC.GGG.",
  "KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK",
  "YYYYRRRRCCCCGGGGYYYYRRRRCCCCGGGG",
  "KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK"
];

// 11. FILIPINO SUN & MOON (32x32 each)
const FILIPINO_SUN_GRID = [
  "..............KK................",
  "..............YY................",
  ".............YYYY...............",
  ".....KK......YYYY......KK.......",
  "......YY.....YYYY.....YY........",
  ".......YY....yYYy....YY.........",
  "........YY...yYYy...YY..........",
  ".........YY..yYYy..YY...........",
  "..........YY.YYYY.YY............",
  "...........KKYYYYKK.............",
  "..KK......KKYYYYYYKK......KK....",
  "...YYY..KKYYYYYYYYYYKK..YYY.....",
  "....YYYYYYYYYYYYYYYYYYYYYY......",
  "....YYYYYYYYRRFFRRYYYYYYYY......",
  "KK..YYYYYYYRRFFFFRRYYYYYYY..KK..",
  "YYYYYYYYYYYRFFFFFFRYYYYYYYYYYY..",
  "YYYYYYYYYYYRFFFFFFRYYYYYYYYYYY..",
  "KK..YYYYYYYRRFFFFRRYYYYYYY..KK..",
  "....YYYYYYYYRRFFRRYYYYYYYY......",
  "....YYYYYYYYYYYYYYYYYYYYYY......",
  "...YYY..KKYYYYYYYYYYKK..YYY.....",
  "..KK......KKYYYYYYKK......KK....",
  "...........KKYYYYKK.............",
  "..........YY.YYYY.YY............",
  ".........YY..yYYy..YY...........",
  "........YY...yYYy...YY..........",
  ".......YY....yYYy....YY.........",
  "......YY.....YYYY.....YY........",
  ".....KK......YYYY......KK.......",
  ".............YYYY...............",
  "..............YY................",
  "..............KK................"
].map(r => r.replace(/F/g, 'Y'));

const MOON_GRID = [
  "................................",
  "..............KKKKK.............",
  "...........KKKCCCCCKK...........",
  ".........KKCCCCCCCCCCK..........",
  ".......KKCCCCCCCWWCCCK..........",
  "......KCCCCCCCWWWWCCCK..........",
  ".....KCCCCCCCCWWCCCCCK..........",
  "....KCCCCCCCCCCCCCCCCK..........",
  "....KCCCCCCCCCCCCCCCCK..........",
  "...KCCCCCCCKKKKKKKKKKK..........",
  "...KCCCCCCKK....................",
  "..KCCCCCCK............KK........",
  "..KCCCCCCK...........KYYK.......",
  "..KCCCCCCK............KK........",
  "..KCCCCCCK......................",
  "..KCCCCCCK......................",
  "..KCCCCCCK......................",
  "..KCCCCCCK............KK........",
  "..KCCCCCCK...........KYYK.......",
  "..KCCCCCCK............KK........",
  "...KCCCCCCKK....................",
  "...KCCCCCCCKKKKKKKKKKK..........",
  "....KCCCCCCCCCCCCCCCCK..........",
  "....KCCCCCCCCCCCCCCCCK..........",
  ".....KCCCCCCCCWWCCCCCK..........",
  "......KCCCCCCCWWWWCCCK..........",
  ".......KKCCCCCCCWWCCCK..........",
  ".........KKCCCCCCCCCCK..........",
  "...........KKKCCCCCKK...........",
  "..............KKKKK.............",
  "................................",
  "................................"
];

// Write all assets to files
console.log('Generating pixel art assets in:', OUT_DIR);

fs.writeFileSync(path.join(OUT_DIR, 'pixel-tala-star.svg'), renderPixelSVG(32, 32, TALA_STAR_GRID, PAL));
fs.writeFileSync(path.join(OUT_DIR, 'pixel-shelf-letters.svg'), renderPixelSVG(48, 48, SHELF_LETTERS_GRID, PAL));
fs.writeFileSync(path.join(OUT_DIR, 'pixel-shelf-wordpage.svg'), renderPixelSVG(48, 48, SHELF_WORDPAGE_GRID, PAL));
fs.writeFileSync(path.join(OUT_DIR, 'pixel-shelf-imagetime.svg'), renderPixelSVG(48, 48, SHELF_IMAGETIME_GRID, PAL));
fs.writeFileSync(path.join(OUT_DIR, 'pixel-shelf-handobject.svg'), renderPixelSVG(48, 48, SHELF_HANDOBJECT_GRID, PAL));
fs.writeFileSync(path.join(OUT_DIR, 'pixel-shelf-record.svg'), renderPixelSVG(48, 48, SHELF_RECORD_GRID, PAL));
fs.writeFileSync(path.join(OUT_DIR, 'pixel-hero-sign.svg'), generateHeroSign());
fs.writeFileSync(path.join(OUT_DIR, 'pixel-border-strip.svg'), renderPixelSVG(32, 8, PINSTRIPE_GRID, PAL));
fs.writeFileSync(path.join(OUT_DIR, 'pixel-filipino-sun.svg'), renderPixelSVG(32, 32, FILIPINO_SUN_GRID, PAL));
fs.writeFileSync(path.join(OUT_DIR, 'pixel-moon.svg'), renderPixelSVG(32, 32, MOON_GRID, PAL));

for (const [topicId, grid] of Object.entries(TOPIC_TEMPLATES)) {
  fs.writeFileSync(path.join(OUT_DIR, `pixel-${topicId}.svg`), renderPixelSVG(32, 32, grid, PAL));
}

const figTypes = ['proof', 'gold', 'eeg', 'labyrinth', 'armor', 'generic'];
for (const ft of figTypes) {
  fs.writeFileSync(path.join(OUT_DIR, `pixel-fig-${ft}.svg`), generateFigureSVG(ft));
}

console.log('Done generating all assets!');
