const ProfileHeader = () => {
  return (
    <div className="h-[150px] w-dvh mt-16 mb-10 ml-[5%] flex gap-8 items-center">
      <img
        className="h-full"
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
      />
      <ul>
        <li>
          <h2 className="text-5xl font-bold mb-4">Username</h2>
        </li>
        <li className="text-xl">0 W / 0 L</li>
        <li className="text-xl">Account Created: MM/DD/YYYY</li>
      </ul>
    </div>
  );
};

export default ProfileHeader;
