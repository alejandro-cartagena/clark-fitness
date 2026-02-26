import { FaInstagram, FaTiktok } from "react-icons/fa";
import type { IconType } from "react-icons";
import type { SocialPlatform } from "@/types/social";
import { siteConfig } from "@/config/site";

// Only map icons we support; others will be ignored gracefully
const iconMap: Partial<Record<SocialPlatform, IconType>> = {
  instagram: FaInstagram,
  tiktok: FaTiktok,
};

export default function SocialIcons() {
  return (
    <div className="flex gap-4">
      {siteConfig.socials.map((social) => {
        const Icon = iconMap[social.platform];

        if (!Icon) return null;

        return (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 transition hover:text-zinc-100"
            aria-label={social.platform}
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
}
 