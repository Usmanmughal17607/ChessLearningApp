import { ChessBoard } from "./ChessBoard";
import { GameInfo } from "./GameInfo";
import { MoveHistory } from "./MoveHistory";
import { GameControls } from "./GameControls";
import { FischerGamesLibrary } from "./FischerGamesLibrary";
import { useChess } from "@/lib/stores/useChess";
import { motion } from "framer-motion";

export function ReviewGame() {
  const { currentReviewGame } = useChess();
  
  if (!currentReviewGame) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
        <div className="max-w-4xl mx-auto">
          <FischerGamesLibrary />
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-4"
        >
          <h1 className="text-2xl font-bold text-white">{currentReviewGame.title}</h1>
          <p className="text-gray-400">
            {currentReviewGame.white} vs {currentReviewGame.black}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 flex justify-center">
            <div className="w-full max-w-[min(80vw,500px)]">
              <ChessBoard />
            </div>
          </div>
          
          <div className="space-y-4">
            <GameControls />
            <GameInfo />
            <MoveHistory />
          </div>
        </div>
      </div>
    </div>
  );
}
