import { useState, useRef } from "react";
import { useChess } from "@/lib/stores/useChess";
import { parsePGN, generatePGN, downloadPGN, getGameResult } from "@/lib/pgnUtils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Download, Upload, FileText, Copy, Check } from "lucide-react";
import { motion } from "framer-motion";

export function PGNPanel() {
  const { game, moveHistory, loadFromPGN } = useChess();
  const [importPGN, setImportPGN] = useState("");
  const [copied, setCopied] = useState(false);
  const [importDialogOpen, setImportDialogOpen] = useState(false);
  const [exportDialogOpen, setExportDialogOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const currentPGN = generatePGN(
    moveHistory.map(m => m.san),
    {},
    getGameResult(game)
  );
  
  const handleExport = () => {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    downloadPGN(currentPGN, `chess_game_${timestamp}.pgn`);
  };
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentPGN);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  
  const handleImport = () => {
    const parsed = parsePGN(importPGN);
    if (parsed) {
      loadFromPGN(parsed.moves);
      setImportPGN("");
      setImportDialogOpen(false);
    } else {
      alert("Invalid PGN format. Please check your input.");
    }
  };
  
  const handleFileImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        setImportPGN(content);
      };
      reader.readAsText(file);
    }
  };
  
  return (
    <Card className="p-4 bg-gray-900/80 backdrop-blur border-gray-700">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-gray-400" />
          <span className="text-sm font-medium text-gray-300">Game PGN</span>
        </div>
        
        <div className="flex gap-2">
          <Dialog open={exportDialogOpen} onOpenChange={setExportDialogOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex-1 border-gray-600 hover:bg-gray-800"
              >
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-lg">
              <DialogHeader>
                <DialogTitle>Export Game</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <Textarea
                  value={currentPGN}
                  readOnly
                  className="h-48 font-mono text-sm bg-gray-800 border-gray-700"
                />
                <div className="flex gap-2">
                  <Button
                    onClick={handleCopy}
                    variant="outline"
                    className="flex-1 border-gray-600 hover:bg-gray-800"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 mr-2 text-green-500" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        Copy
                      </>
                    )}
                  </Button>
                  <Button
                    onClick={handleExport}
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          
          <Dialog open={importDialogOpen} onOpenChange={setImportDialogOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex-1 border-gray-600 hover:bg-gray-800"
              >
                <Upload className="w-4 h-4 mr-2" />
                Import
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-lg">
              <DialogHeader>
                <DialogTitle>Import Game</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <input
                    type="file"
                    accept=".pgn"
                    ref={fileInputRef}
                    onChange={handleFileImport}
                    className="hidden"
                  />
                  <Button
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full border-gray-600 hover:bg-gray-800"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload PGN File
                  </Button>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-700" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-gray-900 px-2 text-sm text-gray-500">or paste PGN</span>
                  </div>
                </div>
                
                <Textarea
                  value={importPGN}
                  onChange={(e) => setImportPGN(e.target.value)}
                  placeholder="Paste PGN notation here..."
                  className="h-48 font-mono text-sm bg-gray-800 border-gray-700"
                />
                
                <Button
                  onClick={handleImport}
                  disabled={!importPGN.trim()}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
                >
                  Load Game
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </Card>
  );
}
