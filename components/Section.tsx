import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  title,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-20 md:py-28 ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="mx-auto max-w-3xl px-6">
        <h2
          id={`${id}-heading`}
          className="mb-10 text-sm font-medium uppercase tracking-[0.2em] text-accent"
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
