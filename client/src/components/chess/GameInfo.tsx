import { useChess } from "@/lib/stores/useChess";
import { motion } from "framer-motion";
import { Crown, Clock, RotateCcw, Flag, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const PIECE_DISPLAY: Record<string, string> = {
  p: "♟", n: "♞", b: "♝", r: "♜", q: "♛",
  P: "♙", N: "♘", B: "♗", R: "♖", Q: "♕"
};

export function GameInfo() {
  const { 
    game, 
    capturedPieces, 
    gameMode, 
    resetGame,
    setGameMode,
    currentReviewGame
  } = useChess();
  
  const turn = game.turn();
  const isCheck = game.isCheck();
  const isCheckmate = game.isCheckmate();
  const isStalemate = game.isStalemate();
  const isDraw = game.isDraw();
  const isGameOver = game.isGameOver();
  
  const getGameStatus = () => {
    if (isCheckmate) return { text: `Checkmate! ${turn === 'w' ? 'Black' : 'White'} wins!`, icon: Trophy, color: "text-yellow-500" };
    if (isStalemate) return { text: "Stalemate! It's a draw.", icon: Flag, color: "text-gray-500" };
    if (isDraw) return { text: "Draw!", icon: Flag, color: "text-gray-500" };
    if (isCheck) return { text: `${turn === 'w' ? 'White' : 'Black'} is in check!`, icon: Crown, color: "text-red-500" };
    return { text: `${turn === 'w' ? 'White' : 'Black'} to move`, icon: Clock, color: "text-blue-500" };
  };
  
  const status = getGameStatus();
  const StatusIcon = status.icon;
  
  const materialAdvantage = () => {
    const pieceValues: Record<string, number> = { p: 1, n: 3, b: 3, r: 5, q: 9, P: 1, N: 3, B: 3, R: 5, Q: 9 };
    const whiteCaptured = capturedPieces.white.reduce((sum, p) => sum + (pieceValues[p] || 0), 0);
    const blackCaptured = capturedPieces.black.reduce((sum, p) => sum + (pieceValues[p] || 0), 0);
    return blackCaptured - whiteCaptured;
  };
  
  const advantage = materialAdvantage();
  
  return (
    <Card className="p-4 bg-gray-900/80 backdrop-blur border-gray-700">
      <div className="space-y-4">
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <StatusIcon className={`w-5 h-5 ${status.color}`} />
          <span className={`font-semibold ${status.color}`}>{status.text}</span>
        </motion.div>
        
        {gameMode === "review" && currentReviewGame && (
          <div className="text-sm text-gray-400">
            <p className="font-semibold text-white">{currentReviewGame.title}</p>
            <p>{currentReviewGame.white} vs {currentReviewGame.black}</p>
            <p>{currentReviewGame.event}, {currentReviewGame.date}</p>
          </div>
        )}
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-white border border-gray-600" />
              <span className="text-sm font-medium text-gray-200">White</span>
            </div>
            <div className="flex gap-0.5 text-lg">
              {capturedPieces.white.map((piece, i) => (
                <span key={i} className="text-gray-900 drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">
                  {PIECE_DISPLAY[piece]}
                </span>
              ))}
              {advantage > 0 && (
                <span className="text-xs text-green-400 ml-1 self-center">+{advantage}</span>
              )}
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-gray-900 border border-gray-600" />
              <span className="text-sm font-medium text-gray-200">Black</span>
            </div>
            <div className="flex gap-0.5 text-lg">
              {capturedPieces.black.map((piece, i) => (
                <span key={i} className="text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                  {PIECE_DISPLAY[piece]}
                </span>
              ))}
              {advantage < 0 && (
                <span className="text-xs text-green-400 ml-1 self-center">+{Math.abs(advantage)}</span>
              )}
            </div>
          </div>
        </div>
        
        {gameMode === "play" && (
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={resetGame}
              className="flex-1 border-gray-600 hover:bg-gray-800"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              New Game
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setGameMode("menu")}
              className="flex-1 border-gray-600 hover:bg-gray-800"
            >
              <Flag className="w-4 h-4 mr-2" />
              Menu
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}
