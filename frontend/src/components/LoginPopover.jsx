import { useContext } from "react";
import { UsernameContext } from "../App";

function LoginPopover({ hidden, setIsHidden }) {
  const { userName, setUserName } = useContext(UsernameContext);

  if (hidden) {
    return false;
  }

  const submitLoginInfo = (e) => {
    e.preventDefault();
    setIsHidden(true);
    setUserName(e.target.userName.value);
    document.cookie = `name=${e.target.userName.value}; SameSite=Strict; path=/`;
    document.cookie = `isLoggedIn=${true}; SameSite=Strict; path=/`;
  };

  return (
    <div className="absolute top-[72px] right-[8px] border-2 rounded-lg border-black bg-gray-200 text-black p-4 pointer-events-auto">
      <form onSubmit={submitLoginInfo} className="flex flex-col gap-4">
        <input
          type="text"
          name="userName"
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
