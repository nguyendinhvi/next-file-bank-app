import React, { FC, useEffect } from "react";
import Breadcrumb from "@/components/UI/Breadcrumb";
import { useFetch } from "@/hooks/use-fetch";
import { getFolderById } from "@/apis/folder";
import { Folder } from "@/@interfaces/model/folder";
import { useRouter } from "next/router";

interface IProps {}

const FolderDetailMain: FC<IProps> = ({}) => {
  const { query } = useRouter();

  // const { data: folder } = useFetch<Folder>(
  //   getFolderById(query?.id as string),
  //   [query?.id]
  // );

  const loadData = async () => {
    try {
      const res = await getFolderById(query?.id as any);
      console.log("res :", res);
    } catch (error) {}
  };

  useEffect(() => {
    if (query?.id) loadData();
  }, [query?.id]);

  return (
    <div className="flex flex-1 h-full">
      {/* <ProfileSidebar folders={folders} /> */}
      <div className="flex-1">
        <Breadcrumb />
        <div className="p-6">
          <h2 className="text-gray-900 text-xl mb-2">Folders</h2>
          {/* list  */}
          <div className="grid grid-cols-8 gap-2 mb-6">
            {/* {folders?.map((f) => (
              <FolderItem key={f?.id} folder={f} />
            ))} */}
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

export default FolderDetailMain;
