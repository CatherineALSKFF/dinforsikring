import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dinforsikringshjelp.no - Uavhengig forsikringssammenligning",
  description: "Vi sammenligner forsikringene dine og viser hvor du kan få bedre pris og bedre vilkår. Start en uforpliktende gjennomgang i dag.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
