import { classNames } from "@/utils/helper";
import React, { ButtonHTMLAttributes, FC, HTMLAttributes } from "react";

interface IProps {
  attributes?: HTMLAttributes<HTMLButtonElement>;
  className?: string;
  text?: string;
  onClick?: (val?: any) => void;
  type?: "submit" | "reset" | "button" | undefined;
}

const FButton: FC<IProps> = ({
  attributes,
  className = "",
  text = "",
  type = "button",
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(
        "bg-blue-500 text-white w-full rounded-md px-4 py-2",
        className
      )}
    >
      {text}
    </button>
  );
};

export default FButton;
