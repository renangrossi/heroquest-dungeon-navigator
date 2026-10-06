# HeroQuest — Digital Dungeon Navigator (IMPROVED)

Room-by-room dungeon viewer for playing HeroQuest on a real tabletop. The screen
shows only the room the Heroes can actually see, and the numbers printed on the
map are the exits you tap to move. That fog of war is what makes solo and co-op
play work: there is no Zargon to decide what you are allowed to see.

Original files by Chris Marlow (room art) and David Allison (code), 2017.
HeroQuest™ is the property of Milton Bradley / Games Workshop / Hasbro.

---

## 1. The question this answers

> Is it possible to play HeroQuest solo using the official and fan-made
> campaigns — extracting and cropping quest images and presenting them to the
> player in a website as he moves on the real-life tabletop?

**Yes, and most of it already existed.** The "Digital Dungeonmaster" room art is
exactly that idea, already drawn: one image per room, exits labelled with the
destination page. It only needed repairing, and one unwired pack finishing.

What it does **not** solve is Zargon's brain. The navigator presents the map; it
holds no monster, trap, treasure or wandering-monster data. Those are still read
from the quest book by a human. See [§9](#9-not-done-yet).

---

## 2. Where things live

| Path | What it is |
|---|---|
| `Projects/Heroquest digital dungeon navigator/` | **Pristine backup.** Untouched upstream copy, 856 files. Do not edit. |
| `Projects/Heroquest digital dungeon navigator IMPROVED/` | This folder. All fixes and the Dark Company pack. |
| `Projects/HeroQuest/` | Source archive: quest books, rules, tiles, fan quests. See [§8](#8-source-material-for-future-packs). |

The backup is deliberately kept byte-identical to the original. Every image in
this folder is unchanged from it — all 851 distinct image hashes match, nothing
was re-encoded. The renames were metadata only.

## 3. Running it

Live at **<https://renangrossi.github.io/heroquest-dungeon-navigator/>** — no
install, works on a tablet beside the table.

To run it locally, any static web server:

    cd "Heroquest digital dungeon navigator IMPROVED"
    python3 -m http.server 8731
    # then open http://localhost:8731/

Opening `index.html` straight off disk (`file://`) also works in most browsers.

| File | Purpose |
|---|---|
| `index.html` | **The navigator.** The classic 2017 interface, with every data fix applied. |
| `modern.html` | Alternative interface: responsive, dark, explored-room tracking, resumable links. |
| `creator.html` | Authoring tool that emits quest data to paste into `js/quest.js`. |
| `js/quest.js` | All quest data. The only file you edit to add content. |

## 4. What is in it

| Pack | Quests | Rooms |
|---|---:|---:|
| Original | 13 | 199 |
| Return of the Witch Lord | 10 | 182 |
| Kellar's Keep | 10 | 153 |
| Against the Ogre Horde | 7 | 164 |
| Dark Company | 1 | 145 |
| **Total** | **41** | **843** |

Plus 10 guide/reference images reachable from the quest list.

---

## 5. What was broken, and what was fixed

The upstream copy **did not run at all** on Linux. Folder names had been
lower-cased and filename spaces bulk-replaced with hyphens, but `js/quest.js`
still pointed at the old names. On a case-sensitive filesystem not one of the 707
image references resolved. On Windows the folder-case part would have been masked,
but the space→hyphen rename broke it everywhere.

| Area | Change |
|---|---|
| Naming | 61 non-conforming files/folders normalised to `lower-case-hyphen`, no collisions |
| `js/quest.js` | Regenerated from disk; every image reference now resolves |
| Connection typos | `r15 -> 17` (Melar's Maze) and `r10 -> 28` (Lair of the Ogre Horde) were missing the `r` prefix |
| Graph direction | 52 one-way links made two-way — doors work both ways, so you can walk back |
| Unreachable rooms | 5 quests had rooms no path could reach (6 of 22 in Fortress of the Ogre Lord) — now 0 |
| Dead ends | 4 rooms had no exits at all; you could walk in and be stuck — now 0 |
| Rotation | See below |
| Guide images | 8 of 9 pointed at files that no longer exist; rewired to what is on disk, and the co-op guide copied into `main-quest/`, which had none |
| `index.html` (classic) | Clean image paths, numeric exit labels, EXIF orientation, broken rotation CSS removed |
| `modern.html` | New alternative interface: responsive, dark, touch-sized targets, explored-room tracking, deep links |

### The rotation trap

Worth recording, because the obvious fix is the wrong one.

352 rooms carry `"rotation": "rotate90"` in the data, and those packs' scans are
stored portrait while the maps are landscape. The natural conclusion is that
rotation is broken and should be switched on. **It is not.** Those JPEGs carry an
EXIF `Orientation=RightTop` tag, which browsers apply automatically — and which
`naturalWidth`/`naturalHeight` already reflect. Applying a CSS transform on top
rotates them a second time and lays the map on its side.

That is why the original author commented the rotation CSS out. The block was
left in a broken state, though: CSS comments do not nest, so the `/* IE 9 */`
inside it closed the comment early, leaving `.rotate180` and `.rotate270` live
plus a stray terminator. Both interfaces now set `image-orientation: from-image`
explicitly and carry no rotation rules. The legacy `rotation` fields are left in
the data and ignored.

---

## 6. Dark Company

The `dark-company/` art was on disk — 13 section folders, 145 room pages, 3 guides
— with **no entry in `quest.js`**, so the pack never appeared in the menu.

### How the rooms were read

Each page prints its own page number in the bottom-right corner and the
destination page beside every door. The 145 pages were read off the scans
(auto-oriented, whitespace-trimmed, tiled into contact sheets) and transcribed
into a graph.

Pages per section:

| Section | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 |
|---|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|
| Pages | 7 | 11 | 19 | 13 | 18 | 6 | 8 | 4 | 15 | 18 | 12 | 4 | 10 |

Not every page is a room — some are event or treasure text ("Return to p.5"),
which are wired as ordinary nodes so the player can reach them and come back.

### It is one dungeon, not 13 quests

Sixteen doorways link the sections, so Dark Company is wired as a **single
quest**, `Dark Company Campaign`:

| | | | |
|---|---|---|---|
| 1.5 ↔ 10.13 | 2.2 ↔ 3.13 | 2.6 ↔ 8.2 | 3.4 ↔ 4.10 |
| 3.14 ↔ 9.4 | 4.9 ↔ 11.3 | 5.4 ↔ 9.7 | 5.10 ↔ 7.6 |
| 6.3 ↔ 10.8 | 7.6 ↔ 10.10 | 9.7 ↔ 11.9 | 9.9 ↔ 11.4 |
| 9.14 ↔ 11.7 | 10.9 ↔ 12.1 | 10.13 ↔ 13.6 | 10.16 ↔ 13.8 |

Splitting it into 13 quests would have thrown all sixteen away.

Room keys are therefore `s<section>p<page>` rather than `r<n>`, and its quest
`folder` is empty because each room file carries its own section folder. Both
interfaces display only the page part, so **the exit buttons are plain numbers
exactly like every other pack**.

Section 8 page 4 is the end of the campaign; Section 1 page 1 is the start.

### Known quirks

- Two rooms — **Section 4 page 10** and **Section 7 page 6** — have doors onto the
  same page number in two different sections, so a number appears twice in their
  exit row. This is faithful: Section 4 page 10's map really does print both a
  `4` and a "Sect.3 p.4". The button tooltip names the destination section.
- Section 11 page 2 has **no printed page number**, so both numbers on it are
  exits. Confirmed by the reciprocal links from pages 10 and 11.

### Confidence

The transcription is self-checking: of **290 door references read, only 2** were
missing their reverse link. Sections repeatedly predicted their own unread pages
correctly — section 3's page 19 and section 4's page 13 both matched what the rest
of the graph implied before those pages were looked at.

---

## 7. Reference

### Using the navigator

Both interfaces read the same data and link to each other from the header.
The classic one is the default; the points below marked *(modern)* are extras
`modern.html` adds.

- Pick a pack, then a quest. The first room opens.
- The buttons along the bottom are the exits; they match the numbers printed on
  the map. Keys `1`–`9` work too.
- *(modern)* Rooms already entered are marked, and each quest shows
  `seen / total`. Progress lives in browser local storage, per quest.
  **Reset** clears one quest.
- *(modern)* The URL carries `#pack/quest/room`, so a reload or bookmark
  returns to the exact room — useful when a tablet sleeps mid-game.
- *(modern)* `Esc` (or **Quests**) returns to the quest list.

### Data format (`js/quest.js`)

```js
var questList = {
  "Pack Name": {
    "name": "Pack Name",
    "folder": "pack-folder",
    "quests": {
      "q1": {
        "name": "Quest Name",
        "folder": "01-quest-folder",
        "rooms": {
          "r1": { "file": "room-01.jpg", "connections": "r2,r5", "rotation": "" }
        }
      }
    },
    "help": { "h1": { "name": "Guide", "file": "guide.png", "rotation": "" } }
  }
};
```

- An image resolves to `pack.folder / quest.folder / room.file`, with empty parts
  dropped.
- `connections` is a comma-separated list of room keys **in the same quest**. Keep
  it symmetric: if `r1` lists `r2`, `r2` must list `r1`.
- `rotation` is legacy and ignored — orientation comes from the image's EXIF tag.
- Room keys are `r<n>` and the button shows `<n>`. Dark Company uses
  `s<section>p<page>` and the button shows the page.

### Adding a pack

1. Put the room images under a new folder, named `lower-case-hyphen`.
2. Add the pack to `js/quest.js`, by hand or via `creator.html`.
3. Re-run the checks in §7.3 — they catch typos, one-way doors and stranded rooms.

### Re-running the checks

Graph and file validation, straight over the data file:

```bash
node -e "
const fs=require('fs');eval(fs.readFileSync('js/quest.js','utf8'));
const join=(...a)=>a.filter(Boolean).join('/');
let bad=0,dangling=0,noexit=0,asym=0,unreach=0,rooms=0;
for(const pk in questList){const p=questList[pk];
 for(const qk in p.quests){const q=p.quests[qk],R=q.rooms,keys=Object.keys(R);rooms+=keys.length;
  const conn=r=>(R[r].connections||'').split(',').filter(Boolean);
  for(const rk of keys){ if(!fs.existsSync(join(p.folder,q.folder,R[rk].file))) bad++;
   if(!conn(rk).length) noexit++;
   for(const c of conn(rk)){ if(!R[c]) dangling++; else if(!conn(c).includes(rk)) asym++; }}
  const st=[keys[0]],seen=new Set(st);
  while(st.length){const r=st.pop();for(const c of conn(r))if(R[c]&&!seen.has(c)){seen.add(c);st.push(c);}}
  unreach+=keys.filter(k=>!seen.has(k)).length; }}
console.log('rooms',rooms,'| broken',bad,'| dangling',dangling,'| no-exit',noexit,'| asymmetric',asym,'| unreachable',unreach);
"
```

All six counters must read 0.

### Verified state

- 5 packs, 41 quests, 843 rooms
- **853/853 images load in a real browser** (headless Chrome crawl, 0 failures)
- 0 broken files, 0 dangling connections, 0 dead ends, 0 asymmetric links,
  0 unreachable rooms
- Dark Company: all 145 rooms reachable from Section 1 page 1
- Backup folder still 856 files, no image altered

---

## 8. Source material for future packs

`../HeroQuest/` holds the quest books. Three extraction patterns, all scriptable
with `pdftoppm` / `pdfimages` / ImageMagick (no OCR tool is installed):

| Pattern | Where | How to extract |
|---|---|---|
| **Map embedded as its own image**, notes as selectable text below | `Telegram/HeroQuest/heroquest-revised-edition-quest-books.pdf` (144 pp, 225 map images, 107 NOTES blocks, English) | `pdfimages` pulls the map out standalone — **no cropping at all**. Best target. |
| **Full-page map, alternating with a notes page** | pt-BR books: base (maps on even pages 4–30), Kellar's Keep (odd 7–25), Witch Lord (5–25) | Crop = the whole page; `pdftotext` gives notes already split per `Aventura NN` |
| **Map top half, notes bottom half of one page** | European scans (`...-european.pdf`, `...-europe-com-pisos.pdf`) | One horizontal split at ~55% height; image-only, so notes need OCR or typing |

Fan content also present: `heroquest-chaos-unleashed.pdf`, `heroquest-attack-on-oakdale.pdf`,
the White Dwarf and Adventures Unlimited quests, the Adventure Design Kit, and the
Dave Morris solo quests (`A Growl of Thunder` ships with full text plus a map).

**The catch:** a quest map shows the whole dungeon at once, which is precisely
what fog of war must not do. Turning one into per-room reveals means masking each
room and writing its connections — the same work Chris Marlow did by hand for the
four original packs, and that §6 did for Dark Company.

---

## 9. Not done yet

- **Wizards of Zargon, The Frozen Horror, Mage of the Mirror** have no room art
  here at all. Source books are in `../HeroQuest/` (see §8), but the per-room
  images have to be produced before anything can be wired.
- **No solo rules engine.** The data model holds image + connections and nothing
  else — no monsters, traps, treasure or wandering-monster logic. Playing the
  official campaigns solo still needs a GM-less ruleset applied by hand. The Dave
  Morris quests in `../HeroQuest/` are the only genuinely solo-designed material.
- **The classic interface keeps its fixed-width 2017 layout**, so a wide room
  scan (long corridors, in several packs) runs past the panel and the page
  scrolls sideways. Pre-existing behaviour of that interface; `modern.html`
  scales each room to fit instead, and the two link to each other from the
  header.
