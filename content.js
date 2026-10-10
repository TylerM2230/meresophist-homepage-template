/* ============================================================
   DATA — HOME PANELS
   (All content is plain data so the site can be rebuilt
    anywhere — including a static export of the same tree.)
   ============================================================ */
const TOPICS = [
  { id:'tabularium', num:'01', nav:'Tabularium', title:'Tabularium', group:'record',
    kicker:'The public record of what I am thinking with right now — the books on the desk, the drafts breathing in the folder, the questions still warm.',
    items:[
      ['Active','Eighteen living entries across five shelves','#/tabularium'],
      ['Cadence','Weekly-ish, kept in the open','#/tabularium'],
      ['Legend','Reading · Writing · Studying · Building · the hands at work','#/tabularium'],
      ['Motion','Entries move; the struck rows are the record of the year','#/tabularium'],
      ['Open','The whole ledger, gathered by subject','#/tabularium']
    ]
  },
  { id:'philosophy', num:'02', nav:'Philosophy', title:'Philosophy', group:'letters',
    kicker:'Ethics, metaphysics, and how a thought is built to stand and to move. Read slowly, on purpose, with the whole body.',
    items:[
      ['Reading','Aristotle — Nicomachean Ethics, Book VI','#/philosophy/aristotle'],
      ['Writing','The Ethics of Digital Identity','#/philosophy/digital-identity'],
      ['Question','What does it mean to live well, now?','#/philosophy'],
      ['Rereading','Epictetus — Discourses','#/philosophy'],
      ['Practice','Close reading, then the slow answering back','#/philosophy']
    ]
  },
  { id:'mathematics', num:'03', nav:'Mathematics', title:'Mathematics', group:'letters',
    kicker:'Number theory, the beauty of proof, and the strange comfort of things that are certainly true — a place where the mind can finally rest its weight.',
    items:[
      ['Studying','Hardy & Wright — Number Theory, ch. 3','#/mathematics/number-theory'],
      ['Building','The Aesthetics of Proof — a visual essay','#/mathematics/aesthetics-of-proof'],
      ['Fascination','Cantor, infinity, and the diagonal turn of thought','#/mathematics'],
      ['Notebook','Euclid, Book IX, Proposition 20','#/mathematics'],
      ['Adjacent','Philosophy of mathematics','#/mathematics']
    ]
  },
  { id:'literature', num:'04', nav:'Literature', title:'Literature', group:'letters',
    kicker:'Novels, labyrinths, and the sentences I keep returning to — the ones that stay warm, that hold a room even after the book is shut.',
    items:[
      ['Reading','Borges — Labyrinths','#/literature/labyrinths'],
      ['Rereading','Wallace — Infinite Jest','#/literature/infinite-jest'],
      ['Queued','Sebald — The Rings of Saturn','#/literature'],
      ['Revisit','Calvino — Invisible Cities','#/authors/calvino'],
      ['Look for','The shape a book takes, and what it does to the body reading','#/literature']
    ]
  },
  { id:'languages', num:'05', nav:'Languages', title:'Languages & Philology', group:'letters',
    kicker:'The history of words as a kind of time travel; grammar as the shape of a mind — how each tongue cuts the world differently, and loves it differently.',
    items:[
      ['Studying','Ancient Greek — the long approach','#/languages/ancient-greek'],
      ['Collecting','The etymology notebook — one word daily','#/languages/etymology'],
      ['Question','What does a language know that its speakers forget?','#/languages'],
      ['Plan','One living language, still undecided — grammar felt in the mouth','#/languages'],
      ['Connection','Why phronesis has no translation','#/philosophy/aristotle']
    ]
  },
  { id:'authors', num:'06', nav:'Authors', title:'Authors', group:'letters',
    kicker:'An index of the writers I keep in the room — the ones whose way of working changed my hands, and what I carry from each.',
    items:[
      ['Borges','Infinity, mirrors, the library as universe','#/authors/borges'],
      ['Calvino','Lightness, structure, the combinatorial imagination','#/authors/calvino'],
      ['Pessoa','The self as a cast of characters','#/authors/pessoa'],
      ['Sebald','Memory with its edges showing','#/authors'],
      ['Woolf','The sentence that follows a mind','#/authors']
    ]
  },
  { id:'poetry', num:'07', nav:'Poetry', title:'Poetry & Writing', group:'wordpage',
    kicker:'The sentence as a machine and the line as a unit of breath. Craft studied the way one studies a trade — in the hands, daily, until it becomes the body.',
    items:[
      ['Studying','Prosody — meter, stress, breath','#/poetry/prosody'],
      ['Working','The no-adjective sequence','#/atelier/poems'],
      ['Question','Why write, when the thinking already happens?','#/poetry'],
      ['Practice','Style studies — imitation as a way of touching how it is built','#/poetry'],
      ['Bearing','Read like a writer — with the ear and the pulse','#/poetry']
    ]
  },
  { id:'copywriting', num:'08', nav:'Copywriting', title:'Copywriting', group:'wordpage',
    kicker:'Persuasion with the record left open on the table. Applied rhetoric, studied as a craft of the heart — moving a person, and still able to look at the sentence afterward.',
    items:[
      ['Building','The swipe file — annotated','#/copywriting/swipe-file'],
      ['Lineage','Aristotle — rhetoric, the classical spine','#/philosophy'],
      ['Craft','Compression: every word asked to carry weight or let go','#/copywriting'],
      ['Study','Ogilvy — the Rolls-Royce ad','#/copywriting/swipe-file'],
      ['Ethic','Moving without bruising — the hand that opens, not the one that pushes','#/copywriting']
    ]
  },
  { id:'atelier', num:'09', nav:'Atelier', title:'Atelier', group:'wordpage',
    kicker:'Where the reading turns into making: fiction, fragments, and forms that push back. The room where the work is made badly first, and then made again.',
    items:[
      ['Fiction','The Cartographer of Impossible Maps','#/atelier/cartographer'],
      ['Poetry','A small ongoing sequence','#/atelier/poems'],
      ['Craft','Form, the holding shape, and the page as a machine that teaches','#/atelier'],
      ['Vow','Finish before polishing — whole before beautiful','#/atelier'],
      ['Question','Where does the reading come out?','#/atelier']
    ]
  },
  { id:'journal', num:'10', nav:'Journal', title:'Journal', group:'wordpage',
    kicker:'Occasional essays and fragments. Long when the thought earns its length, short when it only needs a breath.',
    items:[
      ['Oct 2026','On Phronesis','#/journal/on-phronesis'],
      ['Sep 2026','Against Friction','#/journal/against-friction'],
      ['Aug 2026','The Map and the Territory','#/journal'],
      ['Jul 2026','Reading Slowly on Purpose','#/journal'],
      ['Archive','Everything written, in order','#/journal']
    ]
  },
  { id:'design', num:'11', nav:'Design', title:'Graphic Design', group:'imagetime',
    kicker:'Visual rhetoric: grids, type, and the case a layout makes to the eye before a single word is read. The page speaking at the speed of the eye.',
    items:[
      ['Reading','Bringhurst — Typographic Style','#/design'],
      ['Studying','The Swiss grid','#/design/grid-systems'],
      ['Working','This site as specimen','#/about'],
      ['Exercise','One poster per Journal essay','#/journal/on-phronesis'],
      ['Bearing','Hierarchy is ethos — what the page honors first, it honors most','#/design']
    ]
  },
  { id:'drawing', num:'12', nav:'Drawing', title:'Drawing', group:'imagetime',
    kicker:'Slowed looking. The hand as an instrument of attention — the eye and the hand agreeing in real time, and the line as the commitment.',
    items:[
      ['Daily','The sketchbook — dated, uncurated','#/drawing/sketchbook'],
      ['Craft','Construction before contour — the form beneath the form','#/drawing'],
      ['Source','Ruskin — The Elements of Drawing','#/drawing'],
      ['Study','Hands, five days of them','#/drawing/sketchbook'],
      ['Fight','Against symbols — the long fight to see what is actually there','#/drawing']
    ]
  },
  { id:'video', num:'13', nav:'Video', title:'Video Editing', group:'imagetime',
    kicker:'Time as a material. The essay with a pulse — the cut as punctuation, the pacing as the breath of a proof.',
    items:[
      ['Planning','Essay film — The Aesthetics of Proof','#/video/essay-film'],
      ['Craft','The cut as punctuation — a hard cut a full stop, a dissolve a comma','#/video'],
      ['Study','Godard · Marker · Murch','#/video'],
      ['Plan','A process film on lost-wax casting','#/jewelry/casting-methods'],
      ['Bearing','Rhythm before content — the pacing carries it, then the words do','#/video']
    ]
  },
  { id:'modeling', num:'14', nav:'3D', title:'3D Modeling', group:'imagetime',
    kicker:'Thinking in volumes. Geometry with its gloves off — forms you can hold and turn, forms that want to be walked around.',
    items:[
      ['Building','The impossible coastline','#/modeling/impossible-coastline'],
      ['Studying','The Platonic solids, by hand','#/mathematics'],
      ['Tool','Blender, slowly','#/modeling'],
      ['Note','Why quads — topology is a language; quads are its grammar','#/modeling'],
      ['Scene','A room with the lamp in it','#/modeling']
    ]
  },
  { id:'games', num:'15', nav:'Games', title:'Game Development', group:'handobject',
    kicker:'Games as thought experiments you can walk around inside. Where the logic and the fiction share a room, and keep each other warm.',
    items:[
      ['Designing','The Forking Path — a design document','#/games/forking-paths'],
      ['Studying','Mechanics as meaning — what the game permits is what it loves','#/games'],
      ['Lineage','Borges — the garden as game','#/literature/labyrinths'],
      ['Note','The rules are the ethics — a win condition is a temperament','#/games'],
      ['Puzzle','Z/12Z as a lock','#/mathematics/number-theory']
    ]
  },
  { id:'clothes', num:'16', nav:'Clothes', title:'Making Clothes', group:'handobject',
    kicker:'Pattern as geometry worn against the skin. The body as the first holding shape — and the deepest meeting of cloth and curve.',
    items:[
      ['Studying','Pattern drafting — the body in geometry','#/clothes/pattern-drafting'],
      ['Making','First shirt, slowly','#/clothes'],
      ['Repair','Mending before making','#/clothes'],
      ['Note','Why darts are triangles — flat cloth, made to hold a curve','#/clothes/pattern-drafting'],
      ['Vow','Learn the why of every seam — where intention becomes irreversible','#/clothes']
    ]
  },
  { id:'jewelry', num:'17', nav:'Jewelry', title:'Making Jewelry', group:'handobject',
    kicker:'The miniature. Metal with a memory — every hammer mark and file stroke kept, and the void that holds the shape of the idea.',
    items:[
      ['Studying','Casting methods, compared','#/jewelry/casting-methods'],
      ['Making','First flask — lost wax','#/jewelry/casting-methods'],
      ['Question','What does a mold know that the object forgets?','#/jewelry'],
      ['Note','Why the sprues branch — the metal must arrive everywhere at once','#/jewelry'],
      ['Vow','Patience at every temperature — the first is respect','#/jewelry']
    ]
  },
  { id:'about', num:'18', nav:'About', title:'About', group:'record',
    kicker:'Tyler Miranda. Independent student of philosophy, mathematics, literature — and the crafts. This site is the ledger: a life kept in the open, revised as it goes.',
    items:[
      ['Contact','tyler@meresophist.xyz',null],
      ['Elsewhere','Are.na · GitHub · Letterboxd',null],
      ['Design','Five palettes, one meander','#/about'],
      ['Colophon','Instrument Serif & Courier Prime',null],
      ['The name','Meresophist, explained','#/about']
    ]
  }
];

const GROUPS = [
  { id:'letters', num:'01', title:'Letters',
    line:'The reading room — the ideas, the ways of showing them true, and the lives they arrive carrying. The disciplines that ask, slowly and with feeling, what is true and how to live.',
    topics:['philosophy','mathematics','literature','languages','authors'] },
  { id:'wordpage', num:'02', title:'Word & Page',
    line:'Writing as a craft held in the body: from the first sentence to the sale, from the form that holds to the note that goes out into the world.',
    topics:['poetry','copywriting','atelier','journal'] },
  { id:'imagetime', num:'03', title:'Image & Time',
    line:'Making things visible and keeping them moving — grids, marks, cuts, and volumes, each one a way of letting the eye dwell.',
    topics:['design','drawing','video','modeling'] },
  { id:'handobject', num:'04', title:'Hand & Object',
    line:'The made thing, and the systems that behave like objects — cloth, metal, and games whose rules have a temperament of their own.',
    topics:['games','clothes','jewelry'] },
  { id:'record', num:'05', title:'The Record',
    line:'The ledger itself — what is on the desk right now, and the person who keeps it, in the open, as a form of devotion.',
    topics:['tabularium','about'] }
];

/* ============================================================
   DATA — SUBPAGES
   ============================================================ */
const PAGES = {

/* ---------- TABULARIUM ---------- */
tabularium:{
  num:'02', title:'Tabularium',
  kicker:'A public record of what I am thinking with right now — the books on the desk, the drafts breathing in the folder, the questions still warm.',
  meta:[['Revised','09 October 2026'],['Active entries','18'],['Cadence','Weekly-ish, in the open']],
  blocks:[
    {h:'What this room is'},
    {p:`A tabularium was the archive where Rome kept its public record — the laws, the treaties, the deeds of the state, all of it dated and held in the open. Mine is smaller and far less consequential, and that is the point. It holds what I am reading, writing, making and turning over right now — kept in the open so the work has a spine, a date, and a reader who might find it. What Rome did for an empire, I do for one desk.`},
    {p:`Entries move. When something is finished it drifts off to the Journal, the Library or the Atelier, and the row is struck through. What is struck is not deleted — it is the record of the year, the sediment at the bottom of the ledger. Nothing here is ever thrown away; it only changes rooms.`},
    {h:'Legend'},
    {kv:[
      ['Reading','In progress; notes gathering in the margins'],
      ['Writing','Drafting or revising — the work turning under the hand'],
      ['Studying','Working through slowly, hand over hand'],
      ['Building','Making, coding, designing — the thing taking shape under the fingers'],
      ['Practicing','Daily craft; repetition as devotion'],
      ['Designing','A document or system thought through before the hands begin'],
      ['Planning','Committed; being boarded out, step by step'],
      ['Queued','Committed to, not yet begun — waiting to be taken up']
    ]},
{h:'The living entries'},
    {p:'Grouped the way the index is grouped — five shelves, one ledger, and nothing ranked above anything else.'},
    {h:'01 · Letters'},
    {log:[
      {d:'Oct 2026', t:'Aristotle — Nicomachean Ethics', x:'Philosophy · Reading · Book VI, on phronesis — practical wisdom, and why it cannot be taught like geometry', r:'#/philosophy/aristotle'},
      {d:'Oct 2026', t:'The Ethics of Digital Identity', x:'Philosophy · Writing · a draft of ~2,400 words, still finding its body', r:'#/philosophy/digital-identity'},
      {d:'Oct 2026', t:'Borges — Labyrinths', x:'Literature · Reading · infinity, mirrors, paradox — the library as a universe', r:'#/literature/labyrinths'},
      {d:'Sep 2026', t:'Wallace — Infinite Jest (reread)', x:'Literature · Reading · addiction, entertainment, and the ethics of wanting', r:'#/literature/infinite-jest'},
      {d:'Sep 2026', t:'Number Theory — Hardy & Wright', x:'Mathematics · Studying · ch. 3, congruences — arithmetic in a different ring', r:'#/mathematics/number-theory'},
      {d:'Sep 2026', t:'Ancient Greek — the long approach', x:'Languages · Studying · the alphabet, breathings, and accents', r:'#/languages/ancient-greek'},
      {d:'Planned', t:'The Aesthetics of Proof', x:'Mathematics · Building · a visual essay, boarded out', r:'#/mathematics/aesthetics-of-proof'}
    ]},
    {h:'02 · Word & Page'},
    {log:[
      {d:'Oct 2026', t:'The Cartographer of Impossible Maps', x:'Atelier · Fiction · second draft, the frame cut away', r:'#/atelier/cartographer'},
      {d:'Oct 2026', t:'The swipe file', x:'Copywriting · Building · forty entries, annotated until they give up their craft', r:'#/copywriting/swipe-file'},
      {d:'Oct 2026', t:'Prosody notebook', x:'Poetry · Studying · meter, stress, breath — why iambs feel like walking', r:'#/poetry/prosody'}
    ]},
    {h:'03 · Image & Time'},
    {log:[
      {d:'Sep 2026', t:'Bringhurst — Typographic Style', x:'Design · Reading · chapter by chapter, the grammar of type', r:'#/design'},
      {d:'Oct 2026', t:'Daily drawing studies', x:'Drawing · Practicing · hands, chairs, the corner of the desk', r:'#/drawing/sketchbook'},
      {d:'Sep 2026', t:'The impossible coastline', x:'3D Modeling · Building · the first mesh, still raw', r:'#/modeling/impossible-coastline'},
      {d:'Planned', t:'Essay film — The Aesthetics of Proof', x:'Video · Planning · the storyboard, the four proofs finding their rhythms', r:'#/video/essay-film'}
    ]},
    {h:'04 · Hand & Object'},
    {log:[
      {d:'Sep 2026', t:'The Forking Path', x:'Games · Designing · the design document, where the game is met before it is built', r:'#/games/forking-paths'},
      {d:'Sep 2026', t:'The bodice block', x:'Clothes · Studying · pattern drafting — the body translated into geometry', r:'#/clothes/pattern-drafting'},
      {d:'Oct 2026', t:'Lost-wax casting', x:'Jewelry · Studying · the first flask — wax, then the void', r:'#/jewelry/casting-methods'}
    ]},
    {h:'05 · The Record'},
    {log:[
      {d:'Ongoing', t:'meresophist.xyz', x:'Site · Building · this tabularium, kept in the open as a form of devotion', r:'#/about'}
    ]},
    {fig:{t:'The life of an entry', n:'Queued → active → struck → archived — the life of an entry, drawn as a placeholder until the diagram is made.'}}
  ]
},

/* ---------- PHILOSOPHY ---------- */
philosophy:{
  num:'03', title:'Philosophy',
  kicker:'Ethics, metaphysics, and how a thought is built to stand and to move. I read slowly, on purpose, and write down only what survives being lived with.',
  meta:[['Focus','Ethics · Metaphysics · Language'],['Currently','Aristotle, Nicomachean Ethics'],['Practice','Close reading, then the slow answering back']],
  blocks:[
    {h:'Working questions'},
    {ul:[
      {t:'What does it mean to live well, given that the answer cannot be proved?', d:'Aristotle\u2019s eudaimonia, read against the endless project of self-optimisation.', r:'#/philosophy/aristotle'},
      {t:'Is the self a substance or a narrative?', d:'Personal identity in an age of curated profiles — what we are, and what we keep making ourselves into.', r:'#/philosophy/digital-identity'},
      {t:'What is a thought for, once it leaves the room?', d:'Rhetoric, persuasion, and the difference between winning and being moved toward what is true.'}
    ]},
    {fig:{t:'The working questions, mapped', n:'How the three questions connect — placeholder.'}},
    {h:'Reading log'},
    {log:[
      {d:'Oct 2026', t:'Aristotle — Nicomachean Ethics', x:'Book VI. Practical wisdom, and why it cannot be taught like geometry.', r:'#/philosophy/aristotle'},
      {d:'Aug 2026', t:'Epictetus — Discourses', x:'The dichotomy of control, read uncharitably, then charitably.'},
      {d:'Jun 2026', t:'Wittgenstein — Philosophical Investigations', x:'Sections 1–100. Meaning as use; the lure of the picture.'}
    ]},
    {q:{t:'We are what we repeatedly do. Excellence, then, is not an act but a habit.', c:'After Aristotle, Nicomachean Ethics II.1 — a paraphrase, not a quotation'}},
    {h:'On the practice'},
    {p:`I am suspicious of philosophy done quickly. Most of what I keep here began as a note in a margin and took months to become a sentence I could stand behind — a sentence with weight, not just a clever shape. The only vow is this: nothing enters the Tabularium until I can meet the strongest objection to it in my own words, and hold it there without flinching. That is the difference between a position and a reflex.`}
  ],
  children:{
    aristotle:{
      title:'Aristotle — Nicomachean Ethics',
      kicker:'Book VI and the problem of practical wisdom.',
      meta:[['Author','Aristotle'],['Work','Nicomachean Ethics'],['Status','Reading — Book VI'],['Translation','Irwin, 2nd ed.']],
      blocks:[
        {h:'Why this book'},
        {p:`The Ethics is the only ancient text I have found that treats the question "how should I live?" as a technical problem without pretending it has a technical solution. Aristotle knows that the answer is not a formula, and he spends ten books working out what kind of answer it could be instead.`},
        {h:'The problem of Book VI'},
        {p:`Phronesis — practical wisdom — is not episteme and not techne. It is not knowledge of what is eternal, and it is not a craft with a product. It is the capacity to see what a situation calls for. Aristotle insists it cannot be taught to the young, because it requires experience of particulars, and particulars take time.`},
        {p:`The uncomfortable consequence: the most important thing in the system is the one thing you cannot acquire by studying the system. I am not sure I have an answer to that. I am fairly sure most of modern ethics has quietly decided it is not a problem.`},
        {h:'Notes in progress'},
        {ul:[
          {t:'Phronesis and the mean', d:'Is the doctrine of the mean a rule or a description of skill?'},
          {t:'Against the rulebook reading', d:'Why "virtue ethics" is a worse name than Aristotle would have chosen.'}
        ]},
        {fig:{t:'Book VI, in parts', n:'Episteme, techne, phronesis, nous, sophia — the intellectual virtues mapped — placeholder.'}}
      ]
    },
    'digital-identity':{
      title:'The Ethics of Digital Identity',
      kicker:'A draft essay on selves, profiles, and the morality of curation.',
      meta:[['Form','Essay'],['Status','Draft — ~2,400 words'],['Started','August 2026'],['Target','Journal, Q1 2027']],
      blocks:[
        {h:'Thesis, provisionally'},
        {p:`We are told that a curated profile is a false self — a performance that hides the real one. I want to argue the opposite, or at least something more uncomfortable: that curation is not a betrayal of identity but one of its ordinary modes, and that the genuine ethical problem is not authenticity but the asymmetry of who gets to curate whom.`},
        {h:'Three moves'},
        {ul:[
          {t:'Against the authenticity frame', d:'The "real self" was always already edited. Memory is curation.'},
          {t:'The audience problem', d:'A profile has many audiences at once. Integrity under conflicting address.'},
          {t:'Opacity and power', d:'Who sees the model, and who is only seen by it.'}
        ]},
        {q:{t:'The self is not a thing we find. It is a thing we keep making, and we make it differently for different rooms.', c:'Draft opening, under revision'}},
        {h:'Open problems'},
        {p:`I have no good account yet of what a moral obligation to a platform would even look like — obligations are usually owed to persons, and a platform is not one. The draft stalls here. That is probably the real essay.`},
        {fig:{t:'The three moves', n:'Authenticity, audience, opacity — how the essay\u2019s argument is arranged — placeholder.'}}
      ]
    }
  }
},

/* ---------- MATHEMATICS ---------- */
mathematics:{
  num:'04', title:'Mathematics',
  kicker:'Number theory, the beauty of proof, and the strange comfort of things that are certainly true — a place where the mind can finally rest its weight.',
  meta:[['Focus','Number theory · Foundations'],['Currently','Hardy & Wright, ch. 3'],['Adjacent','Philosophy of mathematics']],
  blocks:[
    {h:'Why mathematics'},
    {p:`I came to mathematics late and from the outside, through philosophy. What kept me was not usefulness but a quality I can only call relief: here, at last, is a place where being convinced has a discipline, where the feeling of understanding and the fact of understanding are meant to coincide — where the body\u2019s assent and the mind\u2019s assent can be the same event. That coincidence is a kind of peace, and I keep returning to it the way one returns to a warm room.`},
    {h:'Working strands'},
    {ul:[
      {t:'Number theory', d:'Hardy & Wright, worked through slowly and by hand. Congruences, then quadratic residues.', r:'#/mathematics/number-theory'},
      {t:'The aesthetics of proof', d:'Why some proofs are beautiful, and whether beauty belongs to the proof or to the one who is moved by it.', r:'#/mathematics/aesthetics-of-proof'},
      {t:'Infinity', d:'Cantor, the diagonal turn, and the Borges connection — two ways of walking off the edge of a totality.', r:'#/literature/labyrinths'}
    ]},
    {fig:{t:'The strands', n:'Number theory, aesthetics, infinity — and how they braid — placeholder.'}},
    {h:'Notebook'},
    {log:[
      {d:'Sep 2026', t:'Congruences and the shape of modular arithmetic', x:'Notes on why residues feel like a change of coordinate system.', r:'#/mathematics/number-theory'},
      {d:'Jul 2026', t:'Euclid, Book IX, Proposition 20', x:'The infinitude of primes. Still the cleanest move I know — one that shows, then lets the rest be.'},
      {d:'May 2026', t:'On reading a proof twice', x:'First for the logic, second for the reason anyone thought of it.'}
    ]},
    {q:{t:'A mathematician is a maker of patterns.', c:"G. H. Hardy, A Mathematician\u2019s Apology"}}
  ],
  children:{
    'number-theory':{
      title:'Number Theory — Working Notes',
      kicker:'Hardy & Wright, chapter by chapter, with the parts I got wrong.',
      meta:[['Text','Hardy & Wright, 6th ed.'],['Progress','Chapter 3 of 24'],['Pace','Slow, deliberately']],
      blocks:[
        {h:'Where I am'},
        {p:`Chapter 3: congruences. The definition is trivial — a ≡ b (mod m) if m divides a − b — and everything interesting happens after, when you notice that congruence is not an approximation but an exact arithmetic in a different ring.`},
        {h:'Things that stopped me'},
        {ul:[
          {t:'The residue classes are a ring', d:'Once I saw Z/mZ as a structure rather than a notation, the theorems became inevitable.'},
          {t:"Why Fermat\u2019s little theorem feels like magic", d:'It does not, once you see it as a statement about a finite group acting on itself.'},
          {t:'The gap I still have', d:'I can follow the proofs but I cannot yet predict which questions will be hard.'}
        ]},
        {fig:{t:'The clock of Z/12Z', n:'Residue classes arranged on a circle — placeholder for the arithmetic of the dial.'}},
        {h:'Exercises kept'},
        {p:`I keep every failed attempt in a separate notebook, dated. The failures are more informative than the successes — they show exactly where the intuition runs out, which is the only place worth returning to.`}
      ]
    },
    'aesthetics-of-proof':{
      title:'The Aesthetics of Proof',
      kicker:'A visual essay in progress: why some arguments are beautiful, and whether that is a real property.',
      meta:[['Form','Visual essay'],['Status','Concept'],['Question','Is beauty evidence?']],
      blocks:[
        {h:'The question'},
        {p:`Mathematicians say proofs are beautiful, and they say it without embarrassment. The claim is not decorative: a beautiful proof is often taken as more likely to be correct, more likely to generalise, more likely to be the proof that was meant. That is a strange epistemic role for an aesthetic judgement.`},
        {h:'Candidate criteria'},
        {kv:[
          ['Economy','Nothing extraneous; every step load-bearing'],
          ['Inevitability','The conclusion feels as though it could not have been otherwise'],
          ['Surprise','A turn you did not see coming, which afterwards seems obvious'],
          ['Fit','It explains more than it was asked to explain']
        ]},
        {q:{t:'Beauty is the first test: there is no permanent place in the world for ugly mathematics.', c:'G. H. Hardy'}},
        {h:'Planned form'},
        {p:`A scrolling visual essay: each criterion paired with a proof that exemplifies it, set as diagrams rather than prose. Euclid IX.20 for economy; the diagonal argument for surprise; the fundamental theorem of arithmetic for fit.`},
        {fig:{t:'Four criteria, four proofs', n:'Economy, inevitability, surprise, fit — mapped to their proofs — placeholder.'}}
      ]
    }
  }
},

/* ---------- LITERATURE ---------- */
literature:{
  num:'05', title:'Literature',
  kicker:'Novels, labyrinths, and the sentences I keep returning to — the ones that stay warm, that hold a room even after the book is shut.',
  meta:[['Currently','Borges — Labyrinths'],['Rereading','Wallace — Infinite Jest'],['Queued','Sebald — The Rings of Saturn']],
  blocks:[
    {h:'Reading log'},
    {log:[
      {d:'Oct 2026', t:'Borges — Labyrinths', x:'Infinity, mirrors, and the library as a model of the universe.', r:'#/literature/labyrinths'},
      {d:'Sep 2026', t:'Wallace — Infinite Jest', x:'Second reading. Addiction, entertainment, and the shape of a sentence.', r:'#/literature/infinite-jest'},
      {d:'Aug 2026', t:'Calvino — Invisible Cities', x:'Read in one sitting, then again slowly.', r:'#/authors/calvino'},
      {d:'Jul 2026', t:'Pessoa — The Book of Disquiet', x:'Fragments, read out of order, as intended.', r:'#/authors/pessoa'}
    ]},
    {h:'What I look for'},
    {ul:[
      {t:'The shape as a form of meaning', d:'Books where the shape does work the sentences cannot — where the book moves like a body.'},
      {t:'The sentence as a unit of thought', d:'Prose that thinks rather than reports — sentences that feel their way forward.'},
      {t:'The infinite and the small', d:'Borges, Calvino, Sebald: the cosmic held inside the domestic, the infinite kept in a small room.'}
    ]},
    {fig:{t:'The shelf', n:'What I look for, and where each book sits in it — placeholder.'}},
    {q:{t:'A book is a mirror: if an ape looks into it, an apostle is hardly likely to look out.', c:'G. C. Lichtenberg, via Borges'}}
  ],
  children:{
    labyrinths:{
      title:'Borges — Labyrinths',
      kicker:'Infinity, mirrors, paradox, and the library as a model of the universe.',
      meta:[['Author','Jorge Luis Borges'],['Collection','Labyrinths (1962)'],['Status','Reading'],['Favourites','The Library of Babel; Tlön']],
      blocks:[
        {h:'Why Borges, and why now'},
        {p:`I came to Borges from mathematics, which is the wrong direction and possibly the right one. "The Library of Babel" is a combinatorial argument with a plot. "Tlön, Uqbar, Orbis Tertius" is a thought experiment about what happens when a fiction becomes more coherent than the world.`},
        {h:'Notes'},
        {ul:[
          {t:'The Library of Babel', d:'Total combinatorial space. Every book that can exist, exists — and is therefore useless.'},
          {t:'The Garden of Forking Paths', d:'Time as a set of simultaneous branches. A detective story that is also a metaphysics.'},
          {t:'On Exactitude in Science', d:'One paragraph. The map that coincides with the territory, and the empire that abandons it.'}
        ]},
        {q:{t:'The universe (which others call the Library) is composed of an indefinite and perhaps infinite number of hexagonal galleries.', c:'The Library of Babel'}},
        {h:'Connection'},
        {p:`The diagonal argument and the Library share a structure: both take a totality and produce something outside it, or something inside it that cannot be found. I want to write about this properly. It is currently a note in the mathematics section.`, r:'#/mathematics'},
        {fig:{t:'The hexagon lattice', n:'The Library of Babel, drawn as it is described — placeholder.'}}
      ]
    },
    'infinite-jest':{
      title:'Wallace — Infinite Jest',
      kicker:'Second reading. Addiction, entertainment, and the ethics of wanting not to want.',
      meta:[['Author','David Foster Wallace'],['Novel','Infinite Jest (1996)'],['Status','Rereading'],['Attempt','Second']],
      blocks:[
        {h:'Second time through'},
        {p:`The first time I read this book for the plot, which was a mistake — the plot is deliberately withheld and mostly resolved offstage. The second time I am reading it for the argument, which is about attention: what it costs to give it, what happens to a person who cannot, and why entertainment is the most serious thing in the book.`},
        {h:'What I am tracking'},
        {ul:[
          {t:'Addiction as a model of will', d:'Not a failure of will but a demonstration of what will is.'},
          {t:'The Entertainment', d:'A thing so pleasurable it abolishes the one who watches.'},
          {t:'Footnotes as structure', d:'The apparatus is not a joke; it is the second half of the argument.'}
        ]},
        {q:{t:'Everything is the same as everything else, except not always.', c:'Infinite Jest'}},
        {h:'Unresolved'},
        {p:`I still cannot decide whether the novel\u2019s sincerity is earned or asserted. That question is, I suspect, the novel.`},
        {fig:{t:'The apparatus', n:'Main text and footnotes, and how they interleave — placeholder for a structure map.'}}
      ]
    }
  }
},

/* ---------- AUTHORS ---------- */
authors:{
  num:'06', title:'Authors',
  kicker:'An index of the writers I keep in the room — and what I take from each.',
  meta:[['Indexed','5 authors'],['Pages','3 open'],['Updated','Oct 2026']],
  blocks:[
    {h:'The index'},
    {p:`Not a list of favourites. A list of writers whose way of working has changed how I work. Each entry answers one question: what did this person make possible that I could not do before?`},
    {ul:[
      {t:'Jorge Luis Borges', d:'Infinity as a literary device. The essay disguised as a story, the story disguised as a footnote.', r:'#/authors/borges'},
      {t:'Italo Calvino', d:'Lightness with structure. Six lectures that are also a poetics.', r:'#/authors/calvino'},
      {t:'Fernando Pessoa', d:'The self as a cast of characters. Writing as a plurality, not a voice.', r:'#/authors/pessoa'},
      {t:'W. G. Sebald', d:'The photograph as an unreliable narrator. Memory with its edges showing.'},
      {t:'Virginia Woolf', d:'The sentence that follows a mind instead of a plot.'}
    ]},
    {fig:{t:'The room', n:'The writers, and what each one made possible — placeholder.'}},
    {h:'Cross-references'},
    {p:`Author pages connect to the reading log. If an author has no page here, they are either new to me or I have not yet worked out what to say.`, r:'#/literature'}
  ],
  children:{
    borges:{
      title:'Jorge Luis Borges',
      kicker:'Infinity as a literary device; the library as a cosmology.',
      meta:[['Dates','1899 – 1986'],['Key works','Ficciones; Labyrinths; El Aleph'],['Taken from him','The footnote as form']],
      blocks:[
        {h:'What I take'},
        {p:`The discovery that a story can be an argument, and that the apparatus — the footnote, the fake citation, the review of a book that does not exist — can carry more weight than the narrative. Borges writes essays that pretend to be fiction and fiction that is really epistemology.`},
        {h:'Recurring devices'},
        {ul:[
          {t:'The infinite regress', d:'A book within a book, a map of the map.'},
          {t:'The apocryphal citation', d:'Invented sources used with perfect scholarly calm.'},
          {t:'The list', d:'Catalogues that imply a whole metaphysic by their taxonomy.'}
        ]},
        {q:{t:'I have always imagined that Paradise will be a kind of library.', c:'Attributed to Borges'}},
        {fig:{t:'The infinite regress', n:'A book within a book within a book — placeholder.'}}
      ]
    },
    calvino:{
      title:'Italo Calvino',
      kicker:'Lightness with structure — the combinatorial imagination as an ethics.',
      meta:[['Dates','1923 – 1985'],['Key works',"Invisible Cities; Six Memos; If on a winter\u2019s night"],['Taken from him','Lightness as rigour']],
      blocks:[
        {h:'What I take'},
        {p:`Calvino argues for lightness not as frivolity but as precision — the quality of a thing that has been reduced until only its structure remains. Invisible Cities is the demonstration: fifty-five descriptions of the same city, no plot, and by the end you know Marco Polo and Kublai Khan better than most novels would manage.`},
        {h:'The memos'},
        {kv:[
          ['Lightness','Remove weight, keep structure'],
          ['Quickness','Rhythm as argument'],
          ['Exactitude','The right word, not the near one'],
          ['Visibility','Think in images before sentences'],
          ['Multiplicity','A book as a network, not a line']
        ]},
        {q:{t:'My working method has more often than not involved the subtraction of weight.', c:'Six Memos for the Next Millennium'}},
        {fig:{t:'The fifty-five cities', n:'Invisible Cities as a grid of themes — placeholder.'}}
      ]
    },
    pessoa:{
      title:'Fernando Pessoa',
      kicker:'The self as a cast of characters; writing as plurality rather than voice.',
      meta:[['Dates','1888 – 1935'],['Key works','The Book of Disquiet; heteronym poems'],['Taken from him','The permission to be several']],
      blocks:[
        {h:'What I take'},
        {p:`Pessoa wrote under dozens of names, and not as pseudonyms — he gave them biographies, astrological charts, opinions that contradicted his own. The heteronyms are not disguises. They are an argument: that a self is not a single voice but a small committee, and that consistency is a literary convention rather than a psychological fact.`},
        {fig:{t:'The heteronyms', n:'The committee, charted — placeholder.'}},
        {h:'Relevance here'},
        {p:`This site is written under one name, but the sections are not the same person. The philosophy pages and the fiction are not trying to be consistent with one another. Pessoa is the reason I no longer think they should be.`},
        {q:{t:'I am nothing. I shall always be nothing. I cannot wish to be anything. But I have in me all the dreams of the world.', c:'The Book of Disquiet'}}
      ]
    }
  }
},

languages: {
  title: 'Languages & Philology',
  kicker: 'The history of words as a kind of time travel; grammar as a model of how a mind cuts up the world.',
  meta: [
    ['Focus', 'Historical linguistics · Etymology · Grammar'],
    ['Currently', 'Ancient Greek — the long approach'],
    ['Note', 'Words keep their receipts']
  ],
  blocks: [
    { h: 'Why philology' },
    { p: `Etymology is hidden philosophy. "Person" still carries its stage mask — persona — and "consider" still looks at the stars, from con + sidus. Every abstraction was once a metaphor someone kept.` },
    { p: `Each grammar is a theory of what matters. Some languages mark evidentiality, some mark aspect; some cannot say a thing without saying who witnessed it. Learning a language is installing a second operating system for the same world.` },
    { h: 'The plan' },
    { ul: [
      { t: 'Ancient Greek, the long approach', d: 'Enough to read Aristotle without a translator in the room — however long that takes.', r: '#/languages/ancient-greek' },
      { t: 'The etymology notebook', d: 'One word a day: origin, drift, and the moment it changed its mind.', r: '#/languages/etymology' },
      { t: 'One living language', d: 'Undecided which. Grammar should be felt in the mouth, not only read in a chart.' }
    ] },
    { fig: { t: 'A family tree, pruned', n: 'Indo-European, with the branches I can reach highlighted. Placeholder for a diagram of descent.' } },
    { h: 'Notebook' },
    { log: [
      { d: 'Oct 2026', t: 'Persona', x: 'Etymology · the mask, and what it did to identity', r: '#/languages/etymology' },
      { d: 'Sep 2026', t: 'The Greek alphabet, first pass', x: 'Ancient Greek · letters, breathings, accents', r: '#/languages/ancient-greek' },
      { d: 'Aug 2026', t: 'Why phronesis has no translation', x: 'Note · what gets lost between languages is exactly what philosophy wants', r: '#/philosophy/aristotle' }
    ] },
    { q: { t: 'The dictionary is based on the hypothesis — obviously an unproven one — that languages are made up of equivalent synonyms.', c: `Jorge Luis Borges, "The Analytical Language of John Wilkins"` } }
  ],
  children: {
    'ancient-greek': {
      title: 'Ancient Greek — the long approach',
      kicker: 'Enough to read the Ethics without a translator in the room, however long it takes.',
      meta: [
        ['Goal', 'Read Aristotle untranslated'],
        ['Pace', 'A little, daily'],
        ['Text', 'Athenaze, book I'],
        ['Status', 'Alphabet · accents']
      ],
      blocks: [
        { h: 'Why Greek, specifically' },
        { p: `The book I keep quoting is written in it. Every translation is an argument about the Ethics — Irwin renders phronesis one way, Ross another — and the disagreement is about what practical wisdom is. The only honest fix is to stop renting the argument and read the lease.` },
        { h: 'Why the long way' },
        { p: `The long way means not decoding sentences into English but letting the grammar install itself. That takes years, and that is fine. The premise of this site is that slow is not the enemy of thorough.` },
        { fig: { t: 'The verb system as terrain', n: 'Aspect, tense, mood — a map of the Greek verb. Placeholder.' } },
        { h: 'Where I am' },
        { p: `The alphabet is done, breathings and accents included. I read slowly, out loud, badly. The first sentence I understood unaided was about a man carrying a stone — which is, as openings go, honestly perfect.` }
      ]
    },
    'etymology': {
      title: 'The Etymology Notebook',
      kicker: 'One word a day: origin, drift, and the moment it changed its mind.',
      meta: [
        ['Cadence', 'One word daily'],
        ['Sources', 'OED · Chantraine · a good dictionary'],
        ['Rule', 'A word earns its page']
      ],
      blocks: [
        { h: 'What this is' },
        { p: `A word a day, looked up properly: first attestation, the root, the cognates, the moment the meaning turned. The point is not the collection but the habit of noticing that every word is a compressed history and a standing argument.` },
        { h: 'Recent entries' },
        { log: [
          { d: 'Oct 2026', t: 'Persona', x: `The actor's mask — "through which the sound passes" — and what it did to identity`, r: '#/philosophy/digital-identity' },
          { d: 'Sep 2026', t: 'Consider', x: 'From con + sidus, "with the stars". To consider was once to read omens.' },
          { d: 'Sep 2026', t: 'Sophist', x: 'From sophia, wisdom — before it became an insult it was a job description.', r: '#/about' }
        ] },
        { fig: { t: 'The descent of "sophist"', n: 'Root, cognates, and the drift from craft to insult — placeholder.' } },
        { h: 'The rule' },
        { p: `A word earns a page only when the history changes how I use it; otherwise it stays a line in the margin. The notebook is public so the habit has an audience — the whole method of the site.` }
      ]
    }
  }
},
poetry: {
  title: 'Poetry & Writing',
  kicker: 'The sentence as a machine; the line as a unit of breath. Craft, studied the way one studies a trade.',
  meta: [
    ['Focus', 'Prosody · Style · Revision'],
    ['Currently', 'The no-adjective sequence'],
    ['Principle', 'Read like a writer']
  ],
  blocks: [
    { h: 'Why poetry and writing' },
    { p: `I have written all my life without ever studying the instrument. Poetry is the form where the instrument is most exposed — every syllable audible, every line break a decision. I want to learn how meter works in the body, how a sentence earns its length, how a poem means more than its paraphrase.` },
    { p: `Writing is the technology underneath everything else on this site. The philosophy pages are writing; the fiction is writing. Studying it directly is the highest-leverage thing I can do here.` },
    { h: 'Working strands' },
    { ul: [
      { t: 'Prosody', d: 'Meter, stress, and the physics of a line. Why iambs feel like walking.', r: '#/poetry/prosody' },
      { t: 'The sequence', d: 'Fourteen lines each, no adjectives — still running, still teaching.', r: '#/atelier/poems' },
      { t: 'Style studies', d: "Imitation as analysis: writing in another writer's voice to see how it is built." }
    ] },
    { fig: { t: 'A stanza, scanned', n: 'Stress marks on a real stanza — the prosody of "The lamp goes out." Placeholder.' } },
    { h: 'Craft notes' },
    { log: [
      { d: 'Oct 2026', t: 'Why iambs feel like walking', x: 'Prosody · the foot as a unit of breath and step', r: '#/poetry/prosody' },
      { d: 'Sep 2026', t: 'Cutting adjectives, week one', x: 'Sequence · what survives when evaluation is forbidden', r: '#/atelier/poems' },
      { d: 'Aug 2026', t: 'A sentence is a promise about its own length', x: 'Style study · from a note on Sebald' }
    ] },
    { q: { t: 'Poetry — I, too, dislike it: there are things that are important beyond all this fiddle.', c: 'Marianne Moore, "Poetry"' } }
  ],
  children: {
    'prosody': {
      title: 'Prosody — a working notebook',
      kicker: 'Meter, stress, and why a line feels the way it feels.',
      meta: [
        ['Subject', 'Meter · rhythm · free verse'],
        ['Practice', 'Scansion, daily'],
        ['Status', 'Notebook, growing']
      ],
      blocks: [
        { h: 'What prosody is' },
        { p: `Prosody is the study of how a line moves — where the stresses fall, how long the pauses are, what the rhythm does to the meaning. It is the only part of poetry learnable the way scales are learned, by repetition. And it is the part most readers never name, which is why they call poems musical and leave it there.` },
        { h: 'The feet, kept straight' },
        { kv: [
          ['Iamb', 'unstressed–STRESSED · "the lamp"'],
          ['Trochee', 'STRESSED–unstressed · "going"'],
          ['Anapest', 'uuS · "interrupt"'],
          ['Dactyl', 'Suu · "merrily"'],
          ['Spondee', 'SS · "heartbreak"']
        ] },
        { fig: { t: 'The sequence, scanned', n: 'Stress and feet marked over a stanza — placeholder for a scansion diagram.' } },
        { h: 'On free verse' },
        { p: `Free verse is not the absence of form; it is form chosen line by line instead of inherited whole. Scansion is not wasted on it — it is how you hear what the poet chose instead.` }
      ]
    }
  }
},

copywriting: {
  title: 'Copywriting',
  kicker: 'Persuasion with the receipts on the table. Applied rhetoric, studied as a craft.',
  meta: [
    ['Focus', 'Persuasion · Rhetoric · Voice'],
    ['Currently', 'The swipe file, growing'],
    ['Lineage', 'Aristotle → Ogilvy → the feed']
  ],
  blocks: [
    { h: 'Why copywriting' },
    { p: `I want to learn copywriting because it is the last place where the classical art of persuasion is still practiced as a trade. Copywriting is rhetoric with a deadline: the same machinery Aristotle described — ethos, pathos, logos, kairos — running at full speed in the wild. Philosophy taught me how an argument is built. Copywriting is where it must land in a stranger, in seconds, and be acted on.` },
    { p: `The second reason is the craft of compression. Copy is language under load: every word must carry weight or be cut. That discipline feeds back into everything written here — the essays, the fiction, the way this site speaks.` },
    { h: 'The classical spine' },
    { ul: [
      { t: 'Ethos', d: 'Who is speaking, and why we should believe them. Character as argument.' },
      { t: 'Pathos', d: 'What is felt, and when. Emotion as evidence, used honestly.' },
      { t: 'Logos', d: 'The claim and its support. The argument, or it is just noise.' },
      { t: 'Kairos', d: 'The moment. Timing as a rhetorical fact — the right word at the wrong time is the wrong word.' }
    ] },
    { fig: { t: 'One page, dissected', n: 'A page of copy marked up: hook, proof, objection, call — placeholder.' } },
    { h: 'The swipe file' },
    { log: [
      { d: 'Oct 2026', t: 'Ogilvy — the Rolls-Royce ad', x: 'Swipe · a headline that is a fact, and why facts persuade', r: '#/copywriting/swipe-file' },
      { d: 'Sep 2026', t: 'A letter that sells a lamp', x: 'Swipe · narrative as a demonstration of value' },
      { d: 'Sep 2026', t: 'Headline study — verbs over adjectives', x: 'Method · the active voice does the work of ten modifiers' }
    ] },
    { q: { t: 'The consumer isn\u2019t a moron; she is your wife.', c: 'David Ogilvy, Confessions of an Advertising Man' } }
  ],
  children: {
    'swipe-file': {
      title: 'The Swipe File',
      kicker: 'A museum of sentences that worked — annotated until they give up their method.',
      meta: [
        ['Count', '41 entries'],
        ['Cadence', 'Weekly additions'],
        ['Rule', 'Annotate, imitate, then argue']
      ],
      blocks: [
        { h: 'What a swipe file is' },
        { p: `A swipe file is a collection of copy that worked, kept close and studied. It is not a shelf to steal from — copying a sentence is borrowing a fingerprint. The point is to take each piece apart until I can say why it works: the promise in the first line, the proof in the second, the ask at the end, and the silence where the reader fills in the rest.` },
        { h: 'How an entry is kept' },
        { kv: [
          ['Source', 'Where it ran, when, and by whom'],
          ['The move', 'What it does in the first two seconds'],
          ['The mechanism', 'Which rhetorical device carries it'],
          ['The steal', 'What gets practiced — never the words, only the structure']
        ] },
        { fig: { t: 'An ad, marked up', n: 'The Rolls-Royce headline and body, annotated — placeholder.' } },
        { h: 'The honesty clause' },
        { p: `Persuasion without truth is manipulation, and I want the two kept far apart. I study this craft the way I study rhetoric in philosophy — the point is to move people and still be able to look at the sentence afterwards without wincing. The consumer is not a moron, and neither is the reader of this site.` }
      ]
    }
  }
},
design: {
  title: 'Graphic Design',
  kicker: 'Visual rhetoric: grids, type, and the argument a layout makes before you read a word.',
  meta: [
    ['Focus', 'Typography · Grids · Visual systems'],
    ['Currently', 'Bringhurst, chapter by chapter'],
    ['Specimen', 'This site']
  ],
  blocks: [
    { h: 'Why graphic design' },
    { p: `I want to learn graphic design because everything being made needs it. An essay, a poster, a game interface, this site — they all make an argument before the first sentence is read, in the choice of type, the width of a column, the amount of air around a heading. That argument is design, and it should be made on purpose instead of by accident.` },
    { p: `Design is also the closest visual cousin of rhetoric: hierarchy is ethos, colour is pathos, the grid is the logic of the page. Learning it means learning to say things at the speed of the eye — which is the speed at which most of the world reads.` },
    { h: 'The syllabus' },
    { ul: [
      { t: 'Bringhurst — The Elements of Typographic Style', d: 'The grammar of type, read slowly.', r: '#/design' },
      { t: 'Müller-Brockmann — Grid Systems', d: 'The Swiss grid as an ethics of order.', r: '#/design/grid-systems' },
      { t: 'The specimens', d: 'Type specimens, posters of the Swiss school, one layout a week redrawn by hand.' }
    ] },
    { fig: { t: 'Anatomy of a page', n: 'Margins, baseline grid, and the 12-column system — placeholder.' } },
    { h: 'Exercises' },
    { log: [
      { d: 'Oct 2026', t: 'One poster per Journal essay', x: 'Exercise · a poster for "On Phronesis"', r: '#/journal/on-phronesis' },
      { d: 'Sep 2026', t: 'The site as specimen', x: 'Study · the type system of this page, annotated', r: '#/about' },
      { d: 'Aug 2026', t: 'A grid redrawn by hand', x: 'Exercise · Müller-Brockmann, one page at a time', r: '#/design/grid-systems' }
    ] },
    { q: { t: 'The grid system is an aid, not a guarantee. It permits a number of possible uses and each designer can look for a solution appropriate to his personal style.', c: 'Josef Müller-Brockmann, Grid Systems' } }
  ],
  children: {
    'grid-systems': {
      title: 'Grid Systems',
      kicker: 'The Swiss grid: an ethics of order, studied one poster at a time.',
      meta: [
        ['Text', 'Müller-Brockmann'],
        ['Practice', 'Redraw, then break'],
        ['Status', 'Chapter 2']
      ],
      blocks: [
        { h: 'What a grid is' },
        { p: `A grid is a promise about order: the page is divided before the content arrives, and the content agrees to be placed. It looks like a constraint and behaves like a language. Once the system is internalised, layout decisions stop being decisions and start being statements.` },
        { h: 'The parts' },
        { kv: [
          ['Margins', 'The silence around the argument'],
          ['Columns', 'The rhythm the text will march in'],
          ['Gutters', 'The pause between voices'],
          ['Baseline', 'The grid of the letters, holding every line to the same floor']
        ] },
        { fig: { t: 'A poster, deconstructed', n: 'A Swiss-school poster with its grid overlaid — placeholder.' } },
        { h: 'Why the Swiss' },
        { p: `I study the Swiss because their argument was that design should be neutral — an instrument for the content, not a costume for it. I am drawn to that and suspicious of it in equal measure, which is the correct relationship to have with a dogma. The suspicion is what the practice is for.` }
      ]
    }
  }
},

drawing: {
  title:'Drawing',
  kicker:'Slowed looking. The hand as an instrument of attention.',
  meta:[['Focus','Observation · Construction · Line'],['Practice','Daily small studies'],['Media','Graphite · ink']],
  blocks:[
    {h:'Why drawing'},
    {p:`Drawing changes what you see. A drawing is not a picture of a thing but a record of the decisions made while looking at it: which edges mattered, which shadows carried the form, what was left out; learning to draw is learning to see at the speed of the hand, which is the speed of attention.`},
    {p:`A quieter reason: this site is full of thought, and thinking that never uses the hands goes brittle; drawing is where the eye, the hand, and the judgment have to agree in real time; the line is the commitment.`},
    {h:'The practice'},
    {ul:[
      {t:'Observation', d:'What is actually there, before what is known to be there. The long fight against symbols.'},
      {t:'Construction', d:'Forms under forms: boxes, cylinders, and the geometry the body is built on.'},
      {t:'The sketchbook', d:'Daily, dated, uncurated — the same rule as the failed proofs.', r:'#/drawing/sketchbook'}
    ]},
    {fig:{t:'A head, boxed', n:'Construction lines under a portrait — placeholder for a process sketch.'}},
    {h:'Sketchbook log'},
    {log:[
      {d:'Oct 2026', t:'Hands, five days of them', x:'Study · the difficulty is the point', r:'#/drawing/sketchbook'},
      {d:'Sep 2026', t:'A chair, drawn without symbols', x:'Study · what "chair" actually looks like'},
      {d:'Aug 2026', t:'First construction studies', x:'Method · boxes before contours'}
    ]},
    {q:{t:'I would rather teach drawing that my pupils may learn to love nature, than teach the looking at nature that they may learn to draw.', c:'John Ruskin, The Elements of Drawing'}}
  ],
  children:{
    'sketchbook':{
      title:'The Sketchbook',
      kicker:'Daily, dated, uncurated — kept on the same principle as the failed proofs.',
      meta:[['Cadence','Daily, small'],['Rule','No erasing the evidence'],['Status','Public, selectively']],
      blocks:[
        {h:'What gets kept here'},
        {p:`Every page is kept, but only some pages get shown; the selection rule is the same as the mathematics notebooks — what is interesting is not the good drawing but the instructive failure, the page where the eye and the hand disagreed and the disagreement is visible.`},
        {h:'The rules'},
        {ul:[
          {t:'Date everything', d:'A drawing without a date is a rumour.'},
          {t:'Draw from looking, not from memory of symbols', d:'The eye first; the idea of the thing second.'},
          {t:'Keep the mistakes', d:'They are the only parts with information in them.'}
        ]},
        {fig:{t:'A page from the sketchbook', n:'Three attempts at the same hand — placeholder for a scanned page.'}},
        {h:'Current streak'},
        {p:`Since September, small studies — mostly hands and chairs and the corner of the desk; nothing worth framing, several things worth understanding; that ratio is healthy.`}
      ]
    }
  }
},
modeling: {
  title:'3D Modeling',
  kicker:'Thinking in volumes. Geometry with its gloves off.',
  meta:[['Focus','Hard-surface · Topology · Rendering'],['Tool','Blender'],['Currently','The impossible coastline']],
  blocks:[
    {h:'Why 3D'},
    {p:`Because I keep imagining objects that cannot be drawn flat; the mathematics section is full of forms — polyhedra, residue rings, the diagonal — that deserve to be held and turned; and there are things on this site that want to exist in three dimensions, starting with the cartographer's coastline, which is accurate to a place that does not exist — modelling is the only way to visit it.`},
    {h:'What is being built'},
    {ul:[
      {t:'The impossible coastline', d:'The bay from the story, modelled from its own description.', r:'#/modeling/impossible-coastline'},
      {t:'The Platonic solids, by hand', d:'Five shapes, built slowly — geometry as a modelling exercise.', r:'#/mathematics'},
      {t:'A room with the lamp in it', d:'The lamp from the sequence. A small scene, lit the way the poem says.'}
    ]},
    {fig:{t:'A coastline, as a mesh', n:'Edge flow along a curved coast — placeholder for a wireframe.'}},
    {h:'Log'},
    {log:[
      {d:'Oct 2026', t:'The viewport, first hours', x:'Blender · navigating in three axes, badly at first'},
      {d:'Sep 2026', t:'Why quads', x:'Note · topology is a language; quads are its grammar'},
      {d:'Sep 2026', t:'The coast, first attempt', x:'The impossible coastline · a heightfield that will not behave', r:'#/modeling/impossible-coastline'}
    ]},
    {q:{t:'Geometry is the knowledge of the eternally existent.', c:'Plato, Republic (after 527b)'}}
  ],
  children:{
    'impossible-coastline':{
      title:'The Impossible Coastline',
      kicker:'The bay from the story, modelled from its own description.',
      meta:[['Source','The Cartographer of Impossible Maps'],['Status','First mesh'],['Question','What does a place look like that does not exist?']],
      blocks:[
        {h:'The premise'},
        {p:`The bay has six soundings, a sandbar, and a channel narrowing to the north — that is everything the story gives, and it is enough: a coastline is just a curve with a history, and the software does not care whether the curve exists anywhere but in its own coordinates.`},
        {h:'Method'},
        {p:`Start low-poly and let the form argue for more detail; the sandbar first — it is the moral centre of the description — then the channel, then the rest of the coast as the thing that holds them; the goal is not photorealism but a place that looks like it remembers being mapped.`},
        {fig:{t:'The bay, from above', n:'Soundings, sandbar, channel — placeholder for the first render.'}},
        {h:'The paradox, kept in view'},
        {p:`This is the Borges problem again, but now the map is the territory and the territory is nowhere; the model should be accurate to the description and honest about the fact that there is nothing else to be accurate to.`, r:'#/literature/labyrinths'}
      ]
    }
  }
},
video: {
  title:'Video Editing',
  kicker:'Time as a material. The essay with a pulse.',
  meta:[['Focus','Editing · Rhythm · Essay film'],['Tool','Undecided'],['Currently','Storyboarding']],
  blocks:[
    {h:'Why video editing'},
    {p:`The Aesthetics of Proof was planned as a scrolling visual essay; video is that essay with time as its spine — the cut is punctuation, the pacing is syntax, and a proof can be shown to breathe the way it breathes in the mind; some arguments only work in time.`},
    {p:`Editing is the most honest of the moving-image crafts — everything is decided in the cut, nothing is hidden in the shooting; for someone who studies structure, the edit is where structure becomes visible.`},
    {h:'The plan'},
    {ul:[
      {t:'Essay film — The Aesthetics of Proof', d:'Four proofs, each given a different rhythm. Storyboarding now.', r:'#/video/essay-film'},
      {t:'A process film on lost-wax casting', d:'The flask, the burn, the pour — craft filmed as a patient spectacle.', r:'#/jewelry/casting-methods'},
      {t:'Practice cuts', d:'Found footage, re-edited: the same shots, different arguments.'}
    ]},
    {fig:{t:'A timeline, annotated', n:'Three tracks and where the cuts land — placeholder for an edit diagram.'}},
    {h:'Notes'},
    {log:[
      {d:'Oct 2026', t:'The cut as punctuation', x:'Note · a hard cut is a full stop; a dissolve is a comma, at best'},
      {d:'Sep 2026', t:"Watching Marker's Sans Soleil", x:'Study · the essay film that is not an essay but a letter', r:'#/video'},
      {d:'Sep 2026', t:'Rhythm before content', x:'Method · the pacing carries the argument, then the words do'}
    ]},
    {q:{t:'Cinema is truth twenty-four times a second.', c:'Jean-Luc Godard, Le Petit Soldat'}}
  ],
  children:{
    'essay-film':{
      title:'Essay Film — The Aesthetics of Proof',
      kicker:'Four proofs, each given a different rhythm. Storyboarding now.',
      meta:[['Form','Short essay film'],['Status','Storyboard'],['Length','Target: 6–8 minutes'],['Source','The Aesthetics of Proof']],
      blocks:[
        {h:'The structure'},
        {p:`Four proofs, four rhythms — Euclid IX.20 cut slow and ceremonial, the oldest argument in the film; the diagonal argument cut fast, almost impatient, the way it actually feels; the fundamental theorem of arithmetic given the rhythm of a counting song; and a fourth, undecided, to break the pattern the film has taught the viewer to expect.`},
        {h:'Rules of the edit'},
        {ul:[
          {t:'No talking heads', d:'The proof is the speaker. Diagrams on paper, hands, ink.'},
          {t:'Silence is allowed', d:'A proof is a place where thinking happens. The film must leave room for it.'},
          {t:'Every cut must be load-bearing', d:'The same criterion as the proofs themselves — nothing extraneous.'}
        ]},
        {fig:{t:'Three frames and a timeline', n:'The diagonal argument, boarded — placeholder for a storyboard page.'}},
        {h:'Status'},
        {p:`Storyboarding; the four proofs are chosen; what remains is the argument between the board and the edit, which is the whole craft.`}
      ]
    }
  }
},

games: {
  title:'Game Development',
  kicker:'Games as systems that argue. Where the logic and the fiction share a room.',
  meta:[['Focus','System design · Interactive fiction'],['Tool','Undecided — Godot or the browser'],['Rule','Mechanics before graphics']],
  blocks:[
    {h:'Why games'},
    {p:`A game is a thought experiment you can walk around inside. The rules are the argument — a game about a choice is an essay about choice, written in mechanics instead of paragraphs. This site is full of the raw material: the Garden of Forking Paths is already a game design document, the Ethics is a book about decisions, and the mathematics section is full of systems that deserve to be played.`},
    {h:'Current ideas'},
    {ul:[
      {t:'The Forking Path', d:'A branching narrative where the branches do not merely split — they see each other.', r:'#/games/forking-paths'},
      {t:'A puzzle about modular arithmetic', d:'Z/12Z as a lock with twelve teeth. The math, made tactile.', r:'#/mathematics/number-theory'},
      {t:'The Cartographer, interactive', d:'A map you can walk on that is accurate to nowhere.', r:'#/atelier/cartographer'}
    ]},
    {fig:{t:'A choice, as a graph', n:'The decision tree of a small scene — placeholder for a state diagram.'}},
    {h:'Design notes'},
    {log:[
      {d:'Oct 2026', t:'Choices as topology', x:'Note · a branch is not a fork; it is a neighbourhood', r:'#/games/forking-paths'},
      {d:'Sep 2026', t:'The rules are the ethics', x:"Note · a game's win condition is its moral claim"},
      {d:'Aug 2026', t:'Borges as game designer', x:'Reading · The Garden of Forking Paths, reread for mechanics', r:'#/literature/labyrinths'}
    ]},
    {q:{t:'A game is a series of interesting decisions.', c:'Sid Meier'}}
  ],
  children:{
    'forking-paths':{
      title:'The Forking Path — a design document',
      kicker:'A branching narrative where the branches see each other.',
      meta:[['Form','Interactive fiction'],['Status','Design document'],['Precursor','Borges, The Garden of Forking Paths']],
      blocks:[
        {h:'The premise'},
        {p:`Borges imagines a garden where all possible futures grow at once. A branching narrative usually lets you visit one branch at a time and hides the others. This one does the opposite — the player can see, dimly, what the other branches are doing, and a choice made on one path leaves evidence on the others. The game is about what it costs to know what could have been.`},
        {h:'The system, in plain words'},
        {kv:[
          ['Verbs','Go · look · speak · remember'],
          ['Objects','The garden, the letter, the train, the clock'],
          ['The twist','States persist across branches; a path can be haunted'],
          ['Win state','There is not one — it ends when the garden is understood, or abandoned']
        ]},
        {fig:{t:'The garden, as a graph', n:'Branches, merges, and the haunted edges — placeholder for a state diagram.'}},
        {h:'Why a design document first'},
        {p:`The idea is cheap and the implementation is not. The document is where the game is argued with before it is built — the same way an essay is argued in the Tabularium before it is published.`}
      ]
    }
  }
},
clothes: {
  title:'Making Clothes',
  kicker:'Pattern as logic. The body as the first constraint.',
  meta:[['Focus','Pattern drafting · Construction · Mending'],['Currently','The bodice block'],['Rule','Learn the why of every seam']],
  blocks:[
    {h:'Why clothes'},
    {p:`It is the craft we are never not wearing. A garment is a set of decisions carried in public — about the body, about comfort, about who the wearer is — and almost nobody who wears them can read the decisions. Clothing is also the deepest meeting of geometry and the body: a dart is a triangle that removes volume, a sleeve is a surface wrapped around an arm, ease is the difference between a shape and a person.`},
    {p:`And, as with drawing: the site is full of thinking, and the hands need their share. A seam is a place where intention becomes irreversible — cut cloth cannot be un-cut. There is a whole ethics in that.`},
    {h:'The path'},
    {ul:[
      {t:'Mending first', d:'Learn the structure of clothes by repairing them. Respect before making.'},
      {t:'Pattern drafting', d:'The block, darts, ease — the geometry of the body on paper.', r:'#/clothes/pattern-drafting'},
      {t:'One garment per season', d:'First: a shirt. Then whatever the first teaches.'}
    ]},
    {fig:{t:'A bodice, flattened', n:'Dart rotation on the block — placeholder for a pattern diagram.'}},
    {h:'Log'},
    {log:[
      {d:'Oct 2026', t:'Mending pile, day one', x:'Practice · a cuff, a hem, and the patience they demand'},
      {d:'Sep 2026', t:'Why darts are triangles', x:'Note · removing volume from a flat sheet', r:'#/clothes/pattern-drafting'},
      {d:'Sep 2026', t:'The block, drafted', x:'Pattern drafting · measurements into geometry', r:'#/clothes/pattern-drafting'}
    ]},
    {q:{t:'Have nothing in your houses that you do not know to be useful, or believe to be beautiful.', c:'William Morris'}}
  ],
  children:{
    'pattern-drafting':{
      title:'Pattern Drafting',
      kicker:'The body, translated into geometry — darts, ease, and the shape of a person on paper.',
      meta:[['Subject','The block and its children'],['Text','Patternmaking texts, plus practice'],['Status','Bodice block drafted']],
      blocks:[
        {h:'What a block is'},
        {p:`A block is a body translated into geometry — a set of flat pieces that, sewn, become a garment that fits a person, or a standard from which variations are cut. Everything in patternmaking follows from it: every collar, every sleeve, every dart is a modification of the block, the way every theorem is a modification of an axiom.`},
        {h:'The vocabulary'},
        {kv:[
          ['Dart','A triangle that removes volume so flat cloth can hold a curve'],
          ['Ease','The deliberate difference between garment and body — where movement lives'],
          ['Grain','The direction of the weave; cut against it and the garment argues forever'],
          ['Seam allowance','The margin where intention meets the needle']
        ]},
        {fig:{t:'The sleeve, unfolded', n:'A sleeve cap as a curve that must fit an armhole — placeholder for the geometry of the join.'}},
        {h:'Why draft rather than buy'},
        {p:`A bought pattern is an answer without a derivation. Drafting the block myself is the slow proof — I want to know why the shoulder slopes at that angle and what happens when it does not, for the same reason I read Hardy & Wright instead of a book of theorems.`}
      ]
    }
  }
},
jewelry: {
  title:'Making Jewelry',
  kicker:'The miniature. Metal with a memory.',
  meta:[['Focus','Casting · Fabrication · Setting'],['Currently','Lost wax, first flask'],['Rule','Patience at every temperature']],
  blocks:[
    {h:'Why jewelry'},
    {p:`Because it is precision and patience at a scale you can hold — the smallest craft with the longest memory. Metal keeps the record of every force applied to it: a hammer mark, a file stroke, a flame held too long. Nothing in it can be rushed, because the material will not agree to be rushed. For someone whose other work lives in sentences, that is a discipline with teeth.`},
    {p:`And casting is the hidden theatre: you build the thing in wax, bury it, burn the wax away, and pour metal into the empty space where the idea used to be. The mold is the negative of a thought.`},
    {h:'Casting methods, side by side'},
    {kv:[
      ['Lost wax','The classic. Wax carved, invested, burned out, metal poured into the void. Most detail, most control.'],
      ['Sand casting','A two-part sand mold stamped with a model. Cruder, faster, honest.'],
      ['Cuttlefish','The bone of a cuttlefish as a one-use mold — texture like nothing else.'],
      ['Water casting','Metal poured into water: gravity improvises. The least control, the most surprise.']
    ]},
    {fig:{t:'A flask, in section', n:"Sprue, wax tree, investment, and the metal's path — placeholder."}},
    {h:'Log'},
    {log:[
      {d:'Oct 2026', t:'The four methods, mapped', x:'Study · casting methods compared', r:'#/jewelry/casting-methods'},
      {d:'Sep 2026', t:'Wax, first carving', x:'Practice · the material gives way exactly as much as asked'},
      {d:'Sep 2026', t:'Why the sprues branch', x:'Note · the metal must arrive everywhere at once'}
    ]},
    {q:{t:'The void holds the shape of the idea; the metal holds the memory of the flame.', c:'Working note'}}
  ],
  children:{
    'casting-methods':{
      title:'Casting Methods',
      kicker:'A field guide to getting metal to take a shape — four methods, compared honestly.',
      meta:[['Subject','Metal casting'],['Focus','Lost wax, first'],['Note','Hot metal is not a metaphor']],
      blocks:[
        {h:'The four methods'},
        {p:`All casting is the same trick — make a void in the shape of the idea, pour metal into the void, wait — and every method is a different argument about how to make the void. They differ in fidelity, in patience, and in what the result is allowed to look like.`},
        {h:'Compared'},
        {kv:[
          ['Lost wax','Wax model → investment → burnout → pour. The standard: finest detail, most steps, most control.'],
          ['Sand casting','Two-part sand mold around a model. Fast, reusable, and visibly hand-made.'],
          ['Cuttlefish bone','The bone as a one-shot mold. A texture no other method imitates.'],
          ['Water casting','Metal poured into water from height. The least control and the most surprise — the method for when the metal should have a vote.']
        ]},
        {fig:{t:'Four voids', n:'The mold geometry of each method, side by side — placeholder.'}},
        {h:'Safety, said plainly'},
        {p:`Molten metal is not a metaphor. Investment burnout needs ventilation, the pour needs every surface dry, and water casting sends steam upward — so the water pour is done at arm's length with a face shield, or not at all. The craft is patience at every temperature, and the first temperature is respect.`}
      ]
    }
  }
},

/* ---------- ATELIER ---------- */
atelier:{
  num:'12', title:'Atelier',
  kicker:'Where the reading turns into making: fiction, fragments, and formal experiments.',
  meta:[['Forms','Fiction · Poetry · Constraint'],['Currently','The Cartographer, draft 2'],['Rule','Finish before polishing']],
  blocks:[
    {h:'What happens here'},
    {p:`The Atelier is the working room. Everything else on this site is reading or thinking; this is where something gets made badly and then made again. Most of it will not be good. The point is that the reading has to come out somewhere, or it becomes a kind of hoarding.`},
    {h:'Projects'},
    {ul:[
      {t:'The Cartographer of Impossible Maps', d:'A short story about a mapmaker whose maps are accurate to places that do not exist.', r:'#/atelier/cartographer'},
      {t:'A small sequence of poems', d:'Written under constraint: fourteen lines, no adjectives.', r:'#/atelier/poems'},
      {t:'Form experiments', d:'The page as a machine. Constraint as a way of finding out what I actually think.'}
    ]},
    {fig:{t:'The workshop, mapped', n:'Projects, methods, and where the reading feeds the making — placeholder.'}},
    {q:{t:'Constraint is not the enemy of invention. It is the only thing that makes invention visible.', c:'Working note'}}
  ],
  children:{
    cartographer:{
      title:'The Cartographer of Impossible Maps',
      kicker:'A short story in second draft. A mapmaker whose maps are accurate to places that do not exist.',
      meta:[['Form','Short fiction'],['Status','Draft 2'],['Length','~4,800 words'],['Started','June 2026']],
      blocks:[
        {h:'Premise'},
        {p:`A cartographer is commissioned to survey a coastline that appears on no other map. He surveys it, accurately, and returns to find that the coastline no longer exists — but his map does, and it is correct. The story is about what it means for a representation to be true of nothing.`},
        {h:'Excerpt'},
        {q:{t:'He had drawn the bay exactly. Six soundings, the sandbar, the channel narrowing to the north. It was the most accurate thing he had ever made, and there was nowhere it could be. He folded it anyway, and put it with the others.', c:'Draft 2, opening section'}},
        {h:'Notes'},
        {ul:[
          {t:'The Borges problem', d:'This is "On Exactitude in Science" extended, and I know it. The extension has to earn itself.'},
          {t:'Second draft changes', d:'Cut the frame narrative entirely. It was protecting the story from itself.'}
        ]},
        {fig:{t:'The impossible coastline', n:'The bay as the story describes it: six soundings, the sandbar, the channel — placeholder for the map itself.'}}
      ]
    },
    poems:{
      title:'A Small Sequence',
      kicker:'Fourteen lines each, no adjectives. A constraint chosen to find out what is left.',
      meta:[['Form','Constraint'],['Count','7 of 12 complete'],['Rule','No adjectives']],
      blocks:[
        {h:'The constraint'},
        {p:`No adjectives. It began as an exercise and turned into a test: how much of what I want to say depends on evaluation rather than observation? More than I would like.`},
        {h:'From the sequence'},
        {q:{t:'The lamp goes out. The room stays.\nWhat I called bright was the wall\nbeing looked at. Now the wall\nis the wall, and I am the looking.', c:'Sequence, no. 3'}},
        {fig:{t:'The sequence, whole', n:'Twelve slots, seven filled — placeholder for a map of the sequence.'}},
        {h:'Status'},
        {p:`Seven complete, five in fragments. The fragments are kept in a separate file and dated, on the same principle as the failed proofs in mathematics.`}
      ]
    }
  }
},

/* ---------- JOURNAL ---------- */
journal:{
  num:'18', title:'Journal',
  kicker:'Occasional essays and fragments. Long-form when it earns it, short when it does not.',
  meta:[['Entries','11'],['Latest','Oct 2026'],['Cadence','Irregular']],
  blocks:[
    {h:'Recent'},
    {log:[
      {d:'Oct 2026', t:'On Phronesis', x:'Why the most important thing in Aristotle\u2019s ethics is the one thing he says cannot be taught.', r:'#/journal/on-phronesis'},
      {d:'Sep 2026', t:'Against Friction', x:'On the aesthetics of interfaces, and why difficulty is sometimes the point.', r:'#/journal/against-friction'},
      {d:'Aug 2026', t:'The Map and the Territory', x:"Borges, Borges\u2019s source, and what a representation owes the world."},
      {d:'Jul 2026', t:'Reading Slowly on Purpose', x:'A defence of not finishing books.'}
    ]},
    {fig:{t:'The shelf, by month', n:'Entries in order — placeholder for the archive as a whole.'}},
    {h:'On the form'},
    {p:`A journal entry is allowed to be unfinished. That is its whole advantage over an essay. I publish them anyway, because a note that sits in a folder for a year stops being a thought and becomes furniture.`}
  ],
  children:{
    'on-phronesis':{
      title:'On Phronesis',
      kicker:'Why the most important thing in Aristotle\u2019s ethics is the one thing he says cannot be taught.',
      meta:[['Date','October 2026'],['Form','Essay'],['Reading time','6 minutes']],
      blocks:[
        {h:'The problem stated plainly'},
        {p:`Aristotle builds an ethics on practical wisdom, and then tells us that practical wisdom requires experience of particulars, and that therefore the young cannot have it. This is not a footnote. It is a structural admission that the theory cannot be learned from the theory.`},
        {h:'Why it is not a bug'},
        {p:`The obvious reading is that Aristotle has smuggled in an elitism: wisdom belongs to men who have lived long enough to have it. A better reading is that he is being honest about the difference between knowing a rule and knowing what to do, and refusing to paper over it.`},
        {p:`Modern ethics mostly avoids this by replacing the virtuous agent with a decision procedure. That solves the teaching problem by dissolving the phenomenon. Aristotle declined the trade.`},
        {q:{t:'Virtue is a state of character concerned with choice, lying in a mean relative to us, determined by a rational principle, and by that principle by which the person of practical wisdom would determine it.', c:'Nicomachean Ethics II.6'}},
        {h:'Where it leaves me'},
        {p:`With a suspicion that the thing I most want from philosophy — an answer to how to live — is the thing philosophy is structurally worst placed to give, and that this is not a reason to stop asking but a reason to stop expecting a proof.`},
        {fig:{t:'The teaching gap', n:'Where theory ends and experience begins — placeholder.'}}
      ]
    },
    'against-friction':{
      title:'Against Friction',
      kicker:'On the aesthetics of interfaces, and why difficulty is sometimes the point.',
      meta:[['Date','September 2026'],['Form','Note'],['Reading time','3 minutes']],
      blocks:[
        {h:'The default'},
        {p:`Every design conversation eventually arrives at the same destination: remove friction. Fewer clicks, fewer choices, less thinking. This is right most of the time. It is wrong often enough that it deserves an argument against it.`},
        {h:'Three kinds of friction'},
        {ul:[
          {t:'Incidental', d:'Friction with no purpose. Remove it, always.'},
          {t:'Deliberative', d:'Friction that forces a decision to be conscious. Sometimes the point.'},
          {t:'Formative', d:'Friction that changes the person doing the thing. Never remove it.'}
        ]},
        {p:`Reading a difficult book is formative friction. A confirmation dialogue before deleting an account is deliberative. A CAPTCHA is incidental, and should be abolished.`},
        {q:{t:'The question is never "does this add friction?" but "what is the friction doing?"', c:'Working note'}},
        {h:'Application'},
        {p:`This site is deliberately not frictionless. The Tabularium requires reading a table. The subpages are long. That is a position, not an oversight.`},
        {fig:{t:'Three kinds of friction', n:'Incidental, deliberative, formative — placeholder.'}}
      ]
    }
  }
},

/* ---------- ABOUT ---------- */
about:{
  num:'19', title:'About',
  kicker:'Tyler Miranda — independent student of philosophy, mathematics, literature, and the crafts. This site is the ledger: a life kept in the open, revised as it goes.',
  meta:[['Contact','tyler@meresophist.xyz'],['Location','Somewhere with a desk'],['Status','Open to correspondence']],
  blocks:[
    {h:'A short biography, intellectual rather than factual'},
    {p:`I am not affiliated with an institution and do not pretend to be. I read in several directions at once — philosophy, mathematics, literature, languages — and make things in the directions between them: essays, fiction, drawings, objects, a shirt, a flask. Philosophy taught me to ask what a question is really asking; mathematics taught me that some questions have answers, and that this is rarer than it looks; literature taught me that the answers are usually about people; and the crafts are teaching me that the hands know things the sentence cannot reach, and that the body has a memory of its own. I keep the ledger so none of it is lost.`},
    {h:'On the name'},
    {p:`Meresophist is a small joke told with a straight face. A sophist was a professional teacher of wisdom; the "mere" does two jobs at once — modest, and only. I am only a sophist: someone in love with wisdom, who teaches no one, and who keeps a public ledger of the attempt — the opus as a series of dated, revisable notes rather than a finished monument.`},
    {h:'What this site is'},
    {p:`A public record of learning. Everything here is dated, revisable, and kept in the open on purpose: the reading log, the drafts, the failed proofs, the diagrams that are not drawn yet. Publishing the work gives it a spine; the reader gives it a witness. The public part is not exhibition — it is honesty, the way a table set in the open asks to be shared.`},
    {h:'Design bearings'},
    {p:`A few bearings, stated because they hold the whole thing up. The site is built for a reader who is intelligent and in no hurry — and for a writer who will be wrong in public and revise without shame. Two people, meeting across the ledger, neither of them rushed.`},
    {ul:[
      {t:'Respect the reader', d:'No dumbing down. The site assumes you are intelligent and treats your attention as something to be honored, not spent.'},
      {t:'Calm before clever', d:'Paper, ink, one idea per panel. The page stays quiet so the thought can breathe and be heard.'},
      {t:'Structure is kindness', d:'Indexes, legends, tables of contents. Every page says what it holds before you give it your time — that is care, not bureaucracy.'},
      {t:'Nothing hides', d:'Diagrams are announced and numbered even before they exist — placeholders, not surprises; the unfinished is shown as unfinished.'},
      {t:'Slow is a feature', d:'Long pages, deliberate navigation, and friction kept only where it does work — where it changes the person reading.'}
    ]},
    {h:'A CV of curiosities'},
    {kv:[
      ['Position','Independent scholar (self-appointed)'],
      ['Fields','Philosophy · Mathematics · Literature · Languages · Design · Craft'],
      ['Practice','Close reading, slow thinking, public notes'],
      ['Output','Essays, proofs, fiction, objects, this archive'],
      ['Availability','Open to correspondence and correction']
    ]},
    {h:'Contact'},
    {p:`Email is best: <strong>tyler@meresophist.xyz</strong>. I read everything and answer most things, especially corrections. If you have found an error in a proof, an unfair reading of a book, or a diagram that should exist — I would genuinely, warmly like to know. The ledger improves when someone else turns its pages.`},
    {h:'Colophon'},
    {p:`Set in Instrument Serif and Courier Prime — one serif for the body of the thought, one mono for its margins — with Cubao Free for the painted shelf-signs and Noto Sans Tagalog for the tala (ᜆᜎ, "star · record · list") that seals each page. The default palette is Papyrus — paper #eceae3, ink #0c0c0c, flame #ff3b00, acid #d9ff00 — and the top corner cycles five of them: Papyrus, Pompeii, Marble, Attic, Nocturne, each a different weather for the same room. A Greek meander runs along the top edge, the grain is baked in as chunky pixels, and the motion runs on GSAP and quietly does nothing when scripts or motion are turned off. No analytics, no trackers, no cookies: the tabularium is public by choice, and its visitors are guests, not data. The site is hand-rolled in plain files — HTML, CSS, and all content held as data — so it can be rebuilt anywhere, and will be, when the archive outgrows the room.`},
    {fig:{t:'The site, as a map', n:'The shelves and how they connect — placeholder for an index diagram.'}}
  ]
}

};
