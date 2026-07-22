import { Car, House, Sofa, Plane, HeartPulse, Sailboat } from "lucide-react";
import Reveal from "./Reveal";

const CATEGORIES = [
  { label: "Bil", Icon: Car },
  { label: "Hus", Icon: House },
  { label: "Innbo", Icon: Sofa },
  { label: "Reise", Icon: Plane },
  { label: "Liv", Icon: HeartPulse },
  { label: "Båt", Icon: Sailboat },
];

export default function CategoryStrip() {
  return (
    <section className="border-b border-gray-100 bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 py-8 sm:py-10">
        <Reveal>
          <p className="text-[13px] text-gray-500 mb-6 sm:mb-8">
            Vi sammenligner blant annet
          </p>
        </Reveal>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-y-6 gap-x-4">
          {CATEGORIES.map(({ label, Icon }, i) => (
            <Reveal
              key={label}
              delay={i * 60}
              className="group flex flex-col items-center gap-3"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5F5F5] text-gray-700 transition-colors duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:bg-[#1D4ED8]/10 group-hover:text-[#1D4ED8]">
                <Icon size={20} strokeWidth={1.5} />
              </span>
              <span className="text-[13px] text-gray-700">{label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
