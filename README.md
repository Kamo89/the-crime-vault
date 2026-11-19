# The Vault

**▶ Play it:** [kamo823.itch.io/the-vault](https://kamo823.itch.io/the-vault) · [kamo89.github.io/the-crime-vault](https://kamo89.github.io/the-crime-vault/)

A browser detective game from **The Crime Vault**. You open a case file, read the evidence, test every claim against it, pin clues to a corkboard, and make your call. Then you find out whether you got it right.

## Cases

| # | Case | Where | Type |
|---|------|-------|------|
| 000 | Lights Out at Kiln | Maboneng, Johannesburg | Fiction · training case |
| 005 | The Wedding at Amandelhof | Franschhoek | Fiction · whodunit |
| 006 | The Stokvel Treasurer | Orlando West, Soweto | Fiction · whodunit |
| 001 | The De Zalze Killings (2015) | Stellenbosch | Real · single killer |
| 007 | The Bathroom Door (2013) | Pretoria | Real · single killer |
| 002 | The ABC Murders (1994–95) | Gauteng | Real · serial killer |
| 003 | The Frederick Disappearance (2018) | Colorado, USA | Real · single killer |
| 004 | The Golden State Killer (1975–86) | California, USA | Real · serial killer |

## How the real cases are handled

- Only solved cases with a conviction or guilty plea.
- Every fact is paraphrased from court records and news reporting. Sources are listed at the end of each case.
- The claims you weigh are the real arguments made by police, prosecutors and defence, including the defence's strongest points. No real innocent person is ever presented as a suspect.
- No graphic detail. Each case ends by naming the victims.

## How it plays (v1.1)

- **Staged investigation:** each case unfolds in three stages. Follow leads to find evidence, but every lead costs time and is scored against par. Some leads are dead ends.
- **Weigh every claim:** judge each claim *Supported*, *Contradicted* or *Can't tell*, and attach the evidence. Some claims are true, some are lies, and some can't be settled. A wrong call is final.
- **Reasoning verdicts:** real cases ask what can be proven and how, not only "who". Fiction cases are proper whodunits with red herrings.
- **Investigation board** with red string, and a **timeline** that builds itself from the evidence.
- Scoring, ranks, a running record of solved cases, progress saved in the browser, installable and playable offline.

## Tech

Vanilla HTML, CSS and JavaScript with no dependencies. The source lives in `src/`: one file per case in `src/cases/`, the game engine in `src/engine.js` and the styles in `src/styles.css`. Run `python3 build.py` to bundle everything into the single `index.html` that gets deployed. You can open it locally or serve it from any static host. It's hosted on GitHub Pages and published on [itch.io](https://kamo823.itch.io/the-vault).

---

Built by **Kamohelo Mosiya** · SitesByKamo

## Install it as an app

The Vault is a progressive web app. Open the website and use **Install the app** in the footer (Chrome, Edge, Android), or on iPhone tap **Share → Add to Home Screen** in Safari. It gets its own icon and works offline after the first visit.

## Launch kit

The `launch/` folder has the itch.io listing text, cover image, screenshots and the upload zip.

When you change `index.html`, bump `VERSION` in `sw.js` so installed copies pick up the update.
