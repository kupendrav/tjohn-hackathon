export interface LanguageData {
  src: string;
  title: string;
  jobCount: number;
  query: string;
}

export const programmingLanguages: LanguageData[] = [
  { src: "/languages/python.png", title: "Python", jobCount: 1240, query: "Python" },
  { src: "/languages/js.png", title: "JavaScript", jobCount: 2150, query: "JavaScript" },
  { src: "/languages/typescript.png", title: "TypeScript", jobCount: 1890, query: "TypeScript" },
  { src: "/languages/figma.png", title: "Figma", jobCount: 680, query: "Figma" },
  { src: "/languages/java.png", title: "Java", jobCount: 1560, query: "Java" },
  { src: "/languages/react.svg", title: "React", jobCount: 2340, query: "React" },
  { src: "/languages/nodejs.svg", title: "Node.js", jobCount: 1780, query: "Node.js" },
  { src: "/languages/aws.svg", title: "AWS", jobCount: 1950, query: "AWS" },
  { src: "/languages/docker.svg", title: "Docker", jobCount: 1120, query: "Docker" },
  { src: "/languages/go.svg", title: "Go", jobCount: 890, query: "Go" },
];
