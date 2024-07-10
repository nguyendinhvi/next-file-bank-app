import { IconFolder, IconFolderBlack, IconFileBlack } from "@/resources/icon";
import React, { FC } from "react";

interface IProps {}

const FolderItem: FC<IProps> = ({}) => {
  return (
    <div className="border rounded p-2">
      <div className="relative pt-[80%]">
        <div className="rounded absolute top-0 left-0 size-full bg-gray-100 flex-center">
          <IconFolder className="size-16" />
        </div>
      </div>

      <p className="text-gray-900 text-sm font-medium py-1">Desktop files</p>

      <div className="text-gray-700 flex items-center gap-2">
        <div>
          <IconFolderBlack className="inline text-gray-700 size-3 mr-1" />
          <span className="text-[10px]">12</span>
        </div>
        <div>
          <IconFileBlack className="inline size-3 mr-1" />
          <span className="text-[10px]">12</span>
        </div>
      </div>
    </div>
  );
};

export default FolderItem;
