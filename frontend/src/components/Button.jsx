import { twMerge } from "tailwind-merge";

const Button = ({ children, className }) => {
  const classes = twMerge(
    "bg-gray-400 text-lg font-semibold italic p-4 hover:bg-gray-300",
    className,
  );
  return <button className={classes}>{children}</button>;
};

export default Button;
