import { FischerGame } from "@/lib/stores/useChess";

export const fischerGames: FischerGame[] = [
  {
    id: "fischer-byrne-simple",
    title: "Fischer vs Byrne - Game of Century",
    event: "Rosenwald Trophy",
    site: "New York, USA",
    date: "1956.10.17",
    white: "Donald Byrne",
    black: "Bobby Fischer",
    result: "0-1",
    description: "Young Fischer's brilliant attacking play.",
    moves: ["Nf3", "Nf6", "c4", "g6", "Nc3", "Bg7", "d4", "O-O", "Bf4", "d5", "Qb3", "dxc4", "Qxc4", "c6", "e4", "Nbd7", "Rd1", "Nb6", "Qc5", "Bg4", "Bg5", "Na4", "Qa3", "Nxc3", "bxc3", "Nxe4"],
    keyMoments: [
      { moveIndex: 16, comment: "Fischer's pieces are developing" },
      { moveIndex: 20, comment: "Fischer gains material advantage" },
      { moveIndex: 24, comment: "Strong attacking position" }
    ]
  },
  {
    id: "kasparov-karpov-simple",
    title: "Kasparov vs Karpov - World Championship",
    event: "World Championship",
    site: "Moscow, USSR",
    date: "1985.02.11",
    white: "Garry Kasparov",
    black: "Anatoly Karpov",
    result: "1-0",
    description: "Kasparov's brilliant attacking victory.",
    moves: ["e4", "c5", "Nf3", "e6", "d4", "cxd4", "Nxd4", "Nc6", "Nc3", "Qc7", "Be3", "a6", "Be2", "Nf6", "O-O", "Be7", "f4", "O-O", "Kh1", "d6", "a4", "e5", "Nf3", "exf4", "Bxf4", "Nxe4", "Nxe4", "Bxf4", "Qd3", "Bxe4", "Qxe4"],
    keyMoments: [
      { moveIndex: 18, comment: "Kasparov initiates aggressive attack" },
      { moveIndex: 24, comment: "Material advantage grows" },
      { moveIndex: 30, comment: "Kasparov wins decisively" }
    ]
  },
  {
    id: "anand-kramnik-simple",
    title: "Anand vs Kramnik - World Championship",
    event: "World Championship",
    site: "Bonn, Germany",
    date: "2008.10.30",
    white: "Viswanathan Anand",
    black: "Vladimir Kramnik",
    result: "1-0",
    description: "Anand's tactical masterpiece.",
    moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Bg5", "e6", "f4", "Be7", "Qf3", "Nbd7", "O-O-O", "b5", "e5", "dxe5", "fxe5", "Nxe5", "Nxe6", "fxe6", "Bxb5"],
    keyMoments: [
      { moveIndex: 16, comment: "Anand launches sharp attack" },
      { moveIndex: 22, comment: "Tactical breakthrough achieved" },
      { moveIndex: 26, comment: "Anand wins material" }
    ]
  },
  {
    id: "fischer-spassky-simple",
    title: "Fischer vs Spassky - World Championship",
    event: "World Championship",
    site: "Reykjavik, Iceland",
    date: "1972.07.23",
    white: "Bobby Fischer",
    black: "Boris Spassky",
    result: "1-0",
    description: "Fischer's flawless attacking chess.",
    moves: ["c4", "e6", "Nf3", "d5", "d4", "Nf6", "Nc3", "Be7", "Bg5", "O-O", "e3", "h6", "Bh4", "b6", "cxd5", "Nxd5", "Bxe7", "Qxe7", "Nxd5", "exd5", "Rc1", "Be6", "Qa4", "c5", "Qa3", "Rc8", "Bb5", "a6", "dxc5"],
    keyMoments: [
      { moveIndex: 16, comment: "Fischer centralizes pieces" },
      { moveIndex: 20, comment: "Pressure increases on Spassky" },
      { moveIndex: 24, comment: "Winning advantage achieved" }
    ]
  },
  {
    id: "tal-sacrifice-simple",
    title: "Tal vs Smyslov - Soviet Championship",
    event: "Soviet Championship",
    site: "Moscow, USSR",
    date: "1958.06.20",
    white: "Mikhail Tal",
    black: "Vassily Smyslov",
    result: "1-0",
    description: "Tal's brilliant sacrificial attack.",
    moves: ["e4", "c5", "Nf3", "Nc6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "d6", "Bg5", "e6", "f4", "Be7", "Qf3", "O-O", "O-O-O", "Nxd4", "Qxd4", "a6", "Kb1", "e5", "Qd3", "exf4", "Bxf4"],
    keyMoments: [
      { moveIndex: 14, comment: "Tal initiates attacking strategy" },
      { moveIndex: 20, comment: "Sacrifice creates dangerous attack" },
      { moveIndex: 24, comment: "Winning position for White" }
    ]
  },
  {
    id: "caruana-vachier-simple",
    title: "Caruana vs Vachier-Lagrave - Tata Steel",
    event: "Tata Steel Chess",
    site: "Wijk aan Zee, Netherlands",
    date: "2014.01.19",
    white: "Fabiano Caruana",
    black: "Maxime Vachier-Lagrave",
    result: "1-0",
    description: "Caruana's strategic mastery.",
    moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Bg5", "e6", "f4", "Nbd7", "Qf3", "b5", "e5", "dxe5", "fxe5", "Nxe5", "Nxe6", "fxe6", "Bxb5", "axb5"],
    keyMoments: [
      { moveIndex: 16, comment: "Caruana attacks Black's king" },
      { moveIndex: 22, comment: "Material advantage increases" },
      { moveIndex: 26, comment: "Winning position for White" }
    ]
  },
  {
    id: "nakamura-simple",
    title: "Nakamura vs Caruana - St. Louis",
    event: "St. Louis Rapid",
    site: "St. Louis, USA",
    date: "2014.08.16",
    white: "Hikaru Nakamura",
    black: "Fabiano Caruana",
    result: "1-0",
    description: "Nakamura's dynamic attacking play.",
    moves: ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "Nf6", "O-O", "Be7", "Re1", "b5", "Bb3", "d6", "c3", "Na5", "Bc2", "c6", "h3", "O-O", "d4", "Bg7", "Nxe5", "dxe5", "dxe5", "Nxe4"],
    keyMoments: [
      { moveIndex: 16, comment: "Nakamura opens center" },
      { moveIndex: 20, comment: "Tactical sequence begins" },
      { moveIndex: 24, comment: "Nakamura gains advantage" }
    ]
  },
  {
    id: "aronian-kasparov-simple",
    title: "Aronian vs Kasparov - Simultaneous",
    event: "Simultaneous",
    site: "New York, USA",
    date: "2012.11.09",
    white: "Levon Aronian",
    black: "Garry Kasparov",
    result: "1-0",
    description: "Aronian defeats Kasparov.",
    moves: ["d4", "Nf6", "c4", "e6", "Nf3", "d5", "Bg5", "Be7", "e3", "O-O", "Nc3", "Nbd7", "Rc1", "c6", "cxd5", "exd5", "Qa4", "a6", "Bxf6", "Nxf6", "Qxa6", "bxa6", "Be2", "Bb7", "O-O", "a5", "a3", "Ne4", "Nxe4", "dxe4"],
    keyMoments: [
      { moveIndex: 16, comment: "Aronian launches attack" },
      { moveIndex: 22, comment: "Kasparov's position weakens" },
      { moveIndex: 28, comment: "Aronian wins material" }
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
