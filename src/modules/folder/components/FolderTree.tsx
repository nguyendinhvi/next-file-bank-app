import { Folder } from "@/@interfaces/model/folder";
import React, { FC } from "react";
import FolderMenuItem from "./FolderMenuItem";

interface IProps {
  folders: Folder[] | undefined;
}

const FolderTree: FC<IProps> = ({ folders }) => {
  return (
    <div className="pl-2">
      {folders?.map(({ id, name }) => (
        <FolderMenuItem key={id} name={name} />
      ))}
      {/* <div className="pl-2">
        <div className="flex">
          <div className="flex items-center">
            <div className="border-l-[1px] h-full"></div>
            <div className="w-2 border-t-[1px]"></div>
          </div>
          <FolderMenuItem name="Assets and images" />
        </div>
        <div className="flex">
          <div className="flex items-center">
            <div className="border-l-[1px] h-full"></div>
            <div className="w-2 border-t-[1px]"></div>
          </div>
          <FolderMenuItem />
        </div>
        <div className="flex">
          <div className="flex">
            <div className="border-l-[1px] w-2 border-b-[1px] h-1/2"></div>
          </div>
          <FolderMenuItem />
        </div>
      </div> */}
    </div>
  );
};

export default FolderTree;
