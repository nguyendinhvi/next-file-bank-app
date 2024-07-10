import FileDropZone from "@/components/widgets/FileDropZone";
import { useModalContext } from "@/contexts/modal-context";
import MainProfileDetail from "@/modules/profile/main/MainProfileDetail";
import React, { useEffect } from "react";

const ProfileDetailPage = () => {
  const { openModal } = useModalContext();

  useEffect(() => {
    return () => {};
  }, []);

  return <MainProfileDetail />;
};

export default ProfileDetailPage;
