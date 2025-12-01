import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface KeyboardHelpProps {
  onClose: () => void;
}

export function KeyboardHelp({ onClose }: KeyboardHelpProps) {
  const shortcuts = [
    { key: "Esc", action: "Go back to menu" },
    { key: "→", action: "Next move" },
    { key: "←", action: "Previous move" },
    { key: "Space", action: "Auto-play/Stop" },
    { key: "H", action: "Show hint" },
    { key: "S", action: "Toggle settings" },
    { key: "?", action: "Show this help" },
    { key: "1-8", action: "Quick theme select" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
    >
      <Card className="bg-gray-800 border-gray-700 p-6 max-w-md w-full space-y-4">
        <h2 className="text-2xl font-bold text-white mb-6">Keyboard Shortcuts</h2>

        <div className="space-y-2 max-h-96 overflow-y-auto">
          {shortcuts.map((shortcut, i) => (
            <motion.div
              key={i}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center justify-between p-2 bg-gray-700/50 rounded"
            >
              <kbd className="px-2 py-1 bg-gray-900 rounded text-yellow-400 font-mono text-sm border border-gray-600">
                {shortcut.key}
              </kbd>
              <span className="text-gray-300 text-sm">{shortcut.action}</span>
            </motion.div>
          ))}
        </div>

        <Button onClick={onClose} className="w-full bg-blue-600 hover:bg-blue-700">
          Close Help
        </Button>
      </Card>
    </motion.div>
  );
}
