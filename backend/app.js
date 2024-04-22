const express = require("express");
// const app = express();
const mongoose = require("mongoose");
const socketio = require("socket.io");
// const cors = require("cors");

// const corsOptions = {
//   origin: "http://localhost:5173",
// };
// app.use(cors(corsOptions));

// const server = app.listen(3001);
// const http = require('http').Server(server);

// Origin should be set to whereever the server is being hosted locally
const io = socketio(3001, {
    cors: {
        origin: "http://localhost:5173",
    }
  });

const SudokuMatch = require("./GameDB.js");
const SudokuAPI = require("./SudokuAPI.js");

mongoose.connect('mongodb://0.0.0.0:27017/sudoku-racer');

io.on("connect", (socket)=>{
    socket.emit('test', "we have connected y'all")
})