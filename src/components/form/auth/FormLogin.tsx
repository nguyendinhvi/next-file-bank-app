import { useContextGlobal } from "@/contexts/global-context";
import { setCookie } from "@/utils/helper";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { IFormDataLogin } from "@/@interfaces/common/auth";
import { authApi } from "@/apis/auth";

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
        const data = await authApi.login(formData);
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
        <div className="mb-2">
          <label htmlFor="" className="block text-gray-600">
            Email
          </label>
          <div className="relative">
            {/* <IconMail className="absolute top-1/2 left-3 -translate-y-1/2 size-5" /> */}
            <input
              onChange={(e) =>
                setFormData((prev: any) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
              value={formData?.email}
              className="py-2 px-4 outline-none bg-gray-100 rounded-md w-full"
              placeholder="email"
            />
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="" className="block text-gray-600">
            Password
          </label>
          <div className="relative">
            {/* <IconMail className="absolute top-1/2 left-3 -translate-y-1/2 size-5" /> */}
            <input
              value={formData?.password}
              onChange={(e) =>
                setFormData((prev: any) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
              type="password"
              className="py-2 px-4 outline-none bg-gray-100 rounded-md w-full"
              placeholder="password"
            />
          </div>
        </div>
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
