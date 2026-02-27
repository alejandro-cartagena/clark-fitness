import Image from "next/image";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

const imageMain =
  "/images/clark-gym-flexv4.jpeg";
const imageSmall1 =
  "/images/clark-outdoor-flexv2.jpeg";
const imageSmall2 =
  "/images/clark-gym-flexv6.jpeg";

const paragraph1 =
  "I wasn’t born with a great physique. I built it through years of trial and error, learning what actually works for muscle gain and fat loss—and what doesn’t. That journey is why I coach the way I do: no fluff, no fads, just clear programming and accountability so you get results that last.";

const paragraph2 =
  "Fitness isn’t my whole life—it’s the foundation that makes everything else possible. I’ve helped clients from all backgrounds hit their body composition goals while balancing work and life. The biggest lesson? Consistency beats intensity. I’m here to help you build both the plan and the habits so you can look and feel the way you want.";

interface AboutProps {
  eyebrow?: string;
  heading?: string;
  paragraphs?: [string, string];
}

export default function About({
  eyebrow = "This Is My Story",
  heading = "I'M FITNESS TRAINER",
  paragraphs = [paragraph1, paragraph2],
}: AboutProps) {
  return (
    <section
      id="about"
      className="w-full py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: siteConfig.branding.colors.background.secondary }}
      aria-labelledby="about-heading"
    >
      <Container>
        {/* Desktop: images left, text right. Mobile: stack. */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14 md:items-center">
          {/* Left: image collage — top row: two images; bottom row: full-width on tablet and down */}
          <div className="min-w-0 grid grid-cols-2 grid-rows-[auto_auto] gap-3 sm:gap-4">
            {/* Top left */}
            <div
              className="relative aspect-[3/4] overflow-hidden rounded-xl border-2 shadow-[0_4px_14px_rgba(0,0,0,0.3)] col-start-1 row-start-1"
              style={{ borderColor: siteConfig.branding.colors.border, backgroundColor: siteConfig.branding.colors.background.primary }}
            >
              <Image
                src={imageSmall1}
                alt="Fitness trainer — training and lifestyle"
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 50vw, 200px"
              />
            </div>
            {/* Top right — on lg spans both rows */}
            <div
              className="relative aspect-[3/4] overflow-hidden rounded-xl border-2 shadow-[0_4px_14px_rgba(0,0,0,0.3)] col-start-2 row-start-1 lg:row-span-2 lg:aspect-[3/5] lg:self-center"
              style={{ borderColor: siteConfig.branding.colors.border, backgroundColor: siteConfig.branding.colors.background.primary }}
            >
              <Image
                src={imageMain}
                alt="Fitness trainer — about"
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 50vw, 260px"
              />
            </div>
            {/* Bottom — full width on tablet and down, shorter height; left column only on lg */}
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-xl border-2 shadow-[0_4px_14px_rgba(0,0,0,0.3)] col-span-2 col-start-1 row-start-2 lg:col-span-1 lg:aspect-[3/4]"
              style={{ borderColor: siteConfig.branding.colors.border, backgroundColor: siteConfig.branding.colors.background.primary }}
            >
              <Image
                src={imageSmall2}
                alt="Fitness trainer — gym and coaching"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1023px) 100vw, 200px"
              />
            </div>
          </div>

          {/* Right: text */}
          <div className="lg:pl-2">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: siteConfig.branding.colors.accent.primary }}
            >
              {eyebrow}
            </p>
            <h2
              id="about-heading"
              className="mt-2 text-3xl font-extrabold uppercase tracking-tight sm:text-4xl lg:text-5xl"
              style={{ color: siteConfig.branding.colors.text.primary }}
            >
              {heading}
            </h2>
            <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
              <p
                className="text-base leading-relaxed sm:text-lg"
                style={{ color: siteConfig.branding.colors.text.secondary }}
              >
                {paragraphs[0]}
              </p>
              <p
                className="text-base leading-relaxed sm:text-lg"
                style={{ color: siteConfig.branding.colors.text.secondary }}
              >
                {paragraphs[1]}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
