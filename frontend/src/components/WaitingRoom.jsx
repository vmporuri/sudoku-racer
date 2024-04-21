import { Link } from "react-router-dom";
import Combatant from "./Combatant";
import Button from "./Button";

const WaitingRoom = () => {
  let roomID = 123456;
  let username = "...";
  let opponentName = "...";

  return (
    <>
      <div className="grow flex flex-col justify-center items-center gap-16">
        <h1 className="text-8xl italic font-bold text-center">
          Waiting for Opponent
        </h1>
        <h2 className="text-2xl font-bold">Room ID: {roomID}</h2>
        <div className="w-2/3 flex flex-col gap-8 md:flex-row md:gap-0 md:justify-evenly">
          <Combatant number={1} username={username} />
          <Combatant number={2} username={opponentName} />
        </div>
        <div className="w-2/3 max-w-[900px]">
          <Link to={`/game/${roomID}`}>
            <Button className="w-full">Start</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default WaitingRoom;
