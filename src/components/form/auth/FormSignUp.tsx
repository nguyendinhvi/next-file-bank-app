/* eslint-disable @next/next/no-img-element */
import { useContextGlobal } from "@/contexts/global-context";
import { setCookie } from "@/utils/helper";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { IFormDataLogin } from "@/@interfaces/common/auth";
import { authAPI } from "@/apis/auth";
import FormInput from "@/components/core/form/FormInput";
import { useForm, UseFormRegister } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "@/validators/signup.validator";
import { EResponseCodes } from "@/enums";
import { ApiErrorResponse } from "@/@interfaces/common/api";

interface IProps {}

const FormSignUp: FC<IProps> = ({}) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(signUpSchema),
    defaultValues: { first_name: "", last_name: "" },
  });

  const onSubmit = async (data: any) => {
    try {
      if (data) {
        const res = await authAPI.signup(data);
      }
    } catch (error: any) {
      const e = error as ApiErrorResponse;
      if (e.code === EResponseCodes.email_account_already_exists) {
        setError("email", { message: "Email account already exists" });
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 rounded-md shadow-xl w-[540px]"
    >
      <h2 className="text-[30px] font-bold mb-1">Getting started</h2>
      <p className="mb-6">Create your account now</p>
      <div className="mb-4">
        <div className="flex gap-2">
          <FormInput
            label="First Name"
            error={errors?.first_name?.message}
            register={register("first_name")}
          />
          <FormInput
            label="Last Name"
            error={errors?.last_name?.message}
            register={register("last_name")}
          />
        </div>
        <FormInput
          label="Email"
          error={errors?.email?.message}
          register={register("email")}
        />
        <FormInput
          label="Password"
          type="password"
          error={errors?.password?.message}
          register={register("password")}
        />
        <FormInput
          label="Repeat password"
          type="password"
          error={errors?.repeat_password?.message}
          register={register("repeat_password")}
        />
      </div>

      <button
        type="submit"
        className="flex disabled:bg-blue-400 items-center w-full justify-center rounded-md bg-woot-500 py-3 px-3 text-base font-medium text-white shadow-sm hover:bg-woot-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-woot-500 cursor-pointer disabled:opacity-40 bg-blue-500 hover:bg-woot-500"
      >
        <span>Create account</span>
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
    </form>
  );
};

export default FormSignUp;
