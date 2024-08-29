import { Folder } from "@/@interfaces/model/folder";
import { Nullable } from "@/@types";
import Button from "@/components/core/Button";
import { useModalContext } from "@/contexts/modal-context";
import { IconHome, IconPlusCircle } from "@/resources/icon";
import React, { FC } from "react";

interface IProps {
  folder: Nullable<Folder>;
}

const FolderRightHeader: FC<IProps> = ({ folder }) => {
  const { openModal } = useModalContext();

  const handleOpenModal = () => {
    openModal(
      "create_folder",
      {
        title: "Create folder",
      },
      { folder }
    );
  };

  return (
    <div className="border-b-[1px] w-full px-6 py-3 flex justify-between">
      <div className="flex gap-2">
        <div className="flex items-center">
          <IconHome className="inline mr-2 size-4" />
          <span>/</span>
        </div>
        <div className="flex gap-2 items-center">
          <span>Projects</span>
          <span>/</span>
        </div>
        <div className="flex gap-2 items-center">
          <span>Assets and media</span>
        </div>
      </div>

      <div className="flex">
        <button
          onClick={handleOpenModal}
          className="flex items-center px-2 py-1 hover:bg-gray-100 rounded-md gap-1 text-sm"
        >
          <IconPlusCircle className="size-6 text-green-500" />
          <p className="">Create folder</p>
        </button>
        <Button
          feature="file"
          className="flex items-center px-2 py-1 hover:bg-gray-100 rounded-md gap-1 text-sm"
        >
          <IconPlusCircle className="size-6 text-blue-500" />
          <p className="">Upload files</p>
        </Button>
      </div>
    </div>
  );
};

export default FolderRightHeader;
