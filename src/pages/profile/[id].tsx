import { getUserById } from "@/apis/user";
import { User } from "@/@interfaces/model/user";
import MainProfileDetail from "@/modules/profile/main/MainProfileDetail";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React from "react";

const ProfileDetailPage = ({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <MainProfileDetail />;
};

export default ProfileDetailPage;
interface PageProps {
  user: User | undefined | null;
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  ctx
) => {
  try {
    const id = (ctx.params?.id || "") as string;
    const data = await getUserById(id);

    return {
      props: {
        user: data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
