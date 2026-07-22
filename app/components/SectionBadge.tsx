import type { ReactNode } from "react";

export default function SectionBadge({
  number,
  children,
  borderClass = "border-gray-200",
}: {
  number: string;
  children: ReactNode;
  borderClass?: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-6 sm:mb-8">
      <span className="flex w-6 h-6 sm:w-7 sm:h-7 items-center justify-center rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold">
        {number}
      </span>
      <span
        className={`rounded-full border ${borderClass} px-3 sm:px-4 py-1 sm:py-1.5 text-[12px] sm:text-[13px] font-medium text-gray-900`}
      >
        {children}
      </span>
    </div>
  );
}
