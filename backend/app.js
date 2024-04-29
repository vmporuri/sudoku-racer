const express = require("express");
const mongoose = require("mongoose");
const socketio = require("socket.io");
const sqlite = require("sqlite3").verbose();
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
const db = new sqlite.Database(
  "./profiles.db",
  sqlite.OPEN_READWRITE,
  (err) => {
    if (err) return console.error(err);
  },
);

app.get("/get-user", (req, res) => {
  try {
    console.log(req.query.userName);
    res.json({
      status: 200,
      success: true,
    });
  } catch (error) {
    return res.json({
      status: 400,
      success: false,
    });
  }
});

const httpServer = app.listen(3001, () =>
  console.log("Server listening at port 3001."),
);

// Origin should be set to wherever the server is being hosted locally
const io = socketio(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
});

const SudokuMatch = require("./GameDB.js");
const SudokuAPI = require("./SudokuAPI.js");

mongoose.connect("mongodb://0.0.0.0:27017/sudoku-racer");

io.on("connect", (socket) => {
  socket.on("profile-update", async ({ matchID: _id, socketID: socketid }) => {
    let match = await SudokuMatch.findById(_id);
    console.log(match);
  });
  socket.on("sudoku-finish", async ({ matchID: _id, socketID: socketid }) => {
    let match = await SudokuMatch.findById(_id);
    if (match.isOver == false) {
      match.isOver = true;
      if (match.players[0].socketid == socketid) {
        match.winnerPlayerIDX = 0;
      } else {
        match.winnerPlayerIDX = 1;
      }
      match = await match.save();
      const gameID = match._id.toString();
      io.to(gameID).emit("match-ended", match);
    }
  });

  socket.on("start-game", async (_id) => {
    let match = await SudokuMatch.findById(_id);
    match.startTime = new Date().getTime();
    match = await match.save();
    const gameID = match._id.toString();
    io.to(gameID).emit("begin-game", match);
  });

  socket.on("create-game", async (username) => {
    try {
      const gameJSON = await SudokuAPI();
      let match = new SudokuMatch();
      match.solution = gameJSON.solution;
      match.baseBoard = gameJSON.value;
      match.difficulty = gameJSON.difficulty;
      let player = {
        username,
        socketid: socket.id,
        isPartyLeader: true,
        currentBoard: gameJSON.value,
      };
      match.players.push(player);
      match = await match.save();

      const gameID = match._id.toString();
      socket.join(gameID);
      io.to(gameID).emit("update-game", match);
    } catch (e) {
      console.log(e);
    }
  });

  socket.on("join-game", async ({ matchID: _id, username: username }) => {
    try {
      let match = await SudokuMatch.findById(_id);
      if (match.isOpen) {
        const gameID = match._id.toString();
        socket.join(gameID);
        let player = {
          username,
          socketid: socket.id,
          currentBoard: match.baseBoard,
        };
        match.players.push(player);
        match.isOpen = false;
        match = await match.save();
        io.to(gameID).emit("update-game", match);
      }
    } catch (e) {
      console.log(e);
    }
  });
});
