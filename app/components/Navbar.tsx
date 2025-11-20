"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 animate-fade-in animate-delay-100">
              <div className="relative h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 flex-shrink-0 overflow-hidden">
                <Image
                  src="/logo-forsikring.jpeg"
                  alt="dinforsikringshjelp.no logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-sm sm:text-base lg:text-xl font-bold text-gray-800 whitespace-nowrap">
                DinForsikringsHjelp.no
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 animate-fade-in animate-delay-200">
              <Link
                href="/personvern"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                Personvern
              </Link>
              <Link
                href="/vilkar"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                Vilkår
              </Link>
              <a
                href="https://pci.jotform.com/form/253004702152038"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[15px] bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 px-6 py-2.5 text-white font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Start skjema
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors z-[60] relative"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-md z-[55] md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Menu Content - Slides in from right */}
      <nav
        className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-white z-[56] md:hidden shadow-2xl transform transition-transform duration-500 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button Header */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100">
            <span className="text-lg font-semibold text-gray-800">Meny</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gradient-to-br hover:from-blue-50 hover:to-sky-50 transition-all duration-300 group"
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6 text-gray-600 group-hover:text-blue-600 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 flex flex-col justify-center px-8 py-12 space-y-6">
            <Link
              href="/personvern"
              onClick={() => setIsMobileMenuOpen(false)}
              className="group py-4 px-6 text-xl font-semibold text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-[15px] hover:bg-gradient-to-r hover:from-blue-50/50 hover:via-sky-50/30 hover:to-blue-50/50"
            >
              Personvern
            </Link>
            <Link
              href="/vilkar"
              onClick={() => setIsMobileMenuOpen(false)}
              className="group py-4 px-6 text-xl font-semibold text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-[15px] hover:bg-gradient-to-r hover:from-blue-50/50 hover:via-sky-50/30 hover:to-blue-50/50"
            >
              Vilkår
            </Link>
            <a
              href="https://pci.jotform.com/form/253004702152038"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 rounded-[15px] bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 px-8 py-4 text-center text-lg text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Start skjema
            </a>
          </div>

          {/* Footer decoration */}
          <div className="px-8 py-6 border-t border-gray-100">
            <p className="text-sm text-gray-500 text-center">DinForsikringsHjelp.no</p>
          </div>
        </div>
      </nav>
    </>
  );
}
