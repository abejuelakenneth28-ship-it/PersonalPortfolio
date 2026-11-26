"use client";

import { useInView } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { skillLevels } from "@/data/profile";
import { cn } from "@/lib/utils";

/** Animated skill-level bars. Bars fill when the card scrolls into view. */
export default function SkillsProgress({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className={cn("w-full rounded-2xl border border-line bg-card p-6 backdrop-blur-md sm:p-8", className)}>
      <div className="mb-6 flex items-start justify-between gap-3">
        <div>
          <p className="text-lg font-semibold tracking-tight">Skill Levels</p>
          <p className="mt-0.5 text-sm text-fg-2">How confident I am with the tools I use most</p>
        </div>
        <Badge variant="outline" className="shrink-0 gap-1 border-teal-400/30 bg-teal-400/10 text-teal-400">
          <TrendingUp className="size-3" />
          Always learning
        </Badge>
      </div>

      <div className="grid gap-x-10 gap-y-5 md:grid-cols-2">
        {skillLevels.map(({ label, value, color }) => (
          <div key={label} className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-sm">{label}</span>
              <span className="text-xs font-medium tabular-nums text-fg-2">{inView ? value : 0}%</span>
            </div>
            <Progress
              value={inView ? value : 0}
              className={cn(
                "**:data-[slot='progress-indicator']:duration-1000!",
                color.indicator,
                color.track,
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
