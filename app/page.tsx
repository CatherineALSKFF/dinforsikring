"use client";

import Link from "next/link";
import { useEffect } from "react";
import Navbar from "./components/Navbar";

export default function Home() {
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

      <main>
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
                className="group inline-flex items-center justify-center rounded-[15px] bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
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
            <div className="animate-on-scroll rounded-[15px] bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-20 text-center shadow-2xl sm:px-16 relative overflow-hidden">
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

            <div className="animate-on-scroll animate-delay-200">
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
