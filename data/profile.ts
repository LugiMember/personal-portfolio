export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string | null;
  external?: boolean;
};

export const profile = {
  name: "Ioannis Magoulas",
  title: "AI Researcher | SWE Intern ",
  intro:
    "I'm a University of Maryland Honors College student building full-stack software, AI-powered tools, and data systems that make complex workflows easier to understand and act on.",
  email: "yannimagoulas@gmail.com",
  linkedin: "https://linkedin.com/in/ioannis-magoulas",
  github: "https://github.com/LugiMember",
  resume: "/resume.pdf",
  about:
    "I'm an Honors College student at the University of Maryland pursuing a double degree in Computer Science and Business Information Systems (GPA 3.7, expected May 2028). I'm drawn to full-stack engineering, AI agents, data systems, RAG, developer tools, and applied research—and I enjoy building practical systems that replace manual workflows with clear, automated tools.",
  contactCta:
    "Have an idea, opportunity, or project in mind? I'd be happy to connect.",
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavLink[],
  get heroLinks(): SocialLink[] {
    return [
      {
        label: "Email",
        href: `mailto:${this.email}`,
        external: false,
      },
      {
        label: "LinkedIn",
        href: this.linkedin,
        external: true,
      },
      {
        label: "Resume",
        href: this.resume,
        external: false,
      },
      {
        label: "GitHub",
        href: this.github,
        external: true,
      },
    ];
  },
  get contactLinks(): SocialLink[] {
    return this.heroLinks;
  },
};
