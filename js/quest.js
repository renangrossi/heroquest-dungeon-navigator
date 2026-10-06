// HeroQuest - Digital Dungeon Navigator - quest data
// Paths regenerated from disk; all names lower-case-hyphen.
// Connections repaired: bare-number typos fixed, graph made bidirectional.
// Dark Company is one continuous dungeon: room keys are s<section>p<page>,
// and 16 doorways link the 13 sections. Its quest folder is empty because
// each room file carries its own section folder.
// Structure: pack -> quests -> rooms {file, connections, rotation}

var questList = {
  "Original": {
    "name": "Original",
    "folder": "main-quest",
    "quests": {
      "q1": {
        "name": "The Rescue of Sir Ragnar",
        "folder": "01-rescue-of-sir-ragnar",
        "rooms": {
          "r1": {
            "file": "ragnar-01.jpg",
            "connections": "r6",
            "rotation": "rotate90"
          },
          "r2": {
            "file": "ragnar-02.jpg",
            "connections": "r9,r12",
            "rotation": "rotate90"
          },
          "r3": {
            "file": "ragnar-03.jpg",
            "connections": "r5",
            "rotation": "rotate90"
          },
          "r4": {
            "file": "ragnar-04.jpg",
            "connections": "r8,r11,r13",
            "rotation": "rotate90"
          },
          "r5": {
            "file": "ragnar-05.jpg",
            "connections": "r3,r6",
            "rotation": "rotate90"
          },
          "r6": {
            "file": "ragnar-06.jpg",
            "connections": "r1,r5,r9,r14",
            "rotation": "rotate90"
          },
          "r7": {
            "file": "ragnar-07.jpg",
            "connections": "r12,r15",
            "rotation": "rotate90"
          },
          "r8": {
            "file": "ragnar-08.jpg",
            "connections": "r4",
            "rotation": "rotate90"
          },
          "r9": {
            "file": "ragnar-09.jpg",
            "connections": "r2,r6",
            "rotation": "rotate90"
          },
          "r10": {
            "file": "ragnar-10.jpg",
            "connections": "r13,r14",
            "rotation": "rotate90"
          },
          "r11": {
            "file": "ragnar-11.jpg",
            "connections": "r4,r14",
            "rotation": "rotate90"
          },
          "r12": {
            "file": "ragnar-12.jpg",
            "connections": "r2,r7",
            "rotation": "rotate90"
          },
          "r13": {
            "file": "ragnar-13.jpg",
            "connections": "r4,r10",
            "rotation": "rotate90"
          },
          "r14": {
            "file": "ragnar-14.jpg",
            "connections": "r6,r10,r11",
            "rotation": "rotate90"
          },
          "r15": {
            "file": "ragnar-15.jpg",
            "connections": "r7",
            "rotation": "rotate90"
          }
        }
      },
      "q2": {
        "name": "Lair of the Orc Warlord",
        "folder": "02-orc-warlord",
        "rooms": {
          "r1": {
            "file": "warlord-01.jpg",
            "connections": "r7",
            "rotation": "rotate90"
          },
          "r2": {
            "file": "warlord-02.jpg",
            "connections": "r5,r9,r12",
            "rotation": "rotate90"
          },
          "r3": {
            "file": "warlord-03.jpg",
            "connections": "r8",
            "rotation": "rotate90"
          },
          "r4": {
            "file": "warlord-04.jpg",
            "connections": "r10,r11",
            "rotation": "rotate90"
          },
          "r5": {
            "file": "warlord-05.jpg",
            "connections": "r2",
            "rotation": "rotate90"
          },
          "r6": {
            "file": "warlord-06.jpg",
            "connections": "r11",
            "rotation": "rotate90"
          },
          "r7": {
            "file": "warlord-07.jpg",
            "connections": "r1,r9",
            "rotation": "rotate90"
          },
          "r8": {
            "file": "warlord-08.jpg",
            "connections": "r3,r10",
            "rotation": "rotate90"
          },
          "r9": {
            "file": "warlord-09.jpg",
            "connections": "r2,r7",
            "rotation": "rotate90"
          },
          "r10": {
            "file": "warlord-10.jpg",
            "connections": "r4,r8",
            "rotation": "rotate90"
          },
          "r11": {
            "file": "warlord-11.jpg",
            "connections": "r4,r6,r12",
            "rotation": "rotate90"
          },
          "r12": {
            "file": "warlord-12.jpg",
            "connections": "r2,r11",
            "rotation": "rotate90"
          }
        }
      },
      "q3": {
        "name": "The Gold of Prince Magnus",
        "folder": "03-prince-magnus-gold",
        "rooms": {
          "r1": {
            "file": "magnus-01.jpg",
            "connections": "r4",
            "rotation": "rotate90"
          },
          "r2": {
            "file": "magnus-02.jpg",
            "connections": "r13,r14,r15",
            "rotation": "rotate90"
          },
          "r3": {
            "file": "magnus-03.jpg",
            "connections": "r9,r12",
            "rotation": "rotate90"
          },
          "r4": {
            "file": "magnus-04.jpg",
            "connections": "r1,r7",
            "rotation": "rotate90"
          },
          "r5": {
            "file": "magnus-05.jpg",
            "connections": "r10,r15",
            "rotation": "rotate90"
          },
          "r6": {
            "file": "magnus-06.jpg",
            "connections": "r15",
            "rotation": "rotate90"
          },
          "r7": {
            "file": "magnus-07.jpg",
            "connections": "r4,r10",
            "rotation": "rotate90"
          },
          "r8": {
            "file": "magnus-08.jpg",
            "connections": "r12",
            "rotation": "rotate90"
          },
          "r9": {
            "file": "magnus-09.jpg",
            "connections": "r3,r11",
            "rotation": "rotate90"
          },
          "r10": {
            "file": "magnus-10.jpg",
            "connections": "r5,r7",
            "rotation": "rotate90"
          },
          "r11": {
            "file": "magnus-11.jpg",
            "connections": "r9,r13,r14",
            "rotation": "rotate90"
          },
          "r12": {
            "file": "magnus-12.jpg",
            "connections": "r3,r8",
            "rotation": "rotate90"
          },
          "r13": {
            "file": "magnus-13.jpg",
            "connections": "r2,r11",
            "rotation": "rotate90"
          },
          "r14": {
            "file": "magnus-14.jpg",
            "connections": "r2,r11",
            "rotation": "rotate90"
          },
          "r15": {
            "file": "magnus-15.jpg",
            "connections": "r2,r5,r6",
            "rotation": "rotate90"
          }
        }
      },
      "q4": {
        "name": "Melar's Maze",
        "folder": "04-melars-maze",
        "rooms": {
          "r1": {
            "file": "maze-01.jpg",
            "connections": "r5",
            "rotation": "rotate90"
          },
          "r2": {
            "file": "maze-02.jpg",
            "connections": "r11",
            "rotation": "rotate90"
          },
          "r3": {
            "file": "maze-03.jpg",
            "connections": "r5,r12",
            "rotation": "rotate90"
          },
          "r4": {
            "file": "maze-04.jpg",
            "connections": "r13,r15",
            "rotation": "rotate90"
          },
          "r5": {
            "file": "maze-05.jpg",
            "connections": "r1,r3,r8,r9",
            "rotation": "rotate90"
          },
          "r6": {
            "file": "maze-06.jpg",
            "connections": "r9",
            "rotation": "rotate90"
          },
          "r7": {
            "file": "maze-07.jpg",
            "connections": "r12",
            "rotation": "rotate90"
          },
          "r8": {
            "file": "maze-08.jpg",
            "connections": "r5,r12",
            "rotation": "rotate90"
          },
          "r9": {
            "file": "maze-09.jpg",
            "connections": "r5,r6,r14",
            "rotation": "rotate90"
          },
          "r11": {
            "file": "maze-11.jpg",
            "connections": "r2,r15,r16",
            "rotation": "rotate90"
          },
          "r12": {
            "file": "maze-12.jpg",
            "connections": "r3,r7,r8,r15",
            "rotation": "rotate90"
          },
          "r13": {
            "file": "maze-13.jpg",
            "connections": "r4",
            "rotation": "rotate90"
          },
          "r14": {
            "file": "maze-14.jpg",
            "connections": "r9,r16,r17",
            "rotation": "rotate90"
          },
          "r15": {
            "file": "maze-15.jpg",
            "connections": "r4,r11,r12,r17",
            "rotation": "rotate90"
          },
          "r16": {
            "file": "maze-16.jpg",
            "connections": "r11,r14",
            "rotation": "rotate90"
          },
          "r17": {
            "file": "maze-17.jpg",
            "connections": "r14,r15",
            "rotation": "rotate90"
          }
        }
      },
      "q5": {
        "name": "Legacy of the Orc Warlord",
        "folder": "05-warlord-legacy",
        "rooms": {
          "r1": {
            "file": "legacy-01.jpg",
            "connections": "r4,r5",
            "rotation": "rotate90"
          },
          "r2": {
            "file": "legacy-02.jpg",
            "connections": "r12",
            "rotation": "rotate90"
          },
          "r3": {
            "file": "legacy-03.jpg",
            "connections": "r5,r9",
            "rotation": "rotate90"
          },
          "r4": {
            "file": "legacy-04.jpg",
            "connections": "r1,r7,r11,r13",
            "rotation": "rotate90"
          },
          "r5": {
            "file": "legacy-05.jpg",
            "connections": "r1,r3,r12",
            "rotation": "rotate90"
          },
          "r6": {
            "file": "legacy-06.jpg",
            "connections": "r9",
            "rotation": "rotate90"
          },
          "r7": {
            "file": "legacy-07.jpg",
            "connections": "r4,r9,r12",
            "rotation": "rotate90"
          },
          "r8": {
            "file": "legacy-08.jpg",
            "connections": "r10,r12",
            "rotation": "rotate90"
          },
          "r9": {
            "file": "legacy-09.jpg",
            "connections": "r3,r6,r7",
            "rotation": "rotate90"
          },
          "r10": {
            "file": "legacy-10.jpg",
            "connections": "r8,r12",
            "rotation": "rotate90"
          },
          "r11": {
            "file": "legacy-11.jpg",
            "connections": "r4",
            "rotation": "rotate90"
          },
          "r12": {
            "file": "legacy-12.jpg",
            "connections": "r2,r5,r7,r8,r10",
            "rotation": "rotate90"
          },
          "r13": {
            "file": "legacy-13.jpg",
            "connections": "r4",
            "rotation": "rotate90"
          }
        }
      },
      "q6": {
        "name": "The Stone Hunter",
        "folder": "06-stone-hunter",
        "rooms": {
          "r1": {
            "file": "stone-hunter-01.jpg",
            "connections": "r9",
            "rotation": "rotate90"
          },
          "r2": {
            "file": "stone-hunter-02.jpg",
            "connections": "r13,r15",
            "rotation": "rotate90"
          },
          "r3": {
            "file": "stone-hunter-03.jpg",
            "connections": "r12",
            "rotation": "rotate90"
          },
          "r4": {
            "file": "stone-hunter-04.jpg",
            "connections": "r10",
            "rotation": "rotate90"
          },
          "r5": {
            "file": "stone-hunter-05.jpg",
            "connections": "r8,r9,r16",
            "rotation": "rotate90"
          },
          "r6": {
            "file": "stone-hunter-06.jpg",
            "connections": "r15",
            "rotation": "rotate90"
          },
          "r7": {
            "file": "stone-hunter-07.jpg",
            "connections": "r12,r14",
            "rotation": "rotate90"
          },
          "r8": {
            "file": "stone-hunter-08.jpg",
            "connections": "r5,r11",
            "rotation": "rotate90"
          },
          "r9": {
            "file": "stone-hunter-09.jpg",
            "connections": "r1,r5",
            "rotation": "rotate90"
          },
          "r10": {
            "file": "stone-hunter-10.jpg",
            "connections": "r4,r15",
            "rotation": "rotate90"
          },
          "r11": {
            "file": "stone-hunter-11.jpg",
            "connections": "r8,r13",
            "rotation": "rotate90"
          },
          "r12": {
            "file": "stone-hunter-12.jpg",
            "connections": "r3,r7",
            "rotation": "rotate90"
          },
          "r13": {
            "file": "stone-hunter-13.jpg",
            "connections": "r2,r11",
            "rotation": "rotate90"
          },
          "r14": {
            "file": "stone-hunter-14.jpg",
            "connections": "r7,r16",
            "rotation": "rotate90"
          },
          "r15": {
            "file": "stone-hunter-15.jpg",
            "connections": "r2,r6,r10",
            "rotation": "rotate90"
          },
          "r16": {
            "file": "stone-hunter-16.jpg",
            "connections": "r5,r14",
            "rotation": "rotate90"
          }
        }
      },
      "q7": {
        "name": "The Fire Mage",
        "folder": "07-fire-mage",
        "rooms": {
          "r1": {
            "file": "fire-mage-01.jpg",
            "connections": "r4",
            "rotation": "rotate90"
          },
          "r2": {
            "file": "fire-mage-02.jpg",
            "connections": "r11,r12",
            "rotation": "rotate90"
          },
          "r3": {
            "file": "fire-mage-03.jpg",
            "connections": "r7,r13,r17",
            "rotation": "rotate90"
          },
          "r4": {
            "file": "fire-mage-04.jpg",
            "connections": "r1,r7",
            "rotation": "rotate90"
          },
          "r5": {
            "file": "fire-mage-05.jpg",
            "connections": "r11",
            "rotation": "rotate90"
          },
          "r6": {
            "file": "fire-mage-06.jpg",
            "connections": "r13",
            "rotation": "rotate90"
          },
          "r7": {
            "file": "fire-mage-07.jpg",
            "connections": "r3,r4",
            "rotation": "rotate90"
          },
          "r8": {
            "file": "fire-mage-08.jpg",
            "connections": "r10,r11,r12,r14",
            "rotation": "rotate90"
          },
          "r9": {
            "file": "fire-mage-09.jpg",
            "connections": "r13,r15",
            "rotation": "rotate90"
          },
          "r10": {
            "file": "fire-mage-10.jpg",
            "connections": "r8",
            "rotation": "rotate90"
          },
          "r11": {
            "file": "fire-mage-11.jpg",
            "connections": "r2,r5,r8,r16",
            "rotation": "rotate90"
          },
          "r12": {
            "file": "fire-mage-12.jpg",
            "connections": "r2,r8",
            "rotation": "rotate90"
          },
          "r13": {
            "file": "fire-mage-13.jpg",
            "connections": "r3,r6,r9",
            "rotation": "rotate90"
          },
          "r14": {
            "file": "fire-mage-14.jpg",
            "connections": "r8",
            "rotation": "rotate90"
          },
          "r15": {
            "file": "fire-mage-15.jpg",
            "connections": "r9,r17",
            "rotation": "rotate90"
          },
          "r16": {
            "file": "fire-mage-16.jpg",
            "connections": "r11,r17",
            "rotation": "rotate90"
          },
          "r17": {
            "file": "fire-mage-17.jpg",
            "connections": "r3,r15,r16",
            "rotation": "rotate90"
          }
        }
      },
      "q8": {
        "name": "Race Against Time",
        "folder": "08-race-against-time",
        "rooms": {
          "r1": {
            "file": "race-01.jpg",
            "connections": "r4,r6,r7,r10",
            "rotation": "rotate90"
          },
          "r2": {
            "file": "race-02.jpg",
            "connections": "r9,r13",
            "rotation": "rotate90"
          },
          "r3": {
            "file": "race-03.jpg",
            "connections": "r8",
            "rotation": "rotate90"
          },
          "r4": {
            "file": "race-04.jpg",
            "connections": "r1",
            "rotation": "rotate90"
          },
          "r5": {
            "file": "race-05.jpg",
            "connections": "r6,r12",
            "rotation": "rotate90"
          },
          "r6": {
            "file": "race-06.jpg",
            "connections": "r1,r5,r11",
            "rotation": "rotate90"
          },
          "r7": {
            "file": "race-07.jpg",
            "connections": "r1",
            "rotation": "rotate90"
          },
          "r8": {
            "file": "race-08.jpg",
            "connections": "r3,r11,r14",
            "rotation": "rotate90"
          },
          "r9": {
            "file": "race-09.jpg",
            "connections": "r2,r12",
            "rotation": "rotate90"
          },
          "r10": {
            "file": "race-10.jpg",
            "connections": "r1",
            "rotation": "rotate90"
          },
          "r11": {
            "file": "race-11.jpg",
            "connections": "r6,r8,r14",
            "rotation": "rotate90"
          },
          "r12": {
            "file": "race-12.jpg",
            "connections": "r5,r9",
            "rotation": "rotate90"
          },
          "r13": {
            "file": "race-13.jpg",
            "connections": "r2",
            "rotation": "rotate90"
          },
          "r14": {
            "file": "race-14.jpg",
            "connections": "r8,r11",
            "rotation": "rotate90"
          }
        }
      },
      "q9": {
        "name": "Castle of Mystery",
        "folder": "09-castle-of-mystery",
        "rooms": {
          "r2": {
            "file": "castle-of-mystery-02.jpg",
            "connections": "r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13",
            "rotation": "rotate90"
          },
          "r3": {
            "file": "castle-of-mystery-03.jpg",
            "connections": "r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13",
            "rotation": "rotate90"
          },
          "r4": {
            "file": "castle-of-mystery-04.jpg",
            "connections": "r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13",
            "rotation": "rotate90"
          },
          "r5": {
            "file": "castle-of-mystery-05.jpg",
            "connections": "r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13",
            "rotation": "rotate90"
          },
          "r6": {
            "file": "castle-of-mystery-06.jpg",
            "connections": "r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13",
            "rotation": "rotate90"
          },
          "r7": {
            "file": "castle-of-mystery-07.jpg",
            "connections": "r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13",
            "rotation": "rotate90"
          },
          "r8": {
            "file": "castle-of-mystery-08.jpg",
            "connections": "r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13",
            "rotation": "rotate90"
          },
          "r9": {
            "file": "castle-of-mystery-09.jpg",
            "connections": "r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13",
            "rotation": "rotate90"
          },
          "r10": {
            "file": "castle-of-mystery-10.jpg",
            "connections": "r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13",
            "rotation": "rotate90"
          },
          "r11": {
            "file": "castle-of-mystery-11.jpg",
            "connections": "r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13",
            "rotation": "rotate90"
          },
          "r12": {
            "file": "castle-of-mystery-12.jpg",
            "connections": "r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13",
            "rotation": "rotate90"
          },
          "r13": {
            "file": "castle-of-mystery-13.jpg",
            "connections": "r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12",
            "rotation": "rotate90"
          }
        }
      },
      "q10": {
        "name": "Bastion of Chaos",
        "folder": "10-chaos-bastion",
        "rooms": {
          "r1": {
            "file": "bastion-01.jpg",
            "connections": "r12",
            "rotation": "rotate90"
          },
          "r2": {
            "file": "bastion-02.jpg",
            "connections": "r7,r10,r16",
            "rotation": "rotate90"
          },
          "r3": {
            "file": "bastion-03.jpg",
            "connections": "r5,r20",
            "rotation": "rotate90"
          },
          "r4": {
            "file": "bastion-04.jpg",
            "connections": "r9,r11,r14,r18,r20",
            "rotation": "rotate90"
          },
          "r5": {
            "file": "bastion-05.jpg",
            "connections": "r3,r15",
            "rotation": "rotate90"
          },
          "r6": {
            "file": "bastion-06.jpg",
            "connections": "r7,r19",
            "rotation": "rotate90"
          },
          "r7": {
            "file": "bastion-07.jpg",
            "connections": "r2,r6,r10",
            "rotation": "rotate90"
          },
          "r8": {
            "file": "bastion-08.jpg",
            "connections": "r14",
            "rotation": "rotate90"
          },
          "r9": {
            "file": "bastion-09.jpg",
            "connections": "r4,r12",
            "rotation": "rotate90"
          },
          "r10": {
            "file": "bastion-10.jpg",
            "connections": "r2,r7,r14",
            "rotation": "rotate90"
          },
          "r11": {
            "file": "bastion-11.jpg",
            "connections": "r4,r14",
            "rotation": "rotate90"
          },
          "r12": {
            "file": "bastion-12.jpg",
            "connections": "r1,r9,r17",
            "rotation": "rotate90"
          },
          "r13": {
            "file": "bastion-13.jpg",
            "connections": "r19",
            "rotation": "rotate90"
          },
          "r14": {
            "file": "bastion-14.jpg",
            "connections": "r4,r8,r10,r11",
            "rotation": "rotate90"
          },
          "r15": {
            "file": "bastion-15.jpg",
            "connections": "r5,r16",
            "rotation": "rotate90"
          },
          "r16": {
            "file": "bastion-16.jpg",
            "connections": "r2,r15",
            "rotation": "rotate90"
          },
          "r17": {
            "file": "bastion-17.jpg",
            "connections": "r12",
            "rotation": "rotate90"
          },
          "r18": {
            "file": "bastion-18.jpg",
            "connections": "r4",
            "rotation": "rotate90"
          },
          "r19": {
            "file": "bastion-19.jpg",
            "connections": "r6,r13",
            "rotation": "rotate90"
          },
          "r20": {
            "file": "bastion-20.jpg",
            "connections": "r3,r4",
            "rotation": "rotate90"
          }
        }
      },
      "q11": {
        "name": "Barak Tor - Barrow of the Witch Lord",
        "folder": "11-barak-tor",
        "rooms": {
          "r1": {
            "file": "barak-tor-01.jpg",
            "connections": "r5,r9",
            "rotation": "rotate90"
          },
          "r2": {
            "file": "barak-tor-02.jpg",
            "connections": "r11,r12,r15",
            "rotation": "rotate90"
          },
          "r3": {
            "file": "barak-tor-03.jpg",
            "connections": "r18",
            "rotation": "rotate90"
          },
          "r4": {
            "file": "barak-tor-04.jpg",
            "connections": "r7,r12,r17",
            "rotation": "rotate90"
          },
          "r5": {
            "file": "barak-tor-05.jpg",
            "connections": "r1,r18",
            "rotation": "rotate90"
          },
          "r6": {
            "file": "barak-tor-06.jpg",
            "connections": "r11,r16",
            "rotation": "rotate90"
          },
          "r7": {
            "file": "barak-tor-07.jpg",
            "connections": "r4",
            "rotation": "rotate90"
          },
          "r8": {
            "file": "barak-tor-08.jpg",
            "connections": "r19",
            "rotation": "rotate90"
          },
          "r9": {
            "file": "barak-tor-09.jpg",
            "connections": "r1,r16,r17",
            "rotation": "rotate90"
          },
          "r10": {
            "file": "barak-tor-10.jpg",
            "connections": "r14,r15,r19",
            "rotation": "rotate90"
          },
          "r11": {
            "file": "barak-tor-11.jpg",
            "connections": "r2,r6",
            "rotation": "rotate90"
          },
          "r12": {
            "file": "barak-tor-12.jpg",
            "connections": "r2,r4",
            "rotation": "rotate90"
          },
          "r13": {
            "file": "barak-tor-13.jpg",
            "connections": "r19",
            "rotation": "rotate90"
          },
          "r14": {
            "file": "barak-tor-14.jpg",
            "connections": "r10,r18",
            "rotation": "rotate90"
          },
          "r15": {
            "file": "barak-tor-15.jpg",
            "connections": "r2,r10",
            "rotation": "rotate90"
          },
          "r16": {
            "file": "barak-tor-16.jpg",
            "connections": "r6,r9",
            "rotation": "rotate90"
          },
          "r17": {
            "file": "barak-tor-17.jpg",
            "connections": "r4,r9",
            "rotation": "rotate90"
          },
          "r18": {
            "file": "barak-tor-18.jpg",
            "connections": "r3,r5,r14",
            "rotation": "rotate90"
          },
          "r19": {
            "file": "barak-tor-19.jpg",
            "connections": "r8,r10,r13",
            "rotation": "rotate90"
          }
        }
      },
      "q12": {
        "name": "Quest for the Spirit Blade",
        "folder": "12-spirit-blade",
        "rooms": {
          "r1": {
            "file": "spirit-blade-01.jpg",
            "connections": "r8,r13",
            "rotation": "rotate90"
          },
          "r2": {
            "file": "spirit-blade-02.jpg",
            "connections": "r10",
            "rotation": "rotate90"
          },
          "r3": {
            "file": "spirit-blade-03.jpg",
            "connections": "r9",
            "rotation": "rotate90"
          },
          "r4": {
            "file": "spirit-blade-04.jpg",
            "connections": "r6",
            "rotation": "rotate90"
          },
          "r5": {
            "file": "spirit-blade-05.jpg",
            "connections": "r11",
            "rotation": "rotate90"
          },
          "r6": {
            "file": "spirit-blade-06.jpg",
            "connections": "r4,r9,r10",
            "rotation": "rotate90"
          },
          "r7": {
            "file": "spirit-blade-07.jpg",
            "connections": "r13",
            "rotation": "rotate90"
          },
          "r8": {
            "file": "spirit-blade-08.jpg",
            "connections": "r1,r13,r14",
            "rotation": "rotate90"
          },
          "r9": {
            "file": "spirit-blade-09.jpg",
            "connections": "r3,r6,r11",
            "rotation": "rotate90"
          },
          "r10": {
            "file": "spirit-blade-10.jpg",
            "connections": "r2,r6,r12,r13",
            "rotation": "rotate90"
          },
          "r11": {
            "file": "spirit-blade-11.jpg",
            "connections": "r5,r9",
            "rotation": "rotate90"
          },
          "r12": {
            "file": "spirit-blade-12.jpg",
            "connections": "r10",
            "rotation": "rotate90"
          },
          "r13": {
            "file": "spirit-blade-13.jpg",
            "connections": "r1,r7,r8,r10",
            "rotation": "rotate90"
          },
          "r14": {
            "file": "spirit-blade-14.jpg",
            "connections": "r8",
            "rotation": "rotate90"
          }
        }
      },
      "q13": {
        "name": "Return to Barak Tor",
        "folder": "13-return-to-barak-tor",
        "rooms": {
          "r1": {
            "file": "return-01.jpg",
            "connections": "r4",
            "rotation": "rotate90"
          },
          "r2": {
            "file": "return-02.jpg",
            "connections": "r6,r9",
            "rotation": "rotate90"
          },
          "r3": {
            "file": "return-03.jpg",
            "connections": "r10,r15",
            "rotation": "rotate90"
          },
          "r4": {
            "file": "return-04.jpg",
            "connections": "r1,r9,r12",
            "rotation": "rotate90"
          },
          "r5": {
            "file": "return-05.jpg",
            "connections": "r13,r14",
            "rotation": "rotate90"
          },
          "r6": {
            "file": "return-06.jpg",
            "connections": "r2,r10",
            "rotation": "rotate90"
          },
          "r7": {
            "file": "return-07.jpg",
            "connections": "r9,r16",
            "rotation": "rotate90"
          },
          "r8": {
            "file": "return-08.jpg",
            "connections": "r11,r16",
            "rotation": "rotate90"
          },
          "r9": {
            "file": "return-09.jpg",
            "connections": "r2,r4,r7,r13",
            "rotation": "rotate90"
          },
          "r10": {
            "file": "return-10.jpg",
            "connections": "r3,r6,r16",
            "rotation": "rotate90"
          },
          "r11": {
            "file": "return-11.jpg",
            "connections": "r8,r16",
            "rotation": "rotate90"
          },
          "r12": {
            "file": "return-12.jpg",
            "connections": "r4,r15",
            "rotation": "rotate90"
          },
          "r13": {
            "file": "return-13.jpg",
            "connections": "r5,r9",
            "rotation": "rotate90"
          },
          "r14": {
            "file": "return-14.jpg",
            "connections": "r5",
            "rotation": "rotate90"
          },
          "r15": {
            "file": "return-15.jpg",
            "connections": "r3,r12",
            "rotation": "rotate90"
          },
          "r16": {
            "file": "return-16.jpg",
            "connections": "r7,r8,r10,r11",
            "rotation": "rotate90"
          }
        }
      }
    },
    "help": {
      "h1": {
        "name": "Co-Op Game Guide",
        "file": "coop-game-guide.png",
        "rotation": ""
      }
    }
  },
  "Return of the Witch Lord": {
    "name": "Return of the Witch Lord",
    "folder": "return-of-the-witch-lord",
    "quests": {
      "q1": {
        "name": "The Gate of Doom",
        "folder": "01-gate-of-doom",
        "rooms": {
          "r1": {
            "file": "gate-of-doom-01.jpg",
            "connections": "r12,r15",
            "rotation": ""
          },
          "r2": {
            "file": "gate-of-doom-02.jpg",
            "connections": "r10,r11",
            "rotation": ""
          },
          "r3": {
            "file": "gate-of-doom-03.jpg",
            "connections": "r15",
            "rotation": ""
          },
          "r4": {
            "file": "gate-of-doom-04.jpg",
            "connections": "r10,r11,r17",
            "rotation": ""
          },
          "r5": {
            "file": "gate-of-doom-05.jpg",
            "connections": "r11,r12",
            "rotation": ""
          },
          "r6": {
            "file": "gate-of-doom-06.jpg",
            "connections": "r8,r18",
            "rotation": ""
          },
          "r7": {
            "file": "gate-of-doom-07.jpg",
            "connections": "r10,r13",
            "rotation": ""
          },
          "r8": {
            "file": "gate-of-doom-08.jpg",
            "connections": "r6,r11,r16",
            "rotation": ""
          },
          "r9": {
            "file": "gate-of-doom-09.jpg",
            "connections": "r11",
            "rotation": ""
          },
          "r10": {
            "file": "gate-of-doom-10.jpg",
            "connections": "r2,r4,r7,r17",
            "rotation": ""
          },
          "r11": {
            "file": "gate-of-doom-11.jpg",
            "connections": "r2,r4,r5,r8,r9,r14,r17",
            "rotation": ""
          },
          "r12": {
            "file": "gate-of-doom-12.jpg",
            "connections": "r1,r5,r15",
            "rotation": ""
          },
          "r13": {
            "file": "gate-of-doom-13.jpg",
            "connections": "r7",
            "rotation": ""
          },
          "r14": {
            "file": "gate-of-doom-14.jpg",
            "connections": "r11",
            "rotation": ""
          },
          "r15": {
            "file": "gate-of-doom-15.jpg",
            "connections": "r1,r3,r12",
            "rotation": ""
          },
          "r16": {
            "file": "gate-of-doom-16.jpg",
            "connections": "r8",
            "rotation": ""
          },
          "r17": {
            "file": "gate-of-doom-17.jpg",
            "connections": "r4,r10,r11",
            "rotation": ""
          },
          "r18": {
            "file": "gate-of-doom-18.jpg",
            "connections": "r6",
            "rotation": ""
          }
        }
      },
      "q2": {
        "name": "The Cold Halls",
        "folder": "02-the-cold-halls",
        "rooms": {
          "r1": {
            "file": "cold-halls-01.jpg",
            "connections": "r5",
            "rotation": ""
          },
          "r2": {
            "file": "cold-halls-02.jpg",
            "connections": "r5,r9",
            "rotation": ""
          },
          "r3": {
            "file": "cold-halls-03.jpg",
            "connections": "r5,r8",
            "rotation": ""
          },
          "r4": {
            "file": "cold-halls-04.jpg",
            "connections": "r5,r13,r15",
            "rotation": ""
          },
          "r5": {
            "file": "cold-halls-05.jpg",
            "connections": "r1,r2,r3,r4",
            "rotation": ""
          },
          "r6": {
            "file": "cold-halls-06.jpg",
            "connections": "r7,r14",
            "rotation": ""
          },
          "r7": {
            "file": "cold-halls-07.jpg",
            "connections": "r6,r14",
            "rotation": ""
          },
          "r8": {
            "file": "cold-halls-08.jpg",
            "connections": "r3,r10",
            "rotation": ""
          },
          "r9": {
            "file": "cold-halls-09.jpg",
            "connections": "r2,r11",
            "rotation": ""
          },
          "r10": {
            "file": "cold-halls-10.jpg",
            "connections": "r8,r12,r14",
            "rotation": ""
          },
          "r11": {
            "file": "cold-halls-11.jpg",
            "connections": "r9",
            "rotation": ""
          },
          "r12": {
            "file": "cold-halls-12.jpg",
            "connections": "r10",
            "rotation": ""
          },
          "r13": {
            "file": "cold-halls-13.jpg",
            "connections": "r4,r15",
            "rotation": ""
          },
          "r14": {
            "file": "cold-halls-14.jpg",
            "connections": "r6,r7,r10",
            "rotation": ""
          },
          "r15": {
            "file": "cold-halls-15.jpg",
            "connections": "r4,r13",
            "rotation": ""
          }
        }
      },
      "q3": {
        "name": "The Silent Passages",
        "folder": "03-the-silent-passages",
        "rooms": {
          "r1": {
            "file": "silent-passages-01.jpg",
            "connections": "r6,r15",
            "rotation": ""
          },
          "r2": {
            "file": "silent-passages-02.jpg",
            "connections": "r15",
            "rotation": ""
          },
          "r3": {
            "file": "silent-passages-03.jpg",
            "connections": "r11",
            "rotation": ""
          },
          "r4": {
            "file": "silent-passages-04.jpg",
            "connections": "r7,r17",
            "rotation": ""
          },
          "r5": {
            "file": "silent-passages-05.jpg",
            "connections": "r16,r18",
            "rotation": ""
          },
          "r6": {
            "file": "silent-passages-06.jpg",
            "connections": "r1,r8",
            "rotation": ""
          },
          "r7": {
            "file": "silent-passages-07.jpg",
            "connections": "r4,r10",
            "rotation": ""
          },
          "r8": {
            "file": "silent-passages-08.jpg",
            "connections": "r6,r13",
            "rotation": ""
          },
          "r9": {
            "file": "silent-passages-09.jpg",
            "connections": "r11",
            "rotation": ""
          },
          "r10": {
            "file": "silent-passages-10.jpg",
            "connections": "r7,r12",
            "rotation": ""
          },
          "r11": {
            "file": "silent-passages-11.jpg",
            "connections": "r3,r9,r17",
            "rotation": ""
          },
          "r12": {
            "file": "silent-passages-12.jpg",
            "connections": "r10,r14,r16",
            "rotation": ""
          },
          "r13": {
            "file": "silent-passages-13.jpg",
            "connections": "r8,r15",
            "rotation": ""
          },
          "r14": {
            "file": "silent-passages-14.jpg",
            "connections": "r12,r16",
            "rotation": ""
          },
          "r15": {
            "file": "silent-passages-15.jpg",
            "connections": "r1,r2,r13,r17",
            "rotation": ""
          },
          "r16": {
            "file": "silent-passages-16.jpg",
            "connections": "r5,r12,r14,r18",
            "rotation": ""
          },
          "r17": {
            "file": "silent-passages-17.jpg",
            "connections": "r4,r11,r15",
            "rotation": ""
          },
          "r18": {
            "file": "silent-passages-18.jpg",
            "connections": "r5,r16",
            "rotation": ""
          }
        }
      },
      "q4": {
        "name": "Halls of Vision",
        "folder": "04-halls-of-vision",
        "rooms": {
          "r1": {
            "file": "halls-of-vision-01.jpg",
            "connections": "r12",
            "rotation": ""
          },
          "r2": {
            "file": "halls-of-vision-02.jpg",
            "connections": "r6,r9,r10,r15",
            "rotation": ""
          },
          "r3": {
            "file": "halls-of-vision-03.jpg",
            "connections": "r10",
            "rotation": ""
          },
          "r4": {
            "file": "halls-of-vision-04.jpg",
            "connections": "r7,r14",
            "rotation": ""
          },
          "r5": {
            "file": "halls-of-vision-05.jpg",
            "connections": "r11,r13,r16,r17,r18",
            "rotation": ""
          },
          "r6": {
            "file": "halls-of-vision-06.jpg",
            "connections": "r2,r13,r15",
            "rotation": ""
          },
          "r7": {
            "file": "halls-of-vision-07.jpg",
            "connections": "r4",
            "rotation": ""
          },
          "r8": {
            "file": "halls-of-vision-08.jpg",
            "connections": "r11",
            "rotation": ""
          },
          "r9": {
            "file": "halls-of-vision-09.jpg",
            "connections": "r2,r12,r15",
            "rotation": ""
          },
          "r10": {
            "file": "halls-of-vision-10.jpg",
            "connections": "r2,r3,r14",
            "rotation": ""
          },
          "r11": {
            "file": "halls-of-vision-11.jpg",
            "connections": "r5,r8,r17,r18",
            "rotation": ""
          },
          "r12": {
            "file": "halls-of-vision-12.jpg",
            "connections": "r1,r9",
            "rotation": ""
          },
          "r13": {
            "file": "halls-of-vision-13.jpg",
            "connections": "r5,r6,r16",
            "rotation": ""
          },
          "r14": {
            "file": "halls-of-vision-14.jpg",
            "connections": "r4,r10",
            "rotation": ""
          },
          "r15": {
            "file": "halls-of-vision-15.jpg",
            "connections": "r2,r6,r9",
            "rotation": ""
          },
          "r16": {
            "file": "halls-of-vision-16.jpg",
            "connections": "r5,r13",
            "rotation": ""
          },
          "r17": {
            "file": "halls-of-vision-17.jpg",
            "connections": "r5,r11",
            "rotation": ""
          },
          "r18": {
            "file": "halls-of-vision-18.jpg",
            "connections": "r5,r11",
            "rotation": ""
          }
        }
      },
      "q5": {
        "name": "The Gate of Bellthor",
        "folder": "05-gate-of-bellthor",
        "rooms": {
          "r1": {
            "file": "gate-of-belthor-01.jpg",
            "connections": "r5",
            "rotation": ""
          },
          "r2": {
            "file": "gate-of-belthor-02.jpg",
            "connections": "r6,r18",
            "rotation": ""
          },
          "r3": {
            "file": "gate-of-belthor-03.jpg",
            "connections": "r11,r15,r21",
            "rotation": ""
          },
          "r4": {
            "file": "gate-of-belthor-04.jpg",
            "connections": "r10,r14,r20",
            "rotation": ""
          },
          "r5": {
            "file": "gate-of-belthor-05.jpg",
            "connections": "r1,r8",
            "rotation": ""
          },
          "r6": {
            "file": "gate-of-belthor-06.jpg",
            "connections": "r2,r17",
            "rotation": ""
          },
          "r7": {
            "file": "gate-of-belthor-07.jpg",
            "connections": "r13,r16,r18",
            "rotation": ""
          },
          "r8": {
            "file": "gate-of-belthor-08.jpg",
            "connections": "r5,r12",
            "rotation": ""
          },
          "r9": {
            "file": "gate-of-belthor-09.jpg",
            "connections": "r21,r23,r25",
            "rotation": ""
          },
          "r10": {
            "file": "gate-of-belthor-10.jpg",
            "connections": "r4,r14,r19",
            "rotation": ""
          },
          "r11": {
            "file": "gate-of-belthor-11.jpg",
            "connections": "r3",
            "rotation": ""
          },
          "r12": {
            "file": "gate-of-belthor-12.jpg",
            "connections": "r8,r18,r22",
            "rotation": ""
          },
          "r13": {
            "file": "gate-of-belthor-13.jpg",
            "connections": "r7,r16,r24",
            "rotation": ""
          },
          "r14": {
            "file": "gate-of-belthor-14.jpg",
            "connections": "r4,r10",
            "rotation": ""
          },
          "r15": {
            "file": "gate-of-belthor-15.jpg",
            "connections": "r3,r24",
            "rotation": ""
          },
          "r16": {
            "file": "gate-of-belthor-16.jpg",
            "connections": "r7,r13",
            "rotation": ""
          },
          "r17": {
            "file": "gate-of-belthor-17.jpg",
            "connections": "r6,r20",
            "rotation": ""
          },
          "r18": {
            "file": "gate-of-belthor-18.jpg",
            "connections": "r2,r7,r12",
            "rotation": ""
          },
          "r19": {
            "file": "gate-of-belthor-19.jpg",
            "connections": "r10,r23",
            "rotation": ""
          },
          "r20": {
            "file": "gate-of-belthor-20.jpg",
            "connections": "r4,r17",
            "rotation": ""
          },
          "r21": {
            "file": "gate-of-belthor-21.jpg",
            "connections": "r3,r9",
            "rotation": ""
          },
          "r22": {
            "file": "gate-of-belthor-22.jpg",
            "connections": "r12",
            "rotation": ""
          },
          "r23": {
            "file": "gate-of-belthor-23.jpg",
            "connections": "r9,r19",
            "rotation": ""
          },
          "r24": {
            "file": "gate-of-belthor-24.jpg",
            "connections": "r13,r15",
            "rotation": ""
          },
          "r25": {
            "file": "gate-of-belthor-25.jpg",
            "connections": "r9",
            "rotation": ""
          }
        }
      },
      "q6": {
        "name": "Halls of the Dead",
        "folder": "06-halls-of-the-dead",
        "rooms": {
          "r1": {
            "file": "halls-of-the-dead-01.jpg",
            "connections": "r9,r12",
            "rotation": ""
          },
          "r2": {
            "file": "halls-of-the-dead-02.jpg",
            "connections": "r8,r15,r18",
            "rotation": ""
          },
          "r3": {
            "file": "halls-of-the-dead-03.jpg",
            "connections": "r14,r19",
            "rotation": ""
          },
          "r4": {
            "file": "halls-of-the-dead-04.jpg",
            "connections": "r6,r12",
            "rotation": ""
          },
          "r5": {
            "file": "halls-of-the-dead-05.jpg",
            "connections": "r11",
            "rotation": ""
          },
          "r6": {
            "file": "halls-of-the-dead-06.jpg",
            "connections": "r4,r14,r18,r19",
            "rotation": ""
          },
          "r7": {
            "file": "halls-of-the-dead-07.jpg",
            "connections": "r13",
            "rotation": ""
          },
          "r8": {
            "file": "halls-of-the-dead-08.jpg",
            "connections": "r2,r15",
            "rotation": ""
          },
          "r9": {
            "file": "halls-of-the-dead-09.jpg",
            "connections": "r1",
            "rotation": ""
          },
          "r10": {
            "file": "halls-of-the-dead-10.jpg",
            "connections": "r12",
            "rotation": ""
          },
          "r11": {
            "file": "halls-of-the-dead-11.jpg",
            "connections": "r5,r12",
            "rotation": ""
          },
          "r12": {
            "file": "halls-of-the-dead-12.jpg",
            "connections": "r1,r4,r10,r11,r19",
            "rotation": ""
          },
          "r13": {
            "file": "halls-of-the-dead-13.jpg",
            "connections": "r7,r18,r19",
            "rotation": ""
          },
          "r14": {
            "file": "halls-of-the-dead-14.jpg",
            "connections": "r3,r6,r16",
            "rotation": ""
          },
          "r15": {
            "file": "halls-of-the-dead-15.jpg",
            "connections": "r2,r8,r17",
            "rotation": ""
          },
          "r16": {
            "file": "halls-of-the-dead-16.jpg",
            "connections": "r14,r18",
            "rotation": ""
          },
          "r17": {
            "file": "halls-of-the-dead-17.jpg",
            "connections": "r15",
            "rotation": ""
          },
          "r18": {
            "file": "halls-of-the-dead-18.jpg",
            "connections": "r2,r6,r13,r16",
            "rotation": ""
          },
          "r19": {
            "file": "halls-of-the-dead-19.jpg",
            "connections": "r3,r6,r12,r13",
            "rotation": ""
          }
        }
      },
      "q7": {
        "name": "The Forgotten Legion",
        "folder": "07-the-forgotten-legion",
        "rooms": {
          "r1": {
            "file": "forgotten-legion-01.jpg",
            "connections": "r18",
            "rotation": ""
          },
          "r2": {
            "file": "forgotten-legion-02.jpg",
            "connections": "r6,r17",
            "rotation": ""
          },
          "r3": {
            "file": "forgotten-legion-03.jpg",
            "connections": "r6,r7",
            "rotation": ""
          },
          "r4": {
            "file": "forgotten-legion-04.jpg",
            "connections": "r11,r15",
            "rotation": ""
          },
          "r5": {
            "file": "forgotten-legion-05.jpg",
            "connections": "r9,r13",
            "rotation": ""
          },
          "r6": {
            "file": "forgotten-legion-06.jpg",
            "connections": "r2,r3,r9,r10,r16",
            "rotation": ""
          },
          "r7": {
            "file": "forgotten-legion-07.jpg",
            "connections": "r3,r8,r16",
            "rotation": ""
          },
          "r8": {
            "file": "forgotten-legion-08.jpg",
            "connections": "r7,r11,r16",
            "rotation": ""
          },
          "r9": {
            "file": "forgotten-legion-09.jpg",
            "connections": "r5,r6",
            "rotation": ""
          },
          "r10": {
            "file": "forgotten-legion-10.jpg",
            "connections": "r6,r12",
            "rotation": ""
          },
          "r11": {
            "file": "forgotten-legion-11.jpg",
            "connections": "r4,r8",
            "rotation": ""
          },
          "r12": {
            "file": "forgotten-legion-12.jpg",
            "connections": "r10,r14",
            "rotation": ""
          },
          "r13": {
            "file": "forgotten-legion-13.jpg",
            "connections": "r5,r18",
            "rotation": ""
          },
          "r14": {
            "file": "forgotten-legion-14.jpg",
            "connections": "r12,r17",
            "rotation": ""
          },
          "r15": {
            "file": "forgotten-legion-15.jpg",
            "connections": "r4",
            "rotation": ""
          },
          "r16": {
            "file": "forgotten-legion-16.jpg",
            "connections": "r6,r7,r8",
            "rotation": ""
          },
          "r17": {
            "file": "forgotten-legion-17.jpg",
            "connections": "r2,r14",
            "rotation": ""
          },
          "r18": {
            "file": "forgotten-legion-18.jpg",
            "connections": "r1,r13",
            "rotation": ""
          }
        }
      },
      "q8": {
        "name": "The Forbidden City",
        "folder": "08-the-forbidden-city",
        "rooms": {
          "r1": {
            "file": "forbidden-city-01.jpg",
            "connections": "r2",
            "rotation": ""
          },
          "r2": {
            "file": "forbidden-city-02.jpg",
            "connections": "r1,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13",
            "rotation": ""
          },
          "r3": {
            "file": "forbidden-city-03.jpg",
            "connections": "r2,r13",
            "rotation": ""
          },
          "r4": {
            "file": "forbidden-city-04.jpg",
            "connections": "r2",
            "rotation": ""
          },
          "r5": {
            "file": "forbidden-city-05.jpg",
            "connections": "r2",
            "rotation": ""
          },
          "r6": {
            "file": "forbidden-city-06.jpg",
            "connections": "r2",
            "rotation": ""
          },
          "r7": {
            "file": "forbidden-city-07.jpg",
            "connections": "r2",
            "rotation": ""
          },
          "r8": {
            "file": "forbidden-city-08.jpg",
            "connections": "r2",
            "rotation": ""
          },
          "r9": {
            "file": "forbidden-city-09.jpg",
            "connections": "r2",
            "rotation": ""
          },
          "r10": {
            "file": "forbidden-city-10.jpg",
            "connections": "r2",
            "rotation": ""
          },
          "r11": {
            "file": "forbidden-city-11.jpg",
            "connections": "r2",
            "rotation": ""
          },
          "r12": {
            "file": "forbidden-city-12.jpg",
            "connections": "r2",
            "rotation": ""
          },
          "r13": {
            "file": "forbidden-city-13.jpg",
            "connections": "r2,r3",
            "rotation": ""
          }
        }
      },
      "q9": {
        "name": "The Last Gate",
        "folder": "09-the-last-gate",
        "rooms": {
          "r1": {
            "file": "the-last-gate-01.jpg",
            "connections": "r3",
            "rotation": ""
          },
          "r2": {
            "file": "the-last-gate-02.jpg",
            "connections": "r12,r15",
            "rotation": ""
          },
          "r3": {
            "file": "the-last-gate-03.jpg",
            "connections": "r1,r5",
            "rotation": ""
          },
          "r4": {
            "file": "the-last-gate-04.jpg",
            "connections": "r14",
            "rotation": ""
          },
          "r5": {
            "file": "the-last-gate-05.jpg",
            "connections": "r3,r8,r9,r13",
            "rotation": ""
          },
          "r6": {
            "file": "the-last-gate-06.jpg",
            "connections": "r10,r12",
            "rotation": ""
          },
          "r7": {
            "file": "the-last-gate-07.jpg",
            "connections": "r10,r14",
            "rotation": ""
          },
          "r8": {
            "file": "the-last-gate-08.jpg",
            "connections": "r5,r10",
            "rotation": ""
          },
          "r9": {
            "file": "the-last-gate-09.jpg",
            "connections": "r5",
            "rotation": ""
          },
          "r10": {
            "file": "the-last-gate-10.jpg",
            "connections": "r6,r7,r8,r17",
            "rotation": ""
          },
          "r11": {
            "file": "the-last-gate-11.jpg",
            "connections": "r13,r15",
            "rotation": ""
          },
          "r12": {
            "file": "the-last-gate-12.jpg",
            "connections": "r2,r6",
            "rotation": ""
          },
          "r13": {
            "file": "the-last-gate-13.jpg",
            "connections": "r5,r11",
            "rotation": ""
          },
          "r14": {
            "file": "the-last-gate-14.jpg",
            "connections": "r4,r7",
            "rotation": ""
          },
          "r15": {
            "file": "the-last-gate-15.jpg",
            "connections": "r2,r11,r16",
            "rotation": ""
          },
          "r16": {
            "file": "the-last-gate-16.jpg",
            "connections": "r15",
            "rotation": ""
          },
          "r17": {
            "file": "the-last-gate-17.jpg",
            "connections": "r10",
            "rotation": ""
          }
        }
      },
      "q10": {
        "name": "The Court of the Witch Lord",
        "folder": "10-the-court-of-the-witch-lord",
        "rooms": {
          "r1": {
            "file": "court-of-the-witch-lord-01.jpg",
            "connections": "r4,r11",
            "rotation": ""
          },
          "r2": {
            "file": "court-of-the-witch-lord-02.jpg",
            "connections": "r5,r14,r15",
            "rotation": ""
          },
          "r3": {
            "file": "court-of-the-witch-lord-03.jpg",
            "connections": "r7,r9",
            "rotation": ""
          },
          "r4": {
            "file": "court-of-the-witch-lord-04.jpg",
            "connections": "r1,r6,r11,r20",
            "rotation": ""
          },
          "r5": {
            "file": "court-of-the-witch-lord-05.jpg",
            "connections": "r2,r8,r19",
            "rotation": ""
          },
          "r6": {
            "file": "court-of-the-witch-lord-06.jpg",
            "connections": "r4,r8,r9,r20",
            "rotation": ""
          },
          "r7": {
            "file": "court-of-the-witch-lord-07.jpg",
            "connections": "r3,r17",
            "rotation": ""
          },
          "r8": {
            "file": "court-of-the-witch-lord-08.jpg",
            "connections": "r5,r6,r16",
            "rotation": ""
          },
          "r9": {
            "file": "court-of-the-witch-lord-09.jpg",
            "connections": "r3,r6,r11,r20",
            "rotation": ""
          },
          "r10": {
            "file": "court-of-the-witch-lord-10.jpg",
            "connections": "r13,r17",
            "rotation": ""
          },
          "r11": {
            "file": "court-of-the-witch-lord-11.jpg",
            "connections": "r1,r4,r9,r17,r20",
            "rotation": ""
          },
          "r12": {
            "file": "court-of-the-witch-lord-12.jpg",
            "connections": "r15,r17,r18",
            "rotation": ""
          },
          "r13": {
            "file": "court-of-the-witch-lord-13.jpg",
            "connections": "r10",
            "rotation": ""
          },
          "r14": {
            "file": "court-of-the-witch-lord-14.jpg",
            "connections": "r2",
            "rotation": ""
          },
          "r15": {
            "file": "court-of-the-witch-lord-15.jpg",
            "connections": "r2,r12,r17",
            "rotation": ""
          },
          "r16": {
            "file": "court-of-the-witch-lord-16.jpg",
            "connections": "r8,r21",
            "rotation": ""
          },
          "r17": {
            "file": "court-of-the-witch-lord-17.jpg",
            "connections": "r7,r10,r11,r12,r15,r18",
            "rotation": ""
          },
          "r18": {
            "file": "court-of-the-witch-lord-18.jpg",
            "connections": "r12,r17",
            "rotation": ""
          },
          "r19": {
            "file": "court-of-the-witch-lord-19.jpg",
            "connections": "r5",
            "rotation": ""
          },
          "r20": {
            "file": "court-of-the-witch-lord-20.jpg",
            "connections": "r4,r6,r9,r11",
            "rotation": ""
          },
          "r21": {
            "file": "court-of-the-witch-lord-21.jpg",
            "connections": "r16",
            "rotation": ""
          }
        }
      }
    },
    "help": {
      "h1": {
        "name": "Co-Op Game Guide",
        "file": "coop-game-guide.png",
        "rotation": ""
      },
      "h2": {
        "name": "Witch Lord Guide",
        "file": "witch-lord-guide.png",
        "rotation": ""
      }
    }
  },
  "Kellars Keep": {
    "name": "Kellar's Keep",
    "folder": "kellars-keep",
    "quests": {
      "q1": {
        "name": "The Great Gate",
        "folder": "01-the-great-gate",
        "rooms": {
          "r1": {
            "file": "great-gate-01.jpg",
            "connections": "r2",
            "rotation": "rotate90"
          },
          "r2": {
            "file": "great-gate-02.jpg",
            "connections": "r1,r3",
            "rotation": "rotate90"
          },
          "r3": {
            "file": "great-gate-03.jpg",
            "connections": "r2,r4",
            "rotation": "rotate90"
          },
          "r4": {
            "file": "great-gate-04.jpg",
            "connections": "r3,r5,r6,r10",
            "rotation": "rotate90"
          },
          "r5": {
            "file": "great-gate-05.jpg",
            "connections": "r4,r7",
            "rotation": "rotate90"
          },
          "r6": {
            "file": "great-gate-06.jpg",
            "connections": "r4,r7,r8",
            "rotation": "rotate90"
          },
          "r7": {
            "file": "great-gate-07.jpg",
            "connections": "r5,r6,r11",
            "rotation": "rotate90"
          },
          "r8": {
            "file": "great-gate-08.jpg",
            "connections": "r6,r9",
            "rotation": "rotate90"
          },
          "r9": {
            "file": "great-gate-09.jpg",
            "connections": "r8",
            "rotation": "rotate90"
          },
          "r10": {
            "file": "great-gate-10.jpg",
            "connections": "r4",
            "rotation": "rotate90"
          },
          "r11": {
            "file": "great-gate-11.jpg",
            "connections": "r7",
            "rotation": "rotate90"
          }
        }
      },
      "q2": {
        "name": "The Warrior Halls",
        "folder": "02-the-warrior-halls",
        "rooms": {
          "r1": {
            "file": "warrior-halls-01.jpg",
            "connections": "r5,r11",
            "rotation": "rotate90"
          },
          "r2": {
            "file": "warrior-halls-02.jpg",
            "connections": "r6,r9",
            "rotation": "rotate90"
          },
          "r3": {
            "file": "warrior-halls-03.jpg",
            "connections": "r7,r9",
            "rotation": "rotate90"
          },
          "r4": {
            "file": "warrior-halls-04.jpg",
            "connections": "r8,r12",
            "rotation": "rotate90"
          },
          "r5": {
            "file": "warrior-halls-05.jpg",
            "connections": "r1,r12",
            "rotation": "rotate90"
          },
          "r6": {
            "file": "warrior-halls-06.jpg",
            "connections": "r2,r8",
            "rotation": "rotate90"
          },
          "r7": {
            "file": "warrior-halls-07.jpg",
            "connections": "r3",
            "rotation": "rotate90"
          },
          "r8": {
            "file": "warrior-halls-08.jpg",
            "connections": "r4,r6",
            "rotation": "rotate90"
          },
          "r9": {
            "file": "warrior-halls-09.jpg",
            "connections": "r2,r3,r12",
            "rotation": "rotate90"
          },
          "r10": {
            "file": "warrior-halls-10.jpg",
            "connections": "r12",
            "rotation": "rotate90"
          },
          "r11": {
            "file": "warrior-halls-11.jpg",
            "connections": "r1,r12",
            "rotation": "rotate90"
          },
          "r12": {
            "file": "warrior-halls-12.jpg",
            "connections": "r4,r5,r9,r10,r11",
            "rotation": "rotate90"
          }
        }
      },
      "q3": {
        "name": "The Spiral Passage",
        "folder": "03-the-spiral-passage",
        "rooms": {
          "r1": {
            "file": "spiral-passage-01.jpg",
            "connections": "r3,r5,r13,r15",
            "rotation": "rotate90"
          },
          "r2": {
            "file": "spiral-passage-02.jpg",
            "connections": "r8,r14",
            "rotation": "rotate90"
          },
          "r3": {
            "file": "spiral-passage-03.jpg",
            "connections": "r1,r11",
            "rotation": "rotate90"
          },
          "r4": {
            "file": "spiral-passage-04.jpg",
            "connections": "r14",
            "rotation": "rotate90"
          },
          "r5": {
            "file": "spiral-passage-05.jpg",
            "connections": "r1,r10,r11",
            "rotation": "rotate90"
          },
          "r6": {
            "file": "spiral-passage-06.jpg",
            "connections": "r14",
            "rotation": "rotate90"
          },
          "r7": {
            "file": "spiral-passage-07.jpg",
            "connections": "r10,r12",
            "rotation": "rotate90"
          },
          "r8": {
            "file": "spiral-passage-08.jpg",
            "connections": "r2,r10,r14",
            "rotation": "rotate90"
          },
          "r9": {
            "file": "spiral-passage-09.jpg",
            "connections": "r15",
            "rotation": "rotate90"
          },
          "r10": {
            "file": "spiral-passage-10.jpg",
            "connections": "r5,r7,r8,r12",
            "rotation": "rotate90"
          },
          "r11": {
            "file": "spiral-passage-11.jpg",
            "connections": "r3,r5",
            "rotation": "rotate90"
          },
          "r12": {
            "file": "spiral-passage-12.jpg",
            "connections": "r7,r10",
            "rotation": "rotate90"
          },
          "r13": {
            "file": "spiral-passage-13.jpg",
            "connections": "r1",
            "rotation": "rotate90"
          },
          "r14": {
            "file": "spiral-passage-14.jpg",
            "connections": "r2,r4,r6,r8",
            "rotation": "rotate90"
          },
          "r15": {
            "file": "spiral-passage-15.jpg",
            "connections": "r1,r9",
            "rotation": "rotate90"
          }
        }
      },
      "q4": {
        "name": "The Dwarven Forge",
        "folder": "04-the-dwarven-forge",
        "rooms": {
          "r1": {
            "file": "dwarven-forge-01.jpg",
            "connections": "r8",
            "rotation": "rotate90"
          },
          "r2": {
            "file": "dwarven-forge-02.jpg",
            "connections": "r6,r20",
            "rotation": "rotate90"
          },
          "r3": {
            "file": "dwarven-forge-03.jpg",
            "connections": "r15,r18",
            "rotation": "rotate90"
          },
          "r4": {
            "file": "dwarven-forge-04.jpg",
            "connections": "r8,r13",
            "rotation": "rotate90"
          },
          "r5": {
            "file": "dwarven-forge-05.jpg",
            "connections": "r10,r19",
            "rotation": "rotate90"
          },
          "r6": {
            "file": "dwarven-forge-06.jpg",
            "connections": "r2,r12",
            "rotation": "rotate90"
          },
          "r7": {
            "file": "dwarven-forge-07.jpg",
            "connections": "r17,r18",
            "rotation": "rotate90"
          },
          "r8": {
            "file": "dwarven-forge-08.jpg",
            "connections": "r1,r4,r19",
            "rotation": "rotate90"
          },
          "r9": {
            "file": "dwarven-forge-09.jpg",
            "connections": "r15",
            "rotation": "rotate90"
          },
          "r10": {
            "file": "dwarven-forge-10.jpg",
            "connections": "r5,r17",
            "rotation": "rotate90"
          },
          "r11": {
            "file": "dwarven-forge-11.jpg",
            "connections": "r12",
            "rotation": "rotate90"
          },
          "r12": {
            "file": "dwarven-forge-12.jpg",
            "connections": "r6,r11,r16",
            "rotation": "rotate90"
          },
          "r13": {
            "file": "dwarven-forge-13.jpg",
            "connections": "r4",
            "rotation": "rotate90"
          },
          "r14": {
            "file": "dwarven-forge-14.jpg",
            "connections": "r16",
            "rotation": "rotate90"
          },
          "r15": {
            "file": "dwarven-forge-15.jpg",
            "connections": "r3,r9",
            "rotation": "rotate90"
          },
          "r16": {
            "file": "dwarven-forge-16.jpg",
            "connections": "r12,r14,r19",
            "rotation": "rotate90"
          },
          "r17": {
            "file": "dwarven-forge-17.jpg",
            "connections": "r7,r10",
            "rotation": "rotate90"
          },
          "r18": {
            "file": "dwarven-forge-18.jpg",
            "connections": "r3,r7",
            "rotation": "rotate90"
          },
          "r19": {
            "file": "dwarven-forge-19.jpg",
            "connections": "r5,r8,r16",
            "rotation": "rotate90"
          },
          "r20": {
            "file": "dwarven-forge-20.jpg",
            "connections": "r2",
            "rotation": "rotate90"
          }
        }
      },
      "q5": {
        "name": "The Hall of Dwarven Kings",
        "folder": "05-hall-of-dwarven-kings",
        "rooms": {
          "r1": {
            "file": "dwarven-kings-01.jpg",
            "connections": "r12",
            "rotation": "rotate90"
          },
          "r2": {
            "file": "dwarven-kings-02.jpg",
            "connections": "r9,r10",
            "rotation": "rotate90"
          },
          "r3": {
            "file": "dwarven-kings-03.jpg",
            "connections": "r5",
            "rotation": "rotate90"
          },
          "r4": {
            "file": "dwarven-kings-04.jpg",
            "connections": "r9",
            "rotation": "rotate90"
          },
          "r5": {
            "file": "dwarven-kings-05.jpg",
            "connections": "r3,r6,r10,r11",
            "rotation": "rotate90"
          },
          "r6": {
            "file": "dwarven-kings-06.jpg",
            "connections": "r5",
            "rotation": "rotate90"
          },
          "r7": {
            "file": "dwarven-kings-07.jpg",
            "connections": "r11,r12",
            "rotation": "rotate90"
          },
          "r8": {
            "file": "dwarven-kings-08.jpg",
            "connections": "r9",
            "rotation": "rotate90"
          },
          "r9": {
            "file": "dwarven-kings-09.jpg",
            "connections": "r2,r4,r8",
            "rotation": "rotate90"
          },
          "r10": {
            "file": "dwarven-kings-10.jpg",
            "connections": "r2,r5",
            "rotation": "rotate90"
          },
          "r11": {
            "file": "dwarven-kings-11.jpg",
            "connections": "r5,r7",
            "rotation": "rotate90"
          },
          "r12": {
            "file": "dwarven-kings-12.jpg",
            "connections": "r1,r7",
            "rotation": "rotate90"
          }
        }
      },
      "q6": {
        "name": "The Great Citadel",
        "folder": "06-great-citadel",
        "rooms": {
          "r1": {
            "file": "citadel-01.jpg",
            "connections": "r5,r8,r11,r12,r16,r20",
            "rotation": "rotate90"
          },
          "r2": {
            "file": "citadel-02.jpg",
            "connections": "r16",
            "rotation": "rotate90"
          },
          "r3": {
            "file": "citadel-03.jpg",
            "connections": "r8,r20",
            "rotation": "rotate90"
          },
          "r4": {
            "file": "citadel-04.jpg",
            "connections": "r7,r10,r15,r19,r20",
            "rotation": "rotate90"
          },
          "r5": {
            "file": "citadel-05.jpg",
            "connections": "r1,r14",
            "rotation": "rotate90"
          },
          "r6": {
            "file": "citadel-06.jpg",
            "connections": "r19",
            "rotation": "rotate90"
          },
          "r7": {
            "file": "citadel-07.jpg",
            "connections": "r4",
            "rotation": "rotate90"
          },
          "r8": {
            "file": "citadel-08.jpg",
            "connections": "r1,r3,r15,r16",
            "rotation": "rotate90"
          },
          "r9": {
            "file": "citadel-09.jpg",
            "connections": "r14",
            "rotation": "rotate90"
          },
          "r10": {
            "file": "citadel-10.jpg",
            "connections": "r4,r17",
            "rotation": "rotate90"
          },
          "r11": {
            "file": "citadel-11.jpg",
            "connections": "r1",
            "rotation": "rotate90"
          },
          "r12": {
            "file": "citadel-12.jpg",
            "connections": "r1,r21",
            "rotation": "rotate90"
          },
          "r13": {
            "file": "citadel-13.jpg",
            "connections": "r16",
            "rotation": "rotate90"
          },
          "r14": {
            "file": "citadel-14.jpg",
            "connections": "r5,r9,r18",
            "rotation": "rotate90"
          },
          "r15": {
            "file": "citadel-15.jpg",
            "connections": "r4,r8,r20",
            "rotation": "rotate90"
          },
          "r16": {
            "file": "citadel-16.jpg",
            "connections": "r1,r2,r8,r13",
            "rotation": "rotate90"
          },
          "r17": {
            "file": "citadel-17.jpg",
            "connections": "r10",
            "rotation": "rotate90"
          },
          "r18": {
            "file": "citadel-18.jpg",
            "connections": "r14",
            "rotation": "rotate90"
          },
          "r19": {
            "file": "citadel-19.jpg",
            "connections": "r4,r6",
            "rotation": "rotate90"
          },
          "r20": {
            "file": "citadel-20.jpg",
            "connections": "r1,r3,r4,r15",
            "rotation": "rotate90"
          },
          "r21": {
            "file": "citadel-21.jpg",
            "connections": "r12",
            "rotation": "rotate90"
          }
        }
      },
      "q7": {
        "name": "Eastern Passage",
        "folder": "07-eastern-passage",
        "rooms": {
          "r1": {
            "file": "eastern-passage-01.jpg",
            "connections": "r9,r11,r17",
            "rotation": "rotate90"
          },
          "r2": {
            "file": "eastern-passage-02.jpg",
            "connections": "r8,r15",
            "rotation": "rotate90"
          },
          "r3": {
            "file": "eastern-passage-03.jpg",
            "connections": "r9,r12,r14",
            "rotation": "rotate90"
          },
          "r4": {
            "file": "eastern-passage-04.jpg",
            "connections": "r6,r17",
            "rotation": "rotate90"
          },
          "r5": {
            "file": "eastern-passage-05.jpg",
            "connections": "r9,r13",
            "rotation": "rotate90"
          },
          "r6": {
            "file": "eastern-passage-06.jpg",
            "connections": "r4",
            "rotation": "rotate90"
          },
          "r7": {
            "file": "eastern-passage-07.jpg",
            "connections": "r11",
            "rotation": "rotate90"
          },
          "r8": {
            "file": "eastern-passage-08.jpg",
            "connections": "r2,r10",
            "rotation": "rotate90"
          },
          "r9": {
            "file": "eastern-passage-09.jpg",
            "connections": "r1,r3,r5",
            "rotation": "rotate90"
          },
          "r10": {
            "file": "eastern-passage-10.jpg",
            "connections": "r8,r14",
            "rotation": "rotate90"
          },
          "r11": {
            "file": "eastern-passage-11.jpg",
            "connections": "r1,r7",
            "rotation": "rotate90"
          },
          "r12": {
            "file": "eastern-passage-12.jpg",
            "connections": "r3,r15",
            "rotation": "rotate90"
          },
          "r13": {
            "file": "eastern-passage-13.jpg",
            "connections": "r5,r16",
            "rotation": "rotate90"
          },
          "r14": {
            "file": "eastern-passage-14.jpg",
            "connections": "r3,r10",
            "rotation": "rotate90"
          },
          "r15": {
            "file": "eastern-passage-15.jpg",
            "connections": "r2,r12",
            "rotation": "rotate90"
          },
          "r16": {
            "file": "eastern-passage-16.jpg",
            "connections": "r13",
            "rotation": "rotate90"
          },
          "r17": {
            "file": "eastern-passage-17.jpg",
            "connections": "r1,r4",
            "rotation": "rotate90"
          }
        }
      },
      "q8": {
        "name": "Belorn's Mine",
        "folder": "08-belorns-mine",
        "rooms": {
          "r1": {
            "file": "belorns-mine-01.jpg",
            "connections": "r5,r6,r7,r8,r10",
            "rotation": "rotate90"
          },
          "r2": {
            "file": "belorns-mine-02.jpg",
            "connections": "r9,r13,r14",
            "rotation": "rotate90"
          },
          "r3": {
            "file": "belorns-mine-03.jpg",
            "connections": "r10,r11",
            "rotation": "rotate90"
          },
          "r4": {
            "file": "belorns-mine-04.jpg",
            "connections": "r12",
            "rotation": "rotate90"
          },
          "r5": {
            "file": "belorns-mine-05.jpg",
            "connections": "r1,r13",
            "rotation": "rotate90"
          },
          "r6": {
            "file": "belorns-mine-06.jpg",
            "connections": "r1",
            "rotation": "rotate90"
          },
          "r7": {
            "file": "belorns-mine-07.jpg",
            "connections": "r1,r11,r14",
            "rotation": "rotate90"
          },
          "r8": {
            "file": "belorns-mine-08.jpg",
            "connections": "r1,r10,r12,r14",
            "rotation": "rotate90"
          },
          "r9": {
            "file": "belorns-mine-09.jpg",
            "connections": "r2,r14",
            "rotation": "rotate90"
          },
          "r10": {
            "file": "belorns-mine-10.jpg",
            "connections": "r1,r3,r8,r13",
            "rotation": "rotate90"
          },
          "r11": {
            "file": "belorns-mine-11.jpg",
            "connections": "r3,r7",
            "rotation": "rotate90"
          },
          "r12": {
            "file": "belorns-mine-12.jpg",
            "connections": "r4,r8",
            "rotation": "rotate90"
          },
          "r13": {
            "file": "belorns-mine-13.jpg",
            "connections": "r2,r5,r10,r14",
            "rotation": "rotate90"
          },
          "r14": {
            "file": "belorns-mine-14.jpg",
            "connections": "r2,r7,r8,r9,r13",
            "rotation": "rotate90"
          }
        }
      },
      "q9": {
        "name": "The East Gate",
        "folder": "09-east-gate",
        "rooms": {
          "r1": {
            "file": "east-gate-01.jpg",
            "connections": "r4,r6,r9,r13,r14",
            "rotation": "rotate90"
          },
          "r2": {
            "file": "east-gate-02.jpg",
            "connections": "r7,r13,r15",
            "rotation": "rotate90"
          },
          "r3": {
            "file": "east-gate-03.jpg",
            "connections": "r15",
            "rotation": "rotate90"
          },
          "r4": {
            "file": "east-gate-04.jpg",
            "connections": "r1,r15",
            "rotation": "rotate90"
          },
          "r5": {
            "file": "east-gate-05.jpg",
            "connections": "r11,r15",
            "rotation": "rotate90"
          },
          "r6": {
            "file": "east-gate-06.jpg",
            "connections": "r1,r12",
            "rotation": "rotate90"
          },
          "r7": {
            "file": "east-gate-07.jpg",
            "connections": "r2",
            "rotation": "rotate90"
          },
          "r8": {
            "file": "east-gate-08.jpg",
            "connections": "r11",
            "rotation": "rotate90"
          },
          "r9": {
            "file": "east-gate-09.jpg",
            "connections": "r1",
            "rotation": "rotate90"
          },
          "r10": {
            "file": "east-gate-10.jpg",
            "connections": "r13",
            "rotation": "rotate90"
          },
          "r11": {
            "file": "east-gate-11.jpg",
            "connections": "r5,r8",
            "rotation": "rotate90"
          },
          "r12": {
            "file": "east-gate-12.jpg",
            "connections": "r6",
            "rotation": "rotate90"
          },
          "r13": {
            "file": "east-gate-13.jpg",
            "connections": "r1,r2,r10",
            "rotation": "rotate90"
          },
          "r14": {
            "file": "east-gate-14.jpg",
            "connections": "r1",
            "rotation": "rotate90"
          },
          "r15": {
            "file": "east-gate-15.jpg",
            "connections": "r2,r3,r4,r5",
            "rotation": "rotate90"
          }
        }
      },
      "q10": {
        "name": "Grin's Crag",
        "folder": "10-grins-crag",
        "rooms": {
          "r1": {
            "file": "grins-crag-01.jpg",
            "connections": "r7,r9,r12",
            "rotation": "rotate90"
          },
          "r2": {
            "file": "grins-crag-02.jpg",
            "connections": "r6,r15",
            "rotation": "rotate90"
          },
          "r3": {
            "file": "grins-crag-03.jpg",
            "connections": "r6",
            "rotation": "rotate90"
          },
          "r4": {
            "file": "grins-crag-04.jpg",
            "connections": "r7,r13,r14",
            "rotation": "rotate90"
          },
          "r5": {
            "file": "grins-crag-05.jpg",
            "connections": "r8,r11",
            "rotation": "rotate90"
          },
          "r6": {
            "file": "grins-crag-06.jpg",
            "connections": "r2,r3",
            "rotation": "rotate90"
          },
          "r7": {
            "file": "grins-crag-07.jpg",
            "connections": "r1,r4",
            "rotation": "rotate90"
          },
          "r8": {
            "file": "grins-crag-08.jpg",
            "connections": "r5",
            "rotation": "rotate90"
          },
          "r9": {
            "file": "grins-crag-09.jpg",
            "connections": "r1,r12",
            "rotation": "rotate90"
          },
          "r10": {
            "file": "grins-crag-10.jpg",
            "connections": "r15",
            "rotation": "rotate90"
          },
          "r11": {
            "file": "grins-crag-11.jpg",
            "connections": "r5,r15",
            "rotation": "rotate90"
          },
          "r12": {
            "file": "grins-crag-12.jpg",
            "connections": "r1,r9,r16",
            "rotation": "rotate90"
          },
          "r13": {
            "file": "grins-crag-13.jpg",
            "connections": "r4,r15",
            "rotation": "rotate90"
          },
          "r14": {
            "file": "grins-crag-14.jpg",
            "connections": "r4",
            "rotation": "rotate90"
          },
          "r15": {
            "file": "grins-crag-15.jpg",
            "connections": "r2,r10,r11,r13",
            "rotation": "rotate90"
          },
          "r16": {
            "file": "grins-crag-16.jpg",
            "connections": "r12",
            "rotation": "rotate90"
          }
        }
      }
    },
    "help": {
      "h1": {
        "name": "Co-Op Game Guide",
        "file": "coop-game-guide.png",
        "rotation": ""
      }
    }
  },
  "Against the Ogre Horde": {
    "name": "Against the Ogre Horde",
    "folder": "against-the-ogre-horde",
    "quests": {
      "q1": {
        "name": "Search for the Ogre Fortress",
        "folder": "01-search",
        "rooms": {
          "r1": {
            "file": "search-01.jpg",
            "connections": "r7,r12,r14",
            "rotation": ""
          },
          "r2": {
            "file": "search-02.jpg",
            "connections": "r18",
            "rotation": ""
          },
          "r3": {
            "file": "search-03.jpg",
            "connections": "r7",
            "rotation": ""
          },
          "r4": {
            "file": "search-04.jpg",
            "connections": "r19",
            "rotation": ""
          },
          "r5": {
            "file": "search-05.jpg",
            "connections": "r9",
            "rotation": ""
          },
          "r6": {
            "file": "search-06.jpg",
            "connections": "r9,r19",
            "rotation": ""
          },
          "r7": {
            "file": "search-07.jpg",
            "connections": "r1,r3,r10,r14",
            "rotation": ""
          },
          "r8": {
            "file": "search-08.jpg",
            "connections": "r13,r20",
            "rotation": ""
          },
          "r9": {
            "file": "search-09.jpg",
            "connections": "r5,r6,r16",
            "rotation": ""
          },
          "r10": {
            "file": "search-10.jpg",
            "connections": "r7,r21",
            "rotation": ""
          },
          "r11": {
            "file": "search-11.jpg",
            "connections": "r19",
            "rotation": ""
          },
          "r12": {
            "file": "search-12.jpg",
            "connections": "r1",
            "rotation": ""
          },
          "r13": {
            "file": "search-13.jpg",
            "connections": "r8,r16",
            "rotation": ""
          },
          "r14": {
            "file": "search-14.jpg",
            "connections": "r1,r7,r17,r18",
            "rotation": ""
          },
          "r15": {
            "file": "search-15.jpg",
            "connections": "r16,r18",
            "rotation": ""
          },
          "r16": {
            "file": "search-16.jpg",
            "connections": "r9,r13,r15",
            "rotation": ""
          },
          "r17": {
            "file": "search-17.jpg",
            "connections": "r14",
            "rotation": ""
          },
          "r18": {
            "file": "search-18.jpg",
            "connections": "r2,r14,r15",
            "rotation": ""
          },
          "r19": {
            "file": "search-19.jpg",
            "connections": "r4,r6,r11",
            "rotation": ""
          },
          "r20": {
            "file": "search-20.jpg",
            "connections": "r8",
            "rotation": ""
          },
          "r21": {
            "file": "flap-10.jpg",
            "connections": "r10",
            "rotation": ""
          }
        }
      },
      "q2": {
        "name": "The Outer Caves",
        "folder": "02-outer-caves",
        "rooms": {
          "r1": {
            "file": "caves-01.jpg",
            "connections": "r10,r23",
            "rotation": ""
          },
          "r2": {
            "file": "caves-02.jpg",
            "connections": "r14,r17",
            "rotation": ""
          },
          "r3": {
            "file": "caves-03.jpg",
            "connections": "r11",
            "rotation": ""
          },
          "r4": {
            "file": "caves-04.jpg",
            "connections": "r16,r25",
            "rotation": ""
          },
          "r5": {
            "file": "caves-05.jpg",
            "connections": "r7,r9,r23",
            "rotation": ""
          },
          "r6": {
            "file": "caves-06.jpg",
            "connections": "r13,r26",
            "rotation": ""
          },
          "r7": {
            "file": "caves-07.jpg",
            "connections": "r5,r9",
            "rotation": ""
          },
          "r8": {
            "file": "caves-08.jpg",
            "connections": "r11,r27",
            "rotation": ""
          },
          "r9": {
            "file": "caves-09.jpg",
            "connections": "r5,r7,r12",
            "rotation": ""
          },
          "r10": {
            "file": "caves-10.jpg",
            "connections": "r1,r13,r19,r21",
            "rotation": ""
          },
          "r11": {
            "file": "caves-11.jpg",
            "connections": "r3,r8,r24",
            "rotation": ""
          },
          "r12": {
            "file": "caves-12.jpg",
            "connections": "r9,r16,r17,r20",
            "rotation": ""
          },
          "r13": {
            "file": "caves-13.jpg",
            "connections": "r6,r10",
            "rotation": ""
          },
          "r14": {
            "file": "caves-14.jpg",
            "connections": "r2,r23",
            "rotation": ""
          },
          "r15": {
            "file": "caves-15.jpg",
            "connections": "r19,r22",
            "rotation": ""
          },
          "r16": {
            "file": "caves-16.jpg",
            "connections": "r4,r12",
            "rotation": ""
          },
          "r17": {
            "file": "caves-17.jpg",
            "connections": "r2,r12",
            "rotation": ""
          },
          "r18": {
            "file": "caves-18.jpg",
            "connections": "r22,r24",
            "rotation": ""
          },
          "r19": {
            "file": "caves-19.jpg",
            "connections": "r10,r15,r22",
            "rotation": ""
          },
          "r20": {
            "file": "caves-20.jpg",
            "connections": "r12,r22",
            "rotation": ""
          },
          "r21": {
            "file": "caves-21.jpg",
            "connections": "r10",
            "rotation": ""
          },
          "r22": {
            "file": "caves-22.jpg",
            "connections": "r15,r18,r19,r20",
            "rotation": ""
          },
          "r23": {
            "file": "caves-23.jpg",
            "connections": "r1,r5,r14",
            "rotation": ""
          },
          "r24": {
            "file": "caves-24.jpg",
            "connections": "r11,r18",
            "rotation": ""
          },
          "r25": {
            "file": "flap-04.jpg",
            "connections": "r4",
            "rotation": ""
          },
          "r26": {
            "file": "flap-06.jpg",
            "connections": "r6",
            "rotation": ""
          },
          "r27": {
            "file": "flap-08.jpg",
            "connections": "r8",
            "rotation": ""
          }
        }
      },
      "q3": {
        "name": "Lair of the Ogre Horde",
        "folder": "03-ogre-lair",
        "rooms": {
          "r1": {
            "file": "lair-01.jpg",
            "connections": "r4,r9",
            "rotation": ""
          },
          "r2": {
            "file": "lair-02.jpg",
            "connections": "r21",
            "rotation": ""
          },
          "r3": {
            "file": "lair-03.jpg",
            "connections": "r8,r12,r15",
            "rotation": ""
          },
          "r4": {
            "file": "lair-04.jpg",
            "connections": "r1,r11",
            "rotation": ""
          },
          "r5": {
            "file": "lair-05.jpg",
            "connections": "r17",
            "rotation": ""
          },
          "r6": {
            "file": "lair-06.jpg",
            "connections": "r7,r13,r20,r23",
            "rotation": ""
          },
          "r7": {
            "file": "lair-07.jpg",
            "connections": "r6,r24",
            "rotation": ""
          },
          "r8": {
            "file": "lair-08.jpg",
            "connections": "r3,r25,r26",
            "rotation": ""
          },
          "r9": {
            "file": "lair-09.jpg",
            "connections": "r1,r14",
            "rotation": ""
          },
          "r10": {
            "file": "lair-10.jpg",
            "connections": "r18,r27,r28",
            "rotation": ""
          },
          "r11": {
            "file": "lair-11.jpg",
            "connections": "r4,r18",
            "rotation": ""
          },
          "r12": {
            "file": "lair-12.jpg",
            "connections": "r3,r17",
            "rotation": ""
          },
          "r13": {
            "file": "lair-13.jpg",
            "connections": "r6,r16,r19",
            "rotation": ""
          },
          "r14": {
            "file": "lair-14.jpg",
            "connections": "r9,r20",
            "rotation": ""
          },
          "r15": {
            "file": "lair-15.jpg",
            "connections": "r3,r19",
            "rotation": ""
          },
          "r16": {
            "file": "lair-16.jpg",
            "connections": "r13,r21",
            "rotation": ""
          },
          "r17": {
            "file": "lair-17.jpg",
            "connections": "r5,r12",
            "rotation": ""
          },
          "r18": {
            "file": "lair-18.jpg",
            "connections": "r10,r11,r21",
            "rotation": ""
          },
          "r19": {
            "file": "lair-19.jpg",
            "connections": "r13,r15,r21",
            "rotation": ""
          },
          "r20": {
            "file": "lair-20.jpg",
            "connections": "r6,r14,r22",
            "rotation": ""
          },
          "r21": {
            "file": "lair-21.jpg",
            "connections": "r2,r16,r18,r19",
            "rotation": ""
          },
          "r22": {
            "file": "lair-22.jpg",
            "connections": "r20",
            "rotation": ""
          },
          "r23": {
            "file": "flap-06.jpg",
            "connections": "r6",
            "rotation": ""
          },
          "r24": {
            "file": "flap-07.jpg",
            "connections": "r7",
            "rotation": ""
          },
          "r25": {
            "file": "flap-08-left.jpg",
            "connections": "r8",
            "rotation": ""
          },
          "r26": {
            "file": "flap-08-right.jpg",
            "connections": "r8",
            "rotation": ""
          },
          "r27": {
            "file": "flap-10-chest.jpg",
            "connections": "r10",
            "rotation": ""
          },
          "r28": {
            "file": "flap-10-tomb.jpg",
            "connections": "r10",
            "rotation": ""
          }
        }
      },
      "q4": {
        "name": "The Carrion Halls",
        "folder": "04-carrion-halls",
        "rooms": {
          "r1": {
            "file": "carrion-halls-01.jpg",
            "connections": "r5,r8,r11",
            "rotation": ""
          },
          "r2": {
            "file": "carrion-halls-02.jpg",
            "connections": "r10",
            "rotation": ""
          },
          "r3": {
            "file": "carrion-halls-03.jpg",
            "connections": "r10,r13,r17,r19",
            "rotation": ""
          },
          "r4": {
            "file": "carrion-halls-04.jpg",
            "connections": "r9,r15",
            "rotation": ""
          },
          "r5": {
            "file": "carrion-halls-05.jpg",
            "connections": "r1,r16",
            "rotation": ""
          },
          "r6": {
            "file": "carrion-halls-06.jpg",
            "connections": "r10,r12,r13,r21",
            "rotation": ""
          },
          "r7": {
            "file": "carrion-halls-07.jpg",
            "connections": "r12,r18",
            "rotation": ""
          },
          "r8": {
            "file": "carrion-halls-08.jpg",
            "connections": "r1,r14",
            "rotation": ""
          },
          "r9": {
            "file": "carrion-halls-09.jpg",
            "connections": "r4,r22",
            "rotation": ""
          },
          "r10": {
            "file": "carrion-halls-10.jpg",
            "connections": "r2,r3,r6,r15,r17,r18",
            "rotation": ""
          },
          "r11": {
            "file": "carrion-halls-11.jpg",
            "connections": "r1,r12",
            "rotation": ""
          },
          "r12": {
            "file": "carrion-halls-12.jpg",
            "connections": "r6,r7,r11",
            "rotation": ""
          },
          "r13": {
            "file": "carrion-halls-13.jpg",
            "connections": "r3,r6,r17",
            "rotation": ""
          },
          "r14": {
            "file": "carrion-halls-14.jpg",
            "connections": "r8,r19,r23",
            "rotation": ""
          },
          "r15": {
            "file": "carrion-halls-15.jpg",
            "connections": "r4,r10",
            "rotation": ""
          },
          "r16": {
            "file": "carrion-halls-16.jpg",
            "connections": "r5",
            "rotation": ""
          },
          "r17": {
            "file": "carrion-halls-17.jpg",
            "connections": "r3,r10,r13",
            "rotation": ""
          },
          "r18": {
            "file": "carrion-halls-18.jpg",
            "connections": "r7,r10",
            "rotation": ""
          },
          "r19": {
            "file": "carrion-halls-19.jpg",
            "connections": "r3,r14",
            "rotation": ""
          },
          "r20": {
            "file": "carrion-halls-20.jpg",
            "connections": "r22",
            "rotation": ""
          },
          "r21": {
            "file": "carrion-halls-21.jpg",
            "connections": "r6",
            "rotation": ""
          },
          "r22": {
            "file": "carrion-halls-22.jpg",
            "connections": "r9,r20,r24",
            "rotation": ""
          },
          "r23": {
            "file": "flap-14.jpg",
            "connections": "r14",
            "rotation": ""
          },
          "r24": {
            "file": "flap-22.jpg",
            "connections": "r22",
            "rotation": ""
          }
        }
      },
      "q5": {
        "name": "The Pit of Chaos",
        "folder": "05-pit-of-chaos",
        "rooms": {
          "r1": {
            "file": "pit-01.jpg",
            "connections": "r6",
            "rotation": ""
          },
          "r2": {
            "file": "pit-02.jpg",
            "connections": "r16",
            "rotation": ""
          },
          "r3": {
            "file": "pit-03.jpg",
            "connections": "r7,r10",
            "rotation": ""
          },
          "r4": {
            "file": "pit-04.jpg",
            "connections": "r6",
            "rotation": ""
          },
          "r5": {
            "file": "pit-05.jpg",
            "connections": "r12,r17",
            "rotation": ""
          },
          "r6": {
            "file": "pit-06.jpg",
            "connections": "r1,r4,r9,r10",
            "rotation": ""
          },
          "r7": {
            "file": "pit-07.jpg",
            "connections": "r3,r18,r19",
            "rotation": ""
          },
          "r8": {
            "file": "pit-08.jpg",
            "connections": "r10,r13",
            "rotation": ""
          },
          "r9": {
            "file": "pit-09.jpg",
            "connections": "r6,r19",
            "rotation": ""
          },
          "r10": {
            "file": "pit-10.jpg",
            "connections": "r3,r6,r8",
            "rotation": ""
          },
          "r11": {
            "file": "pit-11.jpg",
            "connections": "r17",
            "rotation": ""
          },
          "r12": {
            "file": "pit-12.jpg",
            "connections": "r5,r20",
            "rotation": ""
          },
          "r13": {
            "file": "pit-13.jpg",
            "connections": "r8,r15",
            "rotation": ""
          },
          "r14": {
            "file": "pit-14.jpg",
            "connections": "r18,r21",
            "rotation": ""
          },
          "r15": {
            "file": "pit-15.jpg",
            "connections": "r13,r19",
            "rotation": ""
          },
          "r16": {
            "file": "pit-16.jpg",
            "connections": "r2,r18,r20",
            "rotation": ""
          },
          "r17": {
            "file": "pit-17.jpg",
            "connections": "r5,r11",
            "rotation": ""
          },
          "r18": {
            "file": "pit-18.jpg",
            "connections": "r7,r14,r16",
            "rotation": ""
          },
          "r19": {
            "file": "pit-19.jpg",
            "connections": "r7,r9,r15",
            "rotation": ""
          },
          "r20": {
            "file": "pit-20.jpg",
            "connections": "r12,r16,r22",
            "rotation": ""
          },
          "r21": {
            "file": "flap-14.jpg",
            "connections": "r14",
            "rotation": ""
          },
          "r22": {
            "file": "flap-20.jpg",
            "connections": "r20",
            "rotation": ""
          }
        }
      },
      "q6": {
        "name": "Fortress of the Ogre Lord",
        "folder": "06-ogre-fortress",
        "rooms": {
          "r1": {
            "file": "fortress-01.jpg",
            "connections": "r4,r12,r16",
            "rotation": ""
          },
          "r2": {
            "file": "fortress-02.jpg",
            "connections": "r9",
            "rotation": ""
          },
          "r3": {
            "file": "fortress-03.jpg",
            "connections": "r10,r16",
            "rotation": ""
          },
          "r4": {
            "file": "fortress-04.jpg",
            "connections": "r1,r20",
            "rotation": ""
          },
          "r5": {
            "file": "fortress-05.jpg",
            "connections": "r15,r21",
            "rotation": ""
          },
          "r6": {
            "file": "fortress-06.jpg",
            "connections": "r20",
            "rotation": ""
          },
          "r7": {
            "file": "fortress-07.jpg",
            "connections": "r15",
            "rotation": ""
          },
          "r8": {
            "file": "fortress-08.jpg",
            "connections": "r15",
            "rotation": ""
          },
          "r9": {
            "file": "fortress-09.jpg",
            "connections": "r2,r14,r18",
            "rotation": ""
          },
          "r10": {
            "file": "fortress-10.jpg",
            "connections": "r3,r17",
            "rotation": ""
          },
          "r11": {
            "file": "fortress-11.jpg",
            "connections": "r15,r16",
            "rotation": ""
          },
          "r12": {
            "file": "fortress-12.jpg",
            "connections": "r1,r19",
            "rotation": ""
          },
          "r13": {
            "file": "fortress-13.jpg",
            "connections": "r17",
            "rotation": ""
          },
          "r14": {
            "file": "fortress-14.jpg",
            "connections": "r9",
            "rotation": ""
          },
          "r15": {
            "file": "fortress-15.jpg",
            "connections": "r5,r7,r8,r11",
            "rotation": ""
          },
          "r16": {
            "file": "fortress-16.jpg",
            "connections": "r1,r3,r11",
            "rotation": ""
          },
          "r17": {
            "file": "fortress-17.jpg",
            "connections": "r10,r13,r22",
            "rotation": ""
          },
          "r18": {
            "file": "fortress-18.jpg",
            "connections": "r9,r20",
            "rotation": ""
          },
          "r19": {
            "file": "fortress-19.jpg",
            "connections": "r12,r22",
            "rotation": ""
          },
          "r20": {
            "file": "fortress-20.jpg",
            "connections": "r4,r6,r18",
            "rotation": ""
          },
          "r21": {
            "file": "fortress-21.jpg",
            "connections": "r5",
            "rotation": ""
          },
          "r22": {
            "file": "fortress-22.jpg",
            "connections": "r17,r19",
            "rotation": ""
          }
        }
      },
      "q7": {
        "name": "Flight to the Surface",
        "folder": "07-flight",
        "rooms": {
          "r1": {
            "file": "flight-01.jpg",
            "connections": "r4,r12",
            "rotation": ""
          },
          "r2": {
            "file": "flight-02.jpg",
            "connections": "r7",
            "rotation": ""
          },
          "r3": {
            "file": "flight-03.jpg",
            "connections": "r6,r19",
            "rotation": ""
          },
          "r4": {
            "file": "flight-04.jpg",
            "connections": "r1,r11",
            "rotation": ""
          },
          "r5": {
            "file": "flight-05.jpg",
            "connections": "r8,r9,r17",
            "rotation": ""
          },
          "r6": {
            "file": "flight-06.jpg",
            "connections": "r3,r9,r12",
            "rotation": ""
          },
          "r7": {
            "file": "flight-07.jpg",
            "connections": "r2,r9,r11,r13",
            "rotation": ""
          },
          "r8": {
            "file": "flight-08.jpg",
            "connections": "r5,r17",
            "rotation": ""
          },
          "r9": {
            "file": "flight-09.jpg",
            "connections": "r5,r6,r7",
            "rotation": ""
          },
          "r10": {
            "file": "flight-10.jpg",
            "connections": "r19",
            "rotation": ""
          },
          "r11": {
            "file": "flight-11.jpg",
            "connections": "r4,r7,r13,r19",
            "rotation": ""
          },
          "r12": {
            "file": "flight-12.jpg",
            "connections": "r1,r6",
            "rotation": ""
          },
          "r13": {
            "file": "flight-13.jpg",
            "connections": "r7,r11,r20",
            "rotation": ""
          },
          "r14": {
            "file": "flight-14.jpg",
            "connections": "r19",
            "rotation": ""
          },
          "r15": {
            "file": "flight-15.jpg",
            "connections": "r17,r18",
            "rotation": ""
          },
          "r16": {
            "file": "flight-16.jpg",
            "connections": "r19",
            "rotation": ""
          },
          "r17": {
            "file": "flight-17.jpg",
            "connections": "r5,r8,r15",
            "rotation": ""
          },
          "r18": {
            "file": "flight-18.jpg",
            "connections": "r15",
            "rotation": ""
          },
          "r19": {
            "file": "flight-19.jpg",
            "connections": "r3,r10,r11,r14,r16",
            "rotation": ""
          },
          "r20": {
            "file": "flight-20.jpg",
            "connections": "r13",
            "rotation": ""
          }
        }
      }
    },
    "help": {
      "h1": {
        "name": "Co-Op Game Guide",
        "file": "coop-game-guide.png",
        "rotation": ""
      },
      "h2": {
        "name": "Guide Part 1",
        "file": "guide-ogre-horde-part-1.jpg",
        "rotation": ""
      },
      "h3": {
        "name": "Guide Part 2",
        "file": "guide-ogre-horde-part2.jpg",
        "rotation": ""
      }
    }
  },
  "Dark Company": {
    "name": "Dark Company",
    "folder": "dark-company",
    "quests": {
      "q1": {
        "name": "Dark Company Campaign",
        "folder": "",
        "rooms": {
          "s1p1": {
            "file": "01-section-dark-company/01-section-01.jpg",
            "connections": "s1p6",
            "rotation": ""
          },
          "s1p2": {
            "file": "01-section-dark-company/01-section-02.jpg",
            "connections": "s1p5,s1p6,s1p7",
            "rotation": ""
          },
          "s1p3": {
            "file": "01-section-dark-company/01-section-03.jpg",
            "connections": "s1p6,s1p7",
            "rotation": ""
          },
          "s1p4": {
            "file": "01-section-dark-company/01-section-04.jpg",
            "connections": "s1p5",
            "rotation": ""
          },
          "s1p5": {
            "file": "01-section-dark-company/01-section-05.jpg",
            "connections": "s1p2,s1p4,s10p13",
            "rotation": ""
          },
          "s1p6": {
            "file": "01-section-dark-company/01-section-06.jpg",
            "connections": "s1p1,s1p2,s1p3",
            "rotation": ""
          },
          "s1p7": {
            "file": "01-section-dark-company/01-section-07.jpg",
            "connections": "s1p2,s1p3",
            "rotation": ""
          },
          "s2p1": {
            "file": "02-section-dark-company/02-section-01.jpg",
            "connections": "s2p8,s2p9",
            "rotation": ""
          },
          "s2p2": {
            "file": "02-section-dark-company/02-section-02.jpg",
            "connections": "s2p5,s2p8,s3p13",
            "rotation": ""
          },
          "s2p3": {
            "file": "02-section-dark-company/02-section-03.jpg",
            "connections": "s2p6,s2p7,s2p9",
            "rotation": ""
          },
          "s2p4": {
            "file": "02-section-dark-company/02-section-04.jpg",
            "connections": "s2p6,s2p7",
            "rotation": ""
          },
          "s2p5": {
            "file": "02-section-dark-company/02-section-05.jpg",
            "connections": "s2p2,s2p11",
            "rotation": ""
          },
          "s2p6": {
            "file": "02-section-dark-company/02-section-06.jpg",
            "connections": "s2p3,s2p4,s2p10,s8p2",
            "rotation": ""
          },
          "s2p7": {
            "file": "02-section-dark-company/02-section-07.jpg",
            "connections": "s2p3,s2p4",
            "rotation": ""
          },
          "s2p8": {
            "file": "02-section-dark-company/02-section-08.jpg",
            "connections": "s2p1,s2p2,s2p10",
            "rotation": ""
          },
          "s2p9": {
            "file": "02-section-dark-company/02-section-09.jpg",
            "connections": "s2p1,s2p3",
            "rotation": ""
          },
          "s2p10": {
            "file": "02-section-dark-company/02-section-10.jpg",
            "connections": "s2p6,s2p8",
            "rotation": ""
          },
          "s2p11": {
            "file": "02-section-dark-company/02-section-11.jpg",
            "connections": "s2p5",
            "rotation": ""
          },
          "s3p1": {
            "file": "03-section-dark-company/03-section-01.jpg",
            "connections": "s3p6,s3p19",
            "rotation": ""
          },
          "s3p2": {
            "file": "03-section-dark-company/03-section-02.jpg",
            "connections": "s3p4,s3p7",
            "rotation": ""
          },
          "s3p3": {
            "file": "03-section-dark-company/03-section-03.jpg",
            "connections": "s3p9,s3p15",
            "rotation": ""
          },
          "s3p4": {
            "file": "03-section-dark-company/03-section-04.jpg",
            "connections": "s3p2,s3p16,s3p18,s4p10",
            "rotation": ""
          },
          "s3p5": {
            "file": "03-section-dark-company/03-section-05.jpg",
            "connections": "s3p14,s3p17",
            "rotation": ""
          },
          "s3p6": {
            "file": "03-section-dark-company/03-section-06.jpg",
            "connections": "s3p1,s3p14",
            "rotation": ""
          },
          "s3p7": {
            "file": "03-section-dark-company/03-section-07.jpg",
            "connections": "s3p2,s3p9",
            "rotation": ""
          },
          "s3p8": {
            "file": "03-section-dark-company/03-section-08.jpg",
            "connections": "s3p17",
            "rotation": ""
          },
          "s3p9": {
            "file": "03-section-dark-company/03-section-09.jpg",
            "connections": "s3p3,s3p7,s3p17",
            "rotation": ""
          },
          "s3p10": {
            "file": "03-section-dark-company/03-section-10.jpg",
            "connections": "s3p13,s3p19",
            "rotation": ""
          },
          "s3p11": {
            "file": "03-section-dark-company/03-section-11.jpg",
            "connections": "s3p12,s3p16,s3p18",
            "rotation": ""
          },
          "s3p12": {
            "file": "03-section-dark-company/03-section-12.jpg",
            "connections": "s3p11",
            "rotation": ""
          },
          "s3p13": {
            "file": "03-section-dark-company/03-section-13.jpg",
            "connections": "s2p2,s3p10",
            "rotation": ""
          },
          "s3p14": {
            "file": "03-section-dark-company/03-section-14.jpg",
            "connections": "s3p5,s3p6,s9p4",
            "rotation": ""
          },
          "s3p15": {
            "file": "03-section-dark-company/03-section-15.jpg",
            "connections": "s3p3",
            "rotation": ""
          },
          "s3p16": {
            "file": "03-section-dark-company/03-section-16.jpg",
            "connections": "s3p4,s3p11",
            "rotation": ""
          },
          "s3p17": {
            "file": "03-section-dark-company/03-section-17.jpg",
            "connections": "s3p5,s3p8,s3p9",
            "rotation": ""
          },
          "s3p18": {
            "file": "03-section-dark-company/03-section-18.jpg",
            "connections": "s3p4,s3p11",
            "rotation": ""
          },
          "s3p19": {
            "file": "03-section-dark-company/03-section-19.jpg",
            "connections": "s3p1,s3p10",
            "rotation": ""
          },
          "s4p1": {
            "file": "04-section-dark-company/04-section-01.jpg",
            "connections": "s4p4,s4p7",
            "rotation": ""
          },
          "s4p2": {
            "file": "04-section-dark-company/04-section-02.jpg",
            "connections": "s4p10",
            "rotation": ""
          },
          "s4p3": {
            "file": "04-section-dark-company/04-section-03.jpg",
            "connections": "s4p4,s4p6",
            "rotation": ""
          },
          "s4p4": {
            "file": "04-section-dark-company/04-section-04.jpg",
            "connections": "s4p1,s4p3,s4p10",
            "rotation": ""
          },
          "s4p5": {
            "file": "04-section-dark-company/04-section-05.jpg",
            "connections": "s4p13",
            "rotation": ""
          },
          "s4p6": {
            "file": "04-section-dark-company/04-section-06.jpg",
            "connections": "s4p3",
            "rotation": ""
          },
          "s4p7": {
            "file": "04-section-dark-company/04-section-07.jpg",
            "connections": "s4p1,s4p9",
            "rotation": ""
          },
          "s4p8": {
            "file": "04-section-dark-company/04-section-08.jpg",
            "connections": "s4p12",
            "rotation": ""
          },
          "s4p9": {
            "file": "04-section-dark-company/04-section-09.jpg",
            "connections": "s4p7,s11p3",
            "rotation": ""
          },
          "s4p10": {
            "file": "04-section-dark-company/04-section-10.jpg",
            "connections": "s3p4,s4p2,s4p4,s4p11,s4p12,s4p13",
            "rotation": ""
          },
          "s4p11": {
            "file": "04-section-dark-company/04-section-11.jpg",
            "connections": "s4p10",
            "rotation": ""
          },
          "s4p12": {
            "file": "04-section-dark-company/04-section-12.jpg",
            "connections": "s4p8,s4p10",
            "rotation": ""
          },
          "s4p13": {
            "file": "04-section-dark-company/04-section-13.jpg",
            "connections": "s4p5,s4p10",
            "rotation": ""
          },
          "s5p1": {
            "file": "05-section-dark-company/05-section-01.jpg",
            "connections": "s5p6,s5p15",
            "rotation": ""
          },
          "s5p2": {
            "file": "05-section-dark-company/05-section-02.jpg",
            "connections": "s5p10,s5p12",
            "rotation": ""
          },
          "s5p3": {
            "file": "05-section-dark-company/05-section-03.jpg",
            "connections": "s5p9,s5p13",
            "rotation": ""
          },
          "s5p4": {
            "file": "05-section-dark-company/05-section-04.jpg",
            "connections": "s5p18,s9p7",
            "rotation": ""
          },
          "s5p5": {
            "file": "05-section-dark-company/05-section-05.jpg",
            "connections": "s5p16",
            "rotation": ""
          },
          "s5p6": {
            "file": "05-section-dark-company/05-section-06.jpg",
            "connections": "s5p1,s5p18",
            "rotation": ""
          },
          "s5p7": {
            "file": "05-section-dark-company/05-section-07.jpg",
            "connections": "s5p11,s5p15",
            "rotation": ""
          },
          "s5p8": {
            "file": "05-section-dark-company/05-section-08.jpg",
            "connections": "s5p17",
            "rotation": ""
          },
          "s5p9": {
            "file": "05-section-dark-company/05-section-09.jpg",
            "connections": "s5p3,s5p12",
            "rotation": ""
          },
          "s5p10": {
            "file": "05-section-dark-company/05-section-10.jpg",
            "connections": "s5p2,s7p6",
            "rotation": ""
          },
          "s5p11": {
            "file": "05-section-dark-company/05-section-11.jpg",
            "connections": "s5p7,s5p14",
            "rotation": ""
          },
          "s5p12": {
            "file": "05-section-dark-company/05-section-12.jpg",
            "connections": "s5p2,s5p9",
            "rotation": ""
          },
          "s5p13": {
            "file": "05-section-dark-company/05-section-13.jpg",
            "connections": "s5p3,s5p15",
            "rotation": ""
          },
          "s5p14": {
            "file": "05-section-dark-company/05-section-14.jpg",
            "connections": "s5p11,s5p16,s5p17",
            "rotation": ""
          },
          "s5p15": {
            "file": "05-section-dark-company/05-section-15.jpg",
            "connections": "s5p1,s5p7,s5p13",
            "rotation": ""
          },
          "s5p16": {
            "file": "05-section-dark-company/05-section-16.jpg",
            "connections": "s5p5,s5p14",
            "rotation": ""
          },
          "s5p17": {
            "file": "05-section-dark-company/05-section-17.jpg",
            "connections": "s5p8,s5p14",
            "rotation": ""
          },
          "s5p18": {
            "file": "05-section-dark-company/05-section-18.jpg",
            "connections": "s5p4,s5p6",
            "rotation": ""
          },
          "s6p1": {
            "file": "06-section-dark-company/06-section-01.jpg",
            "connections": "s6p3,s6p5,s6p6",
            "rotation": ""
          },
          "s6p2": {
            "file": "06-section-dark-company/06-section-02.jpg",
            "connections": "s6p4,s6p5",
            "rotation": ""
          },
          "s6p3": {
            "file": "06-section-dark-company/06-section-03.jpg",
            "connections": "s6p1,s10p8",
            "rotation": ""
          },
          "s6p4": {
            "file": "06-section-dark-company/06-section-04.jpg",
            "connections": "s6p2",
            "rotation": ""
          },
          "s6p5": {
            "file": "06-section-dark-company/06-section-05.jpg",
            "connections": "s6p1,s6p2",
            "rotation": ""
          },
          "s6p6": {
            "file": "06-section-dark-company/06-section-06.jpg",
            "connections": "s6p1",
            "rotation": ""
          },
          "s7p1": {
            "file": "07-section-dark-company/07-section-01.jpg",
            "connections": "s7p4,s7p6",
            "rotation": ""
          },
          "s7p2": {
            "file": "07-section-dark-company/07-section-02.jpg",
            "connections": "s7p4,s7p8",
            "rotation": ""
          },
          "s7p3": {
            "file": "07-section-dark-company/07-section-03.jpg",
            "connections": "s7p8",
            "rotation": ""
          },
          "s7p4": {
            "file": "07-section-dark-company/07-section-04.jpg",
            "connections": "s7p1,s7p2",
            "rotation": ""
          },
          "s7p5": {
            "file": "07-section-dark-company/07-section-05.jpg",
            "connections": "s7p8",
            "rotation": ""
          },
          "s7p6": {
            "file": "07-section-dark-company/07-section-06.jpg",
            "connections": "s5p10,s7p1,s10p10",
            "rotation": ""
          },
          "s7p7": {
            "file": "07-section-dark-company/07-section-07.jpg",
            "connections": "s7p8",
            "rotation": ""
          },
          "s7p8": {
            "file": "07-section-dark-company/07-section-08.jpg",
            "connections": "s7p2,s7p3,s7p5,s7p7",
            "rotation": ""
          },
          "s8p1": {
            "file": "08-section-dark-company/08-section-01.jpg",
            "connections": "s8p2,s8p3",
            "rotation": ""
          },
          "s8p2": {
            "file": "08-section-dark-company/08-section-02.jpg",
            "connections": "s2p6,s8p1",
            "rotation": ""
          },
          "s8p3": {
            "file": "08-section-dark-company/08-section-03.jpg",
            "connections": "s8p1,s8p4",
            "rotation": ""
          },
          "s8p4": {
            "file": "08-section-dark-company/08-section-04.jpg",
            "connections": "s8p3",
            "rotation": ""
          },
          "s9p1": {
            "file": "09-section-dark-company/09-section-01.jpg",
            "connections": "s9p9,s9p10",
            "rotation": ""
          },
          "s9p2": {
            "file": "09-section-dark-company/09-section-02.jpg",
            "connections": "s9p11,s9p12",
            "rotation": ""
          },
          "s9p3": {
            "file": "09-section-dark-company/09-section-03.jpg",
            "connections": "s9p4",
            "rotation": ""
          },
          "s9p4": {
            "file": "09-section-dark-company/09-section-04.jpg",
            "connections": "s3p14,s9p3,s9p13,s9p15",
            "rotation": ""
          },
          "s9p5": {
            "file": "09-section-dark-company/09-section-05.jpg",
            "connections": "s9p7,s9p8",
            "rotation": ""
          },
          "s9p6": {
            "file": "09-section-dark-company/09-section-06.jpg",
            "connections": "s9p13",
            "rotation": ""
          },
          "s9p7": {
            "file": "09-section-dark-company/09-section-07.jpg",
            "connections": "s5p4,s9p5,s9p10,s9p12,s11p9",
            "rotation": ""
          },
          "s9p8": {
            "file": "09-section-dark-company/09-section-08.jpg",
            "connections": "s9p5,s9p14",
            "rotation": ""
          },
          "s9p9": {
            "file": "09-section-dark-company/09-section-09.jpg",
            "connections": "s9p1,s11p4",
            "rotation": ""
          },
          "s9p10": {
            "file": "09-section-dark-company/09-section-10.jpg",
            "connections": "s9p1,s9p7",
            "rotation": ""
          },
          "s9p11": {
            "file": "09-section-dark-company/09-section-11.jpg",
            "connections": "s9p2,s9p15",
            "rotation": ""
          },
          "s9p12": {
            "file": "09-section-dark-company/09-section-12.jpg",
            "connections": "s9p2,s9p7",
            "rotation": ""
          },
          "s9p13": {
            "file": "09-section-dark-company/09-section-13.jpg",
            "connections": "s9p4,s9p6",
            "rotation": ""
          },
          "s9p14": {
            "file": "09-section-dark-company/09-section-14.jpg",
            "connections": "s9p8,s11p7",
            "rotation": ""
          },
          "s9p15": {
            "file": "09-section-dark-company/09-section-15.jpg",
            "connections": "s9p4,s9p11",
            "rotation": ""
          },
          "s10p1": {
            "file": "10-section-dark-company/10-section-01.jpg",
            "connections": "s10p12,s10p18",
            "rotation": ""
          },
          "s10p2": {
            "file": "10-section-dark-company/10-section-02.jpg",
            "connections": "s10p7,s10p8,s10p14",
            "rotation": ""
          },
          "s10p3": {
            "file": "10-section-dark-company/10-section-03.jpg",
            "connections": "s10p9,s10p10",
            "rotation": ""
          },
          "s10p4": {
            "file": "10-section-dark-company/10-section-04.jpg",
            "connections": "s10p13,s10p15,s10p18",
            "rotation": ""
          },
          "s10p5": {
            "file": "10-section-dark-company/10-section-05.jpg",
            "connections": "s10p11,s10p12",
            "rotation": ""
          },
          "s10p6": {
            "file": "10-section-dark-company/10-section-06.jpg",
            "connections": "s10p17",
            "rotation": ""
          },
          "s10p7": {
            "file": "10-section-dark-company/10-section-07.jpg",
            "connections": "s10p2,s10p13",
            "rotation": ""
          },
          "s10p8": {
            "file": "10-section-dark-company/10-section-08.jpg",
            "connections": "s6p3,s10p2",
            "rotation": ""
          },
          "s10p9": {
            "file": "10-section-dark-company/10-section-09.jpg",
            "connections": "s10p3,s10p15,s12p1",
            "rotation": ""
          },
          "s10p10": {
            "file": "10-section-dark-company/10-section-10.jpg",
            "connections": "s7p6,s10p3",
            "rotation": ""
          },
          "s10p11": {
            "file": "10-section-dark-company/10-section-11.jpg",
            "connections": "s10p5",
            "rotation": ""
          },
          "s10p12": {
            "file": "10-section-dark-company/10-section-12.jpg",
            "connections": "s10p1,s10p5,s10p17",
            "rotation": ""
          },
          "s10p13": {
            "file": "10-section-dark-company/10-section-13.jpg",
            "connections": "s1p5,s10p4,s10p7,s13p6",
            "rotation": ""
          },
          "s10p14": {
            "file": "10-section-dark-company/10-section-14.jpg",
            "connections": "s10p2,s10p16",
            "rotation": ""
          },
          "s10p15": {
            "file": "10-section-dark-company/10-section-15.jpg",
            "connections": "s10p4,s10p9",
            "rotation": ""
          },
          "s10p16": {
            "file": "10-section-dark-company/10-section-16.jpg",
            "connections": "s10p14,s13p8",
            "rotation": ""
          },
          "s10p17": {
            "file": "10-section-dark-company/10-section-17.jpg",
            "connections": "s10p6,s10p12",
            "rotation": ""
          },
          "s10p18": {
            "file": "10-section-dark-company/10-section-18.jpg",
            "connections": "s10p1,s10p4",
            "rotation": ""
          },
          "s11p1": {
            "file": "11-section-dark-company/11-section-01.jpg",
            "connections": "s11p7,s11p11",
            "rotation": ""
          },
          "s11p2": {
            "file": "11-section-dark-company/11-section-02.jpg",
            "connections": "s11p10,s11p11",
            "rotation": ""
          },
          "s11p3": {
            "file": "11-section-dark-company/11-section-03.jpg",
            "connections": "s4p9,s11p12",
            "rotation": ""
          },
          "s11p4": {
            "file": "11-section-dark-company/11-section-04.jpg",
            "connections": "s9p9,s11p10",
            "rotation": ""
          },
          "s11p5": {
            "file": "11-section-dark-company/11-section-05.jpg",
            "connections": "s11p8,s11p9",
            "rotation": ""
          },
          "s11p6": {
            "file": "11-section-dark-company/11-section-06.jpg",
            "connections": "s11p9",
            "rotation": ""
          },
          "s11p7": {
            "file": "11-section-dark-company/11-section-07.jpg",
            "connections": "s9p14,s11p1",
            "rotation": ""
          },
          "s11p8": {
            "file": "11-section-dark-company/11-section-08.jpg",
            "connections": "s11p5",
            "rotation": ""
          },
          "s11p9": {
            "file": "11-section-dark-company/11-section-09.jpg",
            "connections": "s9p7,s11p5,s11p6,s11p12",
            "rotation": ""
          },
          "s11p10": {
            "file": "11-section-dark-company/11-section-10.jpg",
            "connections": "s11p2,s11p4",
            "rotation": ""
          },
          "s11p11": {
            "file": "11-section-dark-company/11-section-11.jpg",
            "connections": "s11p1,s11p2",
            "rotation": ""
          },
          "s11p12": {
            "file": "11-section-dark-company/11-section-12.jpg",
            "connections": "s11p3,s11p9",
            "rotation": ""
          },
          "s12p1": {
            "file": "12-section-dark-company/12-section-01.jpg",
            "connections": "s10p9,s12p3",
            "rotation": ""
          },
          "s12p2": {
            "file": "12-section-dark-company/12-section-02.jpg",
            "connections": "s12p3,s12p4",
            "rotation": ""
          },
          "s12p3": {
            "file": "12-section-dark-company/12-section-03.jpg",
            "connections": "s12p1,s12p2",
            "rotation": ""
          },
          "s12p4": {
            "file": "12-section-dark-company/12-section-04.jpg",
            "connections": "s12p2",
            "rotation": ""
          },
          "s13p1": {
            "file": "13-section-dark-company/13-section-01.jpg",
            "connections": "s13p5,s13p6",
            "rotation": ""
          },
          "s13p2": {
            "file": "13-section-dark-company/13-section-02.jpg",
            "connections": "s13p7,s13p9",
            "rotation": ""
          },
          "s13p3": {
            "file": "13-section-dark-company/13-section-03.jpg",
            "connections": "s13p6,s13p7",
            "rotation": ""
          },
          "s13p4": {
            "file": "13-section-dark-company/13-section-04.jpg",
            "connections": "s13p9",
            "rotation": ""
          },
          "s13p5": {
            "file": "13-section-dark-company/13-section-05.jpg",
            "connections": "s13p1,s13p8,s13p10",
            "rotation": ""
          },
          "s13p6": {
            "file": "13-section-dark-company/13-section-06.jpg",
            "connections": "s10p13,s13p1,s13p3",
            "rotation": ""
          },
          "s13p7": {
            "file": "13-section-dark-company/13-section-07.jpg",
            "connections": "s13p2,s13p3",
            "rotation": ""
          },
          "s13p8": {
            "file": "13-section-dark-company/13-section-08.jpg",
            "connections": "s10p16,s13p5,s13p10",
            "rotation": ""
          },
          "s13p9": {
            "file": "13-section-dark-company/13-section-09.jpg",
            "connections": "s13p2,s13p4",
            "rotation": ""
          },
          "s13p10": {
            "file": "13-section-dark-company/13-section-10.jpg",
            "connections": "s13p5,s13p8",
            "rotation": ""
          }
        }
      }
    },
    "help": {
      "h1": {
        "name": "Co-Op Game Guide",
        "file": "coop-game-guide.png",
        "rotation": ""
      },
      "h2": {
        "name": "Dark Company Guide 1",
        "file": "dark-company-guide-1.jpg",
        "rotation": ""
      },
      "h3": {
        "name": "Dark Company Guide 2",
        "file": "dark-company-guide-2.jpg",
        "rotation": ""
      }
    }
  }
};
