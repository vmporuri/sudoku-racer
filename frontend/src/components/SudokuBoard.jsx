import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";
import socket from "../socketConfig";
import Keypad from "./Keypad";
import Sudoku from "./Sudoku";
import ProgressBar from "./ProgressBar";

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
  const [baseBoard, setBaseBoard] = useState(
    Array(9)
      .fill()
      .map(() => Array(9).fill(0)),
  );

  // FIXME: I think some of this logic needs to be updated to work with the new setup.
  useEffect(() => {
    const matchState = location.state.match;
    const data = [...matchState.baseBoard];
    
    const transformedBoard = data.map((row) =>
      row.map((cell) => (cell === null ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : cell)),
    );
    setBoard(transformedBoard);
    const transformedBaseBoard = data.map((row) =>
      row.map((cell) => (cell === null ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : cell)),
    );
    setBaseBoard(transformedBaseBoard);
    const sol = [...matchState.solution];
    setSolution(sol);
    socket.on('match-ended', match=> {
      socket.emit('profile-update', match._id);
      //navigate(to_end_screen);
      // socket.removeAllListeners(); probably dont need this, but might
    })
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    let isSolution = true;
    for (var row = 0; row < 9; row++) {
      for (var col = 0; col < 9; col++) {
        if (board[row][col] != solution[row][col]) {
          isSolution = false;
          break;
        }
      }
      if (isSolution == false) {
        break;
      }
    }
    if (isSolution) {
      socket.emit("sudoku-finish", {matchID: location.state.match._id, socketID: socket.id});
    }
  }

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
            startingBoard={[...baseBoard]}
            board={board}
            setBoard={setBoard}
          />
        </div>
        <Keypad validateSolution = {onSubmit}/>
      </div>
    </div>
  );
};

export default SudokuBoard;
