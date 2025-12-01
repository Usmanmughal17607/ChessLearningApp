import { ChessGame } from "./components/chess/ChessGame";
import "@fontsource/inter";

function App() {
  return (
    <div className="w-screen h-screen overflow-auto bg-gray-900">
      <ChessGame />
    </div>
  );
}

export default App;
