import { useEffect, useState } from "react";
import { ChessBoard } from "./ChessBoard";
import { GameInfo } from "./GameInfo";
import { MoveHistory } from "./MoveHistory";
import { EvaluationBar } from "./EvaluationBar";
import { PGNPanel } from "./PGNPanel";
import { useChess } from "@/lib/stores/useChess";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Bot, ArrowLeft, RotateCcw, Loader2, HelpCircle } from "lucide-react";
import { Settings } from "./Settings";
import { KeyboardHelp } from "./KeyboardHelp";
import { HintSystem } from "./HintSystem";
import { SoundManager } from "@/lib/soundManager";

const DIFFICULTY_LABELS = {
  beginner: "Beginner",
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
  master: "Master"
};

export function AIGame() {
  const { 
    game, 
    playerColor, 
    aiDifficulty,
    isAIThinking,
    moveHistory,
    makeAIMove,
    setGameMode,
    resetGame,
    updateEvaluation,
    isDarkMode,
    toggleDarkMode,
    suggestedMoves
  } = useChess();
  
  const [showSettings, setShowSettings] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showHint, setShowHint] = useState(false);
  
  const turn = game.turn();
  const isPlayerTurn = turn === playerColor;
  const isGameOver = game.isGameOver();
  const moveCount = moveHistory.length;
  
  useEffect(() => {
    if (!isPlayerTurn && !isGameOver && !isAIThinking) {
      const timer = setTimeout(() => {
        makeAIMove();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [moveCount, isPlayerTurn, isGameOver, isAIThinking]);
  
  useEffect(() => {
    updateEvaluation();
  }, [moveCount]);
  
  const handleNewGame = () => {
    resetGame();
    setGameMode("menu");
  };
  
  const getStatusMessage = () => {
    if (game.isCheckmate()) {
      const winner = turn === 'w' ? 'Black' : 'White';
      const playerWins = winner === (playerColor === 'w' ? 'White' : 'Black');
      if (playerWins) {
        SoundManager.playGameOverSound();
      }
      return playerWins ? "You win!" : "AI wins!";
    }
    if (game.isStalemate()) return "Stalemate - Draw!";
    if (game.isDraw()) return "Draw!";
    if (isAIThinking) return "AI is thinking...";
    if (isPlayerTurn) return "Your turn";
    return "AI's turn";
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
          
          <div className="flex items-center gap-2 text-gray-400">
            <Bot className="w-5 h-5" />
            <span className="text-sm">AI: {DIFFICULTY_LABELS[aiDifficulty]}</span>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-4"
        >
          <h1 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
            {isAIThinking && <Loader2 className="w-5 h-5 animate-spin text-blue-500" />}
            {getStatusMessage()}
          </h1>
          <p className="text-gray-400">
            You are playing as {playerColor === 'w' ? 'White' : 'Black'}
          </p>
        </motion.div>
        
        <div className="flex gap-2 justify-end mb-4">
          <Button onClick={() => setShowSettings(true)} size="sm" className="bg-blue-600 hover:bg-blue-700">⚙️ Settings</Button>
          <Button onClick={() => setShowHelp(true)} size="sm" className="bg-green-600 hover:bg-green-700"><HelpCircle className="w-4 h-4" /></Button>
        </div>

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
                      <div className="flex gap-2 justify-center">
                        <Button
                          onClick={handleNewGame}
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          <RotateCcw className="w-4 h-4 mr-2" />
                          New Game
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )}
            </div>
          </div>
          
          <div className="space-y-4">
            <EvaluationBar />
            <GameInfo />
            <MoveHistory />
            <PGNPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
