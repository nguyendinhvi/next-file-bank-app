import FormSignUp from "@/components/form/auth/FormSignUp";
import React, { FC } from "react";

interface IProps {}

const SignUpPage: FC<IProps> = ({}) => {
  return (
    <div className="flex-center min-h-screen py-6">
      <FormSignUp />
    </div>
  );
};

export default SignUpPage;
