"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const TYPEFORM_FORM_ID = "01KJKXQEKFYQVC08GT4TATRD4F";
const EMBED_SCRIPT_URL = "https://embed.typeform.com/next/embed.js";

declare global {
  interface Window {
    tf?: { load: () => void };
  }
}

/**
 * Inline Typeform embed that reinitializes on every mount.
 * Fixes the issue where the form doesn't load when navigating to /apply
 * a second time (client-side) without a full refresh.
 */
export default function TypeformApplyEmbed() {
  // Unique key per mount so Script remounts and re-runs on each visit (fallback if tf.load is not enough)
  const [scriptKey] = useState(() => `tf-${Date.now()}-${Math.random().toString(36).slice(2)}`);

  useEffect(() => {
    function initEmbed() {
      if (typeof window !== "undefined" && window.tf?.load) {
        window.tf.load();
      }
    }

    initEmbed();

    // If script hasn't loaded yet (first visit), poll until tf is available
    const id = setInterval(() => {
      if (window.tf?.load) {
        window.tf.load();
        clearInterval(id);
      }
    }, 50);

    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div
        data-tf-live={TYPEFORM_FORM_ID}
        className="min-h-[60vh] w-full"
      />
      <Script
        key={scriptKey}
        src={`${EMBED_SCRIPT_URL}?v=${scriptKey}`}
        strategy="afterInteractive"
        onLoad={() => {
          window.tf?.load();
        }}
      />
    </>
  );
}
