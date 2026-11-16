# The Vault

**▶ Play it:** [kamo823.itch.io/the-vault](https://kamo823.itch.io/the-vault) · [kamo89.github.io/the-crime-vault](https://kamo89.github.io/the-crime-vault/)

A browser detective game from **The Crime Vault**. You open a case file, read the evidence, test every claim against it, pin clues to a corkboard, and make your call. Then you find out whether you got it right.

## Cases

| # | Case | Where | Type |
|---|------|-------|------|
| 000 | Lights Out at Kiln | Maboneng, Johannesburg | Fictional training case |
| 001 | The De Zalze Killings (2015) | Stellenbosch | Real · single killer |
| 002 | The ABC Murders (1994–95) | Gauteng | Real · serial killer |
| 003 | The Frederick Disappearance (2018) | Colorado, USA | Real · single killer |
| 004 | The Golden State Killer (1975–86) | California, USA | Real · serial killer |

## How the real cases are handled

- Only solved cases with a conviction or guilty plea.
- Every fact is paraphrased from court records and news reporting. Sources are listed at the end of each case.
- Wrong answers are theories that were considered at the time, never real innocent people.
- No graphic detail. Each case ends by naming the victims.

## Features

- Evidence locker where reading one item can uncover the next
- Statements you test against evidence to disprove claims (wrong tests cost points)
- Drag-and-drop investigation board with red string
- Timeline that builds itself from the evidence you've found
- One-shot verdict with scoring, ranks and a running record of solved cases
- Progress saved in the browser, works on phones

## Tech

A single static `index.html` with vanilla HTML, CSS and JavaScript. It has no build step and no dependencies. You can open it locally or serve it from any static host. It's hosted on GitHub Pages and published on [itch.io](https://kamo823.itch.io/the-vault).

---

Built by **Kamohelo Mosiya** · SitesByKamo

## Install it as an app

The Vault is a progressive web app. Open the website and use **Install the app** in the footer (Chrome, Edge, Android), or on iPhone tap **Share → Add to Home Screen** in Safari. It gets its own icon and works offline after the first visit.

## Launch kit

The `launch/` folder has the itch.io listing text, cover image, screenshots and the upload zip.

When you change `index.html`, bump `VERSION` in `sw.js` so installed copies pick up the update.
