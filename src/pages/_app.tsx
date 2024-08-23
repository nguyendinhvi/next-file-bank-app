import "@/styles/globals.scss";
import "@/styles/core.scss";

import { ModalContextProvider } from "@/contexts/modal-context";
import Layout from "@/layouts/Layout";

import type { AppProps } from "next/app";
import { GlobalContextProvider } from "@/contexts/global-context";
import Head from "next/head";

type Meta = { meta: { title: string } };

export default function App({ Component, pageProps }: AppProps<Meta>) {
  return (
    <GlobalContextProvider>
      <ModalContextProvider>
        <Head>
          <title>{pageProps?.meta?.title}</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ModalContextProvider>
    </GlobalContextProvider>
  );
}
