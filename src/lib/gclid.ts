const GCLID_KEY = "gclid";

/**
 * Captura o GCLID da URL (quando usuário vem de clique em anúncio Google Ads)
 * e armazena no sessionStorage de forma invisível.
 * Deve ser chamado no carregamento da página.
 */
export function captureGclidFromUrl(): void {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const gclid = params.get("gclid");
  if (gclid) {
    sessionStorage.setItem(GCLID_KEY, gclid);
  }
}

/**
 * Retorna o GCLID armazenado (se houver) para envio junto ao formulário.
 */
export function getGclid(): string | null {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(GCLID_KEY);
}
