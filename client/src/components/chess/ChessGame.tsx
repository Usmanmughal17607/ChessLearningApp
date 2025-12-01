import { useChess } from "@/lib/stores/useChess";
import { MainMenu } from "./MainMenu";
import { PlayGame } from "./PlayGame";
import { ReviewGame } from "./ReviewGame";
import { AISetup } from "./AISetup";
import { AIGame } from "./AIGame";
import { AnimatePresence, motion } from "framer-motion";

export function ChessGame() {
  const { gameMode, game } = useChess();
  
  const isAISetup = gameMode === "ai" && game.fen() === "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1" && game.history().length === 0;
  
  return (
    <AnimatePresence mode="wait">
      {gameMode === "menu" && (
        <motion.div
          key="menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <MainMenu />
        </motion.div>
      )}
      
      {gameMode === "play" && (
        <motion.div
          key="play"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <PlayGame />
        </motion.div>
      )}
      
      {gameMode === "review" && (
        <motion.div
          key="review"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <ReviewGame />
        </motion.div>
      )}
      
      {gameMode === "ai" && isAISetup && (
        <motion.div
          key="ai-setup"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <AISetup />
        </motion.div>
      )}
      
      {gameMode === "ai" && !isAISetup && (
        <motion.div
          key="ai-game"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <AIGame />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
