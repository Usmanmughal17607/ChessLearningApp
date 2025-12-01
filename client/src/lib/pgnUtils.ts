import { Chess } from "chess.js";

export interface PGNHeaders {
  Event?: string;
  Site?: string;
  Date?: string;
  Round?: string;
  White?: string;
  Black?: string;
  Result?: string;
  ECO?: string;
  Opening?: string;
  [key: string]: string | undefined;
}

export interface ParsedPGN {
  headers: PGNHeaders;
  moves: string[];
  result: string;
}

export function parsePGN(pgn: string): ParsedPGN | null {
  try {
    const game = new Chess();
    game.loadPgn(pgn);
    
    const headers: PGNHeaders = {};
    const headerLines = pgn.match(/\[(\w+)\s+"([^"]+)"\]/g) || [];
    
    headerLines.forEach(line => {
      const match = line.match(/\[(\w+)\s+"([^"]+)"\]/);
      if (match) {
        headers[match[1]] = match[2];
      }
    });
    
    const history = game.history();
    const result = headers.Result || "*";
    
    return {
      headers,
      moves: history,
      result
    };
  } catch (error) {
    console.error("Failed to parse PGN:", error);
    return null;
  }
}

export function generatePGN(
  moves: string[],
  headers: PGNHeaders = {},
  result: string = "*"
): string {
  const game = new Chess();
  
  for (const move of moves) {
    try {
      game.move(move);
    } catch (e) {
      // Silently skip invalid moves
      break;
    }
  }
  
  const defaultHeaders: PGNHeaders = {
    Event: "Chess Master Game",
    Site: "Chess Master App",
    Date: new Date().toISOString().split('T')[0].replace(/-/g, '.'),
    Round: "1",
    White: "Player 1",
    Black: "Player 2",
    Result: result,
    ...headers
  };
  
  let pgn = "";
  
  for (const [key, value] of Object.entries(defaultHeaders)) {
    if (value) {
      pgn += `[${key} "${value}"]\n`;
    }
  }
  
  pgn += "\n";
  
  const history = game.history();
  let moveText = "";
  
  for (let i = 0; i < history.length; i++) {
    if (i % 2 === 0) {
      moveText += `${Math.floor(i / 2) + 1}. `;
    }
    moveText += history[i] + " ";
  }
  
  moveText += result;
  
  const lines: string[] = [];
  let currentLine = "";
  const words = moveText.split(" ");
  
  for (const word of words) {
    if (currentLine.length + word.length + 1 > 80) {
      lines.push(currentLine.trim());
      currentLine = word + " ";
    } else {
      currentLine += word + " ";
    }
  }
  
  if (currentLine.trim()) {
    lines.push(currentLine.trim());
  }
  
  pgn += lines.join("\n");
  
  return pgn;
}

export function downloadPGN(pgn: string, filename: string = "chess_game.pgn"): void {
  const blob = new Blob([pgn], { type: "application/x-chess-pgn" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function getGameResult(game: Chess): string {
  if (game.isCheckmate()) {
    return game.turn() === 'w' ? "0-1" : "1-0";
  }
  if (game.isDraw() || game.isStalemate()) {
    return "1/2-1/2";
  }
  return "*";
}
