import type { ProjectEntry } from "@/data/projects";

type ProjectCardProps = {
  project: ProjectEntry;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group rounded-lg border border-border p-6 transition-all duration-200 hover:border-accent/30 hover:shadow-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <h3 className="text-base font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="shrink-0 font-mono text-xs text-muted-foreground">
          {project.date}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span
            key={item}
            className="rounded-md bg-muted/60 px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors duration-200 group-hover:text-foreground/80"
          >
            {item}
          </span>
        ))}
      </div>

      <ul className="mt-5 space-y-2.5">
        {project.description.map((line) => (
          <li
            key={line}
            className="flex gap-3 text-sm leading-relaxed text-foreground/85"
          >
            <span
              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
              aria-hidden="true"
            />
            <span>{line}</span>
          </li>
        ))}
      </ul>

      {project.links && project.links.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-accent transition-opacity duration-200 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {link.label} →
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
