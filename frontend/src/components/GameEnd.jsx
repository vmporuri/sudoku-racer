import Button from "./Button";
import { Link, useLocation } from "react-router-dom";

const GameEnd = () => {
  const location = useLocation();
  const wonGame = location.state.wonGame;

  return (
    <div className="w-dvw grow flex flex-col justify-center items-center gap-16">
      <h1 className="text-center text-8xl italic font-bold">
        You {wonGame ? "won" : "lost"}.
      </h1>
      <Link to="/">
        <Button>Return to Home</Button>
      </Link>
    </div>
  );
};

export default GameEnd;
