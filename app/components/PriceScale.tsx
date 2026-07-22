"use client";

import { useState } from "react";
import { Clock } from "lucide-react";
import RollButton from "./RollButton";

const FORM_URL = "https://pci.jotform.com/form/253004702152038";

/**
 * The price is a function of how many policies you have, so the section is
 * built as a scale rather than a set of competing plans. Bar heights encode
 * price; they start at 42% so the cheapest tier still reads as a bar.
 */
const TIERS = [
  { label: "1 til 2", short: "1–2", price: 199, height: 42, min: 1, max: 2 },
  { label: "3 til 5", short: "3–5", price: 399, height: 57, min: 3, max: 5 },
  { label: "6 til 8", short: "6–8", price: 599, height: 72, min: 6, max: 8 },
  { label: "9 til 11", short: "9–11", price: 799, height: 86, min: 9, max: 11 },
  { label: "12 eller flere", short: "12+", price: 999, height: 100, min: 12, max: 99 },
];

const COUNTS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function PriceScale() {
  const [count, setCount] = useState(4);

  const activeIndex = TIERS.findIndex((t) => count >= t.min && count <= t.max);
  const active = TIERS[activeIndex];

  return (
    <div>
      {/* Selector */}
      <fieldset className="border-0 p-0 m-0">
        <legend className="text-[13px] text-gray-600 mb-4">
          Hvor mange forsikringer har du?
        </legend>
        <div className="flex flex-wrap gap-2">
          {COUNTS.map((n) => {
            const selected = n === count;
            return (
              <button
                key={n}
                type="button"
                aria-pressed={selected}
                onClick={() => setCount(n)}
                className={`h-10 min-w-[44px] px-3 rounded-full text-[14px] tabular-nums transition-[background-color,color,border-color] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-2 ${
                  selected
                    ? "bg-[#1D4ED8] text-white border border-[#1D4ED8]"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-gray-400"
                }`}
              >
                {n === 12 ? "12+" : n}
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Ladder */}
      <div className="mt-12 flex items-end gap-2 sm:gap-4 h-[190px] sm:h-[230px]">
        {TIERS.map((tier, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={tier.label}
              type="button"
              onClick={() => setCount(tier.min)}
              aria-label={`${tier.label} forsikringer, ${tier.price} kroner`}
              aria-pressed={isActive}
              className="group flex-1 h-full flex flex-col text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-2 rounded-t-xl"
            >
              {/* flex-1 gives this a definite height, so the bar's percentage
                  height resolves against it instead of overflowing. */}
              <div className="flex-1 flex flex-col justify-end min-h-0">
                <span
                  className={`block text-[15px] sm:text-[19px] font-medium tabular-nums tracking-[-0.02em] mb-2 transition-colors duration-300 ${
                    isActive ? "text-[#1D4ED8]" : "text-gray-400"
                  }`}
                >
                  {tier.price}
                  <span className="text-[11px] sm:text-[13px] font-normal">
                    {" "}
                    kr
                  </span>
                </span>

                <span
                  style={{ height: `${tier.height}%` }}
                  className={`block w-full rounded-t-lg transition-[background-color] duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                    isActive
                      ? "bg-[#1D4ED8]"
                      : "bg-gray-200 group-hover:bg-gray-300"
                  }`}
                />
              </div>

              <span
                className={`block text-[11px] sm:text-[13px] mt-3 tabular-nums transition-colors duration-300 ${
                  isActive ? "text-gray-900 font-medium" : "text-gray-500"
                }`}
              >
                {tier.short}
              </span>
            </button>
          );
        })}
      </div>

      {/* Readout */}
      <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t border-gray-300 pt-8">
        <div>
          <p className="text-[13px] text-gray-600">
            {count === 12 ? "12 forsikringer eller flere" : `${count} ${count === 1 ? "forsikring" : "forsikringer"}`}
          </p>
          <p className="mt-1 flex items-baseline gap-2">
            <span className="text-[44px] sm:text-[56px] font-medium leading-none tracking-[-0.03em] text-gray-900 tabular-nums">
              {active.price}
            </span>
            <span className="text-[16px] text-gray-500">kr</span>
          </p>
          <p className="mt-3 flex items-center gap-2 text-[13px] text-gray-600">
            <Clock size={14} className="text-[#1D4ED8]" />
            Levert digitalt innen 24 til 48 timer
          </p>
        </div>

        <RollButton href={FORM_URL}>Start forsikringsgjennomgang</RollButton>
      </div>
    </div>
  );
}
