import { skills } from "@/data/skills";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-10 sm:grid-cols-2">
        {skills.map((category) => (
          <div key={category.name}>
            <h3 className="mb-4 text-sm font-medium text-foreground">
              {category.name}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground transition-all duration-200 hover:border-accent/30 hover:text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
