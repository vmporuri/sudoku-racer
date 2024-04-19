import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import WaitingRoom from "./components/WaitingRoom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/waiting" element={<WaitingRoom />} />
    </Routes>
  );
}

export default App;
