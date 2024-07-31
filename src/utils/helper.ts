import { IncomingMessage } from "http";

import {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";

type Cookies = {
  [key: string]: string;
};

export function sleep(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export function parseCookies(cookieHeader: string | undefined): Cookies {
  const cookies: Cookies = {};
  if (cookieHeader) {
    cookieHeader.split(";").forEach((cookie: string) => {
      const parts: string[] = cookie?.split("=") || [];
      const name: string = parts?.shift()?.trim() || "";

      if (name) {
        const value: string = parts.join("=").trim();
        cookies[name] = value;
      }
    });
  }
  return cookies;
}

export function setCookie(name: string, value: string, days?: number): void {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
export function authenticate(context: GetServerSidePropsContext) {
  const { accessToken }: Cookies =
    parseCookies(context.req.headers.cookie) ?? {};

  if (!accessToken) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return { username: "vi" };
}

export const classNames = (...classes: string[]) => {
  return classes.join(" ");
};
