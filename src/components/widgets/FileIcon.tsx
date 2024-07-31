/* eslint-disable @next/next/no-img-element */
import { IconFileDoc, IconFileExcel } from "@/resources/icon";
import React, { FC } from "react";

interface IProps {
  file: File;
}

const FileIcon: FC<IProps> = ({ file }) => {
  const fileType = (file?.name || "").split(".")?.pop()?.toLowerCase();
  return (
    <>
      {file.type?.includes("image") && (
        <img
          src={URL.createObjectURL(file)}
          className="size-full object-cover rounded-sm"
          alt=""
        />
      )}

      {fileType === "xlsx" && <IconFileExcel className="size-12" />}
      {fileType === "docx" && <IconFileDoc className="size-12" />}
    </>
  );
};

export default FileIcon;
