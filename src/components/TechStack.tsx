import { techStack } from "@/data/profile";

/** Grouped tech-stack chips in a responsive grid (1 → 2 → 4 columns). */
export function TechStack() {
  return (
    <div className="rounded-2xl border border-line bg-card p-6 backdrop-blur-md sm:p-8">
      <p className="text-lg font-semibold tracking-tight">Tech Stack</p>
      <p className="mt-0.5 mb-6 text-sm text-fg-2">Other tools and platforms I work with</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {techStack.map(({ group, items }) => (
          <div key={group} className="rounded-xl border border-line bg-fg/[0.02] p-4">
            <p className="mb-3 text-xs font-semibold tracking-[0.15em] text-brand uppercase">{group}</p>
            <ul className="flex flex-wrap gap-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-brand/15 bg-brand/[0.08] px-2.5 py-1 text-[13px] text-fg-2 transition-colors hover:border-brand/40 hover:text-brand"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
