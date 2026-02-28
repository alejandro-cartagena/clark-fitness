import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Iphone from "@/components/ui/iphone";
import { siteConfig } from "@/config/site";

interface FeatureItem {
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    title: "Fully Personalized Training",
    description:
      "Built around your body goals, schedule, and experience level for long-term muscle gain and fat loss.",
  },
  {
    title: "1-on-1 Access + Weekly Calls",
    description:
      "Direct communication for fast feedback, form checks, and program adjustments.",
  },
  {
    title: "Lift Technique + Program Analysis",
    description:
      "Technical breakdown of your key lifts and training split for optimal progression and injury prevention.",
  },
  {
    title: "Progress Accountability",
    description:
      "Training consistency and execution are monitored so your results stay on track.",
  },
  {
    title: "Nutrition Guidance",
    description:
      "Nutrition aligned with training demands, recovery, and body composition goals.",
  },
  {
    title: "Private Charm Fitness Community",
    description:
      "Train alongside others focused on real body transformations like yourself.",
  },
];

const systemImageUrl =
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop";

const leftFeatures = features.slice(0, 3);
const rightFeatures = features.slice(3, 6);

function CheckmarkBullet({ item }: { item: FeatureItem }) {
  return (
    <li className="flex gap-4">
      <span
        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full sm:h-7 sm:w-7"
        style={{
          backgroundColor: siteConfig.branding.colors.accent.primary,
          color: siteConfig.branding.colors.text.inverse,
        }}
        aria-hidden
      >
        <svg
          className="h-3.5 w-3.5 sm:h-4 sm:w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12l5 5L20 7" />
        </svg>
      </span>
      <div>
        <span
          className="font-bold"
          style={{ color: siteConfig.branding.colors.text.primary }}
        >
          {item.title}
        </span>
        <p
          className="mt-1 text-sm leading-relaxed sm:text-base"
          style={{ color: siteConfig.branding.colors.text.secondary }}
        >
          {item.description}
        </p>
      </div>
    </li>
  );
}

function FeatureCard({ item }: { item: FeatureItem }) {
  return (
    <div
      className="flex flex-col gap-3 rounded-xl border p-4 shadow-sm transition-shadow hover:shadow-md"
      style={{
        borderColor: siteConfig.branding.colors.accent.primary + "40",
        backgroundColor: siteConfig.branding.colors.background.primary,
      }}
    >
      <span
        className="flex h-6 w-6 shrink-0 items-center justify-center self-start rounded-full sm:h-7 sm:w-7"
        style={{
          backgroundColor: siteConfig.branding.colors.accent.primary,
          color: siteConfig.branding.colors.text.inverse,
        }}
        aria-hidden
      >
        <svg
          className="h-3.5 w-3.5 sm:h-4 sm:w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12l5 5L20 7" />
        </svg>
      </span>
      <div className="min-w-0">
        <span
          className="font-bold"
          style={{ color: siteConfig.branding.colors.text.primary }}
        >
          {item.title}
        </span>
        <p
          className="mt-1 text-sm leading-relaxed"
          style={{ color: siteConfig.branding.colors.text.secondary }}
        >
          {item.description}
        </p>
      </div>
    </div>
  );
}

interface FeaturesV2Props {
  eyebrow?: string;
}

export default function FeaturesV2({ eyebrow = "Features" }: FeaturesV2Props) {
  return (
    <section
      className="w-full overflow-x-hidden py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: siteConfig.branding.colors.background.secondary }}
      aria-labelledby="features-v2-heading"
    >
      <Container>
        {/* Header */}
        <header className="text-center mb-6 md:mb-12">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: siteConfig.branding.colors.accent.primary }}
          >
            {eyebrow}
          </span>
          <h2
            id="features-v2-heading"
            className="mt-2 text-3xl font-extrabold italic uppercase tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: siteConfig.branding.colors.text.primary }}
          >
            The Charm Fitness System
          </h2>
          <p
            className="mx-auto mt-3 max-w-2xl text-base leading-relaxed sm:text-lg"
            style={{ color: siteConfig.branding.colors.text.secondary }}
          >
            Specific coaching for individuals who want to maximize their
            physique and overall health.
          </p>
        </header>

        {/* <h3
          className="mt-12 text-center text-xl font-bold sm:text-2xl"
          style={{ color: siteConfig.branding.colors.text.primary }}
        >
          What You Get With Charm Fitness:
        </h3> */}

        {/* Mobile: 2-col cards grid, then image below */}
        <div className="mt-6 lg:mt-8">
          <div className="grid grid-cols-2 gap-4 lg:hidden">
            {features.map((item, index) => (
              <FeatureCard key={index} item={item} />
            ))}
          </div>
          <div className="relative mt-8 flex min-h-[200px] w-full items-center justify-center overflow-hidden rounded-xl lg:hidden">
            <div className="mx-auto w-full max-w-[260px] sm:max-w-[280px]">
              <Iphone
                videoSrc="/videos/clark-flex-edit.mp4"
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Desktop: left bullets | image | right bullets */}
        <div className="mt-6 hidden lg:grid lg:grid-cols-[1fr_380px_1fr] lg:gap-10 lg:items-center xl:gap-14 xl:grid-cols-[1fr_420px_1fr]">
          <ul className="space-y-6 xl:space-y-7">
            {leftFeatures.map((item, index) => (
              <CheckmarkBullet key={index} item={item} />
            ))}
          </ul>
          <div className="relative flex h-[420px] items-center justify-center overflow-hidden xl:h-[480px]">
            <Iphone
              videoSrc="/videos/clark-flex-edit.mp4"
              className="h-full w-auto"
            />
          </div>
          <ul className="space-y-6 xl:space-y-7">
            {rightFeatures.map((item, index) => (
              <CheckmarkBullet key={index} item={item} />
            ))}
          </ul>
        </div>

        {/* CTA + disclaimer */}
        <div className="mt-12 flex flex-col items-center gap-3 text-center sm:mt-14">
          <Button href="/#contact" variant="highlight" className="px-6 py-3">
            Apply for Charm Fitness
          </Button>
          <p
            className="text-sm"
            style={{ color: siteConfig.branding.colors.text.secondary }}
          >
            Limited spots to maintain coaching quality.
          </p>
        </div>
      </Container>
    </section>
  );
}
