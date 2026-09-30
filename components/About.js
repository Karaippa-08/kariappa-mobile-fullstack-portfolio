import Section from "./Section";
import { profile } from "@/data/portfolio";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
        <div className="max-w-prose space-y-4 text-muted">
          {profile.about.map((t) => <p key={t}>{t}</p>)}
        </div>
        <dl className="space-y-4 text-sm">
          {profile.facts.map((f) => (
            <div key={f.label} className="border-b border-line pb-3">
              <dt className="text-muted">{f.label}</dt>
              <dd className="font-medium">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
