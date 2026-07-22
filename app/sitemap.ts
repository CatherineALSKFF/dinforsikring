import type { MetadataRoute } from "next";

const SITE = "https://dinforsikringshjelp.no";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-22");

  return [
    { url: SITE, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${SITE}/vilkar`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE}/salgsvilkar`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE}/personvern`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
