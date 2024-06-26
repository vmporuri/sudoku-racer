const mongoose = require("mongoose");

const GamePlayerSchema = mongoose.Schema({
    username : {type:String}, 
    socketid : {type:String}, 
    isPartyLeader : {type:Boolean, default:false}, 
    currentNumberCorrect : {type:Number, default:0},
    currentBoard : [[{type:Number}]]
});

const MatchSchema = mongoose.Schema({
    solution : [[{type:Number}]], 
    baseBoard : [[{type:Number}]],
    isOpen : {type:Boolean, default:true},
    isOver : {type:Boolean, default:false},
    players : [GamePlayerSchema], 
    matchStartTime : {type:Number},
    difficulty : {type:String}, 
    winnerPlayerIDX : {type:Number, default:-1}
});

module.exports = mongoose.model('SudokuMatch', MatchSchema);