import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "./Navbar";

/**
 * Header band for the legal pages. The navbar is a white pill, so it needs a
 * tinted surface behind it to read; this also gives the pages the same
 * top-of-page rhythm as the home hero without loading the shader.
 */
export default function LegalHeader({
  title,
  meta,
}: {
  title: string;
  meta?: string;
}) {
  return (
    <div className="bg-[#e8eefb]">
      <Navbar />
      <div className="mx-auto w-full max-w-[900px] px-5 sm:px-8 pt-8 pb-14 sm:pt-12 sm:pb-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[13px] text-gray-600 hover:text-gray-900 transition-colors duration-300"
        >
          <ArrowLeft size={14} />
          Tilbake til forsiden
        </Link>

        <h1 className="heading-section font-medium text-gray-900 mt-6">
          {title}
        </h1>

        <p className="mt-4 text-[14px] text-gray-600">
          Dinforsikringshjelp.no
          {meta ? ` · ${meta}` : ""}
        </p>
      </div>
    </div>
  );
}
