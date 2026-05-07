/* ============================================================
   app.js — Kaushlendra Kumar Academic Site
   ============================================================ */

/* ============================================================
   Quotes — shuffled on every page load.
   Categories: physics/maths, Buddhism/Vipassana, Upanishads/Gita,
   Kabir/Tagore/Hindi tradition, Tolkien, Philosophy.
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
  "That by which the mind thinks — know that alone as Brahman. — Kena Upanishad",
  "Tat tvam asi: That thou art. — Chandogya Upanishad",
  "From the unreal lead me to the real; from darkness lead me to light. — Brihadaranyaka Upanishad",
  "Let right deeds be thy motive, not the fruit which comes from them. — Bhagavad Gita",
  "The Self is not born, nor does it ever die. — Bhagavad Gita",
  "Three things cannot be long hidden: the sun, the moon, and the truth. — Buddha",
  "Work out your own salvation. Do not depend on others. — Buddha",
  "Peace comes from within. Do not seek it without. — Buddha",
  "Not all those who wander are lost. — Tolkien",
  "All we have to decide is what to do with the time that is given us. — Tolkien",
  "There is some good in this world, and it is worth fighting for. — Tolkien",
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
  "Quantum Geometry",
  "Yang–Mills",
  "Electromagnetic Knots",
  "Noncommutative Geometry",
  "Matrix Models",
  "Spectral Distance",
  "Proceedings",
];

const PUBLICATIONS = [
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
      notebook: "https://www.notebookarchive.org/2026-03-0yfd51x/",
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
    title: "Revisiting Connes’ finite spectral distance on the algebra M2(C)",
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
    date: "Dec 9, 2025",
    title: "Geodesic flows on a black-hole background",
    venue: "Quantum Algebras seminar, Queen Mary University of London",
    location: "London",
    type: "seminar talk",
    selected: false,
    links: {
      slides: "./media/BHflowSlides.pdf",
    },
    tags: ["Quantum Geometry", "Black Holes"],
  },
  {
    date: "May 28, 2024",
    title: "Octonions and the Standard Model",
    venue: "Quantum Algebras seminar, Queen Mary University of London",
    location: "London",
    type: "seminar talk",
    selected: false,
    links: {},
    tags: ["Noncommutative Geometry"],
  },
  {
    date: "Mar 5, 2024",
    title: "Emergence of modified Einstein equation from 1-loop result in IKKT matrix model",
    venue: "Quantum Algebras seminar, Queen Mary University of London",
    location: "London",
    type: "seminar talk",
    selected: false,
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
    selected: true,
    links: {
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
  { date: "Jul 7–11, 2025", title: "A Quantum of Noncommutativity", location: "Ambleside, UK" },
  { date: "Jul 24–28, 2023", title: "The 12th International Symposium on Quantum Theory and Symmetries", location: "Prague, Czech Republic" },
  { date: "Feb 6–17, 2023", title: "Vortex Moduli at ICTS Bangalore", location: "online" },
  { date: "Jul 18–22, 2022", title: "The 34th International Colloquium on Group Theoretical Methods in Physics", location: "Strasbourg, France" },
  { date: "Aug 2–7, 2021", title: "International Congress on Mathematical Physics and Young Researchers Symposium", location: "Geneva, Switzerland" },
  { date: "Jan 15–19, 2018", title: "Quantum Groups and Noncommutative Geometry", location: "NISER Bhubaneswar, India" },
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
    title: "Exact fields and geometric transport",
    label: "Published work",
    summary: "Exact Yang–Mills and Maxwell sectors generated from symmetry, conformal structure, and homogeneous-space reductions.",
    detail: "This direction grew from de Sitter and Minkowski Yang–Mills constructions and rational electromagnetic knots. The common method is to use a rigid spacetime or symmetry input, reduce the field equations to tractable geometric data, and extract observables such as conserved charges, particle trajectories, or transport channels.",
    tags: ["Yang–Mills", "Exact Fields", "Electromagnetic Knots"],
    related: [
      "adS-exact-gauge-fields",
      "minkowski-coset-yang-mills",
      "rational-em-charges",
      "rational-em-fields",
    ],
  },
  {
    title: "Quantum geometry and emergent spacetime",
    label: "Public preprint + published work",
    summary: "Quantum-Riemannian black-hole geometry and matrix-model emergent gravity, with geodesic flows and effective gravitational equations as computable test cases.",
    detail: "This direction connects noncommutative and quantum geometry to gravitational dynamics. Current work with Shahn Majid develops geodesic-flow ideas on black-hole backgrounds, while work with Harold Steinacker studies how one-loop IKKT matrix-model dynamics modifies gravitational field equations.",
    tags: ["Quantum Geometry", "Black Holes", "Matrix Models"],
    related: [
      "black-hole-geodesic-flows",
      "ikkt-effective-einstein",
    ],
  },
  {
    title: "Algebraic particle geometry",
    label: "Ongoing collaboration",
    summary: "Finite spectral triples and Clifford/division-algebraic structures as constrained settings for particle-sector model building.",
    detail: "This line studies how finite geometric and algebraic data — Clifford and division algebras, linked finite spaces, scalar sectors, and inner fluctuations — can organize particle-like degrees of freedom. The public presentation stays deliberately conservative: structural model building, not premature phenomenological claims.",
    tags: ["Finite Spectral Triples", "Noncommutative Geometry", "Particle Geometry"],
    relatedText: "Current collaborative work with Shahn Majid and previous work with Nichol Furey.",
  },
  {
    title: "Spectral and information geometry",
    label: "Published work + current project",
    summary: "Metric and operational geometry of quantum states: spectral distance, finite metric structures, Helstrom distinguishability, and calibration-sensitive information flow.",
    detail: "This direction begins with published spectral-distance computations in noncommutative geometry and extends toward operational quantum-information questions. The public anchor is spectral distance; the information-geometric work is presented as a current extension unless and until public manuscripts are posted.",
    tags: ["Spectral Distance", "Noncommutative Geometry", "Quantum Information"],
    related: [
      "doubled-moyal-spectral-distance",
      "finite-spectral-distance",
    ],
  },
];

const RESEARCH_TRAJECTORY = [
  {
    date: "2024–present",
    place: "Queen Mary University of London",
    text: "Current work with Shahn Majid on Quantum Riemannian Geometry.",
  },
  {
    date: "2023–2024",
    place: "HU Berlin",
    text: "Work with Nichol Furey on division-algebraic and finite-geometric particle structures.",
  },
  {
    date: "2023–2024",
    place: "ESI Vienna",
    text: "Collaboration with Harold Steinacker on IKKT matrix models and emergent gravity.",
  },
  {
    date: "2018–2023",
    place: "Leibniz University Hannover",
    text: "PhD and postdoctoral exact Yang–Mills work with Olaf Lechtenfeld.",
  },
  {
    date: "2013–2018",
    place: "S.N. Bose Centre",
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

function renderTagList(tags) {
  return tags.map((tag) => `<span>${escapeHTML(tag)}</span>`).join("");
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

function renderPublicationCard(pub, featured) {
  const significance = featured && pub.shortSignificance
    ? `<p class="publication-significance">${escapeHTML(pub.shortSignificance)}</p>`
    : "";

  return `
    <article class="publication-card ${featured ? "featured-publication-card" : ""}" data-publication-tags="${escapeHTML(pub.tags.map(slugify).join(" "))}" data-publication-id="${escapeHTML(pub.id)}">
      <div class="publication-meta">
        <span>${escapeHTML(pub.year)}</span>
        <span>${escapeHTML(pub.status)}</span>
      </div>
      <h3>${escapeHTML(pub.title)}</h3>
      <p class="publication-authors">${escapeHTML(pub.authors)}</p>
      <p>${escapeHTML(pub.venue)}</p>
      ${significance}
      <div class="tag-list">${renderTagList(pub.tags.slice(0, 4))}</div>
      <div class="link-row">${renderPublicationLinks(pub.links)}</div>
    </article>
  `;
}

function renderPublicationRow(pub) {
  return `
    <article class="publication-row" data-publication-tags="${escapeHTML(pub.tags.map(slugify).join(" "))}" data-publication-id="${escapeHTML(pub.id)}">
      <div class="publication-row-year">${escapeHTML(pub.year)}</div>
      <div class="publication-row-main">
        <div class="publication-row-heading">
          <h3>${escapeHTML(pub.title)}</h3>
          <span>${escapeHTML(pub.status)}</span>
        </div>
        <p class="publication-authors">${escapeHTML(pub.authors)}</p>
        <p class="publication-venue">${escapeHTML(pub.venue)}</p>
        <div class="publication-row-footer">
          <div class="link-row">${renderPublicationLinks(pub.links)}</div>
          <div class="tag-list">${renderTagList(pub.tags.slice(0, 4))}</div>
        </div>
      </div>
    </article>
  `;
}

function findPublication(id) {
  return PUBLICATIONS.find((pub) => pub.id === id);
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

function renderFeaturedWorks() {
  const featuredContainer = document.querySelector("#featured-works-grid");
  if (!featuredContainer) return;

  featuredContainer.innerHTML = PUBLICATIONS
    .filter((pub) => pub.featured)
    .slice(0, 5)
    .map((pub) => renderPublicationCard(pub, true))
    .join("");
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

function renderResearchDirections() {
  const container = document.querySelector("#research-directions-grid");
  if (!container) return;

  container.innerHTML = RESEARCH_DIRECTIONS.map((direction) => {
    const relatedLinks = (direction.related || [])
      .map(findPublication)
      .filter(Boolean)
      .map((pub) => `<a href="#selected-works" data-publication-id-link="${escapeHTML(pub.id)}">${escapeHTML(pub.title)}</a>`)
      .join("");

    const related = relatedLinks
      ? `<div class="direction-related"><span>Related works</span>${relatedLinks}</div>`
      : `<div class="direction-related"><span>Related thread</span><p>${escapeHTML(direction.relatedText || "")}</p></div>`;

    return `
      <details class="direction-card">
        <summary>
          <span class="direction-label">${escapeHTML(direction.label)}</span>
          <h3>${escapeHTML(direction.title)}</h3>
          <p>${escapeHTML(direction.summary)}</p>
          <div class="tag-list">${renderTagList(direction.tags.slice(0, 3))}</div>
        </summary>
        <div class="direction-expanded">
          <p>${escapeHTML(direction.detail)}</p>
          ${related}
        </div>
      </details>
    `;
  }).join("");
}

function renderResearchTrajectory() {
  const container = document.querySelector("#trajectory-list");
  if (!container) return;

  container.innerHTML = RESEARCH_TRAJECTORY.map((item) => `
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
  renderFeaturedWorks();
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

  document.querySelectorAll("[data-publication-id-link]").forEach((link) => {
    link.addEventListener("click", () => {
      clearPublicationControls();
      window.setTimeout(() => {
        const id = link.getAttribute("data-publication-id-link");
        const card = Array.from(document.querySelectorAll("[data-publication-id]"))
          .find((item) => item.getAttribute("data-publication-id") === id);
        if (card) {
          card.scrollIntoView({ behavior: "smooth", block: "center" });
          card.classList.add("publication-highlight");
          window.setTimeout(() => card.classList.remove("publication-highlight"), 1400);
        }
      }, 0);
    });
  });
}

function renderEventLinks(links) {
  return [
    ["slides", "Slides"],
    ["video", "Video"],
  ].map(([key, label]) => linkButton(label, links[key])).join("");
}

function renderTalkItem(talk) {
  return `
    <article class="talk-item">
      <div class="talk-date">${escapeHTML(talk.date)}</div>
      <div>
        <h3>${escapeHTML(talk.title)}</h3>
        <p>${escapeHTML(talk.venue)} · ${escapeHTML(talk.location)}</p>
        <p class="talk-kind">${escapeHTML(talk.type)}</p>
        <div class="tag-list">${renderTagList(talk.tags)}</div>
        <div class="link-row">${renderEventLinks(talk.links)}</div>
      </div>
    </article>
  `;
}

function renderSimpleEventItem(event) {
  return `
    <article class="mini-event">
      <span>${escapeHTML(event.date)}</span>
      <strong>${escapeHTML(event.title)}</strong>
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
