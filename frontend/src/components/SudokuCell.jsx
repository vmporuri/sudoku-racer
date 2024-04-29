import { useState } from "react";

const SudokuCell = ({
  rowIndex,
  colIndex,
  value,
  sudokuMatrix,
  setSudokuMatrix,
  canChange,
}) => {
  const [cellValue, setCellValue] = useState(sudokuMatrix[rowIndex][colIndex] || "");

  const borderStyle = `${rowIndex % 3 === 0 ? "border-t-2 border-t-black" : "border-t"}
                       ${colIndex % 3 === 0 ? "border-l-2 border-l-black" : "border-l"}
                       ${rowIndex === 8 ? "border-b-2 border-b-black" : "border-b"}
                       ${colIndex === 8 ? "border-r-2 border-r-black" : "border-r"}`;

  const handleChange = (e) => {
    if (!canChange || !/[1-9]/.test(e.key)) {
      e.preventDefault();
    }
    const val = e.target.value;
    setCellValue(/[1-9]/.test(val) ? val : "");
    const newSudokuMatrix = [...sudokuMatrix];
    newSudokuMatrix[rowIndex][colIndex] = parseInt(val);
    setSudokuMatrix(newSudokuMatrix);
    console.log(newSudokuMatrix);
  };

  const createCell = () => {
    if (canChange) {
      return (
        <input
          type="text"
          value={cellValue}
          onChange={handleChange}
          maxLength="1"
          className={`h-16 w-16 border-2 border-gray-300 text-center text-xl ${borderStyle}`}
        />
      );
    } else {
      return (
        <div
          className={`flex items-center justify-center h-16 w-16 border-2 border-black
                      text-center text-xl bg-gray-200 ${borderStyle}`}
        >
          {cellValue}
        </div>
      );
    }
  };

  return <>{createCell()}</>;
};

export default SudokuCell;
