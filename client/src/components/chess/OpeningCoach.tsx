import React, { useState, useEffect } from 'react';
import { openingsLibrary, OpeningInfo } from '@/data/openingsLibrary';
import { ChessBoard } from './ChessBoard';
import { GameInfo } from './GameInfo';
import { useChess } from '@/lib/stores/useChess';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, RotateCcw, BookOpen, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Chess } from 'chess.js';

interface OpeningCoachProps {
  onBack: () => void;
}

export function OpeningCoach({ onBack }: OpeningCoachProps) {
  const { game, makeMove, resetGame } = useChess();
  const [selectedOpeningId, setSelectedOpeningId] = useState<string | null>(null);
  const [currentMove, setCurrentMove] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState<string>('');
  const [coachGame, setCoachGame] = useState<Chess | null>(null);

  const currentOpening = selectedOpeningId
    ? openingsLibrary.find(o => o.id === selectedOpeningId)
    : null;

  // Initialize coaching game when opening is selected
  useEffect(() => {
    if (currentOpening) {
      const newGame = new Chess();
      setCoachGame(newGame);
      setCurrentMove(0);
      setShowHint(false);
      setFeedback('');
    }
  }, [currentOpening]);

  // Play moves from opening
  useEffect(() => {
    if (!coachGame || !currentOpening) return;

    // Reset and replay all moves up to currentMove
    const newGame = new Chess();
    for (let i = 0; i < currentMove; i++) {
      newGame.move(currentOpening.sampleMoves[i]);
    }
    setCoachGame(newGame);
  }, [currentMove]);

  const handleMoveClick = (moveIndex: number) => {
    if (!currentOpening) return;

    // Check if it's the correct move
    const expectedMove = currentOpening.sampleMoves[currentMove];
    
    if (moveIndex === currentMove) {
      // User clicked the correct move
      setFeedback('✓ Correct! Great move!');
      setShowHint(false);
      setTimeout(() => {
        if (currentMove < currentOpening.sampleMoves.length - 1) {
          setCurrentMove(currentMove + 1);
          setFeedback('');
        }
      }, 800);
    }
  };

  const nextMove = () => {
    if (!currentOpening) return;
    if (currentMove < currentOpening.sampleMoves.length - 1) {
      setCurrentMove(currentMove + 1);
      setShowHint(false);
      setFeedback('');
    }
  };

  const prevMove = () => {
    if (currentMove > 0) {
      setCurrentMove(currentMove - 1);
      setShowHint(false);
      setFeedback('');
    }
  };

  const resetOpening = () => {
    setCurrentMove(0);
    setShowHint(false);
    setFeedback('');
  };

  const getNextMoveInfo = () => {
    if (!currentOpening || currentMove >= currentOpening.sampleMoves.length) {
      return null;
    }
    const nextMoveStr = currentOpening.sampleMoves[currentMove];
    const turn = currentMove % 2 === 0 ? 'White' : 'Black';
    return { move: nextMoveStr, turn };
  };

  const nextMoveInfo = getNextMoveInfo();
  const keyMoment = currentOpening?.keyMoments?.find((k: any) => k.moveIndex === currentMove);

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

          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-10 h-10 text-amber-500" />
            <h1 className="text-4xl font-bold">Opening Coach</h1>
          </div>

          <p className="text-slate-300 text-lg mb-8">
            Select an opening to learn interactively. Play through the moves on the board and receive AI guidance!
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
                  Level: {opening.difficulty}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white p-4">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => {
            setSelectedOpeningId(null);
            onBack();
          }}
          className="flex items-center gap-2 mb-6 px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Library
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Opening Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-4"
          >
            <Card className="bg-slate-800 border-slate-700 p-4 space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-amber-500 mb-2">
                  {currentOpening.name}
                </h2>
                <p className="text-sm text-slate-300">{currentOpening.description}</p>
              </div>

              <div className="border-t border-slate-700 pt-4">
                <h3 className="font-semibold text-amber-400 mb-2">Current Lesson</h3>
                <div className="bg-slate-700 rounded p-3 text-center">
                  <div className="text-sm text-slate-300 mb-1">
                    Move {currentMove + 1} of {currentOpening.sampleMoves.length}
                  </div>
                  <div className="text-2xl font-bold text-amber-300">
                    {currentOpening.sampleMoves[currentMove] || 'Complete!'}
                  </div>
                  {nextMoveInfo && (
                    <div className="text-xs text-slate-400 mt-2">
                      {nextMoveInfo.turn} to move
                    </div>
                  )}
                </div>
              </div>

              {keyMoment && (
                <div className="border-t border-slate-700 pt-4 bg-amber-900/30 p-3 rounded">
                  <div className="font-semibold text-amber-300 text-sm mb-1">
                    💡 Key Moment
                  </div>
                  <p className="text-sm text-slate-300">{keyMoment.comment}</p>
                </div>
              )}

              <div className="border-t border-slate-700 pt-4">
                <h3 className="font-semibold text-amber-400 mb-2">Key Ideas</h3>
                <ul className="space-y-1 text-sm">
                  {currentOpening.keyIdeas.slice(0, 3).map((idea, i) => (
                    <li key={i} className="text-slate-300 flex gap-2">
                      <span className="text-amber-500">•</span>
                      {idea}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-slate-700 pt-4">
                <h3 className="font-semibold text-amber-400 mb-2">Famous Masters</h3>
                {currentOpening.famousGMs.slice(0, 3).map((gm, i) => (
                  <div key={i} className="text-sm text-slate-300 mb-1">
                    <span className="text-amber-400">{gm.name}</span> ({gm.century})
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Center: Chessboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-1 flex flex-col items-center gap-4"
          >
            <Card className="bg-slate-800 border-slate-700 p-4 w-full">
              <div className="w-full aspect-square mb-4">
                <ChessBoard />
              </div>

              {feedback && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`p-3 rounded-lg text-center font-semibold mb-4 ${
                    feedback.startsWith('✓')
                      ? 'bg-green-900/50 text-green-300'
                      : 'bg-amber-900/50 text-amber-300'
                  }`}
                >
                  {feedback}
                </motion.div>
              )}

              {showHint && nextMoveInfo && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-blue-900/50 p-3 rounded-lg mb-4 text-center"
                >
                  <div className="text-sm text-blue-300 font-semibold">
                    💡 Hint: Play {nextMoveInfo.move}
                  </div>
                  <p className="text-xs text-blue-400 mt-1">
                    This move follows opening principle
                  </p>
                </motion.div>
              )}

              <div className="space-y-2">
                <Button
                  onClick={() => setShowHint(!showHint)}
                  disabled={currentMove >= currentOpening.sampleMoves.length}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  {showHint ? 'Hide Hint' : 'Get Hint'}
                </Button>

                <div className="flex gap-2">
                  <Button
                    onClick={prevMove}
                    disabled={currentMove === 0}
                    variant="outline"
                    className="flex-1 border-slate-600"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>

                  <Button
                    onClick={resetOpening}
                    variant="outline"
                    className="flex-1 border-slate-600"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </Button>

                  <Button
                    onClick={nextMove}
                    disabled={currentMove >= currentOpening.sampleMoves.length - 1}
                    variant="outline"
                    className="flex-1 border-slate-600"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right: Move History & AI Guidance */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-4"
          >
            <Card className="bg-slate-800 border-slate-700 p-4">
              <h3 className="font-semibold text-amber-400 mb-3">Move Sequence</h3>
              <div className="bg-slate-700 rounded p-3 max-h-96 overflow-y-auto">
                <div className="space-y-1">
                  {currentOpening.sampleMoves.map((move, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setCurrentMove(idx);
                        setShowHint(false);
                        setFeedback('');
                      }}
                      className={`p-2 rounded cursor-pointer transition-colors ${
                        idx === currentMove
                          ? 'bg-amber-600 text-white font-semibold'
                          : idx < currentMove
                          ? 'bg-slate-600 text-slate-200'
                          : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
                      }`}
                    >
                      <span className="text-xs text-slate-400">
                        {Math.floor(idx / 2) + 1}.{idx % 2 === 0 ? '' : '..'}
                      </span>{' '}
                      <span>{move}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="bg-slate-800 border-slate-700 p-4">
              <h3 className="font-semibold text-amber-400 mb-3">🤖 AI Coach Analysis</h3>
              <div className="bg-slate-700 rounded p-3 text-sm text-slate-300 space-y-2">
                {currentMove === 0 && (
                  <p>Start by playing the opening moves. I'll guide you through the key ideas!</p>
                )}
                {currentMove > 0 && currentMove < currentOpening.sampleMoves.length && (
                  <>
                    <p>
                      <strong>Next Move:</strong> {currentOpening.sampleMoves[currentMove]}
                    </p>
                    <p className="text-xs text-slate-400">
                      Follow the opening principles to build a strong position.
                    </p>
                  </>
                )}
                {currentMove >= currentOpening.sampleMoves.length && (
                  <p className="text-green-400">
                    ✓ Excellent! You've completed the opening. Now you can apply these ideas to your own games!
                  </p>
                )}
              </div>
            </Card>

            <Card className="bg-slate-800 border-slate-700 p-4">
              <h3 className="font-semibold text-amber-400 mb-3">Progress</h3>
              <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                <div
                  className="bg-amber-500 h-2 rounded-full transition-all"
                  style={{
                    width: `${(currentMove / currentOpening.sampleMoves.length) * 100}%`
                  }}
                />
              </div>
              <p className="text-xs text-slate-400">
                {currentMove} of {currentOpening.sampleMoves.length} moves completed
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
