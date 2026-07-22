import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dinforsikringshjelp.no - Uavhengig forsikringssammenligning",
  description: "Vi sammenligner forsikringene dine og viser hvor du kan få bedre pris og bedre vilkår. Start en uforpliktende gjennomgang i dag.",
  keywords: ["forsikring", "forsikringssammenligning", "billigste forsikring", "sammenligne forsikring", "forsikringsavtale", "Norge"],
  authors: [{ name: "DinForsikringsHjelp.no" }],
  icons: {
    icon: "/logo-forsikring.jpeg",
    apple: "/logo-forsikring.jpeg",
  },
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: "https://dinforsikringshjelp.no",
    siteName: "DinForsikringsHjelp.no",
    title: "Dinforsikringshjelp.no - Uavhengig forsikringssammenligning",
    description: "Vi sammenligner forsikringene dine og viser hvor du kan få bedre pris og bedre vilkår. Start en uforpliktende gjennomgang i dag.",
    images: [
      {
        url: "/logo-forsikring.jpeg",
        width: 1200,
        height: 630,
        alt: "DinForsikringsHjelp.no logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinforsikringshjelp.no - Uavhengig forsikringssammenligning",
    description: "Vi sammenligner forsikringene dine og viser hvor du kan få bedre pris og bedre vilkår.",
    images: ["/logo-forsikring.jpeg"],
  },
  metadataBase: new URL("https://dinforsikringshjelp.no"),
  alternates: { canonical: "/" },
  applicationName: "DinForsikringsHjelp.no",
  category: "finance",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb-NO">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
