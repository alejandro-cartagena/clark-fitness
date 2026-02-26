export interface VideoPlaceholderProps {
  /** Video source URL. When null/undefined, shows the placeholder state. */
  src?: string | null;
  /** Optional poster image URL for the video. */
  poster?: string;
  /** Accessible label for the video element. */
  ariaLabel?: string;
  /** Label text shown in the empty placeholder state. */
  placeholderLabel?: string;
  /** Optional class for the outer wrapper (the 16/9 container). */
  className?: string;
}

export default function VideoPlaceholder({
  src,
  poster = "",
  ariaLabel = "Intro video",
  placeholderLabel = "Video placeholder",
  className,
}: VideoPlaceholderProps) {
  return (
    <div
      className={
        className ??
        "relative w-full overflow-hidden rounded-xl border border-(--border) bg-zinc-200 shadow-md ring-1 ring-black/5"
      }
      style={{ aspectRatio: "16/9" }}
    >
      {src ? (
        <video
          className="h-full w-full object-cover"
          src={src}
          controls
          poster={poster}
          aria-label={ariaLabel}
        />
      ) : (
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-3 text-(--text-primary)"
          style={{ backgroundColor: "var(--bg-primary)" }}
        >
          <div
            className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-(--accent-primary) text-(--accent-primary)"
            aria-hidden
          >
            <svg
              className="ml-1 h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path d="M8 5v14l11-7L8 5z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-zinc-500">
            {placeholderLabel}
          </span>
        </div>
      )}
    </div>
  );
}
