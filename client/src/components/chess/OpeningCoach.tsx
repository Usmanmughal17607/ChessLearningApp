import React, { useState, useEffect } from 'react';
import { openingsLibrary, OpeningInfo } from '@/data/openingsLibrary';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft, Zap, RotateCcw, Crown, Flame, Play, Pause, SkipForward, BarChart3, Brain, Trophy, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Chess, Move, Square } from 'chess.js';
import { useOpeningStats } from '@/lib/stores/openingStats';

interface OpeningCoachProps {
  onBack: () => void;
}

type GameMode = 'select' | 'play' | 'autoplay' | 'blitz' | 'quiz' | 'stats' | 'achievements';
type DifficultyFilter = 'All' | 'Beginner' | 'Intermediate' | 'Advanced';

export function OpeningCoach({ onBack }: OpeningCoachProps) {
  const [selectedOpeningId, setSelectedOpeningId] = useState<string | null>(null);
  const [game, setGame] = useState<Chess | null>(null);
  const [moveCount, setMoveCount] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState<string>('');
  const [selectedSquare, setSelectedSquare] = useState<Square | null>(null);
  const [legalMoves, setLegalMoves] = useState<Square[]>([]);
  const [gameMode, setGameMode] = useState<GameMode>('select');
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>('All');
  const [autoPlaySpeed, setAutoPlaySpeed] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [blitzTime, setBlitzTime] = useState(30);
  const [blitzTimeLeft, setBlitzTimeLeft] = useState(30);
  const [quizMode, setQuizMode] = useState(false);
  const [quizMoveOptions, setQuizMoveOptions] = useState<string[]>([]);
  const [selectedVariation, setSelectedVariation] = useState(0);
  const [mistakesCount, setMistakesCount] = useState(0);
  const { updateStats, getStats, unlockAchievement, getAchievements } = useOpeningStats();

  const currentOpening = selectedOpeningId
    ? openingsLibrary.find(o => o.id === selectedOpeningId)
    : null;

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

  useEffect(() => {
    if (!game || !currentOpening) return;
    
    const turn = game.turn();
    const expectedMoveIndex = moveCount;
    
    if (turn === 'b' && expectedMoveIndex < currentOpening.sampleMoves.length) {
      const aiMoveStr = currentOpening.sampleMoves[expectedMoveIndex];
      
      setTimeout(() => {
        try {
          const move = game.move(aiMoveStr);
          if (move) {
            setGame(new Chess(game.fen()));
            setMoveCount(expectedMoveIndex + 1);
            setFeedback('🤖 AI: ' + aiMoveStr);
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
            setFeedback('✨ Perfect!');
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

  const playMoveForUser = () => {
    if (!game || !currentOpening) return;
    if (game.turn() !== 'w' || moveCount >= currentOpening.sampleMoves.length) return;
    
    const nextMove = currentOpening.sampleMoves[moveCount];
    try {
      const move = game.move(nextMove);
      if (move) {
        setFeedback('🤖 Playing: ' + nextMove);
        setGame(new Chess(game.fen()));
        setMoveCount(moveCount + 1);
        setShowHint(false);
        setSelectedSquare(null);
        setLegalMoves([]);
      }
    } catch (e) {
      console.error('Play move error:', e);
    }
  };

  const handleGameComplete = () => {
    if (currentOpening) {
      updateStats(currentOpening.id, true, mistakesCount);
      if (mistakesCount === 0) {
        unlockAchievement('perfect-game');
      }
      const stats = getStats(currentOpening.id);
      if (stats && stats.timesCompleted === 1) {
        unlockAchievement('first-opening');
      }
    }
  };

  const generateQuizOptions = () => {
    if (!currentOpening || game?.turn() !== 'w') return;
    const moves = game.moves({ verbose: true });
    const correctMove = currentOpening.sampleMoves[moveCount];
    const options = [correctMove];
    while (options.length < 4 && moves.length > 0) {
      const random = moves[Math.floor(Math.random() * moves.length)];
      if (!options.includes(random.san)) {
        options.push(random.san);
      }
    }
    setQuizMoveOptions(options.sort(() => Math.random() - 0.5));
  };

  const handleQuizAnswer = (move: string) => {
    if (!game || !currentOpening) return;
    const expectedMove = currentOpening.sampleMoves[moveCount];
    if (move === expectedMove) {
      setFeedback('✨ Correct!');
      try {
        game.move(move);
        setGame(new Chess(game.fen()));
        setMoveCount(moveCount + 1);
        generateQuizOptions();
      } catch (e) {
        console.error('Quiz move error:', e);
      }
    } else {
      setMistakesCount(mistakesCount + 1);
      setFeedback('❌ Wrong! Try: ' + expectedMove);
    }
  };

  useEffect(() => {
    if (quizMode && gameMode === 'quiz') {
      generateQuizOptions();
    }
  }, [quizMode, gameMode, moveCount]);

  useEffect(() => {
    if (gameMode !== 'blitz') return;
    if (!isAutoPlaying && blitzTimeLeft <= 0) return;
    
    const timer = setInterval(() => {
      setBlitzTimeLeft(prev => {
        if (prev <= 1) {
          setIsAutoPlaying(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [gameMode, isAutoPlaying, blitzTimeLeft]);

  useEffect(() => {
    if (!isAutoPlaying || !currentOpening || gameMode !== 'autoplay') return;
    
    const timer = setTimeout(() => {
      if (moveCount < currentOpening.sampleMoves.length) {
        const nextMove = currentOpening.sampleMoves[moveCount];
        try {
          game?.move(nextMove);
          setGame(new Chess(game!.fen()));
          setMoveCount(moveCount + 1);
        } catch (e) {
          console.error('Auto play error:', e);
        }
      } else {
        setIsAutoPlaying(false);
        handleGameComplete();
      }
    }, 3000 / autoPlaySpeed);
    
    return () => clearTimeout(timer);
  }, [isAutoPlaying, moveCount, game, currentOpening, gameMode, autoPlaySpeed]);

  const filteredOpenings = openingsLibrary.filter(o => 
    difficultyFilter === 'All' || o.difficulty === difficultyFilter
  );

  const getOpeningFamily = (opening: OpeningInfo) => {
    const familyMap: Record<string, string> = {
      'italian-game': 'Open Games',
      'ruy-lopez': 'Open Games',
      'sicilian-defense': 'Semi-Open Games',
      'french-defense': 'Semi-Open Games',
      'caro-kann': 'Semi-Open Games',
    };
    return familyMap[opening.id] || 'Other';
  };

  // Achievements Screen
  if (gameMode === 'achievements') {
    const achievements = getAchievements();
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white p-4 sm:p-6">
        <div className="w-full max-w-4xl mx-auto">
          <button
            onClick={() => setGameMode('select')}
            className="flex items-center gap-2 mb-6 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors text-slate-300"
          >
            <ChevronLeft className="w-5 h-5" />
            Back
          </button>
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-amber-400 mb-2 flex items-center justify-center gap-2">
              <Trophy className="w-10 h-10" />
              Achievements
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((ach) => (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg border ${ach.unlockedAt ? 'bg-amber-600/20 border-amber-500' : 'bg-slate-800 border-slate-700'}`}
              >
                <div className="flex items-start gap-3">
                  <Trophy className={`w-6 h-6 ${ach.unlockedAt ? 'text-amber-400' : 'text-slate-500'}`} />
                  <div className="flex-1">
                    <h3 className={`font-bold ${ach.unlockedAt ? 'text-amber-400' : 'text-slate-400'}`}>{ach.name}</h3>
                    <p className="text-xs text-slate-400">{ach.description}</p>
                    {ach.unlockedAt && <p className="text-xs text-amber-300 mt-1">✓ Unlocked {new Date(ach.unlockedAt).toLocaleDateString()}</p>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Statistics Screen
  if (gameMode === 'stats') {
    const topStats = filteredOpenings.map(o => ({ opening: o, stats: getStats(o.id) })).sort((a, b) => b.stats.timesCompleted - a.stats.timesCompleted);
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white p-4 sm:p-6">
        <div className="w-full max-w-4xl mx-auto">
          <button
            onClick={() => setGameMode('select')}
            className="flex items-center gap-2 mb-6 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors text-slate-300"
          >
            <ChevronLeft className="w-5 h-5" />
            Back
          </button>
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-amber-400 mb-2 flex items-center justify-center gap-2">
              <BarChart3 className="w-10 h-10" />
              Your Statistics
            </h1>
          </div>
          <div className="space-y-3">
            {topStats.map(({ opening, stats }) => (
              <motion.div
                key={opening.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-slate-800 border border-slate-700 p-4 rounded-lg"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-amber-400">{opening.name}</h3>
                    <p className="text-xs text-slate-400">Completed: {stats.timesCompleted} • Played: {stats.timesPlayed} • Perfect: {stats.perfectMoves}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-400">{stats.timesCompleted > 0 ? Math.round((stats.timesCompleted / stats.timesPlayed) * 100) : 0}%</div>
                    <p className="text-xs text-slate-400">Success Rate</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Selection Screen
  if (gameMode === 'select' && !selectedOpeningId) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
        <div className="fixed inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600 rounded-full blur-3xl animate-pulse" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8"
        >
          <button
            onClick={onBack}
            className="flex items-center gap-2 mb-8 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors text-slate-300 hover:text-white"
          >
            <ChevronLeft className="w-5 h-5" />
            Back
          </button>

          <div className="mb-12 text-center">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="flex items-center justify-center gap-2 sm:gap-3 mb-4 flex-wrap"
            >
              <Crown className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400 bg-clip-text text-transparent">
                Opening Coach
              </h1>
            </motion.div>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mb-6">
              Master chess openings by playing against AI
            </p>
            <div className="flex gap-2 justify-center flex-wrap">
              <Button onClick={() => setGameMode('stats')} className="bg-gradient-to-r from-blue-600 to-blue-700 text-sm h-9">
                <BarChart3 className="w-4 h-4 mr-1" /> Stats
              </Button>
              <Button onClick={() => setGameMode('achievements')} className="bg-gradient-to-r from-purple-600 to-purple-700 text-sm h-9">
                <Trophy className="w-4 h-4 mr-1" /> Achievements
              </Button>
            </div>
            <div className="flex gap-2 justify-center flex-wrap mt-4">
              {['All', 'Beginner', 'Intermediate', 'Advanced'].map((diff) => (
                <Button
                  key={diff}
                  onClick={() => setDifficultyFilter(diff as DifficultyFilter)}
                  variant={difficultyFilter === diff ? 'default' : 'outline'}
                  className="text-xs h-8"
                >
                  {diff}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredOpenings.map((opening, idx) => (
              <motion.button
                key={opening.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => { setSelectedOpeningId(opening.id); setGameMode('play'); setMistakesCount(0); }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-4 sm:p-6 rounded-xl hover:from-slate-700 hover:to-slate-800 transition-all h-full">
                  <h3 className="font-bold text-base sm:text-lg text-amber-400 mb-2 group-hover:text-amber-300 transition">
                    {opening.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mb-4">{opening.firstMoves}</p>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="bg-slate-700 px-2 sm:px-3 py-1 rounded-full">{opening.difficulty}</span>
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

  // Game Screen
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white p-3 sm:p-4 md:p-6">
      <div className="w-full max-w-7xl mx-auto">
        <button
          onClick={() => setSelectedOpeningId(null)}
          className="flex items-center gap-2 mb-4 sm:mb-6 px-3 sm:px-4 py-2 rounded-lg hover:bg-white/10 transition-colors text-slate-300 hover:text-white text-sm sm:text-base"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          Back
        </button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          {/* Center - Chessboard (Full Width) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-4 sm:p-6 flex justify-center"
          >
              {/* Board */}
              <div className="bg-gradient-to-br from-slate-900 to-black p-2 sm:p-3 rounded-lg mb-6 shadow-2xl overflow-hidden">
                <div className="grid gap-0 bg-slate-950 rounded-md overflow-hidden" style={{ gridTemplateColumns: 'repeat(8, 1fr)', maxWidth: 'fit-content' }}>
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
                        <button
                          key={square}
                          onClick={() => handleSquareClick(square)}
                          className={`
                            w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl font-bold cursor-pointer transition-all select-none
                            ${isSelected ? 'bg-yellow-400 shadow-lg shadow-yellow-400/50' : 
                              isLegal ? 'bg-green-500/70' : 
                              isLight ? 'bg-amber-100' : 'bg-amber-700'}
                          `}
                        >
                          {isLegal && !piece && (
                            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-600 rounded-full" />
                          )}
                          {piece && (
                            <span className={piece.color === 'w' ? 'text-white drop-shadow-lg' : 'text-slate-900 drop-shadow-md'}>
                              {PIECE_SYMBOLS[piece.type.toUpperCase()]}
                            </span>
                          )}
                        </button>
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
                  className={`p-3 rounded-lg text-center font-semibold mb-3 text-sm ${
                    feedback.includes('✨')
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
                  className="bg-gradient-to-r from-blue-600/30 to-cyan-600/30 border border-blue-500/30 p-3 rounded-lg mb-3 text-center"
                >
                  <div className="text-xs text-blue-200 font-semibold">💡 Next Move</div>
                  <div className="text-lg sm:text-xl font-bold text-blue-300 mt-1">{currentOpening.sampleMoves[moveCount]}</div>
                </motion.div>
              )}

              {/* Completion */}
              {moveCount >= currentOpening.sampleMoves.length && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-r from-emerald-600/30 to-teal-600/30 border border-emerald-500/30 p-3 rounded-lg mb-3 text-center"
                >
                  <div className="text-sm text-emerald-300 font-bold">🎉 Opening Mastered!</div>
                </motion.div>
              )}

              {/* Controls */}
              <div className="flex gap-2">
                <Button 
                  onClick={getHint}
                  disabled={moveCount >= currentOpening.sampleMoves.length || game?.turn() !== 'w'}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 text-sm h-9"
                >
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  <span className="hidden sm:inline">Hint</span>
                  <span className="sm:hidden">Hint</span>
                </Button>
                <Button 
                  onClick={playMoveForUser}
                  disabled={moveCount >= currentOpening.sampleMoves.length || game?.turn() !== 'w'}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 disabled:opacity-50 text-sm h-9"
                >
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  <span className="hidden sm:inline">Play Move</span>
                  <span className="sm:hidden">Play</span>
                </Button>
                <Button 
                  onClick={resetGame}
                  variant="outline" 
                  className="flex-1 border-slate-600 hover:bg-white/10 text-sm h-9"
                >
                  <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  <span className="hidden sm:inline">Reset</span>
                </Button>
              </div>
          </motion.div>

          {/* Info Panels Below Board */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {/* Title Card */}
            <div className="bg-gradient-to-br from-amber-600/20 to-orange-600/20 border border-amber-500/30 rounded-xl p-4">
              <h2 className="text-2xl font-bold text-amber-400 mb-2">{currentOpening.name}</h2>
              <p className="text-xs text-slate-300">{currentOpening.description}</p>
            </div>

            {/* Progress */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-4">
              <div className="text-xs text-slate-300 font-semibold mb-2">Progress</div>
              <div className="text-3xl font-bold text-amber-400 mb-2">
                {moveCount}/{currentOpening.sampleMoves.length}
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-amber-500 to-orange-500 h-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(moveCount / currentOpening.sampleMoves.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
            {/* Key Ideas */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-4">
              <h3 className="font-bold text-amber-400 mb-3 flex items-center gap-2 text-sm">
                <Flame className="w-4 h-4" />
                Key Ideas
              </h3>
              <ul className="space-y-2">
                {currentOpening.keyIdeas.slice(0, 2).map((idea, i) => (
                  <li key={i} className="flex gap-2 text-xs text-slate-300">
                    <span className="text-amber-500">•</span>
                    <span>{idea}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Masters */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-4">
              <h3 className="font-bold text-amber-400 mb-3 flex items-center gap-2 text-sm">
                <Crown className="w-4 h-4" />
                Masters
              </h3>
              <div className="space-y-2">
                {currentOpening.famousGMs.slice(0, 2).map((gm, i) => (
                  <div key={i} className="text-xs">
                    <div className="text-amber-300 font-semibold">{gm.name}</div>
                    <div className="text-slate-400">{gm.century}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-4">
              <h3 className="font-bold text-amber-400 mb-3 text-sm">Game Status</h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-300">Turn:</span>
                  <span className="font-semibold">{game?.turn() === 'w' ? '⚪ You' : '🤖 AI'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Next:</span>
                  <span className="text-amber-400 font-bold font-mono">{currentOpening.sampleMoves[moveCount] || '—'}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Move History - Full Width Below */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-4">
            <h3 className="font-bold text-amber-400 mb-3">Move Sequence</h3>
            <div className="bg-slate-900/50 rounded-lg p-3 max-h-40 overflow-y-auto">
              <div className="space-y-1 text-sm font-mono">
                {currentOpening.sampleMoves.map((move, idx) => (
                  <span key={idx} className={`inline-block mr-3 ${
                    idx === moveCount ? 'bg-amber-600/60 text-amber-200 font-bold px-2 py-1 rounded' : 
                    idx < moveCount ? 'text-slate-300' : 
                    'text-slate-500'
                  }`}>
                    {idx % 2 === 0 && <span className="text-slate-500">{Math.floor(idx / 2) + 1}. </span>}
                    {move}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
