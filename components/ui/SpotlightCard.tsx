"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface SpotlightCardProps {
  /** Image URL for the card. */
  imageSrc: string;
  /** Alt text for the image. */
  imageAlt: string;
  /** Heading text. */
  heading: string;
  /** Body content (normal text). */
  children: React.ReactNode;
  /** Optional icon rendered above the heading. */
  icon?: React.ReactNode;
  /** Optional accent color for the spotlight glow (e.g. from site branding). */
  spotlightColor?: string;
  /** Additional class names for the root element. */
  className?: string;
}

const DEFAULT_SPOTLIGHT_COLOR = "rgba(145, 23, 31, 0.15)";
const MAX_TILT_DEG = 10;

/**
 * Spotlight card: gradient border/glow that follows the mouse, with tilt and glow on hover.
 * Based on the React Bits / ibelick card-spotlight pattern.
 */
export default function SpotlightCard({
  imageSrc,
  imageAlt,
  heading,
  children,
  icon,
  spotlightColor = DEFAULT_SPOTLIGHT_COLOR,
  className,
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
    // Tilt: normalize to -1..1 from center, then scale by MAX_TILT_DEG
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * MAX_TILT_DEG;
    const rotateX = ((centerY - y) / centerY) * MAX_TILT_DEG;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
    setTilt({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    setTilt({ x: 0, y: 0 });
  };

  const glowStyle =
    opacity > 0
      ? {
          boxShadow: `0 0 26px ${spotlightColor}, 0 0 52px ${spotlightColor}`,
        }
      : undefined;

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-xl border shadow-lg transition-[transform,box-shadow] duration-300 ease-out focus-within:ring-2 focus-within:ring-[var(--spotlight-accent,#91171f)] focus-within:ring-offset-2",
        "border-[var(--spotlight-border,#e5e5e5)] bg-[var(--spotlight-bg,#FFFFFF)]",
        className
      )}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        ...glowStyle,
      }}
    >
      {/* Spotlight overlay */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
        aria-hidden
      />

      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--bg-secondary,#ece7e3)]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Content */}
      <div className="relative flex flex-1 flex-col p-4 sm:p-5">
        {icon ? (
          <div className="mb-3 flex items-center justify-start text-[var(--spotlight-accent,#91171f)] [&>svg]:h-6 [&>svg]:w-6 sm:[&>svg]:h-7 sm:[&>svg]:w-7">
            {icon}
          </div>
        ) : null}
        <h3 className="font-semibold tracking-tight text-[var(--text-primary,#18181b)] sm:text-lg">
          {heading}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary,#52525b)]">
          {children}
        </p>
      </div>
    </div>
  );
}
