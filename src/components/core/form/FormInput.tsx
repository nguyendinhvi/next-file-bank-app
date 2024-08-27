import React, { FC, HTMLInputTypeAttribute, useId } from "react";

interface IProps {
  label?: string;
  name?: string;
  type?: HTMLInputTypeAttribute;
  value?: string;
}

const FormInput: FC<IProps> = ({ label, value, name, type = "text" }) => {
  const id = useId();

  const attributes = { value, name, type };

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
            className="block w-full border rounded-md shadow-sm appearance-none  focus:outline-2 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 sm:text-sm sm:leading-6 dark:bg-slate-800 focus:outline-blue-400 px-3 py-[11px]"
          />
        </div>
        {/* <span className="text-xs text-red-400 leading-2">
          Full name is too short.
        </span> */}
      </div>
    </div>
  );
};

export default FormInput;
