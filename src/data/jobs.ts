export interface JobData {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  mode: string;
  type: string;
  description: string;
  tags: string[];
  postedDate: string;
  logo: string;
}

export const mockJobs: JobData[] = [
  {
    id: "senior-react-developer",
    title: "Senior React Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    salary: "$120,000 - $160,000",
    mode: "Remote",
    type: "Full Time",
    description:
      "We are looking for a Senior React Developer to join our growing engineering team. You will be responsible for building and maintaining high-quality web applications using React, TypeScript, and modern frontend technologies.",
    tags: ["React", "TypeScript", "Next.js", "GraphQL"],
    postedDate: "2 days ago",
    logo: "/languages/js.png",
  },
  {
    id: "python-ml-engineer",
    title: "Machine Learning Engineer",
    company: "AI Solutions Ltd.",
    location: "New York, NY",
    salary: "$140,000 - $180,000",
    mode: "Hybrid",
    type: "Full Time",
    description:
      "Join our ML team to design, develop, and deploy machine learning models at scale. Experience with deep learning frameworks, NLP, and computer vision is essential.",
    tags: ["Python", "TensorFlow", "PyTorch", "ML"],
    postedDate: "1 day ago",
    logo: "/languages/python.png",
  },
  {
    id: "fullstack-java-developer",
    title: "Full Stack Java Developer",
    company: "Enterprise Solutions",
    location: "Austin, TX",
    salary: "$100,000 - $130,000",
    mode: "On-site",
    type: "Full Time",
    description:
      "Looking for a Full Stack Java Developer with experience in Spring Boot, Microservices, and React/Angular for the front-end. Strong understanding of RESTful APIs and database design required.",
    tags: ["Java", "Spring Boot", "React", "PostgreSQL"],
    postedDate: "3 days ago",
    logo: "/languages/java.png",
  },
  {
    id: "ui-ux-designer",
    title: "Senior UI/UX Designer",
    company: "DesignHub Co.",
    location: "Los Angeles, CA",
    salary: "$90,000 - $120,000",
    mode: "Remote",
    type: "Full Time",
    description:
      "Design beautiful and intuitive user interfaces for web and mobile applications. Proficiency in Figma, prototyping, user research, and design systems is required.",
    tags: ["Figma", "UI/UX", "Prototyping", "Design Systems"],
    postedDate: "5 days ago",
    logo: "/languages/figma.png",
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    company: "CloudFirst Inc.",
    location: "Seattle, WA",
    salary: "$130,000 - $165,000",
    mode: "Hybrid",
    type: "Full Time",
    description:
      "Manage and improve our CI/CD pipelines, cloud infrastructure on AWS/GCP, and container orchestration with Kubernetes. Strong Linux and scripting skills needed.",
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    postedDate: "1 week ago",
    logo: "/languages/typescript.png",
  },
  {
    id: "typescript-backend-dev",
    title: "Backend Developer (Node.js)",
    company: "StartupXYZ",
    location: "Remote",
    salary: "$95,000 - $125,000",
    mode: "Remote",
    type: "Full Time",
    description:
      "Build scalable backend services using Node.js and TypeScript. Experience with microservices architecture, message queues, and database optimization is a plus.",
    tags: ["TypeScript", "Node.js", "MongoDB", "Redis"],
    postedDate: "4 days ago",
    logo: "/languages/typescript.png",
  },
  {
    id: "frontend-intern",
    title: "Frontend Developer Intern",
    company: "WebDev Academy",
    location: "Chicago, IL",
    salary: "$25/hr",
    mode: "Hybrid",
    type: "Internship",
    description:
      "Great opportunity for aspiring frontend developers! Work alongside senior engineers on real projects using React, HTML/CSS, and JavaScript.",
    tags: ["React", "JavaScript", "HTML", "CSS"],
    postedDate: "6 days ago",
    logo: "/languages/js.png",
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    company: "DataDriven Corp.",
    location: "Boston, MA",
    salary: "$115,000 - $145,000",
    mode: "On-site",
    type: "Full Time",
    description:
      "Analyze complex datasets to drive business decisions. Proficiency in Python, SQL, statistical modeling, and data visualization tools required.",
    tags: ["Python", "SQL", "Tableau", "Statistics"],
    postedDate: "2 days ago",
    logo: "/languages/python.png",
  },
  {
    id: "react-native-developer",
    title: "React Native Developer",
    company: "MobileFirst Inc.",
    location: "Denver, CO",
    salary: "$105,000 - $135,000",
    mode: "Remote",
    type: "Full Time",
    description:
      "Build cross-platform mobile applications using React Native. Experience with native modules, performance optimization, and app store deployment required.",
    tags: ["React Native", "TypeScript", "iOS", "Android"],
    postedDate: "3 days ago",
    logo: "/languages/js.png",
  },
];

export const getJobById = (id: string): JobData | undefined => {
  return mockJobs.find((job) => job.id === id);
};
