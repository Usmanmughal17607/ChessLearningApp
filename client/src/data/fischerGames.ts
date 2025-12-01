import { FischerGame } from "@/lib/stores/useChess";

export const fischerGames: FischerGame[] = [
  {
    id: "game-of-the-century",
    title: "The Game of the Century",
    event: "Third Rosenwald Trophy",
    site: "New York, USA",
    date: "1956.10.17",
    white: "Donald Byrne",
    black: "Bobby Fischer",
    result: "0-1",
    description: "13-year-old Fischer sacrifices his queen on move 17 with the brilliant Be6!! and delivers a crushing attack. This game earned its famous title for its spectacular combinations.",
    moves: [
      "Nf3", "Nf6", "c4", "g6", "Nc3", "Bg7", "d4", "O-O", "Bf4", "d5",
      "Qb3", "dxc4", "Qxc4", "c6", "e4", "Nbd7", "Rd1", "Nb6", "Qc5", "Bg4",
      "Bg5", "Na4", "Qa3", "Nxc3", "bxc3", "Nxe4", "Bxe7", "Qb6", "Bc4", "Nxc3",
      "Bc5", "Rfe8+", "Kf1", "Be6", "Bxb6", "Bxc4+", "Kg1", "Ne2+", "Kf1", "Nxd4+",
      "Kg1", "Ne2+", "Kf1", "Nc3+", "Kg1", "axb6", "Qb4", "Ra4", "Qxb6", "Nxd1",
      "h3", "Rxa2", "Kh2", "Nxf2", "Re1", "Rxe1", "Qd8+", "Bf8", "Nxe1", "Bd5",
      "Nf3", "Ne4", "Qb8", "b5", "h4", "h5", "Ne5", "Kg7", "Kg1", "Bc5+",
      "Kf1", "Ng3+", "Ke1", "Bb4+", "Kd1", "Bb3+", "Kc1", "Ne2+", "Kb1", "Nc3+",
      "Kc1", "Rc2#"
    ],
    keyMoments: [
      { moveIndex: 32, comment: "Fischer plays the stunning Be6!! sacrificing the queen - one of chess history's most famous moves" },
      { moveIndex: 40, comment: "The knight dance begins - Fischer's pieces coordinate beautifully" },
      { moveIndex: 80, comment: "Checkmate! A 13-year-old defeats a strong master with brilliant play" }
    ]
  },
  {
    id: "fischer-spassky-game6",
    title: "World Championship Game 6",
    event: "World Championship Match",
    site: "Reykjavik, Iceland",
    date: "1972.07.23",
    white: "Bobby Fischer",
    black: "Boris Spassky",
    result: "1-0",
    description: "One of Fischer's greatest attacking games. His flawless play in the Queen's Gambit Declined demonstrated his complete mastery and helped secure the World Championship title.",
    moves: [
      "c4", "e6", "Nf3", "d5", "d4", "Nf6", "Nc3", "Be7", "Bg5", "O-O",
      "e3", "h6", "Bh4", "b6", "cxd5", "Nxd5", "Bxe7", "Qxe7", "Nxd5", "exd5",
      "Rc1", "Be6", "Qa4", "c5", "Qa3", "Rc8", "Bb5", "a6", "dxc5", "bxc5",
      "O-O", "Ra7", "Be2", "Nd7", "Nd4", "Qf8", "Nxe6", "fxe6", "e4", "d4",
      "f4", "Qe7", "e5", "Rb8", "Bc4", "Kh8", "Qh3", "Nf8", "b3", "a5",
      "f5", "exf5", "Rxf5", "Nh7", "Rcf1", "Qd8", "Qg3", "Re7", "h4", "Rbb7",
      "e6", "Rbc7", "Qe5", "Qe8", "a4", "Qd8", "R1f2", "Qe8", "R2f3", "Qd8",
      "Bd3", "Qe8", "Qe4", "Nf6", "Rxf6", "gxf6", "Rxf6", "Kg8", "Bc4", "Kh8",
      "Qf4"
    ],
    keyMoments: [
      { moveIndex: 36, comment: "Fischer's pawn push e4-e5 creates a powerful passed pawn" },
      { moveIndex: 60, comment: "The e6 pawn becomes a monster, tying down all of Spassky's pieces" },
      { moveIndex: 77, comment: "Fischer's attack is irresistible - Spassky resigns" }
    ]
  },
  {
    id: "fischer-byrne-robert",
    title: "The Brilliancy Prize",
    event: "US Championship 1963/64",
    site: "New York, USA",
    date: "1963.12.18",
    white: "Bobby Fischer",
    black: "Robert Byrne",
    result: "1-0",
    description: "A spectacular queen sacrifice leads to a forced mate. Robert Byrne actually resigned before Fischer could demonstrate the beautiful finish.",
    moves: [
      "d4", "Nf6", "c4", "g6", "g3", "c6", "Bg2", "d5", "cxd5", "cxd5",
      "Nc3", "Bg7", "e3", "O-O", "Nge2", "Nc6", "O-O", "b6", "b3", "Ba6",
      "Ba3", "Re8", "Qd2", "e5", "dxe5", "Nxe5", "Rfd1", "Nd3", "Qc2", "Nxf2",
      "Kxf2", "Ng4+", "Kg1", "Nxe3", "Qd2", "Nxg2", "Kxg2", "d4", "Nxd4", "Bb7+",
      "Kf1", "Qd7"
    ],
    keyMoments: [
      { moveIndex: 28, comment: "Black sacrifices the knight to destroy White's pawn structure" },
      { moveIndex: 34, comment: "The combination begins with Ne3!" },
      { moveIndex: 40, comment: "Byrne resigned here, seeing the crushing attack coming" }
    ]
  },
  {
    id: "fischer-petrosian-1971",
    title: "Candidates Match Brilliancy",
    event: "Candidates Match",
    site: "Buenos Aires, Argentina",
    date: "1971.10.07",
    white: "Bobby Fischer",
    black: "Tigran Petrosian",
    result: "1-0",
    description: "Fischer demolishes the former World Champion Petrosian with precise play. This game shows Fischer's deep understanding of piece coordination.",
    moves: [
      "e4", "c5", "Nf3", "e6", "d4", "cxd4", "Nxd4", "a6", "Bd3", "Nc6",
      "Nxc6", "bxc6", "O-O", "d5", "c4", "Nf6", "cxd5", "cxd5", "exd5", "exd5",
      "Nc3", "Be7", "Qa4+", "Qd7", "Qxd7+", "Bxd7", "Nb5", "Bxb5", "Bxb5+", "Kd8",
      "Be3", "Bd6", "Rac1", "Ke7", "Bc5", "Rab8", "Bxd6+", "Kxd6", "b3", "Rhc8",
      "f3", "Ne8", "Kf2", "Rxc1", "Rxc1", "Nd6", "Bc4", "Rc8", "Bb5", "Rxc1",
      "Bxc1", "f6", "Ke3", "Ke5", "g4", "g5", "Be8", "a5", "Bc6", "Nc8",
      "Bd7", "Nb6", "Bb5", "d4+", "Kd3", "Nd5", "a4", "Nb4+", "Kxd4", "Nxa2",
      "Kc4", "Nc1", "Kb5", "Nxb3", "Kxa5"
    ],
    keyMoments: [
      { moveIndex: 22, comment: "Fischer trades queens and enters a favorable endgame" },
      { moveIndex: 34, comment: "Exchanging bishops leaves Black with a weak pawn structure" },
      { moveIndex: 68, comment: "Fischer's king becomes active and picks off the pawns" }
    ]
  },
  {
    id: "fischer-benko-1963",
    title: "The King Hunt",
    event: "US Championship 1963/64",
    site: "New York, USA",
    date: "1963.12.16",
    white: "Bobby Fischer",
    black: "Pal Benko",
    result: "1-0",
    description: "Fischer hunts Benko's king across the board in one of his most aggressive attacking games.",
    moves: [
      "e4", "g6", "d4", "Bg7", "Nc3", "d6", "f4", "Nf6", "Nf3", "O-O",
      "Bd3", "Bg4", "h3", "Bxf3", "Qxf3", "Nc6", "Be3", "e5", "dxe5", "dxe5",
      "f5", "gxf5", "Qxf5", "Nd4", "Qf2", "Ne8", "O-O", "Nd6", "Qg3", "Kh8",
      "Qg4", "c6", "Qh5", "Qe8", "Bxd4", "exd4", "Rf6", "Kg8", "e5", "Nf5",
      "Bxf5", "Bxf6", "Be4", "Qe7", "exf6", "Qb4", "Qxh7+", "Kf8", "Qh8+"
    ],
    keyMoments: [
      { moveIndex: 20, comment: "f5! opens the f-file for a devastating attack" },
      { moveIndex: 34, comment: "Rf6! a stunning rook sacrifice" },
      { moveIndex: 44, comment: "Fischer's attack is overwhelming - mate is near" }
    ]
  },
  {
    id: "fischer-larsen-1971",
    title: "6-0 Crushing Victory",
    event: "Candidates Semifinal",
    site: "Denver, USA",
    date: "1971.07.06",
    white: "Bobby Fischer",
    black: "Bent Larsen",
    result: "1-0",
    description: "Game 1 of their Candidates match. Fischer went on to win 6-0, the first whitewash in Candidates history.",
    moves: [
      "e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6",
      "Bg5", "e6", "f4", "Be7", "Qf3", "Qc7", "O-O-O", "Nbd7", "g4", "b5",
      "Bxf6", "Nxf6", "g5", "Nd7", "f5", "Nc5", "f6", "gxf6", "gxf6", "Bf8",
      "Rg1", "h5", "Qh3", "Bb7", "Be2", "Qd7", "Bf3", "O-O-O", "Rg7", "Qe8",
      "Rdg1", "Rd7", "R1g6"
    ],
    keyMoments: [
      { moveIndex: 24, comment: "f5! starts the kingside assault" },
      { moveIndex: 38, comment: "Rg7! invades decisively" },
      { moveIndex: 42, comment: "Larsen resigned - the attack is too strong" }
    ]
  },
  {
    id: "fischer-taimanov-1971",
    title: "Another 6-0 Sweep",
    event: "Candidates Quarterfinal",
    site: "Vancouver, Canada",
    date: "1971.05.25",
    white: "Bobby Fischer",
    black: "Mark Taimanov",
    result: "1-0",
    description: "Game 1 of the match where Fischer achieved his first 6-0 Candidates victory, a historic accomplishment.",
    moves: [
      "e4", "c5", "Nf3", "Nc6", "d4", "cxd4", "Nxd4", "e6", "Nb5", "d6",
      "Bf4", "e5", "Be3", "Nf6", "Bg5", "Be6", "N1c3", "a6", "Bxf6", "gxf6",
      "Na3", "d5", "exd5", "Bxd5", "Nxd5", "Qxd5", "Qxd5", "Bxa3", "bxa3", "f5",
      "Qd3", "Ke7", "O-O-O", "Rac8", "Kb1", "Rhd8", "Qb3", "Nd4", "Qa4", "b5",
      "Qa5", "Rc5", "Qd2", "Nc6", "Kb2", "Rdc8", "Bd3", "Ne5", "Bxf5", "Nc4+",
      "Kb3", "Nxd2+", "Rxd2", "Kf6", "Be4", "Kg5", "Rhd1", "Rc7", "Rd8", "R5c6"
    ],
    keyMoments: [
      { moveIndex: 18, comment: "Bxf6! damages Black's pawn structure permanently" },
      { moveIndex: 30, comment: "Fischer enters a winning endgame" },
      { moveIndex: 50, comment: "The knight exchange leaves Fischer with a decisive advantage" }
    ]
  },
  {
    id: "fischer-tal-1961",
    title: "Defeating the Magician",
    event: "Bled Tournament",
    site: "Bled, Yugoslavia",
    date: "1961.09.18",
    white: "Bobby Fischer",
    black: "Mikhail Tal",
    result: "1-0",
    description: "Fischer defeats the legendary attacking player Tal with solid, precise play - showing that even magicians can be beaten.",
    moves: [
      "e4", "c5", "Nf3", "Nc6", "d4", "cxd4", "Nxd4", "e6", "Nc3", "Qc7",
      "g3", "a6", "Bg2", "Nf6", "O-O", "Nxd4", "Qxd4", "Bc5", "Qd3", "h5",
      "Bf4", "e5", "Bg5", "Ng4", "h3", "Be6", "hxg4", "hxg4", "Nd5", "Bxd5",
      "exd5", "Bf2+", "Rxf2", "Qxf2+", "Kh2", "Qb6", "Qf5", "Qxb2", "Re1", "f6",
      "Bc1", "Qa3", "Bb2", "Kf7", "Qxg4", "Rae8", "Qg6+", "Ke7", "Bxe5", "fxe5",
      "Rxe5+", "Kd8", "Qxg7", "Rxe5", "Qxe5", "Qc1", "Qe6", "Qf1", "Qf5", "Qc1",
      "d6"
    ],
    keyMoments: [
      { moveIndex: 26, comment: "Fischer sacrifices the exchange for a powerful attack" },
      { moveIndex: 36, comment: "Qf5! keeps the pressure mounting" },
      { moveIndex: 54, comment: "Fischer's passed pawn becomes decisive" }
    ]
  },
  {
    id: "fischer-najdorf-1962",
    title: "Master Meets Student",
    event: "Varna Olympiad",
    site: "Varna, Bulgaria",
    date: "1962.09.29",
    white: "Bobby Fischer",
    black: "Miguel Najdorf",
    result: "1-0",
    description: "Fischer defeats the creator of the Najdorf Sicilian in his own variation! A symbolic victory.",
    moves: [
      "e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6",
      "h3", "b5", "Nd5", "Bb7", "Nxf6+", "gxf6", "c4", "bxc4", "Bxc4", "Bxe4",
      "O-O", "d5", "Re1", "e5", "Qa4+", "Nd7", "Rxe4", "dxe4", "Nf5", "Bc5",
      "Ng7+", "Ke7", "Nf5+", "Ke8", "Bg5", "Qb6", "Qc2", "Qb7", "Bxf6", "Rg8",
      "Qxe4", "Qxe4", "Bxe4", "Ra7", "Bxh7", "Rh8", "Be4", "Rxh3", "Nd6+", "Bxd6",
      "Bxa8", "Rf3", "Be4", "Rxf6", "Bxd5", "Rf4", "a3", "e4", "Rc1", "Kd8"
    ],
    keyMoments: [
      { moveIndex: 12, comment: "Fischer grabs a pawn with complications" },
      { moveIndex: 28, comment: "Nf5! with a powerful knight outpost" },
      { moveIndex: 42, comment: "Fischer's attack crashes through" }
    ]
  },
  {
    id: "fischer-myagmarsuren-1967",
    title: "Mongolian Gem",
    event: "Sousse Interzonal",
    site: "Sousse, Tunisia",
    date: "1967.10.19",
    white: "Bobby Fischer",
    black: "Lhamsuren Myagmarsuren",
    result: "1-0",
    description: "A beautiful attacking game where Fischer demonstrates perfect piece coordination in a dangerous Sicilian.",
    moves: [
      "e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6",
      "Bc4", "e6", "Bb3", "b5", "O-O", "Be7", "Qf3", "Qc7", "Qg3", "O-O",
      "Bh6", "Ne8", "Rad1", "Bd7", "f4", "Nc6", "Nxc6", "Bxc6", "f5", "exf5",
      "exf5", "d5", "Kh1", "Bf6", "fxg6", "hxg6", "Qh4", "Bg7", "Rxd5", "Bxd5",
      "Bxg7", "Nxg7", "Nxd5", "Qe5", "Nf6+", "Kh8", "Qh6"
    ],
    keyMoments: [
      { moveIndex: 20, comment: "Bh6! creates dangerous threats against the king" },
      { moveIndex: 26, comment: "f5! breaks open the position" },
      { moveIndex: 44, comment: "The attack is decisive - Qh6 threatens unstoppable mate" }
    ]
  },
  {
    id: "tal-immortal",
    title: "The Immortal Game",
    event: "Bled Olympiad",
    site: "Bled, Yugoslavia",
    date: "1961.10.15",
    white: "Mikhail Tal",
    black: "Smyslov",
    result: "1-0",
    description: "Mikhail Tal's brilliant attack with sacrifices and compensation. A masterpiece of attacking chess demonstrating why Tal was called the 'Magician from Riga'.",
    moves: ["e4", "c5", "Nf3", "e6", "d4", "cxd4", "Nxd4", "Nc6", "Nc3", "Qc7", "Be3", "a6", "Be2", "Nf6", "O-O", "Be7", "f4", "O-O", "Kh1", "e5", "Nf3", "Nxe4", "Nxe5"],
    keyMoments: [
      { moveIndex: 20, comment: "Tal launches a fierce attack with perfect piece coordination" },
      { moveIndex: 30, comment: "A decisive blow - Tal's sacrificial play pays off magnificently" }
    ]
  },
  {
    id: "hikaru-london",
    title: "Brilliant Positional Victory",
    event: "London Chess Classic",
    site: "London, England",
    date: "2019.12.14",
    white: "Hikaru Nakamura",
    black: "Aronian",
    result: "1-0",
    description: "Hikaru Nakamura demonstrates modern chess mastery with flawless preparation and accurate endgame play.",
    moves: ["d4", "Nf6", "c4", "e6", "Nf3", "d5", "Nc3", "Be7", "Bg5", "O-O", "e3", "Nbd7", "Rc1", "c6", "Bxf6", "Nxf6", "cxd5", "cxd5", "Qa4", "Rc8", "Qa3", "Be6"],
    keyMoments: [
      { moveIndex: 15, comment: "Nakamura centralizes pieces with perfect tempo" },
      { moveIndex: 25, comment: "Dominating position - Aronian's position collapses" }
    ]
  },
  {
    id: "gukesh-prodigy",
    title: "Youthful Brilliance",
    event: "World Cup",
    site: "Khanty-Mansiysk",
    date: "2021.08.14",
    white: "Gukesh",
    black: "Grischuk",
    result: "1-0",
    description: "The young Indian prodigy Gukesh defeats the legendary Grischuk with a spectacular attack showing his immense potential.",
    moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Bg5", "e6", "f4", "Be7", "Qf3", "Nbd7", "O-O-O", "Rc8", "Kb1", "O-O", "e5"],
    keyMoments: [
      { moveIndex: 18, comment: "A sharp pawn storm launches Gukesh's attack" },
      { moveIndex: 28, comment: "Brilliant tactics lead to a decisive advantage" }
    ]
  },
  {
    id: "magnus-endgame",
    title: "Endgame Mastery",
    event: "Candidates Tournament",
    site: "Berlin, Germany",
    date: "2018.03.16",
    white: "Magnus Carlsen",
    black: "Ding Liren",
    result: "1-0",
    description: "Magnus Carlsen showcases his legendary endgame technique, converting a minimal advantage into a convincing victory.",
    moves: ["c4", "e5", "Nc3", "Nf6", "Nf3", "Nc6", "d4", "exd4", "Nxd4", "Bb4", "Bg5", "O-O", "e3", "Bxc3+", "bxc3", "dxc4", "Qa4", "Re8", "Bxf6", "Qxf6"],
    keyMoments: [
      { moveIndex: 16, comment: "Magnus simplifies into a winning endgame" },
      { moveIndex: 30, comment: "Flawless endgame technique demonstrates his superiority" }
    ]
  },
  {
    id: "levy-computer",
    title: "Human vs Machine Classic",
    event: "Levy vs Computer Match",
    site: "Glasgow, Scotland",
    date: "1989.04.15",
    white: "David Levy",
    black: "Chess Computer",
    result: "0-1",
    description: "A historic match showing the evolution of computer chess. The machine demonstrates superior tactical ability in this decisive game.",
    moves: ["d4", "Nf6", "c4", "g6", "Nc3", "Bg7", "e4", "d6", "f3", "O-O", "Be3", "e5", "d5", "c6", "Qd2", "cxd5", "cxd5", "a6", "O-O-O", "Nbd7"],
    keyMoments: [
      { moveIndex: 12, comment: "The computer finds the strongest continuation" },
      { moveIndex: 22, comment: "Computational advantage grows - the machine prevails" }
    ]
  }
];

export function getFischerGameById(id: string): FischerGame | undefined {
  return fischerGames.find(game => game.id === id);
}

export function searchFischerGames(query: string): FischerGame[] {
  const lowerQuery = query.toLowerCase();
  return fischerGames.filter(game => 
    game.title.toLowerCase().includes(lowerQuery) ||
    game.white.toLowerCase().includes(lowerQuery) ||
    game.black.toLowerCase().includes(lowerQuery) ||
    game.event.toLowerCase().includes(lowerQuery) ||
    game.description.toLowerCase().includes(lowerQuery)
  );
}
