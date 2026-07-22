"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, Clock, Menu, X } from "lucide-react";
import RollButton from "./RollButton";

const EASE = "ease-[cubic-bezier(0.25,0.1,0.25,1)]";
const FORM_URL = "https://pci.jotform.com/form/253004702152038";

const NAV_LINKS = [
  { label: "Personvern", href: "/personvern" },
  { label: "Vilkår", href: "/vilkar" },
  { label: "Salgsvilkår", href: "/salgsvilkar" },
];

function useOsloTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("nb-NO", {
          timeZone: "Europe/Oslo",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // null until mounted so server and client markup match.
  return time;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const time = useOsloTime();

  return (
    <>
      <div className="relative z-20 mx-auto w-full max-w-[1440px] p-2 sm:p-3">
        <nav className="flex items-center justify-between rounded-full bg-white p-[5px] shadow-[0_4px_24px_rgba(16,32,64,0.10)] ring-1 ring-gray-900/5">
          {/* Left: logo + links */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <span className="relative block w-9 h-9 sm:w-10 sm:h-10">
                <Image
                  src="/logo-forsikring.jpeg"
                  alt="DinForsikringsHjelp.no logo"
                  fill
                  sizes="40px"
                  className="object-contain"
                  priority
                />
              </span>
              <span className="text-[13px] sm:text-[14px] font-semibold tracking-tight text-gray-900 whitespace-nowrap">
                DinForsikringsHjelp.no
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-[14px] text-gray-900 hover:text-gray-500 transition-colors duration-300"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: status, clock, CTA */}
          <div className="hidden md:flex items-center gap-4 pr-[1px]">
            <span className="hidden lg:inline text-[13px] text-gray-600">
              Svar innen 24 til 48 timer
            </span>
            <span className="flex items-center gap-1.5 text-[13px] text-gray-600">
              <Clock size={14} />
              <span className="tabular-nums">
                {time ? `${time} i Oslo` : "i Oslo"}
              </span>
            </span>
            <RollButton href={FORM_URL} variant="dark" size="sm">
              Start skjema
            </RollButton>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Lukk meny" : "Åpne meny"}
            className="md:hidden mr-[1px] flex items-center gap-1.5 rounded-full bg-gray-900 px-4 py-2 text-[13px] font-medium text-white"
          >
            {isOpen ? <X size={14} /> : <Menu size={14} />}
            {isOpen ? "Lukk" : "Meny"}
          </button>
        </nav>
      </div>

      {/* Mobile bottom sheet */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${
          isOpen ? "" : "pointer-events-none"
        }`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute inset-x-0 bottom-0 mx-3 mb-3 rounded-2xl bg-white p-6 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            isOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1.5 text-[12px] text-gray-600">
            <Clock size={13} />
            <span className="tabular-nums">
              {time ? `${time} i Oslo` : "i Oslo"}
            </span>
          </span>

          <div className="mt-6 flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setIsOpen(false)}
                className="text-[28px] leading-[32px] font-medium tracking-tight text-gray-900"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className={`mt-8 flex items-center justify-between rounded-full bg-[#1D4ED8] pl-5 pr-2 py-2 text-[14px] font-medium text-white transition-colors duration-500 ${EASE}`}
          >
            Start forsikringsgjennomgang
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
              <ArrowRight size={15} className="text-[#1D4ED8]" />
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
