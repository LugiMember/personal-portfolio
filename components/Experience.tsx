import { experience } from "@/data/experience";
import ExperienceCard from "./ExperienceCard";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-6">
        {experience.map((entry) => (
          <ExperienceCard key={entry.id} entry={entry} />
        ))}
      </div>
    </Section>
  );
}
