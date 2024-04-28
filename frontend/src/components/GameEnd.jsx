import { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const GameEnd = () => {
  const [wonGame, setWonGame] = useState(null);

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
