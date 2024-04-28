import { Link } from "react-router-dom";
import Combatant from "./Combatant";
import Button from "./Button";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { UsernameContext } from "../App";
import socket from "../socketConfig";

const WaitingRoom = () => {
  const [ matchState, setMatchState ] = useState({_id: "", isOpen:false, players:[], solution:[], baseBoard:[]});
  const { userName, setUserName } = useContext(UsernameContext);
  const [ opponentName, setOpponentName] = useState("");

  useEffect(()=>{
    socket.on('update-game', match=>{
      setMatchState(match);
    });
    // if (matchState.players.length > 1) {
    //   return ()=>{
    //     socket.removeAllListeners();
    //   }
    // }
  }, []);

  useEffect(()=>{
    if (matchState.players.length > 1) {
      if (matchState.players[0].username == userName) {
        setOpponentName(matchState.players[1].username);
      } else {
        setOpponentName(matchState.players[0].username);
      }
    }
  });

  let roomID = matchState._id;

  return (
    <>
      <div className="grow flex flex-col justify-center items-center gap-16">
        <h1 className="text-8xl italic font-bold text-center">
          Waiting for Opponent
        </h1>
        <h2 className="text-2xl font-bold">Room ID: {roomID}</h2>
        <div className="w-2/3 flex flex-col gap-8 md:flex-row md:gap-0 md:justify-evenly">
          <Combatant number={1} username={userName} />
          <Combatant number={2} username={opponentName} />
        </div>
        <div className="w-2/3 max-w-[900px]">
          <Link to={`/play/${roomID}`}>
            <Button className="w-full">Start</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default WaitingRoom;
