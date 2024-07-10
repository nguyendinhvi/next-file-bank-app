import {
  IconChevronUp,
  IconFileBlack,
  IconFolder,
  IconFolderBlack,
} from "@/resources/icon";
import React, { FC } from "react";
import FolderItem from "../components/folder/FolderItem";
import Breadcrumb from "@/components/UI/Breadcrumb";
import ProfileSidebar from "../components/UI/ProfileSidebar";
import FileDropZone from "@/components/widgets/FileDropZone";

interface IProps {}

const MainProfileDetail: FC<IProps> = ({}) => {
  return (
    <div className="flex h-full min-h-[calc(100vh_-_57px)]">
      <ProfileSidebar />
      <div className="flex-1">
        <Breadcrumb />
        <div className="p-6">
          <h2 className="text-gray-900 text-xl mb-2">
            Folders <IconChevronUp className="inline size-4 rotate-180 ml-2" />{" "}
          </h2>
          {/* list  */}
          <div className="grid grid-cols-8 gap-2 mb-6">
            <FolderItem />
            <FolderItem />
            <FolderItem />
            <FolderItem />
          </div>

          <h2 className="text-gray-900 text-xl mb-2">
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
          </div>

          <FileDropZone />
        </div>
      </div>
    </div>
  );
};

export default MainProfileDetail;
