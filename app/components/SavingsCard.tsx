import { TrendingDown } from "lucide-react";

/**
 * Visual, wordless comparison of "before" and "after" a review.
 *
 * Carries no kroner figures on purpose: a concrete savings number is a
 * marketing claim under Norwegian law that must be substantiated with real
 * customer data. The bars are relative and unlabelled.
 */
export default function SavingsCard() {
  return (
    <div className="w-full lg:w-[360px] rounded-2xl bg-white/90 backdrop-blur-md p-6 sm:p-7 shadow-[0_8px_40px_rgba(16,32,64,0.12)]">
      <span className="text-[13px] font-medium text-gray-900">
        Din forsikringsoversikt
      </span>

      {/* Each column is a flex-col so the bar track gets a definite height
          from flex-1; percentage heights on the bars resolve against it. */}
      <div className="mt-7 flex gap-5 h-[150px]">
        <div className="flex-1 flex flex-col">
          <div className="flex-1 flex items-end justify-center px-3">
            <div className="w-full h-full rounded-t-xl bg-gray-200" />
          </div>
          <span className="mt-3 text-center text-[12px] text-gray-500">
            I dag
          </span>
        </div>

        <div className="flex-1 flex flex-col">
          <div className="flex-1 flex items-end justify-center px-3">
            <div className="w-full h-[62%] rounded-t-xl bg-[#1D4ED8]" />
          </div>
          <span className="mt-3 text-center text-[12px] font-medium text-gray-900">
            Etter gjennomgang
          </span>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2.5 rounded-xl bg-[#1D4ED8]/8 px-4 py-3">
        <TrendingDown size={16} className="shrink-0 text-[#1D4ED8]" />
        <span className="text-[13px] font-medium text-[#1D4ED8]">
          Lavere pris, minst like god dekning
        </span>
      </div>

      <p className="mt-4 text-[11px] text-gray-400">
        Illustrasjon, ikke et pristilbud.
      </p>
    </div>
  );
}
