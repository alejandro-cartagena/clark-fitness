"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";

const SCROLL_THRESHOLD = 24;

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    if (pathname !== "/" || !href.startsWith("/#")) return;
    const id = href.replace("/#", "");
    if (!id) return;
    e.preventDefault();
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const isApplyPage = pathname === "/apply";

  // Scroll: transparent at top, solid when scrolled (skip on /apply – always solid there)
  useEffect(() => {
    if (isApplyPage) return;
    function handleScroll() {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    }
    handleScroll(); // run once for SSR / initial state
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isApplyPage]);

  // Close on Escape
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock scroll when menu open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow || "";
    }
    return () => {
      document.body.style.overflow = originalOverflow || "";
    };
  }, [isOpen]);

  const showSolidNav = isScrolled || isApplyPage;
  const isFixed = !isApplyPage;

  const navBg = showSolidNav
    ? "backdrop-blur-md border-b shadow-sm"
    : "bg-transparent border-b border-transparent";
  const navBgStyle = showSolidNav
    ? {
        backgroundColor: `${siteConfig.branding.colors.background.secondary}ee`,
        borderColor: siteConfig.branding.colors.border,
      }
    : undefined;
  const textClass = showSolidNav
    ? "text-[var(--text-primary)] hover:text-[var(--accent-primary)]"
    : "text-white hover:text-white/90";
  const burgerClass = showSolidNav
    ? "border-[var(--border)] hover:bg-[var(--highlight-primary)]"
    : "border-white/30 bg-white/10 text-white hover:bg-white/20";
  const burgerStyle = showSolidNav
    ? { backgroundColor: "var(--bg-secondary)", color: "var(--text-primary)" }
    : undefined;

  return (
    <>
      <nav
        className={`z-50 h-20 transition-all duration-300 ${isFixed ? "fixed inset-x-0 top-0" : "sticky top-0"} ${navBg}`}
        style={navBgStyle}
        aria-label="Main navigation"
      >
        <Container className="flex h-full w-full items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className="relative z-50 flex cursor-pointer select-none items-center transition-opacity hover:opacity-90"
            aria-label={siteConfig?.name ?? "Home"}
          >
            <Image
              src={siteConfig.logo}
              alt={siteConfig?.name ?? "Clark Fitness"}
              width={250}
              height={100}
              className="h-18 md:h-25 w-full object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 md:flex">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-sm uppercase tracking-wider transition-colors font-semibold ${textClass}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <Button href={siteConfig.applyPath} variant="highlightoutline" className="h-10 cursor-pointer">Join My Team</Button>
          </ul>

          {/* Mobile burger */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-sidebar"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
            style={burgerStyle}
            className={`cursor-pointer relative z-50 inline-flex h-10 w-10 items-center justify-center rounded-md border transition active:scale-95 md:hidden ${burgerClass}`}
          >
            {/* Burger → X animation */}
            <span className="sr-only">Toggle menu</span>
            <span
              className={`absolute block h-0.5 w-5 transform rounded transition-all duration-300 ease-in-out ${
                isOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5 rotate-0 bg-current"
              } ${isOpen && !showSolidNav ? "bg-white" : isOpen ? "bg-current" : ""}`}
            />
            <span
              className={`absolute block h-0.5 w-5 transform rounded transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0" : "opacity-100 bg-current"
              }`}
            />
            <span
              className={`absolute block h-0.5 w-5 transform rounded transition-all duration-300 ease-in-out ${
                isOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5 rotate-0 bg-current"
              } ${isOpen && !showSolidNav ? "bg-white" : isOpen ? "bg-current" : ""}`}
            />
          </button>
        </Container>
      </nav>

      {/* Overlay (portal-like, sibling to nav) */}
      <div
        role="presentation"
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-[60] bg-black/50 opacity-0 transition-opacity duration-300 ease-in-out md:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Sidebar (sibling to nav) */}
      <aside
        id="mobile-sidebar"
        aria-hidden={!isOpen}
        className={`fixed right-0 top-0 z-[70] h-full w-[75%] max-w-sm shadow-2xl transition-transform duration-300 ease-in-out will-change-transform md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          backgroundColor: siteConfig.branding.colors.background.secondary,
          borderLeft: `1px solid ${siteConfig.branding.colors.border}`,
        }}
      >
        <div
          className="flex h-16 items-center justify-between border-b px-4"
          style={{ borderColor: siteConfig.branding.colors.border }}
        >
          <span className="text-base font-semibold" style={{ color: siteConfig.branding.colors.text.primary }}>
            {siteConfig?.name ?? "Brand"}
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="cursor-pointer inline-flex h-9 w-9 items-center justify-center rounded-md border transition hover:opacity-90 active:scale-95"
            style={{
              borderColor: siteConfig.branding.colors.border,
              backgroundColor: siteConfig.branding.colors.background.primary,
              color: siteConfig.branding.colors.text.primary,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span className="sr-only">Close</span>
          </button>
        </div>

        <nav className="px-4 py-6">
          <ul className="space-y-2">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block rounded-md px-3 py-2 text-sm font-medium tracking-wide transition-colors hover:opacity-90"
                  style={{
                    color: siteConfig.branding.colors.text.primary,
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}