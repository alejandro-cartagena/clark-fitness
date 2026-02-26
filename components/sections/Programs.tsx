"use client";

import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";
import { Montserrat } from "next/font/google";

const mont = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
});

interface ProgramFeature {
  text: string;
  withInfo?: boolean;
}

interface Program {
  id: string;
  title: string;
  tagline: string;
  price: string;
  pricePeriod: string;
  ctaText: string;
  ctaHref: string;
  isCurrentPlan?: boolean;
  isPopular?: boolean;
  icon: "foundation" | "transformation" | "elite";
  features: ProgramFeature[];
}

const defaultPrograms: Program[] = [
  {
    id: "foundation",
    title: "Foundation",
    tagline: "For those starting their journey",
    price: "149",
    pricePeriod: "/month",
    ctaText: "Get Started",
    ctaHref: "/#contact",
    isCurrentPlan: false,
    isPopular: false,
    icon: "foundation",
    features: [
      { text: "Custom training plan" },
      { text: "Weekly check-ins" },
      { text: "Macro guidance" },
      { text: "Access to private community" },
    ],
  },
  {
    id: "transformation",
    title: "Transformation",
    tagline: "As you level up",
    price: "299",
    pricePeriod: "/month",
    ctaText: "Get Transformation",
    ctaHref: "/#contact",
    isPopular: true,
    icon: "transformation",
    features: [
      { text: "Everything in Foundation" },
      { text: "1:1 video form reviews" },
      { text: "Custom nutrition + meal support" },
      { text: "Unlimited messaging" },
      { text: "Progress photo reviews" },
      { text: "Priority scheduling" },
    ],
  },
  {
    id: "elite",
    title: "Elite",
    tagline: "For serious results",
    price: "499",
    pricePeriod: "/month",
    ctaText: "Get Elite",
    ctaHref: "/#contact",
    icon: "elite",
    features: [
      { text: "Everything in Transformation" },
      { text: "Bi-weekly video calls" },
      { text: "Competition prep support" },
      { text: "Supplement & recovery guidance" },
      { text: "Custom programming updates" },
      { text: "Dedicated check-in slot" },
    ],
  },
];

function ProgramIcon({ type }: { type: Program["icon"] }) {
  const { accent, text } = siteConfig.branding.colors;
  const iconBg = accent.primary;
  const iconColor = text.inverse;

  if (type === "foundation") {
    return (
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: iconBg, color: iconColor }}
        aria-hidden
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </span>
    );
  }
  if (type === "transformation") {
    return (
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: iconBg, color: iconColor }}
        aria-hidden
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </span>
    );
  }
  return (
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
      style={{ backgroundColor: iconBg, color: iconColor }}
      aria-hidden
    >
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    </span>
  );
}

function ProgramCard({ program }: { program: Program }) {
  const { colors } = siteConfig.branding;

  return (
    <article
      className="relative flex flex-col rounded-2xl border bg-white p-6 shadow-md ring-1 ring-black/5 sm:p-8"
      style={{ borderColor: colors.border }}
    >
      {program.isPopular && (
        <div
          className="absolute -right-2 top-4 rotate-12 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow"
          style={{ backgroundColor: colors.accent.primary }}
        >
          Popular
        </div>
      )}

      <div className="flex items-start gap-3">
        <ProgramIcon type={program.icon} />
        <div className="min-w-0 flex-1">
          <h3
            className={`${mont.className} text-lg font-bold sm:text-xl`}
            style={{ color: colors.text.primary }}
          >
            {program.title}
          </h3>
          <p
            className="mt-0.5 text-sm"
            style={{ color: colors.text.secondary }}
          >
            {program.tagline}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-baseline gap-0">
        <span
          className={`${mont.className} text-3xl font-bold sm:text-4xl`}
          style={{ color: colors.text.primary }}
        >
          ${program.price}
        </span>
        <span
          className="text-sm"
          style={{ color: colors.text.secondary }}
        >
          {program.pricePeriod}
        </span>
      </div>

      <div className="mt-6">
        {program.isCurrentPlan ? (
          <button
            type="button"
            disabled
            className="w-full rounded-lg border py-2.5 px-4 text-sm font-semibold transition cursor-not-allowed opacity-70"
            style={{
              borderColor: colors.border,
              color: colors.text.secondary,
              backgroundColor: colors.background.secondary,
            }}
          >
            Current plan
          </button>
        ) : (
          <Button
            href={program.ctaHref}
            variant="primary"
            className="w-full justify-center rounded-lg py-2.5 text-sm font-semibold"
          >
            {program.ctaText}
          </Button>
        )}
      </div>

      <div className="mt-8 border-t pt-6" style={{ borderColor: colors.border }}>
        <p
          className="mb-4 text-xs font-semibold uppercase tracking-wider"
          style={{ color: colors.text.secondary }}
        >
          What&apos;s included
        </p>
        <ul className="flex flex-col gap-3">
          {program.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm" style={{ color: colors.text.secondary }}>
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white"
                style={{ backgroundColor: colors.accent.primary }}
                aria-hidden
              >
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="leading-relaxed">{feature.text}</span>
              {feature.withInfo && (
                <button
                  type="button"
                  className="shrink-0 rounded-full p-0.5 transition hover:opacity-80"
                  style={{ color: colors.text.secondary }}
                  aria-label="More info"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

interface ProgramsProps {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  programs?: Program[];
}

export default function Programs({
  eyebrow = "Coaching",
  heading = "Programs",
  subheading = "Choose the level of support that fits your goals. All plans include personalized attention and proven methods.",
  programs = defaultPrograms,
}: ProgramsProps) {
  const { colors } = siteConfig.branding;

  return (
    <section
      id="programs"
      className="w-full py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: colors.background.secondary }}
      aria-labelledby="programs-heading"
    >
      <Container>
        <header className="text-center">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: colors.accent.primary }}
          >
            {eyebrow}
          </span>
          <h2
            id="programs-heading"
            className={`${mont.className} mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl`}
            style={{ color: colors.text.primary }}
          >
            {heading}
          </h2>
          <p
            className="mx-auto mt-3 max-w-2xl text-base sm:text-lg"
            style={{ color: colors.text.secondary }}
          >
            {subheading}
          </p>
        </header>

        <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </Container>
    </section>
  );
}
