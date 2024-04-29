import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";
import socket from "../socketConfig";
import Keypad from "./Keypad";
import Sudoku from "./Sudoku";
import ProgressBar from "./ProgressBar";

const findPlayer = (players) => {
  return players.find((player) => player.socketid === socket.id);
};

const SudokuBoard = () => {
  const [board, setBoard] = useState(
    Array(9)
      .fill()
      .map(() => Array(9).fill(0)),
  );
  const [solution, setSolution] = useState(
    Array(9)
      .fill()
      .map(() => Array(9).fill(0)),
  );
  const location = useLocation();
  const [progress, setProgress] = useState(0);

  // FIXME: I think some of this logic needs to be updated to work with the new setup.
  useEffect(() => {
    const matchState = location.state.match;
    const data = [...matchState.baseBoard];
    const transformedBoard = data.map((row) =>
      row.map((cell) => (cell === null ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : cell)),
    );
    setBoard(transformedBoard);
    const sol = [...matchState.solution];
    setSolution(sol);
  }, []);

  return (
    <div className="grow flex flex-col-reverse gap-6 xl:flex-row xl:gap-0 justify-evenly items-center my-8">
      <Sidebar />
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-6 justify-center items-center">
          <ProgressBar
            opponentName={"test"}
            progress={progress}
            className="mr-24"
          />
          <Sudoku
            startingBoard={[...board]}
            board={board}
            setBoard={setBoard}
          />
        </div>
        <Keypad />
      </div>
    </div>
  );
};

export default SudokuBoard;
