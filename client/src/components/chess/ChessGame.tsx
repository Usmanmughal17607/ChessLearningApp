import { useChess } from "@/lib/stores/useChess";
import { MainMenu } from "./MainMenu";
import { PlayGame } from "./PlayGame";
import { ReviewGame } from "./ReviewGame";
import { AnimatePresence, motion } from "framer-motion";

export function ChessGame() {
  const { gameMode } = useChess();
  
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
    </AnimatePresence>
  );
}
