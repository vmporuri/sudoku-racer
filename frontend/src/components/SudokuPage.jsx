import { useState } from 'react';
import data from '../Sudoku_Export';  // Ensure this path is correct

const SudokuPage = () => {
  const [grid, setGrid] = useState(data.grid);
  const [selectedCell, setSelectedCell] = useState(null);
  const [candidateMode, setCandidateMode] = useState(false);

  const toggleCandidateMode = () => {
    setCandidateMode(!candidateMode);
  };

  const handleSubmit = () => {
    // Handle submit logic here
    console.log('Submitting...');
  };

  return (
    <div className="sudoku-container">
      <div className="sudoku-grid">
        {grid.map((row, rowIndex) => (
          <div className="sudoku-row" key={rowIndex}>
            {row.map((value, colIndex) => (
              <div
                className={`sudoku-cell ${
                  selectedCell?.row === rowIndex && selectedCell?.col === colIndex
                    ? 'selected'
                    : ''
                }`}
                key={colIndex}
                onClick={() => setSelectedCell({ row: rowIndex, col: colIndex })}
              >
                {value !== 0 ? value : ''}
              </div>
            ))}
          </div>
        ))}
      </div>
      <button onClick={toggleCandidateMode}>
        Mode: {candidateMode ? 'Candidate' : 'Normal'}
      </button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SudokuPage;
