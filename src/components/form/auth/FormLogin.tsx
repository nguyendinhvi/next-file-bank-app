import { useContextGlobal } from "@/contexts/global-context";
import { setCookie } from "@/utils/helper";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { IFormDataLogin } from "@/@interfaces/common/auth";
import { authAPI } from "@/apis/auth";
import FormInput from "@/components/core/form/FormInput";

interface IProps {}

const FormLogin: FC<IProps> = ({}) => {
  // const segments = useSelectedLayoutSegments();
  const { push } = useRouter();
  const { setUser } = useContextGlobal();

  const [formData, setFormData] = useState<IFormDataLogin>();

  const handleLogin = async (e: Event) => {
    e.stopPropagation();
    try {
      if (formData) {
        const data = await authAPI.login(formData);
        setCookie("token", data?.token);
        setUser(data?.user);
        push(`/profile/${data?.user?.id}`);
      }
    } catch (error) {}
  };

  return (
    <div
      // onSubmit={(e: any) => handleLogin(e)}
      className="shadow-md p-6 rounded-md"
    >
      <h2 className="text-2xl font-bold mb-4">Welcome back!</h2>
      <p className="mb-6">Start managing your finance faster and better</p>

      <div className="mb-2">
        <FormInput label="Email" />
        <FormInput label="Password" />

        <a href="" className="text-blue-600 text-right block w-full text-xs">
          Forgot password
        </a>
      </div>

      <button
        onClick={(e: any) => handleLogin(e)}
        className="w-full bg-blue-500 py-2 text-center rounded-md text-white"
      >
        Login
      </button>
    </div>
  );
};

export default FormLogin;
