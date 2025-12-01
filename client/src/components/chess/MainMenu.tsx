import { useChess } from "@/lib/stores/useChess";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Users, 
  BookOpen, 
  Bot,
  Crown,
  Palette,
  Moon,
  Sun
} from "lucide-react";

const THEME_COLORS = {
  classic: "bg-gradient-to-br from-amber-200 to-amber-700",
  modern: "bg-gradient-to-br from-slate-300 to-slate-700",
  wooden: "bg-gradient-to-br from-orange-300 to-amber-900",
  midnight: "bg-gradient-to-br from-indigo-400 to-indigo-950"
};

export function MainMenu() {
  const { 
    setGameMode, 
    theme, 
    setTheme, 
    isDarkMode, 
    toggleDarkMode 
  } = useChess();
  
  const themes: ("classic" | "modern" | "wooden" | "midnight")[] = ["classic", "modern", "wooden", "midnight"];
  
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
              className="w-full h-16 text-lg bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800"
              onClick={() => setGameMode("review")}
            >
              <BookOpen className="w-6 h-6 mr-3" />
              Bobby Fischer Games
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
            
            <div className="flex gap-2">
              {themes.map((t) => (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  className={`
                    flex-1 h-12 rounded-lg ${THEME_COLORS[t]}
                    ${theme === t ? "ring-2 ring-white ring-offset-2 ring-offset-gray-800" : "opacity-60 hover:opacity-100"}
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
        
        <motion.p 
          className="text-center text-xs text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Featuring 10 legendary Bobby Fischer games
        </motion.p>
      </motion.div>
    </div>
  );
}
