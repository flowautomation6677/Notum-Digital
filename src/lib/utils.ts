import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Configuração do WhatsApp da Notum
export const NOTUM_WHATSAPP = "5521999999999"; // Substituível pelo número oficial do cliente
export const NOTUM_PHONE_DISPLAY = "(21) 99999-9999";
export const NOTUM_ADDRESS = "Av. Coelho da Rocha, nº 1030 — Bairro BNH, Mesquita - RJ, CEP 26.574-391";
export const NOTUM_CNPJ = "02.765.891/0001-00";

export function getWhatsAppLink(message: string) {
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${NOTUM_WHATSAPP}?text=${encodedMsg}`;
}
