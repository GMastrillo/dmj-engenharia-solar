import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { MagneticWhatsApp } from "@/components/ui/magnetic-whatsapp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DMJ Engenharia Solar | Energia que Transforma. Economia que Dura.",
  description:
    "Especialistas em Energia Solar Fotovoltaica, Projetos Personalizados, Instalação e Homologação em Brasília - DF e Entorno. Economize até 95% na sua conta de luz. Mais de 300 projetos instalados e +1 MW conectado.",
  keywords: [
    "DMJ Engenharia Solar",
    "DMJ Solar",
    "energia solar brasilia",
    "energia solar samambaia",
    "energia solar df",
    "instalacao fotovoltaica df",
    "homologacao neoenergia",
    "painel solar brasilia",
  ],
  authors: [{ name: "DMJ Engenharia Solar LTDA" }],
  openGraph: {
    title: "DMJ Engenharia Solar | Energia Solar Fotovoltaica em Brasília - DF",
    description:
      "Energia que transforma. Economia que dura. Projetos a partir de R$ 12.900,00 instalados e homologados.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth dark`}
    >
      <body className="min-h-full flex flex-col bg-[#070B14] text-slate-100 selection:bg-amber-400 selection:text-slate-950">
        <div className="noise-overlay" aria-hidden="true" />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <MagneticWhatsApp />
      </body>
    </html>
  );
}
