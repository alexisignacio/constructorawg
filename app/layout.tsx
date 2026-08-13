import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Construcción y Obras Civiles en Malleco | WALTER A. GARRIDO RÍOS",
  description:
    "Constructora de Angol con 30 años de trayectoria en obras civiles, infraestructura pública y privada, programa de integridad y cobertura en Malleco.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "WALTER A. GARRIDO RÍOS",
    description:
      "Construcción y obras civiles con 30 años de trayectoria en Malleco.",
    images: [
      {
        url: "/og.png",
        width: 1680,
        height: 945,
        alt: "WALTER A. GARRIDO RÍOS - Obras civiles e infraestructura",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WALTER A. GARRIDO RÍOS",
    description:
      "Construcción y obras civiles con 30 años de trayectoria en Malleco.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
