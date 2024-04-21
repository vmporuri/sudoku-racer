function LoginPopover({ hidden, setIsHidden }) {
  if (hidden) {
    return false;
  }

  const submitLoginInfo = (e) => {
    e.preventDefault();
    setIsHidden(true);
  };

  return (
    <div className="absolute top-[72px] right-[8px] border-2 rounded-lg border-black bg-gray-200 text-black p-4 pointer-events-auto">
      <form onSubmit={submitLoginInfo} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          className="px-2 border-2 border-black font-normal"
        />
        <input
          type="submit"
          value="Login"
          className="bg-gray-400 italic font-semibold hover:bg-gray-300 cursor-pointer"
        />
      </form>
    </div>
  );
}

export default LoginPopover;
