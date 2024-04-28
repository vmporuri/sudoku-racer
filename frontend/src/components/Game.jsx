import Sidebar from "./Sidebar";
import Sudoku from "./Sudoku";

const Game = () => {
  return (
    <div className="grow flex justify-start my-8 gap-40">
      <Sidebar />
      <Sudoku />
    </div>
  );
};

export default Game;
