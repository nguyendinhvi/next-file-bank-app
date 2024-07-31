import { useModalContext } from "@/contexts/modal-context";
import { IconHome, IconPlusCircle } from "@/resources/icon";
import React, { FC } from "react";

interface IProps {}

const Breadcrumb: FC<IProps> = ({}) => {
  const { openModal } = useModalContext();
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

      <button
        onClick={() => {
          openModal("create_folder", {
            title: "Create folder",
            // showFooter: true,
            // onConfirm: () => {},
          });
        }}
        className="flex items-center px-2 py-1 hover:bg-gray-100 rounded-md gap-1 text-sm"
      >
        <IconPlusCircle className="size-6 text-green-500" />
        <p className="">Create folder</p>
      </button>
    </div>
  );
};

export default Breadcrumb;
