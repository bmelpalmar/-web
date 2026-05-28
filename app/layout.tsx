import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BM El Palmar - Tu guía local de El Palmar, Cádiz",
  description: "Descubre restaurantes, surf, ocio, alojamientos y todo lo que necesitas saber sobre El Palmar, Vejer de la Frontera, Cádiz.",
  keywords: "El Palmar, Cádiz, Vejer, surf, restaurantes, playa, turismo, Costa de la Luz",
  openGraph: {
    title: "BM El Palmar - Tu guía local de El Palmar, Cádiz",
    description: "Descubre restaurantes, surf, ocio, alojamientos y todo lo que necesitas saber sobre El Palmar.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="bg-white">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
