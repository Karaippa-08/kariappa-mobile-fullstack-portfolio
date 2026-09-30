import Section from "./Section";
import { credentials } from "@/data/portfolio";

function Block({ title, children }) {
  return (
    <div>
      <h3 className="mb-4 font-medium">{title}</h3>
      <ul className="space-y-4">{children}</ul>
    </div>
  );
}
const Item = ({ title, detail, note }) => (
  <li>
    <p className="text-sm font-medium">{title}</p>
    <p className="text-sm text-muted">{detail}{note ? ` · ${note}` : ""}</p>
  </li>
);

export default function Credentials() {
  return (
    <Section id="credentials" title="Education, certifications and awards">
      <div className="grid gap-10 md:grid-cols-3">
        <Block title="Education">
          {credentials.education.map((e) => <Item key={e.title} title={e.title} detail={`${e.detail}, ${e.period}`} note={e.note} />)}
        </Block>
        <Block title="Certifications">
          {credentials.certifications.map((c) => <Item key={c.title} {...c} />)}
        </Block>
        <Block title="Achievements">
          {credentials.achievements.map((a) => <Item key={a.title} {...a} />)}
        </Block>
      </div>
    </Section>
  );
}
