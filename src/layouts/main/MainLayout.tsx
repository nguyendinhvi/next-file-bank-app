import Breadcrumb from "@/components/UI/Breadcrumb";
import MainUI from "@/components/UI/MainUI";
import Navbar from "@/components/UI/Navbar";
import React, { FC, PropsWithChildren } from "react";

interface IProps {}

const MainLayout: FC<PropsWithChildren<IProps>> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="size-full flex-1">{children}</main>
    </div>
  );
};

export default MainLayout;
