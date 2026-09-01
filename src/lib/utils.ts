import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Configuração do WhatsApp da Notum
export const NOTUM_WHATSAPP = "5521964238864";
export const NOTUM_PHONE_DISPLAY = "(21) 96423-8864";
export const NOTUM_ADDRESS = "Av. Coelho da Rocha, nº 1030 — Bairro BNH, Mesquita - RJ, CEP 26.574-391";
export const NOTUM_CNPJ = "02.765.891/0001-00";

export function getWhatsAppLink(message: string) {
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${NOTUM_WHATSAPP}?text=${encodedMsg}`;
}

export const NOTUM_GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=NOTUM+DIGITAL+-+Certificado+Digital+RJ+Av.+Coelho+da+Rocha+1030+Mesquita+RJ";
export const NOTUM_GOOGLE_RATING = "5,0";
export const NOTUM_GOOGLE_REVIEWS_COUNT = "18";

export const NOTUM_FACEBOOK_URL = "https://www.facebook.com/share/19mDaR6EvD/?mibextid=wwXIfr";
export const NOTUM_INSTAGRAM_URL = "https://www.instagram.com/notumdigital?igsi=MTAzanRxZG13b2E4YQ==";


