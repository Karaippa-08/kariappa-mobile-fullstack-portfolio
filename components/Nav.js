import ThemeToggle from "./ThemeToggle";
import { profile } from "@/data/portfolio";

const links = [["Projects", "#projects"], ["Experience", "#experience"], ["Skills", "#skills"], ["Contact", "#contact"]];

export default function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/85 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
        <a href="#top" className="font-semibold">{profile.name}</a>
        <div className="flex items-center gap-5 text-sm">
          <ul className="hidden gap-5 sm:flex">
            {links.map(([label, href]) => (
              <li key={href}><a href={href} className="text-muted transition-colors hover:text-ink">{label}</a></li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
