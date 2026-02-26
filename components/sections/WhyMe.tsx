"use client";

import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";
import VideoPlaceholder from "@/components/ui/VideoPlaceholder";
import { Montserrat } from "next/font/google";

const mont = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
});

interface WhyMeProps {
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

export default function WhyMe({
  title = "Why Choose Me?",
  videoPlaceholderSrc = null,
  subtitle = "Who is Charm Fitness for?",
  bullets = defaultBullets,
  ctaText = "Join the Team",
  ctaHref = "#programs",
}: WhyMeProps) {
  return (
    <section
      aria-labelledby="why-me-heading"
      className="relative isolate w-full overflow-hidden py-16 sm:py-20 lg:py-28"
      style={{ backgroundColor: siteConfig.branding.colors.background.primary }}
    >
      <Container size="narrow">
        {/* Main title */}
        <h2
          id="why-me-heading"
          className={`${mont.className} text-center text-2xl font-bold italic uppercase tracking-tight text-(--text-primary) sm:text-3xl lg:text-4xl`}
        >
          {title}
        </h2>

        <div className="mt-10 flex justify-center">
          <VideoPlaceholder src={videoPlaceholderSrc} />
        </div>

        {/* Subtitle */}
        <h3
          className={`${mont.className} mt-10 text-center text-xl font-bold tracking-tight text-(--text-primary) sm:text-2xl`}
        >
          {subtitle}
        </h3>

        {/* Bulleted list — styled with accent markers */}
        <ul className="mt-8 flex flex-col gap-4 sm:mt-10">
          {bullets.map((text, index) => (
            <li
              key={index}
              className="flex items-start gap-4 rounded-lg border border-(--border) bg-white/80 px-4 py-3 shadow-sm ring-1 ring-black/5 transition hover:shadow-md sm:gap-5 sm:px-5 sm:py-4"
            >
              <span
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white sm:h-7 sm:w-7"
                style={{ backgroundColor: "var(--accent-primary)" }}
                aria-hidden
              >
                <span className="text-xs font-bold sm:text-sm">{index + 1}</span>
              </span>
              <span className="text-base leading-relaxed text-(--text-primary) sm:text-lg">
                {text}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className={`mt-10 flex justify-center sm:mt-12 ${mont.className}`}>
          <Button href={ctaHref} variant="outline" className="rounded-lg px-8 py-3">
            {ctaText}
          </Button>
        </div>
      </Container>
    </section>
  );
}
