import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

function GameEntry({
  winStatus,
  userName,
  opponentName,
  difficulty,
  time,
  date,
}) {
  const winIcon = (winStatus) => {
    if (winStatus == "win") {
      return <FaPlusCircle color="#029220" title="Win" className="text-2xl" />;
    } else if (winStatus == "lose") {
      return <FaMinusCircle color="red" title="Lose" className="text-2xl" />;
    }
  };

  return (
    <tr className="odd:bg-gray-200 even:bg-sky-200">
      <td className="py-4 w-[8%]">
        <div className="flex justify-center">{winIcon(winStatus)}</div>
      </td>
      <td className="py-4 w-[32%] text-xl ">
        {userName} vs. {opponentName}
      </td>
      <td className="py-4 w-[20%] text-center text-xl">{difficulty}</td>
      <td className="py-4 w-[20%] text-center text-xl">{time}</td>
      <td className="py-4 w-[20%] text-center text-xl">{date}</td>
    </tr>
  );
}

export default GameEntry;
