"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Personvern() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Navbar />

      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[20px] bg-white shadow-xl border border-blue-100 p-8 sm:p-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-8">
            Personvernerklæring
          </h1>
          <p className="text-sm text-gray-500 mb-8">Dinforsikringshjelp.no</p>

          {/* Behandlingsansvarlig */}
          <section className="mb-8 bg-blue-50 rounded-[15px] p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Behandlingsansvarlig:</h2>
            <div className="text-gray-700 space-y-1">
              <p><strong>Dinforsikringshjelp (ENK)</strong></p>
              <p>Org.nr: 933 424 766</p>
              <p>E-post: <a href="mailto:kontakt@dinforsikringshjelp.no" className="text-blue-600 hover:text-blue-700 transition-colors">kontakt@dinforsikringshjelp.no</a></p>
            </div>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          {/* Formål */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Formål</h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                Vi behandler personopplysninger for å kunne innhente og sammenstille forsikringstilbud på vegne av kunden, samt levere den tjenesten kunden bestiller.
              </p>
              <p>
                Dinforsikringshjelp.no gir ikke forsikringsrådgivning og vurderer ikke hvilke produkter kunden bør velge.
              </p>
            </div>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          {/* Hvilke opplysninger */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Hvilke opplysninger vi behandler</h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>Vi behandler følgende kategorier av personopplysninger:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Navn og kontaktinformasjon (e-postadresse, evt. telefon hvis oppgitt)</li>
                <li>Opplysninger kunden oppgir om sine eksisterende forsikringer (f.eks. selskap, premie, vilkår, dekninger, antall produkter)</li>
                <li>Informasjon og tilbud som innhentes fra forsikringsselskaper og tredjepartsaktører</li>
                <li>Interne driftsnotater som er nødvendige for å utføre tjenesten</li>
              </ul>
              <p className="font-semibold text-gray-900 mt-4">
                Vi behandler ikke sensitive personopplysninger.
              </p>
            </div>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          {/* Rettslig grunnlag */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Rettslig grunnlag</h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>Behandlingen av personopplysninger skjer på følgende grunnlag:</p>
              <div className="bg-blue-50 rounded-[15px] p-4 my-3">
                <p className="font-semibold text-gray-900 mb-2">Samtykke, jf. GDPR artikkel 6(1)(a).</p>
                <p>Kunden gir samtykke ved å sende inn skjema på Dinforsikringshjelp.no.</p>
              </div>
              <p className="font-semibold text-gray-900">
                Samtykket kan når som helst trekkes tilbake ved å kontakte oss skriftlig.
              </p>
            </div>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          {/* Lagring og sletting */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Lagring og sletting</h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                Personopplysninger lagres sikkert i tilgangsstyrte og krypterte systemer (Google Workspace og Notion).
              </p>
              <p>
                Vi lagrer opplysningene i inntil <strong>12 måneder</strong> etter at tjenesten er fullført, med mindre lengre lagring følger av lov eller særskilt avtale.
              </p>
              <p>
                Ved forespørsel kan data slettes tidligere.
              </p>
            </div>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          {/* Deling av informasjon */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Deling av informasjon</h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>Vi deler kun personopplysninger med aktører som er nødvendige for å innhente tilbud og levere tjenesten:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Forsikringsselskaper</li>
                <li>Tredjeparts sammenligningstjenester (Bytt.no, Tjenestetorget, Finansportalen m.fl.)</li>
                <li>Tekniske tjenesteleverandører som brukes for drift av løsningen (f.eks. Jotform, e-postsystemer)</li>
              </ul>

              <div className="bg-green-50 border border-green-200 rounded-[15px] p-4 my-4">
                <p className="font-semibold text-gray-900 mb-2">Vi:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>selger aldri personopplysninger</li>
                  <li>deler ikke data til markedsføring uten kundens uttrykkelige samtykke</li>
                  <li>begrenser deling til det som er nødvendig for tjenesten</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          {/* Dine rettigheter */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Dine rettigheter</h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>Som kunde har du rett til å:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Be om innsyn i hvilke opplysninger vi har lagret</li>
                <li>Be om retting av feil eller mangelfulle opplysninger</li>
                <li>Be om sletting av dine data</li>
                <li>Be om kopi av dine data (dataportabilitet)</li>
                <li>Trekke tilbake samtykke når som helst</li>
              </ul>
              <p className="mt-4">
                Forespørsler sendes til <a href="mailto:kontakt@dinforsikringshjelp.no" className="text-blue-600 hover:text-blue-700 transition-colors font-semibold">kontakt@dinforsikringshjelp.no</a>.
              </p>
              <p>
                Vi svarer innen <strong>30 dager</strong>.
              </p>
            </div>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          {/* Sikkerhet */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Sikkerhet</h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                Vi benytter sikre og krypterte lagringsløsninger, samt rutiner for tilgangsstyring.
              </p>
              <p>Dette beskytter personopplysningene mot:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>uautorisert tilgang</li>
                <li>endring</li>
                <li>tap</li>
                <li>misbruk</li>
              </ul>
            </div>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          {/* Endringer */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Endringer i personvernerklæringen</h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                Personvernerklæringen kan oppdateres ved behov.
              </p>
              <p>
                <strong>Siste oppdatering:</strong> november 2025.
              </p>
            </div>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          {/* Kontaktinformasjon */}
          <section className="bg-blue-50 rounded-[15px] p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Kontaktinformasjon</h2>
            <div className="text-gray-700 space-y-1">
              <p><strong>Dinforsikringshjelp.no</strong></p>
              <p>E-post: <a href="mailto:kontakt@dinforsikringshjelp.no" className="text-blue-600 hover:text-blue-700 transition-colors">kontakt@dinforsikringshjelp.no</a></p>
              <p>Nettside: <a href="https://www.dinforsikringshjelp.no" className="text-blue-600 hover:text-blue-700 transition-colors">www.dinforsikringshjelp.no</a></p>
            </div>
          </section>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-[15px] bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
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
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Uavhengig forsikringssammenligning for privatpersoner i Norge.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p className="font-semibold text-gray-800">Dinforsikringshjelp (ENK)</p>
                <p>Org.nr: 933 424 766</p>
                <p>
                  <a
                    href="mailto:kontakt@dinforsikringshjelp.no"
                    className="hover:text-blue-600 transition-colors duration-300"
                  >
                    E-post: kontakt@dinforsikringshjelp.no
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Sider
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/vilkar"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    Vilkår
                  </Link>
                </li>
                <li>
                  <Link
                    href="/salgsvilkar"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    Salgs- og kjøpsvilkår
                  </Link>
                </li>
                <li>
                  <Link
                    href="/personvern"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    Personvern
                  </Link>
                </li>
                <li>
                  <a
                    href="https://pci.jotform.com/form/253004702152038"
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
                Lanuit Tech LLC
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
