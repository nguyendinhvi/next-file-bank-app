import React, { FC, PropsWithChildren } from "react";
import MainLayout from "./main/MainLayout";

import { Poppins } from "next/font/google";
import { useRouter } from "next/router";
import { appRoutes } from "@/utils";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
interface IProps {}

const Layout: FC<PropsWithChildren<IProps>> = ({ children }) => {
  const { pathname } = useRouter();

  if ([appRoutes.login, appRoutes.signup].includes(pathname))
    return <>{children}</>;

  return (
    <div className={poppins.className}>
      <MainLayout>{children}</MainLayout>
    </div>
  );
};

export default Layout;
