export interface OpeningInfo {
  id: string;
  name: string;
  ecoCode: string;
  description: string;
  firstMoves: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  centuries: string[];
  famousGMs: {
    name: string;
    century: string;
    style: string;
  }[];
  keyIdeas: string[];
  history: string;
  sampleMoves: string[];
  moveExplanations?: Record<number, string>;
  variations?: {
    name: string;
    moves: string[];
    description: string;
  }[];
  family?: string;
  keyMoments?: { moveIndex: number; comment: string }[];
}

export const openingsLibrary: OpeningInfo[] = [
  // Classical Openings
  {
    id: "italian-game",
    name: "Italian Game",
    ecoCode: "C50-C59",
    description: "One of the oldest and most popular chess openings, focusing on rapid development and control of the center.",
    firstMoves: "1.e4 e5 2.Nf3 Nc6 3.Bc4",
    difficulty: "Beginner",
    centuries: ["16th", "17th", "18th", "19th", "20th", "21st"],
    famousGMs: [
      { name: "Ruy López", century: "16th", style: "Pioneer of Italian Game" },
      { name: "Paul Morphy", century: "19th", style: "Attacking style" },
      { name: "Bobby Fischer", century: "20th", style: "Positional mastery" },
      { name: "Garry Kasparov", century: "20th-21st", style: "Aggressive interpretation" }
    ],
    keyIdeas: [
      "Rapid piece development",
      "Control of central e5 square",
      "Kingside attacking chances",
      "Clear pawn structure"
    ],
    history: "Evolved from the oldest recorded openings, the Italian Game emphasizes piece activity and strategic understanding. Played since the 16th century and remains popular today.",
    sampleMoves: ["e4", "e5", "Nf3", "Nc6", "Bc4", "Bc5", "c3", "Nf6", "d4", "exd4"]
  },
  {
    id: "ruy-lopez",
    name: "Ruy López (Spanish Opening)",
    ecoCode: "C60-C99",
    description: "The most popular opening at all levels, named after 16th-century Spanish priest Ruy López de Sigura.",
    firstMoves: "1.e4 e5 2.Nf3 Nc6 3.Bb5",
    difficulty: "Intermediate",
    centuries: ["16th", "17th", "18th", "19th", "20th", "21st"],
    famousGMs: [
      { name: "Ruy López", century: "16th", style: "Original theoretician" },
      { name: "Wilhelm Steinitz", century: "19th", style: "Positional foundation" },
      { name: "Anatoly Karpov", century: "20th", style: "Positional mastery" },
      { name: "Viswanathan Anand", century: "21st", style: "Modern understanding" },
      { name: "Magnus Carlsen", century: "21st", style: "Current world champion" }
    ],
    keyIdeas: [
      "Pin on the c6 knight",
      "Strategic positioning",
      "Understanding pawn structures",
      "Long-term planning",
      "Multiple sub-variations"
    ],
    history: "Described in 1561, the Ruy López remains the #1 choice for 1.e4 players. Thousands of books written about it. Every strong player must know it.",
    sampleMoves: ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "Nf6", "O-O", "Be7"]
  },
  {
    id: "sicilian-defense",
    name: "Sicilian Defense",
    ecoCode: "B20-B99",
    description: "Black's most popular and fighting response to 1.e4, giving the best practical chances for a win.",
    firstMoves: "1.e4 c5",
    difficulty: "Intermediate",
    centuries: ["16th", "19th", "20th", "21st"],
    famousGMs: [
      { name: "Pietro Carrera", century: "16th", style: "Early theorist" },
      { name: "Adolf Anderssen", century: "19th", style: "Romantic era" },
      { name: "Mikhail Tal", century: "20th", style: "Tactical brilliance" },
      { name: "Bobby Fischer", century: "20th", style: "Sharp preparation" },
      { name: "Garry Kasparov", century: "20th-21st", style: "Deep preparation" },
      { name: "Vishy Anand", century: "21st", style: "All variations" }
    ],
    keyIdeas: [
      "Counter-attacking spirit",
      "Asymmetrical pawn structure",
      "Dynamic piece play",
      "Queenside expansion",
      "Immediate counterplay"
    ],
    history: "Named after a 16th-century Italian player, the Sicilian became Black's most popular defense in the 20th century. Produces the sharpest and most fighting games.",
    sampleMoves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6"]
  },
  {
    id: "french-defense",
    name: "French Defense",
    ecoCode: "C00-C19",
    description: "A solid, strategic opening where Black plays e6 to control the center with a pawn on d5.",
    firstMoves: "1.e4 e6",
    difficulty: "Intermediate",
    centuries: ["19th", "20th", "21st"],
    famousGMs: [
      { name: "François-André Danican Philidor", century: "18th", style: "Defense specialist" },
      { name: "Wilhelm Steinitz", century: "19th", style: "Strategic mastery" },
      { name: "Anatoly Karpov", century: "20th", style: "Positional squeezing" },
      { name: "David Petrosian", century: "20th", style: "Prophylactic style" }
    ],
    keyIdeas: [
      "Strong pawn on d5",
      "Dark-squared control",
      "Solid pawn structure",
      "Counterplay on the queenside",
      "Endgame advantages"
    ],
    history: "Named after French players who analyzed it in the 19th century. A favorite of positional masters who prefer slow maneuvering over tactical fireworks.",
    sampleMoves: ["e4", "e6", "d4", "d5", "Nc3", "Nf6", "Bg5", "Be7", "e5", "Nfd7"]
  },
  {
    id: "caro-kann",
    name: "Caro-Kann Defense",
    ecoCode: "B10-B19",
    description: "A solid opening for Black with pawns on c6 and d5, providing excellent structural integrity.",
    firstMoves: "1.e4 c6",
    difficulty: "Intermediate",
    centuries: ["19th", "20th", "21st"],
    famousGMs: [
      { name: "Horatio Caro", century: "19th", style: "Opening theorist" },
      { name: "Marcus Kann", century: "19th", style: "Co-discoverer" },
      { name: "José Raúl Capablanca", century: "20th", style: "Positional mastery" },
      { name: "Anatoly Karpov", century: "20th", style: "Solid play" },
      { name: "Vladimir Petrosian", century: "20th", style: "Strategic approach" }
    ],
    keyIdeas: [
      "Pawn duo c6-d5",
      "Solid structure",
      "Prophylactic defense",
      "Slow maneuvering",
      "Endgame superiority"
    ],
    history: "Analyzed by Caro and Kann in the 19th century, this opening gained popularity with Capablanca and remains a weapon of world champions.",
    sampleMoves: ["e4", "c6", "d4", "d5", "Nc3", "Nf6", "Nf3", "a6", "Ne5", "Nfd7"]
  },
  {
    id: "scandinavian",
    name: "Scandinavian Defense",
    ecoCode: "B01",
    description: "An aggressive counter-opening where Black immediately challenges the e4 pawn with d5.",
    firstMoves: "1.e4 d5",
    difficulty: "Intermediate",
    centuries: ["19th", "20th", "21st"],
    famousGMs: [
      { name: "Wilhelm Steinitz", century: "19th", style: "Experimental" },
      { name: "Bent Larsen", century: "20th", style: "Innovative approach" },
      { name: "Garry Kasparov", century: "20th-21st", style: "Aggressive tactics" }
    ],
    keyIdeas: [
      "Immediate center challenge",
      "Rapid development",
      "Aggressive counterplay",
      "Queen activity early",
      "Unbalanced positions"
    ],
    history: "Historically played by Scandinavian masters, this opening fell out of favor but has been revived as players discovered dynamic resources.",
    sampleMoves: ["e4", "d5", "exd5", "Qxd5", "Nc3", "Qa5", "d4", "c6", "Nf3", "Nf6"]
  },
  {
    id: "queens-gambit",
    name: "Queen's Gambit",
    ecoCode: "D04-D69",
    description: "White sacrifices a pawn for rapid development and spatial advantage. One of the most respected openings.",
    firstMoves: "1.d4 d5 2.c4",
    difficulty: "Intermediate",
    centuries: ["19th", "20th", "21st"],
    famousGMs: [
      { name: "David Harrwitz", century: "19th", style: "Early theorist" },
      { name: "Siegbert Tarrasch", century: "19th-20th", style: "Positional guru" },
      { name: "Anatoly Karpov", century: "20th", style: "Positional mastery" },
      { name: "David Petrosian", century: "20th", style: "Prophylactic style" },
      { name: "Garry Kasparov", century: "20th-21st", style: "Deep preparation" }
    ],
    keyIdeas: [
      "Central control with d4 and c4",
      "Rapid piece development",
      "Long-term compensation for pawn",
      "Strategic maneuvering",
      "Superior endgame chances"
    ],
    history: "A cornerstone of opening theory since the 19th century. Every world champion has Queen's Gambit in their repertoire. The opening that defeated the Dragon's setup.",
    sampleMoves: ["d4", "d5", "c4", "dxc4", "Nf3", "Nf6", "e3", "e6", "Bxc4", "c5"]
  },
  {
    id: "kings-indian",
    name: "King's Indian Defense",
    ecoCode: "E60-E99",
    description: "A hypermodern defense where Black allows White a strong d4 pawn before launching a kingside counterattack.",
    firstMoves: "1.d4 Nf6 2.c4 g6 3.Nc3 Bg7",
    difficulty: "Advanced",
    centuries: ["20th", "21st"],
    famousGMs: [
      { name: "Aron Nimzowitsch", century: "20th", style: "Hypermodern pioneer" },
      { name: "David Bronstein", century: "20th", style: "Creative attacking" },
      { name: "Bobby Fischer", century: "20th", style: "Precise calculation" },
      { name: "Garry Kasparov", century: "20th-21st", style: "Aggressive play" },
      { name: "Giri Anish", century: "21st", style: "Modern preparation" }
    ],
    keyIdeas: [
      "Hypermodern setup",
      "Fianchetto of kingside bishop",
      "Flexible piece placement",
      "Kingside pawn storm",
      "Dynamic counterplay"
    ],
    history: "Developed by hypermodern masters in the early 20th century as a revolutionary way to play against 1.d4. Remains popular for its fighting nature.",
    sampleMoves: ["d4", "Nf6", "c4", "g6", "Nc3", "Bg7", "e4", "d6", "f3", "O-O"]
  },
  {
    id: "slav-defense",
    name: "Slav Defense",
    ecoCode: "D10-D19",
    description: "A solid defense to Queen's Gambit with pawns on c6 and d5, combining strength with counter-chances.",
    firstMoves: "1.d4 d5 2.c4 c6",
    difficulty: "Advanced",
    centuries: ["19th", "20th", "21st"],
    famousGMs: [
      { name: "Siegbert Tarrasch", century: "19th-20th", style: "Positional mastery" },
      { name: "Mikhail Botvinnik", century: "20th", style: "Scientific approach" },
      { name: "Anatoly Karpov", century: "20th", style: "Positional squeezing" },
      { name: "Vladimir Kramnik", century: "20th-21st", style: "Solid structures" },
      { name: "Sergei Karjakin", century: "21st", style: "Modern understanding" }
    ],
    keyIdeas: [
      "Support d5 with c6",
      "Flexibility in pawn structure",
      "Multiple piece placement options",
      "Queenside counterplay",
      "Endgame advantages"
    ],
    history: "Favored by Slavic players and later by world champions seeking a reliable defense. One of the most difficult to crack.",
    sampleMoves: ["d4", "d5", "c4", "c6", "Nf3", "Nf6", "Nc3", "dxc4", "a4", "Bg4"]
  },
  {
    id: "nimzo-indian",
    name: "Nimzo-Indian Defense",
    ecoCode: "E20-E59",
    description: "Black pins the knight and contests the center strategically. A flexible and sophisticated opening.",
    firstMoves: "1.d4 Nf6 2.c4 e6 3.Nc3 Bb4",
    difficulty: "Advanced",
    centuries: ["20th", "21st"],
    famousGMs: [
      { name: "Aron Nimzowitsch", century: "20th", style: "Hypermodern creator" },
      { name: "Mikhail Botvinnik", century: "20th", style: "Scientific analysis" },
      { name: "Mikhail Tal", century: "20th", style: "Dynamic play" },
      { name: "Garry Kasparov", century: "20th-21st", style: "Aggressive interpretation" },
      { name: "Levon Aronian", century: "21st", style: "Creative approach" }
    ],
    keyIdeas: [
      "Immediate pin on the knight",
      "Strategic central control",
      "Flexibility in piece placement",
      "Counterplay on multiple fronts",
      "Sophisticated maneuvering"
    ],
    history: "Created by Aron Nimzowitsch in the early 20th century as a weapon against the Queen's Gambit. Revolutionized chess understanding with hypermodern ideas.",
    sampleMoves: ["d4", "Nf6", "c4", "e6", "Nc3", "Bb4", "Qc2", "d5", "cxd5", "exd5"]
  },
  {
    id: "english-opening",
    name: "English Opening",
    ecoCode: "A10-A39",
    description: "A subtle and flexible opening starting with 1.c4, giving White multiple strategic plans.",
    firstMoves: "1.c4",
    difficulty: "Intermediate",
    centuries: ["19th", "20th", "21st"],
    famousGMs: [
      { name: "Henry Bird", century: "19th", style: "Positional pioneer" },
      { name: "Richard Réti", century: "20th", style: "Hypermodern master" },
      { name: "Anatoly Karpov", century: "20th", style: "Strategic mastery" },
      { name: "Garry Kasparov", century: "20th-21st", style: "Aggressive play" },
      { name: "Vladimir Kramnik", century: "20th-21st", style: "Sophisticated approach" }
    ],
    keyIdeas: [
      "Flexible setup",
      "Control of d5 square",
      "Multiple plans available",
      "Solid positional basis",
      "Avoids main theory heavy lines"
    ],
    history: "Named after a 19th-century English opening. Refined by Réti in the 20th century. Favorite of world champions seeking positional battles.",
    sampleMoves: ["c4", "e5", "Nc3", "Nf6", "Nf3", "Nc6", "d4", "exd4", "Nxd4", "Bb4"]
  },
  {
    id: "bird-opening",
    name: "Bird's Opening",
    ecoCode: "A02-A03",
    description: "White plays 1.f4 to control the e5 square and prepare central play with d4.",
    firstMoves: "1.f4",
    difficulty: "Intermediate",
    centuries: ["19th", "20th", "21st"],
    famousGMs: [
      { name: "Henry Bird", century: "19th", style: "Opening inventor" },
      { name: "David Bronstein", century: "20th", style: "Creative attacking" },
      { name: "Bobby Fischer", century: "20th", style: "Practical weapon" },
      { name: "Bent Larsen", century: "20th", style: "Unconventional genius" }
    ],
    keyIdeas: [
      "Control of e5 square",
      "Kingside pawn tension",
      "Flexible piece development",
      "Avoids main line theory",
      "Practical winning chances"
    ],
    history: "Invented by Henry Bird in the 19th century, this offbeat opening has been used successfully by many strong players seeking to avoid main line theory.",
    sampleMoves: ["f4", "d5", "Nf3", "Nf6", "e3", "c5", "Bb5", "Nc6", "O-O", "cxb5"]
  },
  {
    id: "petroff-defense",
    name: "Petroff Defense (Russian Game)",
    ecoCode: "C42-C43",
    description: "A symmetrical, solid defense that often leads to quiet positions with equal chances.",
    firstMoves: "1.e4 e5 2.Nf3 Nf6",
    difficulty: "Intermediate",
    centuries: ["19th", "20th", "21st"],
    famousGMs: [
      { name: "Alexander Petrov", century: "19th", style: "Russian master" },
      { name: "Mikhail Tal", century: "20th", style: "Tactical ideas" },
      { name: "Bobby Fischer", century: "20th", style: "Solid play" },
      { name: "Vladimir Petrosian", century: "20th", style: "Strategic understanding" },
      { name: "Fabiano Caruana", century: "21st", style: "Modern preparation" }
    ],
    keyIdeas: [
      "Symmetrical pawn structure",
      "Rapid development",
      "Counter-attacking chances",
      "Solid fortress setup",
      "Sharp tactical variations"
    ],
    history: "Named after Alexander Petrov, a 19th-century Russian master. Became popular as a drawing weapon and remains a choice of world champions.",
    sampleMoves: ["e4", "e5", "Nf3", "Nf6", "Nxe5", "d6", "Nf3", "Nxe4", "d4", "d5"]
  },
  {
    id: "alekhine-defense",
    name: "Alekhine's Defense",
    ecoCode: "B02-B03",
    description: "An aggressive, provocative defense where Black invites White's pawns forward before counterattacking.",
    firstMoves: "1.e4 Nf6",
    difficulty: "Advanced",
    centuries: ["20th", "21st"],
    famousGMs: [
      { name: "Alexander Alekhine", century: "20th", style: "Opening creator" },
      { name: "Bent Larsen", century: "20th", style: "Provocative play" },
      { name: "Bobby Fischer", century: "20th", style: "Tactical mastery" },
      { name: "Garry Kasparov", century: "20th-21st", style: "Sharp tactics" }
    ],
    keyIdeas: [
      "Provoke White's pawns",
      "Counterattack in center",
      "Knight maneuvers",
      "Dynamic imbalance",
      "Tactical complications"
    ],
    history: "Created by Alexander Alekhine, world champion, as a way to provoke White into overextension. Requires precise calculation but offers excellent practical chances.",
    sampleMoves: ["e4", "Nf6", "e5", "Nd5", "d4", "d6", "c4", "Nb6", "exd6", "Qxd6"]
  }
];

export function getOpeningById(id: string): OpeningInfo | undefined {
  return openingsLibrary.find(opening => opening.id === id);
}

export function searchOpenings(query: string): OpeningInfo[] {
  const lowerQuery = query.toLowerCase();
  return openingsLibrary.filter(opening =>
    opening.name.toLowerCase().includes(lowerQuery) ||
    opening.ecoCode.toLowerCase().includes(lowerQuery) ||
    opening.description.toLowerCase().includes(lowerQuery) ||
    opening.famousGMs.some(gm => gm.name.toLowerCase().includes(lowerQuery))
  );
}

export function getOpeningsByDifficulty(difficulty: string): OpeningInfo[] {
  return openingsLibrary.filter(opening => opening.difficulty === difficulty);
}

export function getOpeningsByCentury(century: string): OpeningInfo[] {
  return openingsLibrary.filter(opening => opening.centuries.includes(century));
}
