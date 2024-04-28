import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../SudokuBoard.css';
import '../Keypad.css';
import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom';

const SudokuBoard = () => {
  const [board, setBoard] = useState(Array(9).fill().map(() => Array(9).fill(0)));
  const location = useLocation();

  useEffect(() => {
    const matchState = location.state.match;
    const data = [...matchState.baseBoard];
    const transformedBoard = data.map(row => 
      row.map(cell => cell === null ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : cell)
    );
    setBoard(transformedBoard);
  }, []);

  const handleNumberSelect = (number) => {
    setSelectedNumber(number); // Update the selected number
  };

  const handleCellClick = (rowIndex, colIndex) => {
    if (selectedNumber === null) return; // Do nothing if no number is selected

    // Update the board
    const newBoard = board.map((row, rIdx) => 
      rIdx === rowIndex ? row.map((cell, cIdx) => 
        cIdx === colIndex && cell === null ? selectedNumber : cell) : row
    );
    setBoard(newBoard);
  };

  const handleInputChange = (value, row, col) => {
    const updatedBoard = board.map((currentRow, rowIndex) => {
      if (rowIndex === row) {
        return currentRow.map((cell, colIndex) => {
          if (colIndex === col) {
            return Array.isArray(cell) ? value.split(',').map(Number) : value;
          }
          return cell;
        });
      }
      return currentRow;
    });

    setBoard(updatedBoard);
  };

  return (
    <div class="page-container">
        <div class='side-compartment'>
        <Sidebar />
        </div>

        <div class="middle-position">
            <div className="sudoku-board">
                {board.map((row, rowIndex) => (
                <div className="sudoku-row" key={rowIndex}>
                    {row.map((cell, colIndex) => (
                    <div className={`sudoku-cell ${((rowIndex + 1) % 3===0) && (rowIndex + 1 < 9) ? 'bottom-border' : ''
                        } ${((colIndex + 1) % 3===0) && (colIndex + 1 < 9) ? 'right-border' : '' }`} key={colIndex}>
                        {cell === 0 ? (
                        <input className="sudoku-input" type="text" maxLength="1" pattern="[1-9]{1}" onChange={(e)=>
                        handleInputChange(rowIndex, colIndex, e.target.value)} 
                        />
                        ) : (
                        cell
                        )}
                    </div>
                    ))}
                </div>
                ))}
            </div>
        </div>

        <div class='side-compartment'>
            <div class="keypad">
                <h2>Keypad</h2>
                <div class="numbers">
                    <button class="number-button">1</button>
                    <button class="number-button">2</button>
                    <button class="number-button">3</button>
                    <button class="number-button">4</button>
                    <button class="number-button">5</button>
                    <button class="number-button">6</button>
                    <button class="number-button">7</button>
                    <button class="number-button">8</button>
                    <button class="number-button">9</button>
                </div>
                <h2>Mode</h2>
                <div class="mode-buttons">
                    <button class="mode-button normal">Normal</button>
                    <button class="mode-button candidate">Candidate</button>
                </div>
                <button class="submit-button">SUBMIT</button>
            </div>
        </div>
    </div>
    );
};

export default SudokuBoard;