import { Chess } from "chess.js";

export function validateMoveSequence(moves: string[]): { valid: boolean; validCount: number; invalidMove?: string } {
  const game = new Chess();
  let validCount = 0;

  for (let i = 0; i < moves.length; i++) {
    try {
      const move = game.move(moves[i]);
      if (!move) {
        return { valid: false, validCount, invalidMove: moves[i] };
      }
      validCount++;
    } catch (e) {
      return { valid: false, validCount, invalidMove: moves[i] };
    }
  }

  return { valid: true, validCount };
}

export function validateAllGames(games: any[]) {
  games.forEach(game => {
    const result = validateMoveSequence(game.moves);
    if (!result.valid) {
      console.warn(`Game "${game.title}" has invalid move: ${result.invalidMove} at position ${result.validCount}`);
    }
  });
}
