/* ============================================================
   app.js — Kaushlendra Kumar Academic Site
   ============================================================ */

/* ============================================================
   Homepage quotes — shuffled on every page load.
   Categories: physics/maths, literature, philosophy.
   ============================================================ */
const QUOTES = [
  "God used beautiful mathematics in creating the world. — Dirac",
  "A theory with mathematical beauty is more likely to be correct. — Dirac",
  "What I cannot create, I do not understand. — Feynman",
  "Nature uses only the longest threads to weave her patterns. — Feynman",
  "The most incomprehensible thing about the world is that it is comprehensible. — Einstein",
  "Pure mathematics is, in its way, the poetry of logical ideas. — Einstein",
  "The boundary of a boundary is zero. — Wheeler",
  "Space is not simply the stage on which the drama of physics unfolds — it is part of the cast. — Penrose",
  "The miracle of the appropriateness of mathematics for the formulation of physics is a wonderful gift. — Wigner",
  "Physics is not about how the world is; it is about what we can say about the world. — Bohr",
  "What we observe is not nature itself, but nature exposed to our method of questioning. — Heisenberg",
  "In mathematics you don't understand things. You just get used to them. — von Neumann",
  "The purpose of computing is insight, not numbers. — Hamming",
  "Whatever you can do, or dream you can, begin it. Boldness has genius, power, and magic in it. — Goethe",
  "Knowing is not enough; we must apply. Willing is not enough; we must do. — Goethe",
  "The greatest thing in this world is not so much where we stand, as in what direction we are moving. — Goethe",
  "Whereof one cannot speak, thereof one must be silent. — Wittgenstein",
  "The limits of my language mean the limits of my world. — Wittgenstein",
  "Wonder is the beginning of wisdom. — Socrates",
  "He who has a why to live can bear almost any how. — Nietzsche",
  "Not all those who wander are lost. — Tolkien",
  "All we have to decide is what to do with the time that is given us. — Tolkien",
  "There is some good in this world, and it is worth fighting for. — Tolkien",
];

const PERSONAL_EPIGRAPHS = [
  {
    id: "thag-4-10-dhamma-protects",
    source: "Theragāthā 4.10, verse 303 — Dhammikattheragāthā",
    scriptLang: "pi-Deva",
    romanLang: "pi-Latn",
    original: [
      "धम्मो हवे रक्खति धम्मचारिं,",
      "धम्मो सुचिण्णो सुखमावहति;",
      "एसानिसंसो धम्मे सुचिण्णे,",
      "न दुग्गतिं गच्छति धम्मचारी।",
    ],
    transliteration: [
      "Dhammo have rakkhati dhammacāriṃ,",
      "dhammo suciṇṇo sukhamāvahati;",
      "esānisaṃso dhamme suciṇṇe,",
      "na duggatiṃ gacchati dhammacārī.",
    ],
    translation: [
      "Dhamma protects one who lives by Dhamma;",
      "Dhamma well practised brings happiness.",
      "This is the benefit of Dhamma well practised:",
      "one who lives by Dhamma does not go to a bad destination.",
    ],
  },
  {
    id: "manusmriti-8-15-dharma-protects",
    source: "Manusmṛti 8.15",
    scriptLang: "sa-Deva",
    romanLang: "sa-Latn",
    original: [
      "धर्म एव हतो हन्ति धर्मो रक्षति रक्षितः ।",
      "तस्माद्धर्मो न हन्तव्यो मा नो धर्मो हतोऽवधीत् ॥",
    ],
    transliteration: [
      "dharma eva hato hanti dharmo rakṣati rakṣitaḥ |",
      "tasmād dharmo na hantavyo mā no dharmo hato'vadhīt ||",
    ],
    translation: [
      "Dharma, when harmed, harms;",
      "dharma, when protected, protects.",
      "Therefore dharma should not be harmed,",
      "lest harmed dharma destroy us.",
    ],
  },
  {
    id: "dhp-276-effort",
    source: "Dhammapada 276",
    scriptLang: "pi-Deva",
    romanLang: "pi-Latn",
    original: [
      "तुम्हेहि किच्चमातप्पं, अक्खातारो तथागता;",
      "पटिपन्ना पमोक्खन्ति, झायिनो मारबन्धना।",
    ],
    transliteration: [
      "Tumhehi kiccamātappaṃ, akkhātāro tathāgatā;",
      "paṭipannā pamokkhanti, jhāyino mārabandhanā.",
    ],
    translation: [
      "The effort is yours to make;",
      "the Tathāgatas only show the way.",
      "Those who practise in meditation",
      "are freed from Māra's bonds.",
    ],
  },
  {
    id: "dhp-277-impermanence",
    source: "Dhammapada 277",
    scriptLang: "pi-Deva",
    romanLang: "pi-Latn",
    original: [
      "सब्बे सङ्खारा अनिच्चा’ति,",
      "यदा पञ्ञाय पस्सति;",
      "अथ निब्बिन्दति दुक्खे,",
      "एस मग्गो विसुद्धिया।",
    ],
    transliteration: [
      "Sabbe saṅkhārā aniccā'ti,",
      "yadā paññāya passati;",
      "atha nibbindati dukkhe,",
      "esa maggo visuddhiyā.",
    ],
    translation: [
      "When one sees with wisdom",
      "that all conditioned things are impermanent,",
      "one turns away from suffering.",
      "This is the path of purification.",
    ],
  },
  {
    id: "dhp-374-arising-passing",
    source: "Dhammapada 374",
    scriptLang: "pi-Deva",
    romanLang: "pi-Latn",
    original: [
      "यतो यतो सम्मसति, खन्धानं उदयब्बयं;",
      "लभती पीतिपामोज्जं, अमतं तं विजानतं।",
    ],
    transliteration: [
      "Yato yato sammasati, khandhānaṃ udayabbayaṃ;",
      "labhatī pītipāmojjaṃ, amataṃ taṃ vijānataṃ.",
    ],
    translation: [
      "Whenever one closely observes",
      "the arising and passing of the aggregates,",
      "one gains rapture and joy;",
      "for those who understand, this is the deathless.",
    ],
  },
  {
    id: "dhp-183-purification",
    source: "Dhammapada 183",
    scriptLang: "pi-Deva",
    romanLang: "pi-Latn",
    original: [
      "सब्बपापस्स अकरणं,",
      "कुसलस्स उपसम्पदा;",
      "सचित्तपरियोदपनं,",
      "एतं बुद्धान सासनं।",
    ],
    transliteration: [
      "Sabbapāpassa akaraṇaṃ,",
      "kusalassa upasampadā;",
      "sacittapariyodapanaṃ,",
      "etaṃ buddhāna sāsanaṃ.",
    ],
    translation: [
      "Avoid the unwholesome;",
      "cultivate the wholesome;",
      "purify one's own mind.",
      "This is the teaching of the Buddhas.",
    ],
  },
  {
    id: "dhp-5-non-hatred",
    source: "Dhammapada 5",
    scriptLang: "pi-Deva",
    romanLang: "pi-Latn",
    original: [
      "न हि वेरेन वेरानि, सम्मन्तीध कुदाचनं;",
      "अवेरेन च सम्मन्ति, एस धम्मो सनन्तनो।",
    ],
    transliteration: [
      "Na hi verena verāni, sammantīdha kudācanaṃ;",
      "averena ca sammanti, esa dhammo sanantano.",
    ],
    translation: [
      "Hatred is never ended by hatred;",
      "it is ended by non-hatred.",
      "This is an ancient truth.",
    ],
  },
  {
    id: "dhp-80-self-training",
    source: "Dhammapada 80",
    scriptLang: "pi-Deva",
    romanLang: "pi-Latn",
    original: [
      "उदकञ्हि नयन्ति नेत्तिका,",
      "उसुकारा नमयन्ति तेजनं;",
      "दारुं नमयन्ति तच्छका,",
      "अत्तानं दमयन्ति पण्डिता।",
    ],
    transliteration: [
      "Udakañhi nayanti nettikā,",
      "usukārā namayanti tejanaṃ;",
      "dāruṃ namayanti tacchakā,",
      "attānaṃ damayanti paṇḍitā.",
    ],
    translation: [
      "Irrigators guide water;",
      "fletchers shape arrows;",
      "carpenters shape wood;",
      "the wise train themselves.",
    ],
  },
  {
    id: "thig-8-1-world-burning",
    source: "Therīgāthā 8.1",
    scriptLang: "pi-Deva",
    romanLang: "pi-Latn",
    original: [
      "सब्बो आदिपितो लोको, सब्बो लोको पदीपितो;",
      "सब्बो पज्जलितो लोको, सब्बो लोको पकम्पितो।",
    ],
    transliteration: [
      "Sabbo ādīpito loko, sabbo loko padīpito;",
      "sabbo pajjalito loko, sabbo loko pakampito.",
    ],
    translation: [
      "The whole world is on fire;",
      "the whole world is alight.",
      "The whole world is ablaze;",
      "the whole world is shaking.",
    ],
  },
  {
    id: "gita-6-26-returning-mind",
    source: "Bhagavad Gītā 6.26",
    scriptLang: "sa-Deva",
    romanLang: "sa-Latn",
    original: [
      "यतो यतो निश्चरति मनश्चञ्चलमस्थिरम् ।",
      "ततस्ततो नियम्यैतदात्मन्येव वशं नयेत् ॥",
    ],
    transliteration: [
      "yato yato niścarati manaś cañcalam asthiram |",
      "tatas tato niyamyaitad ātmany eva vaśaṃ nayet ||",
    ],
    translation: [
      "Wherever the restless, unsteady mind wanders,",
      "from there one should gently restrain it",
      "and bring it back under the guidance of the self.",
    ],
  },
  {
    id: "brhadaranyaka-1-3-28-light",
    source: "Bṛhadāraṇyaka Upaniṣad 1.3.28",
    scriptLang: "sa-Deva",
    romanLang: "sa-Latn",
    original: [
      "असतो मा सद्गमय ।",
      "तमसो मा ज्योतिर्गमय ।",
      "मृत्योर्मा अमृतं गमय ॥",
    ],
    transliteration: [
      "asato mā sad gamaya |",
      "tamaso mā jyotir gamaya |",
      "mṛtyor mā amṛtaṃ gamaya ||",
    ],
    translation: [
      "Lead me from the unreal to the real;",
      "from darkness to light;",
      "from death to the deathless.",
    ],
  },
  {
    id: "yoga-sutra-1-2-stilling",
    source: "Yoga Sūtra 1.2",
    scriptLang: "sa-Deva",
    romanLang: "sa-Latn",
    original: [
      "योगश्चित्तवृत्तिनिरोधः ॥",
    ],
    transliteration: [
      "yogaś citta-vṛtti-nirodhaḥ ||",
    ],
    translation: [
      "Yoga is the stilling",
      "of the fluctuations of the mind.",
    ],
  },
];

const PROFILE_LINKS = {
  email: "mailto:kaushlendra.kumar@qmul.ac.uk",
  cv: "media/CV.pdf",
  orcid: "https://orcid.org/0000-0001-5665-575X",
  arxiv: "https://arxiv.org/a/kumar_k_2.html",
  inspire: "https://inspirehep.net/authors/1706741",
  linkedin: "https://www.linkedin.com/in/kaushlendra-kumar-4aa9874b/",
  researchGate: "https://www.researchgate.net/profile/Kaushlendra-Kumar-5",
};

const PUBLICATION_FILTERS = [
  "All",
  "Fractional Quantum Hall",
  "Quantum Geometry",
  "Quantum Information",
  "Yang–Mills",
  "Electromagnetic Knots",
  "Noncommutative Geometry",
  "Matrix Models",
  "Spectral Distance",
  "Proceedings",
];

const PUBLICATIONS = [
  {
    id: "helstrom-time-dependent-calibration",
    title: "Helstrom geometry with time-dependent spectral calibration",
    year: "2026",
    authors: "Kaushlendra Kumar",
    venue: "arXiv:2610.33848 [quant-ph; math-ph] · Prepared for the XLIII Workshop on Geometric Methods in Physics proceedings",
    status: "preprint",
    tags: ["Quantum Information", "Spectral Distance", "Helstrom Geometry", "Proceedings"],
    featured: true,
    shortSignificance: "Separates changes in qubit distinguishability from changes in the spectral calibration. Scalar-reference distances recover the scale needed to interpret a growing spectral distance.",
    links: {
      arxiv: "https://arxiv.org/abs/2610.33848",
    },
  },
  {
    id: "laughlin-snapshot-geometry",
    title: "Laughlin quasihole geometry from a single snapshot ensemble",
    year: "2026",
    authors: "Kaushlendra Kumar",
    venue: "arXiv:2608.22384 [quant-ph; cond-mat.str-el]",
    status: "preprint",
    tags: ["Fractional Quantum Hall", "Quantum Information", "Quantum Geometry"],
    featured: true,
    shortSignificance: "Shows that one exact occupation law and finite projective snapshots recover the complex Gram kernel, Bargmann phases, quantum metric, and Berry curvature of Laughlin quasiholes.",
    links: {
      arxiv: "https://arxiv.org/abs/2608.22384",
      notebook: "https://notebookarchive.org/2026-08-a5kp7qk",
    },
  },
  {
    id: "so13-characteristic-lightcone-sources",
    title: "Characteristic lightcone sources in SO(1,3) Yang–Mills theory",
    year: "2026",
    authors: "Kaushlendra Kumar",
    venue: "Physics Letters B 880 (2026) 140865",
    status: "published",
    tags: ["Yang–Mills", "Exact Fields"],
    featured: true,
    shortSignificance: "Completes the singular SO(1,3) Yang–Mills stress tensor on the characteristic null cone, fixing its distributional source and a future/past cone-charge asymmetry.",
    links: {
      doi: "https://doi.org/10.1016/j.physletb.2026.140865",
      arxiv: "https://arxiv.org/abs/2606.27241",
    },
  },
  {
    id: "calibrated-helstrom-bloch",
    title: "Calibrated Helstrom geometry on the Bloch ball via Connes spectral distance",
    year: "2026",
    authors: "Kaushlendra Kumar",
    venue: "arXiv:2606.13824 [quant-ph]",
    status: "preprint",
    tags: ["Quantum Information", "Spectral Distance", "Helstrom Geometry"],
    featured: true,
    shortSignificance: "Recovers qubit Helstrom trace-distance geometry from a finite scalar-qubit-scalar Connes spectral metric.",
    links: {
      arxiv: "https://arxiv.org/abs/2606.13824",
    },
  },
  {
    id: "geometric-ab-black-hole",
    title: "Geometric Aharonov-Bohm phase effect around a black hole",
    year: "2026",
    authors: "Kaushlendra Kumar and Shahn Majid",
    venue: "arXiv:2605.28582 [gr-qc]",
    status: "preprint",
    tags: ["Quantum Geometry", "Black Holes", "Geometric Phases"],
    featured: true,
    shortSignificance: "Upgrades black-hole density flows to amplitude flows and extracts a geometric phase effect near the horizon.",
    links: {
      arxiv: "https://arxiv.org/abs/2605.28582",
      notebook: "https://notebookarchive.org/2026-05-c16632a",
    },
  },
  {
    id: "black-hole-geodesic-flows",
    title: "Geodesic flows on a black-hole background",
    year: "2026",
    authors: "Kaushlendra Kumar and Shahn Majid",
    venue: "arXiv:2603.03222 [gr-qc]",
    status: "preprint",
    tags: ["Quantum Geometry", "Black Holes"],
    featured: true,
    shortSignificance: "Develops geodesic-flow technology for quantum-Riemannian black-hole geometry.",
    links: {
      arxiv: "https://arxiv.org/abs/2603.03222",
      notebook: "https://notebookarchive.org/2026-03-0yfd51x",
    },
  },
  {
    id: "adS-exact-gauge-fields",
    title: "Exact gauge fields from anti-de Sitter space",
    year: "2024",
    authors: "Savan Hirpara, Kaushlendra Kumar, Olaf Lechtenfeld and Gabriel Picanço Costa",
    venue: "Journal of Mathematical Physics 65 (2024) 072903",
    status: "published",
    tags: ["Yang–Mills", "Exact Fields"],
    featured: true,
    shortSignificance: "Constructs exact gauge-field configurations from anti-de Sitter geometry.",
    links: {
      doi: "https://doi.org/10.1063/5.0150027",
      arxiv: "https://arxiv.org/abs/2301.03606",
    },
  },
  {
    id: "ikkt-effective-einstein",
    title: "Modified Einstein equations from the 1-loop effective action of the IKKT model",
    year: "2024",
    authors: "Kaushlendra Kumar and Harold Steinacker",
    venue: "Classical and Quantum Gravity 41 (2024) 18, 185007",
    status: "published",
    tags: ["Matrix Models", "Emergent Gravity", "Quantum Geometry"],
    featured: true,
    shortSignificance: "Connects one-loop matrix-model dynamics with modified gravitational equations.",
    links: {
      doi: "https://doi.org/10.1088/1361-6382/ad6e4b",
      arxiv: "https://arxiv.org/abs/2312.01317",
    },
  },
  {
    id: "minkowski-coset-yang-mills",
    title: "Yang–Mills solutions on Minkowski space via non-compact coset spaces",
    year: "2022",
    authors: "Kaushlendra Kumar, Olaf Lechtenfeld, Gabriel Picanço Costa and Jona Röhrig",
    venue: "Physics Letters B 835 (2022) 137564",
    status: "published",
    tags: ["Yang–Mills", "Homogeneous Spaces", "Exact Fields"],
    featured: false,
    shortSignificance: "Uses non-compact coset geometry to generate exact Yang–Mills solutions.",
    links: {
      doi: "https://doi.org/10.1016/j.physletb.2022.137564",
      arxiv: "https://arxiv.org/abs/2206.12009",
    },
  },
  {
    id: "dS4-thesis",
    title: "Solutions of Yang–Mills theory in four-dimensional de Sitter space",
    year: "2022",
    authors: "Kaushlendra Kumar",
    venue: "Ph.D. thesis, Leibniz Universität Hannover",
    status: "thesis",
    tags: ["Yang–Mills", "de Sitter", "Cosmology"],
    featured: false,
    links: {
      doi: "https://doi.org/10.15488/12546",
      arxiv: "https://arxiv.org/abs/2202.12215",
      notebook: "https://notebookarchive.org/2022-04-dbzrbqg",
    },
  },
  {
    id: "rational-em-charges",
    title: "Conserved charges for rational electromagnetic knots",
    year: "2022",
    authors: "Lukas Hantzko, Kaushlendra Kumar and Gabriel Picanço Costa",
    venue: "European Physical Journal Plus 137 (2022) 407",
    status: "published",
    tags: ["Electromagnetic Knots", "Conserved Charges", "Exact Fields"],
    featured: true,
    shortSignificance: "Computes conserved quantities for rational knotted Maxwell fields.",
    links: {
      doi: "https://doi.org/10.1140/epjp/s13360-022-02563-4",
      arxiv: "https://arxiv.org/abs/2106.05952",
    },
  },
  {
    id: "charged-particle-knots",
    title: "Trajectories of charged particles in knotted electromagnetic fields",
    year: "2022",
    authors: "Kaushlendra Kumar, Olaf Lechtenfeld and Gabriel Picanço Costa",
    venue: "Journal of Physics A: Mathematical and Theoretical 55 (2022) 315401",
    status: "published",
    tags: ["Electromagnetic Knots", "Exact Fields"],
    featured: false,
    links: {
      doi: "https://doi.org/10.1088/1751-8121/ac7c49",
      arxiv: "https://arxiv.org/abs/2202.00169",
      notebook: "https://notebookarchive.org/2022-05-7es6sj9",
    },
  },
  {
    id: "cosmic-yang-mills-instability",
    title: "Instability of cosmic Yang–Mills fields",
    year: "2021",
    authors: "Kaushlendra Kumar, Olaf Lechtenfeld and Gabriel Picanço Costa",
    venue: "Nuclear Physics B 973 (2021) 115583",
    status: "published",
    tags: ["Yang–Mills", "Cosmology", "de Sitter"],
    featured: false,
    links: {
      doi: "https://doi.org/10.1016/j.nuclphysb.2021.115583",
      arxiv: "https://arxiv.org/abs/2102.08401",
    },
  },
  {
    id: "rational-em-fields",
    title: "On rational electromagnetic fields",
    year: "2020",
    authors: "Kaushlendra Kumar and Olaf Lechtenfeld",
    venue: "Physics Letters A 384 (2020) 126445",
    status: "published",
    tags: ["Electromagnetic Knots", "Exact Fields"],
    featured: false,
    links: {
      doi: "https://doi.org/10.1016/j.physleta.2020.126445",
      arxiv: "https://arxiv.org/abs/2002.01005",
    },
  },
  {
    id: "doubled-moyal-spectral-distance",
    title: "Spectral distances on doubled Moyal plane using Dirac eigen-spinors",
    year: "2018",
    authors: "Kaushlendra Kumar and Biswajit Chakraborty",
    venue: "Physical Review D 97 (2018) 086019",
    status: "published",
    tags: ["Noncommutative Geometry", "Spectral Distance"],
    featured: true,
    shortSignificance: "Computes Connes spectral distances using Dirac eigenspinor data in a noncommutative setting.",
    links: {
      doi: "https://doi.org/10.1103/PhysRevD.97.086019",
      arxiv: "https://arxiv.org/abs/1711.00653",
    },
  },
  {
    id: "finite-spectral-distance",
    title: "Revisiting Connes’ finite spectral distance on noncommutative spaces: Moyal plane and fuzzy sphere",
    year: "2018",
    authors: "Yendrembam Chaoba Devi, Kaushlendra Kumar, Biswajit Chakraborty and Frederik G. Scholtz",
    venue: "International Journal of Geometric Methods in Modern Physics 15 (2018) 1850204",
    status: "published",
    tags: ["Noncommutative Geometry", "Spectral Distance"],
    featured: false,
    links: {
      doi: "https://doi.org/10.1142/S0219887818502043",
      arxiv: "https://arxiv.org/abs/1608.05270",
    },
  },
  {
    id: "schwinger-su2-bop-transformations",
    title: "On the role of Schwinger’s SU(2) generators for simple harmonic oscillator systems in two dimensions",
    year: "2015",
    authors: "Kaushlendra Kumar, Shivraj Prajapat and Biswajit Chakraborty",
    venue: "European Physical Journal Plus 130 (2015) 120",
    status: "published",
    tags: ["Noncommutative Geometry"],
    featured: false,
    links: {
      doi: "https://doi.org/10.1140/epjp/i2015-15120-7",
      arxiv: "https://arxiv.org/abs/1312.3095",
    },
  },
  {
    id: "adS-yang-mills-proceedings",
    title: "On Yang–Mills fields from anti-de Sitter spaces",
    year: "2023",
    authors: "Kaushlendra Kumar",
    venue: "Journal of Physics: Conference Series 2667 (2023) 012018",
    status: "proceedings",
    tags: ["Yang–Mills", "Exact Fields", "Proceedings"],
    featured: false,
    links: {
      doi: "https://doi.org/10.1088/1742-6596/2667/1/012018",
      arxiv: "https://arxiv.org/abs/2310.00391",
    },
  },
  {
    id: "so13-coset-proceedings",
    title: "SO(1,3) Yang–Mills solutions on Minkowski space via cosets",
    year: "2023",
    authors: "Kaushlendra Kumar",
    venue: "SciPost Physics Proceedings 14 (2023) 033",
    status: "proceedings",
    tags: ["Yang–Mills", "Homogeneous Spaces", "Proceedings"],
    featured: false,
    links: {
      doi: "https://doi.org/10.21468/SciPostPhysProc.14.033",
      arxiv: "https://arxiv.org/abs/2212.01341",
    },
  },
];

const TALKS = [
  {
    date: "Jul 1, 2026",
    title: "Scalar-anchored Connes distance and Helstrom geometry of the qubit Bloch ball",
    venue: "XLIII Workshop on Geometric Methods in Physics",
    location: "Białystok",
    type: "conference talk",
    selected: true,
    links: {
      event: "https://wgmp.uwb.edu.pl/wgmp43/",
      abstract: "https://wgmp.uwb.edu.pl/wgmp43/abs/Kumar.html",
    },
    tags: ["Quantum Information", "Spectral Distance"],
  },
  {
    date: "Dec 9, 2025",
    title: "Geodesic flows on a black-hole background",
    venue: "Quantum Algebras seminar, QMU London",
    location: "London",
    type: "seminar talk",
    selected: true,
    links: {
      slides: "./media/BHflowSlides.pdf",
    },
    tags: ["Quantum Geometry", "Black Holes"],
  },
  {
    date: "May 28, 2024",
    title: "Octonions and the Standard Model",
    venue: "Quantum Algebras seminar, QMU London",
    location: "London",
    type: "seminar talk",
    selected: false,
    links: {},
    tags: ["Noncommutative Geometry"],
  },
  {
    date: "Mar 5, 2024",
    title: "Emergence of modified Einstein equation from 1-loop result in IKKT matrix model",
    venue: "Quantum Algebras seminar, QMU London",
    location: "London",
    type: "seminar talk",
    selected: true,
    links: {},
    tags: ["Matrix Models", "Quantum Geometry"],
  },
  {
    date: "Aug 18, 2023",
    title: "Modified Einstein equations from the 1-loop effective action of the IKKT model",
    venue: "Room 316 meeting",
    location: "online",
    type: "online talk",
    selected: true,
    links: {
      video: "https://video.syr.edu/media/t/1_o7p5ekjl",
      slides: "https://drive.google.com/file/d/1Wfg3r00fXh63zXqPRYex8_lujWEEOBpT/view?pli=1",
    },
    tags: ["Matrix Models", "Quantum Geometry"],
  },
  {
    date: "Jul 27, 2023",
    title: "Exact gauge fields from anti-de Sitter space",
    venue: "QTS12 conference",
    location: "Prague",
    type: "conference talk",
    selected: true,
    links: {
      proceedings: "https://iopscience.iop.org/issue/1742-6596/2667/1",
      slides: "./media/AdS-YM_QTS12.pdf",
    },
    tags: ["Yang–Mills", "Exact Fields"],
  },
  {
    date: "Jun 28, 2023",
    title: "Emergent gravity from the 1-loop effective action of the IKKT matrix model",
    venue: "Lechtenfeld group meeting",
    location: "Hannover",
    type: "group seminar",
    selected: false,
    links: {},
    tags: ["Matrix Models", "Quantum Geometry"],
  },
  {
    date: "May 4, 2023",
    title: "Exact gauge fields from anti-de Sitter space",
    venue: "Erwin Schrödinger International Institute for Mathematics and Physics",
    location: "Vienna",
    type: "institute talk",
    selected: true,
    links: {
      event: "https://www.esi.ac.at/events/t1312/",
      slides: "./media/AdS-YM_ESI.pdf",
    },
    tags: ["Yang–Mills", "Exact Fields"],
  },
  {
    date: "Mar 15, 2023",
    title: "Exact gauge fields from anti-de Sitter space",
    venue: "Solitons at Work",
    location: "online",
    type: "online talk",
    selected: true,
    links: {
      video: "https://youtu.be/EPtzquQ1sig",
      slides: "./media/AdS-YM_S@W.pdf",
    },
    tags: ["Yang–Mills", "Exact Fields"],
  },
  {
    date: "Aug 23, 2022",
    title: "Yang–Mills solutions on Minkowski space via non-compact coset spaces",
    venue: "String Theory Journal Club, DESY Hamburg",
    location: "Hamburg",
    type: "journal club",
    selected: false,
    links: {
      event: "https://confluence.desy.de/display/STJC/String+Theory+Journal+Club",
      slides: "./media/YMonMink-DESY.pdf",
    },
    tags: ["Yang–Mills", "Homogeneous Spaces"],
  },
  {
    date: "Jul 18, 2022",
    title: "Yang–Mills solutions on Minkowski space via non-compact coset spaces",
    venue: "GROUP34 conference",
    location: "Strasbourg",
    type: "conference talk",
    selected: true,
    links: {
      event: "https://indico.in2p3.fr/event/23498/",
      slides: "./media/YMonMink-GROUP34.pdf",
    },
    tags: ["Yang–Mills", "Homogeneous Spaces"],
  },
  {
    date: "Mar 16, 2022",
    title: "Yang–Mills solutions on Minkowski space via non-compact coset spaces",
    venue: "Solitons at Work",
    location: "online",
    type: "online talk",
    selected: true,
    links: {
      video: "https://www.youtube.com/watch?v=zT61SlnRc7c&ab_channel=ChrisHalcrow",
      slides: "./media/MinkYM.pdf",
    },
    tags: ["Yang–Mills", "Homogeneous Spaces"],
  },
  {
    date: "Jul 7, 2017",
    title: "Spectral distances on doubled Moyal plane",
    venue: "S.N. Bose Centre",
    location: "Kolkata",
    type: "seminar talk",
    selected: false,
    links: {
      slides: "./media/Summer2017.pdf",
    },
    tags: ["Noncommutative Geometry", "Spectral Distance"],
  },
  {
    date: "Nov 4, 2016",
    title: "Angular momentum and simple harmonic oscillator in noncommutative Moyal plane",
    venue: "DPS journal club, IISER Kolkata",
    location: "Kolkata",
    type: "journal club",
    selected: false,
    links: {
      slides: "./media/DPS@IISER-K.pdf",
    },
    tags: ["Noncommutative Geometry"],
  },
  {
    date: "Jul 11, 2016",
    title: "Connes spectral distance on noncommutative spaces: fuzzy sphere and doubled Moyal plane",
    venue: "S.N. Bose Centre",
    location: "Kolkata",
    type: "seminar talk",
    selected: false,
    links: {
      slides: "./media/Summer2016.pdf",
    },
    tags: ["Noncommutative Geometry", "Spectral Distance"],
  },
];

const CONFERENCES = [
  {
    date: "Jul 15–17, 2026",
    title: "Black Hole Horizons and Beyond: New Frontiers in Gravity and Holography",
    location: "Durham, UK",
    url: "https://indico.global/event/17195/",
  },
  {
    date: "Jun 29–Jul 4, 2026",
    title: "XLIII Workshop on Geometric Methods in Physics",
    location: "Białystok, Poland",
    url: "https://wgmp.uwb.edu.pl/wgmp43/",
  },
  {
    date: "Jul 7–11, 2025",
    title: "A Quantum of Noncommutativity",
    location: "Ambleside, UK",
    url: "https://sites.google.com/view/a-quantum-of-noncommutativity/home",
  },
  {
    date: "Jul 24–28, 2023",
    title: "The 12th International Symposium on Quantum Theory and Symmetries",
    location: "Prague, Czech Republic",
    url: "https://iopscience.iop.org/issue/1742-6596/2667/1",
  },
  {
    date: "Feb 6–17, 2023",
    title: "Vortex Moduli at ICTS Bangalore",
    location: "online",
    url: "https://www.icts.res.in/program/Vort2023",
  },
  {
    date: "Jul 18–22, 2022",
    title: "The 34th International Colloquium on Group Theoretical Methods in Physics",
    location: "Strasbourg, France",
    url: "https://indico.in2p3.fr/event/23498/",
  },
  {
    date: "Aug 2–7, 2021",
    title: "International Congress on Mathematical Physics and Young Researchers Symposium",
    location: "Geneva, Switzerland",
    url: "https://www.icmp2021.com/",
  },
  {
    date: "Jan 15–19, 2018",
    title: "Quantum Groups and Noncommutative Geometry",
    location: "NISER Bhubaneswar, India",
    url: "https://sites.google.com/a/niser.ac.in/qgrpncg/home",
  },
];

const SCHOOLS = [
  { date: "Aug 29–Sep 9, 2022", title: "28th Saalburg Summer School: Modern Methods in QFT", location: "Bayrischzell, Germany" },
  { date: "Aug 30–Sep 10, 2021", title: "27th Saalburg Summer School: Gravitational Waves and Black Holes", location: "Heigenbrücken, Germany" },
  { date: "Aug 31–Sep 11, 2020", title: "26th Saalburg Summer School: QFT, Integrable Systems and String Field Theory", location: "Heigenbrücken, Germany" },
  { date: "Sep 23–27, 2019", title: "Summer School: Special Holonomy, Geometry and Physics", location: "Freiburg, Germany" },
  { date: "Sep 2–13, 2019", title: "25th Saalburg Summer School: Asymptotic Symmetries and Hamiltonian Formulation", location: "Heigenbrücken, Germany" },
  { date: "Nov 6–24, 2017", title: "Preschool and Advanced School: Geometry, Groups and Dynamics", location: "ICTS Bangalore, India" },
];

const RESEARCH_DIRECTIONS = [
  {
    id: "exact-fields",
    title: "Exact fields and geometric transport",
    label: "Exact field theory",
    summary: "Spacetime symmetries reduce the Yang–Mills and Maxwell equations to problems that admit exact solutions. I use these fields to study conserved charges, charged-particle motion, and the sources represented by singularities, including the characteristic lightcone in SO(1,3) Yang–Mills theory.",
    figures: [
      {
        src: "./media/MinkFoliations-padded.png",
        alt: "Conformal foliation diagram used in exact Yang-Mills constructions on Minkowski space",
        caption: "Conformal / homogeneous-space reduction",
      },
      {
        src: "./media/Knots.png",
        alt: "Rational electromagnetic knot field-line visualisation",
        caption: "Rational Maxwell knots",
      },
      {
        src: "./media/AdS-gluing.png",
        alt: "Anti-de Sitter gluing diagram from exact Yang-Mills work",
        caption: "AdS gluing geometry",
      },
    ],
    detailSections: [
      {
        label: "Core idea",
        text: "Symmetry can make a nonlinear field equation solvable without a perturbative expansion. My work uses de Sitter, anti-de Sitter, and Minkowski geometry to construct exact gauge fields, then examines their conserved quantities and singularities. Rational Maxwell fields provide a related setting in which field lines can form knots.",
      },
      {
        label: "Methods",
        text: "Homogeneous spaces and equivariant ansätze reduce the gauge equations. Conformal maps relate the resulting fields on different spacetimes. For rational electromagnetic knots, explicit field expressions allow calculations of conformal charges and numerical trajectories of charged probes.",
      },
      {
        label: "Outputs",
        text: "Published results include exact gauge fields from non-compact cosets, conserved charges for rational electromagnetic knots, and charged-particle trajectories in those fields. The 2026 Physics Letters B paper determines a conserved, traceless distributional completion of the SO(1,3) stress tensor on the lightcone.",
      },
      {
        label: "The lightcone source",
        text: "The singular stress tensor raises a specific question: what source can preserve both conservation and tracelessness? Moving the singular support off the cone cannot retain both properties. A completion on the cone can, with one parameter describing the relative weights of its future and past branches.",
      },
    ],
    tags: ["Yang–Mills", "Exact Fields", "Electromagnetic Knots"],
    publicAnchorIds: [
      "so13-characteristic-lightcone-sources",
      "adS-exact-gauge-fields",
      "minkowski-coset-yang-mills",
      "rational-em-charges",
      "charged-particle-knots",
      "rational-em-fields",
    ],
  },
  {
    id: "quantum-geometry",
    title: "Quantum geometry and emergent spacetime",
    label: "Quantum spacetime",
    summary: "With Shahn Majid, I study geodesic flows of densities and amplitudes on a black-hole background, including horizon crossing and a geometric phase effect. A separate collaboration with Harold Steinacker derives gravitational equations from the one-loop effective action of the IKKT matrix model.",
    figures: [
      {
        src: "./media/qrg-direct-phase-panel.png",
        alt: "Quantum black-hole flow diagnostic panel showing phase behaviour",
        caption: "Aharonov-Bohm phase from quantum black-hole flow",
      },
      {
        src: "./media/densFlowHor-cropped.png",
        alt: "Density-flow plots across a corrected black-hole horizon",
        caption: "Density flow across the black-hole horizon",
      },
      {
        src: "./media/ikkt-emergent-gravity.svg",
        alt: "IKKT matrices leading to emergent metric data and modified Einstein equations",
        caption: "Matrix model to emergent gravity",
      },
    ],
    detailSections: [
      {
        label: "Core idea",
        text: "A geodesic velocity field can transport a density on spacetime. We also consider an amplitude whose squared modulus gives that density, so that relative phases can affect the evolution. Our black-hole papers study this proposal on Schwarzschild spacetime and relate it to proper-time quantum mechanics.",
      },
      {
        label: "Methods",
        text: "The flow calculations use geodesic velocity fields, continuity and amplitude equations, Kruskal–Szekeres coordinates, and an eikonal approximation to Klein–Gordon flow. In the matrix-model work, varying the one-loop effective action gives equations for the geometry of four-dimensional quantum branes.",
      },
      {
        label: "Outputs",
        text: "The public preprints describe density and amplitude flows across the horizon and an Aharonov–Bohm type phase effect for amplitudes approaching a black hole. The published IKKT work obtains modified Einstein equations with additional dilaton, axionic, and classical matrix-action contributions.",
      },
      {
        label: "Density and phase",
        text: "Two colliding density profiles can merge, while amplitudes with opposite phases can produce a different final density. This comparison gives a way to examine the amplitude-flow proposal. The phase paper derives the relevant flow equations from an eikonal approximation, making the assumptions behind the interpretation explicit.",
      },
    ],
    tags: ["Quantum Geometry", "Black Holes", "Matrix Models"],
    publicAnchorIds: [
      "geometric-ab-black-hole",
      "black-hole-geodesic-flows",
      "ikkt-effective-einstein",
    ],
  },
  {
    id: "algebraic-particle-geometry",
    title: "Algebraic particle geometry",
    label: "Particle geometry",
    summary: "Finite noncommutative geometry offers a way to organize particle degrees of freedom through algebras, representations, and Dirac operators. I am interested in which field and symmetry choices follow from these data, and which require additional assumptions.",
    figures: [
      {
        src: "./media/cl6-finite-geometry.svg",
        alt: "Clifford algebra, Peirce decomposition, and finite spectral triple data schematic",
        caption: "Clifford input to finite internal geometry",
      },
    ],
    detailSections: [
      {
        label: "Core idea",
        text: "The aim is to describe internal particle degrees of freedom by a finite geometry. An algebra acts on a space of states, and a Dirac operator links its components. The question is how much of a field theory can be determined from these choices and their compatibility conditions.",
      },
      {
        label: "Methods",
        text: "The mathematical setting includes finite spectral triples, Clifford and division algebras, representations, gradings, and real structures. These provide different ways to organize fermionic states and to constrain the operators that couple them.",
      },
      {
        label: "Questions",
        text: "Which symmetries are fixed by the algebra and its representation? Which couplings are allowed by the Dirac operator? These questions distinguish consequences of the geometry from assumptions introduced to build a particle model.",
      },
      {
        label: "Scope",
        text: "These are structural questions about internal geometry. A proposed field content must satisfy the geometric compatibility conditions and, separately, the requirements of a physical theory. The diagram sketches the algebraic setting for this work.",
      },
    ],
    tags: ["Finite Spectral Triples", "Noncommutative Geometry", "Particle Geometry"],
    publicAnchorIds: [],
  },
  {
    id: "spectral-information-geometry",
    title: "Quantum-state and information geometry",
    label: "State geometry",
    summary: "What data determine the geometry of quantum states? For lattice Laughlin quasiholes, one reference occupation law and the known analytic state family determine overlaps and phases. For qubits, scalar reference sectors calibrate Connes distance to trace distance, including when the Dirac links vary in time.",
    figures: [
      {
        src: "./media/fqh-snapshot-geometry.png",
        alt: "Laughlin quasihole metric reconstruction, finite-snapshot comparison, and Gram-kernel singular values",
        caption: "Laughlin geometry from finite snapshots",
      },
      {
        src: "./media/helstrom-scalar-bloch.png",
        alt: "Proceedings Figure 1: the qubit Bloch ball, two scalar reference states, and their spectral distances",
        caption: "Scalar-anchored geometry from the proceedings",
      },
    ],
    detailSections: [
      {
        label: "Core idea",
        text: "Trace distance measures how well two quantum states can be distinguished. In a finite scalar–qubit–scalar geometry, Connes distance reproduces this metric up to a scale set by the Dirac links. The October proceedings preprint asks what happens when those links change independently of the qubit dynamics.",
      },
      {
        label: "Methods",
        text: "The spectral calculations evaluate commutator norms and use scalar-reference distances to recover the calibration scale. The Laughlin work uses the analytic quasihole factor and occupation-number samples to reconstruct a complex Gram kernel, from which overlaps, Bargmann phases, the quantum metric, and Berry curvature follow.",
      },
      {
        label: "Moving calibration",
        text: "A decreasing Dirac scale can make spectral distance grow even under depolarizing evolution, while trace distance contracts. The same positive spectral record can also admit a realization with trace-distance revival. Scalar distances measured at the same times, within the same isotropic geometry, recover the scale and distinguish these histories.",
      },
      {
        label: "Earlier and related work",
        text: "Earlier papers compute spectral distances on Moyal, fuzzy, and finite spaces. The Laughlin preprint addresses a different reconstruction problem: the exact occupation law at one generic reference position, together with the known analytic quasihole factor, determines the kernel. A finite snapshot ensemble estimates it without preparing the other states in the family.",
      },
    ],
    tags: ["Fractional Quantum Hall", "Quantum Information", "Spectral Distance"],
    publicAnchorIds: [
      "helstrom-time-dependent-calibration",
      "laughlin-snapshot-geometry",
      "calibrated-helstrom-bloch",
      "doubled-moyal-spectral-distance",
      "finite-spectral-distance",
    ],
  },
];

const RESEARCH_DIRECTION_ORDER = [
  "spectral-information-geometry",
  "exact-fields",
  "quantum-geometry",
  "algebraic-particle-geometry",
];

RESEARCH_DIRECTIONS.sort((a, b) => (
  RESEARCH_DIRECTION_ORDER.indexOf(a.id) - RESEARCH_DIRECTION_ORDER.indexOf(b.id)
));

const RESEARCH_TRAJECTORY = [
  {
    date: "2024–present",
    place: "Queen Mary University of London",
    text: "Quantum-state distances and calibration, Laughlin quasihole geometry, and black-hole flows and phases.",
  },
  {
    date: "2023–2024",
    place: "Humboldt University, Berlin",
    text: "Work with Nichol Furey on division-algebraic and finite-geometric particle structures.",
  },
  {
    date: "2023–2024",
    place: "Erwin Schrödinger Institute, Vienna",
    text: "Collaboration with Harold Steinacker on IKKT matrix models and emergent gravity.",
  },
  {
    date: "2018–2023",
    place: "Leibniz University Hannover",
    text: "PhD and postdoctoral exact Yang–Mills work with Olaf Lechtenfeld.",
  },
  {
    date: "2013–2018",
    place: "S.N. Bose Centre, Kolkata",
    text: "Early spectral-distance and noncommutative-geometry work with Biswajit Chakraborty.",
  },
];

function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a;
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[₂]/g, "2")
    .replace(/[–—]/g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function linkButton(label, href) {
  if (!href) return "";
  const isPDF = href.endsWith(".pdf");
  const target = isPDF ? "" : " target=\"_blank\" rel=\"noopener noreferrer\"";
  return `<a class="link-btn" href="${escapeHTML(href)}"${target}>${escapeHTML(label)}</a>`;
}

function renderPublicationLinks(links) {
  const linkOrder = [
    ["doi", "DOI"],
    ["arxiv", "arXiv"],
    ["notebook", "Notebook"],
    ["slides", "Slides"],
    ["video", "Video"],
  ];

  return linkOrder.map(([key, label]) => linkButton(label, links[key])).join("");
}

function renderPublicationRow(pub) {
  return `
    <article class="publication-row" data-publication-tags="${escapeHTML(pub.tags.map(slugify).join(" "))}" data-publication-id="${escapeHTML(pub.id)}">
      <div class="publication-row-year">${escapeHTML(pub.year)}</div>
      <div class="publication-row-main">
        <div class="publication-row-heading">
          <h3>${escapeHTML(pub.title)}</h3>
          <div class="link-row publication-row-links">${renderPublicationLinks(pub.links)}</div>
          <span>${escapeHTML(pub.status)}</span>
        </div>
        <p class="publication-authors">${escapeHTML(pub.authors)}</p>
        <p class="publication-venue">${escapeHTML(pub.venue)}</p>
      </div>
    </article>
  `;
}

function findPublication(id) {
  return PUBLICATIONS.find((pub) => pub.id === id);
}

function renderPublicAnchor(pub) {
  return `
    <article class="public-anchor-row">
      <div>
        <strong>${escapeHTML(pub.title)}</strong>
        <span>${escapeHTML(pub.year)} · ${escapeHTML(pub.venue)}</span>
      </div>
      <div class="link-row public-anchor-links">${renderPublicationLinks(pub.links)}</div>
    </article>
  `;
}

function renderProgrammeAnchor(anchor) {
  return `
    <article class="public-anchor-row programme-anchor-row">
      <div>
        <strong>${escapeHTML(anchor.title)}</strong>
        <span>${escapeHTML(anchor.status)}</span>
        <p>${escapeHTML(anchor.text)}</p>
      </div>
    </article>
  `;
}

function renderDirectionMapSections(direction) {
  return (direction.detailSections || []).map((section) => `
    <section class="direction-map-block">
      <h4>${escapeHTML(section.label)}</h4>
      <p>${escapeHTML(section.text)}</p>
    </section>
  `).join("");
}

function renderDirectionFigures(direction) {
  const figures = direction.figures || (direction.figure ? [direction.figure] : []);
  if (!figures.length) return "";

  const cards = figures.slice(0, 3).map((figure) => `
    <figure class="direction-figure-card">
      <img src="${escapeHTML(figure.src)}" alt="${escapeHTML(figure.alt)}" loading="lazy" />
      ${figure.caption ? `<figcaption>${escapeHTML(figure.caption)}</figcaption>` : ""}
    </figure>
  `).join("");

  return `<div class="direction-figure-grid figure-count-${Math.min(figures.length, 3)}" aria-label="Visual notes for ${escapeHTML(direction.title)}">${cards}</div>`;
}

function renderDirectionPanel(direction) {
  const anchorIds = direction.publicAnchorIds || [];
  const publicAnchors = Array.from(new Set(anchorIds))
    .map(findPublication)
    .filter(Boolean)
    .map(renderPublicAnchor)
    .join("");
  const programmeAnchors = (direction.programmeAnchors || [])
    .map(renderProgrammeAnchor)
    .join("");
  const anchorContent = [publicAnchors, programmeAnchors].filter(Boolean).join("");

  const publicAnchorBlock = anchorContent || direction.relatedText
    ? `
      <div class="public-anchor-block">
        <span>${escapeHTML(direction.anchorHeading || "Public anchors")}</span>
        ${anchorContent ? `<div class="public-anchor-list">${anchorContent}</div>` : ""}
        ${direction.relatedText ? `<p>${escapeHTML(direction.relatedText)}</p>` : ""}
      </div>
    `
    : "";
  const figureLayer = renderDirectionFigures(direction);
  const directionIndex = RESEARCH_DIRECTIONS.findIndex((item) => item.id === direction.id);
  const previousDirection = RESEARCH_DIRECTIONS[(directionIndex - 1 + RESEARCH_DIRECTIONS.length) % RESEARCH_DIRECTIONS.length];
  const nextDirection = RESEARCH_DIRECTIONS[(directionIndex + 1) % RESEARCH_DIRECTIONS.length];

  return `
    <header class="research-map-panel-header">
      <p class="research-map-panel-index">${String(directionIndex + 1).padStart(2, "0")} / ${String(RESEARCH_DIRECTIONS.length).padStart(2, "0")}</p>
      <h3>${escapeHTML(direction.title)}</h3>
      <button type="button" class="research-map-panel-close" aria-label="Close research map">×</button>
    </header>
    ${figureLayer}
    <div class="direction-map-blocks">${renderDirectionMapSections(direction)}</div>
    ${publicAnchorBlock}
    <nav class="research-map-panel-nav" aria-label="Browse research directions">
      <button type="button" data-map-direction="${escapeHTML(previousDirection.id)}">
        <i class="fas fa-arrow-left" aria-hidden="true"></i>
        <span>${escapeHTML(previousDirection.title)}</span>
      </button>
      <button type="button" data-map-direction="${escapeHTML(nextDirection.id)}">
        <span>${escapeHTML(nextDirection.title)}</span>
        <i class="fas fa-arrow-right" aria-hidden="true"></i>
      </button>
    </nav>
  `;
}

function renderPublicationFilters() {
  const filterContainer = document.querySelector("#publication-filters");
  if (!filterContainer) return;

  filterContainer.innerHTML = PUBLICATION_FILTERS.map((filter, index) => `
    <button type="button" class="publication-filter ${index === 0 ? "active" : ""}" data-publication-filter="${escapeHTML(slugify(filter))}">
      ${escapeHTML(filter)}
    </button>
  `).join("");
}

function renderPublications() {
  const results = document.querySelector("#publication-results");
  if (!results) return;

  const activeButton = document.querySelector("[data-publication-filter].active");
  const activeFilter = activeButton ? activeButton.getAttribute("data-publication-filter") : "all";
  const searchInput = document.querySelector("#publication-search");
  const query = searchInput ? searchInput.value.trim().toLowerCase() : "";

  const filtered = PUBLICATIONS.filter((pub) => {
    const tags = pub.tags.map(slugify);
    const matchesFilter = activeFilter === "all" || tags.indexOf(activeFilter) !== -1;
    const haystack = [
      pub.title,
      pub.year,
      pub.authors,
      pub.venue,
      pub.status,
      pub.tags.join(" "),
    ].join(" ").toLowerCase();
    return matchesFilter && (!query || haystack.indexOf(query) !== -1);
  });

  results.innerHTML = filtered.map(renderPublicationRow).join("");

  const status = document.querySelector("#publication-count");
  if (status) {
    status.textContent = `${filtered.length} ${filtered.length === 1 ? "item" : "items"} shown`;
  }
}

function clearPublicationControls() {
  const searchInput = document.querySelector("#publication-search");
  if (searchInput) searchInput.value = "";
  document.querySelectorAll("[data-publication-filter]").forEach((button) => {
    button.classList.toggle("active", button.getAttribute("data-publication-filter") === "all");
  });
  renderPublications();
}

function highlightPublicationById(id) {
  clearPublicationControls();
  window.setTimeout(() => {
    const card = Array.from(document.querySelectorAll("[data-publication-id]"))
      .find((item) => item.getAttribute("data-publication-id") === id);
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "center" });
      card.classList.add("publication-highlight");
      window.setTimeout(() => card.classList.remove("publication-highlight"), 1400);
    }
  }, 0);
}

function wirePublicationIdLinks(root = document) {
  root.querySelectorAll("[data-publication-id-link]").forEach((link) => {
    if (link.dataset.publicationLinkWired === "true") return;
    link.dataset.publicationLinkWired = "true";
    link.addEventListener("click", () => {
      highlightPublicationById(link.getAttribute("data-publication-id-link"));
    });
  });
}

function renderResearchDirections() {
  const container = document.querySelector("#research-directions-grid");
  if (!container) return;
  const panel = document.querySelector("#research-map-panel");
  const layout = container.closest(".research-map-layout");
  const defaultPanel = panel ? panel.innerHTML : "";

  container.innerHTML = RESEARCH_DIRECTIONS.map((direction, index) => {
    return `
      <article class="research-map-card direction-card" data-direction-id="${escapeHTML(direction.id)}">
        <div class="research-map-card-head">
          <span class="direction-card-index">${String(index + 1).padStart(2, "0")}</span>
          <h3>${escapeHTML(direction.title)}</h3>
          <p>${escapeHTML(direction.summary)}</p>
        </div>
        <button
          type="button"
          class="direction-toggle"
          aria-expanded="false"
          aria-controls="research-map-panel"
          data-direction-toggle="${escapeHTML(direction.id)}"
        >
          <span>Explore direction</span>
          <i class="fas fa-arrow-right" aria-hidden="true"></i>
        </button>
      </article>
    `;
  }).join("");

  function resetDirectionButtons() {
    container.querySelectorAll(".direction-toggle").forEach((item) => {
      item.setAttribute("aria-expanded", "false");
      const label = item.querySelector("span");
      if (label) label.textContent = "Explore direction";
      const icon = item.querySelector("i");
      if (icon) icon.className = "fas fa-arrow-right";
    });
    container.querySelectorAll(".research-map-card").forEach((card) => card.classList.remove("is-active"));
  }

  function closeDirectionPanel(returnFocusTo) {
    if (!panel) return;
    resetDirectionButtons();
    panel.hidden = true;
    panel.classList.remove("has-selection");
    panel.innerHTML = defaultPanel;
    layout?.classList.remove("is-expanded");
    if (returnFocusTo) returnFocusTo.focus();
  }

  function openDirectionPanel(directionId, options = {}) {
    if (!panel) return;
    const direction = RESEARCH_DIRECTIONS.find((item) => item.id === directionId);
    const button = container.querySelector(`[data-direction-toggle="${directionId}"]`);
    if (!direction || !button) return;

    resetDirectionButtons();
    button.setAttribute("aria-expanded", "true");
    const label = button.querySelector("span");
    if (label) label.textContent = "Viewing direction";
    const icon = button.querySelector("i");
    if (icon) icon.className = "fas fa-external-link-alt";
    button.closest(".research-map-card")?.classList.add("is-active");

    panel.innerHTML = renderDirectionPanel(direction);
    panel.hidden = false;
    panel.classList.add("has-selection");
    layout?.classList.add("is-expanded");
    wirePublicationIdLinks(panel);

    panel.querySelector(".research-map-panel-close")?.addEventListener("click", () => {
      closeDirectionPanel(button);
    });
    panel.querySelectorAll("[data-map-direction]").forEach((mapButton) => {
      mapButton.addEventListener("click", () => {
        openDirectionPanel(mapButton.getAttribute("data-map-direction"), { focusPanel: false });
      });
    });

    if (options.focusPanel) panel.focus({ preventScroll: true });
    if (options.scrollIntoView && window.matchMedia("(max-width: 980px)").matches) {
      panel.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "nearest",
      });
    }
  }

  container.querySelectorAll(".direction-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const directionId = button.getAttribute("data-direction-toggle");
      if (button.getAttribute("aria-expanded") === "true") {
        closeDirectionPanel(button);
        return;
      }
      openDirectionPanel(directionId, { focusPanel: false, scrollIntoView: true });
    });
  });
}

function renderResearchTrajectory() {
  const container = document.querySelector("#trajectory-list");
  if (!container) return;

  container.innerHTML = RESEARCH_TRAJECTORY.slice().reverse().map((item) => `
    <article class="trajectory-item">
      <span>${escapeHTML(item.date)}</span>
      <h3>${escapeHTML(item.place)}</h3>
      <p>${escapeHTML(item.text)}</p>
    </article>
  `).join("");
}

function wirePublicationControls() {
  renderResearchDirections();
  renderResearchTrajectory();
  renderPublicationFilters();
  renderPublications();

  document.querySelectorAll("[data-publication-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-publication-filter]").forEach((item) => {
        item.classList.toggle("active", item === button);
      });
      renderPublications();
    });
  });

  const searchInput = document.querySelector("#publication-search");
  if (searchInput) {
    searchInput.addEventListener("input", renderPublications);
  }

  const clearButton = document.querySelector("#clear-publication-filters");
  if (clearButton) {
    clearButton.addEventListener("click", clearPublicationControls);
  }

  document.querySelectorAll("[data-work-filter]").forEach((link) => {
    link.addEventListener("click", () => {
      const filter = slugify(link.getAttribute("data-work-filter"));
      const targetButton = document.querySelector(`[data-publication-filter="${filter}"]`);
      if (targetButton) {
        document.querySelectorAll("[data-publication-filter]").forEach((item) => {
          item.classList.toggle("active", item === targetButton);
        });
        renderPublications();
      }
    });
  });

  wirePublicationIdLinks();
}

function renderEventLinks(links) {
  return [
    ["event", "Event"],
    ["abstract", "Abstract"],
    ["proceedings", "Proceedings"],
    ["slides", "Slides"],
    ["video", "Video"],
  ].map(([key, label]) => linkButton(label, links[key])).join("");
}

function renderTalkItem(talk) {
  const links = renderEventLinks(talk.links);
  const venue = talk.links && talk.links.event
    ? `<a href="${escapeHTML(talk.links.event)}" target="_blank" rel="noopener noreferrer">${escapeHTML(talk.venue)}</a>`
    : escapeHTML(talk.venue);
  return `
    <article class="talk-item">
      <div class="talk-date">${escapeHTML(talk.date)}</div>
      ${links ? `<div class="link-row talk-links">${links}</div>` : ""}
      <div>
        <h3>${escapeHTML(talk.title)}</h3>
        <p class="talk-venue">${venue} · ${escapeHTML(talk.location)}</p>
        <p class="talk-kind">${escapeHTML(talk.type)}</p>
      </div>
    </article>
  `;
}

function renderSimpleEventItem(event) {
  const title = event.url
    ? `<a href="${escapeHTML(event.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(event.title)}</a>`
    : escapeHTML(event.title);
  return `
    <article class="mini-event">
      <span>${escapeHTML(event.date)}</span>
      <strong>${title}</strong>
      <em>${escapeHTML(event.location)}</em>
    </article>
  `;
}

function renderTalksAndVisits() {
  const selectedTalks = document.querySelector("#selected-talks");
  const earlierTalks = document.querySelector("#earlier-talks");
  const conferences = document.querySelector("#conference-list");
  const schools = document.querySelector("#school-list");

  if (selectedTalks) {
    selectedTalks.innerHTML = TALKS.filter((talk) => talk.selected).map(renderTalkItem).join("");
  }

  if (earlierTalks) {
    earlierTalks.innerHTML = TALKS.filter((talk) => !talk.selected).map(renderTalkItem).join("");
  }

  if (conferences) {
    conferences.innerHTML = CONFERENCES.map(renderSimpleEventItem).join("");
  }

  if (schools) {
    schools.innerHTML = SCHOOLS.map(renderSimpleEventItem).join("");
  }
}

function renderEpigraphLines(lines) {
  return lines.map(escapeHTML).join("<br />");
}

function initPersonalEpigraph() {
  const root = document.querySelector("#personal-epigraph");
  if (!root || !PERSONAL_EPIGRAPHS.length) return;

  const original = root.querySelector("#epigraph-original");
  const translation = root.querySelector("#epigraph-translation");
  const source = root.querySelector("#epigraph-source");
  const transliteration = root.querySelector("#epigraph-transliteration");
  const transliterationWrap = root.querySelector("#epigraph-transliteration-wrap");
  const nextButton = root.querySelector("#epigraph-next");
  const status = root.querySelector("#epigraph-status");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pool = shuffleArray(PERSONAL_EPIGRAPHS);
  let index = 0;
  let paused = false;

  function applyEpigraph(item, manual) {
    if (!item || !original || !translation || !source) return;

    original.innerHTML = renderEpigraphLines(item.original);
    original.setAttribute("lang", item.scriptLang);
    translation.innerHTML = renderEpigraphLines(item.translation);
    source.textContent = item.source;

    if (transliteration && transliterationWrap && item.transliteration && item.transliteration.length) {
      transliteration.innerHTML = renderEpigraphLines(item.transliteration);
      transliteration.setAttribute("lang", item.romanLang);
      transliterationWrap.hidden = false;
    } else if (transliterationWrap) {
      transliterationWrap.hidden = true;
    }

    if (manual && status) {
      status.textContent = `Epigraph changed: ${item.source}`;
    }
  }

  function renderEpigraph(item, manual, immediate) {
    if (prefersReducedMotion || immediate) {
      applyEpigraph(item, manual);
      return;
    }

    root.classList.add("epigraph-is-fading");
    window.setTimeout(() => {
      applyEpigraph(item, manual);
      root.classList.remove("epigraph-is-fading");
    }, 350);
  }

  function nextEpigraph(manual) {
    index = (index + 1) % pool.length;
    renderEpigraph(pool[index], manual, false);
  }

  renderEpigraph(pool[index], false, true);

  if (nextButton) {
    nextButton.addEventListener("click", () => nextEpigraph(true));
  }

  root.addEventListener("mouseenter", () => { paused = true; });
  root.addEventListener("mouseleave", () => { paused = false; });
  root.addEventListener("focusin", () => { paused = true; });
  root.addEventListener("focusout", () => { paused = false; });

  if (!prefersReducedMotion && pool.length > 1) {
    window.setInterval(() => {
      if (!paused) nextEpigraph(false);
    }, 150000);
  }
}

/* ============================================================
   TypeWriter
   ============================================================ */
class TypeWriter {
  constructor(el, words, wait) {
    this.el = el;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10) || 7000;
    this.isDeleting = false;
    this.type();
  }

  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    this.txt = this.isDeleting
      ? fullTxt.substring(0, this.txt.length - 1)
      : fullTxt.substring(0, this.txt.length + 1);

    this.el.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = this.isDeleting ? 28 : 48;

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 600;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

/* ============================================================
   DOM Ready
   ============================================================ */
document.addEventListener("DOMContentLoaded", function () {
  const txtElement = document.querySelector(".txt-type");
  if (txtElement) {
    const wait = txtElement.getAttribute("data-wait") || 7000;
    const shuffledQuotes = shuffleArray(QUOTES);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      txtElement.textContent = shuffledQuotes[0];
    } else {
      new TypeWriter(txtElement, shuffledQuotes, wait);
    }
  }

  const scrollDown = document.querySelector(".scroll-down");
  if (scrollDown) {
    window.addEventListener("scroll", function () {
      scrollDown.classList.toggle("scroll-hide", window.pageYOffset > 120);
    });
  }

  const navToggle = document.querySelector("#nav-toggle");
  const smallNav = document.querySelector(".small-nav");
  const closeBtn = document.querySelector(".close-btn");

  if (navToggle && smallNav && closeBtn) {
    navToggle.addEventListener("click", function () {
      smallNav.classList.add("show-aside");
      navToggle.setAttribute("aria-expanded", "true");
    });
    closeBtn.addEventListener("click", function () {
      smallNav.classList.remove("show-aside");
      navToggle.setAttribute("aria-expanded", "false");
    });

    const asideLinks = smallNav.querySelectorAll(".aside-link");
    asideLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        smallNav.classList.remove("show-aside");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", function (e) {
      if (
        smallNav.classList.contains("show-aside") &&
        !smallNav.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        smallNav.classList.remove("show-aside");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  wirePublicationControls();
  renderTalksAndVisits();
  initPersonalEpigraph();

  if (typeof gsap === "undefined") return;

  if (document.querySelector(".top")) gsap.from(".top", { duration: 1.5, opacity: 0, y: -80, ease: "power2.out" });
  if (document.querySelector(".down")) gsap.from(".down", { duration: 1.5, opacity: 0, y: 80, ease: "power2.out" });

  if (typeof ScrollTrigger !== "undefined" && window.innerWidth >= 992 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.registerPlugin(ScrollTrigger);

    const slideAnims = [
      { selector: ".right-anim", x: 130 },
      { selector: ".right-anim-1", x: 130 },
      { selector: ".left-anim", x: -130 },
      { selector: ".left-anim-1", x: -130 },
    ];

    slideAnims.forEach(function (anim) {
      if (!document.querySelector(anim.selector)) return;
      gsap.from(anim.selector, {
        scrollTrigger: {
          trigger: anim.selector,
          start: "top 80%",
          toggleActions: "restart none none reset",
        },
        x: anim.x,
        opacity: 0,
        duration: 1.3,
        ease: "power2.out",
      });
    });
  }
});
