import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Salgs- og kjøpsvilkår | DinForsikringsHjelp.no",
  description:
    "Salgs- og kjøpsvilkår for tjenesten, inkludert betaling, levering, angrerett og pengene-tilbake-garanti.",
  alternates: { canonical: "/salgsvilkar" },
};

export default function SalgsvilkarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
