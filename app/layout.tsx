import type { Metadata } from "next";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://clark-fitness.vercel.app";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    // Prefer larger sources so the tab icon stays sharp on high-DPI displays (browser still shows ~16px)
    icon: [
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicons/favicon.ico", sizes: "any" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicons/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/favicons/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  metadataBase: new URL(siteUrl),
  openGraph: {
    url: siteUrl,
    siteName: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable}`}>
      <body 
        className="antialiased min-h-screen flex flex-col overflow-x-hidden"
        style={
          {
            backgroundColor: siteConfig.branding.colors.background.primary,
            "--bg-primary": siteConfig.branding.colors.background.primary,
            "--bg-secondary": siteConfig.branding.colors.background.secondary,
            "--text-primary": siteConfig.branding.colors.text.primary,
            "--text-secondary": siteConfig.branding.colors.text.secondary,
            "--text-inverse": siteConfig.branding.colors.text.inverse,
            "--accent-primary": siteConfig.branding.colors.accent.primary,
            "--accent-hover": siteConfig.branding.colors.accent.hover,
            "--highlight-primary": siteConfig.branding.colors.highlight.primary,
            "--highlight-hover": siteConfig.branding.colors.highlight.hover,
            "--border": siteConfig.branding.colors.border,
          } as React.CSSProperties
        } 
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
