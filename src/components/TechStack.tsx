import { techStack } from "@/data/profile";

/** Grouped tech-stack chips: group name on the left, chips on the right (stacks on mobile). */
export function TechStack() {
  return (
    <div className="rounded-2xl border border-line bg-card p-6 backdrop-blur-md sm:p-8">
      <p className="mb-6 text-lg font-semibold tracking-tight">Tech Stack</p>
      <dl className="space-y-5">
        {techStack.map(({ group, items }) => (
          <div key={group} className="grid gap-2 sm:grid-cols-[180px_1fr] sm:gap-6">
            <dt className="pt-1 text-sm font-semibold">{group}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-brand/15 bg-brand/[0.08] px-3 py-1 text-sm text-fg-2 transition-colors hover:border-brand/40 hover:text-brand"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
