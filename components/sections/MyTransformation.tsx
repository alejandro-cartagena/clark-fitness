"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";

const mont = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
});

interface MyTransformationProps {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  beforeImageUrl?: string;
  afterImageUrl?: string;
  beforeLabel?: string;
  afterLabel?: string;
  quote?: string;
  stats?: { value: string; label: string }[];
}

interface AnimatedStatProps {
  value: string;
  label: string;
  isVisible: boolean;
}

function AnimatedStat({ value, label, isVisible }: AnimatedStatProps) {
  const [displayValue, setDisplayValue] = useState<string>("0");
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isVisible || hasAnimated) return;

    // Parse the value to extract number and suffix
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      setHasAnimated(true);
      return;
    }

    const numericValue = parseInt(match[1], 10);
    const suffix = match[2]; // "+", "%", or ""

    if (isNaN(numericValue)) {
      setDisplayValue(value);
      setHasAnimated(true);
      return;
    }

    setHasAnimated(true);
    const duration = 2000; // 2 seconds
    const startTime = Date.now();
    const startValue = 0;
    const endValue = numericValue;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOut);

      setDisplayValue(`${currentValue}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value); // Ensure final value is exact
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, hasAnimated, value]);

  return (
    <div className="text-center">
      <dt className="text-2xl font-extrabold tracking-tight text-(--accent-primary) sm:text-3xl">
        {displayValue}
      </dt>
      <dd className="mt-1 text-sm font-medium uppercase tracking-wider text-zinc-500">
        {label}
      </dd>
    </div>
  );
}

const defaultStats = [
  { value: "50+", label: "lbs lost" },
  { value: "6", label: "years committed" },
  { value: "100%", label: "mindset shift" },
];

export default function MyTransformation({
  eyebrow = "My journey",
  heading = "From Where I Was to Who I Am",
  subheading = "I didn’t just change my body—I rebuilt my habits, discipline, and confidence. Now I help others do the same.",
  beforeImageUrl = "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",
  afterImageUrl = "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
  beforeLabel = "Before",
  afterLabel = "After",
  quote = "If I can do it, you can too. It starts with one decision.",
  stats = defaultStats,
}: MyTransformationProps) {
  const statsRef = useRef<HTMLDListElement>(null);
  const [isStatsVisible, setIsStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsStatsVisible(true);
            // Disconnect after first trigger to prevent re-animation
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
        rootMargin: "0px",
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      aria-labelledby="transformation-heading"
      className="relative isolate w-full overflow-hidden py-16 sm:py-20 lg:py-28"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <Container>
        {/* Eyebrow */}
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-(--accent-primary)">
          {eyebrow}
        </p>
        {/* Heading */}
        <h2
          id="transformation-heading"
          className="mt-2 text-center text-2xl font-extrabold tracking-tight text-(--text-primary) sm:text-3xl lg:text-4xl"
        >
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-zinc-600 sm:text-lg">
          {subheading}
        </p>

        {/* Before / After block */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Before */}
          <div className="group relative">
            <div className="overflow-hidden rounded-2xl border border-(--border) bg-white shadow-lg ring-1 ring-black/5 transition duration-300 group-hover:shadow-xl">
              <div className="relative aspect-5/5 w-full overflow-hidden bg-zinc-100">
                <Image
                  src={beforeImageUrl}
                  alt="Before transformation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                  priority={false}
                />
                <div
                  className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"
                  aria-hidden="true"
                />
                <span
                  className={`${mont.className} absolute bottom-4 left-4 rounded-md bg-white px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-black`}
                >
                  {beforeLabel}
                </span>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="group relative">
            <div className="overflow-hidden rounded-2xl border border-(--border) bg-white shadow-lg ring-1 ring-black/5 transition duration-300 group-hover:shadow-xl">
              <div className="relative aspect-5/5 w-full overflow-hidden bg-zinc-100">
                <Image
                  src={afterImageUrl}
                  alt="After transformation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                  priority={false}
                />
                <div
                  className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"
                  aria-hidden="true"
                />
                <span
                  className={`${mont.className} absolute bottom-4 left-4 rounded-md bg-(--accent-primary) px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white`}
                >
                  {afterLabel}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Accent line */}
        <div
          className="mx-auto mt-10 h-1 w-20 rounded-full sm:w-24"
          style={{ backgroundColor: "var(--accent-primary)" }}
          aria-hidden="true"
        />

        {/* Quote + stats */}
        <div className="mt-10 flex flex-col items-center gap-8 sm:mt-12 lg:flex-row lg:justify-center lg:gap-16">
          <blockquote className="max-w-xl text-center text-lg font-medium italic leading-relaxed text-(--text-primary) sm:text-xl">
            &ldquo;{quote}&rdquo;
          </blockquote>
          <dl ref={statsRef} className="flex flex-wrap justify-center gap-8 sm:gap-12">
            {stats.map((stat) => (
              <AnimatedStat
                key={stat.label}
                value={stat.value}
                label={stat.label}
                isVisible={isStatsVisible}
              />
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
