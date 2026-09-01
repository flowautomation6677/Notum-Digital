import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#18242A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://notumtecnologia.com.br"),
  title: {
    default: "Notum Tecnologia | Certificação Digital, Assistência e Produtos de TI",
    template: "%s | Notum Tecnologia",
  },
  description:
    "A Notum Tecnologia une produtos, assistência técnica e certificação digital em um único parceiro confiável em Mesquita - RJ. Em atividade desde 1998.",
  keywords: [
    "Certificado Digital",
    "e-CNPJ",
    "e-CPF",
    "Assistência Técnica",
    "Produtos de TI",
    "Mesquita RJ",
    "Notum Tecnologia",
    "Emissão Certificado Digital",
  ],
  authors: [{ name: "Notum Tecnologia e Soluções Ltda" }],
  creator: "Notum Tecnologia",
  icons: {
    icon: "/brand/logo/simbolo.png",
    apple: "/brand/logo/simbolo.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://notumtecnologia.com.br",
    siteName: "Notum Tecnologia",
    title: "Notum Tecnologia | Certificação, Tecnologia e Confiança",
    description:
      "Do suporte do dia a dia à emissão de certificados digitais e-CNPJ e e-CPF com agilidade e atendimento direto.",
    images: [
      {
        url: "/brand/logo/logo-principal.png",
        width: 1200,
        height: 630,
        alt: "Notum Tecnologia - Certificação e Soluções em TI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notum Tecnologia | Certificação e TI",
    description:
      "A Notum une assistência técnica, produtos e certificados digitais em Mesquita (RJ). Desde 1998.",
    images: ["/brand/logo/logo-principal.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema JSON-LD para autoridade institucional e SEO Local
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Notum Tecnologia e Soluções Ltda",
    alternateName: "Notum Tecnologia",
    description:
      "Consultoria em TI, assistência técnica e emissão de certificados digitais e-CNPJ e e-CPF.",
    foundingDate: "1998-08-25",
    taxID: "02.765.891/0001-00",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Coelho da Rocha, nº 1030",
      addressLocality: "Mesquita",
      addressRegion: "RJ",
      postalCode: "26574-391",
      addressCountry: "BR",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Rio de Janeiro",
    },
    url: "https://notumtecnologia.com.br",
    logo: "https://notumtecnologia.com.br/brand/logo/logo-principal.png",
    image: "https://notumtecnologia.com.br/brand/logo/logo-principal.png",
    priceRange: "$$",
  };

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-brand-petroleum text-white antialiased selection:bg-brand-sky selection:text-brand-petroleum">
        {children}
      </body>
    </html>
  );
}
