# Chess Master - Bobby Fischer Edition

A modern chess game application featuring interactive gameplay and a library of Bobby Fischer's legendary chess games for study and review.

## Overview

This chess application offers two main modes:
1. **Player vs Player** - Play chess against another person on the same device
2. **Bobby Fischer Games Library** - Study and review 10 of Bobby Fischer's most famous games with move-by-move playback

## Features

### Gameplay Features
- Interactive chessboard with click-to-move functionality
- Legal move highlighting showing all valid destinations
- Last move highlighting to track recent plays
- Check/checkmate/stalemate detection with visual indicators
- Captured pieces tracker showing material advantage
- Complete move history in algebraic notation

### Bobby Fischer Games Library
- 10 legendary games including:
  - "Game of the Century" (vs Donald Byrne, 1956)
  - World Championship Game 6 (vs Spassky, 1972)
  - US Championship brilliancies
  - Candidates match victories
- Move-by-move playback with controls (play, pause, next, previous)
- Auto-play functionality for hands-free viewing
- Key moments highlighted with annotations
- Game descriptions and historical context

### Visual Themes
- 4 board color themes: Classic, Modern, Wooden, Midnight
- Dark mode interface optimized for comfortable viewing
- Smooth animations using Framer Motion

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Chess Logic**: chess.js library for move validation
- **State Management**: Zustand
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI primitives

## Project Structure

```
client/src/
├── components/chess/
│   ├── ChessBoard.tsx      # Interactive board component
│   ├── ChessGame.tsx       # Main game router
│   ├── FischerGamesLibrary.tsx  # Fischer games browser
│   ├── GameControls.tsx    # Playback controls for review mode
│   ├── GameInfo.tsx        # Status and captured pieces
│   ├── MainMenu.tsx        # Home screen with mode selection
│   ├── MoveHistory.tsx     # Move list display
│   ├── PlayGame.tsx        # PvP game screen
│   └── ReviewGame.tsx      # Fischer game review screen
├── data/
│   └── fischerGames.ts     # Bobby Fischer games database
├── lib/stores/
│   └── useChess.tsx        # Chess state management
└── App.tsx                 # Root component
```

## User Preferences

- Dark theme preferred for chess applications
- Modern, clean UI design
- Smooth animations for better UX

## Recent Changes

- December 2024: Initial implementation with full chess gameplay and Fischer games library
