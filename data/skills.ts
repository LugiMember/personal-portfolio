export type SkillCategory = {
  name: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    name: "Languages",
    items: [
      "Java",
      "C",
      "OCaml",
      "Rust",
      "Python",
      "Assembly",
      "R",
      "Bash",
      "TypeScript",
    ],
  },
  {
    name: "Frameworks & Libraries",
    items: [
      "Spring Boot",
      "Angular",
      "Spring AI",
      "Ollama",
      "Gemma",
      "GPT APIs",
    ],
  },
  {
    name: "Tools & Platforms",
    items: [
      "Docker",
      "Git",
      "Azure",
      "GitLab CI/CD",
      "LiteLLM",
      "Elasticsearch",
      "Microsoft Graph API",
      "SharePoint Webhooks",
    ],
  },
  {
    name: "Concepts",
    items: [
      "Retrieval-Augmented Generation",
      "Vector Stores",
      "CI/CD Automation",
      "Prompt Engineering",
      "AI Agents",
      "REST APIs",
      "Data Pipelines",
    ],
  },
];
