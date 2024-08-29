/* eslint-disable @next/next/no-img-element */
import {
  IconBell,
  IconChevronUp,
  IconLogo,
  IconLogout,
  IconMail,
  IconSearch,
} from "@/resources/icon";
import React, { FC, useId } from "react";
import FPopover from "../core/Popover";
import Link from "next/link";
import { useContextGlobal } from "@/contexts/global-context";
import { appRoutes } from "@/utils";

interface IProps {}
const src =
  "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const Navbar: FC<IProps> = ({}) => {
  const id = useId();
  const { user } = useContextGlobal();
  // return <FPopover />;

  return (
    <header className="py-2 fixed top-0 left-0 z-[2] bg-white w-full px-4 border-b-[1px] flex justify-between">
      {/* logo && name */}
      <div className="flex gap-3 items-center">
        <IconLogo className="size-10 text-black" />
        <p>FileBank</p>
      </div>

      {/* search_bar */}
      <div className="bg-gray-100 rounded-md px-4 py-2 flex max-w-[500px] gap-4 items-center">
        <label htmlFor={id}>
          <IconSearch className="size-5" />
        </label>
        <input
          type="text"
          id={id}
          placeholder={"Type or press command + f for search files..."}
          className="bg-transparent w-[500px] outline-none"
        />
      </div>
      <div className="flex items-center gap-3">
        <IconMail className="size-5" />
        <div className="relative">
          <div className="bg-red-500 rounded-full text-white text-[10px] absolute -top-1 -right-1 flex items-center justify-center size-3.5">
            9
          </div>
          <IconBell className="size-5" />
        </div>

        <FPopover
          content={
            <div className="">
              <div className="p-3">
                <a
                  className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                  href="#"
                >
                  <p className="font-semibold">Insights</p>
                  <p className="text-black/50">
                    Measure actions your users take
                  </p>
                </a>
                <a
                  className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                  href="#"
                >
                  <p className="font-semibold ">Automations</p>
                  <p className="text-black/50">
                    Create your own targeted content
                  </p>
                </a>

                {/* logout */}
                <Link
                  href={appRoutes.login}
                  className="font-semibold rounded-lg py-2 px-3  transition hover:bg-gray-100 flex items-center text-base gap-3"
                >
                  <IconLogout className="size-5 inline-block" /> Logout
                </Link>
              </div>
            </div>
          }
        >
          <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md">
            <img
              src={src}
              alt=""
              className="size-6 object-cover rounded-full"
            />
            <p className="text-gray-700">{user?.email}</p>
            <IconChevronUp className="size-4" />
          </div>
        </FPopover>
      </div>
    </header>
  );
};

export default Navbar;
