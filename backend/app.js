const express = require("express");
// const app = express();
const mongoose = require("mongoose");
const socketio = require("socket.io");

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
    socket.on('create-game', async (username) => {
        try{
            const gameJSON = await SudokuAPI();
            let match = new SudokuMatch();
            match.solution = gameJSON.solution;
            match.baseBoard = gameJSON.value;
            match.difficulty = gameJSON.difficulty;
            let player = {
                username, 
                socketid : socket.id, 
                isPartyLeader : true,
                currentBoard : gameJSON.value
            }
            match.players.push(player);
            match = await match.save();

            const gameID = match._id.toString();
            socket.join(gameID);
            io.to(gameID).emit('update-game', match);
        }catch(e){
            console.log(e)
        }
    });

    socket.on('join-game', async ({matchID: _id, username: username}) => {
        try{
            let match = await SudokuMatch.findById(_id);
            if (match.isOpen) {
                const gameID = match._id.toString();
                socket.join(gameID);
                let player = {
                    username, 
                    socketid : socket.id, 
                    currentBoard : match.baseBoard
                }
                match.players.push(player);
                match = await match.save();
                io.to(gameID).emit('update-game', match);
            }
        }catch(e){
            console.log(e)
        }
    });
})