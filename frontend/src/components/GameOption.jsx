import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useContext, useState } from "react";
import { UsernameContext } from "../App";
import socket from "../socketConfig";

const GameOption = ({type}) => {
  const navigate = useNavigate();
  const { userName, setUserName } = useContext(UsernameContext);
  const [ roomIDInput, setRoomIDInput ] = useState("");

  const onIDChange = e => {
    setRoomIDInput(e.target.value);
  }

  const createGame = e => {
    e.preventDefault();
    socket.emit('create-game', userName);
    navigate("/waiting");
  };

  const joinGame = e => {
    e.preventDefault();
    socket.emit('join-game', {matchID: roomIDInput, userName});
    navigate("/waiting");
  };

  const setButtonType = (type) => {
    if (type == "create") {
      return (
        // <Link to="/waiting">
        //   <Button className="w-[145px]">Create Room</Button>
        // </Link>
        <Button className="w-[145px]" onClick={createGame}>Create Room</Button>
      );
    } else if (type == "join") {
      return (
        <form onSubmit={joinGame}>
          <input
            type="text"
            placeholder="123456"
            className="h-[60px] w-[145px] bg-gray-400 font-semibold italic text-lg placeholder-gray-600 text-center"
            onChange={onIDChange}
            value={roomIDInput}
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
