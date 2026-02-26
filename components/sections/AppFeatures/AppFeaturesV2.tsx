"use client";

import Container from "@/components/ui/Container";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { siteConfig } from "@/config/site";
import { Dumbbell, MessageCircle, TrendingUp, UtensilsCrossed } from "lucide-react";

const CARDS = [
  {
    id: "workouts",
    heading: "Workout Sessions",
    description:
      "Structured programming tailored to your goals with progressive overload and clear milestones.",
    imageSrc:
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Workout and training session",
    icon: Dumbbell,
  },
  {
    id: "nutrition",
    heading: "Nutrition / Recipes",
    description:
      "Macro-friendly meals, grocery lists, and flexible guidance to fit busy lifestyles.",
    imageSrc:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Healthy nutrition and recipes",
    icon: UtensilsCrossed,
  },
  {
    id: "progress",
    heading: "Progress Tracking",
    description:
      "Weekly check-ins, measurements, and photo logs to keep you accountable and improving.",
    imageSrc:
      "https://images.unsplash.com/photo-1758875568758-daad5146648c?q=80&w=1332&auto=format&fit=crop",
    imageAlt: "Progress tracking and check-ins",
    icon: TrendingUp,
  },
  {
    id: "dm",
    heading: "Direct Message",
    description:
      "Direct access for quick feedback, form checks, and motivation when you need it most.",
    imageSrc:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Direct message support",
    icon: MessageCircle,
  },
] as const;

/** Accent color with alpha for spotlight glow. */
function accentToRgba(hex: string, alpha: number): string {
  const r = Number.parseInt(hex.slice(1, 3), 16);
  const g = Number.parseInt(hex.slice(3, 5), 16);
  const b = Number.parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function AppFeaturesV2() {
  const { branding } = siteConfig;
  const spotlightColor = accentToRgba(branding.colors.accent.primary, 0.18);

  return (
    <section
      id="features"
      className="relative isolate w-full py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: branding.colors.background.secondary,
        color: branding.colors.text.primary,
        ["--spotlight-bg" as string]: branding.colors.background.primary,
        ["--spotlight-border" as string]: branding.colors.border,
        ["--spotlight-accent" as string]: branding.colors.accent.primary,
        ["--text-primary" as string]: branding.colors.text.primary,
        ["--text-secondary" as string]: branding.colors.text.secondary,
        ["--bg-secondary" as string]: branding.colors.background.secondary,
      }}
    >
      <Container>
        {/* Eyebrow */}
        <div className="text-center">
          <span
            className="inline-block rounded-full px-4 py-1.5 text-sm font-bold uppercase tracking-wide"
            style={{
              backgroundColor: branding.colors.accent.primary,
              color: branding.colors.text.inverse,
            }}
          >
            Charm Fitness
          </span>
        </div>

        {/* Heading */}
        <h2
          className="mt-2 text-center text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl"
          style={{ color: branding.colors.text.primary }}
        >
          What You Get With My Coaching
        </h2>

        {/* 1 col mobile, 2 cols tablet + desktop */}
        <div className="mt-10 grid grid-cols-1 gap-14 md:grid-cols-2 md:items-stretch">
          {CARDS.map((card) => {
            const IconComponent = card.icon;
            return (
              <SpotlightCard
                key={card.id}
                imageSrc={card.imageSrc}
                imageAlt={card.imageAlt}
                heading={card.heading}
                icon={IconComponent ? <IconComponent /> : undefined}
                spotlightColor={spotlightColor}
              >
                {card.description}
              </SpotlightCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
