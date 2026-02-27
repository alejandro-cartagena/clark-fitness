"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";
import Carousel, { CarouselSlide } from "@/components/ui/Carousel";

const mont = Montserrat({
    subsets: ["latin"],
    weight: ["600", "700"],
});

interface Testimonial {
  id: string;
  beforeImageUrl: string;
  afterImageUrl: string;
  quote: string;
  name: string;
  result?: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    beforeImageUrl:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",
    afterImageUrl:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
    quote:
      "The structure and accountability made all the difference. I finally built the habits that stuck.",
    name: "Alex M.",
    result: "Gained 12 lbs muscle • 16 weeks",
  },
  {
    id: "2",
    beforeImageUrl:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop",
    afterImageUrl:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
    quote:
      "I dropped 25 pounds without feeling deprived. The nutrition guidance was game-changing.",
    name: "Jordan K.",
    result: "Lost 25 lbs • 14 weeks",
  },
  {
    id: "3",
    beforeImageUrl:
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop",
    afterImageUrl:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
    quote:
      "Best investment I've made in myself. My energy and confidence are through the roof.",
    name: "Sam T.",
    result: "Recomp • 20 weeks",
  },
  {
    id: "4",
    beforeImageUrl:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
    afterImageUrl:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",
    quote:
      "Personalized programming and weekly check-ins kept me consistent. Results speak for themselves.",
    name: "Casey L.",
    result: "Lost 18 lbs • 12 weeks",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article
      className="flex h-full flex-col rounded-xl border shadow-md ring-1 ring-black/10 overflow-hidden"
      style={{
        borderColor: siteConfig.branding.colors.border,
        backgroundColor: siteConfig.branding.colors.background.secondary,
      }}
    >
      {/* Before / After side by side */}
      <div className="grid grid-cols-2 gap-px bg-zinc-200">
        <div className="relative aspect-[3/4] bg-zinc-100">
          <Image
            src={testimonial.beforeImageUrl}
            alt={`Before — ${testimonial.name}`}
            fill
            className="object-cover"
            sizes="(max-width: 1023px) 50vw, 25vw"
          />
          <span
            className="absolute bottom-2 left-2 rounded bg-white px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-black shadow"
          >
            Before
          </span>
        </div>
        <div className="relative aspect-[3/4] bg-zinc-100">
          <Image
            src={testimonial.afterImageUrl}
            alt={`After — ${testimonial.name}`}
            fill
            className="object-cover"
            sizes="(max-width: 1023px) 50vw, 25vw"
          />
          <span
            className="absolute bottom-2 left-2 rounded px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-white shadow"
            style={{ backgroundColor: siteConfig.branding.colors.accent.primary }}
          >
            After
          </span>
        </div>
      </div>

      {/* Quote & attribution */}
      <div className="flex flex-1 flex-col gap-2 px-4 py-4 sm:px-5 sm:py-5">
        <p
          className="text-sm leading-relaxed sm:text-base"
          style={{ color: siteConfig.branding.colors.text.secondary }}
        >
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <div className="mt-auto">
          <p
            className="font-semibold"
            style={{ color: siteConfig.branding.colors.text.primary }}
          >
            {testimonial.name}
          </p>
          {testimonial.result && (
            <p
              className="text-xs sm:text-sm"
              style={{ color: siteConfig.branding.colors.text.secondary }}
            >
              {testimonial.result}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  return (
    <section
      className="w-full py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: siteConfig.branding.colors.background.primary }}
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <header className="text-center">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: siteConfig.branding.colors.accent.primary }}
          >
            Results
          </span>
          <h2
            id="testimonials-heading"
            className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl"
            style={{ color: siteConfig.branding.colors.text.primary }}
          >
            Client Transformations
          </h2>
          <p
            className="mx-auto mt-2 max-w-xl text-base sm:text-lg"
            style={{ color: siteConfig.branding.colors.text.secondary }}
          >
            Real results from real people. Before and after, side by side.
          </p>
        </header>

        <div className="mt-10 lg:mt-12">
          <Carousel
            ariaLabel="Testimonials carousel"
            prevAriaLabel="Previous testimonials"
            nextAriaLabel="Next testimonials"
            buttonStyle={{ backgroundColor: siteConfig.branding.colors.accent.primary }}
          >
            {testimonials.map((t) => (
              <CarouselSlide
                key={t.id}
                className="min-w-full w-full shrink-0 snap-center lg:min-w-0 lg:w-[calc(50%-12px)]"
              >
                <TestimonialCard testimonial={t} />
              </CarouselSlide>
            ))}
          </Carousel>
        </div>
        {/* CTA */}
        <div className={`mt-10 flex justify-center sm:mt-12 ${mont.className}`}>
          <Button href="/#contact" variant="outline" className="rounded-lg px-8 py-3">
            Join the Movement
          </Button>
        </div>
      </Container>
    </section>
  );
}
