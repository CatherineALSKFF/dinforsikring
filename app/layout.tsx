import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

/**
 * Absolute URLs in the metadata (Open Graph image, canonical) have to resolve on
 * whichever host is actually serving the build, otherwise a shared link points at
 * a domain that never renders this app. Set NEXT_PUBLIC_SITE_URL per environment;
 * Vercel's own production URL is the fallback before the live domain.
 */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://dinforsikringshjelp.no");

export const metadata: Metadata = {
  title: "Dinforsikringshjelp.no - Uavhengig forsikringssammenligning",
  description: "Vi sammenligner forsikringene dine og viser hvor du kan få bedre pris og bedre vilkår. Start en uforpliktende gjennomgang i dag.",
  keywords: ["forsikring", "forsikringssammenligning", "billigste forsikring", "sammenligne forsikring", "forsikringsavtale", "Norge"],
  authors: [{ name: "DinForsikringsHjelp.no" }],
  icons: {
    icon: "/logo-forsikring.jpeg",
    apple: "/logo-forsikring.jpeg",
  },
  // No `images` key on either block: that lets the generated card in
  // app/opengraph-image.tsx supply both the OG and Twitter preview image.
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: SITE_URL,
    siteName: "DinForsikringsHjelp.no",
    title: "Dinforsikringshjelp.no - Uavhengig forsikringssammenligning",
    description: "Vi sammenligner forsikringene dine og viser hvor du kan få bedre pris og bedre vilkår. Start en uforpliktende gjennomgang i dag.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinforsikringshjelp.no - Uavhengig forsikringssammenligning",
    description: "Vi sammenligner forsikringene dine og viser hvor du kan få bedre pris og bedre vilkår.",
  },
  metadataBase: new URL(SITE_URL),
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
