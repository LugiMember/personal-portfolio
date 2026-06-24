import type { ExperienceEntry } from "@/data/experience";

type ExperienceCardProps = {
  entry: ExperienceEntry;
};

export default function ExperienceCard({ entry }: ExperienceCardProps) {
  return (
    <article className="group rounded-lg border border-border p-6 transition-all duration-200 hover:border-accent/30 hover:shadow-sm">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-base font-semibold text-foreground">
            {entry.role}
          </h3>
          <p className="mt-1 text-sm text-foreground/80">
            {entry.company}
            <span className="text-muted-foreground"> · {entry.location}</span>
          </p>
        </div>
        <p className="mt-2 shrink-0 font-mono text-xs text-muted-foreground sm:mt-1">
          {entry.dates}
        </p>
      </div>
      <ul className="mt-5 space-y-2.5">
        {entry.bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex gap-3 text-sm leading-relaxed text-foreground/85"
          >
            <span
              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
              aria-hidden="true"
            />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
