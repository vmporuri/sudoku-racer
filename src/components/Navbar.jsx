import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="absolute w-dvw bg-sky-300">
      <ul className="flex justify-between">
        <Link to="/">
          <li className="text-white py-4 px-6 font-bold italic text-2xl hover:bg-sky-200">
            Sudoku Racer
          </li>
        </Link>
        <li className="text-white py-4 px-6 font-semibold text-xl hover:bg-sky-200">
          Login
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
