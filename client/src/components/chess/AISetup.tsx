import { useChess, PlayerColor } from "@/lib/stores/useChess";
import { Difficulty } from "@/lib/chessAI";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Bot, ArrowLeft, Crown, Swords } from "lucide-react";

const DIFFICULTY_OPTIONS: { value: Difficulty; label: string; description: string }[] = [
  { value: "beginner", label: "Beginner", description: "Makes random mistakes, good for learning" },
  { value: "easy", label: "Easy", description: "Basic strategy, occasional blunders" },
  { value: "medium", label: "Medium", description: "Solid play, thinks ahead" },
  { value: "hard", label: "Hard", description: "Strong tactics, few mistakes" },
  { value: "master", label: "Master", description: "Expert level, punishes errors" }
];

const COLOR_OPTIONS: { value: PlayerColor; label: string; icon: string }[] = [
  { value: "w", label: "Play as White", icon: "♔" },
  { value: "b", label: "Play as Black", icon: "♚" }
];

export function AISetup() {
  const { 
    aiDifficulty, 
    playerColor, 
    setAIDifficulty, 
    setPlayerColor, 
    startAIGame,
    setGameMode 
  } = useChess();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
      <div className="max-w-lg mx-auto space-y-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setGameMode("menu")}
          className="text-gray-400 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Menu
        </Button>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-2"
        >
          <div className="flex items-center justify-center gap-3">
            <Bot className="w-10 h-10 text-blue-500" />
            <h1 className="text-3xl font-bold text-white">Play vs AI</h1>
          </div>
          <p className="text-gray-400">Challenge the computer at your skill level</p>
        </motion.div>
        
        <Card className="p-6 bg-gray-800/50 backdrop-blur border-gray-700 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Swords className="w-5 h-5 text-gray-400" />
              <h2 className="text-lg font-semibold text-white">Difficulty</h2>
            </div>
            
            <div className="grid gap-2">
              {DIFFICULTY_OPTIONS.map((option) => (
                <motion.button
                  key={option.value}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setAIDifficulty(option.value)}
                  className={`
                    p-3 rounded-lg text-left transition-colors
                    ${aiDifficulty === option.value 
                      ? "bg-blue-600 border-2 border-blue-400" 
                      : "bg-gray-700/50 border-2 border-transparent hover:bg-gray-700"}
                  `}
                >
                  <div className="font-medium text-white">{option.label}</div>
                  <div className="text-xs text-gray-400">{option.description}</div>
                </motion.button>
              ))}
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Crown className="w-5 h-5 text-gray-400" />
              <h2 className="text-lg font-semibold text-white">Your Color</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {COLOR_OPTIONS.map((option) => (
                <motion.button
                  key={option.value}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setPlayerColor(option.value)}
                  className={`
                    p-4 rounded-lg text-center transition-colors
                    ${playerColor === option.value 
                      ? "bg-blue-600 border-2 border-blue-400" 
                      : "bg-gray-700/50 border-2 border-transparent hover:bg-gray-700"}
                  `}
                >
                  <div className="text-4xl mb-2">{option.icon}</div>
                  <div className="font-medium text-white text-sm">{option.label}</div>
                </motion.button>
              ))}
            </div>
          </div>
          
          <Button
            onClick={startAIGame}
            className="w-full h-12 text-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
          >
            <Bot className="w-5 h-5 mr-2" />
            Start Game
          </Button>
        </Card>
      </div>
    </div>
  );
}
