import React, { useState } from 'react';
import { openingsLibrary, getOpeningsByDifficulty, getOpeningsByCentury } from '@/data/openingsLibrary';
import { Button } from '@/components/ui/button';
import { ChevronLeft, BookOpen, Users2, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

interface OpeningLearningProps {
  onBack: () => void;
}

export function OpeningLearning({ onBack }: OpeningLearningProps) {
  const [selectedOpening, setSelectedOpening] = useState<string | null>(null);
  const [filterBy, setFilterBy] = useState<'all' | 'difficulty' | 'century'>('all');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const currentOpening = selectedOpening
    ? openingsLibrary.find(o => o.id === selectedOpening)
    : null;

  let displayedOpenings = openingsLibrary;
  if (filterBy === 'difficulty' && selectedFilter !== 'all') {
    displayedOpenings = getOpeningsByDifficulty(selectedFilter);
  } else if (filterBy === 'century' && selectedFilter !== 'all') {
    displayedOpenings = getOpeningsByCentury(selectedFilter);
  }

  const difficulties = ['Beginner', 'Intermediate', 'Advanced'];
  const centuries = ['16th', '17th', '18th', '19th', '20th', '21st'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white p-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto mb-8"
      >
        <button
          onClick={onBack}
          className="flex items-center gap-2 mb-6 px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Menu
        </button>

        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-10 h-10 text-amber-500" />
          <h1 className="text-4xl font-bold">Opening Library</h1>
        </div>

        <p className="text-slate-300 text-lg mb-6">
          Learn all major chess openings from the 16th century to today, discover how the world's greatest masters played them, and understand the ideas behind each opening.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sidebar - Openings List */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1 space-y-4"
        >
          {/* Filters */}
          <div className="bg-slate-800 rounded-lg p-4 space-y-3">
            <h3 className="font-semibold text-amber-500 flex items-center gap-2">
              <Globe className="w-4 h-4" />
              Filter Openings
            </h3>

            <div>
              <label className="block text-sm text-slate-300 mb-2">By Difficulty:</label>
              <select
                value={filterBy === 'difficulty' ? selectedFilter : 'all'}
                onChange={(e) => {
                  if (e.target.value === 'all') {
                    setFilterBy('all');
                    setSelectedFilter('all');
                  } else {
                    setFilterBy('difficulty');
                    setSelectedFilter(e.target.value);
                  }
                }}
                className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white"
              >
                <option value="all">All Levels</option>
                {difficulties.map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-2">By Century:</label>
              <select
                value={filterBy === 'century' ? selectedFilter : 'all'}
                onChange={(e) => {
                  if (e.target.value === 'all') {
                    setFilterBy('all');
                    setSelectedFilter('all');
                  } else {
                    setFilterBy('century');
                    setSelectedFilter(e.target.value);
                  }
                }}
                className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white"
              >
                <option value="all">All Centuries</option>
                {centuries.map(c => (
                  <option key={c} value={c}>{c} Century</option>
                ))}
              </select>
            </div>
          </div>

          {/* Openings List */}
          <div className="bg-slate-800 rounded-lg p-4 max-h-[600px] overflow-y-auto space-y-2">
            <h3 className="font-semibold text-amber-500 mb-3">
              {displayedOpenings.length} Opening{displayedOpenings.length !== 1 ? 's' : ''}
            </h3>
            {displayedOpenings.map((opening) => (
              <motion.button
                key={opening.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedOpening(opening.id)}
                className={`w-full text-left p-3 rounded-lg transition-colors ${
                  selectedOpening === opening.id
                    ? 'bg-amber-600 text-white'
                    : 'bg-slate-700 hover:bg-slate-600 text-slate-100'
                }`}
              >
                <div className="font-semibold">{opening.name}</div>
                <div className="text-sm text-slate-300">{opening.ecoCode}</div>
                <div className="text-xs text-slate-400 mt-1">
                  {opening.difficulty}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2"
        >
          {currentOpening ? (
            <div className="bg-slate-800 rounded-lg p-6 space-y-6">
              {/* Title */}
              <div>
                <h2 className="text-3xl font-bold text-amber-500 mb-2">
                  {currentOpening.name}
                </h2>
                <div className="flex gap-4 text-sm text-slate-300">
                  <span>ECO: {currentOpening.ecoCode}</span>
                  <span>Level: {currentOpening.difficulty}</span>
                </div>
              </div>

              {/* Description */}
              <div className="border-t border-slate-700 pt-4">
                <h3 className="font-semibold text-amber-400 mb-2">Description</h3>
                <p className="text-slate-300">{currentOpening.description}</p>
              </div>

              {/* First Moves */}
              <div className="border-t border-slate-700 pt-4">
                <h3 className="font-semibold text-amber-400 mb-2">Starting Moves</h3>
                <div className="bg-slate-700 rounded p-3 font-mono text-amber-300">
                  {currentOpening.firstMoves}
                </div>
              </div>

              {/* Key Ideas */}
              <div className="border-t border-slate-700 pt-4">
                <h3 className="font-semibold text-amber-400 mb-3">Key Ideas</h3>
                <ul className="space-y-2">
                  {currentOpening.keyIdeas.map((idea, i) => (
                    <li key={i} className="flex gap-3 text-slate-300">
                      <span className="text-amber-500 font-bold">•</span>
                      {idea}
                    </li>
                  ))}
                </ul>
              </div>

              {/* History */}
              <div className="border-t border-slate-700 pt-4">
                <h3 className="font-semibold text-amber-400 mb-2">History</h3>
                <p className="text-slate-300">{currentOpening.history}</p>
              </div>

              {/* Famous GMs */}
              <div className="border-t border-slate-700 pt-4">
                <h3 className="font-semibold text-amber-400 mb-3 flex items-center gap-2">
                  <Users2 className="w-4 h-4" />
                  Famous Masters Who Played This
                </h3>
                <div className="space-y-2">
                  {currentOpening.famousGMs.map((gm, i) => (
                    <div key={i} className="bg-slate-700 rounded p-3">
                      <div className="font-semibold text-amber-300">{gm.name}</div>
                      <div className="text-sm text-slate-300">
                        {gm.century} • {gm.style}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Centuries */}
              <div className="border-t border-slate-700 pt-4">
                <h3 className="font-semibold text-amber-400 mb-2">Popular In</h3>
                <div className="flex flex-wrap gap-2">
                  {currentOpening.centuries.map((century) => (
                    <span
                      key={century}
                      className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {century} Century
                    </span>
                  ))}
                </div>
              </div>

              {/* Sample Moves */}
              <div className="border-t border-slate-700 pt-4">
                <h3 className="font-semibold text-amber-400 mb-2">Sample Opening Moves</h3>
                <div className="bg-slate-700 rounded p-3">
                  <div className="font-mono text-sm">
                    {currentOpening.sampleMoves.map((move, i) => (
                      <span key={i}>
                        {i % 2 === 0 && <span className="text-slate-400">{Math.floor(i / 2) + 1}. </span>}
                        <span className="text-amber-300">{move}</span>
                        {i < currentOpening.sampleMoves.length - 1 && ' '}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-slate-800 rounded-lg p-6 flex items-center justify-center h-96">
              <div className="text-center">
                <BookOpen className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                <p className="text-xl text-slate-400">
                  Select an opening to learn about it
                </p>
                <p className="text-sm text-slate-500 mt-2">
                  Discover the history, ideas, and famous masters behind each opening
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
