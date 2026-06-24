import { profile } from "@/data/profile";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="About">
      <p className="text-base leading-relaxed text-foreground/90 md:text-lg md:leading-8">
        {profile.about}
      </p>
    </Section>
  );
}
