import Section from "./Section";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-8 border-l border-line pl-6">
        {experience.map((e) => (
          <li key={e.role} className="relative">
            <span className="absolute -left-[1.85rem] top-2 h-2.5 w-2.5 rounded-full bg-accent" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="text-lg font-semibold">{e.role}, {e.company}</h3>
              <span className="font-mono text-sm text-muted">{e.period}</span>
            </div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-muted marker:text-accent">
              {e.points.map((pt) => <li key={pt}>{pt}</li>)}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
