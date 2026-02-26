"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import Iphone from "@/components/ui/iphone";
import { siteConfig } from "@/config/site";
import { Montserrat } from "next/font/google";

const mont = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
});

type AppFeatures = {
  id: string;
  label: string;
  title: string;
  description: string;
  screenshotUrl?: string;
  content?: ReactNode;
};

interface FeaturesProps {
  eyebrow?: string;
  heading?: string;
  items?: AppFeatures[];
}

const defaultItems: AppFeatures[] = [
  {
    id: "workouts",
    label: "Workout Sessions",
    title: "Training Plans",
    description:
      "Structured programming tailored to your goals with progressive overload and clear milestones.",
    screenshotUrl:
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "nutrition",
    label: "Nutrition / Recipes",
    title: "Sustainable Nutrition",
    description:
      "Macro-friendly meals, grocery lists, and flexible guidance to fit busy lifestyles.",
    screenshotUrl:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "progress",
    label: "Progress Tracking",
    title: "Data-Driven Results",
    description:
      "Weekly check-ins, measurements, and photo logs to keep you accountable and improving.",
    screenshotUrl:
      "https://images.unsplash.com/photo-1758875568758-daad5146648c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "dm",
    label: "Direct Message",
    title: "1:1 Support",
    description:
      "Direct access for quick feedback, form checks, and motivation when you need it most.",
    screenshotUrl:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function AppFeatures({
  eyebrow = "Charm Fitness",
  heading = "What You Get With My Coaching",
  items = defaultItems,
}: FeaturesProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative isolate w-full py-14 sm:py-20 lg:py-24">
      <Container>
        {/* Eyebrow */}
        <div className="text-center">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: siteConfig.branding.colors.accent.primary }}
          >
            {eyebrow}
          </span>
        </div>
        {/* Heading */}
        <h2 className="mt-2 text-center text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl">
          {heading}
        </h2>

        {/* Aligned label + card columns: constrained and centered on tablet */}
        <div className="mx-auto mt-8 w-full max-w-2xl sm:mt-10 lg:max-w-none">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <div key={item.id} className="flex h-full flex-col gap-3">
                {/* Label directly above its card, same width as phone */}
                <div className="mx-auto w-full max-w-[260px] sm:max-w-[280px] md:max-w-[240px] lg:max-w-none">
                  <button
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => handleToggle(item.id)}
                    className={`${mont.className} w-full rounded-lg px-3 py-2 text-center text-[12px] md:text-base font-semibold uppercase tracking-wide shadow-sm transition-colors ${
                      isActive
                        ? "bg-red-600 text-white"
                        : "bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-hover)]"
                    }`}
                  >
                    {item.label}
                  </button>
                </div>

                {/* Card: the iPhone is the visual card, text lives below */}
                <article
                  className={`group relative flex h-full flex-col rounded-xl transition will-change-transform ${
                    isActive ? "ring-2 ring-red-200" : "hover:-translate-y-1"
                  } ${activeId && !isActive ? "opacity-60" : "opacity-100"}`}
                >
                  {/* Constrain width on mobile/tablet; full width on desktop */}
                  <div className="mx-auto w-full max-w-[260px] sm:max-w-[280px] md:max-w-[240px] lg:max-w-none">
                    <Iphone
                      className="w-full"
                      src={
                        item.screenshotUrl ??
                        "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1200&auto=format&fit=crop"
                      }
                    />

                    

                  </div>
                </article>
              </div>
            );
          })}
          </div>
        </div>
      </Container>
    </section>
  );
}
