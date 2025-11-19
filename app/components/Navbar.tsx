"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center animate-fade-in animate-delay-100">
            <div className="relative h-10 w-10 rounded-[15px] overflow-hidden shadow-lg">
              <Image
                src="/logo.jpeg"
                alt="dinforsikringshjelp.no logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className="ml-3 text-lg sm:text-xl font-semibold text-gray-900">
              dinforsikringshjelp.no
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
              className="rounded-[15px] bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-2.5 text-white font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start skjema
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                href="/personvern"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium py-2"
              >
                Personvern
              </Link>
              <Link
                href="/vilkar"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium py-2"
              >
                Vilkår
              </Link>
              <a
                href="https://pci.jotform.com/form/253004702152038"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[15px] bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-2.5 text-white font-semibold hover:shadow-xl transition-all duration-300 text-center"
              >
                Start skjema
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
