import { classNames } from "@/utils/helper";
import React, {
  AriaAttributes,
  ButtonHTMLAttributes,
  FC,
  HTMLAttributes,
  InputHTMLAttributes,
  PropsWithChildren,
  useId,
} from "react";

interface IProps {
  attributes?: HTMLAttributes<HTMLButtonElement>;
  className?: string;
  text?: string;
  onClick?: (val?: any) => void;
  type?: "submit" | "reset" | "button" | undefined;
  feature?: "file" | "none ";
  inputAttributes?: InputHTMLAttributes<any>;
}

const Button: FC<PropsWithChildren<IProps>> = ({
  attributes,
  className = "",
  text = "",
  type = "button",
  feature = "none",
  onClick,
  children,
}) => {
  const id = useId();

  if (feature === "file") {
    return (
      <>
        <label htmlFor={id} onClick={onClick} className={classNames(className)}>
          {children}
        </label>
        <input type="file" hidden multiple id={id} />
      </>
    );
  }

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

export default Button;
