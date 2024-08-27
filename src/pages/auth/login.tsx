import FormLogin from "@/components/form/auth/FormLogin";
import React, { FC } from "react";

interface IProps {}

const LoginPage: FC<IProps> = ({}) => {
  return (
    <div className="flex-center h-screen">
      <FormLogin />
    </div>
  );
};

export default LoginPage;
