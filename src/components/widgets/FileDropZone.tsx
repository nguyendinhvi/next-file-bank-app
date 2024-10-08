/* eslint-disable @next/next/no-img-element */
import { useModalContext } from "@/contexts/modal-context";
import React, { useState } from "react";
import FModal from "../core/Modal";
import { IconChevronUp, IconPause } from "@/resources/icon";
import FileIcon from "./FileIcon";
import { FileAPI } from "@/apis/file";

const FileDropZone: React.FC = () => {
  const [droppedFiles, setDroppedFiles] = useState<File[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { openModal } = useModalContext();

  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    try {
      console.log("event :", event.target);
      event.preventDefault();
      const files = Array.from(event.dataTransfer.files) as File[];
      console.log("files :", files[0]);

      const formData = new FormData();
      formData.append("file", files[0]);

      const res = await FileAPI.upload(formData);

      console.log("res :", res);
      setDroppedFiles(files);
      setIsOpen(true);
    } catch (error) {
      console.log("error :", error);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <label htmlFor="choose">
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="w-full h-[300px] rounded cursor-pointer border-2 border-gray-600 border-dashed mt-4"
        >
          {droppedFiles.length === 0 ? (
            <p>Drag and drop files here</p>
          ) : (
            <ul></ul>
          )}
        </div>
        <input
          type="file"
          multiple
          hidden
          id="choose"
          onChange={async (e) => {
            const files: any = Array.from(e.target.files as any);

            if (!e.target.files) return;
            const formData = new FormData();
            formData.append("file", e.target.files?.[0]);

            const res = await FileAPI.upload(formData);

            setDroppedFiles(files);
            setIsOpen(true);
          }}
        />
      </label>

      <FModal isVisible={isOpen} onCancel={() => setIsOpen(false)}>
        <div className="p-2">
          <h3 className="flex justify-between mb-2">
            <p className="text-base font-medium">Uploading files</p>
            <div className="flex items-center gap-3">
              <span>6%</span>
              <div className="inline rounded-full flex-center bg-gray-100 size-5">
                <IconChevronUp className="size-3 rotate-180" />
              </div>
            </div>
          </h3>

          <div className="text-xs leading-[22px] text-gray-600 flex items-end gap-2 mb-2">
            <div className="text-base">3 Files</div>
            <span>/</span>
            <p>2.5 MB/s - 7.1 MB of 16.4 MB</p>
            <span>/</span>
            <p>5 second left</p>
          </div>

          {/* files */}
          <div className="flex flex-col gap-2">
            {droppedFiles?.map((file, i) => (
              <div key={i} className="p-2 rounded-md flex gap-2 border">
                <div className="size-12 min-w-12 flex-center">
                  <FileIcon file={file} />
                </div>
                <div className="flex-1 flex items-center justify-between gap-2">
                  <div className="flex flex-1 flex-col justify-between h-full gap-1">
                    <p className="text-sm w-full line-clamp-1">{file.name}</p>
                    <div className="flex justify-between items-center">
                      <p className="flex text-gray-600 text-xs">
                        <p>2.5 MB/s - 7.1 MB of 16.4 MB</p>
                        <span>/</span>
                        <p>5 second left</p>
                      </p>
                      <p className="text-xs">75%</p>
                    </div>
                    <div className="bg-gray-100 rounded-full w-full h-1 relative overflow-hidden">
                      <div className="bg-blue-500 w-1/2 h-full rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-full p-1">
                    <IconPause className="text-gray-800 size-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FModal>
    </>
  );
};

export default FileDropZone;
