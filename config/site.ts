import type { SocialLink } from "@/types/social";

export const siteConfig = {
  name: "Zyzz",
  tagline: "Transform Your Body. Elevate Your Mind.",
  description:
    "Personal training and nutrition coaching for busy professionals.",
  email: "coach@eliteperformance.com",
  phone: "305-555-1234",
  location: "Miami, FL",

  navigation: [
    { label: "About", href: "/#about" },
    { label: "Programs", href: "/#programs" },
    { label: "Features", href: "/#features" },
    { label: "Testimonials", href: "/#testimonials" },
  ],

  socials: [
    {
      platform: "instagram" as const,
      url: "https://instagram.com/clarkchrm",
    },
    {
      platform: "tiktok" as const,
      url: "https://tiktok.com/@clarkcharm",
    },
  ] satisfies SocialLink[],

  sponsors: [
    {
      name: "HTLT",
      logo: "/images/sponsors/htlt.png",
      url: "https://l.instagram.com/?u=https%3A%2F%2Fwww.htltsupps.com%2F%3Fsca_ref%3D6874211.labC5JgeUXl%26utm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGngBTF3a3hQi9vbbmOOer6Ex5lSK1WawMWys2J_f0vvQfrA_nls97uO5ou_FQ_aem_L4EiIN-qb8jI92DYR90N0Q&e=AT0EK5NzkPNmjgNxkCeRWJjJLmS7STXggbhH_SP7oP4H242mIwzpbf0eviH4axnE-rnwsdcaLVsWuSRpPNadGcdHH4da1bkNtoKIAdfQNw",
      code: "CLARK",
      description: "Use code ELITE10 for 10% off",
    },
  ],

  branding: {
    colors: {
      background: {
        primary: "#FFFFFF",
        secondary: "#ece7e3",
      },
      text: {
        primary: "#18181b",
        secondary: "#52525b",
        inverse: "#FFFFFF",
      },
      accent: {
        primary: "#91171f",
        hover: "#7c131a",
      },
      border: "#e5e5e5",
    },
  },
} as const;
