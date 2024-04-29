const Sidebar = () => {
  return (
    <div className="xl:w-[350px] xl:max-h-[650px] xl:mr-0 mx-4 border-2 border-black p-4 flex flex-col gap-8 overflow-scroll">
      <div>
        <h2 className="font-bold text-xl">Rules:</h2>
        <div className="text-lg">
          <p>
            A Sudoku match is played on a 9 by 9 grid composed of 9 different 3
            by 3 regions. The goal of the game is to place a number from 1 to 9
            in each cell in the grid such that the following 3 conditions are
            met:
          </p>
          <ol className="list-decimal list-inside">
            <li className="pl-4">
              Each 3 by 3 region contains all digits from 1 to 9
            </li>
            <li className="pl-4">
              Each column in the 9 by 9 grid contain all digits from 1 to 9
            </li>
            <li className="pl-4">
              Each row in the 9 by 9 grid has all contain from 1 to 9
            </li>
          </ol>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-xl">Tips/Shortcuts</h2>
        <ul className="list-disc text-lg list-inside">
          <li>
            Use Candidate mode to take notes on what values could go in each
            cell
          </li>
          <li>
            Your number keys on your keyboard can also be used to place digits
          </li>
          <li>The “S” key will submit your answer</li>
          <li>
            The Backspace and the Zero key will delete the contents of a cell
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
