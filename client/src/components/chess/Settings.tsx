import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Volume2, Volume2Off, Zap, Moon } from "lucide-react";
import { SoundManager } from "@/lib/soundManager";

interface SettingsProps {
  isDarkMode: boolean;
  onDarkModeToggle: () => void;
  onClose: () => void;
}

export function Settings({ isDarkMode, onDarkModeToggle, onClose }: SettingsProps) {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  const handleSoundToggle = () => {
    setSoundEnabled(!soundEnabled);
    SoundManager.setEnabled(!soundEnabled);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <Card className="bg-gray-800 border-gray-700 p-6 max-w-sm w-full space-y-4">
        <h2 className="text-2xl font-bold text-white mb-6">Settings</h2>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded">
            <div className="flex items-center gap-2">
              {soundEnabled ? <Volume2 className="w-5 h-5 text-blue-400" /> : <Volume2Off className="w-5 h-5 text-gray-500" />}
              <span className="text-white">Sound Effects</span>
            </div>
            <button
              onClick={handleSoundToggle}
              className={`relative w-12 h-6 rounded-full transition ${soundEnabled ? "bg-blue-600" : "bg-gray-600"}`}
            >
              <motion.div
                layout
                className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full"
                animate={{ x: soundEnabled ? 24 : 0 }}
              />
            </button>
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-white">Animations</span>
            </div>
            <button
              onClick={() => setAnimationsEnabled(!animationsEnabled)}
              className={`relative w-12 h-6 rounded-full transition ${animationsEnabled ? "bg-green-600" : "bg-gray-600"}`}
            >
              <motion.div
                layout
                className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full"
                animate={{ x: animationsEnabled ? 24 : 0 }}
              />
            </button>
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded">
            <div className="flex items-center gap-2">
              <Moon className="w-5 h-5 text-purple-400" />
              <span className="text-white">Dark Mode</span>
            </div>
            <button
              onClick={onDarkModeToggle}
              className={`relative w-12 h-6 rounded-full transition ${isDarkMode ? "bg-purple-600" : "bg-gray-600"}`}
            >
              <motion.div
                layout
                className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full"
                animate={{ x: isDarkMode ? 24 : 0 }}
              />
            </button>
          </div>
        </div>

        <Button onClick={onClose} className="w-full bg-blue-600 hover:bg-blue-700 mt-6">
          Close Settings
        </Button>
      </Card>
    </motion.div>
  );
}
