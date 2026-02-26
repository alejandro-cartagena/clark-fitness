"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

const SCROLL_THRESHOLD = 24;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Scroll: transparent at top, solid when scrolled
  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    }
    handleScroll(); // run once for SSR / initial state
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const navBg = isScrolled
    ? "bg-white/90 backdrop-blur-md border-b border-black/5 shadow-sm"
    : "bg-transparent border-b border-transparent";
  const textClass = isScrolled
    ? "text-zinc-900 hover:text-zinc-700"
    : "text-white hover:text-white/90";
  const burgerClass = isScrolled
    ? "border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50"
    : "border-white/30 bg-white/10 text-white hover:bg-white/20";

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 h-16 transition-all duration-300 ${navBg}`}
        aria-label="Main navigation"
      >
        <Container className="flex h-full w-full items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className={`relative z-50 select-none text-base font-semibold tracking-wide transition-colors ${textClass}`}
            aria-label={siteConfig?.name ?? "Home"}
          >
            {siteConfig?.name ?? "Brand"}
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 md:flex">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm uppercase tracking-wider transition-colors ${textClass}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile burger */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-sidebar"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
            className={`cursor-pointer relative z-50 inline-flex h-10 w-10 items-center justify-center rounded-md border transition active:scale-95 md:hidden ${burgerClass}`}
          >
            {/* Burger → X animation */}
            <span className="sr-only">Toggle menu</span>
            <span
              className={`absolute block h-0.5 w-5 transform rounded transition-all duration-300 ease-in-out ${
                isOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5 rotate-0 bg-current"
              } ${isOpen && !isScrolled ? "bg-white" : isOpen ? "bg-zinc-900" : ""}`}
            />
            <span
              className={`absolute block h-0.5 w-5 transform rounded transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0" : "opacity-100 bg-current"
              }`}
            />
            <span
              className={`absolute block h-0.5 w-5 transform rounded transition-all duration-300 ease-in-out ${
                isOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5 rotate-0 bg-current"
              } ${isOpen && !isScrolled ? "bg-white" : isOpen ? "bg-zinc-900" : ""}`}
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
        className={`fixed right-0 top-0 z-[70] h-full w-[75%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out will-change-transform md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-zinc-100 px-4">
          <span className="text-base font-semibold">{siteConfig?.name ?? "Brand"}</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="cursor-pointer inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-900 transition hover:bg-zinc-50 active:scale-95"
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
                  onClick={() => setIsOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium tracking-wide text-zinc-800 transition-colors hover:bg-zinc-50"
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