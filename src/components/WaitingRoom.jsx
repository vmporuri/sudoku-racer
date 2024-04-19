import { Link } from "react-router-dom";
import Combatant from "./Combatant";

const WaitingRoom = () => {
  let roomID = 123456;
  let username = "...";
  let opponentName = "...";

  return (
    <>
      <div className="h-dvh flex flex-col justify-center items-center gap-16">
        <h1 className="text-8xl italic font-bold text-center">
          Waiting for Opponent
        </h1>
        <h2 className="text-2xl font-bold">Room ID: {roomID}</h2>
        <div className="grid grid-cols-2 grid-rows-1 gap-16">
          <Combatant number={1} username={username} />
          <Combatant number={2} username={opponentName} />
        </div>
        <Link
          to="/game"
          className="w-2/3 py-4 bg-gray-400 font-bold text-xl hover:bg-gray-300 text-center"
        >
          <button>Start</button>
        </Link>
      </div>
    </>
  );
};

export default WaitingRoom;
