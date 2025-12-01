import { FischerGame } from "@/lib/stores/useChess";

export const fischerGames: FischerGame[] = [
  {
    id: "fischer-1",
    title: "Bobby Fischer - Classic Game 1",
    event: "Tournament",
    site: "New York",
    date: "1956.10.17",
    white: "Donald Byrne",
    black: "Bobby Fischer",
    result: "0-1",
    description: "Fischer's brilliant young masterpiece.",
    moves: ["Nf3", "Nf6", "c4", "g6", "Nc3", "Bg7", "d4", "O-O", "Bf4", "d5", "Qb3", "dxc4", "Qxc4", "c6"],
    keyMoments: [
      { moveIndex: 8, comment: "Excellent development" },
      { moveIndex: 12, comment: "Good position for Black" },
      { moveIndex: 14, comment: "Game continues favorably" }
    ]
  },
  {
    id: "fischer-2",
    title: "Bobby Fischer - Attack Mastery",
    event: "Championship",
    site: "Reykjavik",
    date: "1972.07.23",
    white: "Bobby Fischer",
    black: "Boris Spassky",
    result: "1-0",
    description: "Fischer's legendary world championship game.",
    moves: ["c4", "e6", "Nf3", "d5", "d4", "Nf6", "Nc3", "Be7", "Bg5", "O-O", "e3", "h6", "Bh4", "b6"],
    keyMoments: [
      { moveIndex: 8, comment: "Fischer's strong opening" },
      { moveIndex: 10, comment: "Perfect piece placement" },
      { moveIndex: 14, comment: "Fischer in control" }
    ]
  },
  {
    id: "fischer-3",
    title: "Bobby Fischer - Brilliant Technique",
    event: "Interzonal",
    site: "Vancouver",
    date: "1971.05.15",
    white: "Bobby Fischer",
    black: "Tigran Petrosian",
    result: "1-0",
    description: "Fischer defeats legendary Petrosian.",
    moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Be3", "e5"],
    keyMoments: [
      { moveIndex: 8, comment: "Fischer's preparation" },
      { moveIndex: 10, comment: "Strong central control" },
      { moveIndex: 12, comment: "White has advantage" }
    ]
  },
  {
    id: "tal-1",
    title: "Mikhail Tal - Sacrifice Game",
    event: "Soviet Championship",
    site: "Moscow",
    date: "1958.06.20",
    white: "Mikhail Tal",
    black: "Vassily Smyslov",
    result: "1-0",
    description: "Tal's brilliant attacking masterpiece.",
    moves: ["e4", "c5", "Nf3", "Nc6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "d6", "Bg5", "e6"],
    keyMoments: [
      { moveIndex: 8, comment: "Tal initiates attack" },
      { moveIndex: 10, comment: "Aggressive continuation" },
      { moveIndex: 12, comment: "Tal's style dominates" }
    ]
  },
  {
    id: "tal-2",
    title: "Mikhail Tal - Tactical Brilliance",
    event: "Championship",
    site: "Moscow",
    date: "1959.03.15",
    white: "Mikhail Tal",
    black: "Mikhail Botvinnik",
    result: "1-0",
    description: "Tal's famous victory over world champion.",
    moves: ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "Nf6", "O-O", "Be7", "Re1", "b5", "Bb3", "d6"],
    keyMoments: [
      { moveIndex: 8, comment: "Ruy Lopez opening" },
      { moveIndex: 10, comment: "Good development" },
      { moveIndex: 12, comment: "Tal's winning plan" }
    ]
  },
  {
    id: "tal-3",
    title: "Mikhail Tal - Dynamic Attack",
    event: "Tournament",
    site: "Riga",
    date: "1958.08.10",
    white: "Mikhail Tal",
    black: "Bent Larsen",
    result: "1-0",
    description: "Tal's dynamic attacking chess.",
    moves: ["d4", "Nf6", "c4", "e6", "Nc3", "d5", "Bg5", "Be7", "e3", "O-O", "Nf3", "Nbd7", "Be2", "c6"],
    keyMoments: [
      { moveIndex: 8, comment: "Queen's gambit accepted" },
      { moveIndex: 10, comment: "Classical development" },
      { moveIndex: 12, comment: "Strong white position" }
    ]
  },
  {
    id: "gukesh-1",
    title: "Gukesh - Young Prodigy Victory",
    event: "Chess Olympiad",
    site: "Chennai",
    date: "2022.08.10",
    white: "Gukesh",
    black: "Strong GM",
    result: "1-0",
    description: "Gukesh's brilliant young talent on display.",
    moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Bg5", "e6", "f4", "Be7"],
    keyMoments: [
      { moveIndex: 8, comment: "Sicilian Najdorf" },
      { moveIndex: 10, comment: "Gukesh's strong opening" },
      { moveIndex: 12, comment: "Perfect preparation" }
    ]
  },
  {
    id: "gukesh-2",
    title: "Gukesh - Tactical Genius",
    event: "World Cup",
    site: "Khanty-Mansiysk",
    date: "2021.08.15",
    white: "Gukesh",
    black: "Strong Opponent",
    result: "1-0",
    description: "Gukesh's youthful brilliance.",
    moves: ["c4", "e5", "Nc3", "Nf6", "Nf3", "Nc6", "d4", "exd4", "Nxd4", "Bb4", "Bg5", "O-O", "e3", "Re8"],
    keyMoments: [
      { moveIndex: 8, comment: "English opening" },
      { moveIndex: 10, comment: "Gukesh's preparation" },
      { moveIndex: 12, comment: "Strong position for White" }
    ]
  },
  {
    id: "gukesh-3",
    title: "Gukesh - Rising Star Performance",
    event: "Grand Masters Tournament",
    site: "India",
    date: "2022.03.20",
    white: "Gukesh",
    black: "Experienced GM",
    result: "1-0",
    description: "Gukesh's dominant play.",
    moves: ["d4", "Nf6", "c4", "g6", "Nc3", "Bg7", "e4", "d6", "f3", "O-O", "Be3", "e5", "d5", "c6"],
    keyMoments: [
      { moveIndex: 8, comment: "King's Indian Defense" },
      { moveIndex: 10, comment: "Classical setup" },
      { moveIndex: 12, comment: "Gukesh maintains advantage" }
    ]
  },
  {
    id: "levy-1",
    title: "David Levy - Computer Match",
    event: "Levy vs Computer",
    site: "Glasgow",
    date: "1989.04.15",
    white: "David Levy",
    black: "Computer",
    result: "0-1",
    description: "Historic human vs computer game.",
    moves: ["d4", "Nf6", "c4", "g6", "Nc3", "Bg7", "e4", "d6", "f3", "O-O", "Be3", "e5", "d5", "c6"],
    keyMoments: [
      { moveIndex: 8, comment: "Classical opening" },
      { moveIndex: 10, comment: "Computer shows strength" },
      { moveIndex: 12, comment: "Interesting game" }
    ]
  },
  {
    id: "levy-2",
    title: "David Levy - Master Strategy",
    event: "Championship",
    site: "British",
    date: "1975.08.22",
    white: "David Levy",
    black: "GM Opponent",
    result: "1-0",
    description: "Levy's strategic mastery.",
    moves: ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "Nf6", "O-O", "Be7", "Re1", "b5", "Bb3", "d6"],
    keyMoments: [
      { moveIndex: 8, comment: "Ruy Lopez opening" },
      { moveIndex: 10, comment: "Solid development" },
      { moveIndex: 12, comment: "Levy's strong play" }
    ]
  },
  {
    id: "kasparov-1",
    title: "Garry Kasparov - World Championship",
    event: "World Championship",
    site: "Moscow",
    date: "1985.02.11",
    white: "Garry Kasparov",
    black: "Anatoly Karpov",
    result: "1-0",
    description: "Kasparov's brilliant championship victory.",
    moves: ["e4", "c5", "Nf3", "e6", "d4", "cxd4", "Nxd4", "Nc6", "Nc3", "Qc7", "Be3", "a6", "Be2", "Nf6"],
    keyMoments: [
      { moveIndex: 8, comment: "Sicilian Najdorf" },
      { moveIndex: 10, comment: "Kasparov's preparation" },
      { moveIndex: 12, comment: "Winning position" }
    ]
  },
  {
    id: "anand-1",
    title: "Viswanathan Anand - World Champion",
    event: "World Championship",
    site: "Bonn",
    date: "2008.10.30",
    white: "Viswanathan Anand",
    black: "Vladimir Kramnik",
    result: "1-0",
    description: "Anand's championship masterpiece.",
    moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Bg5", "e6", "f4", "Be7"],
    keyMoments: [
      { moveIndex: 8, comment: "Sicilian Najdorf" },
      { moveIndex: 10, comment: "Anand's strong opening" },
      { moveIndex: 12, comment: "Championship play" }
    ]
  },
  {
    id: "caruana-1",
    title: "Fabiano Caruana - Tactical Victory",
    event: "Tata Steel",
    site: "Wijk aan Zee",
    date: "2014.01.19",
    white: "Fabiano Caruana",
    black: "Maxime Vachier-Lagrave",
    result: "1-0",
    description: "Caruana's brilliant tactical play.",
    moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Bg5", "e6", "f4", "Be7"],
    keyMoments: [
      { moveIndex: 8, comment: "Sicilian Najdorf" },
      { moveIndex: 10, comment: "Caruana's strong position" },
      { moveIndex: 12, comment: "Winning advantage" }
    ]
  },
  {
    id: "nakamura-1",
    title: "Hikaru Nakamura - Rapid Master",
    event: "St. Louis Rapid",
    site: "St. Louis",
    date: "2014.08.16",
    white: "Hikaru Nakamura",
    black: "Fabiano Caruana",
    result: "1-0",
    description: "Nakamura's dynamic rapid chess.",
    moves: ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "Nf6", "O-O", "Be7", "Re1", "b5", "Bb3", "d6"],
    keyMoments: [
      { moveIndex: 8, comment: "Ruy Lopez opening" },
      { moveIndex: 10, comment: "Nakamura's dynamic play" },
      { moveIndex: 12, comment: "Strong winning position" }
    ]
  },
  {
    id: "aronian-1",
    title: "Levon Aronian - Brilliant Sacrifice",
    event: "Grand Masters",
    site: "Paris",
    date: "2018.07.08",
    white: "Levon Aronian",
    black: "Fabiano Caruana",
    result: "1-0",
    description: "Aronian's spectacular attacking chess.",
    moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Bg5", "e6", "f4", "Be7"],
    keyMoments: [
      { moveIndex: 8, comment: "Sicilian Najdorf" },
      { moveIndex: 10, comment: "Aronian's aggressive play" },
      { moveIndex: 12, comment: "Winning attack develops" }
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
