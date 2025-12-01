import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";
import { Move } from "chess.js";

interface HintSystemProps {
  suggestedMoves: { move: Move; evaluation: number }[];
  onShowHint: () => void;
  showHint: boolean;
}

export function HintSystem({ suggestedMoves, onShowHint, showHint }: HintSystemProps) {
  if (suggestedMoves.length === 0) return null;

  const bestMove = suggestedMoves[0];
  if (!bestMove) return null;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Card className="p-4 bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-700">
        <div className="flex items-center gap-3 mb-3">
          <Lightbulb className="w-5 h-5 text-yellow-400" />
          <h3 className="text-white font-bold">Hint Available</h3>
        </div>

        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 p-3 bg-gray-800/50 rounded border border-yellow-500/30"
          >
            <p className="text-sm text-yellow-300">
              Try: <span className="font-bold">{bestMove.move.san}</span>
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Evaluation: +{(bestMove.evaluation / 100).toFixed(1)}
            </p>
          </motion.div>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onShowHint}
          className="w-full mt-3 py-2 px-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded font-semibold text-sm transition"
        >
          {showHint ? "Hide Hint" : "Show Hint"}
        </motion.button>
      </Card>
    </motion.div>
  );
}
