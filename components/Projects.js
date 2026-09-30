import Section from "./Section";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <article key={p.name} className={`rounded-xl border border-line bg-surface p-6 transition-colors hover:border-accent ${i === 0 ? "md:col-span-2" : ""}`}>
            <p className="font-mono text-xs text-accent">{p.tag}</p>
            <h3 className="mt-1 text-xl font-semibold">{p.name}</h3>
            <dl className="mt-4 space-y-3 text-sm leading-relaxed">
              <div><dt className="font-medium">Problem</dt><dd className="text-muted">{p.problem}</dd></div>
              <div><dt className="font-medium">Solution</dt><dd className="text-muted">{p.solution}</dd></div>
              <div><dt className="font-medium">My role</dt><dd className="text-muted">{p.contribution}</dd></div>
            </dl>
            <ul className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((s) => <li key={s} className="rounded-md border border-line px-2 py-0.5 font-mono text-xs text-muted">{s}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
