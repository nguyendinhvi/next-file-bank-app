import { IncomingMessage } from "http";

import {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";

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

export function setCookie(name: string, value: string, options: any = {}) {
  const cookie = `${name}=${value}; ${Object.entries(options)
    .map(([key, value]) => `${key}=${value}`)
    .join("; ")}`;
  document.cookie = cookie;
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
