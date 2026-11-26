import { Code2, Palette, Rocket, Star, type LucideIcon } from "lucide-react";
import { skills, type SkillIcon } from "@/data/profile";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const icons: Record<SkillIcon, LucideIcon> = { code: Code2, palette: Palette, rocket: Rocket, star: Star };

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          label="My Skills"
          title="Technologies & tools I use"
          subtitle="Bringing ideas to life with modern frameworks and creative solutions"
        />
        <div className="grid gap-5 md:grid-cols-2">
          {skills.map((skill, i) => {
            const Icon = icons[skill.icon];
            return (
              <Reveal key={skill.title} delay={(i % 2) * 0.1}>
                <article className="h-full rounded-2xl border border-line bg-card p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_20px_40px_var(--shadow),0_0_40px_rgb(220_38_38/0.12)]">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-brand/15 bg-brand/10 text-brand">
                    <Icon size={22} />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold tracking-tight">{skill.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-fg-2">{skill.description}</p>
                  <ul className="flex flex-wrap gap-1.5">
                    {skill.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-brand/15 bg-brand/[0.08] px-3 py-1 text-xs font-medium text-brand"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
