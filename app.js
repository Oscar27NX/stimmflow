/* ============================================================
   HEILBRONNER STIMME — AI Content Pipeline v2
   Click Dummy: Interactions, Data & Analytics
   ============================================================ */

// ── Dummy Data ─────────────────────────────────────────────

const SOURCES = [
  { name: "Heilbronner Stimme", url: "heilbronner-stimme.de", lastScraped: "06.06.2026, 12:00", articles: 23, status: "aktiv" },
  { name: "meine.stimme.de", url: "meine.stimme.de/event", lastScraped: "06.06.2026, 11:45", articles: 14, status: "aktiv" },
  { name: "echo24 Heilbronn", url: "echo24.de/Heilbronn", lastScraped: "06.06.2026, 11:30", articles: 18, status: "aktiv" },
  { name: "Stadt Heilbronn", url: "heilbronn.de", lastScraped: "06.06.2026, 10:00", articles: 15, status: "aktiv" },
  { name: "Heilbronner Land Tourismus", url: "heilbronnerland.de/info-service/Veranstaltungen", lastScraped: "06.06.2026, 09:30", articles: 11, status: "aktiv" },
  { name: "Open Data Heilbronn", url: "opendata.heilbronn.de", lastScraped: "05.06.2026, 22:00", articles: 9, status: "aktiv" },
  { name: "CampusFounders Events", url: "campusfounders.de/community/events", lastScraped: "06.06.2026, 08:00", articles: 6, status: "aktiv" },
  { name: "Ipai Media", url: "ip.ai/en/media", lastScraped: "06.06.2026, 07:30", articles: 5, status: "aktiv" },
  { name: "TUM Campus Heilbronn", url: "chn.tum.de/events", lastScraped: "05.06.2026, 20:00", articles: 4, status: "aktiv" },
  { name: "FS TUM Heilbronn", url: "hn.fs.tum.de/events", lastScraped: "05.06.2026, 19:00", articles: 3, status: "pausiert" },
  { name: "DHBW Heilbronn Events", url: "events.heilbronn.dhbw.de/event", lastScraped: "05.06.2026, 18:00", articles: 7, status: "aktiv" },
  { name: "Connect IT Heilbronn", url: "connect-it.hn/en/event", lastScraped: "05.06.2026, 17:00", articles: 4, status: "pausiert" }
];

const ARTICLES = [
  {
    id: 1,
    title: "Heilbronner Weindorf 2026: Programm und Highlights",
    source: "heilbronner-stimme.de",
    sourceIdx: 0,
    category: "Events",
    date: "05.06.2026",
    status: "neu",
    snippet: "Das Heilbronner Weindorf startet am 12. September mit über 30 Weinständen auf dem Kiliansplatz. Neben regionalen Weinen gibt es Live-Musik, Kulinarik und ein Kinderprogramm.",
    body: "Das Heilbronner Weindorf startet am 12. September mit über 30 Weinständen auf dem Kiliansplatz. Neben regionalen Weinen gibt es Live-Musik, Kulinarik und ein Kinderprogramm.\n\nDie Veranstaltung ist in diesem Jahr besonders spannend: Neben den bewährten Winzern aus der Region werden erstmals auch internationale Gäste erwartet. Der Bürgermeister hat eine Eröffnungsrede angekündigt.\n\nÖffnungszeiten: Montag bis Samstag 11:00–23:00 Uhr, Sonntag 11:00–21:00 Uhr. Der Eintritt ist frei.",
    personas: [1, 2, 3, 4, 5],
    relevance: { 1: 92, 2: 78, 3: 85, 4: 80, 5: 88 },
    image: "weindorf"
  },
  {
    id: 2,
    title: "Ipai Campus: KI-Konferenz mit 500 Teilnehmern",
    source: "ip.ai/en/media",
    sourceIdx: 7,
    category: "Technologie",
    date: "04.06.2026",
    status: "verarbeitet",
    snippet: "Der Ipai Innovation Park Heilbronn veranstaltet eine dreitägige KI-Konferenz mit internationalen Speakern, Workshops und einer Startup-Messe.",
    body: "Der Ipai Innovation Park Heilbronn veranstaltet eine dreitägige KI-Konferenz mit internationalen Speakern, Workshops und einer Startup-Messe.\n\nThemen: Generative KI, Responsible AI, KI in der Medizin. Keynote von Prof. Dr. Weber (TUM). Networking-Abend mit regionalen Unternehmen.\n\nDatum: 20.–22. Juni 2026. Tickets: 49€ (Studierende kostenlos).",
    personas: [1, 2],
    relevance: { 1: 97, 2: 72, 3: 35, 4: 40, 5: 30 },
    image: "ki-konferenz"
  },
  {
    id: 3,
    title: "CampusFounders Demo Day: 8 Startups pitchen",
    source: "campusfounders.de/community/events",
    sourceIdx: 6,
    category: "Wirtschaft",
    date: "03.06.2026",
    status: "verarbeitet",
    snippet: "Beim Demo Day präsentieren 8 Startups aus dem CampusFounders Accelerator ihre Produkte vor Investoren und der Öffentlichkeit.",
    body: "Beim Demo Day präsentieren 8 Startups aus dem CampusFounders Accelerator ihre Produkte vor Investoren und der Öffentlichkeit.\n\nUnter den Startups: ein HealthTech aus Heilbronn, ein EdTech für Schulen und ein CleanTech-Projekt der TUM-Studierenden. Jury: regionale Venture-Capital-Geber.\n\nDatum: 15. Juni 2026, 18:00 Uhr. Bildungscampus, Gebäude F. Anmeldung erforderlich.",
    personas: [1],
    relevance: { 1: 95, 2: 58, 3: 30, 4: 35, 5: 15 },
    image: "startup"
  },
  {
    id: 4,
    title: "SV Heilbronn steigt in die Regionalliga auf",
    source: "echo24.de/Heilbronn",
    sourceIdx: 2,
    category: "Sport",
    date: "03.06.2026",
    status: "verarbeitet",
    snippet: "Nach einem dramatischen 3:2-Sieg im letzten Saisonspiel steigt der SV Heilbronn in die Regionalliga Südwest auf.",
    body: "Nach einem dramatischen 3:2-Sieg im letzten Saisonspiel steigt der SV Heilbronn in die Regionalliga Südwest auf. Trainer Müller: 'Ein historischer Tag für den Verein.'\n\nÜber 4.000 Zuschauer feierten den Aufstieg im Frankenstadion. Die Mannschaft wird in der kommenden Saison auf namhafte Gegner treffen.",
    personas: [2, 3, 4],
    relevance: { 1: 30, 2: 88, 3: 70, 4: 75, 5: 60 },
    image: "sport"
  },
  {
    id: 5,
    title: "Foodtruck-Festival am Neckar: Street Food aus aller Welt",
    source: "meine.stimme.de/event",
    sourceIdx: 1,
    category: "Events",
    date: "01.06.2026",
    status: "neu",
    snippet: "Am Wochenende verwandelt sich das Neckarufer in eine Streetfood-Meile. 25 Foodtrucks servieren Gerichte von Ramen bis Churros.",
    body: "Am Wochenende verwandelt sich das Neckarufer in eine Streetfood-Meile. 25 Foodtrucks servieren Gerichte von Ramen bis Churros.\n\nNeben Essen gibt es DJs, eine Cocktailbar und einen Bereich für Kinder. Der Eintritt ist frei.\n\nDatum: 7.–8. Juni 2026, 11:00–22:00 Uhr.",
    personas: [1, 2, 3, 4],
    relevance: { 1: 88, 2: 82, 3: 90, 4: 95, 5: 50 },
    image: "food"
  },
  {
    id: 6,
    title: "DHBW Heilbronn: Offener Campus-Tag für Studieninteressierte",
    source: "events.heilbronn.dhbw.de/event",
    sourceIdx: 10,
    category: "Bildung",
    date: "31.05.2026",
    status: "verarbeitet",
    snippet: "Die DHBW Heilbronn öffnet ihre Türen: Vorlesungen, Labor-Führungen und Beratungsgespräche für Studieninteressierte.",
    body: "Die DHBW Heilbronn öffnet ihre Türen: Vorlesungen, Labor-Führungen und Beratungsgespräche für Studieninteressierte.\n\nStudiengänge in Wirtschaft, Informatik und Technik werden vorgestellt. Alumni berichten aus der Praxis. Mensa und Campus-Tour inklusive.\n\nDatum: 14. Juni 2026, 10:00–16:00 Uhr.",
    personas: [1, 4],
    relevance: { 1: 80, 2: 40, 3: 25, 4: 90, 5: 35 },
    image: "campus"
  },
  {
    id: 7,
    title: "Connect IT: Networking-Abend für die Tech-Community",
    source: "connect-it.hn/en/event",
    sourceIdx: 11,
    category: "Technologie",
    date: "30.05.2026",
    status: "archiviert",
    snippet: "Der monatliche Connect IT Networking-Abend bringt Entwickler, Gründer und Tech-Begeisterte zusammen.",
    body: "Der monatliche Connect IT Networking-Abend bringt Entwickler, Gründer und Tech-Begeisterte zusammen.\n\nDiesen Monat: Lightning Talks zu Cloud-Native Development und ein Hands-on Workshop zu LLM-APIs. Pizza und Getränke inklusive.\n\nDatum: 19. Juni 2026, 18:30 Uhr. Zukunftspark, Heilbronn.",
    personas: [1, 2],
    relevance: { 1: 90, 2: 65, 3: 20, 4: 45, 5: 25 },
    image: "tech"
  }
];

const PERSONAS = [
  {
    id: 1,
    name: "Gen-Z Student",
    emoji: "🎓",
    ageRange: "18–24",
    interests: ["Technologie", "Start-ups", "Events", "Kultur", "KI"],
    massiveInterests: ["Nachtleben", "Festivals", "Social Media", "Klimaschutz"],
    nicheTopics: ["Virtual Reality", "Clean Energy", "Venture Capital", "E-Sports"],
    subPersonas: ["Tech-Innovator", "Culture & Party Enthusiast", "Eco-Activist"],
    instagramAccounts: ["@stimme.next", "@echo24_next", "@stimme.news"],
    platforms: ["TikTok", "Instagram"],
    description: "Technikaffine Studierende, die sich für Innovation, Nachtleben, Nachhaltigkeit und kulturelle Events interessieren.",
    followers: "2.4K"
  },
  {
    id: 2,
    name: "Young Professional",
    emoji: "💼",
    ageRange: "25–34",
    interests: ["Sport", "Karriere", "Gastronomie", "Lokalnachrichten"],
    massiveInterests: ["Karriere-Wachstum", "Lokalsport", "Housing", "Healthy Food"],
    nicheTopics: ["Bouldern & Climbing", "FinTech & Cryptocurrencies", "Craft Beer", "Leadership"],
    subPersonas: ["Career Climber", "Fitness & Outdoor Fan", "Gastronomy Explorer"],
    instagramAccounts: ["@stimme.business", "@echo24_sport", "@stimme.news"],
    platforms: ["Instagram", "Facebook"],
    description: "Berufstätige mit Interesse an lokaler Wirtschaft, Sportevents, Gastroszene und persönlicher Weiterbildung.",
    followers: "5.1K"
  },
  {
    id: 3,
    name: "Lokal-Enthusiast",
    emoji: "🏠",
    ageRange: "20–40",
    interests: ["Heimat", "Tradition", "Events", "Natur"],
    massiveInterests: ["Stadtentwicklung", "Weinkultur", "Lokale Vereine", "Gartenschau"],
    nicheTopics: ["Weinverkostung", "Heimatgeschichte", "Vogelbeobachtung", "Lokalpolitik"],
    subPersonas: ["Wine & Dine Connoisseur", "Active Club Member", "Nature & Hiking Fan"],
    instagramAccounts: ["@lokal_stimme", "@echo24_heilbronn", "@stimme.regio"],
    platforms: ["Facebook", "Instagram"],
    description: "Menschen, die Heilbronn als Heimat schätzen, sich in Vereinen engagieren und für Weinkultur und Natur begeistern.",
    followers: "8.7K"
  },
  {
    id: 4,
    name: "Family Manager",
    emoji: "👨‍👩‍👧‍👦",
    ageRange: "30–50",
    interests: ["Familie", "Bildung", "Wohnen", "Freizeit"],
    massiveInterests: ["Schule & Kita", "Ausflugsziele", "Familienrabatte", "Einkaufen"],
    nicheTopics: ["Kinderturnen", "Nachhaltiges Spielzeug", "Spielplatz-Scouting", "Schwimmkurse"],
    subPersonas: ["Helicopter Parent", "Active Budget Parent", "School Council Member"],
    instagramAccounts: ["@stimme.familie", "@echo24_life", "@stimme.news"],
    platforms: ["Facebook", "Instagram"],
    description: "Eltern, die nach Freizeittipps, Schulnachrichten, familienfreundlichen Angeboten und Wohnungsmarkt-News suchen.",
    followers: "6.3K"
  }
];

const GENERATED_POSTS = {
  tiktok: {
    platform: "TikTok",
    text: "POV: Du entdeckst das Heilbronner Weindorf 🍷✨\n\n30+ Weinstände, Live-Musik, mega Food — ab 12. September auf dem Kiliansplatz!\n\nWer kommt mit? 👇",
    hashtags: "#Heilbronn #Weindorf2026 #WeinTok #FYP #BadenWürttemberg #WeindorfVibes",
    charCount: 198,
    persona: "Gen-Z Student"
  },
  instagram: {
    platform: "Instagram",
    text: "🍷 Das Heilbronner Weindorf ist zurück!\n\nÜber 30 Weinstände, Live-Musik und kulinarische Highlights erwarten euch ab dem 12. September auf dem Kiliansplatz.\n\nDieses Jahr mit internationalen Gästen und einem erweiterten Programm. Eintritt frei!\n\n📅 12. September – Oktober\n📍 Kiliansplatz, Heilbronn",
    hashtags: "#Heilbronn #Weindorf #Wein #Events #HeilbronnerStimme #Kiliansplatz #RegionaleWeine",
    charCount: 342,
    persona: "Young Professional"
  },
  facebook: {
    platform: "Facebook",
    text: "🍷 Heilbronner Weindorf 2026 — Save the Date!\n\nLiebe Heilbronnerinnen und Heilbronner,\n\nes ist wieder soweit: Ab dem 12. September verwandelt sich der Kiliansplatz in unser geliebtes Weindorf.\n\nÜber 30 Weinstände mit regionalen Weinen, Live-Musik jeden Abend, ein vielfältiges Kulinarik-Angebot und dieses Jahr erstmals internationale Winzer als Gäste.\n\nÖffnungszeiten:\nMo–Sa: 11:00–23:00 Uhr\nSo: 11:00–21:00 Uhr\nEintritt frei!\n\nWir freuen uns auf euch! 🥂",
    hashtags: "",
    charCount: 478,
    persona: "Lokal-Enthusiast"
  }
};

const ACTIVITY_LOG = [
  { time: "12:15", text: "TikTok-Post für Persona «Gen-Z Student» generiert", type: "success" },
  { time: "12:10", text: "7 Artikel nach Persona-Relevanz gefiltert", type: "info" },
  { time: "11:58", text: "3 neue Artikel von echo24.de gescraped", type: "info" },
  { time: "11:50", text: "Newsletter KW24 — Entwurf erstellt", type: "success" },
  { time: "11:45", text: "Instagram-Post für «Young Professional» gespeichert", type: "success" },
  { time: "11:30", text: "Scraping-Zyklus abgeschlossen — 12 Quellen", type: "info" },
  { time: "11:15", text: "Ipai-Konferenz-Artikel: Relevanz 97% für Gen-Z Student", type: "info" },
  { time: "10:50", text: "Facebook-Post veröffentlicht: Foodtruck-Festival", type: "success" },
  { time: "10:30", text: "Pipeline gestartet — automatischer Modus", type: "info" },
  { time: "10:00", text: "CampusFounders-Quelle: 2 neue Events erkannt", type: "info" }
];

const ANALYTICS_DATA = {
  weeklyEngagement: [
    { label: "KW20", ig: 320, fb: 180, tt: 450 },
    { label: "KW21", ig: 410, fb: 220, tt: 380 },
    { label: "KW22", ig: 380, fb: 260, tt: 520 },
    { label: "KW23", ig: 450, fb: 310, tt: 610 },
    { label: "KW24", ig: 520, fb: 280, tt: 730 }
  ],
  platformFollowers: { tiktok: 1240, instagram: 3820, facebook: 5460 },
  platformPosts: { tiktok: 8, instagram: 14, facebook: 9 },
  reach: { tiktok: 12400, instagram: 18600, facebook: 9200 },

  categories: [
    { name: "Events", count: 28, color: "#0078D4" },
    { name: "Technologie", count: 18, color: "#107C10" },
    { name: "Wirtschaft", count: 12, color: "#FF8C00" },
    { name: "Sport", count: 9, color: "#D13438" },
    { name: "Bildung", count: 7, color: "#6C3483" },
    { name: "Kultur", count: 6, color: "#2C3E50" }
  ]
};

const TRENDS_DATA = {
  keywords: [
    { word: "#Weindorf2026", volume: "High", trend: "up", change: "+140%" },
    { word: "Ipai Heilbronn", volume: "Medium", trend: "up", change: "+45%" },
    { word: "Foodtruck Neckar", volume: "High", trend: "down", change: "-12%" },
    { word: "SV Heilbronn Aufstieg", volume: "High", trend: "up", change: "+90%" },
    { word: "#Kiliansplatz", volume: "Low", trend: "stable", change: "0%" },
    { word: "Bildungscampus AI", volume: "Medium", trend: "up", change: "+25%" }
  ],
  topics: [
    { title: "Heilbronner Weindorf Vorbereitungen", platform: "Instagram", reach: "18.4K", engagement: "7.8%" },
    { title: "IPAI Innovation Park Expansion", platform: "LinkedIn", reach: "12.1K", engagement: "9.2%" },
    { title: "Neckar-Ufer Food & Drinks", platform: "TikTok", reach: "22.5K", engagement: "11.4%" },
    { title: "SV Heilbronn Regionalliga-Feier", platform: "Instagram", reach: "14.2K", engagement: "8.5%" }
  ]
};

const PERSONA_ANALYTICS_DATA = [
  { name: "Gen-Z Student", emoji: "🎓", reachShare: "28%", topInterest: "Technologie / Events", engagement: "8.2%" },
  { name: "Young Professional", emoji: "💼", reachShare: "34%", topInterest: "Karriere / Sport", engagement: "6.8%" },
  { name: "Lokal-Enthusiast", emoji: "🏠", reachShare: "25%", topInterest: "Heimat / Weinkultur", engagement: "5.4%" },
  { name: "Family Manager", emoji: "👨‍👩‍👧‍👦", reachShare: "13%", topInterest: "Freizeit / Bildung", engagement: "7.1%" }
];

const AGENTIC_STEPS = [
  {
    status: "done",
    title: "1. Quellen-Scraping",
    detail: "12 Quellen durchsucht, 7 relevante Artikel identifiziert",
    refs: [
      { label: "heilbronner-stimme.de → 2 Artikel", url: "heilbronner-stimme.de" },
      { label: "meine.stimme.de/event → 1 Artikel", url: "meine.stimme.de/event" },
      { label: "campusfounders.de/community/events → 1 Artikel", url: "campusfounders.de/community/events" },
      { label: "ip.ai/en/media → 1 Artikel", url: "ip.ai/en/media" }
    ]
  },
  {
    status: "done",
    title: "2. Daten-Extraktion & Kategorisierung",
    detail: "NLP-Pipeline: Titel, Datum, Kategorie, Sentiment extrahiert. 5 Kategorien erkannt.",
    refs: [
      { label: "Events (3), Technologie (2), Sport (1), Wirtschaft (1)", url: null }
    ]
  },
  {
    status: "done",
    title: "3. Persona-Matching & Relevanz-Scoring",
    detail: "Artikel nach Persona-Interessen bewertet. Weindorf: 92% Gen-Z, 78% Professional, 85% Lokal.",
    refs: [
      { label: "Scoring-Modell: TF-IDF + Persona-Embedding-Similarity", url: null },
      { label: "Top-Match: Ipai KI-Konferenz → Gen-Z Student (97%)", url: null }
    ]
  },
  {
    status: "done",
    title: "4. Copywriting — Textgenerierung",
    detail: "LLM-basierte Textgenerierung mit plattformspezifischen Vorgaben (Zeichenlimit, Tonalität, Hashtags).",
    refs: [
      { label: "TikTok: 198 Zeichen, POV-Format, 6 Hashtags", url: null },
      { label: "Instagram: 342 Zeichen, informativ, 7 Hashtags", url: null },
      { label: "Facebook: 478 Zeichen, Community-Tonalität", url: null }
    ]
  },
  {
    status: "active",
    title: "5. Qualitätskontrolle & Freigabe",
    detail: "Wartet auf manuelle Überprüfung. Readability-Score: 82/100. Tonalitäts-Check: bestanden.",
    refs: []
  }
];

const NEWSLETTER_ARTICLES = [
  { category: "EVENTS", title: "Heilbronner Weindorf 2026 — Ab 12. September!", text: "30+ Weinstände, Live-Musik und kulinarische Highlights auf dem Kiliansplatz. Dieses Jahr erstmals mit internationalen Winzern. Eintritt frei!" },
  { category: "TECHNOLOGIE", title: "Ipai KI-Konferenz: 500 Teilnehmer erwartet", text: "Drei Tage Generative KI, Responsible AI und Startup-Messe am Innovation Park. Tickets für Studierende kostenlos." },
  { category: "WIRTSCHAFT", title: "CampusFounders Demo Day: 8 Startups im Pitch", text: "HealthTech, EdTech, CleanTech — die Accelerator-Startups präsentieren sich Investoren am 15. Juni auf dem Bildungscampus." },
  { category: "EVENTS", title: "Foodtruck-Festival am Neckar", text: "25 Foodtrucks, DJs und Cocktails am Neckarufer. 7.–8. Juni, Eintritt frei." },
  { category: "BILDUNG", title: "DHBW Heilbronn: Offener Campus-Tag am 14. Juni", text: "Studieninteressierte können Vorlesungen besuchen, Labore besichtigen und sich beraten lassen." }
];

const CALENDAR_EVENTS = [
  { day: "Mo", date: "02.06", events: [{ type: "scrape", label: "Auto-Scraping 12 Quellen" }] },
  { day: "Di", date: "03.06", events: [{ type: "instagram", label: "IG: SV Heilbronn Aufstieg" }, { type: "scrape", label: "echo24 Scraping" }] },
  { day: "Mi", date: "04.06", events: [{ type: "tiktok", label: "TT: KI-Konferenz Teaser" }] },
  { day: "Do", date: "05.06", events: [{ type: "facebook", label: "FB: Weindorf Ankündigung" }, { type: "scrape", label: "Auto-Scraping" }] },
  { day: "Fr", date: "06.06", events: [{ type: "tiktok", label: "TT: Foodtruck POV" }, { type: "instagram", label: "IG: Foodtruck Carousel" }] },
  { day: "Sa", date: "07.06", events: [] },
  { day: "So", date: "08.06", events: [{ type: "newsletter", label: "Newsletter KW24 Versand" }] },
  { day: "Mo", date: "09.06", events: [{ type: "scrape", label: "Auto-Scraping 12 Quellen" }, { type: "instagram", label: "IG: DHBW Campus-Tag" }] },
  { day: "Di", date: "10.06", events: [{ type: "tiktok", label: "TT: Demo Day Countdown" }] },
  { day: "Mi", date: "11.06", events: [{ type: "facebook", label: "FB: Connect IT Event" }] },
  { day: "Do", date: "12.06", events: [{ type: "scrape", label: "Auto-Scraping" }] },
  { day: "Fr", date: "13.06", events: [{ type: "tiktok", label: "TT: Demo Day Recap" }, { type: "instagram", label: "IG: Demo Day Highlights" }] },
  { day: "Sa", date: "14.06", events: [] },
  { day: "So", date: "15.06", events: [{ type: "newsletter", label: "Newsletter KW25 Versand" }] }
];

const ENGLISH_POSTS = {
  tiktok: {
    text: "POV: You discover the Heilbronn Wine Festival 🍷✨\n\n30+ wine stands, live music, amazing food — starting September 12 at Kiliansplatz!\n\nWho's coming? 👇",
    hashtags: "#Heilbronn #WineFestival2026 #WineTok #FYP #Germany #WineFestVibes"
  },
  instagram: {
    text: "🍷 The Heilbronn Wine Festival is back!\n\nOver 30 wine stands, live music and culinary highlights await you from September 12 at Kiliansplatz.\n\nThis year featuring international guests and an expanded program. Free admission!\n\n📅 September 12 – October\n📍 Kiliansplatz, Heilbronn",
    hashtags: "#Heilbronn #WineFestival #Wine #Events #Germany #Kiliansplatz #RegionalWines"
  },
  facebook: {
    text: "🍷 Heilbronn Wine Festival 2026 — Save the Date!\n\nDear friends of Heilbronn,\n\nIt's that time again: From September 12, Kiliansplatz transforms into our beloved Wine Festival.\n\nOver 30 wine stands with regional wines, live music every evening, diverse culinary offerings, and this year for the first time, international winemakers as guests.\n\nOpening hours:\nMon–Sat: 11:00 AM – 11:00 PM\nSun: 11:00 AM – 9:00 PM\nFree admission!\n\nWe look forward to seeing you! 🥂",
    hashtags: ""
  }
};


// ── DOM Ready ──────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initSidebar();
  renderAnalytics();
  renderSources();
  renderArticlesTable("all");
  renderPersonas();
  renderContentOutput();
  renderCalendar();
  renderNewsletter();
  initModal();
  initTimeSlider();
  setActiveView("analytics");
});


// ── Tab Navigation ─────────────────────────────────────────

function initTabs() {
  document.querySelectorAll(".ribbon__tab").forEach(tab => {
    tab.addEventListener("click", () => setActiveView(tab.dataset.view));
  });
}

function setActiveView(viewId) {
  document.querySelectorAll(".ribbon__tab").forEach(t => t.classList.remove("ribbon__tab--active"));
  const activeTab = document.querySelector(`.ribbon__tab[data-view="${viewId}"]`);
  if (activeTab) activeTab.classList.add("ribbon__tab--active");

  document.querySelectorAll(".view").forEach(v => v.classList.remove("view--active"));
  const activeView = document.getElementById(`view-${viewId}`);
  if (activeView) activeView.classList.add("view--active");

  updateSidebar(viewId);
  updateStatusBar(viewId);


}


// ── Sidebar ────────────────────────────────────────────────

function initSidebar() {
  document.getElementById("sidebar").addEventListener("click", (e) => {
    const item = e.target.closest(".sidebar__item");
    if (!item) return;
    document.querySelectorAll(".sidebar__item").forEach(i => i.classList.remove("sidebar__item--active"));
    item.classList.add("sidebar__item--active");
    const action = item.dataset.action;
    if (action) handleSidebarAction(action);
  });
}

function updateSidebar(viewId) {
  const sidebar = document.getElementById("sidebar");
  const configs = {
    analytics: `
      <div class="sidebar__section-title">Analytics</div>
      <button class="sidebar__item sidebar__item--active" data-action="overview">
        <span class="sidebar__item-icon">📊</span> Übersicht
      </button>
      <button class="sidebar__item" data-action="engagement">
        <span class="sidebar__item-icon">📈</span> Engagement
      </button>
      <button class="sidebar__item" data-action="reach">
        <span class="sidebar__item-icon">👁️</span> Reichweite
      </button>
      <button class="sidebar__item" data-action="top-content">
        <span class="sidebar__item-icon">🏆</span> Top Content
      </button>
      <div class="sidebar__section-title">Plattformen</div>
      <button class="sidebar__item" data-action="p-tiktok">
        <span class="sidebar__item-icon">🎵</span> TikTok
        <span class="sidebar__item-badge">1.2K</span>
      </button>
      <button class="sidebar__item" data-action="p-instagram">
        <span class="sidebar__item-icon">📸</span> Instagram
        <span class="sidebar__item-badge">3.8K</span>
      </button>
      <button class="sidebar__item" data-action="p-facebook">
        <span class="sidebar__item-icon">📘</span> Facebook
        <span class="sidebar__item-badge">5.5K</span>
      </button>
      <div class="sidebar__section-title">Datenquellen</div>
      <button class="sidebar__item" data-action="meta-api">
        <span class="sidebar__item-icon">⚠️</span> Meta API Status
      </button>
    `,
    sources: `
      <div class="sidebar__section-title">Quellen (${SOURCES.length})</div>
      <button class="sidebar__item sidebar__item--active" data-action="all-sources">
        <span class="sidebar__item-icon">📁</span> Alle Quellen
      </button>
      <button class="sidebar__item" data-action="active-sources">
        <span class="sidebar__item-icon">✅</span> Aktive
        <span class="sidebar__item-badge">${SOURCES.filter(s => s.status === 'aktiv').length}</span>
      </button>
      <button class="sidebar__item" data-action="paused-sources">
        <span class="sidebar__item-icon">⏸️</span> Pausiert
        <span class="sidebar__item-badge">${SOURCES.filter(s => s.status === 'pausiert').length}</span>
      </button>
      <div class="sidebar__section-title">Kategorien</div>
      <button class="sidebar__item" data-action="filter-all"><span class="sidebar__item-icon">📄</span> Alle Artikel</button>
      <button class="sidebar__item" data-action="filter-events"><span class="sidebar__item-icon">🎉</span> Events</button>
      <button class="sidebar__item" data-action="filter-technologie"><span class="sidebar__item-icon">💻</span> Technologie</button>
      <button class="sidebar__item" data-action="filter-wirtschaft"><span class="sidebar__item-icon">💰</span> Wirtschaft</button>
      <button class="sidebar__item" data-action="filter-sport"><span class="sidebar__item-icon">⚽</span> Sport</button>
      <button class="sidebar__item" data-action="filter-bildung"><span class="sidebar__item-icon">📚</span> Bildung</button>
    `,
    personas: `
      <div class="sidebar__section-title">Personas</div>
      <button class="sidebar__item sidebar__item--active" data-action="all-personas"><span class="sidebar__item-icon">👥</span> Alle Personas</button>
      ${PERSONAS.map(p => `<button class="sidebar__item" data-action="select-persona-${p.id}"><span class="sidebar__item-icon">${p.emoji}</span> ${p.name}</button>`).join("")}
      <div class="sidebar__section-title">Filter</div>
      <button class="sidebar__item" data-action="high-relevance"><span class="sidebar__item-icon">📈</span> Hohe Relevanz</button>
    `,
    newsletter: `
      <div class="sidebar__section-title">Newsletter</div>
      <button class="sidebar__item sidebar__item--active" data-action="nl-editor"><span class="sidebar__item-icon">📰</span> Editor</button>
      <button class="sidebar__item" data-action="nl-preview"><span class="sidebar__item-icon">👁️</span> Vorschau</button>
      <button class="sidebar__item" data-action="nl-archive"><span class="sidebar__item-icon">📁</span> Archiv</button>
      <div class="sidebar__section-title">Ausgaben</div>
      <button class="sidebar__item" data-action="nl-kw24"><span class="sidebar__item-icon">📅</span> KW 24 (aktuell)<span class="sidebar__item-badge">Entwurf</span></button>
      <button class="sidebar__item" data-action="nl-kw23"><span class="sidebar__item-icon">📅</span> KW 23</button>
      <button class="sidebar__item" data-action="nl-kw22"><span class="sidebar__item-icon">📅</span> KW 22</button>
    `,
    output: `
      <div class="sidebar__section-title">Content</div>
      <button class="sidebar__item sidebar__item--active" data-action="all-content"><span class="sidebar__item-icon">📁</span> Alle Posts</button>
      <button class="sidebar__item" data-action="drafts"><span class="sidebar__item-icon">📝</span> Entwürfe<span class="sidebar__item-badge">3</span></button>
      <button class="sidebar__item" data-action="scheduled"><span class="sidebar__item-icon">🕐</span> Geplant<span class="sidebar__item-badge">2</span></button>
      <button class="sidebar__item" data-action="published"><span class="sidebar__item-icon">✅</span> Veröffentlicht<span class="sidebar__item-badge">4</span></button>
      <div class="sidebar__section-title">Plattformen</div>
      <button class="sidebar__item" data-action="platform-tiktok"><span class="sidebar__item-icon">🎵</span> TikTok</button>
      <button class="sidebar__item" data-action="platform-instagram"><span class="sidebar__item-icon">📸</span> Instagram</button>
      <button class="sidebar__item" data-action="platform-facebook"><span class="sidebar__item-icon">📘</span> Facebook</button>
    `
  };
  sidebar.innerHTML = configs[viewId] || configs.analytics;
}

function handleSidebarAction(action) {
  if (action === "goto-sources") setActiveView("sources");
  else if (action === "goto-personas") setActiveView("personas");
  else if (action.startsWith("filter-")) {
    const cat = action.replace("filter-", "");
    renderArticlesTable(cat);
  }
  else if (action.startsWith("select-persona-")) {
    selectPersona(parseInt(action.replace("select-persona-", "")));
  }
  else if (action === "toggle-agentic") {
    toggleAgenticPanel();
  }
  else if (action === "meta-api") {
    showToast("Meta Graph API: Begrenzte Reichweite-Daten verfügbar (Business Account erforderlich)", "warning");
  }
  else {
    showToast("Navigiert zu: " + action, "info");
  }
}


// ── Analytics View ─────────────────────────────────────────

function renderAnalytics() {
  // Summary cards
  const d = ANALYTICS_DATA;
  document.getElementById("analytics-cards").innerHTML = `
    <div class="card card--accent">
      <div class="card__label">Gesamtreichweite</div>
      <div class="card__value">${((d.reach.tiktok + d.reach.instagram + d.reach.facebook) / 1000).toFixed(1)}K</div>
      <div class="card__sub">+18% vs. Vorwoche</div>
    </div>
    <div class="card card--success">
      <div class="card__label">Follower Gesamt</div>
      <div class="card__value">${((d.platformFollowers.tiktok + d.platformFollowers.instagram + d.platformFollowers.facebook) / 1000).toFixed(1)}K</div>
      <div class="card__sub">TT: ${d.platformFollowers.tiktok} · IG: ${d.platformFollowers.instagram} · FB: ${d.platformFollowers.facebook}</div>
    </div>
    <div class="card card--warning">
      <div class="card__label">Posts (30 Tage)</div>
      <div class="card__value">${d.platformPosts.tiktok + d.platformPosts.instagram + d.platformPosts.facebook}</div>
      <div class="card__sub">TT: ${d.platformPosts.tiktok} · IG: ${d.platformPosts.instagram} · FB: ${d.platformPosts.facebook}</div>
    </div>
    <div class="card card--error">
      <div class="card__label">Gescrapte Artikel</div>
      <div class="card__value">${SOURCES.reduce((s, x) => s + x.articles, 0)}</div>
      <div class="card__sub">${SOURCES.length} Quellen aktiv</div>
    </div>
  `;

  // Category donut
  renderDonutChart();

  // Trend Scraping (New)
  renderTrendScraping();

  // Persona Interests (New)
  renderPersonaInterestsAnalytics();

  // Activity feed
  document.getElementById("analytics-feed").innerHTML = ACTIVITY_LOG.map(item => `
    <div class="activity-item">
      <span class="activity-item__time">${item.time}</span>
      <span class="activity-item__text">${item.text}</span>
    </div>
  `).join("");
}

function renderTrendScraping() {
  const el = document.getElementById("trend-scraped-topics");
  if (!el) return;

  const keywordsHTML = `
    <div style="font-size:11px;font-weight:600;color:var(--text-secondary);margin-bottom:6px">TRENDING KEYWORDS (HEILBRONN)</div>
    <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px">
      ${TRENDS_DATA.keywords.map(k => {
    const trendIcon = k.trend === "up" ? "📈" : k.trend === "down" ? "📉" : "➡️";
    const badgeColor = k.trend === "up" ? "badge--green" : k.trend === "down" ? "badge--red" : "badge--gray";
    return `<span class="badge ${badgeColor}" title="Volume: ${k.volume}" style="padding:4px 8px;cursor:help;font-size:10px">${k.word} ${trendIcon} ${k.change}</span>`;
  }).join("")}
    </div>
  `;

  const topicsHTML = `
    <div style="font-size:11px;font-weight:600;color:var(--text-secondary);margin-bottom:6px">TRENDING SOCIAL MEDIA TOPICS</div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${TRENDS_DATA.topics.map(t => `
        <div class="stat-row" style="padding:4px 0">
          <span style="font-weight:600;font-size:12px">${t.title}</span>
          <span style="font-size:11px;color:var(--text-secondary)">${t.platform} · Reach: ${t.reach} · ${t.engagement} ER</span>
        </div>
      `).join("")}
    </div>
  `;

  el.innerHTML = keywordsHTML + topicsHTML;
}

function renderPersonaInterestsAnalytics() {
  const el = document.getElementById("persona-interests-analytics");
  if (!el) return;

  el.innerHTML = `
    <div style="font-size:11px;font-weight:600;color:var(--text-secondary);margin-bottom:6px">MARKTANTEILE & INTERESSEN-MATCHING</div>
    <div class="table-container" style="margin-bottom:0;border:none">
      <table style="font-size:11px">
        <thead>
          <tr style="background:none">
            <th style="padding:4px 8px">Persona</th>
            <th style="padding:4px 8px">Reichweite-Anteil</th>
            <th style="padding:4px 8px">Hauptinteresse</th>
            <th style="padding:4px 8px">Engagement-Rate</th>
          </tr>
        </thead>
        <tbody>
          ${PERSONA_ANALYTICS_DATA.map(p => `
            <tr style="cursor:default">
              <td style="padding:6px 8px"><strong>${p.emoji} ${p.name}</strong></td>
              <td style="padding:6px 8px">${p.reachShare}</td>
              <td style="padding:6px 8px"><span class="badge badge--gray" style="font-size:10px">${p.topInterest}</span></td>
              <td style="padding:6px 8px;font-weight:600;color:var(--success)">${p.engagement}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderDonutChart() {
  const cats = ANALYTICS_DATA.categories;
  const total = cats.reduce((s, c) => s + c.count, 0);
  let cumulative = 0;
  const segments = cats.map(c => {
    const start = cumulative;
    cumulative += (c.count / total) * 100;
    return { ...c, start, end: cumulative };
  });

  // Build conic-gradient-like SVG
  const size = 120;
  const cx = size / 2, cy = size / 2, r = 48, innerR = 28;
  let pathsHTML = "";
  segments.forEach(seg => {
    const startAngle = (seg.start / 100) * 360 - 90;
    const endAngle = (seg.end / 100) * 360 - 90;
    const largeArc = (endAngle - startAngle) > 180 ? 1 : 0;
    const toRad = a => (a * Math.PI) / 180;
    const x1 = cx + r * Math.cos(toRad(startAngle));
    const y1 = cy + r * Math.sin(toRad(startAngle));
    const x2 = cx + r * Math.cos(toRad(endAngle));
    const y2 = cy + r * Math.sin(toRad(endAngle));
    const ix1 = cx + innerR * Math.cos(toRad(endAngle));
    const iy1 = cy + innerR * Math.sin(toRad(endAngle));
    const ix2 = cx + innerR * Math.cos(toRad(startAngle));
    const iy2 = cy + innerR * Math.sin(toRad(startAngle));
    pathsHTML += `<path d="M${x1},${y1} A${r},${r} 0 ${largeArc},1 ${x2},${y2} L${ix1},${iy1} A${innerR},${innerR} 0 ${largeArc},0 ${ix2},${iy2} Z" fill="${seg.color}"/>`;
  });

  document.getElementById("donut-chart").innerHTML = `
    <div class="donut-wrap">
      <svg class="donut-svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">${pathsHTML}</svg>
      <div class="donut-legend">
        ${cats.map(c => `
          <div class="donut-legend__item">
            <div class="donut-legend__dot" style="background:${c.color}"></div>
            <span>${c.name} (${c.count})</span>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderTopContent() {
  const tbody = document.getElementById("top-content-tbody");
  tbody.innerHTML = ANALYTICS_DATA.topContent.map((c, i) => `
    <tr>
      <td style="font-weight:600">${i + 1}</td>
      <td><strong>${c.title}</strong></td>
      <td><span class="badge badge--gray">${c.platform}</span></td>
      <td>${(c.reach / 1000).toFixed(1)}K</td>
      <td style="font-weight:600;color:var(--success)">${c.engagement}</td>
    </tr>
  `).join("");
}


// ── Sources View ───────────────────────────────────────────

function renderSources() {
  const tbody = document.getElementById("sources-tbody");
  tbody.innerHTML = SOURCES.map(s => `
    <tr onclick="showToast('Quelle: ${s.url}', 'info')">
      <td><strong>${s.name}</strong></td>
      <td style="color:var(--primary)">${s.url}</td>
      <td>${s.lastScraped}</td>
      <td>${s.articles}</td>
      <td>
        <span class="status-dot status-dot--${s.status === 'aktiv' ? 'green' : 'orange'}"></span>
        ${s.status === 'aktiv' ? 'Aktiv' : 'Pausiert'}
      </td>
    </tr>
  `).join("");
}

function openSourcesModal() {
  document.getElementById("sources-list-overlay").style.display = "flex";
  renderSources();
}

function closeSourcesModal() {
  document.getElementById("sources-list-overlay").style.display = "none";
}

function handleAddSource() {
  const name = document.getElementById("new-source-name").value.trim();
  const url = document.getElementById("new-source-url").value.trim();

  if (!name || !url) {
    showToast("Bitte Name und URL der Quelle eingeben!", "warning");
    return;
  }

  const today = new Date();
  const formattedDate = today.toLocaleDateString("de-DE") + ", " + today.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });

  SOURCES.push({
    name: name,
    url: url,
    lastScraped: formattedDate,
    articles: 0,
    status: "aktiv"
  });

  document.getElementById("new-source-name").value = "";
  document.getElementById("new-source-url").value = "";

  renderSources();
  renderAnalytics();

  showToast(`Quelle "${name}" wurde hinzugefügt!`, "success");
}

function renderArticlesTable(category) {
  const tbody = document.getElementById("articles-tbody");
  const filtered = category === "all"
    ? ARTICLES
    : ARTICLES.filter(a => a.category.toLowerCase() === category.toLowerCase());

  tbody.innerHTML = filtered.map(a => {
    const statusBadge = { "neu": "badge--blue", "verarbeitet": "badge--green", "archiviert": "badge--gray" };
    return `
      <tr onclick="openArticleModal(${a.id})">
        <td>
          <div style="display:flex;gap:12px;align-items:center">
            <div class="img-placeholder img-placeholder--sm" style="width:60px;height:44px;flex-shrink:0">
              <span class="img-placeholder__icon" style="font-size:16px">📷</span>
            </div>
            <div>
              <strong>${a.title}</strong>
              <br><span style="color:var(--text-secondary);font-size:11px">${a.snippet.substring(0, 70)}…</span>
            </div>
          </div>
        </td>
        <td style="font-size:11px;color:var(--primary)">${a.source}</td>
        <td><span class="badge badge--gray">${a.category}</span></td>
        <td>${a.date}</td>
        <td><span class="badge ${statusBadge[a.status]}">${a.status}</span></td>
      </tr>
    `;
  }).join("");
}


// ── Personas View ──────────────────────────────────────────

let selectedPersonaId = null;

function renderPersonas() {
  const grid = document.getElementById("persona-grid");
  grid.innerHTML = PERSONAS.map(p => `
    <div class="persona-card ${selectedPersonaId === p.id ? 'persona-card--selected' : ''}" onclick="selectPersona(${p.id})" id="persona-card-${p.id}">
      <div class="persona-card__header">
        <div class="persona-card__avatar">${p.emoji}</div>
        <div>
          <div class="persona-card__name">${p.name}</div>
          <div class="persona-card__demo">${p.ageRange} Jahre · ${p.followers} Follower</div>
        </div>
      </div>
      <div style="font-size:12px;color:var(--text-secondary);margin-bottom:10px">${p.description}</div>
      
      <div class="persona-details" style="font-size:11px;display:flex;flex-direction:column;gap:6px;border-top:1px solid var(--border-light);padding-top:8px">
        <div>
          <strong>🔥 Hauptinteressen:</strong> 
          <span style="color:var(--text-secondary)">${p.massiveInterests.join(" · ")}</span>
        </div>
        <div>
          <strong>📸 Instagram Accounts:</strong> 
          <span style="color:var(--primary)">${p.instagramAccounts.join(" · ")}</span>
        </div>
      </div>
      
      <div style="display:flex;justify-content:space-between;margin-top:10px;font-size:11px;border-top:1px solid var(--border-light);padding-top:8px">
        <span><strong>Plattformen:</strong> ${p.platforms.join(", ")}</span>
      </div>
    </div>
  `).join("");
  renderPersonaArticles();
}

function selectPersona(pid) {
  selectedPersonaId = selectedPersonaId === pid ? null : pid;
  renderPersonas();
}

function renderPersonaArticles() {
  const thead = document.getElementById("persona-articles-thead");
  const tbody = document.getElementById("persona-articles-tbody");
  if (!tbody || !thead) return;

  thead.innerHTML = `
    <tr>
      <th style="min-width:250px">Artikel</th>
      <th>Kategorie</th>
      ${PERSONAS.map(p => `<th>${p.emoji} ${p.name.split(" ")[0]}</th>`).join("")}
    </tr>
  `;

  const articles = selectedPersonaId ? ARTICLES.filter(a => a.personas.includes(selectedPersonaId)) : ARTICLES;

  tbody.innerHTML = articles.map(a => {
    const cells = PERSONAS.map(p => {
      const score = a.relevance[p.id] || 0;
      const color = score >= 80 ? "var(--success)" : score >= 50 ? "var(--warning)" : "var(--text-disabled)";
      return `<td style="font-weight:600;color:${color}">${score}%</td>`;
    }).join("");
    return `<tr onclick="openArticleModal(${a.id})"><td><strong>${a.title}</strong></td><td><span class="badge badge--gray">${a.category}</span></td>${cells}</tr>`;
  }).join("");
}





// ── Newsletter View ────────────────────────────────────────

function renderNewsletter() {
  const preview = document.getElementById("newsletter-preview-body");
  if (!preview) return;

  preview.innerHTML = NEWSLETTER_ARTICLES.map(a => `
    <div class="newsletter-article">
      <div class="newsletter-article__category">${a.category}</div>
      <div class="img-placeholder img-placeholder--sm" style="margin-bottom:8px">
        <span class="img-placeholder__icon">📷</span>
        <span class="img-placeholder__label">Artikelbild</span>
      </div>
      <div class="newsletter-article__title">${a.title}</div>
      <div class="newsletter-article__text">${a.text}</div>
      <span class="newsletter-article__cta" onclick="showToast('Link: Weiterlesen… (Click Dummy)', 'info')">Weiterlesen →</span>
    </div>
  `).join("");
}

function handleGenerateNewsletter() {
  showToast("Newsletter KW24 wird generiert… Bitte warten.", "info");
  setTimeout(() => {
    showToast("Newsletter KW24 erfolgreich generiert!", "success");
  }, 1500);
}


// ── Content Output View ────────────────────────────────────

function renderContentOutput() {
  const grid = document.getElementById("content-output-grid");
  const platforms = ["tiktok", "instagram", "facebook"];
  const platformIcons = { tiktok: "🎵", instagram: "📸", facebook: "📘" };

  grid.innerHTML = platforms.map(plat => {
    const post = GENERATED_POSTS[plat];
    return `
      <div class="post-preview">
        <div class="post-preview__header">
          <span>${platformIcons[plat]} ${post.platform}</span>
          <span class="badge badge--blue">Entwurf</span>
        </div>
        <div class="post-preview__body">
          <div class="img-placeholder img-placeholder--md img-preview-container ${post.customImageSrc ? 'has-image' : ''}" onclick="triggerImagePicker(this)">
            ${post.customImageSrc
        ? `<img src="${post.customImageSrc}" alt="${post.platform}" style="width:100%;height:100%;object-fit:cover;display:block;position:absolute;inset:0"><div class="img-upload-overlay" style="background:rgba(0,0,0,0.5);color:#fff">➕ Bild ändern</div>`
        : `<span class="img-placeholder__icon">📷</span><span class="img-placeholder__label">${post.platform}-Bild / Video (Klicken für Upload)</span><div class="img-upload-overlay">➕ Bild hinzufügen</div>`
      }
          </div>
          <div class="post-preview__text" id="output-text-${plat}" style="margin-top:12px">${post.text}</div>
          ${post.hashtags ? `<div class="post-preview__hashtags" id="output-hashtags-${plat}">${post.hashtags}</div>` : ""}
        </div>
        <div class="post-preview__footer">
          <button class="btn btn--sm" id="translate-btn-${plat}" onclick="toggleTranslation('${plat}')">🌐 EN</button>
          <button class="btn btn--sm" onclick="showToast('Entwurf gespeichert', 'success')">💾 Speichern</button>
          <button class="btn btn--sm btn--primary" onclick="openPublishModal('${plat}')">Veröffentlichen</button>
        </div>
      </div>
    `;
  }).join("");
}


// ── Time Slider ────────────────────────────────────────────

function initTimeSlider() {
  const slider = document.getElementById("time-slider");
  const label = document.getElementById("time-slider-value");
  if (!slider || !label) return;

  slider.addEventListener("input", () => {
    const val = parseInt(slider.value);
    if (val < 0) {
      label.textContent = `${Math.abs(val)} Tage zurück`;
    } else if (val === 0) {
      label.textContent = "Heute";
    } else {
      label.textContent = `+${val} Tage voraus`;
    }
  });
}


// ── Article Modal ──────────────────────────────────────────

function initModal() {
  const overlay = document.getElementById("modal-overlay");
  overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(); });
  document.getElementById("modal-close").addEventListener("click", closeModal);
}

function openArticleModal(articleId) {
  const article = ARTICLES.find(a => a.id === articleId);
  if (!article) return;

  document.getElementById("modal-title").textContent = article.title;
  document.getElementById("modal-body").innerHTML = `
    <div style="margin-bottom:12px">
      <span class="badge badge--gray">${article.category}</span>
      <span style="margin-left:8px;font-size:12px;color:var(--text-secondary)">Quelle: ${article.source} · ${article.date}</span>
    </div>
    <div class="img-placeholder img-placeholder--md" style="margin-bottom:12px">
      <span class="img-placeholder__icon">📷</span>
      <span class="img-placeholder__label">Artikelbild — ${article.title.substring(0, 30)}</span>
    </div>
    <div style="white-space:pre-wrap;line-height:1.7">${article.body}</div>
    <div style="margin-top:16px;padding-top:12px;border-top:1px solid var(--border-light)">
      <div style="font-size:12px;font-weight:600;color:var(--text-secondary);margin-bottom:4px">PERSONA-RELEVANZ</div>
      ${PERSONAS.map(p => {
    const score = article.relevance[p.id] || 0;
    return `<div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
          <span style="min-width:120px;font-size:12px">${p.emoji} ${p.name}</span>
          <div style="flex:1;height:12px;background:var(--surface);border:1px solid var(--border-light)">
            <div style="width:${score}%;height:100%;background:${score >= 80 ? 'var(--success)' : score >= 50 ? 'var(--warning)' : 'var(--border)'}"></div>
          </div>
          <span style="font-size:12px;font-weight:600;min-width:32px">${score}%</span>
        </div>`;
  }).join("")}
    </div>
    <div style="margin-top:12px;padding-top:12px;border-top:1px solid var(--border-light)">
      <div style="font-size:12px;font-weight:600;color:var(--text-secondary);margin-bottom:4px">QUELLE</div>
      <div style="font-size:12px;color:var(--primary)">${article.source}</div>
    </div>
  `;

  document.getElementById("modal-overlay").classList.add("modal-overlay--visible");
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("modal-overlay--visible");
}

let activeImageTarget = null;

function triggerImagePicker(element) {
  activeImageTarget = element;
  document.getElementById("image-picker-overlay").style.display = "flex";
}

function closeImagePicker() {
  document.getElementById("image-picker-overlay").style.display = "none";
  activeImageTarget = null;
}

function selectPickerImage(src, altText) {
  if (activeImageTarget) {
    activeImageTarget.innerHTML = `
      <img src="${src}" alt="${altText}" style="width:100%;height:100%;object-fit:cover;display:block;position:absolute;inset:0">
      <div class="img-upload-overlay" style="background:rgba(0,0,0,0.5);color:#fff">➕ Bild ändern</div>
    `;
    activeImageTarget.classList.add("has-image");
  }
  closeImagePicker();
  showToast("Bild erfolgreich ausgewählt!", "success");
}

function openAddIdeaModal() {
  document.getElementById("add-idea-overlay").style.display = "flex";
}

function closeAddIdeaModal() {
  document.getElementById("add-idea-overlay").style.display = "none";
  document.getElementById("idea-title").value = "";
  document.getElementById("idea-type").value = "preliminary";
  document.getElementById("idea-desc").value = "";
  const imgContainer = document.getElementById("idea-img-container");
  imgContainer.innerHTML = `
    <span class="img-placeholder__icon">📷</span>
    <span class="img-placeholder__label">Klicken, um Bild auszuwählen</span>
    <div class="img-upload-overlay">➕ Bild hinzufügen</div>
  `;
  imgContainer.classList.remove("has-image");
}

function handleAddIdea() {
  const title = document.getElementById("idea-title").value.trim();
  const type = document.getElementById("idea-type").value;
  const desc = document.getElementById("idea-desc").value.trim();
  const imgContainer = document.getElementById("idea-img-container");

  if (!title) {
    showToast("Bitte gib einen Titel ein!", "warning");
    return;
  }

  showToast("KI extrahiert Eventdaten & bewertet Relevanz...", "info");

  setTimeout(() => {
    let imageSrc = null;
    const imgEl = imgContainer.querySelector("img");
    if (imgEl) {
      imageSrc = imgEl.getAttribute("src");
    }

    const isEvent = type === "preliminary";
    const newId = ARTICLES.length + 1;
    const today = new Date();
    const formattedDate = today.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" });

    const newArticle = {
      id: newId,
      title: title,
      source: isEvent ? "Vorläufige Info / Idee" : "Heilbronner Stimme (manuell)",
      sourceIdx: 0,
      category: isEvent ? "Events" : "Wirtschaft",
      date: formattedDate,
      status: "neu",
      snippet: desc.substring(0, 100) + (desc.length > 100 ? "..." : ""),
      body: desc || "Keine weiteren Details erfasst.",
      personas: isEvent ? [1, 3, 4] : [1, 2],
      relevance: {
        1: isEvent ? 88 : 80,
        2: isEvent ? 65 : 85,
        3: isEvent ? 90 : 50,
        4: isEvent ? 75 : 40
      },
      image: imageSrc ? "uploaded" : null,
      customImageSrc: imageSrc
    };

    ARTICLES.unshift(newArticle);

    renderArticlesTable("all");
    renderPersonaArticles();

    const nowTime = today.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });
    ACTIVITY_LOG.unshift({ time: nowTime, text: `Event extrahiert: "${title}"`, type: "success" });
    renderAnalytics();

    closeAddIdeaModal();
    showToast("Extraktion abgeschlossen! Event erfasst.", "success");
  }, 1000);
}

let tempDrafts = {};

function openAiGenerationModal() {
  const personaSelect = document.getElementById("ai-persona-select");
  personaSelect.innerHTML = PERSONAS.map(p => `<option value="${p.id}">${p.emoji} ${p.name}</option>`).join("");

  const articleSelect = document.getElementById("ai-article-select");
  articleSelect.innerHTML = `<option value="">-- Freie Texteingabe ohne Artikel --</option>` +
    ARTICLES.map(a => `<option value="${a.id}">${a.title.substring(0, 50)}...</option>`).join("");

  document.getElementById("ai-topic-desc").value = "";
  const imgContainer = document.getElementById("ai-img-container");
  imgContainer.innerHTML = `
    <span class="img-placeholder__icon">📷</span>
    <span class="img-placeholder__label">Klicken, um Bild auszuwählen</span>
    <div class="img-upload-overlay">➕ Bild hinzufügen</div>
  `;
  imgContainer.classList.remove("has-image");

  document.querySelectorAll(".platform-toggle").forEach(btn => {
    btn.classList.add("btn--active", "btn--primary");
  });

  document.getElementById("ai-results-container").style.display = "none";
  document.getElementById("ai-gen-btn").style.display = "inline-flex";
  document.getElementById("ai-save-btn").style.display = "none";

  document.getElementById("ai-generation-overlay").style.display = "flex";
}

function closeAiGenerationModal() {
  document.getElementById("ai-generation-overlay").style.display = "none";
  tempDrafts = {};
}

function togglePlatformButton(btn) {
  btn.classList.toggle("btn--active");
  btn.classList.toggle("btn--primary");
}

function fillTopicFromArticle(select) {
  const articleId = parseInt(select.value);
  if (articleId) {
    const art = ARTICLES.find(a => a.id === articleId);
    if (art) {
      document.getElementById("ai-topic-desc").value = art.title + ": " + art.snippet;
    }
  } else {
    document.getElementById("ai-topic-desc").value = "";
  }
}

function handleAiGeneration() {
  const topic = document.getElementById("ai-topic-desc").value.trim();
  const personaId = parseInt(document.getElementById("ai-persona-select").value);
  const persona = PERSONAS.find(p => p.id === personaId);
  const imgContainer = document.getElementById("ai-img-container");

  // Find toggled platforms
  const platforms = [];
  document.querySelectorAll(".platform-toggle.btn--active").forEach(btn => {
    platforms.push(btn.dataset.platform);
  });

  if (!topic) {
    showToast("Bitte gib ein Thema oder eine Leitidee ein!", "warning");
    return;
  }

  if (platforms.length === 0) {
    showToast("Bitte wähle mindestens eine Plattform aus!", "warning");
    return;
  }

  showToast("KI entwirft Social Media Beiträge...", "info");

  document.getElementById("ai-gen-btn").innerHTML = "⌛ Generiere...";
  document.getElementById("ai-gen-btn").disabled = true;

  setTimeout(() => {
    let imageSrc = null;
    const imgEl = imgContainer.querySelector("img");
    if (imgEl) {
      imageSrc = imgEl.getAttribute("src");
    }

    tempDrafts = {};
    let resultsHTML = "";

    platforms.forEach(plat => {
      const text = generatePlatformText(plat, topic, persona);
      const hashtags = plat === "facebook" ? "" : plat === "tiktok" ? "#Heilbronn #Trends #Genz #Trending" : "#Heilbronn #Community #Life";
      tempDrafts[plat] = { text, hashtags, imageSrc };

      const platformLabels = { tiktok: "🎵 TikTok", instagram: "📸 Instagram", facebook: "📘 Facebook" };
      resultsHTML += `
        <div style="background:var(--surface);border:1px solid var(--border-light);padding:8px;border-radius:var(--radius)">
          <div style="font-weight:600;font-size:11px;color:var(--text-secondary);text-transform:uppercase;margin-bottom:4px">${platformLabels[plat]}</div>
          <textarea rows="3" style="width:100%;padding:4px;font-size:12px;font-family:var(--font);border:1px solid var(--border);border-radius:var(--radius);resize:vertical;outline:none" oninput="tempDrafts['${plat}'].text = this.value">${text}</textarea>
          ${hashtags ? `<input type="text" value="${hashtags}" style="width:100%;margin-top:4px;padding:4px;font-size:11px;color:var(--primary);border:1px solid var(--border);border-radius:var(--radius);outline:none" oninput="tempDrafts['${plat}'].hashtags = this.value">` : ""}
        </div>
      `;
    });

    document.getElementById("ai-results-list").innerHTML = resultsHTML;
    document.getElementById("ai-results-container").style.display = "block";

    document.getElementById("ai-gen-btn").innerHTML = "⚡ KI-Beiträge entwerfen";
    document.getElementById("ai-gen-btn").disabled = false;
    document.getElementById("ai-gen-btn").style.display = "none";
    document.getElementById("ai-save-btn").style.display = "inline-flex";

    showToast("Entwürfe erfolgreich generiert!", "success");
  }, 1200);
}

function generatePlatformText(platform, topicText, persona) {
  const cleanTopic = topicText.replace(/[:]/g, " — ");
  if (platform === "tiktok") {
    return `POV: Du wohnst in Heilbronn und erfährst das: ${cleanTopic}! 🍷✨\n\nPasst perfekt für unsere Community! Was meint ihr dazu? 👇`;
  } else if (platform === "instagram") {
    return `📸 Heilbronn Trends: ${cleanTopic}.\n\nPerfekt für unsere Zielgruppe ${persona.name}. Wie gefällt euch dieses Thema?\n\n📍 Heilbronn\n#Heilbronn #StimmeNews #SocialMedia #Trend`;
  } else {
    return `📘 Liebe Heilbronnerinnen und Heilbronner,\n\nwir möchten Sie über folgendes informieren: ${cleanTopic}.\n\nDieser Beitrag richtet sich besonders an die Community der ${persona.name}.\n\nWas ist Ihre Meinung zu diesem Thema? Schreiben Sie es uns gerne in den Kommentaren! 💬`;
  }
}

function saveAiDrafts() {
  const personaId = parseInt(document.getElementById("ai-persona-select").value);
  const persona = PERSONAS.find(p => p.id === personaId);

  for (const plat in tempDrafts) {
    if (GENERATED_POSTS[plat]) {
      GENERATED_POSTS[plat].text = tempDrafts[plat].text;
      GENERATED_POSTS[plat].hashtags = tempDrafts[plat].hashtags;
      GENERATED_POSTS[plat].charCount = tempDrafts[plat].text.length;
      GENERATED_POSTS[plat].persona = persona.name;

      const imgContainer = document.getElementById("ai-img-container");
      const imgEl = imgContainer.querySelector("img");
      if (imgEl) {
        GENERATED_POSTS[plat].customImageSrc = imgEl.getAttribute("src");
      } else {
        GENERATED_POSTS[plat].customImageSrc = null;
      }
    }
  }

  renderContentOutput();
  setActiveView("output");
  closeAiGenerationModal();
  showToast("Entwürfe in Content-Ausgabe übernommen!", "success");
}


// ── Toast ──────────────────────────────────────────────────

function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = `toast toast--${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.2s";
    setTimeout(() => toast.remove(), 200);
  }, 3000);
}


// ── Status Bar ─────────────────────────────────────────────

function updateStatusBar(viewId) {
  const labels = {
    analytics: "Analytics & Übersicht",
    sources: "Quellen & Scraping",
    personas: "Personas & Filter",
    newsletter: "Newsletter",
    output: "Content-Ausgabe"
  };
  const el = document.getElementById("statusbar-view");
  if (el) el.textContent = labels[viewId] || viewId;
}


// ── Keyboard ───────────────────────────────────────────────

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});




// ── Calendar ───────────────────────────────────────────────

function renderCalendar() {
  const container = document.getElementById("calendar-grid");
  if (!container) return;

  const todayIdx = 4; // Friday 06.06 is index 4 in our 2-week array
  const days = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

  // Header row
  let html = days.map(d => `<div class="calendar-grid__head">${d}</div>`).join("");

  // Event cells (2 weeks = 14 cells)
  CALENDAR_EVENTS.forEach((cell, idx) => {
    const isToday = idx === todayIdx;
    html += `<div class="calendar-grid__cell ${isToday ? 'calendar-grid__cell--today' : ''}">`;
    html += `<div class="calendar-grid__date">${cell.date}${isToday ? ' ●' : ''}</div>`;
    cell.events.forEach(ev => {
      html += `<div class="calendar-event calendar-event--${ev.type}" onclick="showToast('${ev.label}', 'info')">${ev.label}</div>`;
    });
    html += `</div>`;
  });

  container.innerHTML = html;
}


// ── Translation Toggle ─────────────────────────────────────

const translationState = { tiktok: false, instagram: false, facebook: false };

function toggleTranslation(platform) {
  translationState[platform] = !translationState[platform];
  const isEnglish = translationState[platform];
  const original = GENERATED_POSTS[platform];
  const english = ENGLISH_POSTS[platform];

  // Update in Copywriter preview
  const textEl = document.getElementById(`output-text-${platform}`);
  const hashEl = document.getElementById(`output-hashtags-${platform}`);
  const btnEl = document.getElementById(`translate-btn-${platform}`);

  if (textEl) textEl.textContent = isEnglish ? english.text : original.text;
  if (hashEl) hashEl.textContent = isEnglish ? english.hashtags : original.hashtags;
  if (btnEl) {
    btnEl.textContent = isEnglish ? 'DE — Deutsch' : 'EN — English';
    btnEl.classList.toggle('btn--active', isEnglish);
  }

  showToast(isEnglish ? `${original.platform}: Übersetzt nach Englisch` : `${original.platform}: Zurück auf Deutsch`, 'success');
}


// ── Send Revision ──────────────────────────────────────────

function handleSendRevision(channel) {
  if (channel === 'email') {
    showToast('📧 E-Mail an Redaktionsleitung gesendet — Betreff: "Content-Revision KW24 — 3 Posts zur Freigabe"', 'success');
  } else if (channel === 'slack') {
    showToast('💬 Slack-Nachricht an #redaktion gesendet — "3 neue Posts zur Revision bereit"', 'success');
  }
}


// ── Publish Account Selector Modal ─────────────────────────

let currentPublishPlatform = "";

function openPublishModal(platform) {
  currentPublishPlatform = platform;
  const platformDisplay = document.getElementById("publish-platform-display");
  const accountSelect = document.getElementById("publish-account-select");

  if (!platformDisplay || !accountSelect) return;

  const platformNames = {
    tiktok: "TikTok",
    instagram: "Instagram",
    facebook: "Facebook"
  };

  platformDisplay.value = platformNames[platform.toLowerCase()] || platform;

  let options = [];
  if (platform.toLowerCase() === "tiktok") {
    options = [
      { value: "@stimme.next", label: "🎵 @stimme.next (Gen-Z Kanal)" },
      { value: "@echo24.de", label: "🎵 @echo24.de (Regionales TikTok)" }
    ];
  } else if (platform.toLowerCase() === "instagram") {
    options = [
      { value: "@stimme.news", label: "📸 @stimme.news (Hauptkanal)" },
      { value: "@stimme.next", label: "📸 @stimme.next (Junge Zielgruppe)" },
      { value: "@stimme.business", label: "📸 @stimme.business (Wirtschaft)" },
      { value: "@stimme.regio", label: "📸 @stimme.regio (Regional)" },
      { value: "@stimme.familie", label: "📸 @stimme.familie (Familien)" },
      { value: "@stimme.kultur", label: "📸 @stimme.kultur (Kultur & Freizeit)" },
      { value: "@echo24_next", label: "📸 @echo24_next" },
      { value: "@echo24_heilbronn", label: "📸 @echo24_heilbronn" }
    ];
  } else if (platform.toLowerCase() === "facebook") {
    options = [
      { value: "Heilbronner Stimme Page", label: "📘 Heilbronner Stimme (Hauptseite)" },
      { value: "echo24.de Page", label: "📘 echo24.de (Boulevard & HN)" },
      { value: "Stimme Regio Page", label: "📘 Stimme Regio (Landkreis)" },
      { value: "Stimme Familie Page", label: "📘 Stimme Familie (Eltern & Kinder)" }
    ];
  }

  accountSelect.innerHTML = options.map(opt => `<option value="${opt.value}">${opt.label}</option>`).join("");
  document.getElementById("publish-account-overlay").style.display = "flex";
}

function closePublishModal() {
  document.getElementById("publish-account-overlay").style.display = "none";
}

function handleConfirmPublish() {
  const accountSelect = document.getElementById("publish-account-select");
  const scheduleSelect = document.getElementById("publish-schedule");
  if (!accountSelect || !scheduleSelect) return;

  const account = accountSelect.value;
  const schedule = scheduleSelect.value;

  const platformName = currentPublishPlatform.toUpperCase();
  const today = new Date();
  const nowTime = today.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });

  let msg = "";
  if (schedule === "now") {
    msg = `Beitrag erfolgreich auf ${platformName} (${account}) veröffentlicht!`;
    ACTIVITY_LOG.unshift({ time: nowTime, text: `${platformName}-Post auf Account ${account} veröffentlicht`, type: "success" });
  } else {
    let schedText = "geplant";
    if (schedule === "schedule_1h") schedText = "in 1 Stunde geplant";
    else if (schedule === "schedule_evening") schedText = "für heute Abend geplant (18:00)";
    else if (schedule === "schedule_tomorrow") schedText = "für morgen früh geplant (08:00)";

    msg = `Beitrag auf ${platformName} (${account}) ${schedText}!`;
    ACTIVITY_LOG.unshift({ time: nowTime, text: `${platformName}-Post auf Account ${account} ${schedText}`, type: "success" });
  }

  renderAnalytics();
  closePublishModal();
  showToast(msg, "success");
}
