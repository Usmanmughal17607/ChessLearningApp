import { Chess, Move, Square } from "chess.js";

export type Difficulty = "beginner" | "easy" | "medium" | "hard" | "master";

const PIECE_VALUES: Record<string, number> = {
  p: 100,
  n: 320,
  b: 330,
  r: 500,
  q: 900,
  k: 20000
};

const PAWN_TABLE = [
  0,  0,  0,  0,  0,  0,  0,  0,
  50, 50, 50, 50, 50, 50, 50, 50,
  10, 10, 20, 30, 30, 20, 10, 10,
  5,  5, 10, 25, 25, 10,  5,  5,
  0,  0,  0, 20, 20,  0,  0,  0,
  5, -5,-10,  0,  0,-10, -5,  5,
  5, 10, 10,-20,-20, 10, 10,  5,
  0,  0,  0,  0,  0,  0,  0,  0
];

const KNIGHT_TABLE = [
  -50,-40,-30,-30,-30,-30,-40,-50,
  -40,-20,  0,  0,  0,  0,-20,-40,
  -30,  0, 10, 15, 15, 10,  0,-30,
  -30,  5, 15, 20, 20, 15,  5,-30,
  -30,  0, 15, 20, 20, 15,  0,-30,
  -30,  5, 10, 15, 15, 10,  5,-30,
  -40,-20,  0,  5,  5,  0,-20,-40,
  -50,-40,-30,-30,-30,-30,-40,-50
];

const BISHOP_TABLE = [
  -20,-10,-10,-10,-10,-10,-10,-20,
  -10,  0,  0,  0,  0,  0,  0,-10,
  -10,  0,  5, 10, 10,  5,  0,-10,
  -10,  5,  5, 10, 10,  5,  5,-10,
  -10,  0, 10, 10, 10, 10,  0,-10,
  -10, 10, 10, 10, 10, 10, 10,-10,
  -10,  5,  0,  0,  0,  0,  5,-10,
  -20,-10,-10,-10,-10,-10,-10,-20
];

const ROOK_TABLE = [
  0,  0,  0,  0,  0,  0,  0,  0,
  5, 10, 10, 10, 10, 10, 10,  5,
  -5,  0,  0,  0,  0,  0,  0, -5,
  -5,  0,  0,  0,  0,  0,  0, -5,
  -5,  0,  0,  0,  0,  0,  0, -5,
  -5,  0,  0,  0,  0,  0,  0, -5,
  -5,  0,  0,  0,  0,  0,  0, -5,
  0,  0,  0,  5,  5,  0,  0,  0
];

const QUEEN_TABLE = [
  -20,-10,-10, -5, -5,-10,-10,-20,
  -10,  0,  0,  0,  0,  0,  0,-10,
  -10,  0,  5,  5,  5,  5,  0,-10,
  -5,  0,  5,  5,  5,  5,  0, -5,
  0,  0,  5,  5,  5,  5,  0, -5,
  -10,  5,  5,  5,  5,  5,  0,-10,
  -10,  0,  5,  0,  0,  0,  0,-10,
  -20,-10,-10, -5, -5,-10,-10,-20
];

const KING_MIDDLE_TABLE = [
  -30,-40,-40,-50,-50,-40,-40,-30,
  -30,-40,-40,-50,-50,-40,-40,-30,
  -30,-40,-40,-50,-50,-40,-40,-30,
  -30,-40,-40,-50,-50,-40,-40,-30,
  -20,-30,-30,-40,-40,-30,-30,-20,
  -10,-20,-20,-20,-20,-20,-20,-10,
  20, 20,  0,  0,  0,  0, 20, 20,
  20, 30, 10,  0,  0, 10, 30, 20
];

const PIECE_TABLES: Record<string, number[]> = {
  p: PAWN_TABLE,
  n: KNIGHT_TABLE,
  b: BISHOP_TABLE,
  r: ROOK_TABLE,
  q: QUEEN_TABLE,
  k: KING_MIDDLE_TABLE
};

function squareToIndex(square: string): number {
  const file = square.charCodeAt(0) - 97;
  const rank = 8 - parseInt(square[1]);
  return rank * 8 + file;
}

function evaluateBoard(game: Chess): number {
  if (game.isCheckmate()) {
    return game.turn() === 'w' ? -Infinity : Infinity;
  }
  
  if (game.isDraw() || game.isStalemate()) {
    return 0;
  }
  
  let score = 0;
  const board = game.board();
  
  for (let rank = 0; rank < 8; rank++) {
    for (let file = 0; file < 8; file++) {
      const piece = board[rank][file];
      if (piece) {
        const pieceValue = PIECE_VALUES[piece.type];
        const tableIndex = piece.color === 'w' ? rank * 8 + file : (7 - rank) * 8 + file;
        const positionValue = PIECE_TABLES[piece.type]?.[tableIndex] || 0;
        
        const totalValue = pieceValue + positionValue;
        score += piece.color === 'w' ? totalValue : -totalValue;
      }
    }
  }
  
  return score;
}

function orderMoves(game: Chess, moves: Move[]): Move[] {
  return moves.sort((a, b) => {
    let scoreA = 0;
    let scoreB = 0;
    
    if (a.captured) scoreA += PIECE_VALUES[a.captured] * 10;
    if (b.captured) scoreB += PIECE_VALUES[b.captured] * 10;
    
    if (a.promotion) scoreA += PIECE_VALUES[a.promotion] * 10;
    if (b.promotion) scoreB += PIECE_VALUES[b.promotion] * 10;
    
    return scoreB - scoreA;
  });
}

function minimax(
  game: Chess,
  depth: number,
  alpha: number,
  beta: number,
  isMaximizing: boolean
): number {
  if (depth === 0 || game.isGameOver()) {
    return evaluateBoard(game);
  }
  
  const moves = orderMoves(game, game.moves({ verbose: true }));
  
  if (isMaximizing) {
    let maxEval = -Infinity;
    for (const move of moves) {
      game.move(move);
      const evalScore = minimax(game, depth - 1, alpha, beta, false);
      game.undo();
      
      maxEval = Math.max(maxEval, evalScore);
      alpha = Math.max(alpha, evalScore);
      if (beta <= alpha) break;
    }
    return maxEval;
  } else {
    let minEval = Infinity;
    for (const move of moves) {
      game.move(move);
      const evalScore = minimax(game, depth - 1, alpha, beta, true);
      game.undo();
      
      minEval = Math.min(minEval, evalScore);
      beta = Math.min(beta, evalScore);
      if (beta <= alpha) break;
    }
    return minEval;
  }
}

const DIFFICULTY_SETTINGS: Record<Difficulty, { depth: number; randomness: number }> = {
  beginner: { depth: 1, randomness: 0.5 },
  easy: { depth: 2, randomness: 0.3 },
  medium: { depth: 2, randomness: 0.1 },
  hard: { depth: 3, randomness: 0.05 },
  master: { depth: 4, randomness: 0 }
};

export function findBestMove(game: Chess, difficulty: Difficulty = "medium"): Move | null {
  const settings = DIFFICULTY_SETTINGS[difficulty];
  const moves = game.moves({ verbose: true });
  
  if (moves.length === 0) return null;
  
  if (Math.random() < settings.randomness) {
    return moves[Math.floor(Math.random() * moves.length)];
  }
  
  const isMaximizing = game.turn() === 'w';
  let bestMove: Move | null = null;
  let bestValue = isMaximizing ? -Infinity : Infinity;
  
  const orderedMoves = orderMoves(game, moves);
  
  for (const move of orderedMoves) {
    game.move(move);
    const moveValue = minimax(
      game,
      settings.depth - 1,
      -Infinity,
      Infinity,
      !isMaximizing
    );
    game.undo();
    
    if (isMaximizing) {
      if (moveValue > bestValue) {
        bestValue = moveValue;
        bestMove = move;
      }
    } else {
      if (moveValue < bestValue) {
        bestValue = moveValue;
        bestMove = move;
      }
    }
  }
  
  return bestMove || moves[0];
}

export function evaluatePosition(game: Chess): number {
  const rawScore = evaluateBoard(game);
  const normalizedScore = Math.max(-10, Math.min(10, rawScore / 100));
  return normalizedScore;
}

export function getSuggestedMoves(game: Chess, count: number = 3): { move: Move; evaluation: number }[] {
  const moves = game.moves({ verbose: true });
  const evaluatedMoves: { move: Move; evaluation: number }[] = [];
  
  const isMaximizing = game.turn() === 'w';
  
  for (const move of moves) {
    const gameCopy = new Chess(game.fen());
    gameCopy.move(move);
    const evaluation = minimax(gameCopy, 2, -Infinity, Infinity, !isMaximizing);
    
    evaluatedMoves.push({ move, evaluation });
  }
  
  evaluatedMoves.sort((a, b) => 
    isMaximizing ? b.evaluation - a.evaluation : a.evaluation - b.evaluation
  );
  
  return evaluatedMoves.slice(0, count);
}
