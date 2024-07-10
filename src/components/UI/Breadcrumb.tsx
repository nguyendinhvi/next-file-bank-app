import { IconHome } from "@/resources/icon";
import React, { FC } from "react";

interface IProps {}

const Breadcrumb: FC<IProps> = ({}) => {
  return (
    <div className="border-b-[1px] gap-2 w-full px-6 py-3 flex">
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
  );
};

export default Breadcrumb;
