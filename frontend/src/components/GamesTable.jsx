import GameEntry from "./GameEntry";

const GamesTable = () => {
  return (
    <div>
      <table className="w-[90%] my-5 ml-[5%]">
        <GameEntry
          winStatus="win"
          userName="User1"
          opponentName="User2"
          difficulty="Easy"
          time="X:XX"
          date="MM/DD/YYYY"
        />
        <GameEntry
          winStatus="lose"
          userName="User1"
          opponentName="User2"
          difficulty="Easy"
          time="X:XX"
          date="MM/DD/YYYY"
        />
      </table>
    </div>
  );
};

export default GamesTable;
