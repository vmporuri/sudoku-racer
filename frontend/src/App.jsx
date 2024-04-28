import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import WaitingRoom from "./components/WaitingRoom";
import Navbar from "./components/Navbar";
import Game from "./components/Game";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";
import socket from "./socketConfig";
import SudokuBoard from "./components/SudokuBoard";

export const UsernameContext = React.createContext();

function App() {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    let cookies = Object.fromEntries(
      document.cookie.split("; ").map((x) => x.split("=")),
    );
    if (cookies.isLoggedIn === "true") {
      setUserName(cookies.name);
    }
  }, []);

  return (
    <UsernameContext.Provider
      value={{ userName: userName, setUserName: setUserName }}
    >
      <div className="h-dvh flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/waiting" element={<WaitingRoom />} />
          <Route path="/play" element={<SudokuBoard />} />
          <Route path="/game/:id" element={<Game />} />
          <Route path="/profile/:user" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </UsernameContext.Provider>
  );
}

export default App;
