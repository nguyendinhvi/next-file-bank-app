import React, { FC, PropsWithChildren, ReactElement } from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

interface IProps {
  content: ReactElement;
}

const FPopover: FC<PropsWithChildren<IProps>> = ({ content, children }) => {
  return (
    <div className="flex gap-8">
      <Popover>
        <PopoverButton className="block text-sm/6 font-semibold focus:outline-none data-[active]:text-gray-800 data-[hover]:text-gray-800 data-[focus]:outline-1 data-[focus]:outline-white text-black">
          {children}
        </PopoverButton>
        <PopoverPanel
          transition
          anchor="bottom"
          className="divide-y bg-white shadow-lg rounded-xl text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
        >
          {content}
        </PopoverPanel>
      </Popover>
    </div>
  );
};

export default FPopover;
