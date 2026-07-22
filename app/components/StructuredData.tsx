const SITE = "https://dinforsikringshjelp.no";

/**
 * JSON-LD for search engines and AI agents. Every fact here is mirrored from
 * visible page copy or the legal pages, so the markup stays substantiated.
 */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "Dinforsikringshjelp",
      legalName: "Dinforsikringshjelp (ENK)",
      url: SITE,
      logo: `${SITE}/logo-forsikring.jpeg`,
      email: "kontakt@dinforsikringshjelp.no",
      taxID: "933 424 766",
      areaServed: { "@type": "Country", name: "Norge" },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "kontakt@dinforsikringshjelp.no",
        availableLanguage: ["no", "nb"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "DinForsikringsHjelp.no",
      inLanguage: "nb-NO",
      publisher: { "@id": `${SITE}/#organization` },
    },
    {
      "@type": "Service",
      "@id": `${SITE}/#service`,
      name: "Uavhengig forsikringssammenligning",
      serviceType: "Forsikringssammenligning",
      provider: { "@id": `${SITE}/#organization` },
      areaServed: { "@type": "Country", name: "Norge" },
      description:
        "Vi henter inn og sammenligner tilbud fra flere forsikringsselskaper, og viser pris og vilkår side ved side slik at du kan velge selv.",
      offers: [
        { range: "1 til 2 forsikringer", price: "199" },
        { range: "3 til 5 forsikringer", price: "399" },
        { range: "6 til 8 forsikringer", price: "599" },
        { range: "9 til 11 forsikringer", price: "799" },
        { range: "12 forsikringer eller flere", price: "999" },
      ].map((o) => ({
        "@type": "Offer",
        name: o.range,
        price: o.price,
        priceCurrency: "NOK",
        availability: "https://schema.org/InStock",
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Hva koster tjenesten?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Prisen avhenger av hvor mange forsikringer du har, fra 199 kr for 1 til 2 forsikringer opp til 999 kr for 12 forsikringer eller flere.",
          },
        },
        {
          "@type": "Question",
          name: "Hva innebærer pengene-tilbake-garantien?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Finner vi ikke en bedre forsikringsavtale enn den du har i dag, får du hele beløpet tilbake. Du betaler kun dersom vi skaffer deg en bedre pris eller bedre dekning.",
          },
        },
        {
          "@type": "Question",
          name: "Hvor lang tid tar det?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tjenesten leveres digitalt innen 24 til 48 timer. Selve skjemaet tar 2 til 3 minutter å fylle ut.",
          },
        },
        {
          "@type": "Question",
          name: "Gir dere forsikringsrådgivning?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nei. Vi innhenter og sammenstiller tilbud, og gir en nøytral fremstilling av forskjeller i pris og vilkår. Du velger selv selskap og produkt.",
          },
        },
      ],
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
