import { twMerge } from "tailwind-merge";

const Button = ({ children, className, onClick }) => {
  const classes = twMerge(
    "bg-gray-400 text-lg font-semibold italic p-4 hover:bg-gray-300",
    className,
  );
  return <button className={classes} onClick={onClick}>{children}</button>;
};

export default Button;
