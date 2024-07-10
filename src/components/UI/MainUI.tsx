import React, { FC, PropsWithChildren } from "react";

interface IProps {}

const MainUI: FC<PropsWithChildren<IProps>> = ({ children }) => {
  return <div className="flex-1 w-full">{children}</div>;
};

export default MainUI;
