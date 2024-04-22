const axios = require('axios');

const requestURL = "http://sudoku-api.vercel.app/api/dosuku?query={newboard(limit:1){grids{value,solution,difficulty}}}";

module.exports = getSudokuMatch = ()=>{
    return axios.get(requestURL);
}

