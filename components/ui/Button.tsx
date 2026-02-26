"use client";

import Link from "next/link";
import { Montserrat } from "next/font/google";
import type { ReactNode } from "react";
import { siteConfig } from "@/config/site";

const mont = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const { colors } = siteConfig.branding;

export type ButtonVariant = "primary" | "outline" | "inverse";

export interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  /** Override default text color (e.g. from branding) */
  color?: string;
  /** Override default background color */
  backgroundColor?: string;
  /** Override default hover text color */
  hoverColor?: string;
  /** Override default hover background color */
  hoverBackgroundColor?: string;
  /** Border color (used by outline variant; can override) */
  borderColor?: string;
  className?: string;
  "aria-label"?: string;
  type?: "button" | "submit" | "reset";
}

const variantStyles: Record<
  ButtonVariant,
  {
    color: string;
    backgroundColor: string;
    hoverColor: string;
    hoverBackgroundColor: string;
    borderColor?: string;
  }
> = {
  primary: {
    color: colors.text.inverse,
    backgroundColor: colors.accent.primary,
    hoverColor: colors.text.inverse,
    hoverBackgroundColor: colors.accent.hover,
  },
  outline: {
    color: colors.accent.primary,
    backgroundColor: colors.background.primary,
    hoverColor: colors.text.inverse,
    hoverBackgroundColor: colors.accent.primary,
    borderColor: colors.accent.primary,
  },
  inverse: {
    color: colors.text.primary,
    backgroundColor: colors.background.primary,
    hoverColor: colors.text.primary,
    hoverBackgroundColor: colors.border,
  },
};

const baseClass =
  "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold uppercase tracking-wider transition focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98]";

export default function Button({
  children,
  href,
  variant = "primary",
  color,
  backgroundColor,
  hoverColor,
  hoverBackgroundColor,
  borderColor,
  className = "",
  "aria-label": ariaLabel,
  type = "button",
}: ButtonProps) {
  const v = variantStyles[variant];
  const finalColor = color ?? v.color;
  const finalBg = backgroundColor ?? v.backgroundColor;
  const finalHoverColor = hoverColor ?? v.hoverColor;
  const finalHoverBg = hoverBackgroundColor ?? v.hoverBackgroundColor;
  const finalBorderColor = borderColor ?? v.borderColor;

  const style: React.CSSProperties = {
    color: finalColor,
    backgroundColor: finalBg,
    border: finalBorderColor ? `2px solid ${finalBorderColor}` : undefined,
    ["--btn-hover-color" as string]: finalHoverColor,
    ["--btn-hover-bg" as string]: finalHoverBg,
  };

  const wrapperClassName = [mont.className, baseClass, "hover:!text-[var(--btn-hover-color)] hover:!bg-[var(--btn-hover-bg)] hover:!border-[var(--btn-hover-bg)] focus:ring-[var(--accent-primary)]", className]
    .filter(Boolean)
    .join(" ");

  const commonProps = {
    className: wrapperClassName,
    style,
    "aria-label": ariaLabel,
  };

  if (href !== undefined) {
    return (
      <Link href={href} {...commonProps}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} {...commonProps}>
      {children}
    </button>
  );
}
