import {
  IconChevronUp,
  IconFileBlack,
  IconFolder,
  IconFolderBlack,
} from "@/resources/icon";
import React, { FC, useEffect, useState } from "react";
import FolderItem from "../folder/FolderItem";
import FolderLeftPanel from "../folder/ui/FolderLeftPanel";
import { useFetch } from "@/hooks/use-fetch";
import { getMyFolder } from "@/apis/folder";
import { Folder } from "@/@interfaces/model/folder";
import FolderRightHeader from "../folder/ui/FolderRightHeader";
import FileDropZone from "../widgets/FileDropZone";
import useApi from "@/hooks/use-api";
import { getMyFiles } from "@/apis/file";

interface IProps {}

const ProfileDetailMain: FC<IProps> = ({}) => {
  const { data: folders } = useApi(
    () => getMyFolder({ params: { level: 1 } }),
    []
  );
  const { data: files } = useApi(
    () => getMyFiles({ params: { level: 1 } }),
    []
  );

  return (
    <div className="flex flex-1 h-full">
      <FolderLeftPanel folders={folders || []} />
      <div className="flex-1">
        <FolderRightHeader folder={null} />
        <div className="p-6">
          <h2 className="text-gray-900 text-xl mb-2">Folders</h2>
          {/* list  */}
          <div
            className="grid gap-2 mb-6
                       grid-cols-8 max-[1600px]:grid-cols-7 max-[1400px]:grid-cols-6 max-[1200px]:grid-cols-5 max-[1000px]:grid-cols-4 max-[800px]:grid-cols-3 max-[600px]:grid-cols-2"
          >
            {folders?.map((f) => (
              <FolderItem key={f?.id} folder={f} />
            ))}
          </div>

          {/* <h2 className="text-gray-900 text-xl mb-2">
            Files <IconChevronUp className="inline size-4 rotate-180 ml-2" />{" "}
          </h2>

          <div className="grid grid-cols-8 gap-2">
            <FolderItem />
            <FolderItem />
            <FolderItem />
            <FolderItem />
            <FolderItem />
            <FolderItem />
            <FolderItem />
          </div> */}

          <FileDropZone />
        </div>
      </div>
    </div>
  );
};

export default ProfileDetailMain;
