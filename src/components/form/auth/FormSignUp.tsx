/* eslint-disable @next/next/no-img-element */
import { useContextGlobal } from "@/contexts/global-context";
import { setCookie } from "@/utils/helper";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { IFormDataLogin } from "@/@interfaces/common/auth";
import { authAPI } from "@/apis/auth";
import FormInput from "@/components/core/form/FormInput";
import Button from "@/components/core/Button";

interface IProps {}

const FormSignUp: FC<IProps> = ({}) => {
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
      style={{
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
      }}
      className="p-6 rounded-md"
    >
      <h2 className="text-[30px] font-bold mb-1">Getting started</h2>
      <p className="mb-6">Create your account now</p>

      <div className="mb-4">
        <div className="flex gap-2">
          <FormInput label="First Name" />
          <FormInput label="Last Name" />
        </div>
        <FormInput label="Email" />
        <FormInput label="Password" />
      </div>

      <button
        type="submit"
        disabled
        className="flex disabled:bg-blue-400 items-center w-full justify-center rounded-md bg-woot-500 py-3 px-3 text-base font-medium text-white shadow-sm hover:bg-woot-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-woot-500 cursor-pointer opacity-40 hover:bg-woot-500"
      >
        <span>Create account</span>
        <svg
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          // className="icon"
        >
          <path
            d="M9 17.898c0 1.074 1.265 1.648 2.073.941l6.31-5.522a1.75 1.75 0 0 0 0-2.634l-6.31-5.522C10.265 4.454 9 5.028 9 6.102v11.796Z"
            fill="currentColor"
          ></path>
        </svg>
      </button>

      <div className="relative my-4 section-separator uppercase">
        <div aria-hidden="true" className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200 dark:border-slate-600"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white dark:bg-slate-800 px-2 text-slate-500 dark:text-white">
            Or
          </span>
        </div>
      </div>

      <a
        href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=865736688206-3qd3j5jut3bvv9b41tnbndq9r49dkgvc.apps.googleusercontent.com&amp;redirect_uri=https%3A%2F%2Fapp.chatwoot.com%2Fomniauth%2Fgoogle_oauth2%2Fcallback&amp;response_type=code&amp;scope=email+profile"
        className="inline-flex justify-center w-full px-4 py-3 bg-white rounded-md shadow-sm ring-1 ring-inset ring-slate-200 dark:ring-slate-600 hover:bg-slate-50 focus:outline-offset-0 dark:bg-slate-700 dark:hover:bg-slate-700"
      >
        <img
          src="https://app.chatwoot.com/assets/images/auth/google.svg"
          alt="Google Logo"
          className="h-6"
        />
        <span className="ml-2 text-base font-medium text-slate-600 dark:text-white">
          Login with Google
        </span>
      </a>
    </div>
  );
};

export default FormSignUp;
