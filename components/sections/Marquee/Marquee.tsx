"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";

interface Reaction {
  emoji: string;
  count: number;
}

interface StudentWin {
  id: string;
  name: string;
  handle?: string;
  avatarUrl: string;
  date: string;
  time: string;
  message: string;
  reactions: Reaction[];
}

const studentWinsRow1: StudentWin[] = [
  {
    id: "1",
    name: "Addie Coffelt",
    avatarUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=96&auto=format&fit=crop",
    date: "9/9/25",
    time: "7:37 AM",
    message: "Down 18 lbs in 8 weeks. Finally found a plan that fits my schedule. ✔",
    reactions: [
      { emoji: "👍", count: 9 },
      { emoji: "💯", count: 2 },
      { emoji: "😊", count: 1 },
    ],
  },
  {
    id: "2",
    name: "tkennyfitness",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=96&auto=format&fit=crop",
    date: "7/26/25",
    time: "2:15 PM",
    message:
      "LETS GO!! Hit my first pull-up ever after 6 weeks. Been in the program for only 2 and a half weeks. Strength gains are real.",
    reactions: [
      { emoji: "🔥", count: 14 },
      { emoji: "❤️", count: 7 },
      { emoji: "💯", count: 1 },
      { emoji: "😊", count: 2 },
    ],
  },
  {
    id: "3",
    name: "Ernest Novakhov",
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=96&auto=format&fit=crop",
    date: "8/5/25",
    time: "11:22 AM",
    message: "Lost 12 lbs and gained muscle definition. Training while traveling—Bali didn’t stop me.",
    reactions: [
      { emoji: "🔥", count: 7 },
      { emoji: "😊", count: 3 },
    ],
  },
  {
    id: "4",
    name: "Joseph Marini",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=96&auto=format&fit=crop",
    date: "9/23/25",
    time: "4:45 PM",
    message: "6 months in: 25 lbs down, energy through the roof. Best decision I’ve made for my health.",
    reactions: [
      { emoji: "🔥", count: 5 },
      { emoji: "😊", count: 2 },
    ],
  },
  {
    id: "5",
    name: "Sarah K.",
    avatarUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=96&auto=format&fit=crop",
    date: "9/12/25",
    time: "9:00 AM",
    message: "First time ever sticking to a program for 3 months. Gained 8 lbs of muscle, lost the belly. So grateful.",
    reactions: [
      { emoji: "👍", count: 12 },
      { emoji: "❤️", count: 4 },
    ],
  },
];

const studentWinsRow2: StudentWin[] = [
  {
    id: "6",
    name: "Mike T.",
    avatarUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=96&auto=format&fit=crop",
    date: "8/18/25",
    time: "6:30 PM",
    message: "Ran my first 5K without stopping. Coaching changed my relationship with fitness completely.",
    reactions: [
      { emoji: "🔥", count: 22 },
      { emoji: "💯", count: 8 },
      { emoji: "😊", count: 5 },
    ],
  },
  {
    id: "7",
    name: "Jessica L.",
    avatarUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=96&auto=format&fit=crop",
    date: "9/20/25",
    time: "10:15 AM",
    message: "Dropped 15 lbs in 3 months. First time I’ve ever stayed consistent. My church group is asking what I’m doing!",
    reactions: [
      { emoji: "👍", count: 6 },
      { emoji: "❤️", count: 3 },
      { emoji: "😊", count: 1 },
    ],
  },
  {
    id: "8",
    name: "David R.",
    avatarUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=96&auto=format&fit=crop",
    date: "9/1/25",
    time: "3:00 PM",
    message: "Recomp in 20 weeks: lost fat, gained muscle. Two programs back-to-back. This one delivers.",
    reactions: [
      { emoji: "🔥", count: 11 },
      { emoji: "💯", count: 4 },
    ],
  },
  {
    id: "9",
    name: "Alex M.",
    avatarUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=96&auto=format&fit=crop",
    date: "8/28/25",
    time: "8:45 AM",
    message: "Hit a new squat PR at the gym today—+40 lbs from 12 weeks ago. Let’s go!",
    reactions: [
      { emoji: "👍", count: 8 },
      { emoji: "🔥", count: 6 },
      { emoji: "😊", count: 2 },
    ],
  },
  {
    id: "10",
    name: "Jordan P.",
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=96&auto=format&fit=crop",
    date: "9/15/25",
    time: "1:20 PM",
    message: "Down 30 lbs in 5 months. Energy, confidence, and sleep are all better. Mind blown.",
    reactions: [
      { emoji: "🔥", count: 18 },
      { emoji: "💯", count: 7 },
      { emoji: "❤️", count: 4 },
    ],
  },
];

function SuccessStoryCard({ win }: { win: StudentWin }) {
  return (
    <article className="flex w-[280px] shrink-0 flex-col rounded-xl border border-zinc-200 bg-white p-4 shadow-md sm:w-[320px]">
      <div className="mb-3 flex items-center gap-3">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-zinc-100 ring-2 ring-zinc-200">
          <Image
            src={win.avatarUrl}
            alt={win.name}
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold text-zinc-900">{win.name}</p>
          <p className="text-xs text-zinc-500">
            {win.date}, {win.time}
          </p>
        </div>
      </div>
      <p className="mb-3 line-clamp-3 text-sm leading-snug text-zinc-600">
        {win.message}
      </p>
      <div className="mt-auto flex flex-wrap gap-3 text-xs text-zinc-400">
        {win.reactions.map((r) => (
          <span key={r.emoji} className="inline-flex items-center gap-1">
            <span>{r.emoji}</span>
            <span>{r.count}</span>
          </span>
        ))}
      </div>
    </article>
  );
}

function MarqueeTrack({
  wins,
  direction,
}: {
  wins: StudentWin[];
  direction: "rtl" | "ltr";
}) {
  return (
    <div className="relative w-full overflow-hidden py-4">
      <div
        className={`flex w-max min-w-max gap-6 pr-6 will-change-transform ${direction === "rtl" ? "animate-marquee-rtl" : "animate-marquee-ltr"}`}
      >
        {[...wins, ...wins].map((win, index) => (
          <SuccessStoryCard key={`${win.id}-${win.date}-${win.name}-${index}`} win={win} />
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  const { branding } = siteConfig;
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-20" style={{
      backgroundColor: branding.colors.background.secondary,
    }}>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span
          className="inline-block text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: branding.colors.accent.primary }}
        >
          Student Wins
        </span>
        <h2
          className="mt-4 font-montserrat text-3xl font-bold tracking-tight"
          style={{ color: branding.colors.text.primary }}
        >
          Become Our Next Success Story
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed" style={{ color: branding.colors.text.secondary }}>
          Real transformations from people who committed to the program—weight
          loss, strength gains, and lasting habits.
        </p>
      </div>

      {/* Top row: scrolls right to left */}
      <div className="mt-10 w-full">
        <MarqueeTrack wins={studentWinsRow1} direction="rtl" />
      </div>

      {/* Bottom row: scrolls left to right */}
      <div className="w-full">
        <MarqueeTrack wins={studentWinsRow2} direction="ltr" />
      </div>
    </section>
  );
}
