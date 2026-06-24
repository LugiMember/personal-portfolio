export type EducationEntry = {
  institution: string;
  location: string;
  degree: string;
  expectedGraduation: string;
  gpa: string;
  distinctions: string[];
  coursework: string[];
};

export const education: EducationEntry = {
  institution: "University of Maryland, Honors College",
  location: "College Park, MD",
  degree:
    "Bachelor of Science, Double Degree in Computer Science & Business Information Systems",
  expectedGraduation: "Expected May 2028",
  gpa: "3.7",
  distinctions: [
    "Global Fellow",
    "Dean's List",
    "Honors Global Challenges and Solutions",
  ],
  coursework: [
    "Data Structures",
    "Algorithms",
    "Computer Systems",
    "Linear Algebra",
    "Discrete Structures",
    "Statistics & Probability",
  ],
};
