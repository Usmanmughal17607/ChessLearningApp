import { useChess } from "@/lib/stores/useChess";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  SkipBack, 
  ChevronLeft, 
  Play, 
  Pause, 
  ChevronRight, 
  SkipForward,
  ArrowLeft
} from "lucide-react";
import { useEffect, useCallback } from "react";

export function GameControls() {
  const { 
    currentReviewGame, 
    reviewMoveIndex, 
    isAutoPlaying,
    nextMove, 
    prevMove, 
    firstMove, 
    lastMoveReview,
    setAutoPlaying,
    setAutoPlayIntervalId,
    setGameMode
  } = useChess();
  
  const handleToggleAutoPlay = useCallback(() => {
    if (isAutoPlaying) {
      setAutoPlaying(false);
      setAutoPlayIntervalId(null);
    } else {
      if (currentReviewGame && reviewMoveIndex < currentReviewGame.moves.length - 1) {
        setAutoPlaying(true);
        const intervalId = setInterval(() => {
          const state = useChess.getState();
          if (!state.currentReviewGame) {
            clearInterval(intervalId);
            setAutoPlaying(false);
            return;
          }
          
          if (state.reviewMoveIndex < state.currentReviewGame.moves.length - 1) {
            state.nextMove();
          } else {
            clearInterval(intervalId);
            setAutoPlaying(false);
            setAutoPlayIntervalId(null);
          }
        }, 1500);
        setAutoPlayIntervalId(intervalId);
      }
    }
  }, [isAutoPlaying, currentReviewGame, reviewMoveIndex, setAutoPlaying, setAutoPlayIntervalId]);
  
  useEffect(() => {
    return () => {
      const state = useChess.getState();
      if (state.autoPlayIntervalId) {
        clearInterval(state.autoPlayIntervalId);
      }
    };
  }, []);
  
  useEffect(() => {
    if (isAutoPlaying && currentReviewGame && reviewMoveIndex >= currentReviewGame.moves.length - 1) {
      setAutoPlaying(false);
      setAutoPlayIntervalId(null);
    }
  }, [reviewMoveIndex, currentReviewGame, isAutoPlaying, setAutoPlaying, setAutoPlayIntervalId]);
  
  const totalMoves = currentReviewGame?.moves.length || 0;
  const currentMove = reviewMoveIndex + 1;
  const isAtStart = reviewMoveIndex < 0;
  const isAtEnd = reviewMoveIndex >= totalMoves - 1;
  
  return (
    <Card className="p-4 bg-gray-900/80 backdrop-blur border-gray-700">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setGameMode("menu")}
            className="text-gray-400 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Menu
          </Button>
          <span className="text-sm text-gray-400">
            Move {currentMove > 0 ? currentMove : 0} / {totalMoves}
          </span>
        </div>
        
        <div className="flex items-center justify-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={firstMove}
            disabled={isAtStart}
            className="border-gray-600 hover:bg-gray-800 disabled:opacity-30"
          >
            <SkipBack className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={prevMove}
            disabled={isAtStart}
            className="border-gray-600 hover:bg-gray-800 disabled:opacity-30"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="default"
            size="icon"
            onClick={handleToggleAutoPlay}
            disabled={isAtEnd && !isAutoPlaying}
            className="bg-blue-600 hover:bg-blue-700 disabled:opacity-30"
          >
            {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextMove}
            disabled={isAtEnd}
            className="border-gray-600 hover:bg-gray-800 disabled:opacity-30"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={lastMoveReview}
            disabled={isAtEnd}
            className="border-gray-600 hover:bg-gray-800 disabled:opacity-30"
          >
            <SkipForward className="w-4 h-4" />
          </Button>
        </div>
        
        {currentReviewGame && (
          <div className="text-center">
            <p className="text-sm text-gray-300">{currentReviewGame.result}</p>
            <p className="text-xs text-gray-500 mt-1">{currentReviewGame.description}</p>
          </div>
        )}
      </div>
    </Card>
  );
}
