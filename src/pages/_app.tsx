import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { captureGclidFromUrl } from "@/lib/gclid";

const GA_ADS_ID = "AW-17598254239";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    captureGclidFromUrl();
  }, [router.asPath]);

  return (
    <>
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ADS_ID}');
          `,
        }}
      />
      <Script
        id="gtag-script"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ADS_ID}`}
        strategy="afterInteractive"
      />
      <Component {...pageProps} />
    </>
  );
}
