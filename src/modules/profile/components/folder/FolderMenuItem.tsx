import { IconChevronUp, IconFolder } from "@/resources/icon";
import React, { FC } from "react";

interface IProps {
  name?: string;
}

const FolderMenuItem: FC<IProps> = ({ name = "Folder" }) => {
  return (
    <div className="flex mb-1 justify-between w-full min-w-[200px] rounded-md hover:bg-gray-100 px-2 py-3 cursor-pointer items-center gap-2">
      <div className="flex gap-2 items-center">
        <IconFolder className="size-5 min-w-5" />
        <p className="font-medium line-clamp-1">{name}</p>
      </div>
      <div className="flex items-center gap-1">
        <div className=" size-5 bg-gray-100 font-medium rounded-full flex items-center justify-center text-xs text-gray-700">
          3
        </div>
        <IconChevronUp className="size-4" />
      </div>
    </div>
  );
};

export default FolderMenuItem;
