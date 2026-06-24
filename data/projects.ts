export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectEntry = {
  id: string;
  title: string;
  date: string;
  tech: string[];
  description: string[];
  links?: ProjectLink[];
};

export const projects: ProjectEntry[] = [
  {
    id: "smallc-compiler",
    title: "SmallC Compiler",
    date: "March 2026 – April 2026",
    tech: ["OCaml"],
    description: [
      "Built a complete lexer, recursive descent parser, and evaluator for a C-like language from scratch in OCaml.",
      "Tokenized raw source using regex, handled operator precedence, keywords, and edge cases.",
      "Parsed a CFG into an AST supporting expressions, control flow, function definitions, and static type checking.",
    ],
  },
  {
    id: "memory-allocator",
    title: "Memory Allocator",
    date: "September 2025 – October 2025",
    tech: ["C", "Linux", "Valgrind", "GDB"],
    description: [
      "Implemented a dynamic memory allocator in C from scratch.",
      "Manually managed heap space with explicit block sizing, coalescing, and placement strategies including first-fit and best-fit.",
      "Used Valgrind and GDB to debug memory behavior and improve reliability.",
    ],
  },
];
