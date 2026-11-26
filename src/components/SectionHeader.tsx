import { Reveal } from "./Reveal";

export function SectionHeader({ label, title, subtitle }: { label: string; title: string; subtitle: string }) {
  return (
    <Reveal className="mx-auto mb-16 max-w-xl text-center">
      <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-brand">{label}</span>
      <h2 className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      <p className="text-fg-2">{subtitle}</p>
    </Reveal>
  );
}
