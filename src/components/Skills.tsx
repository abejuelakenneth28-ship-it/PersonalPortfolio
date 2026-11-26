import SkillsProgress from "./ui/progress-03";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          label="My Skills"
          title="Technologies & tools I use"
          subtitle="Bringing ideas to life with modern frameworks and creative solutions"
        />
        <Reveal>
          <SkillsProgress />
        </Reveal>
      </div>
    </section>
  );
}
