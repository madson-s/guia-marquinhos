import { useEffect } from "react";
import { useRouter } from "next/router";
import { pushGTMEvent } from "@/components/GTM";

// Hook para rastrear scroll depth
export function useScrollDepth() {
  useEffect(() => {
    const depths = [25, 50, 75, 100];
    const tracked: number[] = [];

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollPercent = Math.round(
        (scrollTop / (documentHeight - windowHeight)) * 100
      );

      depths.forEach((depth) => {
        if (scrollPercent >= depth && !tracked.includes(depth)) {
          tracked.push(depth);
          pushGTMEvent("scroll_depth", {
            depth,
            page: window.location.pathname,
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}

// Hook para rastrear tempo na página
export function useTimeOnPage() {
  const router = useRouter();

  useEffect(() => {
    const startTime = Date.now();
    const page = router.asPath;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        if (timeSpent > 10) {
          // Só registra se o usuário passou mais de 10 segundos
          pushGTMEvent("time_on_page", {
            time_seconds: timeSpent,
            page,
          });
        }
      }
    };

    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (timeSpent > 10) {
        pushGTMEvent("time_on_page", {
          time_seconds: timeSpent,
          page,
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [router.asPath]);
}

// Função helper para rastrear cliques em links externos
export function trackExternalLink(url: string, linkType: string) {
  pushGTMEvent("external_link_click", {
    link_type: linkType,
    link_url: url,
    page: window.location.pathname,
  });
}

// Função helper para rastrear cliques no WhatsApp
export function trackWhatsAppClick(source: string) {
  pushGTMEvent("whatsapp_click", {
    source,
    page: window.location.pathname,
  });
}

// Função helper para rastrear visualização de destino
export function trackDestinationView(destinationName: string, destinationType: string) {
  pushGTMEvent("destination_view", {
    destination_name: destinationName,
    destination_type: destinationType,
    page: window.location.pathname,
  });
}
