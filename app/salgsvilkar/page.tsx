"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Salgsvilkar() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Navbar />

      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[20px] bg-white shadow-xl border border-blue-100 p-8 sm:p-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-8">
            Salgs- og kjøpsvilkår
          </h1>
          <p className="text-sm text-gray-500 mb-8">Dinforsikringshjelp.no</p>

          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Parter</h2>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p><strong>Selger:</strong> Dinforsikringshjelp.no</p>
              <p><strong>Juridisk enhet:</strong> Dinforsikringshjelp (ENK)</p>
              <p><strong>Org.nr:</strong> 933 424 766</p>
              <p><strong>E-post:</strong> <a href="mailto:kontakt@dinforsikringshjelp.no" className="text-blue-600 hover:text-blue-700 transition-colors">kontakt@dinforsikringshjelp.no</a></p>
            </div>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">2. Tjenesten</h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                Dinforsikringshjelp.no tilbyr digital forsikringsgjennomgang hvor vi innhenter og sammenligner forsikringstilbud fra flere selskaper på vegne av kunden.
              </p>
              <p>
                Tjenesten leveres digitalt, normalt innen 24–48 timer.
              </p>
            </div>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Betaling</h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                Tjenesten betales før utlevert innhenting for kunde. Tjenesten betales ikke før arbeidet starter.
              </p>
              <p>
                Betaling skjer via Vipps eller kort.
              </p>
            </div>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Angrerett</h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                Ved innsending av skjema og godkjenning av vilkår samtykker kunden til at tjenesten kan starte umiddelbart.
              </p>
              <p>
                Når arbeidet påbegynnes, faller angreretten bort.
              </p>
            </div>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          {/* Section 5 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">5. Retur</h2>
            <div className="text-gray-700 leading-relaxed">
              <p>
                Tjenesten er digital og kan ikke returneres.
              </p>
            </div>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          {/* Section 6 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">6. Reklamasjon</h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                Dersom kunden mener det foreligger feil eller mangler i tjenesten, kan henvendelse sendes til <a href="mailto:kontakt@dinforsikringshjelp.no" className="text-blue-600 hover:text-blue-700 transition-colors">kontakt@dinforsikringshjelp.no</a>.
              </p>
              <p>
                Vi svarer normalt innen 24 timer.
              </p>
            </div>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          {/* Section 7 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">7. Konfliktløsning</h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                Eventuelle tvister behandles etter norsk lov.
              </p>
              <p>
                Kunden kan ta saken videre til Forbrukertilsynet eller de ordinære domstoler.
              </p>
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
