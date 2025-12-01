import { fischerGames, FischerGame } from "@/data/fischerGames";
import { useChess } from "@/lib/stores/useChess";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Search, Play, Trophy, Calendar, MapPin, ArrowLeft } from "lucide-react";
import { useState } from "react";

export function FischerGamesLibrary() {
  const { loadFischerGame, setGameMode } = useChess();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGame, setSelectedGame] = useState<FischerGame | null>(null);
  
  const filteredGames = fischerGames.filter(game => {
    const query = searchQuery.toLowerCase();
    return (
      game.title.toLowerCase().includes(query) ||
      game.white.toLowerCase().includes(query) ||
      game.black.toLowerCase().includes(query) ||
      game.event.toLowerCase().includes(query) ||
      game.description.toLowerCase().includes(query)
    );
  });
  
  const handleSelectGame = (game: FischerGame) => {
    setSelectedGame(game);
  };
  
  const handlePlayGame = (game: FischerGame) => {
    loadFischerGame(game);
  };
  
  if (selectedGame) {
    return (
      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setSelectedGame(null)}
          className="text-gray-400 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Games
        </Button>
        
        <Card className="p-6 bg-gray-900/80 backdrop-blur border-gray-700">
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">{selectedGame.title}</h2>
                <p className="text-gray-400">{selectedGame.event}</p>
              </div>
              <span className={`
                text-lg font-bold px-3 py-1 rounded
                ${selectedGame.result === "1-0" ? "bg-white text-black" : 
                  selectedGame.result === "0-1" ? "bg-gray-800 text-white" : 
                  "bg-gray-500 text-white"}
              `}>
                {selectedGame.result}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <Calendar className="w-4 h-4 text-gray-500" />
                {selectedGame.date}
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-gray-500" />
                {selectedGame.site}
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-4 py-4">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl mx-auto mb-2">
                  ♔
                </div>
                <p className="font-semibold text-white">{selectedGame.white}</p>
                <p className="text-xs text-gray-400">White</p>
              </div>
              <span className="text-2xl text-gray-500">vs</span>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-2xl mx-auto mb-2 border border-gray-600">
                  ♚
                </div>
                <p className="font-semibold text-white">{selectedGame.black}</p>
                <p className="text-xs text-gray-400">Black</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              {selectedGame.description}
            </p>
            
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-gray-400">Key Moments</h4>
              {selectedGame.keyMoments.map((moment, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-gray-400">
                  <span className="text-yellow-500 font-mono">Move {moment.moveIndex + 1}:</span>
                  <span>{moment.comment}</span>
                </div>
              ))}
            </div>
            
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700"
              onClick={() => handlePlayGame(selectedGame)}
            >
              <Play className="w-4 h-4 mr-2" />
              Review This Game
            </Button>
          </div>
        </Card>
      </motion.div>
    );
  }
  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setGameMode("menu")}
          className="text-gray-400 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Menu
        </Button>
      </div>
      
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
          <Trophy className="w-6 h-6 text-yellow-500" />
          Bobby Fischer's Greatest Games
        </h2>
        <p className="text-gray-400 mt-1">Study the legendary games of the chess genius</p>
      </div>
      
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <Input
          placeholder="Search games..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
        />
      </div>
      
      <ScrollArea className="h-[400px]">
        <div className="space-y-3 pr-4">
          {filteredGames.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card 
                className="p-4 bg-gray-800/50 border-gray-700 hover:bg-gray-800 cursor-pointer transition-colors"
                onClick={() => handleSelectGame(game)}
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h3 className="font-semibold text-white">{game.title}</h3>
                    <p className="text-sm text-gray-400">
                      {game.white} vs {game.black}
                    </p>
                    <p className="text-xs text-gray-500">{game.event}, {game.date}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className={`
                      text-sm font-bold px-2 py-0.5 rounded
                      ${game.result === "1-0" ? "bg-white text-black" : 
                        game.result === "0-1" ? "bg-gray-700 text-white" : 
                        "bg-gray-600 text-white"}
                    `}>
                      {game.result}
                    </span>
                    <span className="text-xs text-gray-500">{game.moves.length} moves</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
          
          {filteredGames.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No games found matching "{searchQuery}"
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
