"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  BookOpen,
  ClipboardList,
  Globe,
  GraduationCap,
  Monitor,
  Music,
  Palette,
  ShoppingCart,
  Smartphone,
  Tent,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import {
  projectCategories,
  projects,
  type Project,
  type ProjectCategory,
  type ProjectIcon,
} from "@/data/profile";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const icons: Record<ProjectIcon, LucideIcon> = {
  tent: Tent,
  cart: ShoppingCart,
  music: Music,
  teacher: GraduationCap,
  book: BookOpen,
  assistant: Bot,
  classrecord: ClipboardList,
  payroll: Wallet,
};

const tabIcons: Record<ProjectCategory, LucideIcon> = { website: Globe, app: Smartphone, creative: Palette };

export function Projects() {
  const [category, setCategory] = useState<ProjectCategory>("website");
  const visible = projects.filter((p) => p.category === category);

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          label="Featured Projects"
          title="Selected work & personal projects"
          subtitle="Websites, apps, and creative work I've built"
        />

        <Reveal className="mb-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Project categories"
            className="flex gap-1 rounded-2xl border border-line bg-card p-1.5 backdrop-blur-md"
          >
            {projectCategories.map((c) => {
              const Icon = tabIcons[c.id];
              const active = c.id === category;
              const count = projects.filter((p) => p.category === c.id).length;
              return (
                <button
                  key={c.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setCategory(c.id)}
                  className={`relative flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-semibold transition-colors sm:px-5 ${
                    active ? "text-white" : "text-fg-2 hover:text-fg"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="project-tab"
                      className="bg-gradient-brand absolute inset-0 rounded-xl shadow-[0_4px_20px_rgb(220_38_38/0.3)]"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <Icon size={16} className="relative" />
                  <span className="relative">{c.label}</span>
                  <span
                    className={`relative rounded-full px-1.5 text-xs ${active ? "bg-white/20" : "bg-fg/5 text-fg-3"}`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <motion.div layout className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p, index }: { project: Project; index: number }) {
  const Icon = p.cover ? icons[p.cover.icon] : null;
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.4, 0, 0.2, 1] }}
      className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-line bg-card backdrop-blur-md transition-[border-color,box-shadow,translate] duration-500 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-[0_25px_50px_var(--shadow),0_0_50px_rgb(220_38_38/0.12)]"
    >
      <div className="relative h-52 overflow-hidden">
        {p.image ? (
          <Image
            src={p.image}
            alt={p.title}
            fill
            sizes="(min-width: 768px) 560px, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${p.cover?.gradient} text-white/90`}
          >
            {Icon && <Icon size={64} strokeWidth={1.5} className="transition-transform duration-500 group-hover:scale-110" />}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-lg font-bold tracking-tight">{p.title}</h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-fg-2">{p.description}</p>
        <ul className="mb-5 flex flex-wrap gap-1.5">
          {p.tags.map((tag) => (
            <li key={tag} className="rounded-full bg-fg/5 px-2.5 py-1 text-xs font-medium text-fg-3">
              {tag}
            </li>
          ))}
        </ul>
        {p.link ? (
          <a
            href={p.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex w-fit items-center gap-1.5 text-sm font-semibold transition-colors hover:text-brand"
          >
            {p.link.label}
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            />
          </a>
        ) : (
          p.note && (
            <span className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-fg-3">
              {p.category === "app" ? <Monitor size={15} /> : <Globe size={15} />}
              {p.note}
            </span>
          )
        )}
      </div>
    </motion.article>
  );
}
