import type { AppProps } from "next/app";
import { useState } from "react";
import Head from "next/head";
import { useEffectOnce } from "react-use";

import GlobalStyles from "../styles/global-styles";

export default function App({ Component, pageProps }: AppProps) {
  /** Prevents hydration error introduced by React 18. */
  const [showChild, setShowChild] = useState<boolean>(false);

  useEffectOnce(() => setShowChild(true));

  if (!showChild) {
    return null;
  }

  if (typeof window === `undefined`) {
    return <></>;
  }

  return (
    <>
      <Head>
        <title>Next.js Template</title>
      </Head>

      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};
