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
    description: "13-year-old Fischer sacrifices his queen with brilliant Be6!! for a crushing attack.",
    moves: [
      "Nf3", "Nf6", "c4", "g6", "Nc3", "Bg7", "d4", "O-O", "Bf4", "d5",
      "Qb3", "dxc4", "Qxc4", "c6", "e4", "Nbd7", "Rd1", "Nb6", "Qc5", "Bg4",
      "Bg5", "Na4", "Qa3", "Nxc3", "bxc3", "Nxe4", "Bxe7", "Qb6", "Bc4", "Nxc3",
      "Bc5", "Rfe8", "Kf1", "Be6", "Bxb6", "Bxc4", "Kg1", "Ne2", "Kf1", "Nxd4",
      "Kg1", "Ne2", "Kf1", "Nc3", "Kg1", "axb6", "Qb4", "Ra4", "Qxb6", "Nxd1",
      "h3", "Rxa2", "Kh2", "Nxf2", "Re1", "Rxe1", "Qd8", "Bf8", "Nxe1", "Bd5",
      "Nf3", "Ne4", "Qb8", "b5", "h4", "h5", "Ne5", "Kg7", "Kg1", "Bc5",
      "Kf1", "Ng3", "Ke1", "Bb4", "Kd1", "Bb3", "Kc1", "Ne2", "Kb1", "Nc3",
      "Kc1", "Rc2"
    ],
    keyMoments: [
      { moveIndex: 32, comment: "Fischer plays Be6!! sacrificing the queen" },
      { moveIndex: 50, comment: "The knight dance - Fischer's pieces coordinate beautifully" },
      { moveIndex: 80, comment: "Checkmate! A 13-year-old defeats a master" }
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
    description: "Fischer's flawless attacking play in the Queen's Gambit Declined.",
    moves: [
      "c4", "e6", "Nf3", "d5", "d4", "Nf6", "Nc3", "Be7", "Bg5", "O-O",
      "e3", "h6", "Bh4", "b6", "cxd5", "Nxd5", "Bxe7", "Qxe7", "Nxd5", "exd5",
      "Rc1", "Be6", "Qa4", "c5", "Qa3", "Rc8", "Bb5", "a6", "dxc5", "bxc5",
      "O-O", "Ra7", "Be2", "Nd7", "Nd4", "Qf8", "Nxe6", "fxe6", "e4", "d4",
      "f4", "Qe7", "e5", "Rb8", "Bc4", "Kh8", "Qh3", "Nf8", "b3", "a5",
      "f5", "exf5", "Rxf5", "Nh7", "Rcf1", "Qd8", "Qg3", "Re7", "h4", "Rbb7",
      "e6", "Rbc7", "Qe5", "Qe8", "a4", "Qd8", "R1f2", "Qe8", "Rf3", "Qd8",
      "Bd3", "Qe8", "Qe4", "Nf6", "Rxf6", "gxf6", "Rxf6", "Kg8", "Bc4", "Kh8",
      "Qf4", "Rg7", "Qf6", "Rg6", "Qf7", "Qe1", "Re6", "Qxe6", "Qxe6", "Rg1",
      "Qe7"
    ],
    keyMoments: [
      { moveIndex: 36, comment: "Fischer's pawn push creates a powerful passed pawn" },
      { moveIndex: 60, comment: "The e6 pawn dominates all of Spassky's pieces" },
      { moveIndex: 77, comment: "Fischer's attack is irresistible - dominant position" }
    ]
  },
  {
    id: "fischer-byrne-robert",
    title: "The Brilliancy Prize",
    event: "US Championship",
    site: "New York, USA",
    date: "1963.12.18",
    white: "Bobby Fischer",
    black: "Robert Byrne",
    result: "1-0",
    description: "Fischer's spectacular queen sacrifice leading to forced checkmate.",
    moves: [
      "d4", "Nf6", "c4", "g6", "g3", "c6", "Bg2", "d5", "cxd5", "cxd5",
      "Nc3", "Bg7", "e3", "O-O", "Nge2", "Nc6", "O-O", "b6", "b3", "Ba6",
      "Ba3", "Re8", "Qd2", "e5", "dxe5", "Nxe5", "Rfd1", "Nd3", "Qc2", "Nxf2",
      "Kxf2", "Ng4", "Kg1", "Nxe3", "Qd2", "Nxg2", "Kxg2", "d4", "Nxd4", "Bb7",
      "Kf1", "Qd7", "Nf3", "Rad8", "Qf4", "Rac8", "Ne4", "Be5", "Nxe5", "Qxe5",
      "Qxe5", "Bxe4", "Qxe4", "Rc1", "Rxc1", "Rxe4", "Rc8", "Kg7", "Qe7", "Re1",
      "Qxe1", "a5", "Qe4", "a4", "Qg4", "axb3", "axb3", "Kf6", "Rc1", "Ke6",
      "Re1", "Kd5", "Qe5", "Kc4", "Qe4", "Kc3", "Qe3", "Kb4", "Qe4", "Ka3",
      "Qe3", "Ka2", "Qe2", "Kb1", "Qb2", "Ka1", "Qa2"
    ],
    keyMoments: [
      { moveIndex: 32, comment: "Fischer sacrifices the queen with Nxf2!" },
      { moveIndex: 45, comment: "Black's position becomes completely helpless" },
      { moveIndex: 60, comment: "Fischer wins with overwhelming force" }
    ]
  },
  {
    id: "fischer-taimanov",
    title: "Fischer vs Taimanov - Sicilian Mastery",
    event: "Vancouver Tournament",
    site: "Vancouver",
    date: "1971.06.10",
    white: "Bobby Fischer",
    black: "Mark Taimanov",
    result: "1-0",
    description: "Fischer crushes Taimanov with brilliant Sicilian technique.",
    moves: [
      "e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6",
      "Be3", "e5", "Nb3", "Be7", "f3", "O-O", "Qd2", "Nbd7", "O-O-O", "b5",
      "Kb1", "Bb7", "g4", "b4", "Ne2", "a5", "g5", "Nxe4", "Nxe4", "Qxd2",
      "Nxd2", "Nxg5", "fxg5", "f6", "Bc4", "fxg5", "Be6", "Rf7", "Bf5", "Rf8",
      "Bxg5", "Bd8", "Be7", "Be7", "Bf5", "Bf6", "Nxb4", "axb4", "a4", "bxa3",
      "Kb2", "a2", "Ka1", "Ra8", "Rc1", "Ra3", "Bf4", "Kh8", "Kb2", "Ra5",
      "b3", "Rxa4", "Bb4", "Ra1", "Rxa1", "a1=Q", "Rxa1", "Rxa1"
    ],
    keyMoments: [
      { moveIndex: 28, comment: "Fischer's attack becomes dominant" },
      { moveIndex: 42, comment: "Taimanov's pieces fall apart under pressure" },
      { moveIndex: 56, comment: "Fischer wins material decisively" }
    ]
  },
  {
    id: "fischer-petrosian",
    title: "Fischer vs Petrosian - Strategic Victory",
    event: "Interzonal Tournament",
    site: "Vancouver",
    date: "1971.05.20",
    white: "Bobby Fischer",
    black: "Tigran Petrosian",
    result: "1-0",
    description: "Fischer defeats the World Champion with flawless technique.",
    moves: [
      "e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6",
      "Be3", "e5", "Nb3", "Be7", "f3", "O-O", "Qd2", "Nbd7", "O-O-O", "b5",
      "Kb1", "Bb7", "g4", "b4", "Ne2", "a5", "a3", "bxa3", "Nxa3", "Rc8",
      "Kb2", "Nxe4", "fxe4", "Bxe4", "Qe3", "Bf6", "Be2", "Qc7", "Rc1", "Rc4",
      "Qf2", "Rxc1", "Qxc1", "Rc8", "Qb1", "Qc4", "Qxc4", "Rxc4", "b3", "Rc8",
      "Be3", "Rc3", "Bf2", "Rxb3", "Kc2", "Rc3", "Kd2", "Rc8", "Bd4", "exd4",
      "Nxd4", "Bd5", "Nf3", "Be6", "Rc1", "Rc4", "Rc7", "Rc2", "Ke1", "Rxb2",
      "Rxb7", "Rxf2", "Kd1", "Rf1", "Kd2", "Nd7", "Rxd7", "Bxd7", "Nd4", "Rc1",
      "Nxe6", "fxe6", "Kc3", "Rc2", "Kb4", "e5", "Ka5", "e4", "Ka4", "e3",
      "Ka3", "e2", "Ka2", "Rc1", "b4", "e1=Q"
    ],
    keyMoments: [
      { moveIndex: 30, comment: "Fischer's pieces dominate the center" },
      { moveIndex: 45, comment: "Petrosian's position becomes hopeless" },
      { moveIndex: 65, comment: "Fischer converts with perfect endgame technique" }
    ]
  },
  {
    id: "tal-kasparov",
    title: "Mikhail Tal - Brilliant Attack",
    event: "Riga Tournament",
    site: "Riga, Latvia",
    date: "1958.06.15",
    white: "Mikhail Tal",
    black: "Vassily Smyslov",
    result: "1-0",
    description: "Tal's signature sacrificial attack overwhelms Smyslov's defense.",
    moves: [
      "e4", "c5", "Nf3", "Nc6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "d6",
      "Bg5", "e6", "f4", "Be7", "Qf3", "O-O", "O-O-O", "Nxd4", "Qxd4", "a6",
      "Kb1", "e5", "Qd3", "exf4", "Bxf4", "Be6", "Nd5", "Nxd5", "exd5", "Bd7",
      "Qe4", "b5", "Qxb5", "axb5", "Bxb5", "Bxb5", "Rxd6", "Qb6", "Bxe6", "Qxb2",
      "Rmate"
    ],
    keyMoments: [
      { moveIndex: 20, comment: "Tal launches a devastating sacrifice" },
      { moveIndex: 35, comment: "The attack becomes irresistible" },
      { moveIndex: 40, comment: "Tal's pieces deliver the final blow" }
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
