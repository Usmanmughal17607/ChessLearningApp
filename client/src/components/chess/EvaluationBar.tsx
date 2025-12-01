import { useChess } from "@/lib/stores/useChess";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Eye, EyeOff, TrendingUp, Lightbulb } from "lucide-react";

export function EvaluationBar() {
  const { evaluation, suggestedMoves, showEvaluation, toggleEvaluation, game } = useChess();
  
  const evalPercent = Math.max(0, Math.min(100, 50 + evaluation * 5));
  
  const getEvalText = () => {
    if (evaluation > 3) return "White is winning";
    if (evaluation > 1) return "White is better";
    if (evaluation > 0.3) return "Slight edge for White";
    if (evaluation < -3) return "Black is winning";
    if (evaluation < -1) return "Black is better";
    if (evaluation < -0.3) return "Slight edge for Black";
    return "Position is equal";
  };
  
  const formatEval = () => {
    if (evaluation > 0) return `+${evaluation.toFixed(1)}`;
    return evaluation.toFixed(1);
  };
  
  return (
    <Card className="p-4 bg-gray-900/80 backdrop-blur border-gray-700">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-300">Position Evaluation</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleEvaluation}
            className="h-8 w-8 text-gray-400 hover:text-white"
          >
            {showEvaluation ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
          </Button>
        </div>
        
        {showEvaluation && (
          <>
            <div className="relative h-6 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-white to-gray-300"
                initial={{ width: "50%" }}
                animate={{ width: `${evalPercent}%` }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className={`text-xs font-bold ${evalPercent > 50 ? "text-gray-800" : "text-white"}`}>
                  {formatEval()}
                </span>
              </div>
            </div>
            
            <p className="text-xs text-gray-400 text-center">{getEvalText()}</p>
            
            {suggestedMoves.length > 0 && !game.isGameOver() && (
              <div className="space-y-2 pt-2 border-t border-gray-700">
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-yellow-500" />
                  <span className="text-xs font-medium text-gray-300">Suggested Moves</span>
                </div>
                <div className="flex gap-2">
                  {suggestedMoves.slice(0, 3).map((suggestion, i) => (
                    <span
                      key={i}
                      className={`
                        px-2 py-1 rounded text-xs font-mono
                        ${i === 0 ? "bg-yellow-600/30 text-yellow-300 border border-yellow-600/50" : "bg-gray-700 text-gray-300"}
                      `}
                    >
                      {suggestion.move.san}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </Card>
  );
}
