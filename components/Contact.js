import Section from "./Section";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const rows = [
    ["Email", profile.email, `mailto:${profile.email}`],
    ["Phone", profile.phone, `tel:${profile.phone.replace(/\s/g, "")}`],
    ["LinkedIn", "Kariappa M M", profile.linkedin],
    ["GitHub", "Karaippa-08", profile.github],
  ];
  return (
    <Section id="contact" title="Contact">
      <p className="mb-8 max-w-prose text-muted">I am open to junior Android, full-stack and software developer roles. The quickest way to reach me is email.</p>
      <ul className="divide-y divide-line border-y border-line">
        {rows.map(([label, text, href]) => (
          <li key={label}>
            <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
              className="flex items-center justify-between py-4 transition-colors hover:text-accent">
              <span className="text-muted">{label}</span><span className="font-medium">{text}</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-12 text-sm text-muted">© {new Date().getFullYear()} {profile.name}</p>
    </Section>
  );
}
