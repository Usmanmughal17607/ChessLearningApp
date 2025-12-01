import { useChess } from "@/lib/stores/useChess";
import { Square } from "chess.js";
import { motion } from "framer-motion";

const PIECE_UNICODE: Record<string, string> = {
  wp: "♙", wn: "♘", wb: "♗", wr: "♖", wq: "♕", wk: "♔",
  bp: "♟", bn: "♞", bb: "♝", br: "♜", bq: "♛", bk: "♚"
};

const FILES = ["a", "b", "c", "d", "e", "f", "g", "h"];
const RANKS = ["8", "7", "6", "5", "4", "3", "2", "1"];

const THEMES = {
  classic: {
    light: "bg-amber-100",
    dark: "bg-amber-700",
    selected: "bg-yellow-400",
    legal: "bg-green-400/50",
    lastMove: "bg-yellow-300/50",
    check: "bg-red-500/60"
  },
  modern: {
    light: "bg-slate-200",
    dark: "bg-slate-600",
    selected: "bg-blue-400",
    legal: "bg-emerald-400/50",
    lastMove: "bg-blue-300/40",
    check: "bg-red-500/60"
  },
  wooden: {
    light: "bg-orange-200",
    dark: "bg-amber-800",
    selected: "bg-yellow-500",
    legal: "bg-lime-400/50",
    lastMove: "bg-orange-300/40",
    check: "bg-red-600/60"
  },
  midnight: {
    light: "bg-indigo-300",
    dark: "bg-indigo-900",
    selected: "bg-purple-400",
    legal: "bg-cyan-400/50",
    lastMove: "bg-indigo-400/40",
    check: "bg-rose-500/60"
  },
  emerald: {
    light: "bg-emerald-100",
    dark: "bg-emerald-700",
    selected: "bg-emerald-400",
    legal: "bg-teal-400/50",
    lastMove: "bg-emerald-300/50",
    check: "bg-red-500/60"
  },
  sunset: {
    light: "bg-rose-100",
    dark: "bg-orange-700",
    selected: "bg-yellow-400",
    legal: "bg-amber-400/50",
    lastMove: "bg-rose-300/50",
    check: "bg-red-600/60"
  },
  ocean: {
    light: "bg-cyan-100",
    dark: "bg-blue-800",
    selected: "bg-sky-400",
    legal: "bg-cyan-400/50",
    lastMove: "bg-blue-300/50",
    check: "bg-red-500/60"
  },
  neon: {
    light: "bg-lime-100",
    dark: "bg-gray-900 border-2 border-neon-500",
    selected: "bg-pink-500",
    legal: "bg-cyan-400/70",
    lastMove: "bg-fuchsia-400/60",
    check: "bg-red-600/80"
  },
  lavender: {
    light: "bg-purple-100",
    dark: "bg-purple-600",
    selected: "bg-pink-400",
    legal: "bg-purple-400/50",
    lastMove: "bg-purple-300/50",
    check: "bg-red-500/60"
  },
  forest: {
    light: "bg-green-100",
    dark: "bg-green-800",
    selected: "bg-lime-400",
    legal: "bg-green-400/50",
    lastMove: "bg-green-300/50",
    check: "bg-red-600/60"
  }
};

export function ChessBoard() {
  const { 
    game, 
    selectedSquare, 
    legalMoves, 
    lastMove, 
    theme,
    gameMode,
    playerColor,
    isAIThinking,
    selectSquare 
  } = useChess();
  
  const currentTheme = THEMES[theme];
  const board = game.board();
  const isInCheck = game.isCheck();
  const turn = game.turn();
  
  const shouldFlipBoard = gameMode === "ai" && playerColor === "b";
  
  const displayFiles = shouldFlipBoard ? [...FILES].reverse() : FILES;
  const displayRanks = shouldFlipBoard ? [...RANKS].reverse() : RANKS;
  
  const handleSquareClick = (square: Square) => {
    if (gameMode === "review") return;
    if (gameMode === "ai" && (turn !== playerColor || isAIThinking)) return;
    selectSquare(square);
  };
  
  const getKingSquare = (): Square | null => {
    for (let r = 0; r < 8; r++) {
      for (let f = 0; f < 8; f++) {
        const piece = board[r][f];
        if (piece && piece.type === 'k' && piece.color === turn) {
          return (FILES[f] + RANKS[r]) as Square;
        }
      }
    }
    return null;
  };
  
  const kingInCheckSquare = isInCheck ? getKingSquare() : null;
  
  return (
    <div className="relative select-none">
      <div className="grid grid-cols-8 border-4 border-gray-800 rounded-lg shadow-2xl overflow-hidden">
        {displayRanks.map((rank, displayRankIndex) => (
          displayFiles.map((file, displayFileIndex) => {
            const square = (file + rank) as Square;
            const boardRankIndex = RANKS.indexOf(rank);
            const boardFileIndex = FILES.indexOf(file);
            const piece = board[boardRankIndex][boardFileIndex];
            const isLight = (boardRankIndex + boardFileIndex) % 2 === 0;
            const isSelected = selectedSquare === square;
            const isLegalMove = legalMoves.includes(square);
            const isLastMove = lastMove && (lastMove.from === square || lastMove.to === square);
            const isKingInCheck = kingInCheckSquare === square;
            
            let bgClass = isLight ? currentTheme.light : currentTheme.dark;
            if (isKingInCheck) bgClass = currentTheme.check;
            else if (isSelected) bgClass = currentTheme.selected;
            else if (isLastMove) bgClass += ` ${currentTheme.lastMove}`;
            
            const pieceKey = piece ? `${piece.color}${piece.type}` : null;
            const pieceUnicode = pieceKey ? PIECE_UNICODE[pieceKey] : null;
            
            const isNotPlayerTurn = gameMode === "ai" && (turn !== playerColor || isAIThinking);
            
            return (
              <motion.div
                key={square}
                className={`
                  relative aspect-square flex items-center justify-center 
                  ${isNotPlayerTurn ? "cursor-not-allowed" : "cursor-pointer"}
                  ${bgClass}
                  transition-colors duration-150
                  ${!isNotPlayerTurn ? "hover:brightness-110" : ""}
                `}
                onClick={() => handleSquareClick(square)}
                whileHover={{ scale: gameMode !== "review" && !isNotPlayerTurn ? 1.02 : 1 }}
                whileTap={{ scale: gameMode !== "review" && !isNotPlayerTurn ? 0.98 : 1 }}
              >
                {displayFileIndex === 0 && (
                  <span className={`absolute top-0.5 left-1 text-xs font-bold ${isLight ? "text-amber-800/70" : "text-amber-100/70"}`}>
                    {rank}
                  </span>
                )}
                {displayRankIndex === 7 && (
                  <span className={`absolute bottom-0.5 right-1 text-xs font-bold ${isLight ? "text-amber-800/70" : "text-amber-100/70"}`}>
                    {file}
                  </span>
                )}
                
                {isLegalMove && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className={`
                      absolute w-3 h-3 rounded-full
                      ${piece ? "ring-4 ring-green-500/60 w-full h-full rounded-none bg-transparent" : "bg-green-500/60"}
                    `}
                  />
                )}
                
                {pieceUnicode && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className={`
                      text-4xl sm:text-5xl md:text-6xl
                      ${piece?.color === 'w' ? "text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" : "text-gray-900 drop-shadow-[0_2px_2px_rgba(255,255,255,0.3)]"}
                      select-none pointer-events-none
                    `}
                  >
                    {pieceUnicode}
                  </motion.span>
                )}
              </motion.div>
            );
          })
        ))}
      </div>
    </div>
  );
}
