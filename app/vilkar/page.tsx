"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Vilkar() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Navbar />

      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[20px] bg-white shadow-xl border border-blue-100 p-8 sm:p-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Tjenesteavtale
          </h1>
          <p className="text-sm text-gray-500 mb-2">Dinforsikringshjelp.no</p>
          <p className="text-sm text-gray-500 mb-8">Organisasjonsnummer: 933 424 766</p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-8">
            <p className="text-gray-700 leading-relaxed">
              Avtalen gjelder mellom <strong>Dinforsikringshjelp.no (ENK)</strong> og <strong>Kunden</strong>.<br />
              Ved innsending av skjemaet på Dinforsikringshjelp.no aksepterer Kunden vilkårene nedenfor.
            </p>
          </div>

          {/* §1 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">§1 Formål</h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                Dinforsikringshjelp.no tilbyr en digital tjeneste hvor vi innhenter og sammenstiller forsikringstilbud på vegne av kunden.
              </p>
              <p><strong>Tjenesten består av å:</strong></p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Innhente tilbud basert på kundens egne opplysninger</li>
                <li>Sammenstille og presentere tilbudene på en oversiktlig måte</li>
                <li>Gi en nøytral fremstilling av forskjeller i pris og vilkår</li>
              </ul>
              <p className="font-semibold text-gray-900 mt-4">
                Dinforsikringshjelp.no gir ikke forsikringsrådgivning, anbefalinger eller faglige vurderinger.
                Kunden er selv ansvarlig for valg av selskap og produkter.
              </p>
            </div>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          {/* §2 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">§2 Uavhengighet</h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Dinforsikringshjelp.no mottar ingen provisjon fra forsikringsselskaper</li>
              <li>Kunden betaler hele vederlaget</li>
              <li>Tjenesten påvirker ikke kundens valg, og vi gir ingen anbefalinger</li>
            </ul>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          {/* §3 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">§3 Pris og betaling</h2>

            <div className="mb-6">
              <p className="font-semibold text-gray-900 mb-3">Prisstruktur (inkl. mva):</p>
              <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-[15px] p-6 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">1–2 produkter:</span>
                  <span className="font-bold text-gray-900">199 kr</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">3–5 produkter:</span>
                  <span className="font-bold text-gray-900">399 kr</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">6–8 produkter:</span>
                  <span className="font-bold text-gray-900">599 kr</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">9–11 produkter:</span>
                  <span className="font-bold text-gray-900">799 kr</span>
                </div>
                <div className="flex justify-between items-center border-t border-blue-200 pt-2">
                  <span className="text-gray-700">12+ produkter:</span>
                  <span className="font-bold text-blue-600 text-lg">999 kr</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <p className="font-semibold text-gray-900 mb-2">Betaling:</p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Betaling gjøres via Vipps eller Stripe</li>
                <li>Tjenesten betales før utlevert innhenting for kunde. Tjenesten betales ikke før arbeidet starter.</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-[15px] p-6">
              <p className="font-semibold text-gray-900 mb-2">Fornøyd-garanti:</p>
              <p className="text-gray-700 leading-relaxed mb-2">
                Dersom Dinforsikringshjelp.no ikke klarer å hente inn et like bra eller bedre tilbud enn kunden har i dag, refunderes hele beløpet.
              </p>
              <p className="text-gray-700">
                Refusjon behandles innen <strong>5–10 virkedager</strong>.
              </p>
            </div>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          {/* §4 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">§4 Samtykke og innhenting av tilbud</h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>Ved innsending av skjema samtykker kunden til at Dinforsikringshjelp.no kan:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Innhente tilbud fra forsikringsselskaper og tredjepartsleverandører (Bytt.no, Tjenestetorget, Finansportalen m.fl.)</li>
                <li>Behandle opplysningene kunden selv oppgir</li>
                <li>Foreta kredittsjekk når dette er nødvendig for å innhente reelle tilbud</li>
                <li>Kontakte kunden via e-post eller SMS for nødvendig oppfølging</li>
              </ul>
              <p className="font-semibold text-gray-900 mt-4">
                Samtykket gjelder til det trekkes tilbake skriftlig.
              </p>
            </div>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          {/* §5 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">§5 Ansvarsbegrensning</h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Dinforsikringshjelp.no garanterer ikke for fremtidige priser, vilkår eller rabatter hos forsikringsselskaper</li>
              <li>Kunden er selv ansvarlig for valg av forsikringsselskap og avtaleinngåelser</li>
              <li>Tjenesten er ikke finansrådgivning etter finansforetaksloven</li>
              <li>Dinforsikringshjelp.no kan ikke holdes ansvarlig for feil, mangler eller endringer i tredjeparts tilbud</li>
            </ul>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          {/* §6 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">§6 Oppsigelse</h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                Kunden kan avbestille tjenesten før arbeidet påbegynnes.
              </p>
              <p>
                Etter oppstart gjelder vilkårene i §3, inkludert garantien og refusjonsordningen.
              </p>
            </div>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          {/* §7 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">§7 Konfidensialitet</h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                All informasjon kunden oppgir behandles konfidensielt og deles kun med aktører hvor dette er nødvendig for å hente inn tilbud.
              </p>
              <p>
                Ingen informasjon brukes til markedsføring uten kundens uttrykkelige samtykke.
              </p>
            </div>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          {/* §8 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">§8 Tvister</h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                Tvister søkes løst i minnelighet.
              </p>
              <p>
                Dersom partene ikke kommer til enighet, gjelder norsk lov.
              </p>
              <p>
                <strong>Vernetingssted:</strong> Oslo tingrett.
              </p>
            </div>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          {/* Contact */}
          <section className="bg-blue-50 rounded-[15px] p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Kontakt</h2>
            <div className="text-gray-700 space-y-1">
              <p><strong>Dinforsikringshjelp.no</strong></p>
              <p>E-post: <a href="mailto:kontakt@dinforsikringshjelp.no" className="text-blue-600 hover:text-blue-700 transition-colors">kontakt@dinforsikringshjelp.no</a></p>
              <p>Organisasjonsnummer: 933 424 766</p>
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
