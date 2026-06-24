import { education } from "@/data/education";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <article className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {education.institution}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {education.location}
          </p>
        </div>

        <div className="space-y-1">
          <p className="text-base text-foreground/90">{education.degree}</p>
          <p className="text-sm text-muted-foreground">
            {education.expectedGraduation}
          </p>
          <p className="text-sm text-muted-foreground">
            GPA: {education.gpa}
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-medium text-foreground">
            Distinctions
          </h4>
          <ul className="flex flex-wrap gap-2">
            {education.distinctions.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors duration-200 hover:border-accent/30 hover:text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-medium text-foreground">
            Relevant Coursework
          </h4>
          <ul className="flex flex-wrap gap-2">
            {education.coursework.map((course) => (
              <li
                key={course}
                className="rounded-md bg-muted/60 px-2.5 py-1 font-mono text-xs text-muted-foreground"
              >
                {course}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Section>
  );
}
