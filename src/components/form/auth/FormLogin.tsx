import { useContextGlobal } from "@/contexts/global-context";
import { setCookie } from "@/utils/helper";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { IFormDataLogin } from "@/@interfaces/common/auth";
import { authAPI } from "@/apis/auth";
import FormInput from "@/components/core/form/FormInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/validators/login.validator";
import { appRoutes } from "@/utils";
import { EResponseCodes } from "@/enums";

interface IProps {}

const FormLogin: FC<IProps> = ({}) => {
  const { push } = useRouter();
  const { setUser } = useContextGlobal();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const handleLogin = async (data: IFormDataLogin) => {
    try {
      const _login = await authAPI.login(data);
      setCookie("token", _login?.token);
      setUser(_login?.user);
      push({ pathname: appRoutes.profile, query: { id: _login.user.id } });
    } catch (e: any) {
      e?.data.code === EResponseCodes.email_or_password_is_wrong &&
        setError("password", { message: "Email or password is wrong" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="shadow-md p-6 rounded-md"
    >
      <h2 className="text-2xl font-bold mb-4">Welcome back!</h2>
      <p className="mb-6">Start managing your finance faster and better</p>
      <div className="mb-2">
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
        <a href="" className="text-blue-600 text-right block w-full text-xs">
          Forgot password
        </a>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 py-2 text-center rounded-md text-white"
      >
        Login
      </button>
    </form>
  );
};

export default FormLogin;
