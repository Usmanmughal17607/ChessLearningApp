import { create } from "zustand";
import { Chess, Move, Square } from "chess.js";
import { Difficulty, findBestMove, evaluatePosition, getSuggestedMoves } from "@/lib/chessAI";

export type GameMode = "menu" | "play" | "review" | "ai" | "online";
export type Theme = "classic" | "modern" | "wooden" | "midnight" | "emerald" | "sunset" | "ocean" | "neon" | "lavender" | "forest";
export type PlayerColor = "w" | "b";

interface ChessState {
  game: Chess;
  gameMode: GameMode;
  selectedSquare: Square | null;
  legalMoves: Square[];
  lastMove: { from: Square; to: Square } | null;
  moveHistory: Move[];
  capturedPieces: { white: string[]; black: string[] };
  theme: Theme;
  isDarkMode: boolean;
  
  currentReviewGame: FischerGame | null;
  reviewMoveIndex: number;
  isAutoPlaying: boolean;
  autoPlayIntervalId: NodeJS.Timeout | null;
  
  aiDifficulty: Difficulty;
  playerColor: PlayerColor;
  isAIThinking: boolean;
  evaluation: number;
  suggestedMoves: { move: Move; evaluation: number }[];
  showEvaluation: boolean;
  
  gameCode: string | null;
  isOnline: boolean;
  opponentName: string;
  
  setGameMode: (mode: GameMode) => void;
  selectSquare: (square: Square | null) => void;
  makeMove: (from: Square, to: Square, promotion?: string) => boolean;
  resetGame: () => void;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  toggleDarkMode: () => void;
  
  loadFischerGame: (game: FischerGame) => void;
  goToMove: (index: number) => void;
  nextMove: () => void;
  prevMove: () => void;
  firstMove: () => void;
  lastMoveReview: () => void;
  setAutoPlaying: (playing: boolean) => void;
  setAutoPlayIntervalId: (id: NodeJS.Timeout | null) => void;
  loadFromPGN: (moves: string[]) => void;
  
  setAIDifficulty: (difficulty: Difficulty) => void;
  setPlayerColor: (color: PlayerColor) => void;
  startAIGame: () => void;
  makeAIMove: () => void;
  toggleEvaluation: () => void;
  updateEvaluation: () => void;
  
  gameCode: string | null;
  isOnline: boolean;
  opponentName: string;
  startOnlineGame: (code?: string) => void;
  syncMove: (move: { from: string; to: string; san: string }) => void;
  setGameCode: (code: string | null) => void;
  setOpponentName: (name: string) => void;
}

export interface FischerGame {
  id: string;
  title: string;
  event: string;
  site: string;
  date: string;
  white: string;
  black: string;
  result: string;
  moves: string[];
  description: string;
  keyMoments: { moveIndex: number; comment: string }[];
}

function sanitizeSAN(san: string): string {
  let cleaned = san.trim();
  cleaned = cleaned.replace(/[+#!?]+/g, '');
  cleaned = cleaned.replace(/^(\d+\.+\s*)+/, '');
  return cleaned;
}

function getCapturedPieces(game: Chess): { white: string[]; black: string[] } {
  const startingPieces = {
    p: 8, n: 2, b: 2, r: 2, q: 1, k: 1
  };
  
  const currentPieces = { white: { p: 0, n: 0, b: 0, r: 0, q: 0, k: 0 }, black: { p: 0, n: 0, b: 0, r: 0, q: 0, k: 0 } };
  
  const board = game.board();
  for (const row of board) {
    for (const square of row) {
      if (square) {
        const color = square.color === 'w' ? 'white' : 'black';
        currentPieces[color][square.type as keyof typeof startingPieces]++;
      }
    }
  }
  
  const captured: { white: string[]; black: string[] } = { white: [], black: [] };
  
  for (const [piece, count] of Object.entries(startingPieces)) {
    const whiteMissing = count - currentPieces.white[piece as keyof typeof startingPieces];
    const blackMissing = count - currentPieces.black[piece as keyof typeof startingPieces];
    
    for (let i = 0; i < whiteMissing; i++) {
      captured.black.push(piece.toUpperCase());
    }
    for (let i = 0; i < blackMissing; i++) {
      captured.white.push(piece);
    }
  }
  
  return captured;
}

export const useChess = create<ChessState>((set, get) => ({
  game: new Chess(),
  gameMode: "menu",
  selectedSquare: null,
  legalMoves: [],
  lastMove: null,
  moveHistory: [],
  capturedPieces: { white: [], black: [] },
  theme: "modern",
  isDarkMode: true,
  
  currentReviewGame: null,
  reviewMoveIndex: -1,
  isAutoPlaying: false,
  autoPlayIntervalId: null,
  
  aiDifficulty: "medium",
  playerColor: "w",
  isAIThinking: false,
  evaluation: 0,
  suggestedMoves: [],
  showEvaluation: true,
  
  gameCode: null,
  isOnline: false,
  opponentName: "Opponent",
  
  setGameMode: (mode) => {
    const { autoPlayIntervalId } = get();
    if (autoPlayIntervalId) {
      clearInterval(autoPlayIntervalId);
    }
    
    if (mode === "play") {
      const newGame = new Chess();
      set({ 
        gameMode: mode, 
        game: newGame,
        moveHistory: [],
        lastMove: null,
        selectedSquare: null,
        legalMoves: [],
        capturedPieces: { white: [], black: [] },
        currentReviewGame: null,
        reviewMoveIndex: -1,
        isAutoPlaying: false,
        autoPlayIntervalId: null
      });
    } else if (mode === "menu") {
      set({ 
        gameMode: mode,
        isAutoPlaying: false,
        autoPlayIntervalId: null
      });
    } else {
      set({ gameMode: mode });
    }
  },
  
  selectSquare: (square) => {
    const { game, selectedSquare } = get();
    
    if (!square) {
      set({ selectedSquare: null, legalMoves: [] });
      return;
    }
    
    if (selectedSquare) {
      const moved = get().makeMove(selectedSquare, square);
      if (moved) {
        set({ selectedSquare: null, legalMoves: [] });
        return;
      }
    }
    
    const piece = game.get(square);
    if (piece && piece.color === game.turn()) {
      const moves = game.moves({ square, verbose: true });
      const legalSquares = moves.map(m => m.to as Square);
      set({ selectedSquare: square, legalMoves: legalSquares });
    } else {
      set({ selectedSquare: null, legalMoves: [] });
    }
  },
  
  makeMove: (from, to, promotion = "q") => {
    const { game } = get();
    
    try {
      const gameCopy = new Chess();
      gameCopy.loadPgn(game.pgn());
      
      const move = gameCopy.move({ from, to, promotion });
      if (move) {
        const capturedPieces = getCapturedPieces(gameCopy);
        set({ 
          game: gameCopy,
          lastMove: { from, to },
          moveHistory: gameCopy.history({ verbose: true }),
          capturedPieces
        });
        return true;
      }
    } catch (e) {
      return false;
    }
    return false;
  },
  
  resetGame: () => {
    const { autoPlayIntervalId } = get();
    if (autoPlayIntervalId) {
      clearInterval(autoPlayIntervalId);
    }
    
    set({
      game: new Chess(),
      selectedSquare: null,
      legalMoves: [],
      lastMove: null,
      moveHistory: [],
      capturedPieces: { white: [], black: [] },
      isAutoPlaying: false,
      autoPlayIntervalId: null
    });
  },
  
  toggleTheme: () => {
    const themes: Theme[] = ["classic", "modern", "wooden", "midnight"];
    const { theme } = get();
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    set({ theme: themes[nextIndex] });
  },
  
  setTheme: (theme) => set({ theme }),
  
  toggleDarkMode: () => {
    set((state) => ({ isDarkMode: !state.isDarkMode }));
  },
  
  loadFischerGame: (fischerGame) => {
    const { autoPlayIntervalId } = get();
    if (autoPlayIntervalId) {
      clearInterval(autoPlayIntervalId);
    }
    
    const game = new Chess();
    set({
      game,
      currentReviewGame: fischerGame,
      reviewMoveIndex: -1,
      gameMode: "review",
      lastMove: null,
      moveHistory: [],
      selectedSquare: null,
      legalMoves: [],
      capturedPieces: { white: [], black: [] },
      isAutoPlaying: false,
      autoPlayIntervalId: null
    });
  },
  
  goToMove: (index) => {
    const { currentReviewGame } = get();
    if (!currentReviewGame) return;
    
    const game = new Chess();
    const movesToMake = Math.min(index + 1, currentReviewGame.moves.length);
    
    let lastFrom: Square | undefined;
    let lastTo: Square | undefined;
    let actualIndex = -1;
    
    for (let i = 0; i < movesToMake; i++) {
      try {
        const sanitizedMove = sanitizeSAN(currentReviewGame.moves[i]);
        const move = game.move(sanitizedMove);
        if (move) {
          lastFrom = move.from as Square;
          lastTo = move.to as Square;
          actualIndex = i;
        }
      } catch (e) {
        console.error("Invalid move:", currentReviewGame.moves[i], e);
        break;
      }
    }
    
    const capturedPieces = getCapturedPieces(game);
    
    set({
      game: new Chess(game.fen()),
      reviewMoveIndex: actualIndex,
      lastMove: lastFrom && lastTo ? { from: lastFrom, to: lastTo } : null,
      moveHistory: game.history({ verbose: true }),
      capturedPieces
    });
  },
  
  nextMove: () => {
    const { reviewMoveIndex, currentReviewGame } = get();
    if (!currentReviewGame) return;
    
    if (reviewMoveIndex < currentReviewGame.moves.length - 1) {
      get().goToMove(reviewMoveIndex + 1);
    }
  },
  
  prevMove: () => {
    const { reviewMoveIndex } = get();
    if (reviewMoveIndex >= 0) {
      get().goToMove(reviewMoveIndex - 1);
    }
  },
  
  firstMove: () => {
    const { autoPlayIntervalId } = get();
    if (autoPlayIntervalId) {
      clearInterval(autoPlayIntervalId);
    }
    set({ isAutoPlaying: false, autoPlayIntervalId: null });
    
    const game = new Chess();
    set({
      game,
      reviewMoveIndex: -1,
      lastMove: null,
      moveHistory: [],
      capturedPieces: { white: [], black: [] }
    });
  },
  
  lastMoveReview: () => {
    const { currentReviewGame } = get();
    if (!currentReviewGame) return;
    get().goToMove(currentReviewGame.moves.length - 1);
  },
  
  setAutoPlaying: (playing) => {
    set({ isAutoPlaying: playing });
  },
  
  setAutoPlayIntervalId: (id) => {
    const { autoPlayIntervalId } = get();
    if (autoPlayIntervalId) {
      clearInterval(autoPlayIntervalId);
    }
    set({ autoPlayIntervalId: id });
  },
  
  loadFromPGN: (moves) => {
    const { autoPlayIntervalId } = get();
    if (autoPlayIntervalId) {
      clearInterval(autoPlayIntervalId);
    }
    
    const game = new Chess();
    let lastFrom: Square | undefined;
    let lastTo: Square | undefined;
    
    for (const move of moves) {
      try {
        const sanitizedMove = sanitizeSAN(move);
        const result = game.move(sanitizedMove);
        if (result) {
          lastFrom = result.from as Square;
          lastTo = result.to as Square;
        }
      } catch (e) {
        console.error("Invalid move in PGN:", move, e);
        break;
      }
    }
    
    const capturedPieces = getCapturedPieces(game);
    
    set({
      game: new Chess(game.fen()),
      gameMode: "play",
      lastMove: lastFrom && lastTo ? { from: lastFrom, to: lastTo } : null,
      moveHistory: game.history({ verbose: true }),
      capturedPieces,
      selectedSquare: null,
      legalMoves: [],
      currentReviewGame: null,
      reviewMoveIndex: -1,
      isAutoPlaying: false,
      autoPlayIntervalId: null
    });
  },
  
  setAIDifficulty: (difficulty) => {
    set({ aiDifficulty: difficulty });
  },
  
  setPlayerColor: (color) => {
    set({ playerColor: color });
  },
  
  startAIGame: () => {
    const { playerColor } = get();
    const newGame = new Chess();
    
    set({
      game: newGame,
      gameMode: "ai",
      moveHistory: [],
      lastMove: null,
      selectedSquare: null,
      legalMoves: [],
      capturedPieces: { white: [], black: [] },
      currentReviewGame: null,
      reviewMoveIndex: -1,
      isAutoPlaying: false,
      autoPlayIntervalId: null,
      isAIThinking: false,
      evaluation: 0,
      suggestedMoves: []
    });
    
    if (playerColor === 'b') {
      setTimeout(() => get().makeAIMove(), 500);
    }
  },
  
  makeAIMove: () => {
    const { game, aiDifficulty } = get();
    
    if (game.isGameOver()) return;
    
    set({ isAIThinking: true });
    
    setTimeout(() => {
      const { game: currentGame } = get();
      
      const gameCopy = new Chess();
      gameCopy.loadPgn(currentGame.pgn());
      
      const bestMove = findBestMove(gameCopy, aiDifficulty);
      
      if (bestMove) {
        gameCopy.move(bestMove);
        const capturedPieces = getCapturedPieces(gameCopy);
        const evaluation = evaluatePosition(gameCopy) / 100;
        const suggestions = getSuggestedMoves(gameCopy, 3).map(s => ({
          ...s,
          evaluation: s.evaluation / 100
        }));
        
        set({
          game: gameCopy,
          lastMove: { from: bestMove.from as Square, to: bestMove.to as Square },
          moveHistory: gameCopy.history({ verbose: true }),
          capturedPieces,
          isAIThinking: false,
          evaluation,
          suggestedMoves: suggestions
        });
      } else {
        set({ isAIThinking: false });
      }
    }, 300);
  },
  
  toggleEvaluation: () => {
    set((state) => ({ showEvaluation: !state.showEvaluation }));
  },
  
  updateEvaluation: () => {
    const { game } = get();
    const evaluation = evaluatePosition(game) / 100;
    const suggestions = getSuggestedMoves(game, 3).map(s => ({
      ...s,
      evaluation: s.evaluation / 100
    }));
    set({ evaluation, suggestedMoves: suggestions });
  },
  
  startOnlineGame: (code?: string) => {
    const newCode = code || Math.random().toString(36).substring(2, 8).toUpperCase();
    set({
      game: new Chess(),
      gameMode: "online",
      isOnline: true,
      gameCode: newCode,
      playerColor: code ? "b" : "w",
      moveHistory: [],
      lastMove: null,
      selectedSquare: null,
      legalMoves: [],
      capturedPieces: { white: [], black: [] }
    });
  },
  
  syncMove: (move: { from: string; to: string; san: string }) => {
    const { game } = get();
    const gameCopy = new Chess(game.fen());
    const moveResult = gameCopy.move({ from: move.from as Square, to: move.to as Square });
    
    if (moveResult) {
      const capturedPieces = getCapturedPieces(gameCopy);
      set({
        game: gameCopy,
        lastMove: { from: move.from as Square, to: move.to as Square },
        moveHistory: gameCopy.history({ verbose: true }),
        capturedPieces
      });
    }
  },
  
  setGameCode: (code: string | null) => set({ gameCode: code }),
  setOpponentName: (name: string) => set({ opponentName: name })
}));
