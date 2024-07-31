import {
  IconChevronUp,
  IconFileBlack,
  IconFolder,
  IconFolderBlack,
} from "@/resources/icon";
import React, { FC } from "react";
import FolderItem from "../../folder/components/FolderItem";
import Breadcrumb from "@/components/UI/Breadcrumb";
import ProfileSidebar from "../components/UI/ProfileSidebar";
import FileDropZone from "@/components/widgets/FileDropZone";
import { useFetch } from "@/hooks/use-fetch";
import { getMyFolder } from "@/apis/folder";
import { Folder } from "@/@interfaces/model/folder";

interface IProps {}

const MainProfileDetail: FC<IProps> = ({}) => {
  const { data: folders } = useFetch<Folder[]>(getMyFolder);

  return (
    <div className="flex flex-1 h-full">
      <ProfileSidebar folders={folders} />
      <div className="flex-1">
        <Breadcrumb />
        <div className="p-6">
          <h2 className="text-gray-900 text-xl mb-2">Folders</h2>
          {/* list  */}
          <div className="grid grid-cols-8 gap-2 mb-6">
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

          {/* <FileDropZone /> */}
        </div>
      </div>
    </div>
  );
};

export default MainProfileDetail;
