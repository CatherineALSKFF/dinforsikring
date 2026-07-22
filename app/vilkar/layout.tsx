import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vilkår | DinForsikringsHjelp.no",
  description:
    "Tjenesteavtalen mellom Dinforsikringshjelp (ENK) og kunden: formål, omfang, priser, levering og ansvar.",
  alternates: { canonical: "/vilkar" },
};

export default function VilkarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
