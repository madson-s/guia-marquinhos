/**
 * Formata o valor para máscara de telefone brasileiro: (XX) X XXXX-XXXX
 */
export function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) {
    return digits.length > 0 ? `(${digits}` : "";
  }
  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 3)} ${digits.slice(3, 7)}-${digits.slice(7)}`;
}

/**
 * Remove a formatação e retorna apenas os dígitos
 */
export function getPhoneDigits(value: string): string {
  return value.replace(/\D/g, "");
}
