import { useEffect } from "react";
import { ChessBoard } from "./ChessBoard";
import { GameInfo } from "./GameInfo";
import { MoveHistory } from "./MoveHistory";
import { useChess } from "@/lib/stores/useChess";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowLeft, Copy, Check } from "lucide-react";
import { useState } from "react";

export function OnlineGame() {
  const { 
    game, 
    playerColor, 
    isOnline,
    gameCode,
    opponentName,
    moveHistory,
    setGameMode
  } = useChess();
  
  const [copied, setCopied] = useState(false);
  const turn = game.turn();
  const isPlayerTurn = turn === playerColor;
  const isGameOver = game.isGameOver();
  
  const handleCopyCode = async () => {
    if (gameCode) {
      await navigator.clipboard.writeText(gameCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  
  const getStatusMessage = () => {
    if (game.isCheckmate()) {
      const winner = turn === 'w' ? 'Black' : 'White';
      return winner === (playerColor === 'w' ? 'White' : 'Black') ? "You win!" : "You lost!";
    }
    if (game.isStalemate()) return "Stalemate - Draw!";
    if (game.isDraw()) return "Draw!";
    if (isPlayerTurn) return "Your turn";
    return `${opponentName}'s turn`;
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setGameMode("menu")}
            className="text-gray-400 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Menu
          </Button>
          
          {gameCode && playerColor === 'w' && (
            <Button
              onClick={handleCopyCode}
              size="sm"
              variant="outline"
              className="border-gray-600 hover:bg-gray-800"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 mr-2 text-green-500" />
                  {gameCode}
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 mr-2" />
                  {gameCode}
                </>
              )}
            </Button>
          )}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-4"
        >
          <h1 className="text-2xl font-bold text-white">{getStatusMessage()}</h1>
          <p className="text-gray-400">
            Playing as {playerColor === 'w' ? 'White' : 'Black'} vs {opponentName}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 flex justify-center">
            <div className="w-full max-w-[min(80vw,500px)]">
              <ChessBoard />
              
              {isGameOver && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4"
                >
                  <Card className="p-4 bg-gray-800/80 border-gray-700">
                    <div className="text-center space-y-3">
                      <h3 className="text-xl font-bold text-white">{getStatusMessage()}</h3>
                      <Button
                        onClick={() => setGameMode("menu")}
                        className="w-full bg-blue-600 hover:bg-blue-700"
                      >
                        Return to Menu
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              )}
            </div>
          </div>
          
          <div className="space-y-4">
            <GameInfo />
            <MoveHistory />
          </div>
        </div>
      </div>
    </div>
  );
}
