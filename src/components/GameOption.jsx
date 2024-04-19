import { Link, useNavigate } from "react-router-dom";

const GameOption = ({ type }) => {
  const navigate = useNavigate();

  const goToGame = () => {
    navigate("/game");
  };

  const setButtonType = (type) => {
    if (type == "create") {
      return (
        <Link to="/waiting">
          <button className="w-[145px] bg-gray-400 text-lg font-semibold italic p-4 hover:bg-gray-300">
            Create Room
          </button>
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
