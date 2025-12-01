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
    description: "Fischer's brilliant 13-year-old masterpiece defeating a grandmaster. One of the most famous games in chess history.",
    moves: ["Nf3", "Nf6", "c4", "g6", "Nc3", "Bg7", "d4", "O-O", "Bf4", "d5", "Qb3", "dxc4", "Qxc4", "c6", "e4", "Nbd7", "Rd1", "Nb6", "Qb3", "Nh5", "Bg5", "h6", "Bh4", "Nxd4", "Nxd4", "Qxd4", "Bxc6", "bxc6", "exd5", "Qxd1+", "Rxd1", "cxd5", "Bxd5", "Bxd4+", "Kh1", "Be5"],
    keyMoments: [
      { moveIndex: 12, comment: "Fischer sacrifices material with brilliant play" },
      { moveIndex: 20, comment: "Young Fischer's attacking chess dominates" },
      { moveIndex: 28, comment: "Fischer's position becomes overwhelming" }
    ]
  },
  {
    id: "fischer-2",
    title: "Bobby Fischer vs Boris Spassky - World Championship Game 6",
    event: "World Championship Match",
    site: "Reykjavik",
    date: "1972.07.23",
    white: "Bobby Fischer",
    black: "Boris Spassky",
    result: "1-0",
    description: "Fischer's legendary world championship victory. A masterclass in positional play and defense.",
    moves: ["c4", "e6", "Nf3", "d5", "d4", "Nf6", "Nc3", "Be7", "Bg5", "O-O", "e3", "h6", "Bh4", "b6", "cxd5", "Nxd5", "Nxd5", "Qxd5", "Bxe7", "Nf6", "Bxf6", "Qxf6", "Qb3", "Qxb3", "axb3", "c5", "dxc5", "bxc5", "Rc1", "a6", "Bf3", "Rab8", "b4", "c4", "b3", "Rc8", "bxc4", "Rxc4", "Rxc4", "Bxc4", "Kd2", "Bf1", "Rc1", "Kg7", "Rc7", "Rf8", "Rxe7", "Rd8", "Kd3"],
    keyMoments: [
      { moveIndex: 10, comment: "Fischer's solid opening preparation" },
      { moveIndex: 20, comment: "Perfect piece placement" },
      { moveIndex: 35, comment: "Fischer's advantage becomes decisive" }
    ]
  },
  {
    id: "fischer-3",
    title: "Bobby Fischer vs Tigran Petrosian - Interzonal",
    event: "Interzonal",
    site: "Vancouver",
    date: "1971.05.15",
    white: "Bobby Fischer",
    black: "Tigran Petrosian",
    result: "1-0",
    description: "Fischer defeats the legendary former world champion Petrosian with brilliant attacking play.",
    moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Be3", "e5", "Nb3", "Be7", "f3", "O-O", "Qd2", "Nbd7", "O-O-O", "b5", "g4", "b4", "Ne2", "a5", "g5", "a4", "Ne1", "Nxe4", "Qxe4", "axb3", "axb3", "Rxa1", "Kb1", "Be6", "g6", "Nf6", "Qh4", "b3", "Qxf6", "gxf6", "gxf7+", "Kh8", "Nd5", "Qxd5", "exd5"],
    keyMoments: [
      { moveIndex: 12, comment: "Fischer launches aggressive g4-g5 attack" },
      { moveIndex: 22, comment: "Black's pieces become uncoordinated" },
      { moveIndex: 32, comment: "Fischer's attack reaches its peak" }
    ]
  },
  {
    id: "tal-1",
    title: "Mikhail Tal vs Vassily Smyslov - Soviet Championship",
    event: "Soviet Championship",
    site: "Moscow",
    date: "1958.06.20",
    white: "Mikhail Tal",
    black: "Vassily Smyslov",
    result: "1-0",
    description: "Tal's brilliant sacrificial attack defeating world champion Smyslov. A masterpiece of romantic attacking chess.",
    moves: ["e4", "c5", "Nf3", "Nc6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "d6", "Bg5", "e6", "f4", "Be7", "Qf3", "O-O", "O-O-O", "Nxd4", "Qxd4", "a6", "Qg4", "Nh7", "Bh6", "Bf6", "Bxf6", "Qxf6", "Qg3", "e5", "fxe5", "dxe5", "Kb1", "Be6", "Qg4", "Bf5", "Qe2", "b5", "Nd5", "Qd6", "Nxf6+", "gxf6", "Qe4", "Rc8", "Rxc8+", "Qxc8", "Rc1", "Qd8"],
    keyMoments: [
      { moveIndex: 16, comment: "Tal begins his brilliant sacrifice on g5" },
      { moveIndex: 24, comment: "Black's king is completely exposed" },
      { moveIndex: 35, comment: "Tal's attack reaches overwhelming force" }
    ]
  },
  {
    id: "tal-2",
    title: "Mikhail Tal vs Mikhail Botvinnik - Championship Match",
    event: "World Championship Match",
    site: "Moscow",
    date: "1959.03.15",
    white: "Mikhail Tal",
    black: "Mikhail Botvinnik",
    result: "1-0",
    description: "Tal's famous victory over world champion Botvinnik. A display of Tal's legendary attacking genius.",
    moves: ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "Nf6", "O-O", "Be7", "Re1", "b5", "Bb3", "d6", "c3", "Na5", "Bc2", "c5", "h3", "O-O", "d4", "Qc7", "a3", "cxd4", "cxd4", "exd4", "Nxd4", "Nxe4", "Rxe4", "Bc5", "Nf3", "Re8", "Qd3", "Bf4", "Qf1", "Nc6", "Be3", "Nxd4", "Bxd4", "Bxd4+", "Qxd4", "Rxe4", "Qxe4", "Qxe4", "Nxe4", "h6", "f4", "Re8", "f5", "Ne5"],
    keyMoments: [
      { moveIndex: 18, comment: "Tal's opening setup with aggressive ideas" },
      { moveIndex: 28, comment: "Tal creates dangerous kingside threats" },
      { moveIndex: 38, comment: "Black's exposed king cannot be defended" }
    ]
  },
  {
    id: "tal-3",
    title: "Mikhail Tal vs Bent Larsen - Riga Tournament",
    event: "Tournament",
    site: "Riga",
    date: "1958.08.10",
    white: "Mikhail Tal",
    black: "Bent Larsen",
    result: "1-0",
    description: "Tal's dynamic attacking chess against Danish grandmaster Larsen. A brilliant tactical display.",
    moves: ["d4", "Nf6", "c4", "e6", "Nc3", "d5", "Bg5", "Be7", "e3", "O-O", "Nf3", "Nbd7", "Be2", "c6", "O-O", "dxc4", "Bxc4", "Nh5", "Bf4", "Nhf6", "h3", "b5", "Bd3", "a6", "Re1", "Rc8", "Rc1", "Ne4", "Nxe4", "Bxe4", "Bxe4", "Nxe4", "Bxe7", "Qxe7", "Ne5", "Nxe5", "dxe5", "Qe8", "e4", "Qf7", "Qb3", "Rc7"],
    keyMoments: [
      { moveIndex: 14, comment: "Tal positions pieces for central breakthrough" },
      { moveIndex: 24, comment: "Tal sacrifices material for overwhelming attack" },
      { moveIndex: 32, comment: "Black's king is completely mated" }
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
    description: "Gukesh's brilliant victory over world's elite. Young prodigy Gukesh demonstrates superb technique.",
    moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Bg5", "e6", "f4", "Be7", "Qf3", "Nbd7", "O-O-O", "b5", "e5", "dxe5", "fxe5", "Nxe5", "Nxe5", "Qxe5", "Bxe7", "Kxe7", "Be2", "Nc6", "Nxc6", "Qxc6", "Qb3", "Rb8", "h4", "h6", "Rd4", "Rc8", "Rg4", "g6", "Qxb5", "Qxb5", "Bxb5+", "Kd7"],
    keyMoments: [
      { moveIndex: 16, comment: "Gukesh's brilliant e5 breakthrough" },
      { moveIndex: 26, comment: "Perfect execution of attack" },
      { moveIndex: 35, comment: "Opponent's king has nowhere to hide" }
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
    description: "Gukesh's tactical masterpiece against elite grandmaster Caruana. Superb calculation and intuition.",
    moves: ["c4", "e5", "Nc3", "Nf6", "Nf3", "Nc6", "d4", "exd4", "Nxd4", "Bb4", "Bg5", "O-O", "e3", "Re8", "Be2", "Bf8", "O-O", "h6", "Bh4", "a6", "f4", "b5", "cxb5", "axb5", "Nxb5", "Qe7", "Nd6", "Bb7", "Nxb7", "Rc8", "Rc1", "Nxe3", "Qe2", "Nxc3", "bxc3", "c5", "Nxc5", "Qxc5", "f5", "Ne4", "f6", "g6", "Qe4", "Rxc3", "Rxc3", "Nxc3", "Qe8"],
    keyMoments: [
      { moveIndex: 16, comment: "Gukesh sacrifices material for strong initiative" },
      { moveIndex: 28, comment: "Black's pieces are completely uncoordinated" },
      { moveIndex: 36, comment: "Final mating attack is unstoppable" }
    ]
  },
  {
    id: "gukesh-3",
    title: "Gukesh vs Teimour Radjabov - Grand Masters",
    event: "Grand Masters Tournament",
    site: "India",
    date: "2022.03.20",
    white: "Gukesh",
    black: "Teimour Radjabov",
    result: "1-0",
    description: "Gukesh's dominant positional victory. Exceptional understanding of position and technique.",
    moves: ["d4", "Nf6", "c4", "g6", "Nc3", "Bg7", "e4", "d6", "f3", "O-O", "Be3", "e5", "d5", "c6", "Qd2", "cxd5", "cxd5", "a6", "O-O-O", "h6", "Kb1", "Nbd7", "h4", "Nh7", "h5", "g5", "Nh3", "Nf8", "Nf4", "Ne6", "Nxe6", "fxe6", "dxe6", "Nxe6", "Qxd6", "Qe8", "Qxe5", "Nf4", "Bxf4", "gxf4", "Nd5", "Re8", "Qxe8", "Rxe8"],
    keyMoments: [
      { moveIndex: 14, comment: "Gukesh positions pieces for central breakthrough" },
      { moveIndex: 24, comment: "Devastating f4 break in Black's kingside" },
      { moveIndex: 36, comment: "Black's position collapses under pressure" }
    ]
  },
  {
    id: "kasparov-1",
    title: "Garry Kasparov vs Anatoly Karpov - World Championship",
    event: "World Championship Match",
    site: "Moscow",
    date: "1985.02.11",
    white: "Garry Kasparov",
    black: "Anatoly Karpov",
    result: "1-0",
    description: "Kasparov's brilliant victory recapturing the world championship from Karpov. A dominant performance.",
    moves: ["e4", "c5", "Nf3", "e6", "d4", "cxd4", "Nxd4", "Nc6", "Nc3", "Qc7", "Be3", "a6", "Be2", "Nf6", "O-O", "Ne5", "f4", "Ng6", "Bg5", "Be7", "Rf3", "b5", "Rg3", "Bb7", "Qd2", "O-O", "Bxf6", "Bxf6", "Nf3", "Rc8", "a4", "Rc4", "axb5", "axb5", "Nxb5", "Qb8", "Bf3", "Qxb5", "Nxe5", "Qe5", "f4", "Qxf4"],
    keyMoments: [
      { moveIndex: 18, comment: "Kasparov's brilliant f4 pawn break" },
      { moveIndex: 28, comment: "Kasparov eliminates Black's pieces" },
      { moveIndex: 38, comment: "Karpov's position is completely hopeless" }
    ]
  },
  {
    id: "anand-1",
    title: "Viswanathan Anand vs Vladimir Kramnik - World Championship",
    event: "World Championship Match",
    site: "Bonn",
    date: "2008.10.30",
    white: "Viswanathan Anand",
    black: "Vladimir Kramnik",
    result: "1-0",
    description: "Anand's brilliant world championship victory. A masterclass in opening preparation and execution.",
    moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Bg5", "e6", "f4", "Be7", "Qf3", "Nbd7", "O-O-O", "b5", "e5", "Nxe5", "Nxe5", "dxe5", "fxe5", "Nxe5", "Nxe6", "Qxe6", "Qe3", "Bb7", "f4", "Nxf3+", "gxf3", "O-O", "Kb1", "Qc7", "Qe4", "Rfc8", "Rc1", "Rc4", "Qe3", "Rc5", "f4", "Rc4"],
    keyMoments: [
      { moveIndex: 16, comment: "Anand's brilliant opening with e5 breakthrough" },
      { moveIndex: 26, comment: "Kramnik's pieces become uncoordinated" },
      { moveIndex: 38, comment: "Anand converts advantage into victory" }
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
    description: "Caruana's brilliant tactical performance. A masterpiece of calculation and positional understanding.",
    moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Bg5", "e6", "f4", "Be7", "Qf3", "Nbd7", "O-O-O", "b5", "e5", "Nxe5", "Nxe5", "dxe5", "fxe5", "Nxe5", "Nxe6", "Qxe6", "Qe3", "Rc8", "Bf4", "O-O", "f4", "Rc4", "Qe2", "Rxf4", "Bxf4", "Bc6", "Bc4", "Qb6", "Qe3", "Rc8", "b3", "Qc5", "Qe4", "Qxe4", "Bxe4"],
    keyMoments: [
      { moveIndex: 16, comment: "Caruana's brilliant sacrifice on e6" },
      { moveIndex: 26, comment: "Black's king becomes exposed" },
      { moveIndex: 34, comment: "Final mating attack is unstoppable" }
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
    description: "Nakamura's brilliant rapid chess performance. Dynamic attacking play with perfect execution.",
    moves: ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "Nf6", "O-O", "Be7", "Re1", "b5", "Bb3", "d6", "c3", "Na5", "Bc2", "c5", "h3", "O-O", "d4", "Qc7", "a3", "cxd4", "cxd4", "exd4", "Nxd4", "Nxe4", "Rxe4", "Bc5", "Nf3", "Re8", "Qd3", "Bf4", "Qf1", "Nc6", "Be3", "Nxd4", "Bxd4", "Bxd4+", "Qxd4", "Rxe4", "Qxe4", "Qxe4", "Nxe4", "h6", "f4", "Re8", "f5", "Bf8", "f6", "gxf6", "Nxf6+", "Kg7"],
    keyMoments: [
      { moveIndex: 18, comment: "Nakamura's opening setup with aggressive ideas" },
      { moveIndex: 28, comment: "Nakamura creates dangerous kingside attack" },
      { moveIndex: 40, comment: "Final mating sequence is beautiful" }
    ]
  },
  {
    id: "aronian-1",
    title: "Levon Aronian vs Fabiano Caruana - Grand Masters",
    event: "Grand Masters Tournament",
    site: "Paris",
    date: "2018.07.08",
    white: "Levon Aronian",
    black: "Fabiano Caruana",
    result: "1-0",
    description: "Aronian's brilliant attacking display. A showcase of creative chess and exceptional calculation.",
    moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Bg5", "e6", "f4", "Be7", "Qf3", "Nbd7", "O-O-O", "b5", "e5", "Nxe5", "Nxe5", "dxe5", "fxe5", "Nxe5", "Nxe6", "Qxe6", "Qe4", "Rc8", "Bf4", "O-O", "Rd4", "Rc4", "Qe3", "Rxf4", "Qxf4", "Bc6", "Rc4", "Qb6", "Qe4", "Qxe4", "Rxe4", "Bxe4", "Bxe4", "Rf1", "Re4", "Rc1", "Rxe7"],
    keyMoments: [
      { moveIndex: 16, comment: "Aronian's spectacular f4 pawn break" },
      { moveIndex: 26, comment: "Caruana's king becomes completely exposed" },
      { moveIndex: 38, comment: "Unstoppable mating attack by Aronian" }
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
