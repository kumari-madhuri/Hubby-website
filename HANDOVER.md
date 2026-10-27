# Website stewardship — 27 October 2026

## Repository and live site

- Repository: `/Users/kaushlendrakumar/Desktop/rThreads/Website`.
- Remote: `https://github.com/kumari-madhuri/Hubby-website.git`, branch `main`.
- Public site: `https://k-kumar.netlify.app/`.
- Editable/published files: `dist/` — five HTML pages, `app.js`, `style.css`, and media. This is a buildless static site; no package installation or build is needed.
- `oldCodes/`, `WebsiteBackups/`, and `media_archive/` are reference material, outside the publish directory.
- Recovered archived chat: **website steward**, ID `019dcfd3-551c-7d02-9c40-63b1750fded0`. Read access worked. No earlier dedicated handover/deployment file was found.

## Deployment and authorization

The recovered workflow is GitHub → Netlify: review changes, commit from the repository root **Website**, and push `main`. GitHub Desktop was previously misconfigured to use `Website/dist`; use the root instead. The Netlify dashboard's build settings were not inspected. The live `app.js` exactly matched local HEAD `2b5727d41da9b8538cf16245c60f784f02f9ed33` before this pass; HTML differed only through Netlify's injected comment and pretty-URL rewriting. A fresh remote lookup confirmed the same GitHub main/HEAD on 27 October.

No explicit permission to publish this pass was found in the recovered chat or current request. **Nothing was committed, pushed, or deployed.** Review this local preview and obtain publication authorization before pushing. Do not migrate hosting or create a Sites project. Verify the Netlify integration/publish directory before deployment if its settings are uncertain.

Preview command, from any directory:
`python3 -m http.server 8765 --bind 127.0.0.1 --directory /Users/kaushlendrakumar/Desktop/rThreads/Website/dist`

Preview: `http://127.0.0.1:8765/index.html#current-results`; research: `http://127.0.0.1:8765/work.html`.

## Completed in this pass

- Read canonical `../Voice_Protocol.md` v3.0.1, the relevant before/after evidence, and the current proceedings source. Preserved the design, personal writing, and author-requested research hero `HiggsMechanics.png`.
- Added **Helstrom geometry with time-dependent spectral calibration**, `arXiv:2610.33848`, first submitted 24 October 2026. Status: **public preprint, prepared for the XLIII WGMP proceedings**; no acceptance or journal publication was verified. Source: `https://arxiv.org/abs/2610.33848`.
- Updated the homepage feature, research highlight, publication list, state-geometry references, social metadata and structured data. Existing current papers retain their verified statuses; the SO(1,3) paper remains PLB 880 (2026) 140865.
- Used the author's **actual proceedings Figure 1**, exported from `../QInfo_Geometry/isotropic-helstrom/proceeding/fig1.pdf` with Poppler's `-cropbox`. Web files: `dist/media/helstrom-scalar-bloch.png` and an unchanged copy of the PDF. Clicking the homepage image opens the PDF. The author explicitly rejected the older website-only schematic; do not restore it or substitute generated artwork for this figure.
- Replaced abstract programme language with specific research questions and explanations. Removed unpublished draft titles, technical results and internal planning from public data. Preserved the four research directions. Superseded QInfo website images were moved intact to `../00_COORDINATION/website-private-assets/2026-10-27/`, outside this repository and deployment.
- Repaired WGMP event/abstract links to `/wgmp43/`, the IISER faculty link, the missing QTS arXiv link `2310.00391`, and the 2018 finite-distance paper's title against Crossref publisher metadata.
- Updated footer dates/cache versions to 27 October 2026 / `20261027a`.
- Preserved the existing CV content, added the new public preprint to `../rProfile/CV/bibliography/inReviewArticles.bib`, and changed the non-RRI public summary to five preprints in `main.tex`. `sh ../rProfile/CV/build.sh` rebuilt the public three-page CV and synchronized `dist/media/CV.pdf`. The PDFs match by SHA-256; all three rendered pages were inspected.

## Checks and remaining work

- JavaScript syntax, JSON-LD, unique publication IDs, research references, five-page HTML/local asset/anchor/case checks, and diff whitespace passed. Nineteen publication records are present.
- Browser checks passed at desktop and 390px mobile widths: all four expanded research panels, publication search, proceedings filter, clearing filters, and page overflow. The real Figure 1 renders without cropping.
- External audit: 93 unique links; 83 initially returned success. Three definitive 404s were repaired and their replacements verified. AIP/World Scientific, IMDb, LinkedIn and ResearchGate restrict automated access; retain valid DOI/profile links. The old Navodaya Ranchi school URL timed out and remains unverified. Do not interpret these restrictions as missing publications.
- Remaining: author review, publication authorization, and deployment verification after an authorized push. There is no new acceptance/status to announce for the other preprints.
- Existing untracked `AGENTS.md`, `CLAUDE.md`, and voice-protocol copies were left alone. Do not blindly stage all repository files.
- Temporary baselines/check reports are in `/private/tmp/website-steward-2026-10-27/`; they are not deployable content. The original pre-pass CV is retained there. Avoid replacing concurrent author edits from those backups.
