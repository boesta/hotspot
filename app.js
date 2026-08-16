"use strict";

// HOTSPOT CONCEPTDEMO — throwaway browserprototype.
// Vraag: maakt de demo begrijpelijk hoe dagelijkse community-interactie direct naar samenwerking groeit?
// Alle data en mutaties leven uitsluitend in het browsergeheugen.

const categories = [
  { id: "schrijven", label: "Schrijven & compositie", note: "Van eerste zin tot arrangement", mark: "01" },
  { id: "productie", label: "Beats & productie", note: "Bouw samen aan een eigen geluid", mark: "02" },
  { id: "zang", label: "Zang & instrumenten", note: "Vind een stem of muzikale partij", mark: "03" },
  { id: "mix", label: "Opname, mix & mastering", note: "Maak een track samen af", mark: "04" },
  { id: "live", label: "Live & sessies", note: "Repetities, opnames en podium", mark: "05" },
  { id: "band", label: "Bands & formaties", note: "Vind een vast bandlid, invaller of nieuwe formatie", mark: "06" },
  { id: "media", label: "Muziek voor beeld & media", note: "Film, games, podcasts en podium", mark: "07" },
];

const makers = [
  {
    id: "daan",
    name: "Daan van Dijk",
    initials: "DV",
    roles: ["Songwriter", "Producer"],
    genres: ["Pop", "Alternatief", "Nederlandstalig"],
    region: "Amsterdam",
    online: true,
    bio: "Ik schrijf Nederlandstalige pop. Vaak begin ik met een melodie en een halve tekst; ik zoek mensen die het leuk vinden om daar samen een song van te maken.",
    link: "https://example.com/demo-daan",
    email: "daan@demo.hotspot.invalid",
    badge: "Voorbeeldmaker",
    portrait: "assets/maker-songwriter-composer.webp",
  },
  {
    id: "raya",
    name: "Raya de Wit",
    initials: "RW",
    roles: ["Songwriter", "Vocalist"],
    genres: ["R&B", "Soul", "Pop"],
    region: "Den Haag",
    online: true,
    bio: "Ik zing en schrijf, vooral soul en R&B. Ik hou van warme koortjes, goede hooks en takes waar nog een beetje leven in zit.",
    link: "https://example.com/demo-raya",
    email: "raya@demo.hotspot.invalid",
    badge: "Voorbeeldmaker",
    portrait: "assets/maker-vocalist-instrumentalist.webp",
  },
  {
    id: "jasper",
    name: "Jasper Voorhees",
    initials: "JV",
    roles: ["Producer", "Beatmaker", "Recording engineer"],
    genres: ["Hip-hop", "Trap", "R&B"],
    region: "Haarlem",
    online: true,
    bio: "Ik maak beats en neem vocalen op in Haarlem. Veel groove, veel ruimte en liever samen zoeken dan een track dichttimmeren.",
    link: "https://example.com/demo-jasper",
    email: "jasper@demo.hotspot.invalid",
    badge: "Voorbeeldmaker",
    portrait: "assets/maker-producer-beatmaker.webp",
  },
  {
    id: "nina",
    name: "Nina Polak",
    initials: "NP",
    roles: ["Componist", "Arrangeur"],
    genres: ["Film", "Ambient", "Neoklassiek"],
    region: "Arnhem",
    online: true,
    bio: "Ik maak muziek voor film en theater, meestal met piano, veldopnames en strijkers. Altijd benieuwd naar mensen die beeld en geluid samen willen uitproberen.",
    link: "https://example.com/demo-nina",
    email: "nina@demo.hotspot.invalid",
    badge: "Voorbeeldmaker",
  },
  {
    id: "lotte",
    name: "Lotte Janssen",
    initials: "LJ",
    roles: ["Producer", "Mix engineer", "Mastering engineer"],
    genres: ["Electronic", "House", "Techno"],
    region: "Utrecht",
    online: true,
    bio: "Ik produceer en mix elektronische muziek. Stuur me vooral iets dat nog niet af is; daar valt meestal het leukste gesprek over te voeren.",
    link: "https://example.com/demo-lotte",
    email: "lotte@demo.hotspot.invalid",
    badge: "Voorbeeldmaker",
    portrait: "assets/maker-mix-mastering.webp",
  },
  {
    id: "milan",
    name: "Milan Bakker",
    initials: "MB",
    roles: ["Componist", "Pianist"],
    genres: ["Instrumentaal", "Piano", "Neoklassiek"],
    region: "Rotterdam",
    online: false,
    bio: "Pianist en componist. Ik maak kleine, instrumentale stukken voor theater en korte film en speel graag met andere akoestische muzikanten.",
    link: "https://example.com/demo-milan",
    email: "milan@demo.hotspot.invalid",
    badge: "Voorbeeldmaker",
  },
  {
    id: "amara",
    name: "Amara Mensah",
    initials: "AM",
    roles: ["Vocalist", "Topliner"],
    genres: ["Afropop", "Soul", "Dance"],
    region: "Almere",
    online: true,
    bio: "Ik schrijf toplines en zing demo's in. Het liefst werk ik in een paar uur een goed idee uit met een producer die snel durft te kiezen.",
    link: "https://example.com/demo-amara",
    email: "amara@demo.hotspot.invalid",
    badge: "Voorbeeldmaker",
  },
  {
    id: "sem",
    name: "Sem de Boer",
    initials: "SB",
    roles: ["Gitarist", "Songwriter"],
    genres: ["Indie", "Rock", "Folk"],
    region: "Groningen",
    online: true,
    bio: "Ik speel gitaar en schrijf liedjes. Geef me een goed verhaal, een rare akkoordwissel en een repetitieruimte, dan ben ik blij.",
    link: "https://example.com/demo-sem",
    email: "sem@demo.hotspot.invalid",
    badge: "Voorbeeldmaker",
  },
  {
    id: "sophia",
    name: "Sophia Chen",
    initials: "SC",
    roles: ["Producer", "Sounddesigner"],
    genres: ["Games", "Electronic", "Cinematic"],
    region: "Eindhoven",
    online: true,
    bio: "Ik maak sound en muziek voor games. Ik kan lang blij worden van een synth die net anders reageert als je ergens tegenaan loopt.",
    link: "https://example.com/demo-sophia",
    email: "sophia@demo.hotspot.invalid",
    badge: "Voorbeeldmaker",
  },
  {
    id: "youssef",
    name: "Youssef El Amrani",
    initials: "YE",
    roles: ["Rapper", "Tekstschrijver"],
    genres: ["Hip-hop", "Spoken word", "Pop"],
    region: "Tilburg",
    online: true,
    bio: "Ik schrijf en rap in het Nederlands. Ik zoek beats waarop de tekst niet hoeft te vechten om ruimte.",
    link: "https://example.com/demo-youssef",
    email: "youssef@demo.hotspot.invalid",
    badge: "Voorbeeldmaker",
  },
  {
    id: "eefje",
    name: "Eefje Mulder",
    initials: "EM",
    roles: ["Cellist", "Arrangeur"],
    genres: ["Klassiek", "Film", "Folk"],
    region: "Zwolle",
    online: false,
    bio: "Ik speel cello en schrijf strijkerspartijen. Van één losse laag tot een klein ensemble, live of op afstand.",
    link: "https://example.com/demo-eefje",
    email: "eefje@demo.hotspot.invalid",
    badge: "Voorbeeldmaker",
  },
  {
    id: "kai",
    name: "Kai Vermeer",
    initials: "KV",
    roles: ["DJ", "Producer"],
    genres: ["Dance", "House", "UK garage"],
    region: "Breda",
    online: true,
    bio: "Ik maak house en UK garage. Op zoek naar vocalisten, gitaristen en producers die een schets snel durven openbreken.",
    link: "https://example.com/demo-kai",
    email: "kai@demo.hotspot.invalid",
    badge: "Voorbeeldmaker",
  },
];

const calls = [
  {
    id: "cowriter-pop",
    ownerId: "daan",
    title: "Co-writer gezocht voor Nederlandstalige pop",
    type: "Co-write",
    role: "Songwriter",
    genre: "Pop",
    region: "Amsterdam",
    online: true,
    category: "schrijven",
    instrument: "",
    summary: "Ik heb een refrein en een eerste couplet over opnieuw beginnen. Wie wil het lied met me afschrijven?",
    project: "Een nieuwe Nederlandstalige popsong die ik zelf wil uitbrengen.",
    seeking: "Iemand die goed is met tekst én melodie en eerlijk zegt wanneer een regel niet werkt.",
    style: "MEAU, Froukje en Racoon — emotioneel, direct en melodisch.",
    timing: "Twee schrijfsessies in augustus. Als het klikt, maken we in september de demo af.",
    terms: "Voor we beginnen spreken we even af hoe we credits en de song verdelen.",
    published: "12 juli 2026",
  },
  {
    id: "vocalist-soul",
    ownerId: "jasper",
    title: "Vocalist gezocht voor warme neo-soul demo",
    type: "Demo-opname",
    role: "Vocalist",
    genre: "R&B",
    region: "Haarlem",
    online: false,
    category: "zang",
    instrument: "Stem",
    summary: "De track staat, maar mist nog een stem met een eigen kleur. Ik wil de vocal samen in de studio uitzoeken.",
    project: "Neo-soul demo met live keys en een ontspannen groove.",
    seeking: "Een vocalist die lekker achter de tel kan zingen, harmonieën hoort en ook durft te improviseren.",
    style: "Cleo Sol, H.E.R. en Jordan Rakei.",
    timing: "Opname in september in Haarlem.",
    terms: "We spreken vooraf af wat er met de demo gebeurt en hoe je in de credits komt.",
    published: "10 juli 2026",
  },
  {
    id: "film-score",
    ownerId: "nina",
    title: "Sounddesigner voor korte film",
    type: "Co-productie",
    role: "Sounddesigner",
    genre: "Film",
    region: "Online",
    online: true,
    category: "media",
    instrument: "",
    summary: "Ik zoek iemand die stationsgeluid kan ombouwen tot een subtiele soundwereld voor een korte documentaire.",
    project: "Documentaire van twaalf minuten over nachttreinen in Europa.",
    seeking: "Een sounddesigner die met veldopnames kan werken zonder alles glad te trekken.",
    style: "Textuur, stilte en organische elektronica.",
    timing: "Eerste montage in augustus; definitieve mix in oktober.",
    terms: "Voor de eerste sessie spreken we af wie wat maakt, waar het gebruikt wordt en hoe de credits lopen.",
    published: "9 juli 2026",
  },
  {
    id: "feedback-clubmix",
    ownerId: "lotte",
    title: "Wie wil mijn clubmix ruilen voor eerlijke feedback?",
    type: "Feedback",
    role: "Mix engineer",
    genre: "Electronic",
    region: "Online",
    online: true,
    category: "mix",
    instrument: "",
    summary: "Ik zit te lang op deze mix. Wie wil één keer echt goed luisteren? Ik luister net zo kritisch naar jouw track.",
    project: "Clubtrack van zes minuten met veel laag en percussie.",
    seeking: "Een producer of mixer met een goede luisteromgeving.",
    style: "Minimalistisch, ruimtelijk en percussief.",
    timing: "We wisselen de komende twee weken één track en onze notities uit.",
    terms: "Wederzijdse feedback; geen gebruik van elkaars audio zonder toestemming.",
    published: "8 juli 2026",
  },
  {
    id: "live-cellist",
    ownerId: "milan",
    title: "Cellist gezocht voor intieme livesessie",
    type: "Livesessie",
    role: "Cellist",
    genre: "Neoklassiek",
    region: "Rotterdam",
    online: false,
    category: "live",
    instrument: "Cello",
    summary: "Ik neem drie stukken live op met piano en strijkers en mis nog een cellist.",
    project: "Drie instrumentale composities, live opgenomen voor video.",
    seeking: "Een cellist die van blad kan spelen, maar niet schrikt als we een passage ter plekke anders doen.",
    style: "Intiem, akoestisch en filmisch.",
    timing: "Repetitie en opname in oktober.",
    terms: "Iedereen krijgt de opname voor het eigen portfolio en staat duidelijk in de credits. We delen pas iets als iedereen akkoord is.",
    published: "6 juli 2026",
  },
  {
    id: "afropop-producer",
    ownerId: "amara",
    title: "Producer voor energieke afropop single",
    type: "Co-productie",
    role: "Producer",
    genre: "Afropop",
    region: "Almere",
    online: true,
    category: "productie",
    instrument: "",
    summary: "Topline en tekst zijn er al. Ik zoek een producer die samen met mij de track wil bouwen.",
    project: "Toegankelijke afropop single met ruimte voor live percussie.",
    seeking: "Een producer die met mij wil zoeken naar de juiste groove, niet alleen een beat wil opsturen.",
    style: "Dansbaar, warm en melodisch.",
    timing: "Start in augustus, releaseplan bepalen we samen.",
    terms: "Co-productie; credits en eventuele verdeling vooraf samen vastleggen.",
    published: "4 juli 2026",
  },
  {
    id: "bassist-indieband",
    ownerId: "sem",
    title: "Bassist gezocht voor vaste indieband",
    type: "Vaste band",
    formation: "Vaste band",
    role: "Bassist",
    genre: "Indie",
    region: "Groningen",
    online: false,
    category: "band",
    instrument: "Basgitaar",
    summary: "We zijn met z'n drieën, hebben acht eigen nummers en zoeken een bassist die echt onderdeel van de band wil worden.",
    project: "Nederlandstalige indie met twee gitaren en zang. We repeteren iedere week en willen weer gaan spelen.",
    seeking: "Een bassist die niet alleen de grondtonen volgt, meedenkt over arrangementen en meestal bij de repetitie kan zijn.",
    style: "Gelaagde gitaren, melodische baslijnen en Nederlandstalige indie.",
    timing: "Kennismaken in augustus; vanaf september wekelijks repeteren in Groningen.",
    terms: "We zoeken een vast bandlid. Voor nieuw werk maken we samen duidelijke afspraken over credits en splits.",
    published: "18 juli 2026",
  },
  {
    id: "drummer-invaller",
    ownerId: "daan",
    title: "Drummer gezocht om tijdelijk in te vallen",
    type: "Tijdelijk invallen",
    formation: "Tijdelijk invallen",
    role: "Drummer",
    genre: "Pop",
    region: "Amsterdam",
    online: false,
    category: "band",
    instrument: "Drums",
    summary: "Onze drummer kan twee showcases niet. Wie kan de set met ons instuderen en invallen?",
    project: "Een compacte liveset van zeven eigen nummers met zang, gitaar, bas en toetsen.",
    seeking: "Een drummer die thuis goed voorbereidt, niet alles vol speelt en op korte termijn één repetitie kan doen.",
    style: "Melodieuze pop met een organische, kleine livebezetting.",
    timing: "Eén repetitie eind augustus en twee showcases in september.",
    terms: "Het gaat om één repetitie en twee shows. Als je iets nieuws aan de set toevoegt, spreken we daar vooraf credits over af.",
    published: "17 juli 2026",
  },
  {
    id: "toetsenist-soulformatie",
    ownerId: "raya",
    title: "Toetsenist gezocht voor nieuwe soulformatie",
    type: "Projectformatie",
    formation: "Projectformatie",
    role: "Toetsenist",
    genre: "Soul",
    region: "Den Haag",
    online: false,
    category: "band",
    instrument: "Toetsen",
    summary: "Ik wil een nieuwe soulband beginnen en zoek een toetsenist om de eerste drie songs mee uit te werken.",
    project: "Een nieuwe bezetting die eerst drie songs uitwerkt en daarna beslist over een langer vervolg.",
    seeking: "Iemand met lekkere voicings, goede sounds en zin om samen aan arrangementen te sleutelen.",
    style: "Warme neo-soul, open grooves en veel ruimte voor samenspel.",
    timing: "Drie proefsessies in september in Den Haag.",
    terms: "We proberen eerst drie sessies. Daarna kijken we samen of we als band verder willen. Credits spreken we per song af.",
    published: "16 juli 2026",
  },
  {
    id: "game-composer",
    ownerId: "sophia",
    title: "Componist gezocht voor kleine gamejam",
    type: "Gamejam",
    role: "Componist",
    genre: "Games",
    region: "Eindhoven",
    online: true,
    category: "media",
    instrument: "",
    summary: "We bouwen in één weekend een kleine game en missen nog iemand voor de muziek.",
    project: "Experimentele gamejam met een team van vier makers.",
    seeking: "Een componist die snel kan werken en het leuk vindt als muziek op de speler reageert.",
    style: "Speels, elektronisch en reactief.",
    timing: "Weekend van 18–20 september.",
    terms: "Creatieve gamejam; iedereen behoudt eigen werk en krijgt credits.",
    published: "2 juli 2026",
  },
  {
    id: "guitar-hooks",
    ownerId: "kai",
    title: "Gitarist voor UK-garage hooks",
    type: "Remote sessie",
    role: "Gitarist",
    genre: "Dance",
    region: "Online",
    online: true,
    category: "zang",
    instrument: "Gitaar",
    summary: "Ik heb twee UK-garage schetsen die nog één goede gitaarhook kunnen gebruiken.",
    project: "Twee UK-garage ideeën met veel ruimte in het middengebied.",
    seeking: "Een gitarist die thuis clean kan opnemen en een paar korte, ritmische ideeën wil proberen.",
    style: "Clean, kort en verrassend.",
    timing: "Bestanden uitwisselen in augustus.",
    terms: "We kiezen de hook samen. Voor we iets uitbrengen spreken we credits en gebruik af.",
    published: "1 juli 2026",
  },
];

const communityRooms = [
  { id: "werkbank", label: "De Werkbank", note: "Demo's en feedback", description: "Deel iets waar je nog aan werkt en vertel waar je oren op vastlopen. Luister ook even mee met een ander." },
  { id: "releases", label: "Releases & credits", note: "Nieuw werk en wie eraan meewerkte", description: "Laat horen wat er uit is, vertel hoe het gemaakt is en noem de mensen die eraan meewerkten." },
  { id: "songwriting", label: "Songwriting", note: "Tekst, melodie en compositie", description: "Voor alles wat nog schuurt in een tekst, melodie, akkoord of songvorm." },
  { id: "productie", label: "Productie & mix", note: "Klank, opname en mix", description: "Vergelijk versies, stel een technische vraag of vraag om een paar frisse oren op je mix." },
  { id: "praktijk", label: "Makerspraktijk", note: "Credits, splits en sessie-afspraken", description: "Hoe regel je de dingen rond een sessie of release zonder dat het onnodig ingewikkeld wordt?" },
];

const communityPosts = [
  {
    id: "refrein-zonder-slot",
    type: "feedback",
    typeLabel: "Werk in uitvoering",
    room: "werkbank",
    makerId: "raya",
    title: "Mijn refrein komt nog niet binnen. Horen jullie waarom?",
    excerpt: "De coupletten voelen goed, maar bij het refrein gebeurt er nog te weinig. Ik wil niet gewoon harder gaan zingen. De mix is nog ruw; het gaat me nu vooral om de melodie.",
    prompt: "Wat doet maat drie voor jullie: komt hij eindelijk los of raak ik jullie daar kwijt?",
    age: "42 min",
    createdDays: 0,
    activityHours: 1,
    useful: 6,
    comments: [
      { makerId: "daan", text: "Voor mij zit het vooral in de tekst van maat drie. Die wordt ineens best vaag. Ik zou de melodie laten staan en daar één duidelijkere zin proberen." },
      { makerId: "milan", text: "Die sprong vind ik juist goed. Misschien de basnoot eronder niet meteen laten oplossen? Dan blijft er spanning zonder dat je harder hoeft." },
    ],
    link: { href: "#/oproep/cowriter-pop", label: "Bekijk verwante co-write" },
  },
  {
    id: "release-nachtlijn",
    type: "release",
    typeLabel: "Nieuwe release",
    room: "releases",
    makerId: "nina",
    title: "Nachtlijn is uit — bijna alle ritmes komen van het station",
    excerpt: "We namen piepende deuren, omroepen en een rolkoffer op en bouwden daar de score mee. Best spannend om zoveel weg te laten, maar nu klinkt de trein nog echt als een trein.",
    prompt: "Credits: compositie Nina · sounddesign Sophia · cello Eefje",
    age: "Gisteren",
    createdDays: 1,
    activityHours: 18,
    useful: 11,
    comments: [
      { makerId: "eefje", text: "Die cellolaag was één take. We hebben de adem en boogwissels gewoon laten zitten; zonder die geluiden werd het meteen te netjes." },
      { makerId: "sophia", text: "Voor de zekerheid hebben we alleen onze eigen opnames gebruikt, plus geluid waar we toestemming voor hadden." },
    ],
    link: { href: "#/maker/nina", label: "Ontmoet de maker" },
  },
  {
    id: "credits-voor-de-sessie",
    type: "vraag",
    typeLabel: "Vraag aan makers",
    room: "praktijk",
    makerId: "youssef",
    title: "Hoe beginnen jullie over credits zonder dat het meteen zwaar wordt?",
    excerpt: "Ik wil het wel op tijd bespreken, maar ook niet de sessie openen alsof we bij een advocaat zitten. Hoe gooien jullie dit normaal op tafel?",
    prompt: "Heb je een zin die je zelf echt gebruikt?",
    age: "2 uur",
    createdDays: 0,
    activityHours: 2,
    useful: 9,
    comments: [
      { makerId: "lotte", text: "Ik zeg meestal gewoon: ‘Zullen we straks even opschrijven wie wat heeft gedaan?’ Dan weet iedereen dat het gesprek nog komt, zonder dat je meteen percentages hoeft te roepen." },
    ],
    link: { href: "#/community/room/praktijk", label: "Bekijk Makerspraktijk" },
  },
  {
    id: "maker-lotte",
    type: "maker",
    typeLabel: "Maker in de Hotspot",
    room: "productie",
    makerId: "lotte",
    title: "Maker in de Hotspot: Lotte Janssen",
    excerpt: "Lotte produceert en mixt elektronische muziek in Utrecht. Voor ze iets aanraakt vraagt ze altijd: welk moment van deze track moet blijven hangen? Deze maand zoekt ze iemand om een mix mee uit te wisselen.",
    prompt: "Lottes vaste eerste vraag: wat moet ik voelen als het refrein begint?",
    age: "Deze week",
    createdDays: 5,
    activityHours: 38,
    pinned: true,
    useful: 14,
    comments: [
      { makerId: "jasper", text: "Die vraag hielp bij mijn mix echt. Vooral toen ze vroeg wat er juist níét netjes hoefde te klinken." },
    ],
    link: { href: "#/maker/lotte", label: "Bekijk Lottes profiel" },
  },
  {
    id: "gitaarhooks-gevraagd",
    type: "samenwerking",
    typeLabel: "Samenwerking gezocht",
    room: "productie",
    makerId: "kai",
    title: "Wie wil gitaar proberen op twee UK-garage schetsen?",
    excerpt: "De tracks hebben al genoeg lagen; ik zoek juist één klein gitaarmotief dat blijft hangen. Liefst iemand die thuis een paar droge takes kan opnemen.",
    prompt: "Klinkt dit als iets voor jou? Stuur Kai een bericht via de oproep.",
    age: "3 uur",
    createdDays: 0,
    activityHours: 3,
    useful: 4,
    comments: [
      { makerId: "sem", text: "Zal ik eerst drie korte dingen droog inspelen? Dan kunnen we er eentje kiezen voordat ik helemaal losga met effecten." },
    ],
    link: { href: "#/oproep/guitar-hooks", label: "Open de samenwerkingsoproep" },
  },
  {
    id: "couplet-van-perspectief",
    type: "feedback",
    typeLabel: "Werk in uitvoering",
    room: "songwriting",
    makerId: "jasper",
    title: "Mijn tweede couplet wisselt van perspectief — werkt dat?",
    excerpt: "In het eerste couplet zit je helemaal bij één persoon. In het tweede kijk ik ineens naar de hele kamer. Ik twijfel of dat mooi openbreekt of gewoon voelt alsof er een ander lied begint.",
    prompt: "Blijven jullie bij hetzelfde verhaal, of raak ik je kwijt?",
    age: "13 dagen geleden",
    createdDays: 13,
    activityHours: 120,
    useful: 8,
    comments: [
      { makerId: "raya", text: "Vanaf regel twee werkt het voor mij. De eerste regel klinkt nu wel alsof iemand anders het verhaal overneemt." },
      { makerId: "youssef", text: "Kun je één ding uit het eerste couplet terug laten komen? Een jas, glas, wat dan ook. Dan voelt het nog als dezelfde kamer." },
    ],
    link: { href: "#/oproep/cowriter-pop", label: "Bekijk de co-write" },
  },
  {
    id: "kick-en-bas-kleine-speakers",
    type: "vraag",
    typeLabel: "Vraag aan makers",
    room: "productie",
    makerId: "milan",
    title: "Mijn kick en bas verdwijnen op kleine speakers. Wat checken jullie eerst?",
    excerpt: "In de studio beweegt het lekker, op mijn telefoon blijft er bijna niks over. Ik heb genoeg plugins; ik zoek vooral een simpele manier om dit voortaan eerder te horen.",
    prompt: "Wat is jullie vaste check voor kick en bas?",
    age: "6 weken geleden · gisteren weer actief",
    createdDays: 45,
    activityHours: 24,
    useful: 16,
    comments: [
      { makerId: "lotte", text: "Ik zet hem heel zacht en in mono. Als ik alleen nog de tik hoor, check ik of de bas ook genoeg boventonen heeft." },
      { makerId: "kai", text: "Voor mij helpt één vaste referentietrack meer dan tien verschillende speakers. Dan hoor ik tenminste waar mijn laag afwijkt." },
    ],
    link: { href: "#/maker/milan", label: "Bekijk Milans profiel" },
  },
  {
    id: "release-onderstroom",
    type: "release",
    typeLabel: "Nieuwe release",
    room: "releases",
    makerId: "sophia",
    title: "Onderstroom is uit — uiteindelijk hebben we de helft weggegooid",
    excerpt: "De eerste versie zat behoorlijk vol. Na samen luisteren bleven alleen ritmische ruis, twee stemmen en één lage synth over. Dat bleek genoeg.",
    prompt: "Credits: productie Sophia · vocalen Raya · mix Lotte",
    age: "3 weken geleden",
    createdDays: 21,
    activityHours: 48,
    useful: 12,
    comments: [
      { makerId: "raya", text: "Ik vond die lege ruimte eerst best ongemakkelijk. Nu hoor ik juist iedere ademhaling, dus gelukkig hebben we hem niet weer volgezet." },
    ],
    link: { href: "#/maker/sophia", label: "Ontmoet Sophia" },
  },
  {
    id: "demo-zonder-reactie",
    type: "feedback",
    typeLabel: "Werk in uitvoering",
    room: "werkbank",
    makerId: "sem",
    title: "Meteen zang, of eerst acht maten intro?",
    excerpt: "Ik heb twee versies. De ene begint direct met de eerste zin, de andere laat de gitaren acht maten lopen. Verder zijn ze precies hetzelfde en ik hoor het zelf niet meer.",
    prompt: "Welke versie zou jij niet wegklikken?",
    age: "7 dagen geleden",
    createdDays: 7,
    activityHours: 168,
    useful: 1,
    comments: [],
    link: { href: "#/maker/sem", label: "Bekijk Sems profiel" },
  },
  {
    id: "snare-zonder-transient",
    type: "feedback",
    typeLabel: "Werk in uitvoering",
    room: "werkbank",
    makerId: "milan",
    title: "Is deze snare te zacht geworden?",
    excerpt: "Ik heb de transient flink afgerond. Op mijn koptelefoon vind ik dat fijn, maar op kleine speakers wordt het misschien allemaal een beetje slap.",
    prompt: "Mis je de klap, of krijgt de zang zo juist genoeg ruimte?",
    age: "9 dagen geleden",
    createdDays: 9,
    activityHours: 74,
    useful: 5,
    comments: [],
    link: { href: "#/maker/milan", label: "Bekijk Milans profiel" },
  },
  {
    id: "scratchvocal-of-eindtake",
    type: "feedback",
    typeLabel: "Werk in uitvoering",
    room: "werkbank",
    makerId: "raya",
    title: "De scratchvocal voelt beter dan de eindtake. Wat zouden jullie bewaren?",
    excerpt: "De eerste opname ruist en sommige woorden zitten niet helemaal lekker, maar er zit een haast in die ik daarna niet meer terugkreeg.",
    prompt: "Welke momenten uit de scratch zouden jullie in de nette take plakken?",
    age: "2 weken geleden",
    createdDays: 14,
    activityHours: 96,
    useful: 10,
    comments: [
      { makerId: "nina", text: "Die inademing voor het tweede refrein zou ik sowieso houden. Daardoor geloof ik de inzet meteen, ook als de rest uit de nette take komt." },
      { makerId: "lotte", text: "Kies niet alleen per hele zin. Soms is één woord uit de scratch al genoeg om de nette take weer te laten leven." },
    ],
    link: { href: "#/maker/raya", label: "Bekijk Raya's profiel" },
  },
  {
    id: "release-kleine-uren",
    type: "release",
    typeLabel: "Nieuwe release",
    room: "releases",
    makerId: "sem",
    title: "Kleine uren is uit — we mochten per stuk maar één laag toevoegen",
    excerpt: "We bleven maar nieuwe dingen stapelen. Toen maakten we één regel: per deel mocht ieder van ons maar één nieuw element toevoegen. Ineens was de track af.",
    prompt: "Credits: tekst en zang Sem · productie Kai · mix Milan",
    age: "8 dagen geleden",
    createdDays: 8,
    activityHours: 82,
    useful: 7,
    comments: [
      { makerId: "kai", text: "Die regel scheelde echt. We stopten met alle drie tegelijk problemen oplossen en het was meteen duidelijker wie wat had bedacht." },
    ],
    link: { href: "#/maker/sem", label: "Ontmoet Sem" },
  },
  {
    id: "release-glaslijn",
    type: "release",
    typeLabel: "Nieuwe release",
    room: "releases",
    makerId: "eefje",
    title: "Glaslijn is uit — de cello werd uiteindelijk bijna een drumloop",
    excerpt: "Ik speelde vier korte bewegingen op cello. Sophia knipte ze tot een pulserende laag, maar je hoort de boog en mijn timing nog steeds terug.",
    prompt: "Credits: cello en arrangement Eefje · sounddesign Sophia · mix Lotte",
    age: "17 dagen geleden",
    createdDays: 17,
    activityHours: 132,
    useful: 13,
    comments: [
      { makerId: "sophia", text: "We hebben de aanzet van de boog expres niet strak geknipt. Zodra ik dat wel deed, klonk het meteen als een preset." },
      { makerId: "daan", text: "Leuk dat jullie ook de bronopnames noemen in de credits. Dan hoor je pas hoeveel van die groove al in het spel zat." },
    ],
    link: { href: "#/maker/eefje", label: "Ontmoet Eefje" },
  },
  {
    id: "brug-na-tweede-refrein",
    type: "vraag",
    typeLabel: "Vraag aan makers",
    room: "songwriting",
    makerId: "jasper",
    title: "Brug erbij, of maak ik het lied dan alleen maar langer?",
    excerpt: "Na het tweede refrein weet je wel waar het heen gaat. Ik heb een brug geprobeerd, maar nu zitten er vier verschillende ideeën in één track.",
    prompt: "Wat zouden jullie aan het laatste refrein veranderen zonder een nieuw deel toe te voegen?",
    age: "10 dagen geleden",
    createdDays: 10,
    activityHours: 88,
    useful: 6,
    comments: [
      { makerId: "raya", text: "Wat als je de eerste twee regels van het laatste refrein weglaat? Dan val je er middenin en voelt het toch anders." },
    ],
    link: { href: "#/maker/jasper", label: "Bekijk Jaspers profiel" },
  },
  {
    id: "klinker-op-hoge-noot",
    type: "vraag",
    typeLabel: "Vraag aan makers",
    room: "songwriting",
    makerId: "sem",
    title: "Mijn belangrijkste woord klinkt gekunsteld op de hoge noot",
    excerpt: "De melodie wil daar een lange noot, maar zodra ik het zing klinkt het woord niet meer alsof ik het echt zou zeggen.",
    prompt: "Veranderen jullie dan de melodie, de woordvolgorde of stiekem de klinker?",
    age: "3 weken geleden",
    createdDays: 22,
    activityHours: 164,
    useful: 15,
    comments: [
      { makerId: "raya", text: "Ik probeer eerst de woordvolgorde. Pas als dat niks doet verander ik de klinker een beetje, anders hoor je meteen dat de melodie heeft gewonnen." },
      { makerId: "eefje", text: "Misschien de medeklinker net vóór de tel zetten? Dan kan de klinker lang door, maar blijft het woord wel duidelijk." },
    ],
    link: { href: "#/maker/sem", label: "Bekijk Sems profiel" },
  },
  {
    id: "vocal-doubles-breedte",
    type: "feedback",
    typeLabel: "Werk in uitvoering",
    room: "productie",
    makerId: "lotte",
    title: "Maken deze brede doubles het refrein groter of juist vager?",
    excerpt: "Met brede doubles wordt het refrein groot, maar de woorden schuiven ook naar de zijkant. Ik heb daarom een smallere, donkerdere versie gemaakt.",
    prompt: "In welke versie blijft de hoofdvocal het best overeind?",
    age: "12 dagen geleden",
    createdDays: 12,
    activityHours: 92,
    useful: 9,
    comments: [
      { makerId: "milan", text: "De smallere versie voor mij. Misschien alleen de laatste twee woorden breed trekken? Dan krijg je het effect toch even." },
    ],
    link: { href: "#/maker/lotte", label: "Bekijk Lottes profiel" },
  },
  {
    id: "roommic-in-mono",
    type: "vraag",
    typeLabel: "Vraag aan makers",
    room: "productie",
    makerId: "daan",
    title: "Mijn roommics verdwijnen bijna helemaal in mono. Waar begin ik?",
    excerpt: "In stereo is de diepte precies goed, maar in mono blijft er bijna niks van de ruimte over. Voor ik plugins ga proberen wil ik snappen waar het misgaat.",
    prompt: "Wat zouden jullie als eerste solo zetten of omdraaien?",
    age: "4 weken geleden",
    createdDays: 28,
    activityHours: 204,
    useful: 18,
    comments: [
      { makerId: "milan", text: "Ik zou beginnen met mid plus één roomkanaal. Werkt dat, zet dan pas de tweede room erbij. Dan hoor je snel waar hij wegvalt." },
      { makerId: "sophia", text: "Check ook even wat er echt links en rechts zit. Misschien draagt één kant vooral vertraagde reflecties en eet die in mono de andere op." },
    ],
    link: { href: "#/maker/daan", label: "Bekijk Daans profiel" },
  },
  {
    id: "eerste-kwartier-sessie",
    type: "vraag",
    typeLabel: "Vraag aan makers",
    room: "praktijk",
    makerId: "youssef",
    title: "Wat spreken jullie af voordat een nieuwe sessie echt begint?",
    excerpt: "Als we niks afspreken, blijkt na een uur vaak dat iedereen iets anders dacht te gaan maken. Ik wil ook niet eerst een halve vergadering houden.",
    prompt: "Welke twee of drie vragen stellen jullie altijd aan het begin?",
    age: "11 dagen geleden",
    createdDays: 11,
    activityHours: 90,
    useful: 12,
    comments: [
      { makerId: "nina", text: "Ik vraag wat er vandaag echt af moet, wat nog gewoon een experiment mag zijn en wie aan het eind de bestanden heeft." },
      { makerId: "jasper", text: "Wij kiezen vaak één referentie voor de energie en eentje voor wat we juist níét willen maken. Dat laatste helpt verrassend goed." },
    ],
    link: { href: "#/community/room/praktijk", label: "Bekijk Makerspraktijk" },
  },
  {
    id: "stems-en-versienamen",
    type: "vraag",
    typeLabel: "Vraag aan makers",
    room: "praktijk",
    makerId: "kai",
    title: "Hoe noemen jullie stems zonder na een week gek te worden?",
    excerpt: "We hebben nu drie exports die bijna hetzelfde heten en natuurlijk werkt iemand alweer in de verkeerde versie. Wat is jullie simpele systeem?",
    prompt: "Hoe zetten jullie datum, maker en versie in één bestandsnaam?",
    age: "19 dagen geleden",
    createdDays: 19,
    activityHours: 148,
    useful: 4,
    comments: [],
    link: { href: "#/maker/kai", label: "Bekijk Kai's profiel" },
  },
  {
    id: "splits-na-de-sessie",
    type: "vraag",
    typeLabel: "Vraag aan makers",
    room: "praktijk",
    makerId: "daan",
    title: "Splitsheet na de sessie: wat schrijven jullie sowieso op?",
    excerpt: "Oud onderwerp, maar nog steeds handig: wat leg je dezelfde dag vast zodat je drie maanden later niet hoeft te gokken?",
    prompt: "Uit het archief · met een voorbeeld van een korte recap-mail.",
    age: "2 maanden geleden",
    createdDays: 68,
    activityHours: 240,
    archived: true,
    useful: 23,
    comments: [
      { makerId: "youssef", text: "Wij zetten dezelfde dag de namen, rollen, werktitel en open punten in een mail. Percentages pas als iedereen die mail heeft gezien." },
      { makerId: "lotte", text: "Schrijf ook op wie de sessiebestanden bewaart en wie een volgende versie rondstuurt. Dat scheelt later echt gedoe." },
      { makerId: "nina", text: "Een korte afspraak over samples en veldopnames hoort er voor mij altijd bij." },
    ],
    link: { href: "#/community/room/praktijk", label: "Bekijk Makerspraktijk" },
  },
  {
    id: "eerste-mix-buitenbeeld",
    type: "feedback",
    typeLabel: "Werk in uitvoering",
    room: "werkbank",
    makerId: "lotte",
    title: "Een maand niet geluisterd — dit hoorde ik daarna pas",
    excerpt: "Ik zat zo lang in deze mix dat alles een probleem werd. Na een maand hoorde ik ineens dat maar twee dingen me echt stoorden.",
    prompt: "Uit het archief · hoe resetten jullie je oren als je te lang aan een mix zit?",
    age: "5 weken geleden",
    createdDays: 36,
    activityHours: 310,
    archived: true,
    useful: 18,
    comments: [
      { makerId: "milan", text: "Voor ik pauze neem schrijf ik één zin op over wat de track moet doen. Als ik terugkom luister ik eerst alleen met die zin erbij." },
    ],
    link: { href: "#/maker/lotte", label: "Bekijk Lottes profiel" },
  },
  {
    id: "koorlaag-op-afstand",
    type: "samenwerking",
    typeLabel: "Samenwerking gezocht",
    room: "songwriting",
    makerId: "eefje",
    title: "Met vier mensen op afstand één koor opnemen: zo deden we het",
    excerpt: "We namen allemaal thuis één stem op. Hier staat nog hoe we de gidsstem, bestandsnamen en feedbackrondes hebben aangepakt.",
    prompt: "Uit het archief · het project is klaar, de werkwijze staat er nog.",
    age: "3 maanden geleden",
    createdDays: 94,
    activityHours: 720,
    archived: true,
    useful: 27,
    comments: [
      { makerId: "sophia", text: "Een goede gidsstem en vaste bestandsnamen hielpen veel meer dan nóg een videogesprek." },
      { makerId: "raya", text: "Iedereen stuurde eerst een eigen take zonder de anderen te horen. Pas daarna kozen we samen, anders gaat de eerste versie alles bepalen." },
    ],
    link: { href: "#/makers", label: "Ontdek deelnemende makers" },
  },
];

const communityTypes = [
  { id: "alles", label: "Alles" },
  { id: "feedback", label: "Feedback" },
  { id: "release", label: "Releases" },
  { id: "vraag", label: "Vragen" },
  { id: "maker", label: "Makers" },
  { id: "samenwerking", label: "Samenwerken" },
];

const communityViews = [
  { id: "actief", label: "Recent" },
  { id: "onbeantwoord", label: "Onbeantwoord" },
  { id: "volgend", label: "Volgend" },
  { id: "archief", label: "Archief" },
];

const initialState = () => ({
  user: { id: "demo-user", name: "Jij", initials: "JI" },
  filters: { query: "", category: "", genre: "", role: "", instrument: "", formation: "", region: "" },
  makerQuery: "",
  interest: null,
  blocked: new Set(),
  reports: [],
  closedCalls: {},
  communityFilter: "alles",
  communityView: "actief",
  communityQuery: "",
  followedTopics: new Set(["refrein-zonder-slot", "credits-voor-de-sessie"]),
  followedRooms: new Set(["werkbank", "praktijk"]),
  privateMessages: [],
  openDiscussions: new Set(["refrein-zonder-slot"]),
  usefulPosts: new Set(),
  userCommunityPosts: [],
  communityReplies: {},
});

let state = initialState();
let lastFocusedElement = null;

const main = document.querySelector("#main-content");
const dialog = document.querySelector("#app-dialog");
const dialogContent = document.querySelector("#dialog-content");
const headerActions = document.querySelector("#header-actions");
const toastRegion = document.querySelector("#toast-region");

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function containsDirectContactDetails(value = "") {
  const text = String(value);
  const patterns = [
    /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i,
    /\b(?:https?:\/\/|www\.)\S+/i,
    /\b[a-z0-9-]+\.(?:nl|com|net|org|io|me|music)(?:\/\S*)?\b/i,
    /(?:^|\s)@[a-z0-9._-]{2,}\b/i,
    /\b(?:\+?31|0)\s*(?:\(?\d{1,3}\)?[\s.-]*){2,}\d{2,}\b/i,
    /\b(?:whatsapp|signal|telegram|discord|snapchat|instagram|tiktok|telefoon|bel me|app me)\b/i,
    /\b[\p{L}][\p{L}'-]*(?:straat|laan|weg|plein|gracht|kade|dreef)\s+\d{1,4}[a-z]?\b/iu,
  ];
  return patterns.some((pattern) => pattern.test(text));
}

function withClosedCall(closedCalls, callId, outcome) {
  if (!callId || !String(outcome).trim()) throw new Error("Oproep en uitkomst zijn verplicht.");
  return { ...closedCalls, [callId]: String(outcome).trim() };
}

function closedCallOutcome(closedCalls, callId) {
  return closedCalls[callId] || "";
}

function makerById(id) {
  return makers.find((maker) => maker.id === id);
}

function callById(id) {
  return calls.find((call) => call.id === id);
}

function categoryById(id) {
  return categories.find((category) => category.id === id);
}

function communityRoomById(id) {
  return communityRooms.find((room) => room.id === id);
}

function allCommunityPosts() {
  return [...state.userCommunityPosts, ...communityPosts];
}

function communityPostById(id) {
  return allCommunityPosts().find((post) => post.id === id);
}

function communityComments(post) {
  return [...(post.comments || []), ...(state.communityReplies[post.id] || [])];
}

function unique(items) {
  return [...new Set(items)].sort((a, b) => a.localeCompare(b, "nl"));
}

const imageDimensions = {
  "assets/maker-songwriter-composer.webp": [800, 1000],
  "assets/maker-vocalist-instrumentalist.webp": [800, 1202],
  "assets/maker-producer-beatmaker.webp": [800, 1200],
  "assets/maker-mix-mastering.webp": [800, 1200],
};

function imageSizeAttributes(src) {
  const [width, height] = imageDimensions[src] || [];
  return width && height ? `width="${width}" height="${height}"` : "";
}

function avatar(maker, size = "") {
  if (maker.portrait) {
    return `<img class="avatar avatar-photo ${size}" src="${escapeHtml(maker.portrait)}" ${imageSizeAttributes(maker.portrait)} alt="" loading="lazy" decoding="async" />`;
  }
  return `<span class="avatar ${size}" aria-hidden="true">${escapeHtml(maker.initials)}</span>`;
}

function tags(items) {
  return `<div class="tag-list">${items.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("")}</div>`;
}

function routeInfo() {
  const raw = window.location.hash.replace(/^#\/?/, "");
  const parts = raw.split("/").filter(Boolean);
  return { page: parts[0] || "home", id: parts[1] || null, subId: parts[2] || null };
}

function setDocumentTitle(label) {
  document.title = `${label} — Hotspot MVP`;
}

function renderHeader() {
  headerActions.innerHTML = `
    <a class="button button-secondary" href="#/dashboard">Mijn gesprekken</a>
    <a class="button" href="#/oproepen">Vind een match</a>
  `;

  const { page } = routeInfo();
  const navPage = page === "oproep" ? "oproepen" : page === "maker" ? "makers" : page;
  document.querySelectorAll("[data-nav]").forEach((link) => {
    const active = link.dataset.nav === navPage;
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

function callCard(call) {
  const owner = makerById(call.ownerId);
  const category = categoryById(call.category);
  const closed = Boolean(closedCallOutcome(state.closedCalls, call.id));
  const cardTags = call.formation
    ? [call.formation, call.role, call.genre]
    : [call.role, call.genre, call.online ? "Online mogelijk" : call.region];
  return `
    <article class="call-card">
      <div class="card-top">
        <span class="badge">${escapeHtml(category?.label || "Demo-oproep")}</span>
        <span class="status-pill ${closed ? "warning" : "success"}">${closed ? "Gesloten" : "Open"}</span>
      </div>
      <h3><a href="#/oproep/${call.id}">${escapeHtml(call.title)}</a></h3>
      <p class="muted">${escapeHtml(call.summary)}</p>
      ${tags(cardTags)}
      <div class="card-bottom">
        <div class="maker-row">
          ${avatar(owner)}
          <div>
            <strong>${escapeHtml(owner.name)}</strong>
            <div class="small muted">${escapeHtml(call.region)}</div>
          </div>
        </div>
        <span aria-hidden="true">→</span>
      </div>
    </article>`;
}

function makerCard(maker) {
  const blocked = state.blocked.has(maker.id);
  return `
    <article class="maker-card">
      <div class="card-top">
        <span class="badge">Makerprofiel</span>
        ${blocked ? '<span class="status-pill danger">Geblokkeerd</span>' : ""}
      </div>
      ${maker.portrait ? `<img class="maker-card-image" src="${escapeHtml(maker.portrait)}" ${imageSizeAttributes(maker.portrait)} alt="Fictief portret van ${escapeHtml(maker.name)}" loading="lazy" decoding="async" />` : `<div class="maker-card-placeholder">${avatar(maker, "avatar-lg")}</div>`}
      <h3>${escapeHtml(maker.name)}</h3>
      <p class="meta"><span>${escapeHtml(maker.roles.join(" · "))}</span><span>${escapeHtml(maker.region)}</span></p>
      ${tags(maker.genres)}
      <p class="availability">Beschikbaar voor samenwerking</p>
      <a class="button button-secondary" href="#/maker/${maker.id}">Bekijk profiel</a>
    </article>`;
}

function communityPost(post) {
  const author = post.author || makerById(post.makerId);
  const room = communityRoomById(post.room);
  const discussionOpen = state.openDiscussions.has(post.id);
  const markedUseful = state.usefulPosts.has(post.id);
  const followed = state.followedTopics.has(post.id);
  const usefulCount = post.useful + (markedUseful ? 1 : 0);
  const comments = communityComments(post);
  return `
    <article class="community-post" aria-labelledby="post-${escapeHtml(post.id)}-title">
      <div class="post-rail" aria-hidden="true"><span>${escapeHtml(post.typeLabel)}</span><i></i></div>
      <div class="post-body">
        <header class="post-author">
          <a href="${post.makerId ? `#/maker/${post.makerId}` : "#/community"}" aria-label="Bekijk ${escapeHtml(author.name)}">${avatar(author)}</a>
          <div>
            <strong>${escapeHtml(author.name)}</strong>
            <span>${escapeHtml(author.roles?.join(" · ") || "Demomaker")} · ${escapeHtml(post.age)}${post.archived ? " · archief" : ""}</span>
          </div>
          <a class="room-stamp" href="#/community/room/${escapeHtml(post.room)}">${escapeHtml(room?.label || "Community")}</a>
        </header>
        <h2 id="post-${escapeHtml(post.id)}-title" tabindex="-1"><a href="#/community/topic/${escapeHtml(post.id)}">${escapeHtml(post.title)}</a></h2>
        <p>${escapeHtml(post.excerpt)}</p>
        <p class="post-prompt"><strong>${escapeHtml(post.prompt)}</strong></p>
        <div class="post-actions">
          <button class="post-action" id="useful-${escapeHtml(post.id)}" type="button" data-action="toggle-useful" data-post-id="${escapeHtml(post.id)}" aria-pressed="${markedUseful}">
            <span aria-hidden="true">${markedUseful ? "✓" : "+"}</span> Nuttig <b>${usefulCount}</b>
          </button>
          <button class="post-action" id="discussion-toggle-${escapeHtml(post.id)}" type="button" data-action="toggle-discussion" data-post-id="${escapeHtml(post.id)}" aria-expanded="${discussionOpen}" aria-controls="discussion-${escapeHtml(post.id)}">
            Voorproef <b>${comments.length}</b>
          </button>
          <button class="post-action" type="button" data-action="follow-topic" data-post-id="${escapeHtml(post.id)}" aria-pressed="${followed}">${followed ? "Volgend" : "Volg onderwerp"}</button>
          <a class="post-topic-link" href="#/community/topic/${escapeHtml(post.id)}">Open gesprek <span aria-hidden="true">→</span></a>
          <a class="post-next" href="${escapeHtml(post.link.href)}">${escapeHtml(post.link.label)} <span aria-hidden="true">→</span></a>
        </div>
        <div class="post-discussion ${discussionOpen ? "is-open" : ""}" id="discussion-${escapeHtml(post.id)}" ${discussionOpen ? "" : "hidden"}>
          <div>
            <h3>Gesprek</h3>
            <ol class="comment-list">
              ${comments.map((comment) => {
                const commentMaker = comment.author || makerById(comment.makerId);
                const commentHref = comment.makerId ? `#/maker/${comment.makerId}` : "#/community";
                return `<li>${avatar(commentMaker)}<p><a href="${commentHref}">${escapeHtml(commentMaker.name)}</a><span>${escapeHtml(comment.text)}</span></p></li>`;
              }).join("") || '<li class="comment-empty">Nog niemand gereageerd. Wat hoor jij?</li>'}
            </ol>
            <button class="button button-secondary" type="button" data-action="new-comment" data-post-id="${escapeHtml(post.id)}">Reageer in de demo</button>
          </div>
        </div>
      </div>
    </article>`;
}

function filteredCommunityPosts({ roomId = null } = {}) {
  const query = state.communityQuery.trim().toLocaleLowerCase("nl");
  let posts = allCommunityPosts().filter((post) => {
    const author = post.author || makerById(post.makerId);
    const room = communityRoomById(post.room);
    const haystack = `${post.title} ${post.excerpt} ${post.prompt} ${post.typeLabel} ${author?.name || ""} ${room?.label || ""}`.toLocaleLowerCase("nl");
    return (!roomId || post.room === roomId) && (!query || haystack.includes(query));
  });
  if (state.communityFilter !== "alles") posts = posts.filter((post) => post.type === state.communityFilter);
  if (state.communityView === "archief") posts = posts.filter((post) => post.archived || post.createdDays >= 30);
  else posts = posts.filter((post) => !post.archived);
  if (state.communityView === "volgend") posts = posts.filter((post) => state.followedTopics.has(post.id) || state.followedRooms.has(post.room));
  if (state.communityView === "onbeantwoord") posts = posts.filter((post) => communityComments(post).length === 0);
  const key = state.communityView === "nieuw" ? "createdDays" : "activityHours";
  return posts.sort((a, b) => (a[key] ?? 9999) - (b[key] ?? 9999));
}

function communityViewControls() {
  return `<div class="community-view-tabs" aria-label="Kies welke gesprekken je ziet">
    ${communityViews.map((view) => `<button type="button" data-action="community-view" data-view="${view.id}" aria-pressed="${state.communityView === view.id}">${escapeHtml(view.label)}</button>`).join("")}
  </div>`;
}

function communitySearch() {
  return `<label class="community-search" for="community-search"><span>Zoek in gesprekken</span><input id="community-search" type="search" value="${escapeHtml(state.communityQuery)}" placeholder="Titel, maker, ruimte of onderwerp" /></label>`;
}

function activityLabel(post) {
  const hours = post.activityHours ?? 9999;
  if (hours < 1) return "zojuist";
  if (hours < 24) return `${hours}u geleden`;
  if (hours < 48) return "gisteren";
  return `${Math.round(hours / 24)}d geleden`;
}

function roomStats(roomId) {
  const topics = allCommunityPosts().filter((post) => post.room === roomId);
  const current = topics.filter((post) => !post.archived);
  const latest = [...current].sort((a, b) => (a.activityHours ?? 9999) - (b.activityHours ?? 9999))[0] || topics[0];
  return {
    total: topics.length,
    unanswered: current.filter((post) => communityComments(post).length === 0).length,
    latest,
  };
}

function forumOverviewSection() {
  return `<section class="section forum-overview-section" aria-labelledby="forum-overview-title">
    <div class="shell">
      <div class="section-heading forum-overview-heading">
        <div><span class="eyebrow">Forumoverzicht</span><h2 id="forum-overview-title">Kies een ruimte en zie meteen wat er speelt</h2></div>
        <p>De feed laat zien wat nu leeft. Hier vind je alle vaste ruimtes, open vragen en de laatste activiteit.</p>
      </div>
      <div class="forum-overview-table" role="list">
        ${communityRooms.map((room, index) => {
          const stats = roomStats(room.id);
          return `<a class="forum-overview-row" href="#/community/room/${room.id}" role="listitem">
            <span class="forum-overview-index">${String(index + 1).padStart(2, "0")}</span>
            <span class="forum-overview-name"><strong>${escapeHtml(room.label)}</strong><small>${escapeHtml(room.note)}</small></span>
            <span class="forum-overview-count"><strong>${stats.total}</strong><small>onderwerpen</small></span>
            <span class="forum-overview-count"><strong>${stats.unanswered}</strong><small>zonder antwoord</small></span>
            <span class="forum-overview-latest"><small>Laatste activiteit</small><strong>${escapeHtml(stats.latest?.title || "Nog geen onderwerp")}</strong><em>${stats.latest ? activityLabel(stats.latest) : ""}</em></span>
            <span class="forum-overview-arrow" aria-hidden="true">→</span>
          </a>`;
        }).join("")}
      </div>
    </div>
  </section>`;
}

function forumTopicRow(post) {
  const author = post.author || makerById(post.makerId);
  const comments = communityComments(post);
  const followed = state.followedTopics.has(post.id);
  return `<article class="forum-topic-row">
    <div class="topic-copy">
      <div class="topic-labels"><span>${escapeHtml(post.typeLabel)}</span>${post.pinned ? "<b>Vastgepind</b>" : ""}${comments.length === 0 ? "<b>Open vraag</b>" : ""}${post.archived ? "<b>Archief</b>" : ""}</div>
      <h2><a href="#/community/topic/${escapeHtml(post.id)}">${escapeHtml(post.title)}</a></h2>
      <p>${escapeHtml(post.excerpt)}</p>
      <small>Gestart door ${escapeHtml(author.name)} · ${escapeHtml(post.age)}</small>
    </div>
    <div class="topic-metrics"><span><strong>${comments.length}</strong><small>${comments.length === 1 ? "reactie" : "reacties"}</small></span><span><strong>${activityLabel(post)}</strong><small>laatst actief</small></span></div>
    <button class="topic-follow" type="button" data-action="follow-topic" data-post-id="${escapeHtml(post.id)}" aria-pressed="${followed}">${followed ? "Volgend" : "Volgen"}</button>
  </article>`;
}

function roomTopicSections(posts) {
  if (!posts.length) return '<div class="empty-state"><h2>Niets gevonden</h2><p>Probeer een andere weergave of zoekterm.</p><button class="button button-secondary" type="button" data-action="community-reset">Toon actieve onderwerpen</button></div>';
  const section = (title, note, items) => items.length ? `<section class="forum-topic-section"><div class="forum-section-heading"><div><h2>${escapeHtml(title)}</h2><p>${escapeHtml(note)}</p></div><span>${items.length}</span></div><div class="forum-topic-list">${items.map(forumTopicRow).join("")}</div></section>` : "";
  if (state.communityQuery) return section("Zoekresultaten", "Onderwerpen die bij je zoekterm passen.", posts);
  if (state.communityView === "archief") return section("Archief", "Oudere gesprekken die vindbaar blijven.", posts);
  if (state.communityView === "onbeantwoord") return section("Heeft nog antwoord nodig", "Vragen waar nog niemand inhoudelijk op reageerde.", posts);
  if (state.communityView !== "actief") {
    const label = communityViews.find((view) => view.id === state.communityView)?.label || "Onderwerpen";
    return section(label, "Gesorteerd volgens de gekozen weergave.", posts);
  }
  const pinned = posts.filter((post) => post.pinned);
  const unanswered = posts.filter((post) => !post.pinned && communityComments(post).length === 0);
  const recent = posts.filter((post) => !post.pinned && communityComments(post).length > 0);
  return [
    section("Vastgepind", "Belangrijke gesprekken om mee te beginnen.", pinned),
    section("Heeft nog antwoord nodig", "Help een maker met de eerste inhoudelijke reactie.", unanswered),
    section("Alle onderwerpen", "Gesorteerd op de laatste inhoudelijke activiteit.", recent),
  ].join("");
}

function renderCommunityRoom(roomId) {
  const room = communityRoomById(roomId);
  if (!room) return renderNotFound();
  const posts = filteredCommunityPosts({ roomId });
  const stats = roomStats(room.id);
  const following = state.followedRooms.has(room.id);
  setDocumentTitle(room.label);
  main.innerHTML = `
    <section class="forum-room-hero">
      <div class="shell">
        <nav class="breadcrumbs" aria-label="Kruimelpad"><a href="#/community">Community</a><span aria-hidden="true">/</span><span>${escapeHtml(room.label)}</span></nav>
        <div class="room-hero-line">
          <div><span class="eyebrow">Communityruimte</span><h1>${escapeHtml(room.label)}</h1><p class="lead">${escapeHtml(room.description)}</p><div class="room-glance"><span><strong>${stats.total}</strong> onderwerpen</span><span><strong>${stats.unanswered}</strong> zonder antwoord</span><span>Laatste activiteit <strong>${stats.latest ? activityLabel(stats.latest) : "—"}</strong></span></div></div>
          <div class="room-hero-actions"><button class="button" type="button" data-action="new-community-post" data-room="${escapeHtml(room.id)}">Start een onderwerp</button><button class="button button-secondary" type="button" data-action="follow-room" data-room="${escapeHtml(room.id)}" aria-pressed="${following}">${following ? "Ruimte gevolgd" : "Volg deze ruimte"}</button></div>
        </div>
      </div>
    </section>
    <section class="section forum-browser">
      <div class="shell forum-browser-grid">
        <div>
          <div class="forum-toolbar">${communitySearch()}${communityViewControls()}</div>
          <p class="results-summary" id="community-summary" tabindex="-1" aria-live="polite">${posts.length} ${posts.length === 1 ? "onderwerp" : "onderwerpen"} in ${escapeHtml(room.label)}</p>
          <div class="forum-topic-sections">${roomTopicSections(posts)}</div>
        </div>
        <aside class="forum-room-index"><span class="eyebrow">Andere ruimtes</span>${communityRooms.map((item) => `<a href="#/community/room/${item.id}" ${item.id === room.id ? 'aria-current="page"' : ""}><strong>${escapeHtml(item.label)}</strong><span>${escapeHtml(item.note)}</span></a>`).join("")}</aside>
      </div>
    </section>`;
}

function renderCommunityTopic(topicId) {
  const post = communityPostById(topicId);
  if (!post) return renderNotFound();
  const author = post.author || makerById(post.makerId);
  const room = communityRoomById(post.room);
  const comments = communityComments(post);
  const followed = state.followedTopics.has(post.id);
  const markedUseful = state.usefulPosts.has(post.id);
  const related = allCommunityPosts().filter((item) => item.room === post.room && item.id !== post.id).slice(0, 3);
  setDocumentTitle(post.title);
  main.innerHTML = `
    <section class="forum-topic-hero">
      <div class="shell">
        <nav class="breadcrumbs" aria-label="Kruimelpad"><a href="#/community">Community</a><span aria-hidden="true">/</span><a href="#/community/room/${escapeHtml(room.id)}">${escapeHtml(room.label)}</a><span aria-hidden="true">/</span><span>Onderwerp</span></nav>
      </div>
    </section>
    <section class="section topic-page">
      <div class="shell topic-page-grid">
        <article class="topic-thread">
          <header class="topic-opening">
            <div class="topic-kicker"><span>${escapeHtml(post.typeLabel)}</span>${post.archived ? "<b>Archief</b>" : ""}${post.pinned ? "<b>Uitgelicht</b>" : ""}</div>
            <h1>${escapeHtml(post.title)}</h1>
            <div class="post-author">${post.makerId ? `<a href="#/maker/${post.makerId}" aria-label="Bekijk ${escapeHtml(author.name)}">${avatar(author)}</a>` : avatar(author)}<div><strong>${escapeHtml(author.name)}</strong><span>${escapeHtml(author.roles?.join(" · ") || "Demomaker")} · ${escapeHtml(post.age)}</span></div></div>
            <p class="topic-excerpt">${escapeHtml(post.excerpt)}</p>
            <p class="post-prompt"><strong>${escapeHtml(post.prompt)}</strong></p>
            <div class="topic-actions"><button class="post-action" type="button" data-action="toggle-useful" data-post-id="${escapeHtml(post.id)}" aria-pressed="${markedUseful}">${markedUseful ? "✓ Nuttig" : "+ Nuttig"} <b>${post.useful + (markedUseful ? 1 : 0)}</b></button><button class="post-action" type="button" data-action="follow-topic" data-post-id="${escapeHtml(post.id)}" aria-pressed="${followed}">${followed ? "Onderwerp gevolgd" : "Volg onderwerp"}</button>${post.makerId ? directMessageButton(author, "topic", post.id, `Onderwerp: ${post.title}`, "Stuur auteur een privébericht", "post-action") : ""}<a class="post-next" href="${escapeHtml(post.link.href)}">${escapeHtml(post.link.label)} →</a></div>
          </header>
          <section class="thread-replies" aria-labelledby="thread-heading">
            <div class="thread-heading"><div><span class="eyebrow">Chronologisch gesprek</span><h2 id="thread-heading">${comments.length} ${comments.length === 1 ? "reactie" : "reacties"}</h2></div><button id="topic-reply-button" class="button" type="button" data-action="new-comment" data-post-id="${escapeHtml(post.id)}">Schrijf een reactie</button></div>
            <ol>${comments.map((comment, index) => { const maker = comment.author || makerById(comment.makerId); return `<li><div class="reply-index" aria-hidden="true">${String(index + 1).padStart(2, "0")}</div>${avatar(maker)}<div><p><a href="${comment.makerId ? `#/maker/${comment.makerId}` : "#/community"}">${escapeHtml(maker.name)}</a><span>Reactie ${index + 1}</span></p><div>${escapeHtml(comment.text)}</div></div></li>`; }).join("") || '<li class="thread-empty"><div><strong>Nog geen reacties</strong><p>Wat hoor jij? Laat de eerste reactie achter.</p></div></li>'}</ol>
          </section>
        </article>
        <aside class="topic-sidebar">
          <section><span class="eyebrow">In deze ruimte</span><h2>${escapeHtml(room.label)}</h2><p>${escapeHtml(room.note)}</p><a href="#/community/room/${escapeHtml(room.id)}">Bekijk alle onderwerpen →</a></section>
          <section><span class="eyebrow">Verder lezen</span>${related.map((item) => `<a class="related-topic" href="#/community/topic/${item.id}"><strong>${escapeHtml(item.title)}</strong><span>${communityComments(item).length} reacties</span></a>`).join("")}</section>
          <section class="privacy-context"><strong>Contact blijft privé</strong><p>Reacties zijn openbaar. Hotspot toont nooit automatisch contactinformatie; wie iets wil delen, typt dat zelf in een privégesprek.</p></section>
        </aside>
      </div>
    </section>`;
}

function renderCommunity() {
  setDocumentTitle("Community");
  const posts = filteredCommunityPosts();
  main.innerHTML = `
    <section class="community-hero">
      <div class="shell community-hero-grid">
        <div>
          <span class="eyebrow">De actieve makerscommunity</span>
          <h1>Laat horen waar je aan <span>werkt.</span></h1>
          <p class="lead">Deel waar je aan werkt, stel een vraag of laat een nieuwe release horen. En als het klikt, praat je samen verder.</p>
          <div class="hero-actions">
            <button class="button" type="button" data-action="new-community-post">Deel iets uit je werkplaats</button>
            <a class="button button-secondary" href="#/oproepen">Bekijk samenwerkingen</a>
          </div>
        </div>
        <aside class="community-manifesto" aria-label="Wat maakt de Hotspot-community anders">
          <span>Geen eindeloze feed</span>
          <strong>Laat iets horen en vertel waar je mee zit.</strong>
          <ol>
            <li><b>01</b> Laat werk zien</li>
            <li><b>02</b> Vertel wat je wilt weten</li>
            <li><b>03</b> Luister ook met een ander mee</li>
          </ol>
        </aside>
      </div>
    </section>

    <section class="community-features" aria-label="Uitgelicht in Hotspot">
      <div class="shell feature-spread">
        <article class="feature-release">
          <div class="release-art" aria-hidden="true"><span>NACHT<br />LIJN</span><i>01:47</i></div>
          <div>
            <span class="eyebrow">Release in de Hotspot</span>
            <h2>Hoe stationsgeluid onderdeel werd van de compositie</h2>
            <p>Nina, Sophia en Eefje delen credits, bronmateriaal en drie keuzes achter hun fictieve release <em>Nachtlijn</em>.</p>
            <button class="button button-secondary" type="button" data-action="show-featured-post" data-post-id="release-nachtlijn">Open het maakverhaal</button>
          </div>
        </article>
        <article class="feature-maker">
          <img src="assets/maker-mix-mastering.webp" width="800" height="1200" alt="Fictief portret van Lotte Janssen" loading="lazy" decoding="async" />
          <div>
            <span>Maker in de Hotspot</span>
            <h2>Lotte Janssen</h2>
            <p>“Wat moet ik voelen als het refrein begint?”</p>
            <a href="#/maker/lotte">Ontmoet Lotte →</a>
          </div>
        </article>
      </div>
    </section>

    ${forumOverviewSection()}

    <section class="section community-workshop">
      <div class="shell community-layout">
        <div class="feed-column">
          <div class="feed-heading">
            <div><span class="eyebrow">Feed als voordeur</span><h2>Gesprekken in de werkplaats</h2></div>
            <p id="community-summary" tabindex="-1" aria-live="polite">${posts.length} fictieve onderwerpen · ieder gesprek blijft vindbaar</p>
          </div>
          <div class="forum-toolbar">${communitySearch()}${communityViewControls()}</div>
          <div class="feed-filters" aria-label="Filter bijdragen op soort">
            ${communityTypes.map((type) => `<button id="feed-filter-${type.id}" type="button" data-action="filter-feed" data-filter="${type.id}" aria-pressed="${state.communityFilter === type.id}">${escapeHtml(type.label)}</button>`).join("")}
          </div>
          <div class="community-feed" id="community-feed">
            ${posts.length ? posts.map(communityPost).join("") : '<div class="empty-state"><h2>Hier ligt nu niets op tafel</h2><p>Kies een andere weergave, zoekterm of bijdragevorm.</p><button class="button button-secondary" type="button" data-action="community-reset">Toon actieve onderwerpen</button></div>'}
          </div>
        </div>
        <aside class="rooms-column" aria-label="Communityruimtes">
          <div class="rooms-head"><span aria-hidden="true">⌁</span><div><strong>Ruimtes</strong><small>Volg het gesprek per praktijk</small></div></div>
          <nav aria-label="Thematische communityruimtes">
            ${communityRooms.map((room, index) => `<a id="room-filter-${room.id}" href="#/community/room/${room.id}"><span>${String(index + 1).padStart(2, "0")}</span><strong>${escapeHtml(room.label)}</strong><small>${escapeHtml(room.note)}</small><b>${roomStats(room.id).total}</b></a>`).join("")}
          </nav>
          <div class="room-note">
            <strong>Verder praten?</strong>
            <p>Stuur vanuit een profiel, onderwerp of oproep direct een privébericht.</p>
            <a href="#/makers">Ontdek makers</a>
          </div>
        </aside>
      </div>
    </section>`;
}

function unifiedCommunityPosts() {
  const query = state.communityQuery.trim().toLocaleLowerCase("nl");
  return allCommunityPosts()
    .filter((post) => {
      if (!query && post.archived) return false;
      const author = post.author || makerById(post.makerId);
      const room = communityRoomById(post.room);
      const haystack = `${post.title} ${post.excerpt} ${post.prompt} ${post.typeLabel} ${author?.name || ""} ${room?.label || ""}`.toLocaleLowerCase("nl");
      return !query || haystack.includes(query);
    })
    .sort((a, b) => (a.activityHours ?? 9999) - (b.activityHours ?? 9999));
}

function unifiedFeedItem(post) {
  const author = post.author || makerById(post.makerId);
  const room = communityRoomById(post.room);
  const comments = communityComments(post);
  return `<article class="unified-feed-item">
    <a class="unified-feed-avatar" href="${post.makerId ? `#/maker/${post.makerId}` : "#/community"}" aria-label="Bekijk ${escapeHtml(author.name)}">${avatar(author, "small")}</a>
    <div class="unified-feed-copy">
      <p><strong>${escapeHtml(author.name)}</strong><span> in </span><a href="#/community/room/${room.id}">${escapeHtml(room.label)}</a><span> · ${activityLabel(post)}</span></p>
      <h3><a href="#/community/topic/${post.id}">${escapeHtml(post.title)}</a></h3>
      <p class="unified-feed-excerpt">${escapeHtml(post.excerpt)}</p>
    </div>
    <a class="unified-feed-replies" href="#/community/topic/${post.id}"><strong>${comments.length}</strong><span>${comments.length === 1 ? "reactie" : "reacties"}</span></a>
  </article>`;
}

function unifiedActivitySection() {
  const results = unifiedCommunityPosts();
  const visible = results.slice(0, state.communityQuery ? 8 : 4);
  const title = state.communityQuery ? "Zoekresultaten" : "Nu actief";
  const note = state.communityQuery ? `${results.length} ${results.length === 1 ? "onderwerp gevonden" : "onderwerpen gevonden"}` : "Nieuwe onderwerpen en recente reacties uit alle ruimtes.";
  return `<section class="unified-activity" aria-labelledby="unified-activity-title">
    <header class="classic-section-head"><div><h2 id="unified-activity-title">${title}</h2><p id="community-summary" aria-live="polite">${note}</p></div>${state.communityQuery ? '<button class="text-button" type="button" data-action="community-reset">Wis zoekopdracht</button>' : '<a class="section-more" href="#/community/recent">Bekijk alles →</a>'}</header>
    <div class="unified-feed-list">${visible.length ? visible.map(unifiedFeedItem).join("") : '<div class="empty-state"><h2>Niets gevonden</h2><p>Probeer een andere maker, ruimte of zoekterm.</p><button class="button button-secondary" type="button" data-action="community-reset">Wis zoekopdracht</button></div>'}</div>
  </section>`;
}

function classicForumIndex() {
  return `<section class="classic-forum-index" aria-labelledby="classic-forum-rooms">
    <header class="classic-section-head"><div><h2 id="classic-forum-rooms">Ruimtes</h2><p>Kies een vakgebied en bekijk alle gesprekken.</p></div><span>${communityRooms.length} ruimtes</span></header>
    <div class="classic-forum-table" role="table" aria-label="Communityruimtes">
      <div class="classic-forum-table-head" role="row"><span role="columnheader">Ruimte</span><span role="columnheader">Onderwerpen</span><span role="columnheader">Open vragen</span><span role="columnheader">Laatste bericht</span></div>
      <div role="rowgroup">
        ${communityRooms.map((room) => {
          const stats = roomStats(room.id);
          const latestAuthor = stats.latest?.author || makerById(stats.latest?.makerId);
          return `<div class="classic-forum-room" role="row">
            <div class="classic-room-name" role="cell"><a href="#/community/room/${room.id}">${escapeHtml(room.label)}</a><span>${escapeHtml(room.note)}</span></div>
            <div class="classic-room-number" role="cell"><strong>${stats.total}</strong><span>onderwerpen</span></div>
            <div class="classic-room-number" role="cell"><strong>${stats.unanswered}</strong><span>zonder antwoord</span></div>
            <div class="classic-room-latest" role="cell">${stats.latest ? `<a href="#/community/topic/${stats.latest.id}">${escapeHtml(stats.latest.title)}</a><span>${activityLabel(stats.latest)}${latestAuthor ? ` · ${escapeHtml(latestAuthor.name)}` : ""}</span>` : "<span>Nog geen onderwerp</span>"}</div>
          </div>`;
        }).join("")}
      </div>
    </div>
  </section>`;
}

function classicTopicRow(post, { showRoom = false } = {}) {
  const author = post.author || makerById(post.makerId);
  const room = communityRoomById(post.room);
  const comments = communityComments(post);
  const statusLabel = post.pinned ? "Vastgepind onderwerp" : comments.length === 0 ? "Vraag zonder antwoord" : "Onderwerp";
  return `<article class="classic-topic-row">
    <span class="classic-topic-status ${post.pinned ? "is-pinned" : comments.length === 0 ? "is-open" : ""}" aria-label="${statusLabel}" title="${statusLabel}">${post.pinned ? "★" : "●"}</span>
    <div class="classic-topic-copy">
      <div class="classic-topic-labels"><span>${escapeHtml(post.typeLabel)}</span>${showRoom && room ? `<a href="#/community/room/${room.id}">${escapeHtml(room.label)}</a>` : ""}${comments.length === 0 ? "<b>Open vraag</b>" : ""}${post.archived ? "<b>Archief</b>" : ""}</div>
      <h2><a href="#/community/topic/${escapeHtml(post.id)}">${escapeHtml(post.title)}</a></h2>
      <small>Gestart door ${escapeHtml(author.name)} · ${escapeHtml(post.age)}</small>
    </div>
    <div class="classic-topic-replies"><strong>${comments.length}</strong><small>${comments.length === 1 ? "reactie" : "reacties"}</small></div>
    <div class="classic-topic-last"><strong>${activityLabel(post)}</strong><small>${showRoom && room ? escapeHtml(room.label) : "laatste activiteit"}</small></div>
  </article>`;
}

function classicTopicTable(posts, options = {}) {
  if (!posts.length) return '<div class="empty-state"><h2>Niets gevonden</h2><p>Probeer een andere weergave of zoekterm.</p><button class="button button-secondary" type="button" data-action="community-reset">Toon recente onderwerpen</button></div>';
  const sorted = [...posts].sort((a, b) => Number(Boolean(b.pinned)) - Number(Boolean(a.pinned)) || (a.activityHours ?? 9999) - (b.activityHours ?? 9999));
  return `<section class="classic-topic-table" aria-label="Onderwerpen">
    <div class="classic-topic-head" aria-hidden="true"><span>Onderwerp</span><span>Reacties</span><span>Laatste bericht</span></div>
    <div>${sorted.map((post) => classicTopicRow(post, options)).join("")}</div>
  </section>`;
}

function classicForumToolbar() {
  return `<div class="classic-forum-toolbar">${communitySearch()}${communityViewControls()}</div>`;
}

function classicForumHighlights() {
  return `<section class="classic-highlights" aria-labelledby="classic-highlights-title">
    <header class="classic-section-head"><div><h2 id="classic-highlights-title">Uitgelicht</h2><p>Twee redactionele ingangen, buiten de forumlijst.</p></div></header>
    <div class="classic-highlight-list">
      <a href="#/community/topic/release-nachtlijn"><span class="classic-highlight-type">Release</span><strong>Nachtlijn: stationsgeluid als compositie</strong><small>Open het maakverhaal →</small></a>
      <a href="#/maker/lotte"><span class="classic-highlight-type">Maker</span><strong>Lotte Janssen luistert met je mix mee</strong><small>Bekijk het profiel →</small></a>
    </div>
  </section>`;
}

function renderClassicCommunity() {
  setDocumentTitle("Community");
  main.innerHTML = `<section class="classic-forum-page"><div class="shell">
    <header class="classic-forum-page-head"><div><span class="eyebrow">Makersforum</span><h1>Community</h1><p>Zie wat er nu gebeurt en vind blijvende gesprekken per ruimte.</p></div><button class="button" type="button" data-action="new-community-post">Nieuw onderwerp</button></header>
    <div class="unified-community-search">${communitySearch()}</div>
    ${unifiedActivitySection()}
    ${classicForumIndex()}
    ${classicForumHighlights()}
  </div></section>`;
}

function renderClassicCommunityRecent() {
  setDocumentTitle("Alle activiteit");
  const posts = filteredCommunityPosts();
  main.innerHTML = `<section class="classic-forum-page"><div class="shell">
    <nav class="breadcrumbs" aria-label="Kruimelpad"><a href="#/community">Community</a><span aria-hidden="true">/</span><span>Alle activiteit</span></nav>
    <header class="classic-forum-page-head is-compact"><div><span class="eyebrow">Makersforum</span><h1>Alle activiteit</h1><p>Alle gesprekken uit de community, met filters voor open en gevolgde onderwerpen.</p></div><button class="button" type="button" data-action="new-community-post">Nieuw onderwerp</button></header>
    ${classicForumToolbar()}
    <p class="results-summary" id="community-summary" tabindex="-1" aria-live="polite">${posts.length} ${posts.length === 1 ? "onderwerp" : "onderwerpen"}</p>
    ${classicTopicTable(posts, { showRoom: true })}
  </div></section>`;
}

function renderClassicCommunityRoom(roomId) {
  const room = communityRoomById(roomId);
  if (!room) return renderNotFound();
  const posts = filteredCommunityPosts({ roomId });
  const stats = roomStats(room.id);
  const following = state.followedRooms.has(room.id);
  setDocumentTitle(room.label);
  main.innerHTML = `<section class="classic-forum-page"><div class="shell">
    <nav class="breadcrumbs" aria-label="Kruimelpad"><a href="#/community">Community</a><span aria-hidden="true">/</span><span>${escapeHtml(room.label)}</span></nav>
    <header class="classic-forum-page-head is-compact"><div><span class="eyebrow">Communityruimte</span><h1>${escapeHtml(room.label)}</h1><p>${escapeHtml(room.description)}</p><span class="classic-room-summary">${stats.total} onderwerpen · ${stats.unanswered} zonder antwoord · laatst actief ${stats.latest ? activityLabel(stats.latest) : "—"}</span></div><div class="classic-forum-actions"><button class="button" type="button" data-action="new-community-post" data-room="${escapeHtml(room.id)}">Nieuw onderwerp</button><button class="text-button" type="button" data-action="follow-room" data-room="${escapeHtml(room.id)}" aria-pressed="${following}">${following ? "✓ Ruimte gevolgd" : "+ Volg ruimte"}</button></div></header>
    ${classicForumToolbar()}
    <p class="results-summary" id="community-summary" tabindex="-1" aria-live="polite">${posts.length} ${posts.length === 1 ? "onderwerp" : "onderwerpen"}</p>
    ${classicTopicTable(posts)}
  </div></section>`;
}

function renderHome() {
  setDocumentTitle("Van eerste idee naar gezamenlijke demo");
  const featured = calls.slice(0, 3);
  main.innerHTML = `
    <section class="hero">
      <div class="shell hero-grid">
        <div>
          <span class="eyebrow">Van eerste idee naar gezamenlijke demo</span>
          <h1>Laat horen wat er ligt. <span>Vind wie er ontbreekt.</span></h1>
          <p class="lead">Hotspot helpt muziekmakers zelfstandig de juiste samenwerking te vinden: deel een begrensde luisterversie, benoem de ontbrekende bijdrage en kies zelf met wie je verder maakt.</p>
          <div class="hero-actions">
            <a class="button" href="#/oproepen">Vind een samenwerking <span aria-hidden="true">→</span></a>
            <a class="button button-secondary" href="#/oproep/cowriter-pop">Luister naar open werk</a>
          </div>
          <div class="genre-shortcuts" aria-label="Ontdek oproepen per genre">
            <span>Begin bij je geluid</span>
            ${["Pop", "R&B", "Electronic", "Afropop", "Neoklassiek"].map((genre) => `<button type="button" data-action="filter-genre" data-genre="${escapeHtml(genre)}">${escapeHtml(genre)}</button>`).join("")}
          </div>
          <div class="trust-line" aria-label="Belangrijkste productafspraken">
            <span>Openbaar lezen en luisteren</span>
            <span>Selfservice samenwerken</span>
            <span>Privé afstemmen vanaf 18 jaar</span>
          </div>
        </div>
        <div class="hero-visual" aria-label="Redactioneel conceptbeeld en uitgelichte demo-oproep">
          <img src="assets/hotspot-hero-editorial.webp" width="1200" height="568" alt="Fictieve muziekmakers in een warme, redactionele studiosetting" fetchpriority="high" decoding="async" />
          <div class="hero-card">
            ${callCard(calls[0])}
          </div>
        </div>
      </div>
    </section>

    <section class="section category-section">
      <div class="shell">
        <div class="section-heading">
          <div><span class="eyebrow">Wat wil je samen maken?</span><h2>Zeven routes, één creatieve gemeenschap</h2></div>
          <p>Een rubriek beschrijft de samenwerking. Genre en rol helpen je daarna de juiste oproep te vinden.</p>
        </div>
        <div class="category-grid">
          ${categories.map((category) => `<button class="category-link" type="button" data-action="filter-category" data-category="${category.id}"><span>${category.mark}</span><strong>${escapeHtml(category.label)}</strong><small>${escapeHtml(category.note)}</small><i aria-hidden="true">↗</i></button>`).join("")}
        </div>
      </div>
    </section>

    <section class="section hotspot-section">
      <div class="shell hotspot-editorial">
        <article class="maker-spotlight">
          <span class="eyebrow">Maker in de Hotspot</span>
          <figure class="spotlight-portrait">
            <img src="assets/maker-mix-mastering.webp" width="800" height="1200" alt="Fictief portret van mix- en mastering engineer Lotte Janssen" loading="lazy" decoding="async" />
            <figcaption>mix · master · produce</figcaption>
          </figure>
          <div class="spotlight-copy">
            <span class="badge">Fictief demoprofiel</span>
            <h2>Lotte Janssen</h2>
            <p class="lead">“Ik wil niet alleen de laatste hand leggen, maar als maker echt iets aan een track toevoegen.”</p>
            ${tags(["Electronic", "House", "Mix engineer"])}
            <a class="button button-secondary" href="#/maker/lotte">Ontmoet Lotte</a>
          </div>
        </article>
        <article class="call-spotlight">
          <span class="eyebrow">Oproep in de Hotspot</span>
          <span class="spotlight-index">#01</span>
          <h2>Co-writer gezocht voor Nederlandstalige pop</h2>
          <p>Een melodieuze track over opnieuw beginnen zoekt een tweede pen en een frisse melodische blik.</p>
          <dl>
            <div><dt>Genre</dt><dd>Pop</dd></div>
            <div><dt>Gezocht</dt><dd>Songwriter</dd></div>
            <div><dt>Werkwijze</dt><dd>Amsterdam / online</dd></div>
          </dl>
          <a class="button" href="#/oproep/cowriter-pop">Bekijk de oproep <span aria-hidden="true">→</span></a>
          <p class="small">Voorbeeldinhoud — geen echte oproep.</p>
        </article>
      </div>
    </section>

    <section class="stats-strip" aria-label="Inhoud van deze interactieve preview">
      <div class="shell stats-grid">
        <div class="stat"><strong>5</strong><span>soorten berichten</span></div>
        <div class="stat"><strong>5</strong><span>thematische werkruimtes</span></div>
        <div class="stat"><strong>1</strong><span>route van gesprek naar samenwerking</span></div>
      </div>
    </section>

    <section class="section">
      <div class="shell">
        <div class="section-heading">
          <div><span class="eyebrow">Eén doorlopende route</span><h2>Van gesprek naar nieuw werk</h2></div>
          <p>Je kunt eerst horen waar iemand mee bezig is. Daarna reageer je openbaar of stuur je een privébericht als je samen verder wilt.</p>
        </div>
        <div class="step-grid">
          <article class="step"><div class="step-number">1</div><h3>Laat horen waar je mee bezig bent</h3><p class="muted">Deel een demo, release of vraag en vertel kort waar je reactie op wilt.</p></article>
          <article class="step"><div class="step-number">2</div><h3>Luister met elkaar mee</h3><p class="muted">Zeg wat je hoort, stel een vraag of vertel wat je zelf zou proberen.</p></article>
          <article class="step"><div class="step-number">3</div><h3>Praat privé verder</h3><p class="muted">Stuur vanuit een oproep direct een privébericht. De ontvanger kan antwoorden, negeren, dempen, melden of blokkeren.</p></article>
        </div>
      </div>
    </section>

    <section class="section section-tint">
      <div class="shell">
        <div class="section-heading">
          <div><span class="eyebrow">Meer om te ontdekken</span><h2>Mensen om mee te maken</h2></div>
          <a class="button button-secondary" href="#/oproepen">Bekijk alle oproepen</a>
        </div>
        <div class="call-grid">${featured.map(callCard).join("")}</div>
      </div>
    </section>`;
}

function filterOptions(values, selected, label) {
  return `<option value="">${label}</option>${values
    .map((value) => `<option value="${escapeHtml(value)}" ${selected === value ? "selected" : ""}>${escapeHtml(value)}</option>`)
    .join("")}`;
}

function categoryFilterOptions(selected) {
  return `<option value="">Alle rubrieken</option>${categories
    .map((category) => `<option value="${category.id}" ${selected === category.id ? "selected" : ""}>${escapeHtml(category.label)}</option>`)
    .join("")}`;
}

function filteredCalls() {
  const { query, category, genre, role, instrument, formation, region } = state.filters;
  const normalized = query.trim().toLocaleLowerCase("nl");
  return calls.filter((call) => {
    const owner = makerById(call.ownerId);
    const categoryInfo = categoryById(call.category);
    const haystack = `${call.title} ${call.summary} ${call.role} ${call.genre} ${call.instrument} ${call.formation || ""} ${categoryInfo?.label || ""} ${call.region} ${owner.name}`.toLocaleLowerCase("nl");
    return (
      (!normalized || haystack.includes(normalized)) &&
      (!category || call.category === category) &&
      (!genre || call.genre === genre) &&
      (!role || call.role === role) &&
      (!instrument || call.instrument === instrument) &&
      (!formation || call.formation === formation) &&
      (!region || (region === "Online" ? call.online : call.region === region))
    );
  });
}

function renderCallResults() {
  const resultNode = document.querySelector("#call-results");
  const summaryNode = document.querySelector("#call-results-summary");
  if (!resultNode || !summaryNode) return;
  const results = filteredCalls();
  summaryNode.textContent = `${results.length} van ${calls.length} oproepen gevonden`;
  resultNode.innerHTML = results.length
    ? results.map(callCard).join("")
    : `<div class="empty-state"><h2>Geen oproepen gevonden</h2><p>Pas één of meer filters aan.</p><button class="button button-secondary" type="button" data-action="clear-filters">Wis filters</button></div>`;
}

function renderCalls() {
  setDocumentTitle("Samenwerkingsoproepen");
  const roles = unique(calls.map((call) => call.role));
  const genres = unique(calls.map((call) => call.genre));
  const instruments = unique(calls.map((call) => call.instrument).filter(Boolean));
  const formations = unique(calls.map((call) => call.formation).filter(Boolean));
  const regions = unique(["Online", ...calls.map((call) => call.region).filter((region) => region !== "Online")]);
  const showInstrument = ["zang", "live", "band"].includes(state.filters.category) || ["Bassist", "Cellist", "Drummer", "Gitarist", "Toetsenist", "Vocalist"].includes(state.filters.role);
  const showFormation = state.filters.category === "band";
  main.innerHTML = `
    <section class="page-hero">
      <div class="shell">
        <span class="eyebrow">Openbaar en genre-overstijgend</span>
        <h1>Werk samen</h1>
        <p class="lead">Zoek op genre, rol of regio en kijk wie er iemand nodig heeft. Zie je iets dat past? Stuur de maker meteen een bericht.</p>
      </div>
    </section>
    <section class="section" style="padding-top: 0">
      <div class="shell">
        <form class="filters" id="call-filters" aria-label="Filter samenwerkingsoproepen">
          <div class="field">
            <label for="query">Zoeken</label>
            <input id="query" name="query" type="search" value="${escapeHtml(state.filters.query)}" placeholder="Titel, maker, rol of plaats" />
          </div>
          <div class="field genre-field"><label for="genre">Genre</label><select id="genre" name="genre">${filterOptions(genres, state.filters.genre, "Alle genres")}</select></div>
          <div class="field"><label for="category">Rubriek</label><select id="category" name="category">${categoryFilterOptions(state.filters.category)}</select></div>
          <div class="field"><label for="role">Gezochte rol</label><select id="role" name="role">${filterOptions(roles, state.filters.role, "Alle rollen")}</select></div>
          <div class="field instrument-filter ${showInstrument ? "" : "is-hidden"}"><label for="instrument">Instrument <span class="optional-label">optioneel</span></label><select id="instrument" name="instrument" ${showInstrument ? "" : "disabled"}>${filterOptions(instruments, state.filters.instrument, "Alle instrumenten")}</select></div>
          <div class="field formation-filter ${showFormation ? "" : "is-hidden"}"><label for="formation">Samenwerkingsvorm</label><select id="formation" name="formation" ${showFormation ? "" : "disabled"}>${filterOptions(formations, state.filters.formation, "Alle vormen")}</select></div>
          <div class="field"><label for="region">Regio</label><select id="region" name="region">${filterOptions(regions, state.filters.region, "Alle regio's")}</select></div>
        </form>
        <p class="results-summary" id="call-results-summary" aria-live="polite"></p>
        <div class="call-grid" id="call-results"></div>
      </div>
    </section>`;
  renderCallResults();
}

function renderMakers() {
  setDocumentTitle("Ontdek makers");
  const query = state.makerQuery.trim().toLocaleLowerCase("nl");
  const filtered = makers.filter((maker) =>
    `${maker.name} ${maker.roles.join(" ")} ${maker.genres.join(" ")} ${maker.region}`.toLocaleLowerCase("nl").includes(query),
  );
  main.innerHTML = `
    <section class="page-hero">
      <div class="shell">
        <span class="eyebrow">Openbare voorbeeldprofielen</span>
        <h1>Ontdek makers</h1>
        <p class="lead">Bekijk rol, maximaal drie genres, globale regio en beschikbaarheid. Privé contactgegevens blijven verborgen.</p>
      </div>
    </section>
    <section class="section" style="padding-top:0">
      <div class="shell">
        <div class="filters" style="grid-template-columns:1fr">
          <div class="field">
            <label for="maker-search">Zoek op naam, rol, genre of regio</label>
            <input id="maker-search" type="search" value="${escapeHtml(state.makerQuery)}" placeholder="Bijvoorbeeld producer, pop of Utrecht" />
          </div>
        </div>
        <p class="results-summary" aria-live="polite">${filtered.length} van ${makers.length} makersprofielen gevonden</p>
        <div class="maker-grid" id="maker-results">
          ${filtered.length ? filtered.map(makerCard).join("") : '<div class="empty-state"><h2>Geen makers gevonden</h2><p>Probeer een andere zoekterm.</p></div>'}
        </div>
      </div>
    </section>`;
}

function directMessageButton(owner, sourceType, sourceId, sourceLabel, label = "Stuur privébericht", className = "button") {
  const isBlocked = state.blocked.has(owner.id);
  const existing = state.interest && state.interest.targetMakerId === owner.id && state.interest.status === "open";
  if (isBlocked) return `<button class="button" type="button" disabled>Contact geblokkeerd</button>`;
  if (existing) return `<a class="button" href="#/dashboard">Open privégesprek</a>`;
  return `<button class="${escapeHtml(className)}" type="button" data-action="open-conversation" data-target-maker-id="${escapeHtml(owner.id)}" data-source-type="${escapeHtml(sourceType)}" data-source-id="${escapeHtml(sourceId)}" data-source-label="${escapeHtml(sourceLabel)}">${escapeHtml(label)}</button>`;
}

function interestButton(call, owner) {
  if (closedCallOutcome(state.closedCalls, call.id)) return `<button class="button" type="button" disabled>Oproep gesloten</button>`;
  return directMessageButton(owner, "call", call.id, `Oproep: ${call.title}`);
}

function renderCallDetail(id) {
  const call = callById(id);
  if (!call) return renderNotFound();
  const owner = makerById(call.ownerId);
  const blocked = state.blocked.has(owner.id);
  const callOutcome = closedCallOutcome(state.closedCalls, call.id);
  setDocumentTitle(call.title);
  main.innerHTML = `
    <section class="page-hero">
      <div class="shell"><a href="#/oproepen">← Alle oproepen</a></div>
    </section>
    <div class="shell detail-layout">
      <article class="panel">
        <div class="card-top">
          <span class="badge">Fictieve demo-oproep</span>
          <span class="status-pill ${callOutcome ? "warning" : "success"}">${callOutcome ? "Gesloten" : "Open"}</span>
        </div>
        <h1 class="detail-title">${escapeHtml(call.title)}</h1>
        <div class="detail-author">
          ${avatar(owner, "avatar-lg")}
          <div>
            <strong>${escapeHtml(owner.name)}</strong>
            <div class="meta"><span>${escapeHtml(owner.roles.join(" · "))}</span><span>${escapeHtml(owner.region)}</span></div>
          </div>
        </div>
        ${blocked ? '<div class="notice danger"><strong>Je hebt deze maker geblokkeerd.</strong><br />Nieuwe privéberichten en notificaties zijn gestopt.</div>' : ""}
        <h2>Over het project</h2>
        <ul class="fact-list">
          <li><strong>Project</strong><span>${escapeHtml(call.project)}</span></li>
          <li><strong>Wat ik zoek</strong><span>${escapeHtml(call.seeking)}</span></li>
          <li><strong>Stijl</strong><span>${escapeHtml(call.style)}</span></li>
          <li><strong>Planning</strong><span>${escapeHtml(call.timing)}</span></li>
          <li><strong>Afspraken</strong><span>${escapeHtml(call.terms)}</span></li>
        </ul>
        ${tags([call.type, call.role, call.genre, call.online ? "Online mogelijk" : call.region])}
        <div class="privacy-note"><strong>Privébericht</strong><br />Je bericht opent direct een gesprek. Hotspot vult geen e-mailadres of telefoonnummer in.</div>
        <div class="action-stack">
          ${interestButton(call, owner)}
          <button class="button button-secondary" type="button" data-action="open-report" data-target-type="oproep" data-target-id="${call.id}">Meld deze oproep</button>
        </div>
      </article>
      <aside aria-label="Over de maker en oproep">
        <section class="panel">
          <h2>Over ${escapeHtml(owner.name.split(" ")[0])}</h2>
          <p>${escapeHtml(owner.bio)}</p>
          ${tags(owner.genres)}
          <a class="button button-secondary" href="#/maker/${owner.id}">Bekijk openbaar profiel</a>
        </section>
        <section class="panel">
          <h2>Projectfeiten</h2>
          <ul class="fact-list">
            <li><strong>Gepubliceerd</strong><span>${escapeHtml(call.published)}</span></li>
            <li><strong>Locatie</strong><span>${escapeHtml(call.region)}</span></li>
            <li><strong>Werkwijze</strong><span>${call.online ? "Online mogelijk" : "Op locatie"}</span></li>
          </ul>
        </section>
      </aside>
    </div>`;
}

function renderMakerDetail(id) {
  const maker = makerById(id);
  if (!maker) return renderNotFound();
  const makerCalls = calls.filter((call) => call.ownerId === maker.id);
  const blocked = state.blocked.has(maker.id);
  setDocumentTitle(maker.name);
  main.innerHTML = `
    <section class="page-hero"><div class="shell"><a href="#/makers">← Alle makers</a></div></section>
    <div class="shell detail-layout">
      <article class="panel">
        <div class="profile-hero">
          ${avatar(maker, "avatar-xl")}
          <div>
            <span class="badge">Fictief demoprofiel</span>
            <h1>${escapeHtml(maker.name)}</h1>
            <p class="meta"><span>${escapeHtml(maker.roles.join(" · "))}</span><span>${escapeHtml(maker.region)}</span></p>
            <p class="availability">Beschikbaar voor samenwerking</p>
          </div>
        </div>
        ${blocked ? '<div class="notice danger"><strong>Geblokkeerd.</strong> Deze maker kan geen nieuwe privéacties met jou starten.</div>' : ""}
        <hr style="border:0;border-top:1px solid var(--line);margin:1.7rem 0" />
        <h2>Over mij</h2>
        <p class="lead">${escapeHtml(maker.bio)}</p>
        ${tags(maker.genres)}
        <p class="small muted">De muzieklink is fictief en opent geen externe website.</p>
        <button class="button button-secondary" type="button" data-action="fake-music" data-maker-name="${escapeHtml(maker.name)}">Bekijk fictieve muzieklink</button>
        <div class="profile-actions">
          ${directMessageButton(maker, "profile", maker.id, `Profiel van ${maker.name}`)}
          <button class="button ${blocked ? "button-secondary" : "button-danger"}" type="button" data-action="toggle-block" data-maker-id="${maker.id}">${blocked ? "Blokkade opheffen" : "Blokkeer maker"}</button>
          <button class="button button-secondary" type="button" data-action="open-report" data-target-type="profiel" data-target-id="${maker.id}">Meld profiel</button>
        </div>
      </article>
      <aside>
        <section class="panel">
          <h2>Openbare informatie</h2>
          <ul class="fact-list">
            <li><strong>Naam</strong><span>Echte naam of artiestennaam</span></li>
            <li><strong>Regio</strong><span>${escapeHtml(maker.region)} — geen exact adres</span></li>
            <li><strong>Contact</strong><span>Niet openbaar</span></li>
          </ul>
        </section>
      </aside>
    </div>
    ${makerCalls.length ? `<section class="section section-tint"><div class="shell"><div class="section-heading"><div><span class="eyebrow">Van deze maker</span><h2>Openstaande oproep</h2></div></div><div class="call-grid">${makerCalls.map(callCard).join("")}</div></div></section>` : ""}`;
}

function statusTimeline() {
  const hasInterest = Boolean(state.interest);
  const open = hasInterest && state.interest.status === "open";
  const items = [
    [hasInterest, "Privébericht verstuurd", hasInterest ? state.interest.motivation : "Nog niet verstuurd"],
    [open, "Gesprek geopend", open ? "Je kunt direct verder praten" : "Gesprek gesloten"],
  ];
  return `<ol class="timeline">${items.map(([done, title, text]) => `<li class="${done ? "" : "pending"}"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(text)}</span></li>`).join("")}</ol>`;
}

function privateConversationPanel() {
  if (!state.interest?.chatOpen || state.interest.status !== "open") return "";
  const owner = makerById(state.interest.targetMakerId);
  if (!owner) return "";
  return `
    <section class="panel wide">
      <div class="contact-release"><strong>Gesprek met ${escapeHtml(owner.name)}</strong><p>Alleen jullie zien dit gesprek. Hotspot vult geen e-mailadres of telefoonnummer in.</p></div>
      <section class="private-chat" aria-labelledby="private-chat-title">
        <div><span class="eyebrow">Alleen beide makers</span><h3 id="private-chat-title">Privégesprek met ${escapeHtml(owner.name)}</h3></div>
        <ol aria-live="polite">${state.privateMessages.map((message) => `<li><strong>${escapeHtml(message.sender)}</strong><span>${escapeHtml(message.text)}</span><small>Zojuist · fictief</small></li>`).join("") || '<li class="private-chat-empty"><strong>Nog geen berichten</strong><span>Begin over de inhoud of een praktische volgende stap. Je kiest zelf welke contactinformatie je eventueel deelt.</span></li>'}</ol>
        <form id="private-message-form" class="form-stack"><div class="field"><label for="private-message">Nieuw bericht</label><textarea id="private-message" name="message" required minlength="2" maxlength="600" placeholder="Schrijf een bericht"></textarea><p class="field-help">Privé voor jullie beiden. Je kiest zelf wat je deelt.</p></div><div class="dialog-actions"><button class="button" type="submit">Stuur bericht</button><button class="button button-ghost" type="button" data-action="mute-conversation">${state.interest.muted ? "Niet meer dempen" : "Dempen"}</button><button class="button button-secondary" type="button" data-action="block-conversation">Blokkeren</button></div></form>
      </section>
    </section>`;
}

function reportSummary() {
  if (!state.reports.length) return "";
  return `
    <section class="panel wide">
      <span class="eyebrow">Melding verwerkt</span>
      <h2>We hebben je melding ontvangen</h2>
      <p class="notice success">De melding staat in de fictieve wachtrij. Bedreiging en privacyschending krijgen voorrang.</p>
      <ul class="fact-list">${state.reports.map((report) => `<li><strong>${escapeHtml(report.category)}</strong><span>${escapeHtml(report.targetType)} · status: ontvangen</span></li>`).join("")}</ul>
    </section>`;
}

function renderDashboard() {
  setDocumentTitle("Mijn gesprekken");
  const call = state.interest?.callId ? callById(state.interest.callId) : null;
  const conversationOpen = state.interest?.status === "open" && state.interest.chatOpen;
  const sourceTitle = state.interest?.sourceLabel || "Kies een maker of gesprek";
  const callOutcome = call ? closedCallOutcome(state.closedCalls, call.id) : "";
  const callClosed = Boolean(callOutcome);
  main.innerHTML = `
    <div class="shell dashboard-shell dashboard-shell-simple">
      <div>
        <section class="page-hero" style="padding-top:0">
          <span class="eyebrow">Interactieve preview</span>
          <h1>Mijn gesprekken</h1>
          <p class="lead">Een bericht opent meteen een gesprek. Vanuit hier kun je verder praten, dempen, melden of blokkeren.</p>
        </section>
        <div class="dashboard-grid">
          <section class="panel">
            <h2>Gesprekken</h2>
            <p><strong>${state.interest ? "1" : "0"}</strong> actief gesprek</p>
            ${!state.interest ? '<a class="button" href="#/makers">Kies een maker</a>' : ""}
          </section>
          <section class="panel">
            <h2>Beheer</h2>
            <p><strong>${state.blocked.size}</strong> geblokkeerde maker(s)<br /><strong>${state.reports.length}</strong> geregistreerde melding(en)</p>
            <button class="button button-secondary" type="button" data-action="reset-demo">Wis demostatus</button>
          </section>
          <section class="panel wide" id="dashboard-status" tabindex="-1">
            <span class="eyebrow">Samenwerkingsstatus</span>
            <h2>${escapeHtml(sourceTitle)}</h2>
            ${statusTimeline()}
            ${state.interest ? `<div class="action-stack"><button class="button button-secondary" type="button" data-action="open-report" data-target-type="privégesprek" data-target-id="${escapeHtml(state.interest.targetMakerId)}">Meld dit privégesprek</button></div>` : ""}
            ${state.interest?.status === "blocked" ? '<div class="notice danger"><strong>Privégesprek geblokkeerd.</strong> Nieuwe berichten en notificaties zijn gestopt.</div>' : ""}
            ${call && conversationOpen && !callClosed ? `<div class="action-stack"><button class="button button-secondary" type="button" data-action="close-call" data-call-id="${escapeHtml(call.id)}">Sluit oproep en registreer uitkomst</button></div>` : ""}
            ${callClosed ? `<div class="notice success"><strong>Oproep gesloten.</strong> Demo-uitkomst: ${escapeHtml(callOutcome)}. Nieuwe interesses zijn alleen voor deze oproep gestopt.</div>` : ""}
          </section>
          ${privateConversationPanel()}
          ${reportSummary()}
        </div>
      </div>
    </div>`;
}

function renderNotFound() {
  setDocumentTitle("Pagina niet gevonden");
  main.innerHTML = `<section class="section"><div class="shell panel" style="max-width:700px"><span class="eyebrow">404</span><h1 style="font-size:3rem">Deze demopagina bestaat niet.</h1><a class="button" href="#/">Terug naar Hotspot</a></div></section>`;
}

let lastRenderedHash = null;

function closeMobileMenu({ restoreFocus = false } = {}) {
  const nav = document.querySelector("#primary-nav");
  const toggle = document.querySelector(".mobile-menu");
  const wasOpen = nav.classList.contains("open");
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
  if (restoreFocus && wasOpen) toggle.focus();
}

function render({ focusMain = window.location.hash !== lastRenderedHash } = {}) {
  const { page, id, subId } = routeInfo();
  if (page === "home") renderHome();
  else if (page === "community" && id === "topic") renderCommunityTopic(subId);
  else if (page === "community" && id === "room") renderClassicCommunityRoom(subId);
  else if (page === "community" && id === "recent") renderClassicCommunityRecent();
  else if (page === "community") renderClassicCommunity();
  else if (page === "oproepen") renderCalls();
  else if (page === "oproep") renderCallDetail(id);
  else if (page === "makers") renderMakers();
  else if (page === "maker") renderMakerDetail(id);
  else if (page === "dashboard") renderDashboard();
  else renderNotFound();
  renderHeader();
  closeMobileMenu();
  lastRenderedHash = window.location.hash;
  if (focusMain) {
    window.scrollTo({ top: 0, behavior: "auto" });
    requestAnimationFrame(() => main.focus({ preventScroll: true }));
  }
}

function renderInPlace(selector = "#dashboard-status") {
  const activeId = document.activeElement?.id;
  render({ focusMain: false });
  requestAnimationFrame(() => {
    const target = activeId ? document.getElementById(activeId) : document.querySelector(selector);
    target?.focus?.({ preventScroll: true });
  });
}

function openDialog(content) {
  lastFocusedElement = document.activeElement;
  dialogContent.innerHTML = content;
  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "");
  requestAnimationFrame(() => dialog.querySelector("input, textarea, select, button")?.focus());
}

function closeDialog() {
  if (dialog.open && typeof dialog.close === "function") dialog.close();
  else dialog.removeAttribute("open");
  dialogContent.innerHTML = "";
  lastFocusedElement?.focus?.();
}

function dialogShell(title, intro, body) {
  return `<div class="dialog-body"><div class="dialog-head"><div><h2 id="dialog-title">${escapeHtml(title)}</h2><p class="muted">${escapeHtml(intro)}</p></div><button class="icon-button" type="button" data-action="close-dialog" aria-label="Venster sluiten">×</button></div>${body}</div>`;
}

function openConversation(targetMakerId, sourceType = "profile", sourceId = targetMakerId, sourceLabel = "Makersprofiel") {
  const owner = makerById(targetMakerId);
  if (!owner) return;
  if (state.blocked.has(owner.id)) {
    toast("Je hebt deze maker geblokkeerd. Hef de blokkade op om een privébericht te sturen.");
    return;
  }
  const firstName = owner.name.split(" ")[0];
  const starter = sourceType === "call"
    ? `Hoi ${firstName}, ik zag je oproep. Volgens mij zou dit kunnen passen. Zal ik iets over mezelf en mijn werk sturen?`
    : sourceType === "topic"
      ? `Hoi ${firstName}, ik las je bericht. Ik wilde er nog even op doorgaan — heb je daar zin in?`
      : `Hoi ${firstName}, ik kwam je profiel tegen. Heb je zin om even kennis te maken?`;
  openDialog(
    dialogShell(
      "Stuur een bericht",
      `Aan ${owner.name} · ${sourceLabel}`,
      `<form id="conversation-form" class="form-stack compact-message-form" data-target-maker-id="${escapeHtml(owner.id)}" data-source-type="${escapeHtml(sourceType)}" data-source-id="${escapeHtml(sourceId)}" data-source-label="${escapeHtml(sourceLabel)}">
        <div class="field"><label for="motivation">Bericht</label><textarea id="motivation" name="motivation" required minlength="2" maxlength="600" aria-describedby="motivation-help" aria-errormessage="motivation-error">${escapeHtml(starter)}</textarea><p class="field-help" id="motivation-help">Alleen zichtbaar voor jullie beiden.</p><p class="field-error" id="motivation-error" role="alert" hidden></p></div>
        <div class="dialog-actions"><button class="button button-secondary" type="button" data-action="close-dialog">Annuleren</button><button class="button" type="submit">Stuur bericht</button></div>
      </form>`,
    ),
  );
}

function openCommunityComposer(roomId = null) {
  openDialog(
    dialogShell(
      "Start een nieuw onderwerp",
      "Laat zien waar je aan werkt of stel een vraag aan andere makers.",
      `<form id="community-post-form" class="form-stack">
        <div class="field"><label for="community-post-type">Soort bijdrage</label><select id="community-post-type" name="type" required>${communityTypes.filter((type) => type.id !== "alles").map((type) => `<option value="${type.id}">${escapeHtml(type.label)}</option>`).join("")}</select></div>
        <div class="field"><label for="community-post-room">Ruimte</label><select id="community-post-room" name="room" required>${communityRooms.map((room) => `<option value="${room.id}" ${room.id === roomId ? "selected" : ""}>${escapeHtml(room.label)}</option>`).join("")}</select></div>
        <div class="field"><label for="community-post-title">Titel</label><input id="community-post-title" name="title" required minlength="8" maxlength="90" placeholder="Waar werk je aan of wat wil je weten?" /></div>
        <div class="field"><label for="community-post-body">Je bericht</label><textarea id="community-post-body" name="body" required minlength="30" maxlength="500" aria-describedby="community-post-help community-post-error" placeholder="Vertel kort waar je aan werkt en waar je op vastloopt."></textarea><p class="field-help" id="community-post-help">Dit bericht is openbaar. Deel geen contactgegevens of externe links.</p><p class="field-error" id="community-post-error" role="alert" hidden></p></div>
        <div class="field"><label for="community-post-prompt">Waar wil je reactie op?</label><input id="community-post-prompt" name="prompt" required minlength="8" maxlength="140" placeholder="Bijvoorbeeld: welke overgang voelt nog niet logisch?" /></div>
        <div class="dialog-actions"><button class="button button-secondary" type="button" data-action="close-dialog">Annuleren</button><button class="button" type="submit">Plaats fictieve bijdrage</button></div>
      </form>`,
    ),
  );
}

function openCommunityReply(postId) {
  const post = [...state.userCommunityPosts, ...communityPosts].find((item) => item.id === postId);
  if (!post) return;
  openDialog(
    dialogShell(
      "Schrijf een reactie",
      `Je reageert op ‘${post.title}’.`,
      `<form id="community-reply-form" class="form-stack" data-post-id="${escapeHtml(post.id)}">
        <div class="field"><label for="community-reply">Jouw reactie</label><textarea id="community-reply" name="reply" required minlength="20" maxlength="400" aria-describedby="community-reply-help community-reply-error" placeholder="Wat hoor jij, en wat zou je zelf proberen?"></textarea><p class="field-help" id="community-reply-help">Reageer op het werk, niet op de persoon. Deel geen contactgegevens of links.</p><p class="field-error" id="community-reply-error" role="alert" hidden></p></div>
        <div class="dialog-actions"><button class="button button-secondary" type="button" data-action="close-dialog">Annuleren</button><button class="button" type="submit">Plaats demo-reactie</button></div>
      </form>`,
    ),
  );
}

function openReport(targetType, targetId) {
  openDialog(
    dialogShell(
      "Meld ongewenste inhoud",
      "Je melding is privé. Bedreiging en gedeelde persoonsgegevens krijgen voorrang.",
      `<form id="report-form" class="form-stack" data-target-type="${escapeHtml(targetType)}" data-target-id="${escapeHtml(targetId)}">
        <div class="field"><label for="report-category">Reden</label><select id="report-category" name="category" required><option value="">Kies een categorie</option><option>Intimidatie of discriminatie</option><option>Ongewenste commerciële benadering</option><option>Impersonatie of misleiding</option><option>Persoonsgegevens gedeeld</option><option>Bedreiging of stalking</option><option>Anders</option></select></div>
        <div class="field"><label for="report-note">Toelichting (optioneel)</label><textarea id="report-note" name="note" maxlength="500" placeholder="Beschrijf kort wat er gebeurde."></textarea></div>
        <div class="dialog-actions"><button class="button button-secondary" type="button" data-action="close-dialog">Annuleren</button><button class="button" type="submit">Verstuur demo-melding</button></div>
      </form>`,
    ),
  );
}

function openCloseCall(callId) {
  openDialog(
    dialogShell(
      "Sluit de demo-oproep",
      "Nieuwe interesses stoppen. De uitkomst wordt in een echte pilot alleen geaggregeerd gebruikt.",
      `<form id="close-call-form" class="form-stack" data-call-id="${escapeHtml(callId)}"><fieldset><legend class="fieldset-legend">Wat heeft deze oproep opgeleverd?</legend><div class="form-stack" style="margin-top:.6rem"><label class="choice"><input type="radio" name="outcome" value="Geen bruikbaar contact" required /> Geen bruikbaar contact</label><label class="choice"><input type="radio" name="outcome" value="Bruikbaar contact" required /> Bruikbaar contact</label><label class="choice"><input type="radio" name="outcome" value="Samenwerking gestart" required /> Samenwerking gestart</label><label class="choice"><input type="radio" name="outcome" value="Liever niet zeggen" required /> Liever niet zeggen</label></div></fieldset><div class="dialog-actions"><button class="button button-secondary" type="button" data-action="close-dialog">Annuleren</button><button class="button" type="submit">Sluit oproep</button></div></form>`,
    ),
  );
}

function toast(message) {
  const node = document.createElement("div");
  node.className = "toast";
  node.textContent = message;
  toastRegion.appendChild(node);
  window.setTimeout(() => node.remove(), 4200);
}

function resetDemo() {
  state = initialState();
  closeDialog();
  toast("De demo is teruggezet. Alle lokale simulatiestatus is gewist.");
  window.location.hash = "#/";
  render();
}

document.addEventListener("click", (event) => {
  const actionNode = event.target.closest("[data-action]");
  if (!actionNode) {
    if (!event.target.closest(".header-inner")) closeMobileMenu();
    return;
  }
  const action = actionNode.dataset.action;

  if (action === "toggle-menu") {
    const nav = document.querySelector("#primary-nav");
    const isOpen = nav.classList.toggle("open");
    actionNode.setAttribute("aria-expanded", String(isOpen));
  } else if (action === "fake-music") {
    toast(`Preview: de fictieve muzieklink van ${actionNode.dataset.makerName} opent niet extern.`);
  } else if (action === "close-dialog") {
    closeDialog();
  } else if (action === "open-conversation") {
    openConversation(actionNode.dataset.targetMakerId, actionNode.dataset.sourceType, actionNode.dataset.sourceId, actionNode.dataset.sourceLabel);
  } else if (action === "new-community-post") {
    openCommunityComposer(actionNode.dataset.room || null);
  } else if (action === "new-comment") {
    openCommunityReply(actionNode.dataset.postId);
  } else if (action === "toggle-useful") {
    const postId = actionNode.dataset.postId;
    if (state.usefulPosts.has(postId)) state.usefulPosts.delete(postId);
    else state.usefulPosts.add(postId);
    renderInPlace();
  } else if (action === "follow-topic") {
    const postId = actionNode.dataset.postId;
    if (state.followedTopics.has(postId)) state.followedTopics.delete(postId);
    else state.followedTopics.add(postId);
    renderInPlace();
    toast(state.followedTopics.has(postId) ? "Onderwerp gevolgd. Nieuwe activiteit verschijnt onder Volgend." : "Onderwerp niet meer gevolgd.");
  } else if (action === "follow-room") {
    const roomId = actionNode.dataset.room;
    if (state.followedRooms.has(roomId)) state.followedRooms.delete(roomId);
    else state.followedRooms.add(roomId);
    renderInPlace();
    toast(state.followedRooms.has(roomId) ? "Ruimte gevolgd." : "Ruimte niet meer gevolgd.");
  } else if (action === "toggle-discussion") {
    const postId = actionNode.dataset.postId;
    if (state.openDiscussions.has(postId)) state.openDiscussions.delete(postId);
    else state.openDiscussions.add(postId);
    renderInPlace();
  } else if (action === "filter-feed") {
    state.communityFilter = actionNode.dataset.filter;
    renderInPlace("#community-summary");
  } else if (action === "community-view") {
    state.communityView = actionNode.dataset.view;
    renderInPlace("#community-summary");
  } else if (action === "community-reset") {
    state.communityFilter = "alles";
    state.communityView = "actief";
    state.communityQuery = "";
    renderInPlace("#community-summary");
  } else if (action === "filter-room") {
    event.preventDefault();
    window.location.hash = `#/community/room/${actionNode.dataset.room}`;
  } else if (action === "show-featured-post") {
    window.location.hash = `#/community/topic/${actionNode.dataset.postId}`;
  } else if (action === "open-report") {
    openReport(actionNode.dataset.targetType, actionNode.dataset.targetId);
  } else if (action === "toggle-block") {
    const makerId = actionNode.dataset.makerId;
    if (state.blocked.has(makerId)) {
      state.blocked.delete(makerId);
      toast("De demo-blokkade is opgeheven.");
    } else {
      state.blocked.add(makerId);
      if (state.interest?.targetMakerId === makerId) state.interest = HotspotLogic.blockConversation(state.interest);
      toast("Maker geblokkeerd. Nieuwe privéberichten zijn gestopt.");
    }
    renderInPlace();
  } else if (action === "mute-conversation") {
    state.interest = { ...state.interest, muted: !state.interest.muted };
    toast(state.interest.muted ? "Notificaties voor dit gesprek zijn gedempt." : "Notificaties voor dit gesprek staan weer aan.");
    renderInPlace();
  } else if (action === "block-conversation") {
    const ownerId = state.interest?.targetMakerId;
    if (ownerId) state.blocked.add(ownerId);
    state.interest = HotspotLogic.blockConversation(state.interest);
    toast("Privégesprek geblokkeerd. Nieuwe berichten zijn gestopt.");
    renderInPlace();
  } else if (action === "close-call") {
    openCloseCall(actionNode.dataset.callId);
  } else if (action === "clear-filters") {
    state.filters = { query: "", category: "", genre: "", role: "", instrument: "", formation: "", region: "" };
    renderCalls();
  } else if (action === "filter-genre") {
    state.filters = { query: "", category: "", genre: actionNode.dataset.genre, role: "", instrument: "", formation: "", region: "" };
    window.location.hash = "#/oproepen";
    render();
  } else if (action === "filter-category") {
    state.filters = { query: "", category: actionNode.dataset.category, genre: "", role: "", instrument: "", formation: "", region: "" };
    window.location.hash = "#/oproepen";
    render();
  } else if (action === "reset-demo") {
    resetDemo();
  }
});

document.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);

  if (form.id === "community-post-form") {
    const title = String(data.get("title")).trim();
    const body = String(data.get("body")).trim();
    const prompt = String(data.get("prompt")).trim();
    const error = form.querySelector("#community-post-error");
    const unsafeField = containsDirectContactDetails(title)
      ? form.querySelector("#community-post-title")
      : containsDirectContactDetails(body)
        ? form.querySelector("#community-post-body")
        : containsDirectContactDetails(prompt)
          ? form.querySelector("#community-post-prompt")
          : null;
    if (unsafeField) {
      unsafeField.setAttribute("aria-invalid", "true");
      error.hidden = false;
      error.textContent = "Verwijder contactgegevens, social handles en externe links uit titel, context en vraag.";
      unsafeField.focus();
      return;
    }
    const type = String(data.get("type"));
    const typeLabel = communityTypes.find((item) => item.id === type)?.label || "Bijdrage";
    const nameParts = state.user.name.trim().split(/\s+/);
    const postId = `demo-post-${Date.now()}`;
    state.userCommunityPosts.unshift({
      id: postId,
      type,
      typeLabel,
      room: String(data.get("room")),
      author: { name: state.user.name, initials: nameParts.map((part) => part[0]).join("").slice(0, 2).toUpperCase(), roles: ["Demomaker"] },
      title,
      excerpt: body,
      prompt,
      age: "Zojuist",
      createdDays: 0,
      activityHours: 0,
      useful: 0,
      comments: [],
      link: { href: "#/oproepen", label: "Start een samenwerkingsoproep" },
    });
    state.communityFilter = "alles";
    state.communityView = "nieuw";
    state.communityQuery = "";
    closeDialog();
    window.location.hash = `#/community/topic/${postId}`;
    render();
    toast("Je fictieve bijdrage ligt op de werktafel. Er is niets opgeslagen.");
  } else if (form.id === "community-reply-form") {
    const reply = String(data.get("reply")).trim();
    const error = form.querySelector("#community-reply-error");
    if (containsDirectContactDetails(reply)) {
      form.querySelector("#community-reply").setAttribute("aria-invalid", "true");
      error.hidden = false;
      error.textContent = "Verwijder contactgegevens, social handles en externe links uit deze openbare reactie.";
      form.querySelector("#community-reply").focus();
      return;
    }
    const nameParts = state.user.name.trim().split(/\s+/);
    state.communityReplies[form.dataset.postId] = [
      ...(state.communityReplies[form.dataset.postId] || []),
      { text: reply, author: { name: state.user.name, initials: nameParts.map((part) => part[0]).join("").slice(0, 2).toUpperCase(), roles: ["Demomaker"] } },
    ];
    state.openDiscussions.add(form.dataset.postId);
    closeDialog();
    render({ focusMain: false });
    requestAnimationFrame(() => (document.querySelector("#topic-reply-button") || document.querySelector(`#discussion-toggle-${form.dataset.postId}`))?.focus());
    toast("Demo-reactie geplaatst. Er is niets opgeslagen.");
  } else if (form.id === "conversation-form") {
    const motivation = String(data.get("motivation")).trim();
    const sourceType = form.dataset.sourceType;
    const sourceId = form.dataset.sourceId;
    state.interest = HotspotLogic.createConversation(form.dataset.targetMakerId, motivation, {
      callId: sourceType === "call" ? sourceId : null,
      sourceType,
      sourceId,
      sourceLabel: form.dataset.sourceLabel,
    });
    state.privateMessages = [{ sender: state.user.name, text: motivation }];
    closeDialog();
    window.location.hash = "#/dashboard";
    toast("Privégesprek gestart. Alleen beide makers zien de berichten.");
    render();
  } else if (form.id === "private-message-form") {
    state.privateMessages.push({ sender: state.user.name, text: String(data.get("message")).trim() });
    render({ focusMain: false });
    requestAnimationFrame(() => document.querySelector("#private-message")?.focus());
    toast("Fictief privébericht verstuurd. Er is niets opgeslagen.");
  } else if (form.id === "report-form") {
    state.reports.push({
      targetType: form.dataset.targetType,
      targetId: form.dataset.targetId,
      category: String(data.get("category")),
      note: String(data.get("note") || ""),
    });
    closeDialog();
    toast("Melding ontvangen in de fictieve moderatiewachtrij.");
    if (routeInfo().page === "dashboard") renderInPlace();
  } else if (form.id === "close-call-form") {
    state.closedCalls = withClosedCall(state.closedCalls, form.dataset.callId, String(data.get("outcome")));
    closeDialog();
    toast("Oproep gesloten en demo-uitkomst geregistreerd.");
    renderInPlace();
  }
});

document.addEventListener("input", (event) => {
  if (event.target.id === "community-search") {
    state.communityQuery = event.target.value;
    renderInPlace("#community-summary");
  }
  if (event.target.id === "motivation") {
    event.target.removeAttribute("aria-invalid");
    const error = document.querySelector("#motivation-error");
    if (error) {
      error.hidden = true;
      error.textContent = "";
    }
  }
  if (["community-post-body", "community-reply"].includes(event.target.id)) {
    event.target.removeAttribute("aria-invalid");
    const error = event.target.parentElement.querySelector(".field-error");
    if (error) {
      error.hidden = true;
      error.textContent = "";
    }
  }
  if (event.target.closest("#call-filters")) {
    state.filters[event.target.name] = event.target.value;
    const showInstrument = ["zang", "live", "band"].includes(state.filters.category) || ["Bassist", "Cellist", "Drummer", "Gitarist", "Toetsenist", "Vocalist"].includes(state.filters.role);
    const showFormation = state.filters.category === "band";
    const instrumentField = document.querySelector(".instrument-filter");
    const instrumentSelect = document.querySelector("#instrument");
    const formationField = document.querySelector(".formation-filter");
    const formationSelect = document.querySelector("#formation");
    instrumentField?.classList.toggle("is-hidden", !showInstrument);
    if (instrumentSelect) instrumentSelect.disabled = !showInstrument;
    if (!showInstrument) state.filters.instrument = "";
    formationField?.classList.toggle("is-hidden", !showFormation);
    if (formationSelect) formationSelect.disabled = !showFormation;
    if (!showFormation) state.filters.formation = "";
    renderCallResults();
  }
  if (event.target.id === "maker-search") {
    state.makerQuery = event.target.value;
    const query = state.makerQuery.trim().toLocaleLowerCase("nl");
    const filtered = makers.filter((maker) =>
      `${maker.name} ${maker.roles.join(" ")} ${maker.genres.join(" ")} ${maker.region}`.toLocaleLowerCase("nl").includes(query),
    );
    const grid = document.querySelector("#maker-results");
    const summary = grid.previousElementSibling;
    summary.textContent = `${filtered.length} van ${makers.length} makersprofielen gevonden`;
    grid.innerHTML = filtered.length ? filtered.map(makerCard).join("") : '<div class="empty-state"><h2>Geen makers gevonden</h2><p>Probeer een andere zoekterm.</p></div>';
  }
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) closeDialog();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && document.querySelector("#primary-nav").classList.contains("open")) {
    event.preventDefault();
    closeMobileMenu({ restoreFocus: true });
  }
});

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", () => {
  if (!window.location.hash) window.location.hash = "#/";
  render();
});
