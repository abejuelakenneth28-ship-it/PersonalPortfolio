"use client";

import { motion, type Variants } from "framer-motion";
import { profile } from "@/data/profile";
import { SocialLinks } from "./SocialLinks";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } },
};

export function Hero() {
  return (
    <section id="home" className="flex min-h-svh items-center justify-center px-5 pt-20 text-center">
      <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
        <motion.div
          variants={item}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-brand/20 bg-brand/[0.08] px-6 py-2.5 text-sm font-medium tracking-wide text-brand"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
          </span>
          {profile.badge}
        </motion.div>

        <motion.h1
          variants={item}
          className="mb-6 text-[2.5rem] leading-[1.05] font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-[5rem]"
        >
          Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
        </motion.h1>

        <motion.p variants={item} className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-fg-2 sm:text-lg">
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap justify-center gap-3.5">
          <a
            href="#projects"
            className="bg-gradient-brand rounded-xl px-7 py-3 text-sm font-semibold text-white shadow-[0_4px_20px_rgb(220_38_38/0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgb(220_38_38/0.45)]"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-line px-7 py-3 text-sm font-semibold transition-all duration-300 hover:border-brand/40 hover:bg-fg/5"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div variants={item}>
          <SocialLinks className="mt-12" />
        </motion.div>
      </motion.div>
    </section>
  );
}
