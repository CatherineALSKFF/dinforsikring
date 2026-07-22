"use client";

import { ArrowRight } from "lucide-react";

const EASE = "ease-[cubic-bezier(0.25,0.1,0.25,1)]";

type RollButtonProps = {
  /** Rendered as an <a> when set, otherwise a <button>. */
  href?: string;
  onClick?: () => void;
  children: string;
  /** `orange` is the primary page CTA, `dark` is the navbar / secondary CTA. */
  variant?: "orange" | "dark";
  /** `lg` matches the hero CTA sizing, `sm` the navbar. */
  size?: "sm" | "lg";
  className?: string;
  id?: string;
};

export default function RollButton({
  href,
  onClick,
  children,
  variant = "orange",
  size = "lg",
  className = "",
  id,
}: RollButtonProps) {
  const isOrange = variant === "orange";

  const shell = [
    "group inline-flex items-center rounded-full font-medium",
    isOrange
      ? "bg-[#1D4ED8] hover:bg-[#1A44BD] text-white"
      : "bg-gray-900 hover:bg-gray-800 text-white",
    size === "lg"
      ? "text-[13px] sm:text-[14px] pl-5 sm:pl-6 pr-2 py-2"
      : "text-[13px] pl-5 pr-2 py-2",
    "transition-colors duration-500",
    EASE,
    className,
  ].join(" ");

  const circle = [
    "ml-3 flex items-center justify-center rounded-full bg-white shrink-0",
    size === "lg" ? "w-7 h-7 sm:w-8 sm:h-8" : "w-6 h-6",
    "transition-transform duration-500 group-hover:-rotate-45",
    EASE,
  ].join(" ");

  const inner = (
    <>
      {/* Text roll: the label is duplicated and the stack slides up 50% on hover. */}
      <span className="flex flex-col overflow-hidden h-[20px] leading-[20px]">
        <span
          className={`flex flex-col transition-transform duration-500 group-hover:-translate-y-1/2 ${EASE}`}
        >
          <span className="h-[20px]">{children}</span>
          <span className="h-[20px]" aria-hidden="true">
            {children}
          </span>
        </span>
      </span>
      <span className={circle}>
        <ArrowRight
          size={size === "lg" ? 15 : 13}
          className={isOrange ? "text-[#1D4ED8]" : "text-gray-900"}
        />
      </span>
    </>
  );

  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        id={id}
        href={href}
        className={shell}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {inner}
      </a>
    );
  }

  return (
    <button id={id} type="button" onClick={onClick} className={shell}>
      {inner}
    </button>
  );
}
