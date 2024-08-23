import { Folder } from "@/@interfaces/model/folder";
import { Nullable } from "@/@types";
import { API } from "@/apis";
import FolderDetailMain from "@/components/main/FolderDetailMain";
import { usePropsStore } from "@/stores/props.store";
import { GetServerSideProps } from "next";
import React, { FC, useEffect } from "react";

interface PageProps {
  folder: Nullable<Folder>;
}

const FolderDetailPage: FC<PageProps> = ({ folder }) => {
  return <FolderDetailMain folder={folder} />;
};

export default FolderDetailPage;

export const getServerSideProps: GetServerSideProps<PageProps> = async (ctx) => {
  try {
    const id = (ctx.params?.id || "") as string;
    const folder = await API.FOLDER.getFolderById(id);
    console.log("folder :", folder);

    return {
      props: {
        folder,
        meta: {
          title: `${folder?.name} - FileBank`,
        },
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
