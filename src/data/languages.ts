export interface LanguageData {
  src: string;
  title: string;
  jobCount: number;
}

export const programmingLanguages: LanguageData[] = [
  { src: "/languages/python.png", title: "Python", jobCount: 1240 },
  { src: "/languages/js.png", title: "JavaScript", jobCount: 2150 },
  { src: "/languages/typescript.png", title: "TypeScript", jobCount: 1890 },
  { src: "/languages/figma.png", title: "Figma", jobCount: 680 },
  { src: "/languages/java.png", title: "Java", jobCount: 1560 },
];
