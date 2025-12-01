import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Trophy, Zap, Target, Crown } from "lucide-react";

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  unlocked: boolean;
}

interface AchievementsProps {
  stats: {
    gamesPlayed: number;
    gamesWon: number;
    gamesLost: number;
    legendaryGamesViewed: number;
  };
}

export function Achievements({ stats }: AchievementsProps) {
  const achievements: Achievement[] = [
    {
      id: "first-win",
      name: "First Victory",
      description: "Win your first game",
      icon: <Trophy className="w-6 h-6" />,
      unlocked: stats.gamesWon >= 1
    },
    {
      id: "five-wins",
      name: "Rising Star",
      description: "Win 5 games",
      icon: <Zap className="w-6 h-6" />,
      unlocked: stats.gamesWon >= 5
    },
    {
      id: "ten-wins",
      name: "Chess Master",
      description: "Win 10 games",
      icon: <Crown className="w-6 h-6" />,
      unlocked: stats.gamesWon >= 10
    },
    {
      id: "legendary-scholar",
      name: "Legendary Scholar",
      description: "View 5 legendary games",
      icon: <Target className="w-6 h-6" />,
      unlocked: stats.legendaryGamesViewed >= 5
    }
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        {achievements.map((achievement, i) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card
              className={`p-4 text-center transition ${
                achievement.unlocked
                  ? "bg-gradient-to-br from-yellow-900 to-yellow-700 border-yellow-500"
                  : "bg-gray-700/50 border-gray-600 opacity-50"
              }`}
            >
              <div className={`flex justify-center mb-2 ${achievement.unlocked ? "text-yellow-300" : "text-gray-500"}`}>
                {achievement.icon}
              </div>
              <h3 className="text-sm font-bold text-white">{achievement.name}</h3>
              <p className="text-xs text-gray-300 mt-1">{achievement.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
