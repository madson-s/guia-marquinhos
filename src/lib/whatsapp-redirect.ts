const WHATSAPP_REDIRECT_KEY = "whatsapp_redirect_url";

/**
 * Armazena a URL do WhatsApp para redirecionamento na página de agradecimento.
 */
export function setWhatsAppRedirectUrl(url: string): void {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(WHATSAPP_REDIRECT_KEY, url);
}

/**
 * Retorna e remove a URL do WhatsApp armazenada.
 */
export function getAndClearWhatsAppRedirectUrl(): string | null {
  if (typeof window === "undefined") return null;
  const url = sessionStorage.getItem(WHATSAPP_REDIRECT_KEY);
  sessionStorage.removeItem(WHATSAPP_REDIRECT_KEY);
  return url;
}
