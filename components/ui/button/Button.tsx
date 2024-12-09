import React from "react";

type ButtonType = "button" | "submit" | "reset";
interface ButtonProps {
  label: string;
  type: ButtonType;
  variant?: "lienar" | "outlined" | "primary";
  onClick?: () => void | undefined;
}
const Button = ({ label, type, onClick, variant }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${
        variant === "lienar"
          ? "bg-red-400 text-white border border-white hover:bg-white hover:text-red-400"
          : variant === "outlined"
          ? "border border-red-400 text-red-400 "
          : "bg-red-400 text-white"
      } p-2 rounded`}
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
