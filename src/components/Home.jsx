import GameOption from "./GameOption";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="w-dvw h-dvh flex flex-col justify-center items-center gap-16">
        <h1 className="text-center text-8xl italic font-bold">Sudoku Racer</h1>
        <div className="flex gap-8">
          <GameOption type="create" />
          <GameOption type="join" />
        </div>
      </div>
    </div>
  );
};

export default Home;
