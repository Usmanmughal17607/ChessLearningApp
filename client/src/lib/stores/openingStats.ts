import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface OpeningStats {
  openingId: string;
  timesPlayed: number;
  timesCompleted: number;
  perfectMoves: number;
  mistakesMade: number;
  lastPlayed: Date | null;
  averageMovesNeeded: number;
}

export interface UserAchievement {
  id: string;
  name: string;
  description: string;
  unlockedAt: Date | null;
  progress: number; // 0-100
}

interface OpeningStatsStore {
  stats: Map<string, OpeningStats>;
  achievements: Map<string, UserAchievement>;
  updateStats: (openingId: string, completed: boolean, mistakes: number) => void;
  getStats: (openingId: string) => OpeningStats | undefined;
  unlockAchievement: (achievementId: string) => void;
  getAchievements: () => UserAchievement[];
}

const defaultStats = (id: string): OpeningStats => ({
  openingId: id,
  timesPlayed: 0,
  timesCompleted: 0,
  perfectMoves: 0,
  mistakesMade: 0,
  lastPlayed: null,
  averageMovesNeeded: 0,
});

const defaultAchievements = (): Map<string, UserAchievement> => new Map([
  ['first-opening', { id: 'first-opening', name: 'First Steps', description: 'Complete your first opening', unlockedAt: null, progress: 0 }],
  ['five-openings', { id: 'five-openings', name: 'Opening Scholar', description: 'Master 5 different openings', unlockedAt: null, progress: 0 }],
  ['perfect-game', { id: 'perfect-game', name: 'Flawless', description: 'Complete an opening without mistakes', unlockedAt: null, progress: 0 }],
  ['quiz-master', { id: 'quiz-master', name: 'Quiz Master', description: 'Score 100% on opening quiz 5 times', unlockedAt: null, progress: 0 }],
  ['blitz-expert', { id: 'blitz-expert', name: 'Blitz Expert', description: 'Complete 10 openings in blitz mode', unlockedAt: null, progress: 0 }],
]);

export const useOpeningStats = create<OpeningStatsStore>()(
  persist(
    (set, get) => ({
      stats: new Map(),
      achievements: defaultAchievements(),
      
      updateStats: (openingId: string, completed: boolean, mistakes: number) => {
        set((state) => {
          const newStats = new Map(state.stats);
          const current = newStats.get(openingId) || defaultStats(openingId);
          
          current.timesPlayed++;
          current.mistakesMade += mistakes;
          current.lastPlayed = new Date();
          
          if (completed) {
            current.timesCompleted++;
            current.perfectMoves = mistakes === 0 ? current.perfectMoves + 1 : current.perfectMoves;
            current.averageMovesNeeded = current.timesCompleted > 0 ? 
              (current.averageMovesNeeded * (current.timesCompleted - 1) + mistakes) / current.timesCompleted : mistakes;
          }
          
          newStats.set(openingId, current);
          return { stats: newStats };
        });
      },
      
      getStats: (openingId: string) => {
        const stats = get().stats.get(openingId);
        return stats || defaultStats(openingId);
      },
      
      unlockAchievement: (achievementId: string) => {
        set((state) => {
          const newAchievements = new Map(state.achievements);
          const achievement = newAchievements.get(achievementId);
          if (achievement && !achievement.unlockedAt) {
            achievement.unlockedAt = new Date();
          }
          return { achievements: newAchievements };
        });
      },
      
      getAchievements: () => {
        return Array.from(get().achievements.values());
      }
    }),
    { name: 'opening-stats-storage' }
  )
);
