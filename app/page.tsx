"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

export default function Home() {
  const [isGuaranteeExpanded, setIsGuaranteeExpanded] = useState(false);

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
      {/* Fixed background decoration layer */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="bg-splash" style={{ width: '400px', height: '400px', top: '5%', right: '10%' }}></div>
        <div className="bg-splash" style={{ width: '350px', height: '350px', top: '30%', left: '5%' }}></div>
        <div className="bg-splash" style={{ width: '300px', height: '300px', top: '50%', right: '15%' }}></div>
        <div className="bg-splash" style={{ width: '320px', height: '320px', top: '70%', left: '10%' }}></div>
        <div className="bg-splash" style={{ width: '280px', height: '280px', top: '85%', right: '8%' }}></div>
        <div className="bg-splash" style={{ width: '250px', height: '250px', top: '15%', left: '50%' }}></div>
      </div>

      <Navbar />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent pointer-events-none"></div>
          <div className="relative mx-auto max-w-5xl text-center">
            <h1 className="animate-on-scroll text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-tight">
              Uavhengig forsikringshjelp –{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                enklere og tryggere valg
              </span>
            </h1>
            <p className="animate-on-scroll animate-delay-200 mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl">
              Vi sammenligner forsikringene dine og viser hvor du kan få bedre
              pris og bedre vilkår.
            </p>
            <div className="animate-on-scroll animate-delay-300 mt-12 flex justify-center gap-4">
              <a
                href="https://pci.jotform.com/form/253004702152038"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center rounded-[15px] bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                Start forsikringsgjennomgang
                <svg
                  className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Money-Back Guarantee Section */}
        <section className="relative px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/30 to-white">
          <div className="mx-auto max-w-4xl">
            <div className="animate-on-scroll bg-white rounded-[20px] shadow-xl border border-blue-100 overflow-hidden">
              <div className="p-8 sm:p-12">
                <div className="flex items-center justify-center mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
                  Pengene-tilbake-garanti
                </h2>
                <p className="text-center text-gray-600 text-lg mb-6">
                  Vi ønsker at dette skal være helt trygt for deg. Derfor har vi en enkel garanti:
                </p>

                <div className={`transition-all duration-500 ease-in-out ${isGuaranteeExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <div className="bg-gradient-to-br from-blue-50 via-blue-50/50 to-sky-100/60 rounded-[15px] p-6 sm:p-8 mb-6">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong className="text-gray-900">Finner vi ikke en bedre forsikringsavtale enn du har i dag – får du hele beløpet tilbake.</strong>
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Du betaler altså kun dersom vi klarer å skaffe deg en bedre pris eller bedre dekning. Dette sikrer at du ikke tar noen risiko, og at du kun betaler for faktisk verdi.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">Slik fungerer det:</h3>
                    <ol className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold mr-3 mt-0.5">1</span>
                        <span className="text-gray-700">Du sender oss dine nåværende forsikringer.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold mr-3 mt-0.5">2</span>
                        <span className="text-gray-700">Vi henter inn tilbud fra flere selskaper og setter det opp i en tydelig sammenligning.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold mr-3 mt-0.5">3</span>
                        <span className="text-gray-700">Dersom vi finner en løsning som er bedre for deg → du betaler for tjenesten.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold mr-3 mt-0.5">4</span>
                        <span className="text-gray-700">Hvis ikke → vi refunderer hele beløpet, uten spørsmål.</span>
                      </li>
                    </ol>

                    <div className="bg-white rounded-[15px] p-6 shadow-md">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Kort fortalt:</h4>
                      <p className="text-xl font-bold text-blue-600">Ingen besparelse = ingen kostnad.</p>
                      <p className="text-gray-700 mt-3 leading-relaxed">
                        Dette gjør tjenesten vår helt risikofri for deg, og sikrer at du kun betaler når du faktisk får en bedre avtale.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={() => setIsGuaranteeExpanded(!isGuaranteeExpanded)}
                    className="group inline-flex items-center justify-center rounded-[15px] bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                  >
                    {isGuaranteeExpanded ? 'Vis mindre' : 'Les mer'}
                    <svg
                      className={`ml-2 h-5 w-5 transition-transform duration-300 ${isGuaranteeExpanded ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="relative px-4 py-16 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-5xl">
            <div className="animate-on-scroll text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Priser
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Enkle og forutsigbare priser basert på antall forsikringer
              </p>
            </div>

            <div className="animate-on-scroll animate-delay-200 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Pricing Card 1 */}
              <div className="group relative overflow-hidden rounded-[15px] border border-blue-200 bg-gradient-to-br from-white to-blue-50/30 p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4">
                  <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">1-2 forsikringer</div>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">199</span>
                    <span className="ml-2 text-gray-600">kr</span>
                  </div>
                </div>
              </div>

              {/* Pricing Card 2 */}
              <div className="group relative overflow-hidden rounded-[15px] border border-blue-200 bg-gradient-to-br from-white to-blue-50/30 p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4">
                  <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">3-5 forsikringer</div>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">399</span>
                    <span className="ml-2 text-gray-600">kr</span>
                  </div>
                </div>
              </div>

              {/* Pricing Card 3 */}
              <div className="group relative overflow-hidden rounded-[15px] border border-blue-200 bg-gradient-to-br from-white to-blue-50/30 p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4">
                  <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">6-8 forsikringer</div>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">599</span>
                    <span className="ml-2 text-gray-600">kr</span>
                  </div>
                </div>
              </div>

              {/* Pricing Card 4 */}
              <div className="group relative overflow-hidden rounded-[15px] border border-blue-200 bg-gradient-to-br from-white to-blue-50/30 p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4">
                  <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">9-11 forsikringer</div>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">799</span>
                    <span className="ml-2 text-gray-600">kr</span>
                  </div>
                </div>
              </div>

              {/* Pricing Card 5 */}
              <div className="group relative overflow-hidden rounded-[15px] border-2 border-blue-400 bg-gradient-to-br from-blue-50 to-blue-100/50 p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-[10px]">
                  POPULÆRT
                </div>
                <div className="mb-4 mt-2">
                  <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">12+ forsikringer</div>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">999</span>
                    <span className="ml-2 text-gray-600">kr</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Time Notice */}
            <div className="animate-on-scroll animate-delay-300 mt-10 text-center">
              <div className="inline-flex items-center justify-center rounded-[15px] bg-gradient-to-r from-blue-50 to-sky-100/60 px-6 py-4 shadow-sm border border-blue-200">
                <svg className="h-5 w-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700 font-medium">
                  Tjenesten leveres digitalt innen 24–48 timer.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 3-Step Process Section */}
        <section className="px-4 py-24 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50/30">
          <div className="mx-auto max-w-7xl">
            <div className="animate-on-scroll text-center mb-20">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                Slik fungerer det
              </h2>
              <p className="mt-5 text-lg text-gray-600">
                Tre enkle steg til bedre forsikring
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
              {/* Step 1 */}
              <div className="animate-on-scroll group">
                <div className="flex flex-col items-center text-center p-8 rounded-[15px] bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-[15px] bg-gradient-to-br from-blue-500 to-blue-300 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-110">
                    <svg
                      className="h-10 w-10 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div className="mb-3 text-sm font-bold text-blue-600">
                    STEG 1
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-gray-900">
                    Send inn skjemaet
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    2–3 minutter, kun det viktigste. Vi trenger bare grunnleggende
                    informasjon for å komme i gang.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="animate-on-scroll animate-delay-200 group">
                <div className="flex flex-col items-center text-center p-8 rounded-[15px] bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-[15px] bg-gradient-to-br from-blue-500 to-blue-300 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-110">
                    <svg
                      className="h-10 w-10 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </div>
                  <div className="mb-3 text-sm font-bold text-blue-600">
                    STEG 2
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-gray-900">
                    Vi sammenligner
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Vi henter og sammenligner tilbud for deg fra ulike
                    forsikringsselskaper.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="animate-on-scroll animate-delay-400 group">
                <div className="flex flex-col items-center text-center p-8 rounded-[15px] bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-[15px] bg-gradient-to-br from-blue-500 to-blue-300 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-110">
                    <svg
                      className="h-10 w-10 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="mb-3 text-sm font-bold text-blue-600">
                    STEG 3
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-gray-900">
                    Du velger
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Se pris og vilkår side ved side, og velg det som passer deg
                    best.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reassuring CTA Section */}
        <section className="px-4 py-24 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/30 to-white">
          <div className="mx-auto max-w-5xl">
            <div className="animate-on-scroll rounded-[15px] bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 px-8 py-20 text-center shadow-2xl sm:px-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
              <div className="relative">
                <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  Klar for å få oversikt?
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 sm:text-xl leading-relaxed">
                  Start en uforpliktende gjennomgang. Ingen bindinger, kun oversikt
                  og bedre priser.
                </p>
                <div className="mt-10">
                  <a
                    id="start"
                    href="https://pci.jotform.com/form/253004702152038"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-[15px] bg-white px-10 py-4 text-lg font-semibold text-blue-600 shadow-xl transition-all duration-300 hover:bg-blue-50 hover:shadow-2xl hover:scale-105"
                  >
                    Start forsikringsgjennomgang
                    <svg
                      className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-blue-100 bg-gradient-to-b from-white to-blue-50/20">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="animate-on-scroll">
              <div className="flex items-center gap-3 mb-5">
                <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden">
                  <Image
                    src="/logo-forsikring.jpeg"
                    alt="dinforsikringshjelp.no logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-lg font-bold text-gray-800">
                  DinForsikringsHjelp.no
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

            <div className="animate-on-scroll animate-delay-200">
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

            <div className="animate-on-scroll animate-delay-400">
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
