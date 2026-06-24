export type ExperienceEntry = {
  id: string;
  role: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "humana-cto-data-science-intern",
    role: "CTO Data Science Intern",
    company: "Humana",
    location: "Louisville, KY",
    dates: "June 2026 – Present",
    bullets: [
      "Engineered a data access layer using REST APIs to aggregate Azure DevOps project metrics across epics, features, and user stories.",
      "Built an end-to-end data pipeline that routes aggregated ADO data into Azure SQL Database and powers Power BI dashboards embedded back into ADO.",
      "Developed a custom Claude AI Skill that generates personalized Power BI dashboards from natural language prompts.",
      "Presented the platform to Product Owners and Managers, replacing manual spreadsheet tracking with automated visual insights.",
    ],
  },
  {
    id: "realmone-software-developer-intern",
    role: "Software Developer Intern",
    company: "RealmOne",
    location: "Columbia, MD",
    dates: "June 2025 – Present",
    bullets: [
      "Built and shipped full-stack features with Java, Spring Boot, and Angular on a production enterprise platform serving clients including Raytheon and Siemens.",
      "Engineered GitLab CI/CD automation with tag-based version parsing, dotenv artifact propagation, and automated RPM version management.",
      "Developed an AI-powered chatbot using RAG and Elasticsearch to semantically search 700+ resumes.",
      "Integrated a SharePoint webhook pipeline and deployed the system with Docker and LiteLLM across multiple open-source models.",
      "Improved API transparency with Swagger/OpenAPI documentation and SPARQL query endpoints.",
    ],
  },
  {
    id: "umd-research-assistant",
    role: "Research Assistant",
    company: "University of Maryland",
    location: "College Park, MD",
    dates: "December 2024 – Present",
    bullets: [
      "Contributing to “Task Atlas,” a framework for hierarchical task representation in AI agent planning.",
      "Exploring micro-segmentation and segment embeddings for task abstraction.",
      "Built a custom LLM agent from scratch without LangChain or orchestration frameworks.",
      "Designed benchmarking pipelines to compare hierarchical clustering approaches.",
      "Ran molecular dynamics simulations with NAMD, CHARMM, and VMD.",
    ],
  },
];
