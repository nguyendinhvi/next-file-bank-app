/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from "react";
import { Folder } from "@/@interfaces/model/folder";
import { useRouter } from "next/router";
import { API } from "@/apis";
import FolderLeftPanel from "@/components/folder/ui/FolderLeftPanel";
import FolderRightHeader from "@/components/folder/ui/FolderRightHeader";
import { Nullable } from "@/@types";
import { usePropsStore } from "@/stores/props.store";
import FolderItem from "../folder/FolderItem";
import { arrayHp } from "@/helpers/array";
import { twMerge } from "tailwind-merge";

interface IProps {
  folder: Nullable<Folder>;
}

const FolderDetailMain: FC<IProps> = ({ folder }) => {
  const { query } = useRouter();
  const { setFolderDetailProps, folderDetailProps } = usePropsStore();

  useEffect(() => {
    setFolderDetailProps(folder);
  }, []);

  // const [folder, setFolder] = useState<Folder>();

  // const id = String(query?.id) || "";

  // const { data: folder } = useFetch<Folder>(
  //   getFolderById(query?.id as string),
  //   [query?.id]
  // );

  // const loadData = async () => {
  //   try {
  //     const data = await API.FOLDER.getFolderById(id);
  //     setFolder(data);
  //   } catch (error) {}
  // };

  // useEffect(() => {
  //   if (id) loadData();
  // }, [id]);

  return (
    <div className="flex flex-1 h-full">
      <FolderLeftPanel folders={[]} />
      <div className="flex-1">
        <FolderRightHeader folder={folderDetailProps} />
        <div className="p-6">
          <h2 className="text-gray-900 text-xl mb-2">Folders</h2>
          {arrayHp.isEmpty(folder?.children) && (
            <div className="py-20 text-center text-base">Folder is empty</div>
          )}
          {!arrayHp.isEmpty(folder?.children) && (
            <div
              className={twMerge(
                "grid gap-2 mb-6",
                "grid-cols-8 max-[1600px]:grid-cols-7 max-[1400px]:grid-cols-6 max-[1200px]:grid-cols-5 max-[1000px]:grid-cols-4 max-[800px]:grid-cols-3 max-[600px]:grid-cols-2"
              )}
            >
              {folder?.children?.map((f) => (
                <FolderItem key={f?.id} folder={f} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FolderDetailMain;
