import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { Montserrat } from "next/font/google";

const mont = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
});

interface HeroProps {
  titleLines?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  backgroundImageUrl?: string;
  overlayClassName?: string;
}

export default function Hero({
  titleLines = ["Unlock the path to", "your dream", "physique."],
  ctaLabel = "Join My Team",
  ctaHref = siteConfig.applyPath,
  backgroundImageUrl = "/images/clark-outdoor-flexv4.jpeg",
  overlayClassName = "bg-black/60",
}: HeroProps) {
  return (
    <section
      aria-label="Hero"
      className="relative isolate h-screen min-h-[520px] w-full overflow-hidden"
    >
      {/* Background image with slow zoom */}
      <div
        className="absolute inset-0 origin-center bg-cover bg-center animate-hero-zoom"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        aria-hidden="true"
      />
      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayClassName}`} aria-hidden="true" />

      {/* Content */}
      <Container className="relative z-10 grid h-full place-items-center text-center">
        <div className="flex flex-col items-center">
          <h1
            className="font-extrabold uppercase tracking-tight"
            style={{
              color: siteConfig.branding.colors.text.primary,
              textShadow: "2px 2px 4px rgba(0,0,0,0.85), 0 2px 10px rgba(0,0,0,0.60)",
            }}
          >
            <span className="block text-3xl leading-tight sm:text-5xl lg:text-6xl">
              {titleLines[0] ?? ""}
            </span>
            <span className="block text-3xl leading-tight sm:text-5xl lg:text-6xl">
              {titleLines[1] ?? ""}
            </span>
            <span className="block text-3xl leading-tight sm:text-5xl lg:text-6xl">
              {titleLines[2] ?? ""}
            </span>
          </h1>

          {/* Accent underline */}
          <div className="mt-3 h-1 w-20 sm:w-24" style={{ backgroundColor: siteConfig.branding.colors.accent.primary }} aria-hidden="true" />

          {/* CTA */}
          <div className={`mt-6 ${mont.className}`}>
            <span className="hero-cta-glow inline-flex rounded-md">
              <Button href={ctaHref} variant="highlight" className="text-base md:text-xl shadow-sm">
                {ctaLabel}
              </Button>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
