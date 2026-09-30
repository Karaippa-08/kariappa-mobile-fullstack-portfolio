import Section from "./Section";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {skills.map((g) => (
          <div key={g.group}>
            <h3 className="mb-3 font-medium">{g.group}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((s) => <li key={s} className="rounded-md border border-line bg-surface px-2.5 py-1 text-sm text-muted">{s}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
