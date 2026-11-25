import { ArrowUpRight, Music, ShoppingCart, Tent, type LucideIcon } from "lucide-react";
import Image from "next/image";
import { projects, type ProjectIcon } from "@/data/profile";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const icons: Record<ProjectIcon, LucideIcon> = { tent: Tent, cart: ShoppingCart, music: Music };

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          label="Featured Projects"
          title="Selected work & personal projects"
          subtitle="A showcase of my recent projects and creative endeavors"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => {
            const Icon = p.cover ? icons[p.cover.icon] : null;
            return (
              <Reveal key={p.title} delay={(i % 2) * 0.1}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-line bg-card backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-[0_25px_50px_var(--shadow),0_0_50px_rgb(220_38_38/0.12)]">
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
                        {Icon && (
                          <Icon size={64} strokeWidth={1.5} className="transition-transform duration-500 group-hover:scale-110" />
                        )}
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
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
