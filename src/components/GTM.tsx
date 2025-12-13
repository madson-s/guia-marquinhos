"use client";

import Script from "next/script";

interface GTMProps {
  gtmId: string;
}

export default function GTM({ gtmId }: GTMProps) {
  if (!gtmId) return null;

  return (
    <>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `,
        }}
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
}

// Type definition for GTM dataLayer
type DataLayer = Array<Record<string, unknown>>;

interface WindowWithDataLayer extends Window {
  dataLayer?: DataLayer;
}

// Helper function to push events to GTM
export const pushGTMEvent = (eventName: string, eventData?: Record<string, unknown>) => {
  if (typeof window !== "undefined") {
    const windowWithDataLayer = window as WindowWithDataLayer;
    if (windowWithDataLayer.dataLayer) {
      windowWithDataLayer.dataLayer.push({
        event: eventName,
        ...eventData,
      });
    }
  }
};
