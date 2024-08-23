import { getUserById } from "@/apis/user";
import { User } from "@/@interfaces/model/user";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React from "react";
import ProfileDetailMain from "@/components/main/ProfileDetailMain";

const ProfileDetailPage = ({ user }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <ProfileDetailMain />;
};

export default ProfileDetailPage;

interface PageProps {
  user: User | undefined | null;
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (ctx) => {
  try {
    const id = (ctx.params?.id || "") as string;
    const user = await getUserById(id);

    return {
      props: {
        user,
        meta: {
          title: `${user?.first_name || "Profile"} - FileBank`,
        },
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
