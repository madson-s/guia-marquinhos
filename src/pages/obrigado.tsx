"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import SEO from "@/components/SEO";
import Button from "@/components/Button";
import { getAndClearWhatsAppRedirectUrl } from "@/lib/whatsapp-redirect";

const REDIRECT_DELAY_MS = 2000;
const SHOW_BUTTON_BEFORE_MS = 200; // Botão aparece 200ms antes do redirect

export default function Obrigado() {
  const router = useRouter();
  const [showButton, setShowButton] = useState(false);
  const cancelledRef = useRef(false);

  useEffect(() => {
    const whatsappUrl = getAndClearWhatsAppRedirectUrl();

    if (!whatsappUrl) {
      setShowButton(true);
      return;
    }

    const showButtonTimer = setTimeout(() => {
      if (!cancelledRef.current) {
        setShowButton(true);
      }
    }, REDIRECT_DELAY_MS - SHOW_BUTTON_BEFORE_MS);

    const redirectTimer = setTimeout(() => {
      if (!cancelledRef.current) {
        window.location.href = whatsappUrl;
      }
    }, REDIRECT_DELAY_MS);

    return () => {
      clearTimeout(showButtonTimer);
      clearTimeout(redirectTimer);
    };
  }, []);

  const handleVoltar = () => {
    cancelledRef.current = true;
    router.push("/");
  };

  return (
    <>
      <SEO
        title="Obrigado! | Guia Marquinhos - Chapada Diamantina"
        description="Recebi suas informações. Em breve entrarei em contato pelo WhatsApp!"
        url="/obrigado"
      />
      <main className="min-h-screen bg-[#F6F6EE] flex flex-col items-center justify-center py-20 px-6">
        <div className="flex flex-col items-center justify-center gap-8 text-center max-w-[600px]">
          <div className="w-20 h-20 bg-[#FFC737] rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-12 h-12 text-[#322F30]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-[#322F30] text-4xl sm:text-5xl md:text-6xl font-bold">
            Obrigado!
          </h1>
          <p className="text-[#888888] text-lg sm:text-xl">
            Recebi suas informações e vou preparar o roteiro ideal para você. Em
            breve entrarei em contato pelo WhatsApp!
          </p>
          {showButton && (
            <Button
              as="button"
              onClick={handleVoltar}
              variant="primary"
              size="lg"
              className="w-full sm:w-[484px] !bg-[#FFC737] !text-[#322F30]"
            >
              Voltar ao site
            </Button>
          )}
        </div>
      </main>
    </>
  );
}
