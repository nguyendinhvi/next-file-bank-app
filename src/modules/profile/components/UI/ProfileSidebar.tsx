import React, { FC } from "react";

import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { IconFolderBlue, IconChevronUp } from "@/resources/icon";
import FolderMenuItem from "../folder/FolderMenuItem";

interface IProps {}

const ProfileSidebar: FC<IProps> = ({}) => {
  return (
    <div className="p-4 border-r-[1px] w-[300px]">
      {/*  */}
      <div className="flex mb-1 justify-between w-full min-w-[200px] rounded-md hover:bg-gray-100 px-2 py-3 cursor-pointer items-center gap-2">
        <div className="flex gap-2 items-center">
          <IconFolderBlue className="size-5" />
          <p className="font-medium">My Files</p>
        </div>
        <div className="flex gap-1 items-center">
          <div className="size-5 bg-gray-100 font-medium rounded-full flex items-center justify-center text-xs text-gray-700">
            4
          </div>
          <IconChevronUp className="size-4" />
        </div>
      </div>
      {/* folders */}
      <div className="pl-2">
        <FolderMenuItem name="My Documentation" />
        <div className="pl-2">
          <div className="flex">
            <div className="flex items-center">
              <div className="border-l-[1px] h-full"></div>
              <div className="w-2 border-t-[1px]"></div>
            </div>
            <FolderMenuItem name="Assets and images asdkask" />
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
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
