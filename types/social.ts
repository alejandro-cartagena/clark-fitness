export type SocialPlatform =
  | "instagram"
  | "tiktok"
  | "youtube"
  | "linkedin"
  | "twitter"
  | "facebook"
  | "email";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
}