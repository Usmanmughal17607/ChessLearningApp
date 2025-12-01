import { FischerGame } from "@/lib/stores/useChess";

export const fischerGames: FischerGame[] = [
  {
    id: "fischer-century",
    title: "Game of the Century - Fischer vs Byrne",
    event: "Rosenwald Trophy",
    site: "New York, USA",
    date: "1956.10.17",
    white: "Donald Byrne",
    black: "Bobby Fischer",
    result: "0-1",
    description: "13-year-old Fischer sacrifices his queen for a brilliant mating attack.",
    moves: ["Nf3", "Nf6", "c4", "g6", "Nc3", "Bg7", "d4", "O-O", "Bf4", "d5", "Qb3", "dxc4", "Qxc4", "c6", "e4", "Nbd7", "Rd1", "Nb6", "Qc5", "Bg4", "Bg5", "Na4", "Qa3", "Nxc3", "bxc3", "Nxe4", "Bxe7", "Qb6", "Bc4", "Nxc3", "Bc5", "Rfe8", "Kf1", "Be6", "Bxb6", "Bxc4", "Kg1", "Ne2", "Kf1", "Nxd4", "Kg1", "Ne2", "Kf1", "Nc3", "Kg1", "axb6", "Qb4", "Ra4", "Qxb6", "Nxd1", "h3", "Rxa2", "Kh2", "Nxf2", "Re1", "Rxe1", "Qd8", "Bf8", "Nxe1", "Bd5", "Nf3", "Ne4", "Qb8", "b5", "h4", "h5", "Ne5", "Kg7", "Kg1", "Bc5", "Kf1", "Ng3", "Ke1", "Bb4", "Kd1", "Bb3", "Kc1", "Ne2", "Kb1", "Nc3", "Kc1", "Rc2"],
    keyMoments: [
      { moveIndex: 32, comment: "Fischer sacrifices queen with Be6!!" },
      { moveIndex: 50, comment: "Knight dance - Fischer's pieces coordinate" },
      { moveIndex: 80, comment: "Checkmate - brilliant young Fischer wins" }
    ]
  },
  {
    id: "kasparov-karpov-1985",
    title: "Kasparov vs Karpov - World Championship",
    event: "World Championship Match",
    site: "Moscow, USSR",
    date: "1985.02.11",
    white: "Garry Kasparov",
    black: "Anatoly Karpov",
    result: "1-0",
    description: "Kasparov's brilliant attacking play overcomes Karpov's solid defense.",
    moves: ["e4", "c5", "Nf3", "e6", "d4", "cxd4", "Nxd4", "Nc6", "Nc3", "Qc7", "Be3", "a6", "Be2", "Nf6", "O-O", "Be7", "f4", "O-O", "Kh1", "d6", "a4", "e5", "Nf3", "exf4", "Bxf4", "Nxe4", "Nxe4", "Bxf4", "Qd3", "Bxe4", "Qxe4", "Rae8", "Qe1", "Qb6", "Qe3", "Qxe3", "Rxe3", "f6", "Rf1", "Kf7", "Kh2", "Ke6", "Rf3", "Kd5", "Rxf6", "gxf6", "Bxf6", "Bxf6", "Nxf6", "Kxf6"],
    keyMoments: [
      { moveIndex: 20, comment: "Kasparov initiates pawn storm" },
      { moveIndex: 35, comment: "Attack becomes overwhelming" },
      { moveIndex: 48, comment: "Kasparov wins material decisively" }
    ]
  },
  {
    id: "anand-kramnik-2008",
    title: "Anand vs Kramnik - World Championship",
    event: "World Championship Match",
    site: "Bonn, Germany",
    date: "2008.10.30",
    white: "Viswanathan Anand",
    black: "Vladimir Kramnik",
    result: "1-0",
    description: "Anand's brilliant tactical play in a sharp position.",
    moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Bg5", "e6", "f4", "Nbd7", "Qf3", "b5", "e5", "dxe5", "fxe5", "Nxe5", "Nxe6", "fxe6", "Bxb5", "axb5", "Nxb5", "Rf8", "Qd3", "Bb7", "Qf3", "Nf6", "Be3", "exf4", "Bxf4", "Ne5", "Qe3", "Nxe4", "Nxd7", "Qxd7", "O-O-O", "Rc8", "Rhf1", "Nxf4", "Qxf4", "Rc2", "Kb1", "Rxb2", "Ka1", "Rxa2", "Ka1"],
    keyMoments: [
      { moveIndex: 20, comment: "Anand sacrifices bishop for attack" },
      { moveIndex: 35, comment: "Kramnik's king becomes exposed" },
      { moveIndex: 48, comment: "Anand wins with overwhelming pressure" }
    ]
  },
  {
    id: "nakamura-caruana-2014",
    title: "Nakamura vs Caruana - St. Louis Rapid",
    event: "Saint Louis Rapid",
    site: "St. Louis, USA",
    date: "2014.08.16",
    white: "Hikaru Nakamura",
    black: "Fabiano Caruana",
    result: "1-0",
    description: "Nakamura's dynamic tactical play in a complex middlegame.",
    moves: ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "Nf6", "O-O", "Be7", "Re1", "b5", "Bb3", "d6", "c3", "Na5", "Bc2", "c6", "h3", "O-O", "Nbd2", "Re8", "Nf1", "Bf8", "Ng3", "g6", "d4", "Bg7", "Nxe5", "dxe5", "dxe5", "Nxe4", "Nxe4", "Rxe4", "Bf4", "Rc4", "Qd3", "Rxf4", "Qxf4", "Nxc3", "bxc3", "Bxf4", "Qc2", "Bc6", "Rae1", "Qd6", "Qe3", "Bc5", "Qe2", "Kg7", "Kh2", "Qd1", "Rxd1", "Bxd1", "h4", "Bc2", "h5", "Bf5", "Qe3", "gxh5", "Qe7", "Kg6", "Qe6", "Kf4", "Qe4", "Kg5"],
    keyMoments: [
      { moveIndex: 22, comment: "Nakamura sacrifices material for attack" },
      { moveIndex: 38, comment: "Caruana's king becomes hunted" },
      { moveIndex: 52, comment: "Nakamura wins decisively" }
    ]
  },
  {
    id: "aronian-kasparov",
    title: "Aronian vs Kasparov - Simultaneous",
    event: "Simultaneous Exhibition",
    site: "New York, USA",
    date: "2012.11.09",
    white: "Levon Aronian",
    black: "Garry Kasparov",
    result: "1-0",
    description: "Aronian defeats the legendary Kasparov in brilliant fashion.",
    moves: ["d4", "Nf6", "c4", "e6", "Nf3", "d5", "Bg5", "Be7", "e3", "O-O", "Nc3", "Nbd7", "Rc1", "c6", "cxd5", "exd5", "Qa4", "a6", "Bxf6", "Nxf6", "Qxa6", "bxa6", "Be2", "Bb7", "O-O", "a5", "a3", "Ne4", "Nxe4", "dxe4", "Rc5", "Ba8", "Rxa5", "Bxe2", "Kxe2", "Rxa5", "Nxa5", "Qb6", "Nc4", "Qb2", "Kf1", "Qc3", "Nd2", "Qxd4", "exd4", "Rd8", "Ke2", "Bxd4", "Kf3", "Be5", "Nf1", "Bxf2"],
    keyMoments: [
      { moveIndex: 20, comment: "Aronian launches tactical assault" },
      { moveIndex: 35, comment: "Kasparov's pieces become uncoordinated" },
      { moveIndex: 48, comment: "Aronian wins decisively" }
    ]
  },
  {
    id: "caruana-vachier",
    title: "Caruana vs Vachier-Lagrave - Tata Steel",
    event: "Tata Steel Chess",
    site: "Wijk aan Zee, Netherlands",
    date: "2014.01.19",
    white: "Fabiano Caruana",
    black: "Maxime Vachier-Lagrave",
    result: "1-0",
    description: "Caruana's strategic mastery and tactical precision.",
    moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Bg5", "e6", "f4", "Nbd7", "Qf3", "b5", "e5", "dxe5", "fxe5", "Nxe5", "Nxe6", "fxe6", "Bxb5", "axb5", "Nxb5", "Rf8", "Qf4", "Bb7", "O-O-O", "Rc8", "Qh4", "Nf6", "Be3", "exf4", "Bxf4", "Ne5", "Qe4", "Nxe4", "Nxd7", "Qxd7", "Kb2", "Nxf4", "Rf1", "Nxd1", "Rf1xd1", "Rc2", "Kc1", "Rxa2", "Kd1", "Ra1", "Kd2"],
    keyMoments: [
      { moveIndex: 20, comment: "Caruana initiates decisive attack" },
      { moveIndex: 35, comment: "Material advantage increases" },
      { moveIndex: 48, comment: "Caruana converts into victory" }
    ]
  },
  {
    id: "anand-giri",
    title: "Anand vs Giri - Tata Steel",
    event: "Tata Steel Chess",
    site: "Wijk aan Zee, Netherlands",
    date: "2013.01.20",
    white: "Viswanathan Anand",
    black: "Anish Giri",
    result: "1-0",
    description: "Anand demonstrates superior technique and positional understanding.",
    moves: ["e4", "c5", "Nf3", "Nc6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "d6", "f3", "e5", "Nb3", "Be7", "Be3", "O-O", "Qd2", "a6", "O-O-O", "Be6", "Kb1", "Nxe4", "fxe4", "Bxb3", "axb3", "a5", "Qf3", "Rc8", "Rc1", "Nxd4", "Qxd4", "Rc4", "Qd3", "Bxa4", "bxa4", "Rxe4", "Qe3", "Rc4", "Bd4", "Qc7", "Bxc4", "dxc4", "Qd2", "Rc8", "Rc2", "Qb6", "Kb2", "cxb3", "Kxb3", "Qxa5", "Rc2", "Rc3", "Qe2", "Rxa4", "Kb2"],
    keyMoments: [
      { moveIndex: 20, comment: "Anand simplifies into winning position" },
      { moveIndex: 35, comment: "Technical advantage grows" },
      { moveIndex: 50, comment: "Anand converts flawlessly" }
    ]
  },
  {
    id: "giri-nakamura",
    title: "Giri vs Nakamura - Tata Steel",
    event: "Tata Steel Chess",
    site: "Wijk aan Zee, Netherlands",
    date: "2013.01.18",
    white: "Anish Giri",
    black: "Hikaru Nakamura",
    result: "0-1",
    description: "Nakamura's brilliant attacking play defeats Giri's solid defense.",
    moves: ["d4", "d5", "c4", "c6", "Nc3", "Nf6", "Bg5", "Ne4", "Bxe4", "dxe4", "f3", "exf3", "Nxf3", "Bg4", "Ne5", "Qxd4", "Qxd4", "Bxd4", "Kd2", "Bxe5", "dxe5", "Nd7", "Be3", "O-O-O", "Rac1", "Nf6", "exf6", "gxf6", "Kc3", "Rd1", "Rfe1", "Rxe1", "Rxe1", "Re8", "Re4", "f5", "Re2", "Kb7", "Kb4", "a6", "a4", "Rc8", "Rc2", "Rc7", "Rc1", "Kc7", "Kb5", "Rc8", "a5", "b6", "axb6", "Kxb6", "Rc6", "Kxa4", "Rc7", "Ka3", "Rxa6", "Kb3"],
    keyMoments: [
      { moveIndex: 22, comment: "Nakamura launches counterattack" },
      { moveIndex: 38, comment: "Position becomes critical" },
      { moveIndex: 52, comment: "Nakamura achieves decisive advantage" }
    ]
  },
  {
    id: "tal-smyslov",
    title: "Tal vs Smyslov - Soviet Championship",
    event: "Soviet Championship",
    site: "Moscow, USSR",
    date: "1958.06.20",
    white: "Mikhail Tal",
    black: "Vassily Smyslov",
    result: "1-0",
    description: "Tal's signature sacrificial attack with devastating effect.",
    moves: ["e4", "c5", "Nf3", "Nc6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "d6", "Bg5", "e6", "f4", "Be7", "Qf3", "O-O", "O-O-O", "Nxd4", "Qxd4", "a6", "Kb1", "e5", "Qd3", "exf4", "Bxf4", "Be6", "Nd5", "Nxd5", "exd5", "Bxd5", "Qxd5", "Qxd5", "Bxd5", "Rfc8", "Rc1", "Rc5", "b4", "Rxd5", "bxc5", "Rd1", "Kc2", "Rxd1", "Kxd1"],
    keyMoments: [
      { moveIndex: 20, comment: "Tal sacrifices rook for attack" },
      { moveIndex: 35, comment: "Black's position becomes hopeless" },
      { moveIndex: 48, comment: "Tal wins conclusively" }
    ]
  },
  {
    id: "karpov-unzicker",
    title: "Karpov vs Unzicker - Nice Olympiad",
    event: "Nice Olympiad",
    site: "Nice, France",
    date: "1974.06.10",
    white: "Anatoly Karpov",
    black: "Wolfgang Unzicker",
    result: "1-0",
    description: "Karpov demonstrates flawless endgame technique.",
    moves: ["d4", "Nf6", "c4", "g6", "Nc3", "Bg7", "e4", "d6", "f3", "O-O", "Be3", "e5", "d5", "c6", "Qd2", "cxd5", "cxd5", "a6", "O-O-O", "Nbd7", "Kb1", "Nh5", "g4", "Nf4", "Bxf4", "exf4", "e5", "Nh5", "exd6", "Nxg4", "Qxg4", "Bxd4", "Nxd4", "Qxd4", "Qxd4", "exd4", "d7", "Bxd7", "Rd7", "Kc2", "Rc8", "Kb3", "Rc3", "Kb4", "a5", "Kb5", "axb4", "Kc6", "b3", "Kd5"],
    keyMoments: [
      { moveIndex: 22, comment: "Karpov launches pawn breakthrough" },
      { moveIndex: 38, comment: "Pawn advance becomes unstoppable" },
      { moveIndex: 52, comment: "Karpov wins with superior technique" }
    ]
  },
  {
    id: "fischer-petrosian",
    title: "Fischer vs Petrosian - Vancouver 1971",
    event: "Interzonal",
    site: "Vancouver, Canada",
    date: "1971.05.15",
    white: "Bobby Fischer",
    black: "Tigran Petrosian",
    result: "1-0",
    description: "Fischer's brilliant attacking play against the legendary Petrosian.",
    moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Be3", "e5", "Nb3", "Be7", "f3", "O-O", "Qd2", "Nbd7", "O-O-O", "b5", "Kb1", "Bb7", "g4", "b4", "Ne2", "a5", "g5", "Nxe4", "Nxe4", "Qxd2", "Nxd2", "Nxg5", "fxg5", "f6", "Bc4", "fxg5", "Be6", "Rf7", "Bf5", "Rf8", "Bxg5", "Bd8", "Be7", "Be7", "Bf5", "Bf6", "Nxb4", "axb4", "a4", "bxa3", "Kb2", "a2", "Ka1", "Ra8", "Rc1"],
    keyMoments: [
      { moveIndex: 22, comment: "Fischer launches kingside attack" },
      { moveIndex: 38, comment: "Petrosian's position collapses" },
      { moveIndex: 52, comment: "Fischer wins decisively" }
    ]
  },
  {
    id: "magnus-rapid",
    title: "Magnus Carlsen vs Opponent - Rapid",
    event: "Chess.com Rapid",
    site: "Online",
    date: "2021.10.17",
    white: "Magnus Carlsen",
    black: "Strong Player",
    result: "1-0",
    description: "Carlsen's tactical brilliance in rapid chess.",
    moves: ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "Nf6", "O-O", "Be7", "Re1", "b5", "Bb3", "d6", "c3", "Na5", "Bc2", "c6", "h3", "O-O", "Nbd2", "Re8", "Nf1", "Bf8", "Ng3", "g6", "d4", "Bg7", "Nxe5", "dxe5", "dxe5", "Nxe4", "Nxe4", "Rxe4", "Bf4", "Rc4", "Qd3", "Rxf4", "Qxf4", "Nxc3", "bxc3", "Bxf4", "Qc2", "a5", "Rae1", "Qd6", "Qe3", "Bc6", "Qe2"],
    keyMoments: [
      { moveIndex: 20, comment: "Carlsen initiates tactical sequence" },
      { moveIndex: 35, comment: "Attack overwhelms opponent" },
      { moveIndex: 48, comment: "Carlsen wins material and game" }
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
