import { useState } from "react";
import ProgressBar from "./ProgressBar";
import Sidebar from "./Sidebar";
import Sudoku from "./Sudoku";

const Game = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div className="grow flex flex-col-reverse gap-6 lg:flex-row lg:gap-0 justify-start items-center my-8">
      <Sidebar />
      <div className="mx-auto flex flex-col gap-6 justify-center items-center">
        <ProgressBar
          opponentName={"test"}
          progress={progress}
          className="mr-24"
        />
        <Sudoku />
      </div>
    </div>
  );
};

export default Game;
