import GameOption from "./GameOption";

const Home = () => {
  return (
    <div className="w-dvw grow flex flex-col justify-center items-center gap-16">
      <h1 className="text-center text-8xl italic font-bold">Sudoku Racer</h1>
      <div className="flex gap-8 md:gap-36">
        <GameOption type="create" />
        <GameOption type="join" />
      </div>
    </div>
  );
};

export default Home;
