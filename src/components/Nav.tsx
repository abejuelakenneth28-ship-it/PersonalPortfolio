"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FileText, Home, Mail, PenLine, User, type LucideIcon } from "lucide-react";
import { Fragment, useEffect, useState } from "react";
import { sections, type SectionId } from "@/data/profile";

const icons: Record<SectionId, LucideIcon> = {
  home: Home,
  about: User,
  skills: PenLine,
  projects: FileText,
  contact: Mail,
};

/** Floating pill nav: the active tab expands to show its label. Follows scroll position. */
export function Nav() {
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      aria-label="Sections"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2 sm:top-6"
    >
      <div className="flex items-center gap-0.5 rounded-2xl border border-line bg-card p-1.5 shadow-[0_4px_30px_var(--shadow)] backdrop-blur-xl sm:gap-1 sm:p-2">
        <a
          href="#home"
          onClick={() => setActive("home")}
          aria-label="Kenneth Abejuela — back to top"
          className="flex shrink-0 items-center rounded-full px-1 transition-transform duration-300 hover:scale-110"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt=""
            width={32}
            height={32}
            className="h-7 w-7 rounded-full drop-shadow-[0_0_8px_rgb(220_38_38/0.5)] sm:h-8 sm:w-8"
          />
        </a>
        <span aria-hidden="true" className="mx-0.5 h-5 w-px bg-line" />
        {sections.map((s, i) => {
          const Icon = icons[s.id];
          const isActive = active === s.id;
          return (
            <Fragment key={s.id}>
              {i > 0 && <span aria-hidden="true" className="mx-0.5 h-5 w-px bg-line" />}
              <a
                href={`#${s.id}`}
                onClick={() => setActive(s.id)}
                aria-current={isActive ? "true" : undefined}
                aria-label={s.label}
                className={`relative flex items-center rounded-xl px-2.5 py-2 text-sm font-medium transition-colors sm:px-3 ${
                  isActive ? "text-brand" : "text-fg-2 hover:bg-fg/5 hover:text-fg"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-xl bg-brand/10"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <Icon size={18} className="relative shrink-0" />
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.span
                      initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                      animate={{ width: "auto", opacity: 1, marginLeft: 8 }}
                      exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                      className="relative overflow-hidden whitespace-nowrap"
                    >
                      {s.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </a>
            </Fragment>
          );
        })}
      </div>
    </motion.nav>
  );
}
