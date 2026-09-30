import { profile, projects } from "@/data/portfolio";

// The phone frame lists the real apps built, as an Android home screen.
const apps = projects.filter((p) => p.stack.includes("Kotlin"));

export default function Hero() {
  return (
    <div id="top" className="mx-auto grid max-w-5xl items-center gap-12 px-5 pb-12 pt-16 sm:pt-24 md:grid-cols-[1.4fr_1fr]">
      <div>
        <p className="settle mb-4 font-mono text-sm text-accent">{profile.title}</p>
        <h1 className="settle settle-2 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{profile.headline}</h1>
        <p className="settle settle-3 mt-5 max-w-xl text-lg text-muted">{profile.subline}</p>
        <div className="settle settle-3 mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="rounded-md bg-accent px-5 py-2.5 font-medium text-on-accent transition-opacity hover:opacity-90">See my projects</a>
          <a href={`mailto:${profile.email}`} className="rounded-md border border-line px-5 py-2.5 font-medium transition-colors hover:border-accent">Email me</a>
        </div>
      </div>

      <div aria-hidden="true" className="mx-auto w-56 rounded-[2rem] border-4 border-line bg-surface p-4 shadow-sm">
        <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-line" />
        <p className="mb-3 font-mono text-xs text-muted">Apps I have built</p>
        <div className="grid grid-cols-2 gap-3">
          {apps.map((a) => (
            <div key={a.name} className="flex flex-col items-center gap-1.5 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-lg font-semibold text-on-accent">{a.name[0]}</div>
              <span className="text-[11px] leading-tight text-muted">{a.name.replace(" Management System", "").replace(" Application", "")}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center font-mono text-[11px] text-muted">Kotlin · XML · Firebase</p>
      </div>
    </div>
  );
}
