import SudokuCell from "./SudokuCell";

const Sudoku = ({ startingBoard, board, setBoard }) => {
  return (
    <form className="shrink grid grid-cols-9 place-content-center border-2 border-black">
      {board.map((row, rowIndex) =>
        row.map((value, colIndex) => (
          <SudokuCell
            key={`${rowIndex}-${colIndex}`}
            rowIndex={rowIndex}
            colIndex={colIndex}
            sudokuMatrix={board}
            setSudokuMatrix={setBoard}
            canChange={startingBoard[rowIndex][colIndex] === 0}
          />
        )),
      )}
    </form>
  );
};

export default Sudoku;
