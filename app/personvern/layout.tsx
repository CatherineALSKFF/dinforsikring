import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personvern | DinForsikringsHjelp.no",
  description:
    "Slik behandler Dinforsikringshjelp personopplysningene dine: hva vi samler inn, hvorfor, hvor lenge, og hvilke rettigheter du har.",
  alternates: { canonical: "/personvern" },
};

export default function PersonvernLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
