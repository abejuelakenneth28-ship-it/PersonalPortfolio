"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { about, profile } from "@/data/profile";
import { CountUp } from "./CountUp";
import { ProfileModal } from "./ProfileModal";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function About() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          label="About Me"
          title="Building digital experiences that matter"
          subtitle="Get to know more about my journey and what drives me"
        />

        <div className="grid items-center gap-12 lg:grid-cols-[380px_1fr] lg:gap-16">
          <Reveal className="mx-auto w-full max-w-80 lg:max-w-none">
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open profile card"
              className="group relative block aspect-square w-full cursor-pointer rounded-[20px] transition-transform duration-500 hover:scale-[1.02]"
            >
              <span
                aria-hidden="true"
                className="bg-gradient-brand absolute -inset-1 rounded-3xl opacity-50 blur-xl transition-all duration-500 group-hover:opacity-80 group-hover:blur-2xl"
              />
              <span className="bg-gradient-brand relative block h-full w-full overflow-hidden rounded-[20px] p-[3px]">
                <span className="relative block h-full w-full overflow-hidden rounded-[17px] bg-surface">
                  <Image
                    src={profile.photo}
                    alt={`Photo of ${profile.name}`}
                    fill
                    sizes="(min-width: 1024px) 380px, 320px"
                    className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                    priority
                  />
                </span>
              </span>
            </button>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="mb-5 text-2xl leading-snug font-bold tracking-tight sm:text-3xl">{about.heading}</h3>
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="mb-5 leading-7 text-fg-2">
                {p}
              </p>
            ))}
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
              {about.stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-gradient text-3xl font-extrabold tracking-tight">
                    <CountUp to={s.value} suffix="+" />
                  </dd>
                  <dd className="mt-1 text-sm font-medium text-fg-3">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>

      <ProfileModal open={open} onClose={close} />
    </section>
  );
}
