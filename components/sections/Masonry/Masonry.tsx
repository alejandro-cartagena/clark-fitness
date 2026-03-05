"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";

const masonryImages = [
  {
    src: "/images/clark-htlt.JPG",
    alt: "Clark at the gym holding HTLT supplements",
    label: "HTLT Sponsored Athlete",
    pill: "On The Gym Floor",
  },
  {
    src: "/images/htlt-1.JPEG",
    alt: "HTLT supplement stack on kitchen counter",
    label: "Daily Performance Stack",
    pill: "Fuel & Recovery",
  },
  {
    src: "/images/htlt-2.JPEG",
    alt: "Box of HTLT CicoBar protein bars",
    label: "On-The-Go Protein",
    pill: "CicoBar",
  },
  {
    src: "/images/htlt-3.JPEG",
    alt: "HTLT Turk Platinum and GO2 Max on bed",
    label: "Building Strength Smart",
    pill: "Smart Supplementing",
  },
  {
    src: "/images/htlt-4.JPEG",
    alt: "Box filled with multiple HTLT products",
    label: "Dialed-In Supplement Protocol",
    pill: "Stacked For Results",
  },
  {
    src: "/images/htlt-5.JPG",
    alt: "HTLT products on a table",
    label: "HTLT Products",
    pill: "Stacked For Results",
  },
  {
    src: "/images/htlt-6.JPG",
    alt: "HTLT products on a table",
    label: "HTLT Products",
    pill: "Stacked For Results",
  },
  {
    src: "/images/htlt-7.JPG",
    alt: "HTLT products on a table",
    label: "HTLT Products",
    pill: "Stacked For Results",
  },
  {
    src: "/images/htlt-8.JPEG",
    alt: "HTLT products on a table",
    label: "HTLT Products",
    pill: "Stacked For Results",
  },
  {
    src: "/images/htlt-9.JPEG",
    alt: "HTLT products on a table",
    label: "HTLT Products",
    pill: "Stacked For Results",
  },
  {
    src: "/images/htlt-10.JPEG",
    alt: "HTLT products on a table",
    label: "HTLT Products",
    pill: "Stacked For Results",
  },
] as const;

const htltSponsor = siteConfig.sponsors.find((sponsor) => sponsor.name === "HTLT");

export default function Masonry() {
  const { branding } = siteConfig;

  return (
    <section
      id="htlt-sponsorship"
      aria-labelledby="htlt-sponsorship-heading"
      className="relative w-full py-16 sm:py-20 lg:py-24"
      style={{
        backgroundImage: `
          radial-gradient(circle at top, ${branding.colors.highlight.primary}22 0, transparent 55%),
          linear-gradient(to bottom, ${branding.colors.background.primary}, ${branding.colors.background.secondary})
        `,
      }}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.25em]"
              style={{ color: branding.colors.accent.primary }}
            >
              Sponsor Spotlight
            </p>
            <h2
              id="htlt-sponsorship-heading"
              className="mt-2 text-3xl font-extrabold uppercase tracking-tight sm:text-4xl lg:text-5xl"
              style={{ color: branding.colors.text.primary }}
            >
              Powered by HTLT Supplements
            </h2>
            <p
              className="mt-4 max-w-2xl text-sm leading-relaxed sm:text-base"
              style={{ color: branding.colors.text.secondary }}
            >
              I don't just coach smarter training and nutrition—I partners with{" "}
              <span className="font-semibold" style={{ color: branding.colors.text.primary }}>
                HTLT
              </span>{" "}
              to back every session with premium performance, recovery, and health support.
            </p>
          </div>

          {htltSponsor && (
            <aside
              className="max-w-sm rounded-2xl border px-4 py-4 text-xs shadow-[0_18px_45px_rgba(0,0,0,0.65)] sm:text-sm"
              style={{
                borderColor: branding.colors.border,
                background:
                  "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(15,23,42,0.85))",
              }}
            >
              <p
                className="text-[10px] font-semibold uppercase tracking-[0.3em]"
                style={{ color: branding.colors.highlight.primary }}
              >
                Official Partner
              </p>
              <p
                className="mt-1 text-sm font-semibold"
                style={{ color: branding.colors.text.primary }}
              >
                Use code {htltSponsor.code} at checkout for 10% off
              </p>
              <a
                href={htltSponsor.url}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] underline-offset-4 hover:underline"
                style={{ color: branding.colors.accent.primary }}
              >
                Shop HTLT
                <span aria-hidden="true">↗</span>
              </a>
            </aside>
          )}
        </div>

        {/* Masonry */}
        <div className="mt-10 columns-1 gap-4 sm:columns-2 md:gap-5 lg:columns-3 lg:gap-6">
          {masonryImages.map((image) => (
            <figure
              key={image.src}
              className="group relative mb-4 overflow-hidden rounded-2xl border shadow-[0_18px_45px_rgba(0,0,0,0.7)] break-inside-avoid"
              style={{
                borderColor: branding.colors.border,
                backgroundColor: branding.colors.background.primary,
              }}
            >
              <div className="relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={1200}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={image.src === "/images/clark-htlt.JPG"}
                />

                {/* Overlays */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-90" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(148,163,255,0.22),transparent_55%)] mix-blend-soft-light opacity-80" />

                {/* Caption */}
                <figcaption className="pointer-events-none absolute inset-x-4 bottom-4 flex items-center justify-between gap-3">
                  <div>
                    <p
                      className="text-[10px] font-semibold uppercase tracking-[0.25em]"
                      style={{ color: branding.colors.accent.primary }}
                    >
                      HTLT
                    </p>
                    <p
                      className="mt-1 text-sm font-medium sm:text-base"
                      style={{ color: branding.colors.text.primary }}
                    >
                      {image.label}
                    </p>
                  </div>
                  <span
                    className="rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] backdrop-blur-sm"
                    style={{
                      borderColor: branding.colors.border,
                      backgroundColor: "rgba(15,23,42,0.85)",
                      color: branding.colors.text.secondary,
                    }}
                  >
                    {image.pill}
                  </span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}