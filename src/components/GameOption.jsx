import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

const GameOption = ({ type }) => {
  const navigate = useNavigate();

  const goToGame = () => {
    navigate("/game");
  };

  const setButtonType = (type) => {
    if (type == "create") {
      return (
        <Link to="/waiting">
          <Button className="w-[145px]">Create Room</Button>
        </Link>
      );
    } else if (type == "join") {
      return (
        <form onSubmit={goToGame}>
          <input
            type="text"
            placeholder="123456"
            className="h-[60px] w-[145px] bg-gray-400 font-semibold italic text-lg placeholder-gray-600 text-center"
          />
        </form>
      );
    }
  };

  return (
    <div className="grid place-items-center gap-2">
      <h2 className="text-xl font-bold">
        {type == "create" ? "HOST" : "PLAY"}
      </h2>
      {setButtonType(type)}
    </div>
  );
};

export default GameOption;
