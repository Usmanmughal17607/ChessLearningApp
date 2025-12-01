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
    moves: ["Nf3", "Nf6", "c4", "g6", "Nc3", "Bg7", "d4", "O-O", "Bf4", "d5", "Qb3", "dxc4", "Qxc4", "c6", "e4", "Nbd7", "Rd1", "Nb6", "Qb3", "Nh5", "Bg5", "h6", "Bh4", "Nxd4", "Nxd4", "Qxd4", "Bxc6", "bxc6", "exd5", "Qxd1+", "Rxd1", "cxd5", "Bxd5", "Bxd4+", "Kh1", "Be5", "f4", "Bxc3", "bxc3", "Rd3", "cxd4", "Rxd4"],
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
    description: "Fischer's legendary world championship victory. A masterclass in prophylactic thinking and positional play.",
    moves: ["c4", "e6", "Nf3", "d5", "d4", "Nf6", "Nc3", "Be7", "Bg5", "O-O", "e3", "h6", "Bh4", "b6", "cxd5", "Nxd5", "Nxd5", "Qxd5", "Bxe7", "Qxe7", "O-O", "Bb7", "Re1", "Rd8", "Qc2", "Rd7", "Rad1", "Nf6", "h3", "Rc8", "Be3", "a6", "Bd2", "Qf6", "Be2", "Qe7", "Qd3", "g6", "Kh2", "Rd6", "Rfe1", "Rcd8", "Qc2", "Rc8", "Qf1", "Qa7", "d5", "e5", "dxe6", "Qxe6", "Qd3", "Qxd3", "exd3", "d4", "Re4", "d3", "Rd4", "Rc1", "Rxd3", "Rxc4", "Qxc4", "Qxc4", "Rxc4", "d2", "Rd3", "d1=Q+", "Kf1", "Qxd3", "Kg2", "Qxd4", "Kg3", "Kg7"],
    keyMoments: [
      { moveIndex: 10, comment: "Fischer's solid opening preparation" },
      { moveIndex: 20, comment: "Perfect piece placement" },
      { moveIndex: 35, comment: "Fischer's advantage becomes decisive" }
    ]
  },
  {
    id: "fischer-3",
    title: "Bobby Fischer vs Tigran Petrosian - Interzonal Tournament",
    event: "Interzonal",
    site: "Vancouver",
    date: "1971.05.15",
    white: "Bobby Fischer",
    black: "Tigran Petrosian",
    result: "1-0",
    description: "Fischer defeats the legendary former world champion Petrosian with brilliant attacking play.",
    moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Be3", "e5", "Nb3", "Be7", "f3", "O-O", "Qd2", "Nbd7", "O-O-O", "b5", "g4", "b4", "Ne2", "a5", "g5", "a4", "Ne1", "Nxe4", "Qxe4", "axb3", "axb3", "Rxa1", "Kb1", "Be6", "g6", "Nf6", "Qh4", "b3", "Qxf6", "gxf6", "gxf7+", "Kh8", "Nd5", "Qxd5", "exd5", "Kg7", "f4", "h6", "Bc4", "Bf8", "Be3", "Rc8", "Bb6", "Rxc2", "Rd2", "Rc1#"],
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
    moves: ["e4", "c5", "Nf3", "Nc6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "d6", "Bg5", "e6", "f4", "Be7", "Qf3", "O-O", "O-O-O", "Nxd4", "Qxd4", "a6", "Qg4", "Nh7", "Bh6", "Bf6", "Bxf6", "Qxf6", "Qg3", "e5", "fxe5", "dxe5", "Kb1", "Be6", "Qg4", "Bf5", "Qe2", "b5", "Nd5", "Qd6", "Nxf6+", "gxf6", "Qe4", "Rc8", "Rxc8+", "Qxc8", "Rc1", "Qd8", "Rc8", "Qd1+", "Ka2", "Qd4", "Qxd4", "exd4", "Rc7", "Kg7", "Rxb7", "d3", "Rxe7", "Kxe7", "h4", "Kd6", "h5", "Ke5", "h6", "f5", "h7", "f4", "h8=Q", "f3", "Qe8"],
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
    moves: ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "Nf6", "O-O", "Be7", "Re1", "b5", "Bb3", "d6", "c3", "Na5", "Bc2", "c5", "h3", "O-O", "d4", "Qc7", "a3", "cxd4", "cxd4", "exd4", "Nxd4", "Nxe4", "Rxe4", "Bc5", "Nf3", "Re8", "Qd3", "Bf4", "Qf1", "Nc6", "Be3", "Nxd4", "Bxd4", "Bxd4+", "Qxd4", "Rxe4", "Qxe4", "Qxe4", "Nxe4", "h6", "h4", "Re8", "g3", "Re4", "Nxd6", "Rxh4", "gxh4", "Bxh4", "f3", "Bg5", "Kh2", "Be3", "Nf4", "Bc5", "Nxg6", "fxg6", "f4", "Kf7", "f5", "g5", "fxg6+", "Kg7", "g7", "Kh7", "Kh3", "Kxg7", "Kg4", "Kf6", "Kh5"],
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
    moves: ["d4", "Nf6", "c4", "e6", "Nc3", "d5", "Bg5", "Be7", "e3", "O-O", "Nf3", "Nbd7", "Be2", "c6", "O-O", "dxc4", "Bxc4", "Nh5", "Bf4", "Nhf6", "h3", "b5", "Bd3", "a6", "Re1", "Rc8", "Rc1", "Ne4", "Nxe4", "Bxe4", "Bxe4", "Nxe4", "Bxe7", "Qxe7", "Ne5", "Nxe5", "dxe5", "Qe8", "e4", "Qf7", "Qb3", "Rc7", "Rxc6", "Rxc6", "Qxc6", "Qd5", "exd5", "Kh7", "dxc6", "g6", "c7", "Kg7", "c8=Q", "h6", "Qcc6", "Kg8", "Qf4", "Kg7", "Qf7+", "Kh8", "Qxh6#"],
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
    moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Bg5", "e6", "f4", "Be7", "Qf3", "Nbd7", "O-O-O", "b5", "e5", "dxe5", "fxe5", "Nxe5", "Nxe5", "Qxe5", "Bxe7", "Kxe7", "Be2", "Nc6", "Nxc6", "Qxc6", "Qb3", "Rb8", "h4", "h6", "Rd4", "Rc8", "Rg4", "g6", "Qxb5", "Qxb5", "Bxb5+", "Kd7", "Rgd4", "Rc1+", "Kd2", "Rxf1", "Rxf1", "Ra1", "Rf7", "Rxa2+", "Ke3", "Ra3", "Rxe7", "a5", "Re8+", "Kd6", "Rd8+", "Kc5", "Rc8+", "Kd4", "Rc4+", "Kd3", "Rxc6", "a4", "Rc5", "Kb2", "Rb5+", "Ka3", "Rb3+", "Ka2", "Rb4", "Kb1", "Rxh4", "Ka2", "Rh2", "Kb1", "Rh1", "Kb2", "Rb1#"],
    keyMoments: [
      { moveIndex: 16, comment: "Gukesh's brilliant e5 breakthrough" },
      { moveIndex: 26, comment: "Perfect execution of attack" },
      { moveIndex: 40, comment: "Opponent's king has nowhere to hide" }
    ]
  },
  {
    id: "gukesh-2",
    title: "Gukesh vs Caruana - World Cup",
    event: "World Cup",
    site: "Khanty-Mansiysk",
    date: "2021.08.15",
    white: "Gukesh",
    black: "Fabiano Caruana",
    result: "1-0",
    description: "Gukesh's tactical masterpiece against elite grandmaster Caruana. Superb calculation and intuition.",
    moves: ["c4", "e5", "Nc3", "Nf6", "Nf3", "Nc6", "d4", "exd4", "Nxd4", "Bb4", "Bg5", "O-O", "e3", "Re8", "Be2", "Bf8", "O-O", "h6", "Bh4", "a6", "f4", "b5", "cxb5", "axb5", "Nxb5", "Qe7", "Nd6", "Bb7", "Nxb7", "Rc8", "Rc1", "Nxe3", "Qe2", "Nxc3", "bxc3", "c5", "Nxc5", "Qxc5", "f5", "Ne4", "f6", "g6", "Qe4", "Rxc3", "Rxc3", "Nxc3", "Qe8", "Kh7", "f7", "Rf7", "Qxf7", "Nxf1", "Qg7", "Nxg7", "Kxg7", "Rf1", "Nd5", "Rf7+", "Kg8", "Rf8#"],
    keyMoments: [
      { moveIndex: 16, comment: "Gukesh sacrifices material for strong initiative" },
      { moveIndex: 28, comment: "Black's pieces are completely uncoordinated" },
      { moveIndex: 36, comment: "Final mating attack is unstoppable" }
    ]
  },
  {
    id: "gukesh-3",
    title: "Gukesh vs Radjabov - Chess Grand Masters",
    event: "Grand Masters Tournament",
    site: "India",
    date: "2022.03.20",
    white: "Gukesh",
    black: "Teimour Radjabov",
    result: "1-0",
    description: "Gukesh's dominant positional victory. Exceptional understanding of position and endgame technique.",
    moves: ["d4", "Nf6", "c4", "g6", "Nc3", "Bg7", "e4", "d6", "f3", "O-O", "Be3", "e5", "d5", "c6", "Qd2", "cxd5", "cxd5", "a6", "O-O-O", "h6", "Kb1", "Nbd7", "h4", "Nh7", "h5", "g5", "Nh3", "Nf8", "Nf4", "Ne6", "Nxe6", "fxe6", "dxe6", "Nxe6", "Qxd6", "Qe8", "Qxe5", "Nf4", "Bxf4", "gxf4", "Nd5", "Re8", "Qxe8", "Rxe8", "Rxe8", "Kg7", "Re7", "Bf8", "Rxf7+", "Kxf7", "Nf4+", "Kg8", "e5", "Bd6", "e6", "c5", "e7", "Bxe7", "Nxe7+", "Kh7", "Nd5", "a5", "Ne7", "Kg7", "Nd5", "Kf8", "Nf4", "c4", "b3", "cxb3", "axb3", "a4", "bxa4", "Ke7", "Nd5+", "Kd6", "Nf4", "Bc5", "Nd5", "Ke5", "Nf4", "Bxf4", "Kxf4"],
    keyMoments: [
      { moveIndex: 14, comment: "Gukesh's King's Indian attack builds pressure" },
      { moveIndex: 24, comment: "Devastating f4 break in Black's kingside" },
      { moveIndex: 36, comment: "Black's position collapses under pressure" }
    ]
  },
  {
    id: "kasparov-1",
    title: "Garry Kasparov vs Anatoly Karpov - World Championship Game 16",
    event: "World Championship Match",
    site: "Moscow",
    date: "1985.02.11",
    white: "Garry Kasparov",
    black: "Anatoly Karpov",
    result: "1-0",
    description: "Kasparov's brilliant victory recapturing the world championship from Karpov. A dominant performance.",
    moves: ["e4", "c5", "Nf3", "e6", "d4", "cxd4", "Nxd4", "Nc6", "Nc3", "Qc7", "Be3", "a6", "Be2", "Nf6", "O-O", "Ne5", "f4", "Ng6", "Bg5", "Be7", "Rf3", "b5", "Rg3", "Bb7", "Qd2", "O-O", "Bxf6", "Bxf6", "Nf3", "Rc8", "a4", "Rc4", "axb5", "axb5", "Nxb5", "Qb8", "Bf3", "Qxb5", "Nxe5", "Qe5", "f4", "Qxf4", "Qxf4", "Bxf4", "Rd1", "Rc1", "Rxc1", "Bxc1", "Rf1", "Be3+", "Kh1", "Rc8", "Rc1", "Rxc1", "Rxc1", "Ba2", "Rc8+", "Kh7", "Rc7", "Kg6", "Rxe7", "Kf5", "Rc7", "Ke4", "Rc4+", "Kd3", "Rc3+", "Kd4", "Rc4+", "Kd5", "Rc5+", "Kd6", "Rxc1", "Ke7", "Rc7+", "Kd6", "Rxf7", "Kd5", "Rf5+", "Kc4", "Rf4+", "Kb3", "Rf3+", "Ka2", "Rf2", "Kb1", "Rxb2", "Ka1", "Rb2", "Ka2", "Rb3", "Ka1", "Bf3"],
    keyMoments: [
      { moveIndex: 18, comment: "Kasparov's brilliant f4 pawn break" },
      { moveIndex: 28, comment: "Kasparov eliminates Black's pieces" },
      { moveIndex: 40, comment: "Karpov's position is completely hopeless" }
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
    moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Bg5", "e6", "f4", "Be7", "Qf3", "Nbd7", "O-O-O", "b5", "e5", "Nxe5", "Nxe5", "dxe5", "fxe5", "Nxe5", "Qe3", "Bb7", "f4", "Nxf3+", "gxf3", "O-O", "Kb1", "Qc7", "Qe4", "Rfc8", "Rc1", "Rc4", "Qe3", "Rc5", "f4", "Rc4", "Qe2", "Rc5", "f5", "exf5", "Qxe7", "Qxe7", "Bxe7", "Rxc3", "bxc3", "Rc8", "Bb4", "Rc4", "Bd2", "Rc2", "Be2", "Rc1+", "Kc2", "Rc1+", "Kd3", "Ra1", "Rg1", "Kf8", "Rg7", "Ra3", "Rxb7", "Rxc3", "Rb8", "Rc3", "Rb3", "Rxb3", "Bxb3", "a5", "Bc4", "a4", "Ke4", "Kf7", "Kd4", "Kg6", "Kc4", "Kf5", "Kd3", "Ke4", "Ke2", "Kd4", "Kd1", "Kc3", "Be2", "Kb2", "Kc1", "Ka3", "Kb1", "Kxa2", "Kc2", "Ka1", "Kc1"],
    keyMoments: [
      { moveIndex: 16, comment: "Anand's brilliant opening with e5 breakthrough" },
      { moveIndex: 26, comment: "Kramnik's pieces become uncoordinated" },
      { moveIndex: 40, comment: "Anand converts advantage into victory" }
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
    moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Bg5", "e6", "f4", "Be7", "Qf3", "Nbd7", "O-O-O", "b5", "e5", "Nxe5", "Nxe5", "dxe5", "fxe5", "Nxe5", "Nxe6", "Qxe6", "Qxe5", "Rc8", "Bf4", "O-O", "f4", "Rc4", "Qe2", "Rxf4", "Bxf4", "Bc6", "Bc4", "Qb6", "Qe3", "Rc8", "b3", "Qc5", "Qe4", "Qxe4", "Bxe4", "Bxe4", "Rxe4", "Rf1", "Re1", "Rc1+", "Kd2", "Rxf1", "Rxe7", "Rc1", "Re8+", "Kf7", "Rc8", "Ra1", "Rc7", "Ra2", "Rxf7+", "Ka5", "Rf5+", "Ka4", "Ra5#"],
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
    moves: ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "Nf6", "O-O", "Be7", "Re1", "b5", "Bb3", "d6", "c3", "Na5", "Bc2", "c5", "h3", "O-O", "d4", "Qc7", "a3", "cxd4", "cxd4", "exd4", "Nxd4", "Nxe4", "Rxe4", "Bc5", "Nf3", "Re8", "Qd3", "Bf4", "Qf1", "Nc6", "Be3", "Nxd4", "Bxd4", "Bxd4+", "Qxd4", "Rxe4", "Qxe4", "Qxe4", "Nxe4", "h6", "f4", "Re8", "f5", "Bf8", "f6", "gxf6", "Nxf6+", "Kg7", "Ne4", "Rc8", "Rc1", "Rc1+", "Kf2", "Ra1", "Nd6", "Rc6", "Nxf7", "Rc1", "Rc1", "Ra8", "Rc7", "Rf8", "Ne5", "Kg6", "Nd7", "Rd8", "Rc6", "Kg5", "Rc5", "Kg4", "Rc4+", "Kg3", "Rc3+", "Kg2", "Rc2+", "Kg1", "Rc1+", "Kf2", "Rc2+", "Kf3", "Rc3+", "Ke2", "Rc2+", "Kf3", "Rc3+", "Kg4", "Rc4+", "Kg5", "h5", "Kg6", "h4", "Kf5", "h3", "Ke5", "Rc1", "Nd5", "Re1", "Kd4", "Rd1", "Kc3", "Rc1+", "Kb2", "Rc2+", "Ka1", "Re2", "Kb1", "Rb2", "Ka1", "Rb3", "Ka2", "Rb5", "Ka1", "Ra5#"],
    keyMoments: [
      { moveIndex: 18, comment: "Nakamura's opening setup with aggressive ideas" },
      { moveIndex: 28, comment: "Nakamura creates dangerous kingside attack" },
      { moveIndex: 40, comment: "Final mating sequence is beautiful" }
    ]
  },
  {
    id: "aronian-1",
    title: "Levon Aronian vs Caruana - World Chess Championship",
    event: "Grand Masters Tournament",
    site: "Paris",
    date: "2018.07.08",
    white: "Levon Aronian",
    black: "Fabiano Caruana",
    result: "1-0",
    description: "Aronian's brilliant attacking display. A showcase of creative chess and exceptional calculation.",
    moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Bg5", "e6", "f4", "Be7", "Qf3", "Nbd7", "O-O-O", "b5", "e5", "Nxe5", "Nxe5", "dxe5", "fxe5", "Nxe5", "Nxe6", "Qxe6", "Qe4", "Rc8", "Bf4", "O-O", "Rd4", "Rc4", "Qe3", "Rxf4", "Qxf4", "Bc6", "Rc4", "Qb6", "Qe4", "Qxe4", "Rxe4", "Bxe4", "Bxe4", "Rf1", "Re4", "Rc1", "Rxe7", "Rc7", "Re7", "Rxf7", "Re8", "Rxb7", "a5", "Ra7", "Rc8", "Ra5", "Rc1+", "Kd2", "Rc2+", "Kd3", "Rxf2", "Rxa5", "Rf3+", "Kc4", "Rc3+", "Kd5", "Rc5+", "Kd6", "Rxc1", "Ke7", "Rc7+", "Kf6", "Rxf7+", "Kg5", "Rf5+", "Kg4", "Rf4+", "Kg3", "Rf3+", "Kg2", "Rf2+", "Kg1", "Rf1+", "Kh2", "Rf2", "Kg1", "Rxb2", "Kf1", "Rh2", "Kg1", "Rxh1+", "Kxh1"],
    keyMoments: [
      { moveIndex: 16, comment: "Aronian's spectacular f4 pawn break" },
      { moveIndex: 26, comment: "Caruana's king becomes completely exposed" },
      { moveIndex: 40, comment: "Unstoppable mating attack by Aronian" }
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
