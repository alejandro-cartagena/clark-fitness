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
  heading = "I'M CLARK",
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
        {/*
          Mobile order:  1) eyebrow + heading  2) images  3) paragraphs
          Desktop order: images (col 1, rows 1-2) | heading (col 2, row 1) + paragraphs (col 2, row 2)
        */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-14 md:gap-y-0">
          {/* 1 · Eyebrow + heading */}
          <div className="order-1 text-center md:text-left md:col-start-2 md:row-start-1 md:self-end md:pb-6 md:pl-2">
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
          </div>

          {/* 2 · Image collage */}
          <div className="order-2 min-w-0 grid grid-cols-2 grid-rows-[auto_auto] gap-3 sm:gap-4 md:col-start-1 md:row-start-1 md:row-span-2">
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
            {/* Bottom — full width on tablet and down; left column only on lg */}
            <div
              className="relative aspect-[3/3] overflow-hidden rounded-xl border-2 shadow-[0_4px_14px_rgba(0,0,0,0.3)] col-span-2 col-start-1 row-start-2 lg:col-span-1 lg:aspect-[3/4]"
              style={{ borderColor: siteConfig.branding.colors.border, backgroundColor: siteConfig.branding.colors.background.primary }}
            >
              <Image
                src={imageSmall2}
                alt="Fitness trainer — gym and coaching"
                fill
                className="object-cover object-[50%_20%] lg:object-center"
                sizes="(max-width: 1023px) 100vw, 200px"
              />
            </div>
          </div>

          {/* 3 · Paragraphs */}
          <div className="order-3 space-y-5 sm:space-y-6 md:col-start-2 md:row-start-2 md:self-start md:pt-0 md:pl-2">
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
      </Container>
    </section>
  );
}
