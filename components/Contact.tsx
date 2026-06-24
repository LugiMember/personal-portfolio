import { profile } from "@/data/profile";
import { ActionButton } from "./Button";
import Section from "./Section";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="rounded-lg border border-border p-8 transition-colors duration-200 hover:border-accent/20">
        <p className="max-w-xl text-base leading-relaxed text-foreground/90 md:text-lg">
          {profile.contactCta}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {profile.contactLinks.map((link, index) => (
            <ActionButton
              key={link.label}
              label={link.label}
              href={link.href}
              external={link.external}
              variant={index === 0 ? "primary" : "secondary"}
            />
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {profile.email}
          </a>
          <span className="mx-2 text-border">·</span>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            LinkedIn
          </a>
          <span className="mx-2 text-border">·</span>
          <span>{profile.phone}</span>
        </p>
      </div>
    </Section>
  );
}
