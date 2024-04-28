import { useState } from "react";

const SudokuCell = ({
  rowIndex,
  colIndex,
  value,
  sudokuMatrix,
  setSudokuMatrix,
  canChange,
}) => {
  const [cellValue, setCellValue] = useState(value || "");

  const handleChange = (e) => {
    setCellValue(e.target.value);
    const newSudokuMatrix = [...sudokuMatrix];
    newSudokuMatrix[rowIndex][colIndex] = cellValue;
    setSudokuMatrix(newSudokuMatrix);
  };

  const createCell = () => {
    if (canChange) {
      return (
        <input
          type="text"
          value={cellValue}
          onChange={handleChange}
          onKeyPress={(event) => {
            if (!canChange || !/[1-9]/.test(event.key)) {
              event.preventDefault();
            }
            console.log(canChange);
          }}
          maxLength="1"
          className={`h-16 w-16 border-2 border-black text-center text-xl 
                      ${rowIndex % 3 === 0 ? "border-t-2" : "border-t"}
                      ${colIndex % 3 === 0 ? "border-l-2" : "border-l"}
                      ${rowIndex === 8 ? "border-b-2" : "border-b"}
                      ${colIndex === 8 ? "border-r-2" : "border-r"}`}
        />
      );
    } else {
      return (
        <div className="flex items-center justify-center h-16 w-16 border-2 border-black text-center text-xl bg-gray-200">
          {cellValue}
        </div>
      );
    }
  };

  return <>{createCell()}</>;
};

export default SudokuCell;
