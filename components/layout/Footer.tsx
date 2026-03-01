import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";
import SocialIcons from "@/components/ui/SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();
  const { colors } = siteConfig.branding;

  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: colors.background.secondary,
        borderColor: colors.border,
        color: colors.text.secondary,
      }}
    >
      <Container>
        {/* Top section: CTA on left, socials on right */}
        <div className="flex flex-col items-start justify-between gap-6 py-8 sm:flex-row sm:items-center sm:gap-8">
          <div className="max-w-xl text-center md:text-left mx-auto md:mx-0">
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.2em]"
              style={{ color: colors.accent.primary }}
            >
              Commit to the Change
            </p>
            <h3 className="mt-1 text-xl font-semibold sm:text-2xl" style={{ color: colors.text.primary }}>
              Get Started Now
            </h3>
            <div className="mt-4">
              <Button
                href={siteConfig.applyPath}
                variant="highlight"
                className="shadow-sm"
                aria-label="Join my team"
              >
                Join the Movement
              </Button>
            </div>
          </div>

          {/* Divider */}
          <div className="sm:hidden h-px w-full" style={{ backgroundColor: colors.border }} />

          <div className="flex flex-col md:flex-row gap-6 text-center md:text-left mx-auto md:mx-0">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm uppercase tracking-wider transition-colors hover:opacity-90"
                style={{ color: colors.text.secondary }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="w-full sm:w-auto md:mt-0 mt-4">
            <div className="flex items-center justify-center md:justify-end">
              <SocialIcons />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full" style={{ backgroundColor: colors.border }} />

        {/* Bottom section: Copyright */}
        <div className="flex items-center justify-between py-6">
          <p className="text-xs sm:text-sm text-center md:text-left mx-auto md:mx-0">
            © {year} {siteConfig?.name ?? "Your Company"}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
