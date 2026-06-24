import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 px-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {profile.name}
        </p>
        <p className="font-mono text-xs">Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}
