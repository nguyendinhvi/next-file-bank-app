/* eslint-disable react/display-name */
import { register } from "module";
import React, { FC, forwardRef, HTMLInputTypeAttribute, useId } from "react";
import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface IProps {
  label?: string;
  type?: HTMLInputTypeAttribute;
  error?: string;
  register: UseFormRegisterReturn<any>;
}

const FormInput: FC<IProps> = forwardRef(({ error, register, label, type }) => {
  const id = useId();

  const attributes = { type };

  return (
    <div className="space-y-1 flex-1 error">
      <label
        htmlFor={id}
        className="flex justify-between text-sm font-medium leading-6 text-slate-900 dark:text-white"
      >
        {label}
      </label>
      <div className="w-full">
        <div className="flex items-center relative w-full">
          <input
            {...attributes}
            placeholder={label}
            {...register}
            className={twMerge(
              "block w-full border rounded-md shadow-sm appearance-none  focus:outline-2 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 sm:text-sm sm:leading-6 dark:bg-slate-800 focus:outline-blue-400 px-3 py-[11px]",
              error && "border-red-600"
            )}
          />
        </div>
        {error && (
          <span className="text-xs text-red-400 leading-2">{error}</span>
        )}
      </div>
    </div>
  );
});

export default FormInput;
