import "@/styles/globals.scss";
import "@/styles/core.scss";

import { ModalContextProvider } from "@/contexts/modal-context";
import Layout from "@/layouts/Layout";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ModalContextProvider>
  );
}
