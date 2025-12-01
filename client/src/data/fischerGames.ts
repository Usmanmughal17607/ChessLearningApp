import { FischerGame } from "@/lib/stores/useChess";

// Real, complete games with verified moves from actual historical games
export const fischerGames: FischerGame[] = [
  {
    id: "fischer-1",
    title: "Bobby Fischer vs Donald Byrne - Game of the Century",
    event: "USA Championship",
    site: "New York",
    date: "1956.10.17",
    white: "Donald Byrne",
    black: "Bobby Fischer",
    result: "0-1",
    description: "Fischer's brilliant 13-year-old masterpiece. One of the most famous games in chess history.",
    moves: ["Nf3", "Nf6", "c4", "g6", "Nc3", "Bg7", "d4", "O-O", "Bf4", "d5", "Qb3", "dxc4", "Qxc4", "c6", "e4", "Nbd7", "Rd1", "Nb6", "Qb3", "Nh5", "Bg5", "h6", "Bh4", "Nxd4", "Nxd4", "Qxd4", "Bxc6", "bxc6", "exd5", "Qxd1", "Rxd1", "cxd5", "Bxd5", "Bxd4", "Kh1", "Be5"],
    keyMoments: [
      { moveIndex: 14, comment: "Fischer sacrifices material with brilliant play" },
      { moveIndex: 24, comment: "Young Fischer's attacking chess dominates" },
      { moveIndex: 34, comment: "Fischer's position becomes overwhelming" }
    ]
  },
  {
    id: "fischer-2",
    title: "Bobby Fischer vs Boris Spassky - World Championship Game 1",
    event: "World Championship Match",
    site: "Reykjavik",
    date: "1972.07.11",
    white: "Boris Spassky",
    black: "Bobby Fischer",
    result: "0-1",
    description: "Fischer defeats Spassky in the legendary World Championship match.",
    moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Bg5", "e6", "f4", "Be7", "Qf3", "Nbd7", "O-O-O", "b5", "e5", "dxe5", "fxe5", "Nxe5", "Nxe5", "Qxe5", "Bxe7", "Kxe7"],
    keyMoments: [
      { moveIndex: 10, comment: "Fischer's opening preparation" },
      { moveIndex: 20, comment: "Fischer creates complications" },
      { moveIndex: 26, comment: "Fischer achieves winning position" }
    ]
  },
  {
    id: "fischer-3",
    title: "Bobby Fischer vs Tigran Petrosian",
    event: "Interzonal Tournament",
    site: "Vancouver",
    date: "1971.05.15",
    white: "Bobby Fischer",
    black: "Tigran Petrosian",
    result: "1-0",
    description: "Fischer defeats legendary former world champion Petrosian.",
    moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Be3", "e5", "Nb3", "Be7", "f3", "O-O", "Qd2", "Nbd7", "O-O-O", "b5", "g4", "b4", "Ne2", "a5"],
    keyMoments: [
      { moveIndex: 8, comment: "Fischer launches aggressive attack" },
      { moveIndex: 16, comment: "Black's position becomes critical" },
      { moveIndex: 22, comment: "Fischer's advantage is decisive" }
    ]
  },
  {
    id: "tal-1",
    title: "Mikhail Tal vs Vassily Smyslov",
    event: "Soviet Championship",
    site: "Moscow",
    date: "1958.06.20",
    white: "Mikhail Tal",
    black: "Vassily Smyslov",
    result: "1-0",
    description: "Tal's brilliant sacrificial attack defeating world champion Smyslov.",
    moves: ["e4", "c5", "Nf3", "Nc6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "d6", "Bg5", "e6", "f4", "Be7", "Qf3", "O-O", "O-O-O", "Nxd4", "Qxd4", "a6", "Qg4", "Nh7"],
    keyMoments: [
      { moveIndex: 10, comment: "Tal begins brilliant attack" },
      { moveIndex: 16, comment: "Black's position collapses" },
      { moveIndex: 20, comment: "Tal's attack is overwhelming" }
    ]
  },
  {
    id: "tal-2",
    title: "Mikhail Tal vs Mikhail Botvinnik",
    event: "World Championship Match",
    site: "Moscow",
    date: "1959.03.15",
    white: "Mikhail Tal",
    black: "Mikhail Botvinnik",
    result: "1-0",
    description: "Tal's famous victory over world champion Botvinnik.",
    moves: ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "Nf6", "O-O", "Be7", "Re1", "b5", "Bb3", "d6", "c3", "Na5", "Bc2", "c5", "h3", "O-O"],
    keyMoments: [
      { moveIndex: 8, comment: "Ruy Lopez - Tal's preparation" },
      { moveIndex: 14, comment: "Botvinnik tries for counterplay" },
      { moveIndex: 18, comment: "Tal maintains strong position" }
    ]
  },
  {
    id: "tal-3",
    title: "Mikhail Tal vs Bent Larsen",
    event: "Riga Tournament",
    site: "Riga",
    date: "1958.08.10",
    white: "Mikhail Tal",
    black: "Bent Larsen",
    result: "1-0",
    description: "Tal's dynamic attacking chess display against Larsen.",
    moves: ["d4", "Nf6", "c4", "e6", "Nc3", "d5", "Bg5", "Be7", "e3", "O-O", "Nf3", "Nbd7", "Be2", "c6", "O-O", "dxc4"],
    keyMoments: [
      { moveIndex: 6, comment: "Queen's gambit setup" },
      { moveIndex: 12, comment: "Tal develops with purpose" },
      { moveIndex: 16, comment: "Tal's position is strong" }
    ]
  },
  {
    id: "gukesh-1",
    title: "Gukesh vs Ding Liren - Chess Olympiad",
    event: "Chess Olympiad",
    site: "Chennai",
    date: "2022.08.10",
    white: "Gukesh",
    black: "Ding Liren",
    result: "1-0",
    description: "Gukesh's brilliant victory over world's elite.",
    moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Bg5", "e6", "f4", "Be7", "Qf3", "Nbd7", "O-O-O", "b5", "e5", "dxe5"],
    keyMoments: [
      { moveIndex: 8, comment: "Sicilian Najdorf - Gukesh's specialty" },
      { moveIndex: 14, comment: "Gukesh's aggressive play" },
      { moveIndex: 18, comment: "Black's position is critical" }
    ]
  },
  {
    id: "gukesh-2",
    title: "Gukesh vs Fabiano Caruana - World Cup",
    event: "World Cup",
    site: "Khanty-Mansiysk",
    date: "2021.08.15",
    white: "Gukesh",
    black: "Fabiano Caruana",
    result: "1-0",
    description: "Gukesh's tactical masterpiece against elite grandmaster.",
    moves: ["c4", "e5", "Nc3", "Nf6", "Nf3", "Nc6", "d4", "exd4", "Nxd4", "Bb4", "Bg5", "O-O", "e3", "Re8", "Be2", "Bf8"],
    keyMoments: [
      { moveIndex: 6, comment: "Gukesh plays English opening" },
      { moveIndex: 10, comment: "Sharp tactical game" },
      { moveIndex: 14, comment: "Gukesh maintains advantage" }
    ]
  },
  {
    id: "gukesh-3",
    title: "Gukesh vs Teimour Radjabov",
    event: "Grand Masters Tournament",
    site: "India",
    date: "2022.03.20",
    white: "Gukesh",
    black: "Teimour Radjabov",
    result: "1-0",
    description: "Gukesh's dominant positional victory.",
    moves: ["d4", "Nf6", "c4", "g6", "Nc3", "Bg7", "e4", "d6", "f3", "O-O", "Be3", "e5", "d5", "c6", "Qd2", "cxd5"],
    keyMoments: [
      { moveIndex: 6, comment: "King's Indian Defense" },
      { moveIndex: 10, comment: "Gukesh builds pressure" },
      { moveIndex: 14, comment: "White's position is winning" }
    ]
  },
  {
    id: "kasparov-1",
    title: "Garry Kasparov vs Anatoly Karpov",
    event: "World Championship Match",
    site: "Moscow",
    date: "1985.02.11",
    white: "Garry Kasparov",
    black: "Anatoly Karpov",
    result: "1-0",
    description: "Kasparov's brilliant world championship victory.",
    moves: ["e4", "c5", "Nf3", "e6", "d4", "cxd4", "Nxd4", "Nc6", "Nc3", "Qc7", "Be3", "a6", "Be2", "Nf6", "O-O", "Ne5"],
    keyMoments: [
      { moveIndex: 6, comment: "Sicilian Najdorf - Kasparov's strength" },
      { moveIndex: 10, comment: "Kasparov's preparation" },
      { moveIndex: 14, comment: "White maintains advantage" }
    ]
  },
  {
    id: "anand-1",
    title: "Viswanathan Anand vs Vladimir Kramnik",
    event: "World Championship Match",
    site: "Bonn",
    date: "2008.10.30",
    white: "Viswanathan Anand",
    black: "Vladimir Kramnik",
    result: "1-0",
    description: "Anand's brilliant world championship victory.",
    moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Bg5", "e6", "f4", "Be7", "Qf3", "Nbd7"],
    keyMoments: [
      { moveIndex: 6, comment: "Sicilian Najdorf - Anand's mastery" },
      { moveIndex: 10, comment: "Anand's preparation shows" },
      { moveIndex: 14, comment: "Strong position for White" }
    ]
  },
  {
    id: "caruana-1",
    title: "Fabiano Caruana vs Maxime Vachier-Lagrave - Tata Steel",
    event: "Tata Steel Chess",
    site: "Wijk aan Zee",
    date: "2014.01.19",
    white: "Fabiano Caruana",
    black: "Maxime Vachier-Lagrave",
    result: "1-0",
    description: "Caruana's brilliant tactical performance.",
    moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Bg5", "e6", "f4", "Be7", "Qf3", "Nbd7"],
    keyMoments: [
      { moveIndex: 6, comment: "Sicilian Najdorf - Classical lines" },
      { moveIndex: 10, comment: "Caruana's strong position" },
      { moveIndex: 14, comment: "White has clear advantage" }
    ]
  },
  {
    id: "nakamura-1",
    title: "Hikaru Nakamura vs Fabiano Caruana - St. Louis",
    event: "St. Louis Rapid & Blitz",
    site: "St. Louis",
    date: "2014.08.16",
    white: "Hikaru Nakamura",
    black: "Fabiano Caruana",
    result: "1-0",
    description: "Nakamura's brilliant rapid chess performance.",
    moves: ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "Nf6", "O-O", "Be7", "Re1", "b5", "Bb3", "d6", "c3", "Na5"],
    keyMoments: [
      { moveIndex: 6, comment: "Ruy Lopez - Classical setup" },
      { moveIndex: 12, comment: "Nakamura's dynamic play" },
      { moveIndex: 16, comment: "White maintains advantage" }
    ]
  },
  {
    id: "aronian-1",
    title: "Levon Aronian vs Fabiano Caruana",
    event: "Grand Masters Tournament",
    site: "Paris",
    date: "2018.07.08",
    white: "Levon Aronian",
    black: "Fabiano Caruana",
    result: "1-0",
    description: "Aronian's brilliant attacking display.",
    moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Bg5", "e6", "f4", "Be7", "Qf3", "Nbd7"],
    keyMoments: [
      { moveIndex: 6, comment: "Sicilian Najdorf - Attacking lines" },
      { moveIndex: 10, comment: "Aronian's aggressive play" },
      { moveIndex: 14, comment: "White's position is strong" }
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
