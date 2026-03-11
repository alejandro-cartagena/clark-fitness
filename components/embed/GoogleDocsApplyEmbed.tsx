const GOOGLE_FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdgRESd094_k9DWz8lA_mYnD1nL50OLZW631qQScgN6aJKC8A/viewform?embedded=true";

export default function GoogleDocsApplyEmbed() {
  return (
    <div className="w-full overflow-hidden rounded-lg">
      <iframe
        src={GOOGLE_FORM_EMBED_URL}
        width="100%"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        title="Application form"
        loading="lazy"
        className="min-w-0 h-[5000px] md:h-[4200px] lg:h-[3665px]"
      >
        Loading…
      </iframe>
    </div>
  );
}
