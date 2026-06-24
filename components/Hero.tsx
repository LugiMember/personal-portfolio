import { profile } from "@/data/profile";
import { ActionButton } from "./Button";

export default function Hero() {
  return (
    <section
      className="animate-fade-in mx-auto max-w-3xl px-6 pb-20 pt-16 md:pb-28 md:pt-24"
      aria-labelledby="hero-heading"
    >
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
        Portfolio
      </p>
      <h1
        id="hero-heading"
        className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl md:leading-[1.1]"
      >
        {profile.name}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
        {profile.title}
      </p>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/85 md:text-lg">
        {profile.intro}
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        {profile.heroLinks.map((link, index) => (
          <ActionButton
            key={link.label}
            label={link.label}
            href={link.href}
            external={link.external}
            variant={index === 0 ? "primary" : "secondary"}
          />
        ))}
      </div>
    </section>
  );
}
