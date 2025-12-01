import { useChess } from "@/lib/stores/useChess";
import { MainMenu } from "./MainMenu";
import { PlayGame } from "./PlayGame";
import { ReviewGame } from "./ReviewGame";
import { AISetup } from "./AISetup";
import { AIGame } from "./AIGame";
import { AnimatePresence, motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Copy, Check } from "lucide-react";
import { useState } from "react";
import { ChessBoard } from "./ChessBoard";
import { GameInfo } from "./GameInfo";
import { MoveHistory } from "./MoveHistory";

function OnlineSetup() {
  const { setGameMode, startOnlineGame, setOpponentName, playerColor } = useChess();
  const [opponentInput, setOpponentInput] = useState("");
  const [gameCodeInput, setGameCodeInput] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 flex items-center justify-center">
      <Card className="p-6 bg-gray-800/50 backdrop-blur border-gray-700 max-w-md w-full space-y-4">
        <Button variant="ghost" size="sm" onClick={() => setGameMode("menu")} className="text-gray-400">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </Button>
        <h2 className="text-2xl font-bold text-white">Play with Friend</h2>
        
        <div className="space-y-3">
          <input type="text" placeholder="Opponent name" value={opponentInput} onChange={(e) => setOpponentInput(e.target.value)} className="w-full p-2 rounded bg-gray-700 text-white" />
          <Button onClick={() => { setOpponentName(opponentInput || "Friend"); startOnlineGame(); }} className="w-full bg-green-600 hover:bg-green-700">
            Create Game
          </Button>
          <div className="text-center text-gray-400">OR</div>
          <input type="text" placeholder="Enter game code" value={gameCodeInput} onChange={(e) => setGameCodeInput(e.target.value)} className="w-full p-2 rounded bg-gray-700 text-white" />
          <Button onClick={() => { setOpponentName("Friend"); startOnlineGame(gameCodeInput); }} disabled={!gameCodeInput} className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50">
            Join Game
          </Button>
        </div>
      </Card>
    </div>
  );
}

function OnlineGame() {
  const { game, playerColor, gameCode, opponentName, setGameMode } = useChess();
  const [copied, setCopied] = useState(false);
  const turn = game.turn();

  const handleCopyCode = async () => {
    if (gameCode) {
      await navigator.clipboard.writeText(gameCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getStatusMessage = () => {
    if (game.isCheckmate()) return turn === 'w' ? "Black wins!" : "White wins!";
    if (game.isStalemate() || game.isDraw()) return "Draw!";
    return turn === playerColor ? "Your turn" : `${opponentName}'s turn`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <Button variant="ghost" size="sm" onClick={() => setGameMode("menu")} className="text-gray-400 hover:text-white">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Button>
          {gameCode && playerColor === 'w' && (
            <Button onClick={handleCopyCode} size="sm" variant="outline" className="border-gray-600 hover:bg-gray-800">
              {copied ? <Check className="w-3 h-3 mr-2 text-green-500" /> : <Copy className="w-3 h-3 mr-2" />}
              {gameCode}
            </Button>
          )}
        </div>
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-white">{getStatusMessage()}</h1>
          <p className="text-gray-400">vs {opponentName}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 flex justify-center">
            <div className="w-full max-w-[min(80vw,500px)]">
              <ChessBoard />
            </div>
          </div>
          <div className="space-y-4">
            <GameInfo />
            <MoveHistory />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ChessGame() {
  const { gameMode, aiGameStarted } = useChess();
  
  const isAISetup = gameMode === "ai" && !aiGameStarted;
  const isOnlineSetup = gameMode === "online";
  
  return (
    <AnimatePresence mode="wait">
      {gameMode === "menu" && (
        <motion.div key="menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <MainMenu />
        </motion.div>
      )}
      
      {gameMode === "play" && (
        <motion.div key="play" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
          <PlayGame />
        </motion.div>
      )}
      
      {gameMode === "review" && (
        <motion.div key="review" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
          <ReviewGame />
        </motion.div>
      )}
      
      {gameMode === "ai" && isAISetup && (
        <motion.div key="ai-setup" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
          <AISetup />
        </motion.div>
      )}
      
      {gameMode === "ai" && !isAISetup && (
        <motion.div key="ai-game" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
          <AIGame />
        </motion.div>
      )}
      
      {gameMode === "online" && isOnlineSetup && (
        <motion.div key="online-setup" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
          <OnlineSetup />
        </motion.div>
      )}
      
      {gameMode === "online" && !isOnlineSetup && (
        <motion.div key="online-game" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
          <OnlineGame />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
