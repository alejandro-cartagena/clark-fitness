import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import TypeformApplyEmbed from "@/components/embed/TypeformApplyEmbed";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Apply",
  description: `Apply for coaching with ${siteConfig.name}. Join the team.`,
};

export default function ApplyPage() {
  return (
    <main className="min-h-screen py-12" style={{ backgroundColor: siteConfig.branding.colors.background.primary }}>
      <Container className="w-full max-w-4xl">
        <h1 className="sr-only">
          Apply for coaching with {siteConfig.name}
        </h1>
        <TypeformApplyEmbed />
      </Container>
    </main>
  );
}
