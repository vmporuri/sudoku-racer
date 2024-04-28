import { useState } from "react";
import SudokuCell from "./SudokuCell";

const Sudoku = () => {
  /*
   * NOTE: Set an initial sudokuMatrix called initialSudokuMatrix
   * so that we can prevent the prefilled values from being edited.
   */
  const initialSudokuMatrix = Array.from({ length: 9 }, () => Array(9).fill(0));

  /* NOTE: Use a useEffect on variable sudokuMatrix. Anytime the user changes
   * a value in the matrix, it updates sudokuMatrix. Note that deleting an entry
   * doesn't count as changing a value. They have to set it to a different value
   * than it was previously.
   */
  const [sudokuMatrix, setSudokuMatrix] = useState(initialSudokuMatrix);

  return (
    <form className="grid grid-cols-9 place-content-center">
      {sudokuMatrix.map((row, rowIndex) =>
        row.map((value, colIndex) => (
          <SudokuCell
            key={`${rowIndex}-${colIndex}`}
            rowIndex={rowIndex}
            colIndex={colIndex}
            value={value}
            sudokuMatrix={sudokuMatrix}
            setSudokuMatrix={setSudokuMatrix}
            canChange={initialSudokuMatrix[rowIndex][colIndex] === 0}
          />
        )),
      )}
    </form>
  );
};

export default Sudoku;
