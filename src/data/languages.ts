import { BASE_PATH } from "@/lib/utils";

export interface LanguageData {
  src: string;
  title: string;
  jobCount: number;
  query: string;
}

export const programmingLanguages: LanguageData[] = [
  { src: `${BASE_PATH}/languages/python.png`, title: "Python", jobCount: 1240, query: "Python" },
  { src: `${BASE_PATH}/languages/js.png`, title: "JavaScript", jobCount: 2150, query: "JavaScript" },
  { src: `${BASE_PATH}/languages/typescript.png`, title: "TypeScript", jobCount: 1890, query: "TypeScript" },
  { src: `${BASE_PATH}/languages/figma.png`, title: "Figma", jobCount: 680, query: "Figma" },
  { src: `${BASE_PATH}/languages/java.png`, title: "Java", jobCount: 1560, query: "Java" },
  { src: `${BASE_PATH}/languages/react.svg`, title: "React", jobCount: 2340, query: "React" },
  { src: `${BASE_PATH}/languages/nodejs.svg`, title: "Node.js", jobCount: 1780, query: "Node.js" },
  { src: `${BASE_PATH}/languages/aws.svg`, title: "AWS", jobCount: 1950, query: "AWS" },
  { src: `${BASE_PATH}/languages/docker.svg`, title: "Docker", jobCount: 1120, query: "Docker" },
  { src: `${BASE_PATH}/languages/go.svg`, title: "Go", jobCount: 890, query: "Go" },
];
