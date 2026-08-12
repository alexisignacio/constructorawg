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
  title: "WALTER A. GARRIDO RÍOS | Obras civiles e infraestructura",
  description:
    "Constructora de Angol con tres décadas de experiencia local en obras civiles de infraestructura para licitaciones públicas y privadas.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "WALTER A. GARRIDO RÍOS",
    description:
      "Obras civiles e infraestructura con experiencia local en Angol y Malleco.",
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
      "Constructora de obras civiles e infraestructura en Angol y Malleco.",
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
