import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import WaitingRoom from "./components/WaitingRoom";
import Navbar from "./components/Navbar";
import Game from "./components/Game";

function App() {
  return (
    <div className="h-dvh flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/waiting" element={<WaitingRoom />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
