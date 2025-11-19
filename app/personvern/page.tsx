"use client";

import Link from "next/link";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

export default function Personvern() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("animate-on-scroll");
          entry.target.classList.add("animate-fade-in-up");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Navbar />

      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="animate-on-scroll mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Tjenesteavtale
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Mellom Dinforsikringshjelp.no (org.nr. 933 424 766) og Kunden
          </p>
          <p className="mt-2 text-base text-gray-600">
            Ved å sende inn skjemaet på Dinforsikringshjelp.no samtykker Kunden til vilkårene i denne avtalen.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-blue max-w-none">
          <section className="animate-on-scroll mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              §1 Formål
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dinforsikringshjelp.no tilbyr en uavhengig forsikringsgjennomgang for privatpersoner.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tjenesten består i å:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Analysere kundens nåværende forsikringsavtaler</li>
              <li>Innhente sammenlignbare tilbud fra utvalgte forsikringsselskaper og tredjepartstjenester (som Bytt.no, Tjenestetorget m.fl.)</li>
              <li>Presentere resultatene og gi objektive anbefalinger</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Formålet er å hjelpe kunden å oppnå bedre dekning, lavere pris eller mer gunstige vilkår.
            </p>
          </section>

          <section className="animate-on-scroll animate-delay-200 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              §2 Uavhengighet
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Dinforsikringshjelp.no mottar ingen provisjon fra forsikringsselskaper eller tredjepart.</li>
              <li>Vederlaget betales direkte fra kunden for rådgivningstjenesten.</li>
              <li>Alle råd gis på et uavhengig og objektivt grunnlag.</li>
            </ul>
          </section>

          <section className="animate-on-scroll animate-delay-300 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              §3 Pris og betaling
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              Prisstruktur (inkl. mva):
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>1–2 produkter: 199 kr</li>
              <li>3–5 produkter: 399 kr</li>
              <li>6–8 produkter: 599 kr</li>
              <li>9–11 produkter: 799 kr</li>
              <li>11+ produkter: 999 kr</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              Betaling:
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Hele beløpet betales før gjennomgangen starter.</li>
              <li>Betaling kan gjøres via Stripe, Vipps eller annen digital betalingsløsning oppgitt i skjemaet.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              Tilfredshetsgaranti og refusjon:
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dinforsikringshjelp.no har en fornøyd-eller-pengene-tilbake-garanti.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dersom Dinforsikringshjelp.no ikke finner noen bedre løsning eller økonomisk forbedring for kunden, refunderes hele beløpet.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Refusjon gjelder dersom:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Kunden selv oppgir at de ikke har mottatt et bedre tilbud eller verdiøkning</li>
              <li>Dinforsikringshjelp.no gjennomgår og bekrefter dette etter kontroll</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Refusjon behandles normalt innen 5–10 virkedager etter bekreftelse.
            </p>
          </section>

          <section className="animate-on-scroll animate-delay-400 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              §4 Samtykke og innhenting av tilbud
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kunden samtykker til at Dinforsikringshjelp.no kan:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Innhente og sammenligne forsikringstilbud på kundens vegne fra forsikringsselskaper og tredjepartsleverandører (inkl. Bytt.no, Tjenestetorget, Finansportalen m.fl.)</li>
              <li>Samle inn og bruke informasjon som kunden selv oppgir, herunder forsikringsavtaler, premie, vilkår og selskapstilhørighet</li>
              <li>Foreta kredittsjekk der dette kreves av forsikringsselskapene for å innhente reelle tilbud</li>
              <li>Kontakte kunden via telefon, SMS eller e-post i forbindelse med innhenting, rådgivning og oppfølging</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Samtykket gjelder inntil det trekkes tilbake skriftlig.
            </p>
          </section>

          <section className="animate-on-scroll animate-delay-500 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              §5 Ansvarsbegrensning
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Dinforsikringshjelp.no garanterer ikke for fremtidige priser, vilkår eller rabatter hos forsikringsselskaper.</li>
              <li>Kunden står selv ansvarlig for valg av forsikringsselskap og eventuelle avtaleinngåelser.</li>
              <li>Tjenesten er en uavhengig rådgivningstjeneste og ikke finansrådgivning etter finansforetaksloven.</li>
            </ul>
          </section>

          <section className="animate-on-scroll animate-delay-600 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              §6 Oppsigelse
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Avtalen kan sies opp skriftlig av begge parter før arbeidet påbegynnes.</li>
              <li>Etter oppstart gjelder vilkårene i §3, med rett til refusjon dersom ingen forbedring kan dokumenteres.</li>
            </ul>
          </section>

          <section className="animate-on-scroll animate-delay-700 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              §7 Konfidensialitet
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>All informasjon kunden oppgir behandles strengt konfidensielt og deles kun med relevante aktører som er nødvendige for å gjennomføre sammenligningen.</li>
              <li>Ingen informasjon brukes til markedsføring uten kundens samtykke.</li>
            </ul>
          </section>

          <section className="animate-on-scroll animate-delay-800 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              §8 Tvister
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Eventuelle tvister søkes løst i minnelighet.</li>
              <li>Dersom partene ikke oppnår enighet, skal saken behandles etter norsk lov med Oslo tingrett som verneting.</li>
            </ul>
          </section>

          <section className="animate-on-scroll animate-delay-900 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Kontakt
            </h2>
            <div className="bg-blue-50 rounded-[15px] p-6">
              <p className="text-gray-700 mb-2">
                <strong>E-post:</strong>{" "}
                <a
                  href="mailto:kontakt@dinforsikringshjelp.no"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  kontakt@dinforsikringshjelp.no
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Organisasjonsnummer:</strong> 933 424 766
              </p>
            </div>
          </section>
        </div>

        {/* Back to Home Button */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-[15px] bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            Tilbake til forsiden
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-blue-100 bg-gradient-to-b from-white to-blue-50/20 mt-16">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="flex items-center mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-[15px] bg-gradient-to-br from-blue-600 to-blue-400 text-white font-bold text-lg shadow-lg">
                  D
                </div>
                <span className="ml-3 text-lg font-semibold text-gray-900">
                  dinforsikringshjelp.no
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Uavhengig forsikringssammenligning for privatpersoner i Norge.
              </p>
            </div>

            <div>
              <h3 className="mb-5 text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Sider
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/personvern"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    Personvern
                  </Link>
                </li>
                <li>
                  <Link
                    href="/vilkar"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    Vilkår
                  </Link>
                </li>
                <li>
                  <a
                    href="https://tally.so"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    Start skjema
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Kontakt
              </h3>
              <p className="text-gray-600">
                <a
                  href="mailto:kontakt@dinforsikringshjelp.no"
                  className="hover:text-blue-600 transition-colors duration-300"
                >
                  kontakt@dinforsikringshjelp.no
                </a>
              </p>
            </div>
          </div>

          <div className="mt-12 border-t border-blue-100 pt-8">
            <p className="text-center text-sm text-gray-500">
              © 2025 dinforsikringshjelp.no • Organisasjonsnummer: 933 424 766
            </p>
            <p className="text-center text-xs text-gray-400 mt-3">
              Powered by{" "}
              <a
                href="https://lanuitech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
              >
                Lanui Tech
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
