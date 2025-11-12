"use client";

import Link from "next/link";
import { useEffect } from "react";

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
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-[15px] bg-gradient-to-br from-blue-600 to-blue-400 text-white font-bold text-xl shadow-lg">
                D
              </div>
              <span className="ml-3 text-xl font-semibold text-gray-900">
                dinforsikringshjelp.no
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/personvern"
                className="text-blue-600 font-semibold transition-colors duration-300"
              >
                Personvern
              </Link>
              <Link
                href="/vilkar"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                Vilkår
              </Link>
              <Link
                href="/#start"
                className="rounded-[15px] bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-2.5 text-white font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Start skjema
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="animate-on-scroll mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Personvernerklæring
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Sist oppdatert: 12. november 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-blue max-w-none">
          <section className="animate-on-scroll mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Innledning
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dinforsikringshjelp (ENK) er opptatt av å beskytte ditt personvern.
              Denne personvernerklæringen forklarer hvordan vi samler inn,
              bruker, deler og beskytter dine personopplysninger når du bruker
              våre tjenester.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Vi behandler personopplysninger i samsvar med gjeldende
              personvernlovgivning, inkludert personopplysningsloven og
              EUs personvernforordning (GDPR).
            </p>
          </section>

          <section className="animate-on-scroll animate-delay-200 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Hvilke opplysninger samler vi inn?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vi samler inn følgende typer personopplysninger:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Kontaktinformasjon:</strong> Navn, e-postadresse, telefonnummer
              </li>
              <li>
                <strong>Forsikringsinformasjon:</strong> Nåværende forsikringer,
                dekningsgrad, premieinformasjon
              </li>
              <li>
                <strong>Personlig informasjon:</strong> Fødselsdato, adresse, sivilstatus
              </li>
              <li>
                <strong>Teknisk informasjon:</strong> IP-adresse, nettlesertype,
                enhetsinformasjon, informasjonskapsler
              </li>
            </ul>
          </section>

          <section className="animate-on-scroll animate-delay-300 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Hvordan bruker vi opplysningene?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vi bruker dine personopplysninger til følgende formål:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Å sammenligne forsikringstilbud fra ulike selskaper</li>
              <li>Å gi deg personlige anbefalinger</li>
              <li>Å kommunisere med deg om tjenesten vår</li>
              <li>Å forbedre og utvikle våre tjenester</li>
              <li>Å oppfylle juridiske forpliktelser</li>
            </ul>
          </section>

          <section className="animate-on-scroll animate-delay-400 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Deling av opplysninger
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vi kan dele dine personopplysninger med:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Forsikringsselskaper:</strong> For å hente inn tilbud på
                dine vegne
              </li>
              <li>
                <strong>Tjenesteleverandører:</strong> Som hjelper oss med å
                levere tjenesten (f.eks. IT-systemer, datalagring)
              </li>
              <li>
                <strong>Offentlige myndigheter:</strong> Når vi er lovpålagt til det
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Vi selger aldri dine personopplysninger til tredjeparter.
            </p>
          </section>

          <section className="animate-on-scroll animate-delay-500 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Informasjonskapsler (Cookies)
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Vi bruker informasjonskapsler for å forbedre brukeropplevelsen og
              analysere hvordan nettstedet vårt brukes. Du kan når som helst
              endre innstillingene for informasjonskapsler i nettleseren din.
            </p>
          </section>

          <section className="animate-on-scroll animate-delay-600 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Dine rettigheter
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Du har følgende rettigheter knyttet til dine personopplysninger:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Rett til innsyn:</strong> Du kan be om innsyn i hvilke
                opplysninger vi har om deg
              </li>
              <li>
                <strong>Rett til retting:</strong> Du kan be om å få rettet
                uriktige opplysninger
              </li>
              <li>
                <strong>Rett til sletting:</strong> Du kan be om å få slettet
                dine opplysninger
              </li>
              <li>
                <strong>Rett til begrensning:</strong> Du kan be om å begrense
                behandlingen av dine opplysninger
              </li>
              <li>
                <strong>Rett til dataportabilitet:</strong> Du kan be om å få
                utlevert dine opplysninger i et maskinlesbart format
              </li>
              <li>
                <strong>Rett til å protestere:</strong> Du kan protestere mot
                behandling av dine opplysninger
              </li>
            </ul>
          </section>

          <section className="animate-on-scroll animate-delay-700 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Lagring av opplysninger
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Vi lagrer dine personopplysninger så lenge det er nødvendig for å
              oppfylle formålene beskrevet i denne personvernerklæringen, eller
              så lenge det er påkrevd av lov. Når opplysningene ikke lenger er
              nødvendige, vil de bli slettet eller anonymisert.
            </p>
          </section>

          <section className="animate-on-scroll animate-delay-800 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Sikkerhet
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Vi bruker tekniske og organisatoriske sikkerhetstiltak for å
              beskytte dine personopplysninger mot uautorisert tilgang, endring,
              avsløring eller ødeleggelse. Ingen system er imidlertid helt
              sikre, og vi kan ikke garantere absolutt sikkerhet.
            </p>
          </section>

          <section className="animate-on-scroll animate-delay-900 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Kontakt oss
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Hvis du har spørsmål om denne personvernerklæringen eller vil
              utøve dine rettigheter, kan du kontakte oss:
            </p>
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
                <strong>Juridisk enhet:</strong> Dinforsikringshjelp (ENK)
              </p>
            </div>
          </section>

          <section className="animate-on-scroll animate-delay-1000">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Endringer i personvernerklæringen
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Vi kan oppdatere denne personvernerklæringen fra tid til annen.
              Vi vil informere deg om eventuelle vesentlige endringer ved å
              publisere den oppdaterte versjonen på nettstedet vårt.
            </p>
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
              © 2025 dinforsikringshjelp.no • Juridisk enhet: Dinforsikringshjelp
              (ENK)
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
