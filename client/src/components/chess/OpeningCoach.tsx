import React, { useState, useEffect } from 'react';
import { openingsLibrary, OpeningInfo } from '@/data/openingsLibrary';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft, Zap, RotateCcw, Crown, Flame } from 'lucide-react';
import { motion } from 'framer-motion';
import { Chess, Move, Square } from 'chess.js';

interface OpeningCoachProps {
  onBack: () => void;
}

export function OpeningCoach({ onBack }: OpeningCoachProps) {
  const [selectedOpeningId, setSelectedOpeningId] = useState<string | null>(null);
  const [game, setGame] = useState<Chess | null>(null);
  const [moveCount, setMoveCount] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState<string>('');
  const [selectedSquare, setSelectedSquare] = useState<Square | null>(null);
  const [legalMoves, setLegalMoves] = useState<Square[]>([]);

  const currentOpening = selectedOpeningId
    ? openingsLibrary.find(o => o.id === selectedOpeningId)
    : null;

  // Initialize game when opening selected
  useEffect(() => {
    if (currentOpening) {
      setGame(new Chess());
      setMoveCount(0);
      setShowHint(false);
      setFeedback('');
      setSelectedSquare(null);
      setLegalMoves([]);
    }
  }, [currentOpening]);

  // Auto-play AI moves
  useEffect(() => {
    if (!game || !currentOpening) return;
    
    const turn = game.turn();
    const expectedMoveIndex = moveCount;
    
    // If it's Black's turn (AI), play the next opening move
    if (turn === 'b' && expectedMoveIndex < currentOpening.sampleMoves.length) {
      const aiMoveStr = currentOpening.sampleMoves[expectedMoveIndex];
      
      setTimeout(() => {
        try {
          const move = game.move(aiMoveStr);
          if (move) {
            setGame(new Chess(game.fen()));
            setMoveCount(expectedMoveIndex + 1);
            setFeedback('🤖 AI played: ' + aiMoveStr);
            setShowHint(false);
            setTimeout(() => setFeedback(''), 2500);
          }
        } catch (e) {
          console.error('AI move error:', e);
        }
      }, 800);
    }
  }, [moveCount, game, currentOpening]);

  const handleSquareClick = (square: Square) => {
    if (!game || !currentOpening) return;
    
    const turn = game.turn();
    if (turn !== 'w') return;
    
    if (selectedSquare === null) {
      const piece = game.get(square);
      if (piece && piece.color === 'w') {
        setSelectedSquare(square);
        const moves = game.moves({ square, verbose: true });
        setLegalMoves(moves.map((m: Move) => m.to));
      }
    } else if (selectedSquare === square) {
      setSelectedSquare(null);
      setLegalMoves([]);
    } else {
      try {
        const moveStr = `${selectedSquare}${square}`;
        const move = game.move(moveStr);
        
        if (move) {
          const expectedMove = currentOpening.sampleMoves[moveCount];
          if (move.san === expectedMove) {
            setFeedback('✨ Perfect! Well played!');
            setGame(new Chess(game.fen()));
            setMoveCount(moveCount + 1);
          } else {
            game.undo();
            setFeedback('Try: ' + expectedMove);
          }
          setSelectedSquare(null);
          setLegalMoves([]);
        }
      } catch (e) {
        setSelectedSquare(null);
        setLegalMoves([]);
      }
    }
  };

  const resetGame = () => {
    if (currentOpening) {
      setGame(new Chess());
      setMoveCount(0);
      setShowHint(false);
      setFeedback('');
      setSelectedSquare(null);
      setLegalMoves([]);
    }
  };

  const getHint = () => {
    if (!game || !currentOpening) return;
    if (game.turn() === 'w' && moveCount < currentOpening.sampleMoves.length) {
      setShowHint(true);
    }
  };

  // Opening Selection Screen
  if (!currentOpening) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600 rounded-full blur-3xl animate-pulse" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-7xl mx-auto p-4 pt-8"
        >
          <button
            onClick={onBack}
            className="flex items-center gap-2 mb-8 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors text-slate-300 hover:text-white"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Menu
          </button>

          <div className="mb-12 text-center">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <Crown className="w-10 h-10 text-amber-400" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400 bg-clip-text text-transparent">
                Opening Coach
              </h1>
            </motion.div>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Master chess openings by playing against AI. Learn from the world's greatest masters with real-time feedback.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openingsLibrary.map((opening, idx) => (
              <motion.button
                key={opening.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedOpeningId(opening.id)}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl hover:from-slate-700 hover:to-slate-800 transition-all h-full">
                  <h3 className="font-bold text-lg text-amber-400 mb-2 group-hover:text-amber-300 transition">
                    {opening.name}
                  </h3>
                  <p className="text-sm text-slate-400 mb-4">{opening.firstMoves}</p>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="bg-slate-700 px-3 py-1 rounded-full">{opening.difficulty}</span>
                    <span className="text-amber-400">{opening.sampleMoves.length} moves</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  // Game Board Screen
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white p-4 overflow-auto">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => setSelectedOpeningId(null)}
          className="flex items-center gap-2 mb-6 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors text-slate-300 hover:text-white"
        >
          <ChevronLeft className="w-5 h-5" />
          Choose Different Opening
        </button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* Left: Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-4"
          >
            {/* Title Card */}
            <div className="bg-gradient-to-br from-amber-600/20 to-orange-600/20 border border-amber-500/30 rounded-xl p-6">
              <h2 className="text-3xl font-bold text-amber-400 mb-2">{currentOpening.name}</h2>
              <p className="text-sm text-slate-300 leading-relaxed">{currentOpening.description}</p>
              <div className="mt-4 text-xs text-slate-400">{currentOpening.ecoCode}</div>
            </div>

            {/* Progress */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-5">
              <div className="text-sm text-slate-300 font-semibold mb-3">Progress</div>
              <div className="text-3xl font-bold text-amber-400 mb-3">
                {moveCount}/{currentOpening.sampleMoves.length}
              </div>
              <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-amber-500 to-orange-500 h-full rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(moveCount / currentOpening.sampleMoves.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="text-xs text-slate-400 mt-2">
                {moveCount >= currentOpening.sampleMoves.length ? '✨ Completed!' : 'Keep going!'}
              </div>
            </div>

            {/* Key Ideas */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-5">
              <h3 className="font-bold text-amber-400 mb-4 flex items-center gap-2">
                <Flame className="w-5 h-5" />
                Key Ideas
              </h3>
              <ul className="space-y-3">
                {currentOpening.keyIdeas.slice(0, 3).map((idea, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-300">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>{idea}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Famous Masters */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-5">
              <h3 className="font-bold text-amber-400 mb-4 flex items-center gap-2">
                <Crown className="w-5 h-5" />
                Mastered By
              </h3>
              <div className="space-y-3">
                {currentOpening.famousGMs.slice(0, 3).map((gm, i) => (
                  <div key={i} className="text-sm">
                    <div className="text-amber-300 font-semibold">{gm.name}</div>
                    <div className="text-slate-400 text-xs">{gm.century} • {gm.style}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Center: Chessboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6 sticky top-4">
              {/* Board */}
              <div className="bg-gradient-to-br from-slate-900 to-black p-3 rounded-lg mb-6 shadow-2xl">
                <div className="grid grid-cols-8 gap-0 bg-slate-950 rounded-md overflow-hidden">
                  {['8', '7', '6', '5', '4', '3', '2', '1'].map((rank) =>
                    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map((file) => {
                      const square = (file + rank) as Square;
                      const piece = game?.get(square);
                      const isSelected = selectedSquare === square;
                      const isLegal = legalMoves.includes(square);
                      const isLight = (file.charCodeAt(0) + rank.charCodeAt(0)) % 2 === 0;
                      
                      const PIECE_SYMBOLS: Record<string, string> = {
                        'p': '♟', 'n': '♞', 'b': '♝', 'r': '♜', 'q': '♛', 'k': '♚',
                        'P': '♙', 'N': '♘', 'B': '♗', 'R': '♖', 'Q': '♕', 'K': '♔'
                      };

                      return (
                        <motion.div
                          key={square}
                          onClick={() => handleSquareClick(square)}
                          className={`
                            w-16 h-16 flex items-center justify-center text-5xl font-bold cursor-pointer transition-all relative
                            ${isSelected ? 'bg-yellow-400 shadow-lg shadow-yellow-400/50' : 
                              isLegal ? 'bg-green-500/70 shadow-lg shadow-green-500/30' : 
                              isLight ? 'bg-amber-100' : 'bg-amber-700'}
                          `}
                          whileHover={{ scale: 1.02 }}
                        >
                          {isLegal && !piece && (
                            <div className="w-4 h-4 bg-green-600 rounded-full opacity-80" />
                          )}
                          {piece && (
                            <span className={piece.color === 'w' ? 'text-white drop-shadow-xl' : 'text-slate-900 drop-shadow-md'}>
                              {PIECE_SYMBOLS[piece.type.toUpperCase() + (piece.color === 'w' ? '' : '')]}
                            </span>
                          )}
                        </motion.div>
                      );
                    })
                  )}
                </div>
              </div>

              {/* Feedback */}
              {feedback && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`p-4 rounded-lg text-center font-semibold mb-4 text-lg ${
                    feedback.includes('✨') || feedback.includes('Perfect')
                      ? 'bg-green-900/60 text-green-300 border border-green-500/30'
                      : 'bg-blue-900/60 text-blue-300 border border-blue-500/30'
                  }`}
                >
                  {feedback}
                </motion.div>
              )}

              {/* Hint */}
              {showHint && moveCount < currentOpening.sampleMoves.length && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-r from-blue-600/30 to-cyan-600/30 border border-blue-500/30 p-4 rounded-lg mb-4 text-center"
                >
                  <div className="text-sm text-blue-200 font-semibold">💡 Next Move</div>
                  <div className="text-2xl font-bold text-blue-300 mt-1">{currentOpening.sampleMoves[moveCount]}</div>
                </motion.div>
              )}

              {/* Completion */}
              {moveCount >= currentOpening.sampleMoves.length && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-r from-emerald-600/30 to-teal-600/30 border border-emerald-500/30 p-4 rounded-lg mb-4 text-center"
                >
                  <div className="text-lg text-emerald-300 font-bold">🎉 Opening Mastered!</div>
                  <p className="text-sm text-emerald-200 mt-1">Use these ideas in your games!</p>
                </motion.div>
              )}

              {/* Controls */}
              <div className="flex gap-2">
                <Button 
                  onClick={getHint}
                  disabled={moveCount >= currentOpening.sampleMoves.length || game?.turn() !== 'w'}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:opacity-50"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  {showHint ? 'Hide' : 'Hint'}
                </Button>
                <Button 
                  onClick={resetGame}
                  variant="outline" 
                  className="flex-1 border-slate-600 hover:bg-white/10"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right: Status & Moves */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-4"
          >
            {/* Current Status */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6">
              <h3 className="font-bold text-amber-400 mb-4">Game Status</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Current Turn:</span>
                  <span className="font-semibold">
                    {game?.turn() === 'w' ? '⚪ Your Move' : '🤖 AI Thinking'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Next Move:</span>
                  <span className="font-mono text-amber-400 font-bold">
                    {currentOpening.sampleMoves[moveCount] || '—'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Moves Played:</span>
                  <span className="text-amber-400 font-bold">{moveCount}</span>
                </div>
              </div>
            </div>

            {/* Move History */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6">
              <h3 className="font-bold text-amber-400 mb-4">Move Sequence</h3>
              <div className="bg-slate-900/50 rounded-lg p-4 max-h-96 overflow-y-auto">
                <div className="space-y-2 text-sm font-mono">
                  {currentOpening.sampleMoves.map((move, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        // Allow jumping to previous moves only
                        if (idx < moveCount) {
                          setMoveCount(idx);
                          setShowHint(false);
                          setFeedback('');
                        }
                      }}
                      className={`
                        p-2 rounded transition-all cursor-pointer
                        ${idx === moveCount ? 'bg-amber-600/60 text-amber-200 font-bold' : 
                          idx < moveCount ? 'bg-slate-700 text-slate-300' : 
                          'bg-slate-800 text-slate-500'}
                      `}
                    >
                      <span className="text-xs text-slate-500">{Math.floor(idx / 2) + 1}.</span>{' '}
                      <span>{move}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
