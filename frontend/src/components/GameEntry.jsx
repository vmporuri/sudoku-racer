import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

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
        <Link to={`/profile/${userName}`} className="hover:text-gray-500">
          {userName}
        </Link>
        <span> vs. </span>
        <Link to={`/profile/${opponentName}`} className="hover:text-gray-500">
          {opponentName}
        </Link>
      </td>
      <td className="py-4 w-[20%] text-center text-xl">{difficulty}</td>
      <td className="py-4 w-[20%] text-center text-xl">{time}</td>
      <td className="py-4 w-[20%] text-center text-xl">{date}</td>
    </tr>
  );
}

export default GameEntry;
