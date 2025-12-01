import { useState } from "react";
import { ChessBoard } from "./ChessBoard";
import { GameInfo } from "./GameInfo";
import { MoveHistory } from "./MoveHistory";
import { PGNPanel } from "./PGNPanel";
import { useChess } from "@/lib/stores/useChess";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import { Settings } from "./Settings";
import { KeyboardHelp } from "./KeyboardHelp";
import { HintSystem } from "./HintSystem";

export function PlayGame() {
  const { game, isDarkMode, toggleDarkMode, suggestedMoves } = useChess();
  const [showSettings, setShowSettings] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const turn = game.turn();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-2 justify-end mb-4">
          <Button onClick={() => setShowSettings(true)} size="sm" className="bg-blue-600 hover:bg-blue-700">⚙️ Settings</Button>
          <Button onClick={() => setShowHelp(true)} size="sm" className="bg-green-600 hover:bg-green-700"><HelpCircle className="w-4 h-4" /></Button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-4"
        >
          <h1 className="text-2xl font-bold text-white">Player vs Player</h1>
          <p className="text-gray-400">
            {turn === 'w' ? "White's" : "Black's"} turn
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 flex justify-center">
            <div className="w-full max-w-[min(80vw,500px)]">
              <ChessBoard />
            </div>
          </div>
          
          <div className="space-y-4">
            <GameInfo />
            <MoveHistory />
            <HintSystem suggestedMoves={suggestedMoves} showHint={showHint} onShowHint={() => setShowHint(!showHint)} />
            <PGNPanel />
          </div>
        </div>
      </div>

      {showSettings && <Settings isDarkMode={isDarkMode} onDarkModeToggle={toggleDarkMode} onClose={() => setShowSettings(false)} />}
      {showHelp && <KeyboardHelp onClose={() => setShowHelp(false)} />}
    </div>
  );
}
