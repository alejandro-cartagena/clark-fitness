"use client";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import VideoPlaceholder from "@/components/ui/VideoPlaceholder";
import { siteConfig } from "@/config/site";
import { Montserrat } from "next/font/google";

const mont = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export interface WhyMeV2Props {
  title?: string;
  videoPlaceholderSrc?: string | null;
  subtitle?: string;
  bullets?: string[];
  ctaText?: string;
  ctaHref?: string;
}

const defaultBullets = [
  "Individuals who are tired of guessing what will transfer to building muscle.",
  "Individuals who want individualized training tailored to their needs.",
  "Individuals who want 1-on-1 coaching based on their schedules, level, and genetics.",
];

export default function WhyMeV2({
  title = "Why Choose Me?",
  videoPlaceholderSrc = null,
  subtitle = "Who is Charm Fitness for?",
  bullets = defaultBullets,
  ctaText = "Join the Team",
  ctaHref = "#programs",
}: WhyMeV2Props) {
  return (
    <section
      aria-labelledby="why-me-v2-heading"
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-28"
      style={{
        backgroundColor: siteConfig.branding.colors.background.secondary,
      }}
    >
      <Container size="default" className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
        {/* Left: video — prominent on desktop */}
        <div className="w-full shrink-0 lg:max-w-[480px] xl:max-w-[520px]">
          <VideoPlaceholder
            src={videoPlaceholderSrc}
            className="relative w-full overflow-hidden rounded-2xl border-0 shadow-xl ring-2 ring-black/10"
          />
        </div>

        {/* Right: copy + list + CTA */}
        <div className="flex flex-1 flex-col">
          <h2
            id="why-me-v2-heading"
            className={`${mont.className} text-2xl font-bold uppercase tracking-tight text-(--text-primary) sm:text-3xl lg:text-4xl`}
          >
            {title}
          </h2>
          <span
            className="mt-3 block h-1 w-16 rounded-full"
            style={{ backgroundColor: "var(--accent-primary)" }}
            aria-hidden
          />
          <h3
            className={`${mont.className} mt-6 text-lg font-semibold text-(--text-primary) sm:text-xl`}
          >
            {subtitle}
          </h3>

          <ul className="mt-6 flex flex-col gap-4 sm:mt-8" role="list">
            {bullets.map((text, index) => (
              <li
                key={index}
                className="group flex items-start gap-4 rounded-r-lg py-2 pr-2"
              >
                <span
                  className="mt-[0.5em] h-2.5 w-2.5 shrink-0 rounded-full transition-transform group-hover:scale-110"
                  style={{ backgroundColor: "var(--accent-primary)" }}
                  aria-hidden
                />
                <span className="text-base leading-relaxed text-(--text-primary) sm:text-lg">
                  {text}
                </span>
              </li>
            ))}
          </ul>

          <div className={`mt-8 sm:mt-10 ${mont.className}`}>
            <Button
              href={ctaHref}
              variant="primary"
              className="rounded-lg px-8 py-3 font-semibold"
            >
              {ctaText}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
