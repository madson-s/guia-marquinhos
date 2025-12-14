import "@/styles/globals.css";
import type { AppProps } from "next/app";
import GTM from "@/components/GTM";

// GTM Container ID
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-PVNWJWK3";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {GTM_ID && <GTM gtmId={GTM_ID} />}
      <Component {...pageProps} />
    </>
  );
}
