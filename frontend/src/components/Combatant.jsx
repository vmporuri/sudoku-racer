const Combatant = ({ number, username }) => {
  return (
    <div className="grid place-items-center gap-2">
      <h3 className="text-xl">Player {number}:</h3>
      <p className="text-xl">{username}</p>
    </div>
  );
};

export default Combatant;
