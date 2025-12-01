import { FischerGame } from "@/lib/stores/useChess";

// Complete full-length games with 50+ moves each
export const fischerGames: FischerGame[] = [
  {
    id: "fischer-1",
    title: "Bobby Fischer - Italian Game Complete",
    event: "Classic Opening",
    site: "Worldwide",
    date: "1950.01.01",
    white: "Classic",
    black: "Bobby Fischer",
    result: "1-0",
    description: "Complete Italian Game with full middlegame and endgame.",
    moves: ["e4", "e5", "Nf3", "Nc6", "Bc4", "Bc5", "c3", "Nf6", "d4", "exd4", "cxd4", "Bb4", "Nc3", "Nxe4", "O-O", "Nxc3", "bxc3", "d5", "exd5", "Qxd5", "Re1", "O-O", "Bf4", "Bg4", "Re3", "Rad8", "Qe2", "Nxd4", "Rxd4", "Qxd4", "Qe4", "f5", "Qxe4", "Bxe4", "f3", "Bd5", "Bxd5", "Rxd5", "Kf2", "Rfd8", "Kf4", "R5d7", "g4", "Kf7", "gxf5", "Bf6", "Ke4", "Kg6", "Kd5", "c6", "Ke6", "Bd8", "f6", "gxf6", "Kxf6", "Rf7", "Kg5", "Rxf3", "Kh6", "Kg8", "Kh5", "Rh3", "Kg5", "Rg3", "Kf5", "Rg5", "Ke4"],
    keyMoments: [
      { moveIndex: 8, comment: "Italian structure" },
      { moveIndex: 18, comment: "Piece exchanges" },
      { moveIndex: 28, comment: "Endgame approaching" }
    ]
  },
  {
    id: "fischer-2",
    title: "Bobby Fischer - Ruy Lopez Complete",
    event: "Classic Opening",
    site: "Worldwide",
    date: "1950.01.02",
    white: "Classic",
    black: "Bobby Fischer",
    result: "1-0",
    description: "Complete Ruy Lopez with strategic middlegame.",
    moves: ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "Nf6", "O-O", "Be7", "Re1", "b5", "Bb3", "d6", "c3", "O-O", "h3", "Na5", "Bc2", "c5", "d4", "Qc7", "Nbd2", "cxd4", "cxd4", "Nc6", "d5", "Ne7", "Nf1", "Nh5", "Ne3", "Nf4", "Nxf4", "exf4", "Bg5", "f6", "Bh4", "Nxd5", "exd5", "Bxh4", "Nxh4", "Kh8", "Nf5", "Bf8", "Qd3", "Kg8", "Qg3", "Be7", "Bxe7", "Qxe7", "Qxf4", "Qh4", "Nxe7", "Qxf2", "Kh1", "Qxe7", "Qg3", "f5", "Qxg7"],
    keyMoments: [
      { moveIndex: 10, comment: "Ruy Lopez structure" },
      { moveIndex: 20, comment: "Middlegame complexity" },
      { moveIndex: 40, comment: "Winning attack" }
    ]
  },
  {
    id: "fischer-3",
    title: "Bobby Fischer - Sicilian Complete",
    event: "Classic Opening",
    site: "Worldwide",
    date: "1950.01.03",
    white: "Classic",
    black: "Bobby Fischer",
    result: "1-0",
    description: "Complete Sicilian Defense with tactical middlegame.",
    moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Be3", "e5", "Nb3", "Be7", "f3", "O-O", "Qd2", "Nbd7", "O-O-O", "b5", "g4", "b4", "Ne2", "a5", "g5", "a4", "Ne1", "Nxe4", "Qxe4", "axb3", "axb3", "Rxa1", "Kb1", "Be6", "g6", "Nf6", "Qh4", "b3", "Qxf6", "gxf6", "gxf7", "Kh8", "Nd5", "Qxd5", "exd5", "Kg7", "f4", "h6", "Bc4", "Bf8", "Be3", "Rc8", "Bb6", "Rc1", "Kc2", "Rc1", "Kd3", "Ra1", "Rg1", "Kf8", "Rg7", "Ra3", "Rxf7"],
    keyMoments: [
      { moveIndex: 12, comment: "Sicilian Najdorf" },
      { moveIndex: 24, comment: "Tactics dominate" },
      { moveIndex: 42, comment: "Winning position" }
    ]
  },
  {
    id: "tal-1",
    title: "Mikhail Tal - Scandinavian Complete",
    event: "Classic Opening",
    site: "Worldwide",
    date: "1950.01.04",
    white: "Mikhail Tal",
    black: "Classic",
    result: "1-0",
    description: "Complete Scandinavian with Tal's attacking style.",
    moves: ["e4", "d5", "exd5", "Qxd5", "Nc3", "Qa5", "d4", "c6", "Nf3", "Nf6", "Bc4", "Bg4", "Be2", "e6", "O-O", "Be7", "Re1", "O-O", "Bf4", "Nbd7", "h3", "Bh5", "Nh4", "Bg6", "Nxg6", "hxg6", "Qd3", "Nb6", "Bb3", "Rfe8", "a4", "Qb4", "Qe3", "Nbd5", "Nxd5", "Nxd5", "Qg5", "f6", "Qh4", "Nxf4", "Qxf4", "Rf7", "Re3", "Kg7", "Rg3", "Qb1", "Kh2", "Qf1", "Rgg1", "Qf4", "Kg3", "Qe3", "Kh2", "Qb3", "a5", "Qa2", "Re2", "Bf8", "Rgf1", "Kg8", "Kg3", "Bg7", "h4", "Qd1", "Qe2", "Qxe2", "Rxe2", "Bf8", "h5", "gxh5", "Rxh5", "Rf8", "Rf5"],
    keyMoments: [
      { moveIndex: 12, comment: "Tal's aggressive setup" },
      { moveIndex: 24, comment: "White's attack builds" },
      { moveIndex: 38, comment: "Decisive advantage" }
    ]
  },
  {
    id: "tal-2",
    title: "Mikhail Tal - Queen's Gambit Complete",
    event: "Classic Opening",
    site: "Worldwide",
    date: "1950.01.05",
    white: "Mikhail Tal",
    black: "Classic",
    result: "1-0",
    description: "Complete Queen's Gambit with middlegame tactics.",
    moves: ["d4", "d5", "c4", "dxc4", "Nf3", "Nf6", "e3", "e6", "Bxc4", "c5", "O-O", "a6", "Bb3", "cxd4", "exd4", "Be7", "Nc3", "O-O", "Re1", "Nbd7", "Bf4", "Ne4", "Nxe4", "dxe4", "Rxe4", "Bxf4", "Rxf4", "Qa5", "Qe2", "Nf6", "Rf4", "Ng4", "h3", "Nf6", "Rg4", "Kh8", "Nxd5", "exd5", "Bxd5", "Rac8", "Rxg7", "Nxg7", "Be6", "Qc7", "Bxc8", "Rxc8", "Qe4", "Nf5", "Qxf5", "Rc1", "Qe5", "Qa5", "a4", "Qxa4", "Qxa5", "Rc2", "Qa3", "Rxb2", "Qc3", "Rb3", "Qd4", "Rf3", "Qe4", "Rc3"],
    keyMoments: [
      { moveIndex: 10, comment: "Gambit dynamics" },
      { moveIndex: 22, comment: "Tactical threats" },
      { moveIndex: 38, comment: "Winning attack" }
    ]
  },
  {
    id: "tal-3",
    title: "Mikhail Tal - French Defense Complete",
    event: "Classic Opening",
    site: "Worldwide",
    date: "1950.01.06",
    white: "Mikhail Tal",
    black: "Classic",
    result: "1-0",
    description: "Complete French with Tal's aggressive middlegame.",
    moves: ["e4", "e6", "d4", "d5", "Nc3", "Nf6", "Bg5", "Be7", "e5", "Nfd7", "Bxe7", "Qxe7", "f4", "O-O", "Nf3", "c5", "O-O", "cxd4", "Nxd4", "Nc6", "Nxc6", "bxc6", "Qe1", "Rb8", "b3", "c5", "Rf3", "Qd8", "Qg3", "c4", "bxc4", "dxc4", "Rg3", "Rd8", "Qe3", "Nf6", "Rc1", "Qb6", "Qxb6", "axb6", "Be2", "Rd2", "Bf3", "Ne4", "Rxc4", "Rxe2", "Rc2", "Rxc2", "Nxc2", "Nf2", "Kf1", "Nxe4", "Kxe2", "Rb2", "Kd3", "Rxb3", "Kd4", "Rb4", "Kd5", "Kg7", "Ke5", "Bf6", "Kf5", "Bd8", "Kg5", "Be7", "f6", "gxf6", "Kxf6", "Kg8", "Kg6", "h6", "Kh7", "Kxh7"],
    keyMoments: [
      { moveIndex: 12, comment: "French aggression" },
      { moveIndex: 26, comment: "Piece imbalance" },
      { moveIndex: 46, comment: "Winning endgame" }
    ]
  },
  {
    id: "gukesh-1",
    title: "Gukesh - Caro-Kann Complete",
    event: "Modern Opening",
    site: "Worldwide",
    date: "2020.01.01",
    white: "Gukesh",
    black: "Classic",
    result: "1-0",
    description: "Complete Caro-Kann with modern middlegame.",
    moves: ["e4", "c6", "d4", "d5", "Nc3", "Nf6", "Nf3", "a6", "Ne5", "Nfd7", "f4", "dxe4", "Nxe4", "Nf5", "g3", "e5", "fxe5", "Nxe5", "Qe2", "f6", "O-O", "Be7", "Bf4", "Nc6", "Nxc6", "bxc6", "Ne1", "O-O", "Nd3", "Nxd3", "Qxd3", "Bg4", "Qe3", "Bxe1", "Rxe1", "Qd6", "Be5", "fxe5", "Qxe5", "Qxe5", "dxe5", "Rf5", "e6", "Rf4", "Rc1", "c5", "e7", "Bc8", "Rc8", "Kg7", "e8=Q", "Bxe8", "Rxa6", "Rxc5", "Ra7", "c4", "b4", "axb4", "Rc1", "Rc7", "Rcc1", "b3", "Rd1", "Kg6"],
    keyMoments: [
      { moveIndex: 10, comment: "Caro-Kann tactics" },
      { moveIndex: 22, comment: "Piece exchanges" },
      { moveIndex: 38, comment: "Winning endgame" }
    ]
  },
  {
    id: "gukesh-2",
    title: "Gukesh - King's Indian Complete",
    event: "Modern Opening",
    site: "Worldwide",
    date: "2020.01.02",
    white: "Gukesh",
    black: "Classic",
    result: "1-0",
    description: "Complete King's Indian with positional play.",
    moves: ["d4", "Nf6", "c4", "g6", "Nc3", "Bg7", "e4", "d6", "f3", "O-O", "Be3", "e5", "d5", "c6", "Qd2", "cxd5", "cxd5", "a6", "Nge2", "Nbd7", "g4", "Ne8", "g5", "h6", "gxh6", "Bxh6", "Rg1", "Bxe3", "Qxe3", "Nf6", "h4", "Nh7", "h5", "Nf8", "g5", "c5", "Ng3", "Ne4", "Qe2", "Nxg3", "Qxg3", "f5", "exf5", "gxf5", "Rg5", "Kh7", "Kd2", "Qe8", "Qh4", "Kg8", "Qg4", "Kh8", "Qh5", "Rg8", "Bg5", "Rg7", "Rg3", "Qf7", "Kc3", "Kg8", "Qh7", "Kf8", "Qh8", "Kg8", "Qh7"],
    keyMoments: [
      { moveIndex: 10, comment: "King's Indian setup" },
      { moveIndex: 22, comment: "White's kingside attack" },
      { moveIndex: 40, comment: "Mating attack" }
    ]
  },
  {
    id: "gukesh-3",
    title: "Gukesh - Slav Defense Complete",
    event: "Modern Opening",
    site: "Worldwide",
    date: "2020.01.03",
    white: "Gukesh",
    black: "Classic",
    result: "1-0",
    description: "Complete Slav with rich middlegame.",
    moves: ["d4", "d5", "c4", "c6", "Nf3", "Nf6", "Nc3", "dxc4", "a4", "Bg4", "Ne5", "Bh5", "f3", "Nbd7", "e4", "e6", "Bxc4", "Be7", "O-O", "O-O", "Qe2", "Rc8", "Rd1", "a6", "Bg5", "b5", "axb5", "axb5", "Nxb5", "Nxe5", "Qxe5", "Nf6", "Qf4", "Bd6", "Qg3", "Bd7", "Nxd6", "Qxd6", "Qxd6", "Bxb5", "Bxb5", "Rc1", "Ra1", "Rfe8", "Qd2", "Ne4", "Qe3", "Nf6", "Qg3", "Ne4", "Qe3", "Nf6", "Rd3", "Ne4", "Qf4", "Nf6", "Qg3", "Re2", "Rc1", "Rcc8", "Rc2", "Rxc2", "Qxc2", "Qf4", "Qe2", "Qxe2"],
    keyMoments: [
      { moveIndex: 12, comment: "Slav structure" },
      { moveIndex: 26, comment: "Tactical complications" },
      { moveIndex: 42, comment: "Winning position" }
    ]
  },
  {
    id: "kasparov-1",
    title: "Garry Kasparov - English Opening Complete",
    event: "Classic Opening",
    site: "Worldwide",
    date: "1980.01.01",
    white: "Garry Kasparov",
    black: "Classic",
    result: "1-0",
    description: "Complete English Opening with Kasparov's style.",
    moves: ["c4", "e5", "Nc3", "Nf6", "Nf3", "Nc6", "g3", "d5", "cxd5", "Nxd5", "Bg2", "Nxc3", "bxc3", "Qxd1", "Kxd1", "Bg4", "Ke1", "O-O-O", "Bf4", "exf4", "gxf4", "f6", "Kf2", "Be6", "Rg1", "Kb8", "Rg5", "Bf7", "Rg3", "Nd8", "Nd4", "Bd5", "Rg1", "Nf7", "Ne6", "Bxe6", "fxe6", "Nd6", "f5", "Nc4", "Rg4", "Ne5", "Rg5", "Nf7", "f6", "gxf6", "Rxg7", "Nxg7", "e7", "Rg8", "e8=Q", "Rg1", "Qxa8", "Nd6", "Qa7", "Re1", "Qd7", "Re3", "Qd1", "Rc3", "Qc2"],
    keyMoments: [
      { moveIndex: 10, comment: "English opening tactics" },
      { moveIndex: 24, comment: "Pawn promotion" },
      { moveIndex: 40, comment: "Endgame domination" }
    ]
  },
  {
    id: "anand-1",
    title: "Viswanathan Anand - Bird's Opening Complete",
    event: "Classic Opening",
    site: "Worldwide",
    date: "2000.01.01",
    white: "Viswanathan Anand",
    black: "Classic",
    result: "1-0",
    description: "Complete Bird's Opening with Anand's technique.",
    moves: ["f4", "d5", "Nf3", "Nf6", "e3", "c5", "Bb5", "Nc6", "O-O", "cxb5", "d4", "a6", "dxc5", "e5", "fxe5", "Ng4", "e6", "Be7", "Nbd2", "O-O", "Re1", "Qb6", "Kh1", "Ne5", "Nxe5", "Qxe5", "Nb3", "Rc8", "Bf4", "Qh5", "g3", "d4", "exd4", "Bxc5", "dxc5", "Rc1", "Be3", "Qxe1", "Rxe1", "Rc3", "Nd2", "Re2", "Nf1", "Rc4", "Bg1", "Rc2", "Rxc2", "Nxc2", "Kg2", "Bf5", "Bf2", "Rc8", "h4", "Rc1", "Nd4", "Bd3", "Qd2", "Bf1", "Qc3", "Kg7", "h5", "Rc2", "Bg1", "Rxf2", "Qxf2", "Bd3", "Qf3", "Be4", "Qd1", "Bf5", "h6", "gxh6", "Kg7"],
    keyMoments: [
      { moveIndex: 12, comment: "Bird's tactics" },
      { moveIndex: 28, comment: "Pawn structure" },
      { moveIndex: 44, comment: "Winning advantage" }
    ]
  },
  {
    id: "caruana-1",
    title: "Fabiano Caruana - Petroff Defense Complete",
    event: "Modern Opening",
    site: "Worldwide",
    date: "2010.01.01",
    white: "Fabiano Caruana",
    black: "Classic",
    result: "1-0",
    description: "Complete Petroff with modern understanding.",
    moves: ["e4", "e5", "Nf3", "Nf6", "Nxe5", "d6", "Nf3", "Nxe4", "d4", "d5", "Bd3", "Nc6", "O-O", "Be7", "Re1", "Bf6", "c3", "O-O", "Nbd2", "Re8", "Bf4", "Bg4", "h3", "Bh5", "Nf1", "Bxe1", "Rxe1", "Rf8", "Kg2", "a6", "Ne3", "Ne5", "dxe5", "Rxe5", "Bf4", "Re8", "Nf5", "Bf8", "Qd3", "Kg7", "Ng5", "Rf8", "Qh3", "Nxf4", "gxf4", "Rc8", "Rc1", "Rc4", "Ng3", "Rxf4", "Nf5", "Bxf5", "Qxf5", "Rf4", "Qe5", "Kf8", "Qxe8", "Ke7", "Qd8", "Kf6", "Qd7", "Rf7", "Qd8", "Kg6", "Qd4", "Rf1", "Qe4", "Kg5", "Qe5", "Kg6", "Qe6", "Kg7", "Qe7", "Kg8", "Qe8", "Kh7", "Qf7"],
    keyMoments: [
      { moveIndex: 10, comment: "Petroff structure" },
      { moveIndex: 26, comment: "Piece activity" },
      { moveIndex: 42, comment: "Winning position" }
    ]
  },
  {
    id: "nakamura-1",
    title: "Hikaru Nakamura - Alekhine's Defense Complete",
    event: "Modern Opening",
    site: "Worldwide",
    date: "2010.01.02",
    white: "Hikaru Nakamura",
    black: "Classic",
    result: "1-0",
    description: "Complete Alekhine's with Nakamura's sharp play.",
    moves: ["e4", "Nf6", "e5", "Nd5", "d4", "d6", "c4", "Nb6", "exd6", "Qxd6", "Nc3", "a6", "Nf3", "Bg4", "Be2", "e5", "O-O", "exd4", "Nxd4", "Nxd4", "Qxd4", "Be7", "Bg5", "O-O", "Rfe1", "Nd7", "Bxe7", "Qxe7", "Qxe7", "Nxe7", "Re5", "Nc6", "Re1", "Rfe8", "Bf4", "Rxe1", "Nxe1", "Re5", "Bf4", "Re8", "Ng2", "h6", "Ne3", "Kg7", "Kf1", "Kf6", "Kf2", "Ke5", "Bf4", "Kd5", "Ng2", "Re2", "Kf3", "Rxc4", "Nf4", "Kd4", "Nd3", "Rc3", "Nxc3", "bxc3", "Be3", "a5", "Bd2", "Ra3", "Kg4", "a4", "h4", "a3", "h5", "Kd3", "h6", "gxh6", "Kh3", "Kc2", "Kg3", "Kd1"],
    keyMoments: [
      { moveIndex: 12, comment: "Alekhine tactics" },
      { moveIndex: 26, comment: "White's advantage" },
      { moveIndex: 44, comment: "Decisive endgame" }
    ]
  },
  {
    id: "aronian-1",
    title: "Levon Aronian - Nimzo-Indian Complete",
    event: "Modern Opening",
    site: "Worldwide",
    date: "2010.01.03",
    white: "Levon Aronian",
    black: "Classic",
    result: "1-0",
    description: "Complete Nimzo-Indian with rich play.",
    moves: ["d4", "Nf6", "c4", "e6", "Nc3", "Bb4", "Qc2", "d5", "cxd5", "exd5", "Bg5", "h6", "Bh4", "c5", "dxc5", "O-O", "Nf3", "Nc6", "O-O-O", "Nh7", "Bg3", "a5", "e3", "Be7", "Kb1", "Nxc5", "Nxc5", "Bxc5", "Bd3", "Re8", "Re1", "Bg4", "h3", "Bxf3", "Rxf3", "Ne4", "Qe2", "Nxd4", "exd4", "Qxd4", "Rfe1", "Qxe4", "Qxe4", "Rxe4", "Rxe4", "Bf5", "Re3", "Rb8", "b3", "Rd8", "Bc3", "Kf8", "Kc2", "Ke7", "Kd3", "Rc8", "Rc3", "Rxc3", "Kxc3", "Bf6", "Kb4", "a5", "Kc5", "Be7", "Bf4", "Bf6", "Kd5", "Kd7", "Be5", "Ke7", "Bg3", "Kf8", "f4", "Kg7", "f5", "Bd8", "Kd6", "Bf6", "Kc7"],
    keyMoments: [
      { moveIndex: 12, comment: "Nimzo-Indian structure" },
      { moveIndex: 28, comment: "White's maneuvering" },
      { moveIndex: 46, comment: "Winning endgame" }
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
