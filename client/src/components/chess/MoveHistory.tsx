import { useChess } from "@/lib/stores/useChess";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export function MoveHistory() {
  const { moveHistory, gameMode, reviewMoveIndex, goToMove, currentReviewGame } = useChess();
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const moves = gameMode === "review" && currentReviewGame 
    ? currentReviewGame.moves 
    : moveHistory.map(m => m.san);
  
  const movePairs: { number: number; white: string; black?: string }[] = [];
  for (let i = 0; i < moves.length; i += 2) {
    movePairs.push({
      number: Math.floor(i / 2) + 1,
      white: moves[i],
      black: moves[i + 1]
    });
  }
  
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [moves.length]);
  
  const getKeyMomentComment = (moveIndex: number): string | null => {
    if (gameMode !== "review" || !currentReviewGame) return null;
    const moment = currentReviewGame.keyMoments.find(km => km.moveIndex === moveIndex);
    return moment?.comment || null;
  };
  
  return (
    <Card className="bg-gray-900/80 backdrop-blur border-gray-700 h-full">
      <div className="p-3 border-b border-gray-700">
        <h3 className="font-semibold text-gray-200">Move History</h3>
      </div>
      <ScrollArea className="h-[200px] sm:h-[300px]" ref={scrollRef}>
        <div className="p-2 space-y-1">
          {movePairs.length === 0 ? (
            <p className="text-gray-500 text-sm text-center py-4">
              {gameMode === "review" ? "Press play to start" : "No moves yet"}
            </p>
          ) : (
            movePairs.map((pair, idx) => {
              const whiteIndex = idx * 2;
              const blackIndex = idx * 2 + 1;
              const isWhiteActive = gameMode === "review" && reviewMoveIndex === whiteIndex;
              const isBlackActive = gameMode === "review" && reviewMoveIndex === blackIndex;
              const whiteComment = getKeyMomentComment(whiteIndex);
              const blackComment = getKeyMomentComment(blackIndex);
              
              return (
                <div key={idx}>
                  <motion.div 
                    className="flex text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.02 }}
                  >
                    <span className="w-8 text-gray-500 font-mono">{pair.number}.</span>
                    <span 
                      className={`
                        w-16 font-mono cursor-pointer px-1 rounded
                        ${isWhiteActive ? "bg-blue-600 text-white" : "text-gray-200 hover:bg-gray-700"}
                      `}
                      onClick={() => gameMode === "review" && goToMove(whiteIndex)}
                    >
                      {pair.white}
                    </span>
                    {pair.black && (
                      <span 
                        className={`
                          w-16 font-mono cursor-pointer px-1 rounded
                          ${isBlackActive ? "bg-blue-600 text-white" : "text-gray-200 hover:bg-gray-700"}
                        `}
                        onClick={() => gameMode === "review" && goToMove(blackIndex)}
                      >
                        {pair.black}
                      </span>
                    )}
                  </motion.div>
                  {(whiteComment || blackComment) && (
                    <motion.div 
                      className="text-xs text-yellow-400 pl-8 py-1 italic"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {whiteComment || blackComment}
                    </motion.div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </ScrollArea>
    </Card>
  );
}
