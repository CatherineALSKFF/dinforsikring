"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Vilkar() {
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
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                Personvern
              </Link>
              <Link
                href="/vilkar"
                className="text-blue-600 font-semibold transition-colors duration-300"
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
            Vilkår og betingelser
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Sist oppdatert: 12. november 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-blue max-w-none">
          <section className="animate-on-scroll mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Aksept av vilkår
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ved å bruke dinforsikringshjelp.no ("Tjenesten") godtar du disse
              vilkårene og betingelsene. Hvis du ikke godtar disse vilkårene,
              ber vi deg om ikke å bruke Tjenesten.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Dinforsikringshjelp (ENK) ("vi", "oss", "vår") forbeholder oss
              retten til å endre disse vilkårene når som helst. Eventuelle
              endringer vil bli publisert på denne siden.
            </p>
          </section>

          <section className="animate-on-scroll animate-delay-200 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Tjenestebeskrivelse
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dinforsikringshjelp.no er en uavhengig sammenlignings- og
              rådgivningstjeneste for forsikringsprodukter i Norge. Vi:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Sammenligner forsikringstilbud fra ulike selskaper</li>
              <li>Gir oversikt over pris og dekningsgrad</li>
              <li>Hjelper deg med å finne forsikringer som passer dine behov</li>
              <li>Tilrettelegger kontakt med forsikringsselskaper</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Vi er ikke et forsikringsselskap og utsteder ikke forsikringer.
            </p>
          </section>

          <section className="animate-on-scroll animate-delay-300 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Brukerens ansvar
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ved bruk av Tjenesten forplikter du deg til å:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Oppgi korrekt og oppdatert informasjon</li>
              <li>Ikke misbruke eller forsøke å omgå Tjenestens systemer</li>
              <li>Ikke bruke Tjenesten til ulovlige eller uredelige formål</li>
              <li>Holde eventuell påloggingsinformasjon konfidensiell</li>
              <li>
                Selv lese og forstå vilkårene i forsikringsavtaler før du inngår
                dem
              </li>
            </ul>
          </section>

          <section className="animate-on-scroll animate-delay-400 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Nøyaktighet av informasjon
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vi streber etter å gi nøyaktig og oppdatert informasjon, men vi
              kan ikke garantere at all informasjon på Tjenesten til enhver tid
              er helt korrekt eller fullstendig.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Prisene og vilkårene som presenteres er veiledende. Endelige
              betingelser og priser vil bli bekreftet av forsikringsselskapet.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Det er ditt ansvar å verifisere all informasjon før du inngår en
              forsikringsavtale.
            </p>
          </section>

          <section className="animate-on-scroll animate-delay-500 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Uavhengighet og provisjon
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dinforsikringshjelp.no er en uavhengig tjeneste. Vi mottar provisjon
              fra forsikringsselskaper når brukere inngår forsikringsavtaler
              gjennom vår tjeneste.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Provisjonen påvirker ikke prisen du betaler for forsikringen, og
              vi bestreber oss på å gi objektive sammenligninger uavhengig av
              provisjonsnivå.
            </p>
          </section>

          <section className="animate-on-scroll animate-delay-600 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Ansvarsbegrensning
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tjenesten leveres "som den er" uten noen form for garantier, verken
              eksplisitte eller implisitte.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vi er ikke ansvarlige for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Tap eller skade som følge av bruk av Tjenesten</li>
              <li>Beslutninger du tar basert på informasjon fra Tjenesten</li>
              <li>
                Problemer med forsikringsavtaler inngått med tredjeparter
              </li>
              <li>
                Avbrudd, forsinkelser eller feil i Tjenesten
              </li>
              <li>Uautorisert tilgang til dine opplysninger</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Vårt ansvar er begrenset til maksimalt kr 5 000,- per hendelse.
            </p>
          </section>

          <section className="animate-on-scroll animate-delay-700 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Immaterielle rettigheter
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Alt innhold på dinforsikringshjelp.no, inkludert tekst, grafikk,
              logoer, bilder og programvare, eies av eller er lisensiert til
              Dinforsikringshjelp (ENK) og er beskyttet av opphavsrett og andre
              immaterielle rettigheter. Du kan ikke kopiere, reprodusere,
              distribuere eller på annen måte bruke innholdet uten vårt skriftlige
              samtykke.
            </p>
          </section>

          <section className="animate-on-scroll animate-delay-800 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Lenker til tredjeparter
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Tjenesten kan inneholde lenker til tredjeparters nettsteder. Vi er
              ikke ansvarlige for innholdet på disse nettstedene eller deres
              personvernpraksis. Vi oppfordrer deg til å lese vilkårene og
              personvernerklæringene til alle nettsteder du besøker.
            </p>
          </section>

          <section className="animate-on-scroll animate-delay-900 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Oppsigelse
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Vi forbeholder oss retten til å suspendere eller avslutte din
              tilgang til Tjenesten når som helst, uten forvarsel, dersom vi
              mener at du har brutt disse vilkårene eller for andre legitime
              grunner.
            </p>
          </section>

          <section className="animate-on-scroll animate-delay-1000 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Gjeldende lov og verneting
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Disse vilkårene er underlagt norsk lov. Eventuelle tvister skal
              søkes løst ved forhandlinger. Dersom en minnelig løsning ikke kan
              oppnås, skal tvisten avgjøres ved alminnelig norsk domstol.
            </p>
          </section>

          <section className="animate-on-scroll animate-delay-1100 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Angrefrist
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Angrefrist for forsikringsavtaler reguleres av den enkelte
              forsikringsavtale og gjeldende lovgivning. Kontakt
              forsikringsselskapet direkte for informasjon om angrefrist.
            </p>
          </section>

          <section className="animate-on-scroll animate-delay-1200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12. Kontakt oss
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Hvis du har spørsmål om disse vilkårene, kan du kontakte oss:
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
