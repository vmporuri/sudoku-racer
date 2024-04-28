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
  const [ opponentName, setOpponentName] = useState("...");
  const [ pageTitle, setPageTitle] = useState("Waiting for Opponent")

  useEffect(()=>{
    socket.on('update-game', match=>{
      setMatchState(match);
      if (match.players.length > 1) {
        if (match.players[0].socketid === socket.id) {
          setOpponentName(match.players[1].username);
          setPageTitle("Please Start the Match");
        } else {
          setOpponentName(match.players[0].username);
          setPageTitle("Waiting for Party Leader");
        }
      } 
    });
  }, []);

  return (
    <>
      <div className="grow flex flex-col justify-center items-center gap-16">
        <h1 className="text-8xl italic font-bold text-center">
          {pageTitle}
        </h1>
        <h2 className="text-2xl font-bold">Room ID: {matchState._id}</h2>
        <div className="w-2/3 flex flex-col gap-8 md:flex-row md:gap-0 md:justify-evenly">
          <Combatant number={1} username={userName} />
          <Combatant number={2} username={opponentName} />
        </div>
        {pageTitle=="Please Start the Match" && 
          <div className="w-2/3 max-w-[900px]">
            <Link to={`/game/${matchState._id}`} state={{match:matchState}}>
              <Button className="w-full">Start</Button>
            </Link>
          </div>
        }
      </div>
    </>
  );
};

export default WaitingRoom;
