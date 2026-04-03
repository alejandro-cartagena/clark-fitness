"use client";

import { useRef, useCallback } from "react";
import { siteConfig } from "@/config/site";

const DEFAULT_GAP = 24;

export interface CarouselProps {
  children: React.ReactNode;
  /** Gap between slides in px. */
  gap?: number;
  /** Scroll container aria-label. */
  ariaLabel?: string;
  /** Previous button aria-label. */
  prevAriaLabel?: string;
  /** Next button aria-label. */
  nextAriaLabel?: string;
  /** Optional class for prev/next buttons. */
  buttonClassName?: string;
  /** Optional style for prev/next buttons (e.g. accent color). */
  buttonStyle?: React.CSSProperties;
  /** Optional class for the track (flex container). */
  trackClassName?: string;
}

export default function Carousel({
  children,
  gap = DEFAULT_GAP,
  ariaLabel = "Carousel",
  prevAriaLabel = "Previous",
  nextAriaLabel = "Next",
  buttonClassName = "flex h-10 w-10 items-center justify-center rounded-full text-white shadow-md transition hover:opacity-90 active:scale-95 disabled:opacity-40",
  buttonStyle,
  trackClassName,
}: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback(
    (direction: "prev" | "next") => {
      const el = scrollRef.current;
      if (!el) return;
      const slideWidth =
        el.querySelector("[data-carousel-slide]")?.getBoundingClientRect().width ??
        el.clientWidth;
      const scrollAmount = slideWidth + gap;
      el.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    },
    [gap]
  );

  const trackClasses =
    trackClassName ??
    "flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 scroll-smooth scrollbar-hide md:gap-6";

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className={trackClasses}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        aria-label={ariaLabel}
      >
        {children}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="mt-6 flex justify-center gap-3">
        <button
          type="button"
          onClick={() => scroll("prev")}
          aria-label={prevAriaLabel}
          className={buttonClassName}
          style={buttonStyle ?? { backgroundColor: siteConfig.branding.colors.accent.primary }}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scroll("next")}
          aria-label={nextAriaLabel}
          className={buttonClassName}
          style={buttonStyle ?? { backgroundColor: siteConfig.branding.colors.accent.primary }}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

/** Wrapper for a single carousel slide. Use with Carousel. */
export function CarouselSlide({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div data-carousel-slide className={className}>
      {children}
    </div>
  );
}
