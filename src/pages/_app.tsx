import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleAnalytics } from "@next/third-parties/google";
import GTM from "@/components/GTM";

// GTM Container ID - Substitua pelo seu ID do GTM
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {GTM_ID && <GTM gtmId={GTM_ID} />}
      <Component {...pageProps} />
      <GoogleAnalytics gaId="G-8Q1NQQQE6T" />
    </>
  );
}
