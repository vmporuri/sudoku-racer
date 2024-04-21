import { Link } from "react-router-dom";
import LoginPopover from "./LoginPopover";
import { useState } from "react";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className="w-dvw bg-sky-300">
      <ul className="flex justify-between">
        <Link to="/">
          <li>
            <h3 className="text-white h-[64px] py-4 px-6 font-bold italic text-2xl hover:bg-sky-200">
              Sudoku Racer
            </h3>
          </li>
        </Link>
        <li className="relative">
          <h3
            className="text-white h-[64px] py-4 px-6 cursor-pointer font-semibold text-xl hover:bg-sky-200"
            onClick={() => setIsHidden(!isHidden)}
          >
            Login
          </h3>
        </li>
        <LoginPopover hidden={isHidden} setIsHidden={setIsHidden} />
      </ul>
    </div>
  );
};

export default Navbar;
