const ProgressBar = ({ opponentName, progress }) => {
  return (
    <div className="mx-16">
      <h2 className="text-center mb-1">{opponentName}'s Progress</h2>
      <div className="h-4 w-[550px] rounded-lg bg-gray-200">
        <div
          className={`h-4 rounded-lg overflow-hidden bg-[#f8919e] text-center text-xs`}
          style={{ width: `${progress}%` }}
        >
          {progress > 6 ? `${progress}%` : ""}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
