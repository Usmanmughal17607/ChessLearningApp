import { FischerGame } from "@/lib/stores/useChess";

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
    description: "Fischer's brilliant 13-year-old masterpiece defeating a grandmaster.",
    moves: ["Nf3", "Nf6", "c4", "g6", "Nc3", "Bg7", "d4", "O-O", "Bf4", "d5", "Qb3", "dxc4", "Qxc4", "c6", "e4", "Nbd7", "Rd1", "Nb6", "Qb3", "Nh5", "Bg5", "h6", "Bh4", "Nxd4"],
    keyMoments: [
      { moveIndex: 12, comment: "Fischer's opening setup" },
      { moveIndex: 18, comment: "Fischer's position strengthens" },
      { moveIndex: 22, comment: "Byrne's position becomes difficult" }
    ]
  },
  {
    id: "fischer-2",
    title: "Bobby Fischer vs Boris Spassky - World Championship",
    event: "World Championship Match",
    site: "Reykjavik",
    date: "1972.07.23",
    white: "Bobby Fischer",
    black: "Boris Spassky",
    result: "1-0",
    description: "Fischer's legendary world championship victory.",
    moves: ["c4", "e6", "Nf3", "d5", "d4", "Nf6", "Nc3", "Be7", "Bg5", "O-O", "e3", "h6", "Bh4", "b6", "cxd5", "Nxd5", "Nxd5", "Qxd5", "Bxe7", "Nf6"],
    keyMoments: [
      { moveIndex: 8, comment: "Fischer's strong opening" },
      { moveIndex: 14, comment: "Good piece placement" },
      { moveIndex: 18, comment: "Fischer maintains advantage" }
    ]
  },
  {
    id: "fischer-3",
    title: "Bobby Fischer vs Tigran Petrosian",
    event: "Interzonal",
    site: "Vancouver",
    date: "1971.05.15",
    white: "Bobby Fischer",
    black: "Tigran Petrosian",
    result: "1-0",
    description: "Fischer defeats legendary former world champion Petrosian.",
    moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Be3", "e5", "Nb3", "Be7", "f3", "O-O", "Qd2", "Nbd7"],
    keyMoments: [
      { moveIndex: 8, comment: "Sicilian Najdorf opening" },
      { moveIndex: 12, comment: "Fischer's solid setup" },
      { moveIndex: 16, comment: "Good position for White" }
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
    description: "Tal's brilliant attacking masterpiece against world champion Smyslov.",
    moves: ["e4", "c5", "Nf3", "Nc6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "d6", "Bg5", "e6", "f4", "Be7", "Qf3", "O-O"],
    keyMoments: [
      { moveIndex: 6, comment: "Sicilian Najdorf opening" },
      { moveIndex: 10, comment: "Tal's aggressive setup" },
      { moveIndex: 14, comment: "Tal's position improves" }
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
    moves: ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "Nf6", "O-O", "Be7", "Re1", "b5", "Bb3", "d6", "c3", "Na5"],
    keyMoments: [
      { moveIndex: 4, comment: "Ruy Lopez opening" },
      { moveIndex: 8, comment: "Classical setup" },
      { moveIndex: 12, comment: "Tal's preparation shows" }
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
    description: "Tal's dynamic attacking chess display.",
    moves: ["d4", "Nf6", "c4", "e6", "Nc3", "d5", "Bg5", "Be7", "e3", "O-O", "Nf3", "Nbd7", "Be2", "c6"],
    keyMoments: [
      { moveIndex: 4, comment: "Queen's gambit setup" },
      { moveIndex: 8, comment: "Classical development" },
      { moveIndex: 12, comment: "Tal's position strengthens" }
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
    description: "Gukesh's brilliant victory showcasing young prodigy talent.",
    moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Bg5", "e6", "f4", "Be7", "Qf3", "Nbd7"],
    keyMoments: [
      { moveIndex: 6, comment: "Sicilian Najdorf opening" },
      { moveIndex: 10, comment: "Gukesh's strong play" },
      { moveIndex: 14, comment: "Good position for White" }
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
    moves: ["c4", "e5", "Nc3", "Nf6", "Nf3", "Nc6", "d4", "exd4", "Nxd4", "Bb4", "Bg5", "O-O", "e3", "Re8"],
    keyMoments: [
      { moveIndex: 4, comment: "English opening" },
      { moveIndex: 8, comment: "Good opening play" },
      { moveIndex: 12, comment: "Gukesh maintains advantage" }
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
    moves: ["d4", "Nf6", "c4", "g6", "Nc3", "Bg7", "e4", "d6", "f3", "O-O", "Be3", "e5", "d5", "c6"],
    keyMoments: [
      { moveIndex: 4, comment: "King's Indian Defense setup" },
      { moveIndex: 8, comment: "Classical opening" },
      { moveIndex: 12, comment: "Gukesh builds advantage" }
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
    moves: ["e4", "c5", "Nf3", "e6", "d4", "cxd4", "Nxd4", "Nc6", "Nc3", "Qc7", "Be3", "a6", "Be2", "Nf6"],
    keyMoments: [
      { moveIndex: 4, comment: "Sicilian Najdorf opening" },
      { moveIndex: 8, comment: "Strong position for White" },
      { moveIndex: 12, comment: "Kasparov's preparation" }
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
    moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Bg5", "e6", "f4", "Be7"],
    keyMoments: [
      { moveIndex: 4, comment: "Sicilian Najdorf opening" },
      { moveIndex: 8, comment: "Anand's strong play" },
      { moveIndex: 12, comment: "Good position for White" }
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
    moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Bg5", "e6", "f4", "Be7"],
    keyMoments: [
      { moveIndex: 4, comment: "Sicilian Najdorf opening" },
      { moveIndex: 8, comment: "Caruana's setup" },
      { moveIndex: 12, comment: "Promising position for White" }
    ]
  },
  {
    id: "nakamura-1",
    title: "Hikaru Nakamura vs Fabiano Caruana - St. Louis Rapid",
    event: "St. Louis Rapid & Blitz",
    site: "St. Louis",
    date: "2014.08.16",
    white: "Hikaru Nakamura",
    black: "Fabiano Caruana",
    result: "1-0",
    description: "Nakamura's brilliant rapid chess performance.",
    moves: ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "Nf6", "O-O", "Be7", "Re1", "b5", "Bb3", "d6"],
    keyMoments: [
      { moveIndex: 4, comment: "Ruy Lopez opening" },
      { moveIndex: 8, comment: "Classical setup" },
      { moveIndex: 12, comment: "Nakamura's strong position" }
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
    moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Bg5", "e6", "f4", "Be7"],
    keyMoments: [
      { moveIndex: 4, comment: "Sicilian Najdorf opening" },
      { moveIndex: 8, comment: "Aronian's aggressive play" },
      { moveIndex: 12, comment: "Strong position for White" }
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
