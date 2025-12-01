import React, { useState, useEffect } from 'react';
import { openingsLibrary, OpeningInfo } from '@/data/openingsLibrary';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft, Zap, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';
import { Chess, Move, Square } from 'chess.js';
import * as THREE from 'three';

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
            setFeedback('AI played: ' + aiMoveStr);
            setShowHint(false);
            setTimeout(() => setFeedback(''), 2000);
          }
        } catch (e) {
          console.error('AI move error:', e);
        }
      }, 500);
    }
  }, [moveCount, game, currentOpening]);

  const handleSquareClick = (square: Square) => {
    if (!game || !currentOpening) return;
    
    const turn = game.turn();
    if (turn !== 'w') return; // Only allow white to play
    
    if (selectedSquare === null) {
      // Select a piece
      const piece = game.get(square);
      if (piece && piece.color === 'w') {
        setSelectedSquare(square);
        const moves = game.moves({ square, verbose: true });
        setLegalMoves(moves.map((m: Move) => m.to));
      }
    } else if (selectedSquare === square) {
      // Deselect
      setSelectedSquare(null);
      setLegalMoves([]);
    } else {
      // Try to make move
      try {
        const moveStr = `${selectedSquare}${square}`;
        const move = game.move(moveStr);
        
        if (move) {
          const expectedMove = currentOpening.sampleMoves[moveCount];
          if (move.san === expectedMove) {
            setFeedback('✓ Correct move!');
            setGame(new Chess(game.fen()));
            setMoveCount(moveCount + 1);
          } else {
            // Undo wrong move
            game.undo();
            setFeedback('❌ Wrong move. Expected: ' + expectedMove);
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
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white p-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <button
            onClick={onBack}
            className="flex items-center gap-2 mb-6 px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Back
          </button>

          <h1 className="text-4xl font-bold mb-4 text-amber-500">Opening Coach (Interactive)</h1>
          <p className="text-slate-300 text-lg mb-8">
            Play as White against AI! Make your moves, and the AI will respond with the correct opening moves to teach you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {openingsLibrary.map((opening) => (
              <motion.button
                key={opening.id}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedOpeningId(opening.id)}
                className="bg-slate-700 hover:bg-slate-600 p-4 rounded-lg text-left transition-colors"
              >
                <h3 className="font-bold text-amber-400 mb-2">{opening.name}</h3>
                <p className="text-sm text-slate-300 mb-3">{opening.firstMoves}</p>
                <div className="text-xs text-slate-400">
                  {opening.difficulty} • {opening.sampleMoves.length} moves
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white p-4">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => setSelectedOpeningId(null)}
          className="flex items-center gap-2 mb-4 px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Opening Selection
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Chessboard - Center */}
          <div className="lg:col-span-2 flex justify-center">
            <Card className="bg-slate-800 border-slate-700 p-4">
              <div className="w-full max-w-md">
                {/* Chess Board */}
                <div className="bg-slate-900 p-2 rounded-lg mb-4">
                  <div className="grid grid-cols-8 gap-0 bg-slate-900 rounded">
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
                              w-12 h-12 flex items-center justify-center text-4xl font-bold cursor-pointer transition-colors
                              ${isSelected ? 'bg-yellow-500' : isLegal ? 'bg-green-500/60' : isLight ? 'bg-amber-100' : 'bg-amber-700'}
                            `}
                            whileHover={{ scale: 1.05 }}
                          >
                            {piece && (
                              <span className={piece.color === 'w' ? 'text-white drop-shadow-lg' : 'text-slate-900 drop-shadow-md'}>
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
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`p-3 rounded-lg text-center font-semibold mb-4 ${
                      feedback.startsWith('✓') ? 'bg-green-900/60 text-green-300' : 'bg-amber-900/60 text-amber-300'
                    }`}
                  >
                    {feedback}
                  </motion.div>
                )}

                {/* Hint */}
                {showHint && moveCount < currentOpening.sampleMoves.length && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-blue-900/60 p-3 rounded-lg mb-4 text-center text-blue-300 font-semibold"
                  >
                    💡 Play: {currentOpening.sampleMoves[moveCount]}
                  </motion.div>
                )}

                {/* Controls */}
                <div className="flex gap-2">
                  <Button onClick={getHint} className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <Zap className="w-4 h-4 mr-2" />
                    Hint
                  </Button>
                  <Button onClick={resetGame} variant="outline" className="flex-1 border-slate-600">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reset
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Info Panel - Right */}
          <div className="lg:col-span-2 space-y-4">
            {/* Opening Info */}
            <Card className="bg-slate-800 border-slate-700 p-4">
              <h2 className="text-2xl font-bold text-amber-500 mb-2">{currentOpening.name}</h2>
              <p className="text-sm text-slate-300 mb-4">{currentOpening.description}</p>
              
              <div className="border-t border-slate-700 pt-3 mb-3">
                <div className="text-sm text-slate-300">
                  <strong>Progress:</strong> Move {moveCount} of {currentOpening.sampleMoves.length}
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                  <div
                    className="bg-amber-500 h-2 rounded-full transition-all"
                    style={{ width: `${(moveCount / currentOpening.sampleMoves.length) * 100}%` }}
                  />
                </div>
              </div>
            </Card>

            {/* Current Status */}
            <Card className="bg-slate-800 border-slate-700 p-4">
              <h3 className="font-bold text-amber-400 mb-3">📍 Current Status</h3>
              <div className="space-y-2 text-sm text-slate-300">
                <div>
                  <strong>Next Move:</strong> <span className="text-amber-300">{currentOpening.sampleMoves[moveCount] || 'Complete!'}</span>
                </div>
                <div>
                  <strong>Turn:</strong> {game?.turn() === 'w' ? '⚪ White (You)' : '⚫ Black (AI)'}
                </div>
                {moveCount >= currentOpening.sampleMoves.length && (
                  <div className="text-green-400 font-semibold">
                    ✓ Opening Complete! Master this opening in your games!
                  </div>
                )}
              </div>
            </Card>

            {/* Key Ideas */}
            <Card className="bg-slate-800 border-slate-700 p-4">
              <h3 className="font-bold text-amber-400 mb-3">💡 Key Ideas</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                {currentOpening.keyIdeas.slice(0, 3).map((idea, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-amber-500">•</span>
                    {idea}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Famous Masters */}
            <Card className="bg-slate-800 border-slate-700 p-4">
              <h3 className="font-bold text-amber-400 mb-3">🌟 Mastered By</h3>
              <div className="space-y-2 text-xs text-slate-300">
                {currentOpening.famousGMs.slice(0, 3).map((gm, i) => (
                  <div key={i}>
                    <div className="font-semibold text-amber-300">{gm.name}</div>
                    <div className="text-slate-400">{gm.century} • {gm.style}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
