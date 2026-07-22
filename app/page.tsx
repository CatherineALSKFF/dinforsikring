"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, FileText, GitCompare, BadgeCheck } from "lucide-react";
import Navbar from "./components/Navbar";
import ShaderBackground from "./components/ShaderBackground";
import RollButton from "./components/RollButton";
import SectionBadge from "./components/SectionBadge";
import SavingsCard from "./components/SavingsCard";
import CategoryStrip from "./components/CategoryStrip";
import PriceScale from "./components/PriceScale";
import Reveal from "./components/Reveal";

const FORM_URL = "https://pci.jotform.com/form/253004702152038";


const STEPS = [
  {
    n: "01",
    Icon: FileText,
    title: "Send inn skjemaet",
    body: "2 til 3 minutter, kun det viktigste. Vi trenger bare grunnleggende informasjon for å komme i gang.",
  },
  {
    n: "02",
    Icon: GitCompare,
    title: "Vi sammenligner",
    body: "Vi henter og sammenligner tilbud for deg fra ulike forsikringsselskaper.",
  },
  {
    n: "03",
    Icon: BadgeCheck,
    title: "Du velger",
    body: "Se pris og vilkår side ved side, og velg det som passer deg best.",
  },
];

const GUARANTEE_STEPS = [
  "Du sender oss dine nåværende forsikringer.",
  "Vi henter inn tilbud fra flere selskaper og setter det opp i en tydelig sammenligning.",
  "Dersom vi finner en løsning som er bedre for deg → du betaler for tjenesten.",
  "Hvis ikke → vi refunderer hele beløpet, uten spørsmål.",
];

export default function Home() {
  const [isGuaranteeExpanded, setIsGuaranteeExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* ---------------- SECTION 1: HERO ---------------- */}
      <section className="relative flex min-h-screen flex-col overflow-hidden bg-[#e8eefb]">
        <ShaderBackground />

        <Navbar />

        <div className="relative z-20 flex flex-1 items-center">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12 xl:gap-20">
          <Reveal>
          <p className="mb-5 sm:mb-8 text-[13px] sm:text-[14px] tracking-wide text-gray-900">
            DinForsikringsHjelp.no
          </p>

          <h1 className="heading-display font-medium text-gray-900">
            Uavhengig forsikringshjelp.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Vi sammenligner for deg,
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>og du velger selv.
          </h1>

          <p className="mt-6 max-w-xl text-[15px] sm:text-[17px] leading-[1.6] text-gray-700">
            Vi sammenligner forsikringene dine og viser hvor du kan få bedre
            pris og bedre vilkår.
          </p>

          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
            <RollButton href={FORM_URL}>Start forsikringsgjennomgang</RollButton>

            <div className="inline-flex items-center gap-2 sm:gap-3 rounded-[4px] bg-white px-3 sm:px-4 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
              <span className="text-[13px] sm:text-[14px] font-medium text-gray-900">
                Pengene-tilbake-garanti
              </span>
              <span className="rounded bg-gray-900 px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-[11px] text-white">
                Garanti
              </span>
            </div>
          </div>
          </Reveal>

          <Reveal delay={150} className="mt-10 lg:mt-0 lg:shrink-0">
            <SavingsCard />
          </Reveal>
          </div>
        </div>
      </section>

      <CategoryStrip />

      {/* ---------------- SECTION 2: GUARANTEE ---------------- */}
      <section className="overflow-hidden bg-white pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="px-5 sm:px-8 lg:px-12">
            <Reveal>
              <SectionBadge number="1">Pengene-tilbake-garanti</SectionBadge>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="heading-section font-medium text-gray-900 mb-12 sm:mb-16">
                Finner vi ikke en bedre avtale
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>enn du har i dag, får du
                pengene tilbake.
              </h2>
            </Reveal>

            <div className="lg:grid lg:grid-cols-[1fr_48%] lg:items-center lg:gap-12 xl:gap-16">
              <Reveal>
                <p className="text-[15px] sm:text-[17px] lg:text-[18px] font-medium leading-[1.65] text-gray-900">
                  Du betaler kun dersom vi klarer å skaffe deg en bedre pris
                  eller bedre dekning. Slik tar du ingen risiko, og betaler kun
                  for faktisk verdi.
                </p>

                <div className="mt-8 rounded-2xl border border-gray-200 p-5 sm:p-6">
                  <p className="text-[13px] font-medium tracking-wide text-gray-500 mb-1">
                    Kort fortalt
                  </p>
                  <p className="text-[20px] sm:text-[22px] font-semibold tracking-tight text-[#1D4ED8]">
                    Ingen besparelse = ingen kostnad.
                  </p>
                </div>

                <div className="mt-8">
                  <RollButton onClick={() => setIsGuaranteeExpanded((v) => !v)}>
                    {isGuaranteeExpanded ? "Vis mindre" : "Les mer om garantien"}
                  </RollButton>
                </div>
              </Reveal>

              <Reveal delay={150} className="mt-10 lg:mt-0">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#F5F5F5]">
                  <Image
                    src="/kjokken-lys.jpg"
                    alt="Lyst kjøkken i en norsk bolig"
                    fill
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>

            <div
              className={`transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                isGuaranteeExpanded
                  ? "max-h-[1400px] opacity-100 mt-10"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <div className="rounded-2xl bg-[#F5F5F5] p-6 sm:p-8 lg:grid lg:grid-cols-2 lg:gap-10 lg:items-start">
                <div>
                  <h3 className="text-[15px] sm:text-[16px] font-semibold text-gray-900 mb-5">
                    Slik fungerer det
                  </h3>
                  <ol className="space-y-4">
                    {GUARANTEE_STEPS.map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-[11px] font-semibold text-white">
                          {i + 1}
                        </span>
                        <span className="text-[14px] sm:text-[15px] leading-relaxed text-gray-700">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>

                  <div className="mt-6 lg:mt-0 rounded-xl bg-white p-5 sm:p-6">
                    <p className="text-[13px] font-medium tracking-wide text-gray-500 mb-2">
                      Helt risikofritt
                    </p>
                    <p className="text-[14px] sm:text-[15px] leading-relaxed text-gray-600">
                      Dette gjør tjenesten vår helt risikofri for deg, og sikrer
                      at du kun betaler når du faktisk får en bedre avtale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* ---------------- SECTION 3: PRICING ---------------- */}
      <section className="bg-[#F5F5F5] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <SectionBadge number="2" borderClass="border-gray-300">
              Priser
            </SectionBadge>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="heading-display font-medium text-gray-900 mb-4">
              Prisen følger antallet
            </h2>
            <p className="max-w-xl text-[15px] sm:text-[17px] text-gray-600 mb-12 sm:mb-16">
              Én fast pris per gjennomgang, bestemt av hvor mange
              forsikringer du vil at vi skal se på. Ingen abonnement.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <PriceScale />
          </Reveal>
        </div>
      </section>

      {/* ---------------- SECTION 4: HOW IT WORKS ---------------- */}
      <section className="bg-white pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <SectionBadge number="3">Slik fungerer det</SectionBadge>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="heading-section font-medium text-gray-900 mb-10 sm:mb-14 lg:mb-16">
              Tre enkle steg til bedre forsikring.
            </h2>
          </Reveal>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
            {/* Hairline connecting the three steps on desktop. */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-0 right-0 top-[62px] hidden md:block h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"
            />

            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 110}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:-translate-y-1 hover:border-[#1D4ED8]/25 hover:shadow-[0_14px_34px_rgba(29,78,216,0.12)]">
                  {/* Oversized ghost numeral for depth. */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-2 -top-4 select-none text-[92px] font-semibold leading-none tracking-tight text-gray-900/[0.035] transition-colors duration-500 group-hover:text-[#1D4ED8]/[0.07]"
                  >
                    {s.n}
                  </span>

                  <span className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#1D4ED8]/8 text-[#1D4ED8] transition-[transform,background-color] duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-0.5 group-hover:bg-[#1D4ED8] group-hover:text-white">
                    <s.Icon size={20} strokeWidth={1.5} />
                  </span>

                  <span className="relative text-[13px] font-semibold text-[#1D4ED8]">
                    {s.n}
                  </span>
                  <h3 className="relative mt-4 text-[18px] sm:text-[20px] font-medium tracking-[-0.02em] text-gray-900">
                    {s.title}
                  </h3>
                  <p className="relative mt-3 text-[14px] sm:text-[15px] leading-relaxed text-gray-600">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 5: CLOSING CTA ---------------- */}
      <section className="bg-white pb-16 sm:pb-20 lg:pb-28">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-2xl bg-gray-900 px-6 sm:px-10 lg:px-16 py-14 sm:py-20 lg:py-24">
            {/* Photo bleeds in from the right; the gradient keeps the copy legible. */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[55%]">
              <Image
                src="/hjem-kveld.jpg"
                alt="Moderne bolig i skumringen"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/85 to-gray-900/55 lg:via-gray-900/70 lg:to-gray-900/20" />
            </div>

            <Reveal className="relative">
              <h2
                className="max-w-3xl font-medium leading-[1.08] tracking-[-0.03em] text-white"
                style={{ fontSize: "clamp(1.75rem,5vw,3.6rem)" }}
              >
                Klar for å få oversikt?
              </h2>
              <p className="mt-6 max-w-xl text-[15px] sm:text-[17px] leading-[1.6] text-white/70">
                Start en uforpliktende gjennomgang. Ingen bindinger, kun oversikt
                og bedre priser.
              </p>
              <div className="mt-8 sm:mt-10">
                <RollButton id="start" href={FORM_URL}>
                  Start forsikringsgjennomgang
                </RollButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 6: FOOTER ---------------- */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 py-14 sm:py-16">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="relative block w-10 h-10">
                  <Image
                    src="/logo-forsikring.jpeg"
                    alt="DinForsikringsHjelp.no logo"
                    fill
                    sizes="40px"
                    className="object-contain"
                  />
                </span>
                <span className="text-[15px] font-semibold tracking-tight text-gray-900">
                  DinForsikringsHjelp.no
                </span>
              </div>
              <p className="text-[14px] leading-relaxed text-gray-600 mb-5">
                Uavhengig forsikringssammenligning for privatpersoner i Norge.
              </p>
              <div className="space-y-1.5 text-[14px] text-gray-600">
                <p className="font-medium text-gray-900">
                  Dinforsikringshjelp (ENK)
                </p>
                <p>Org.nr: 933 424 766</p>
                <p>
                  <a
                    href="mailto:kontakt@dinforsikringshjelp.no"
                    className="hover:text-gray-900 transition-colors duration-300"
                  >
                    E-post: kontakt@dinforsikringshjelp.no
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-[13px] font-medium tracking-wide text-gray-500">
                Sider
              </h3>
              <ul className="space-y-3 text-[14px]">
                <li>
                  <Link
                    href="/vilkar"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    Vilkår
                  </Link>
                </li>
                <li>
                  <Link
                    href="/salgsvilkar"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    Salgs- og kjøpsvilkår
                  </Link>
                </li>
                <li>
                  <Link
                    href="/personvern"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    Personvern
                  </Link>
                </li>
                <li>
                  <a
                    href={FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    Start skjema
                    <ArrowRight size={13} />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-[13px] font-medium tracking-wide text-gray-500">
                Kontakt
              </h3>
              <a
                href="mailto:kontakt@dinforsikringshjelp.no"
                className="text-[14px] text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                kontakt@dinforsikringshjelp.no
              </a>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-[13px] text-gray-500">
              © 2025 dinforsikringshjelp.no • Juridisk enhet: Dinforsikringshjelp
              (ENK)
            </p>
            <p className="mt-2 text-[12px] text-gray-400">
              Built by Arc Labs AS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
