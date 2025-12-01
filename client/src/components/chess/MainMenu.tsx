import { useChess } from "@/lib/stores/useChess";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Users, 
  BookOpen, 
  Bot,
  Wifi,
  Crown,
  Palette,
  Moon,
  Sun,
  Settings as SettingsIcon,
  HelpCircle,
  Trophy,
  GraduationCap
} from "lucide-react";
import { Settings } from "./Settings";
import { KeyboardHelp } from "./KeyboardHelp";
import { Achievements } from "./Achievements";
import { OpeningLearning } from "./OpeningLearning";
import { OpeningCoach } from "./OpeningCoach";

const THEME_COLORS = {
  classic: "bg-gradient-to-br from-amber-200 to-amber-700",
  modern: "bg-gradient-to-br from-slate-300 to-slate-700",
  wooden: "bg-gradient-to-br from-orange-300 to-amber-900",
  midnight: "bg-gradient-to-br from-indigo-400 to-indigo-950",
  emerald: "bg-gradient-to-br from-emerald-200 to-emerald-700",
  sunset: "bg-gradient-to-br from-rose-200 to-orange-700",
  ocean: "bg-gradient-to-br from-cyan-200 to-blue-800",
  neon: "bg-gradient-to-br from-lime-200 to-gray-900",
  lavender: "bg-gradient-to-br from-purple-200 to-purple-600",
  forest: "bg-gradient-to-br from-green-200 to-green-800"
};

export function MainMenu() {
  const { 
    setGameMode, 
    theme, 
    setTheme, 
    isDarkMode, 
    toggleDarkMode 
  } = useChess();
  
  const [showSettings, setShowSettings] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);
  const [showLearning, setShowLearning] = useState(false);
  const [showCoach, setShowCoach] = useState(false);
  
  const themes: ("classic" | "modern" | "wooden" | "midnight" | "emerald" | "sunset" | "ocean" | "neon" | "lavender" | "forest")[] = ["classic", "modern", "wooden", "midnight", "emerald", "sunset", "ocean", "neon", "lavender", "forest"];
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-lg space-y-6"
      >
        <div className="text-center space-y-2">
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="flex items-center justify-center gap-3"
          >
            <Crown className="w-12 h-12 text-yellow-500" />
            <h1 className="text-4xl font-bold text-white">Chess Master</h1>
          </motion.div>
          <p className="text-gray-400">Play, Learn, and Master the Royal Game</p>
        </div>
        
        <Card className="p-6 bg-gray-800/50 backdrop-blur border-gray-700 space-y-4">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              className="w-full h-16 text-lg bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
              onClick={() => setGameMode("ai")}
            >
              <Bot className="w-6 h-6 mr-3" />
              Play vs AI
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              className="w-full h-16 text-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              onClick={() => setGameMode("play")}
            >
              <Users className="w-6 h-6 mr-3" />
              Player vs Player
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              className="w-full h-16 text-lg bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
              onClick={() => setGameMode("online")}
            >
              <Wifi className="w-6 h-6 mr-3" />
              Play with Friends
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              className="w-full h-16 text-lg bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800"
              onClick={() => setGameMode("review")}
            >
              <BookOpen className="w-6 h-6 mr-3" />
              Legendary Games
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              className="w-full h-16 text-lg bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800"
              onClick={() => setShowCoach(true)}
            >
              <GraduationCap className="w-6 h-6 mr-3" />
              Opening Coach (AI)
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              className="w-full h-16 text-lg bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800"
              onClick={() => setShowLearning(true)}
            >
              <BookOpen className="w-6 h-6 mr-3" />
              Opening Library
            </Button>
          </motion.div>
        </Card>
        
        <Card className="p-4 bg-gray-800/50 backdrop-blur border-gray-700">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">Board Theme</span>
              </div>
            </div>
            
            <div className="grid grid-cols-5 gap-2">
              {themes.map((t) => (
                <motion.button
                  key={t}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setTheme(t)}
                  className={`
                    h-12 rounded-lg ${THEME_COLORS[t]}
                    ${theme === t ? "ring-2 ring-white ring-offset-2 ring-offset-gray-800 scale-110" : "opacity-60 hover:opacity-100"}
                    transition-all
                  `}
                  title={t.charAt(0).toUpperCase() + t.slice(1)}
                />
              ))}
            </div>
            
            <div className="flex items-center justify-between pt-2 border-t border-gray-700">
              <div className="flex items-center gap-2">
                {isDarkMode ? <Moon className="w-5 h-5 text-gray-400" /> : <Sun className="w-5 h-5 text-yellow-400" />}
                <span className="text-gray-300">Dark Mode</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="text-gray-400 hover:text-white"
              >
                {isDarkMode ? "On" : "Off"}
              </Button>
            </div>
          </div>
        </Card>

        <div className="flex gap-3 justify-center flex-wrap">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowSettings(true)}
            className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition"
            title="Settings"
          >
            <SettingsIcon className="w-6 h-6 text-blue-400" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowHelp(true)}
            className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition"
            title="Keyboard Help"
          >
            <HelpCircle className="w-6 h-6 text-green-400" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAchievements(true)}
            className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition"
            title="Achievements"
          >
            <Trophy className="w-6 h-6 text-yellow-400" />
          </motion.button>
        </div>
        
        <motion.p 
          className="text-center text-xs text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Featuring 15 legendary games from the world's greatest GMs
        </motion.p>
      </motion.div>

      {showSettings && <Settings isDarkMode={isDarkMode} onDarkModeToggle={toggleDarkMode} onClose={() => setShowSettings(false)} />}
      {showHelp && <KeyboardHelp onClose={() => setShowHelp(false)} />}
      {showAchievements && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => setShowAchievements(false)}
        >
          <Card className="bg-gray-800 border-gray-700 p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold text-white mb-6">Achievements</h2>
            <Achievements stats={{ gamesPlayed: 0, gamesWon: 0, gamesLost: 0, legendaryGamesViewed: 15 }} />
          </Card>
        </motion.div>
      )}
      {showLearning && <OpeningLearning onBack={() => setShowLearning(false)} />}
      {showCoach && <OpeningCoach onBack={() => setShowCoach(false)} />}
    </div>
  );
}
