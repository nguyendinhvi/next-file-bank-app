import React, { FC } from "react";
import FolderMenuItem from "./FolderMenuItem";

interface IProps {}

const FolderTreeChild: FC<IProps> = ({}) => {
  return (
    <div className="flex">
      <div className="flex items-center">
        <div className="border-l-[1px] h-full"></div>
        <div className="w-2 border-t-[1px]"></div>
      </div>
      <FolderMenuItem name="Assets and images" />
    </div>
  );
};

export default FolderTreeChild;
