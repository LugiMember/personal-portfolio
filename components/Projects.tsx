import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
