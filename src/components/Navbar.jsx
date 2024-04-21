import { useContext, useState } from "react";
import { UsernameContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import LoginPopover from "./LoginPopover";

const Navbar = () => {
  const { userName, setUserName } = useContext(UsernameContext);
  const [isHidden, setIsHidden] = useState(true);
  const navigate = useNavigate();

  const logOut = () => {
    setUserName(null);
    document.cookie = `name=; SameSite=Strict; path=/`;
    document.cookie = `isLoggedIn=${false}; SameSite=Strict; path=/`;
    navigate("/");
  };

  const createLoginProfile = () => {
    if (userName === null) {
      return (
        <li className="relative">
          <h3
            className="text-white h-[64px] py-4 px-6 cursor-pointer font-semibold text-xl hover:bg-sky-200 select-none"
            onClick={() => setIsHidden(!isHidden)}
          >
            Login
          </h3>
        </li>
      );
    } else {
      return (
        <li className="flex">
          <Link to={`/profile/${userName}`}>
            <h3 className="text-white h-[64px] py-4 px-6 cursor-pointer font-semibold text-xl hover:bg-sky-200 select-none">
              {userName}
            </h3>
          </Link>
          <h3
            onClick={logOut}
            className="text-white h-[64px] py-4 px-6 cursor-pointer font-semibold text-xl hover:bg-sky-200 select-none"
          >
            Logout
          </h3>
        </li>
      );
    }
  };

  return (
    <div className="w-dvw bg-sky-300">
      <ul className="flex justify-between">
        <Link to="/">
          <li>
            <h3 className="text-white h-[64px] py-4 px-6 font-bold italic text-2xl hover:bg-sky-200 select-none">
              Sudoku Racer
            </h3>
          </li>
        </Link>
        {createLoginProfile()}
        <LoginPopover hidden={isHidden} setIsHidden={setIsHidden} />
      </ul>
    </div>
  );
};

export default Navbar;
