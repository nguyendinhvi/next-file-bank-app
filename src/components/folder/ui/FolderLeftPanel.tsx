import React, { FC } from "react";

import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { IconFolderBlue, IconChevronUp } from "@/resources/icon";
import FolderMenuItem from "../FolderMenuItem";
import Button from "@/components/core/Button";
import { useModalContext } from "@/contexts/modal-context";
import { Folder } from "@/@interfaces/model/folder";
import FolderTree from "../FolderTree";

interface IProps {
  folders: Folder[] | undefined;
}

const FolderLeftPanel: FC<IProps> = ({ folders }) => {
  const { openModal } = useModalContext();

  return (
    <div className="p-4 border-r-[1px] w-[300px]">
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
      <FolderTree folders={folders} />

      {/* tree */}
    </div>
  );
};

export default FolderLeftPanel;
