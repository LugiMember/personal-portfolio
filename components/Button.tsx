type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonLinkProps = {
  href: string;
  label: string;
  external?: boolean;
  variant?: ButtonVariant;
  className?: string;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border border-accent bg-accent text-accent-foreground hover:bg-accent/90 hover:border-accent/90",
  secondary:
    "border border-border bg-transparent text-foreground hover:border-accent/40 hover:bg-muted/50",
  ghost:
    "border border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50",
};

export function ButtonLink({
  href,
  label,
  external = false,
  variant = "secondary",
  className = "",
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${variantStyles[variant]} ${className}`}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {label}
    </a>
  );
}

type PlaceholderButtonProps = {
  label: string;
  variant?: ButtonVariant;
  className?: string;
};

export function PlaceholderButton({
  label,
  variant = "secondary",
  className = "",
}: PlaceholderButtonProps) {
  return (
    <span
      role="link"
      aria-disabled="true"
      title="Link coming soon"
      className={`inline-flex cursor-not-allowed items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium opacity-45 ${variantStyles[variant]} ${className}`}
    >
      {label}
    </span>
  );
}

type ActionButtonProps = {
  label: string;
  href: string | null;
  external?: boolean;
  variant?: ButtonVariant;
  className?: string;
};

export function ActionButton({
  label,
  href,
  external = false,
  variant = "secondary",
  className = "",
}: ActionButtonProps) {
  if (!href) {
    return (
      <PlaceholderButton label={label} variant={variant} className={className} />
    );
  }

  return (
    <ButtonLink
      href={href}
      label={label}
      external={external}
      variant={variant}
      className={className}
    />
  );
}
