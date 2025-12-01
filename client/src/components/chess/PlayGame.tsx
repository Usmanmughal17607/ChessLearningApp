import { ChessBoard } from "./ChessBoard";
import { GameInfo } from "./GameInfo";
import { MoveHistory } from "./MoveHistory";
import { PGNPanel } from "./PGNPanel";
import { useChess } from "@/lib/stores/useChess";
import { motion } from "framer-motion";

export function PlayGame() {
  const { game } = useChess();
  const turn = game.turn();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
      <div className="max-w-6xl mx-auto">
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
            <PGNPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
