"use client";

import Link from "next/link";
import { useEffect } from "react";

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center animate-fade-in animate-delay-100">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 text-white font-bold text-xl shadow-md">
                D
              </div>
              <span className="ml-3 text-xl font-semibold text-gray-900">
                dinforsikringshjelp.no
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8 animate-fade-in animate-delay-200">
              <Link
                href="/personvern"
                className="text-gray-600 hover:text-cyan-600 transition-colors font-medium"
              >
                Personvern
              </Link>
              <Link
                href="/vilkar"
                className="text-gray-600 hover:text-cyan-600 transition-colors font-medium"
              >
                Vilkår
              </Link>
              <Link
                href="#start"
                className="rounded-[20px] bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 px-5 py-2.5 text-white font-medium hover:shadow-lg transition-all hover:scale-105"
              >
                Start skjema
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="animate-on-scroll text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Uavhengig forsikringshjelp –{" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                enklere og tryggere valg
              </span>
            </h1>
            <p className="animate-on-scroll animate-delay-200 mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl">
              Vi sammenligner forsikringene dine og viser hvor du kan få bedre
              pris og bedre vilkår.
            </p>
            <div className="animate-on-scroll animate-delay-300 mt-10 flex justify-center">
              <a
                href="#start"
                className="group inline-flex items-center justify-center rounded-[20px] bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
              >
                Start forsikringsgjennomgang
                <svg
                  className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
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
        <section className="px-4 py-20 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Slik fungerer det
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Tre enkle steg til bedre forsikring
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-3">
              {/* Step 1 */}
              <div className="group relative">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 shadow-md transition-all group-hover:shadow-xl group-hover:scale-110">
                    <svg
                      className="h-10 w-10 text-blue-600"
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
                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    Send inn skjemaet
                  </h3>
                  <p className="text-gray-600">
                    2–3 minutter, kun det viktigste. Vi trenger bare grunnleggende
                    informasjon for å komme i gang.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="group relative">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 shadow-md transition-all group-hover:shadow-xl group-hover:scale-110">
                    <svg
                      className="h-10 w-10 text-blue-600"
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
                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    Vi sammenligner
                  </h3>
                  <p className="text-gray-600">
                    Vi henter og sammenligner tilbud for deg fra ulike
                    forsikringsselskaper.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="group relative">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 shadow-md transition-all group-hover:shadow-xl group-hover:scale-110">
                    <svg
                      className="h-10 w-10 text-blue-600"
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
                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    Du velger
                  </h3>
                  <p className="text-gray-600">
                    Se pris og vilkår side ved side, og velg det som passer deg
                    best.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reassuring CTA Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-16 text-center shadow-2xl sm:px-16">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Klar for å få oversikt?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
                Start en uforpliktende gjennomgang. Ingen bindinger, kun oversikt
                og bedre priser.
              </p>
              <div className="mt-8">
                <a
                  id="start"
                  href="https://tally.so"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl hover:scale-105"
                >
                  Start forsikringsgjennomgang
                  <svg
                    className="ml-2 h-5 w-5"
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
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="flex items-center mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold text-sm shadow-md">
                  D
                </div>
                <span className="ml-2 text-lg font-semibold text-gray-900">
                  dinforsikringshjelp.no
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Uavhengig forsikringssammenligning for privatpersoner i Norge.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Sider
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/personvern"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Personvern
                  </Link>
                </li>
                <li>
                  <Link
                    href="/vilkar"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Vilkår
                  </Link>
                </li>
                <li>
                  <a
                    href="https://tally.so"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Start skjema
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Kontakt
              </h3>
              <p className="text-gray-600">
                <a
                  href="mailto:kontakt@dinforsikringshjelp.no"
                  className="hover:text-blue-600 transition-colors"
                >
                  kontakt@dinforsikringshjelp.no
                </a>
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-center text-sm text-gray-500">
              © 2025 dinforsikringshjelp.no • Juridisk enhet: Dinforsikringshjelp
              (ENK)
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
