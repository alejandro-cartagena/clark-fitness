"use client";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const mont = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export interface HeroV2Props {
  /** Main headline (uppercase, bold). */
  title?: string;
  /** Supporting tagline below the headline. */
  tagline?: string;
  /** Hero background image URL. */
  imageUrl?: string;
  /** Alt text for the hero image. */
  imageAlt?: string;
  /** Primary CTA label. */
  primaryCtaLabel?: string;
  /** Primary CTA href. */
  primaryCtaHref?: string;
  /** Secondary CTA label. */
  secondaryCtaLabel?: string;
  /** Secondary CTA href. */
  secondaryCtaHref?: string;
}

const defaultImageUrl =
  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1170&auto=format&fit=crop";
const defaultImageAlt = "Fitness coach guiding a client through a workout";

export default function HeroV2({
  title = "TRANSFORM YOUR BODY WITH ELITE COACHING",
  tagline = "Build strength, discipline, and the physique you've always wanted—with a coach who gets you there.",
  imageUrl = defaultImageUrl,
  imageAlt = defaultImageAlt,
  primaryCtaLabel = "Let's Start Today",
  primaryCtaHref = siteConfig.applyPath,
  secondaryCtaLabel = "More Details",
  secondaryCtaHref = "/#programs",
}: HeroV2Props) {
  return (
    <section
      aria-label="Hero"
      className="relative flex min-h-screen w-full flex-col overflow-hidden"
    >
      {/* Full-bleed background image at all screen sizes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="relative size-full animate-hero-zoom">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>
        {/* Overlay so text and buttons stay readable on all sizes */}
        <div
          className="absolute inset-0 bg-linear-to-t from-black/85 via-black/55 to-black/35"
          aria-hidden
        />
      </div>

      {/* Content overlaid on image — aligned with shared container */}
      <div className="relative z-10 flex min-h-[90vh] flex-col justify-center pb-14 pt-20 lg:justify-center lg:pb-20 lg:pt-24">
        <Container className="flex flex-col">
          <div className="max-w-xl">
          <h1
            className={`${mont.className} text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl`}
          >
            {title}
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/95 sm:text-lg">
            {tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              href={primaryCtaHref}
              variant="primary"
              className="min-w-[180px] px-6 py-3 text-sm sm:text-base"
            >
              {primaryCtaLabel}
            </Button>
            <Button
              href={secondaryCtaHref}
              variant="outline"
              className="min-w-[160px] border-white bg-transparent px-6 py-3 text-sm text-white hover:bg-white! hover:text-(--text-primary)! sm:text-base"
            >
              {secondaryCtaLabel}
            </Button>
          </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
