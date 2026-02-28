import { NextRequest, NextResponse } from "next/server";

// Common skill keywords mapped to categories
const SKILL_PATTERNS: Record<string, string[]> = {
  "JavaScript": ["javascript", "js", "ecmascript", "es6", "es2015"],
  "TypeScript": ["typescript", "ts"],
  "React": ["react", "reactjs", "react.js", "react native"],
  "Next.js": ["next.js", "nextjs", "next"],
  "Node.js": ["node.js", "nodejs", "node", "express", "expressjs"],
  "Python": ["python", "django", "flask", "fastapi"],
  "Java": ["java", "spring", "spring boot", "springboot", "hibernate"],
  "C++": ["c++", "cpp"],
  "C#": ["c#", "csharp", ".net", "dotnet", "asp.net"],
  "Go": ["go", "golang"],
  "Rust": ["rust"],
  "Swift": ["swift", "ios", "swiftui", "uikit"],
  "Kotlin": ["kotlin", "android"],
  "Ruby": ["ruby", "rails", "ruby on rails"],
  "PHP": ["php", "laravel", "symfony"],
  "SQL": ["sql", "mysql", "postgresql", "postgres", "oracle", "sqlite"],
  "MongoDB": ["mongodb", "mongo", "mongoose"],
  "AWS": ["aws", "amazon web services", "ec2", "s3", "lambda"],
  "Azure": ["azure", "microsoft azure"],
  "GCP": ["gcp", "google cloud"],
  "Docker": ["docker", "containerization", "dockerfile"],
  "Kubernetes": ["kubernetes", "k8s"],
  "Git": ["git", "github", "gitlab", "bitbucket"],
  "CI/CD": ["ci/cd", "cicd", "jenkins", "github actions", "circleci"],
  "Machine Learning": ["machine learning", "ml", "deep learning", "neural network", "tensorflow", "pytorch", "keras", "nlp", "computer vision"],
  "Data Science": ["data science", "data analysis", "data analytics", "pandas", "numpy", "scikit-learn", "tableau", "power bi"],
  "DevOps": ["devops", "infrastructure", "terraform", "ansible"],
  "UI/UX": ["ui/ux", "ux", "ui", "figma", "sketch", "adobe xd", "user experience", "user interface"],
  "HTML/CSS": ["html", "css", "sass", "scss", "tailwind", "bootstrap"],
  "GraphQL": ["graphql"],
  "REST API": ["rest", "restful", "api"],
  "Agile": ["agile", "scrum", "kanban", "jira"],
};

function extractSkills(text: string): string[] {
  const lowerText = text.toLowerCase();
  const found: string[] = [];

  for (const [skill, patterns] of Object.entries(SKILL_PATTERNS)) {
    for (const pattern of patterns) {
      // Use word boundary matching
      const regex = new RegExp(`\\b${pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, "i");
      if (regex.test(lowerText)) {
        if (!found.includes(skill)) {
          found.push(skill);
        }
        break;
      }
    }
  }

  return found;
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("resume") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "No resume file provided" },
        { status: 400 }
      );
    }

    let text = "";

    if (file.type === "application/pdf") {
      // Use PDFParse class from pdf-parse
      const { PDFParse } = require("pdf-parse");
      const buffer = Buffer.from(await file.arrayBuffer());
      const parser = new PDFParse({ data: new Uint8Array(buffer) });
      const result = await parser.getText();
      text = result.text;
    } else if (
      file.type === "text/plain" ||
      file.name.endsWith(".txt")
    ) {
      text = await file.text();
    } else if (
      file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      file.name.endsWith(".docx")
    ) {
      // For .docx, extract raw text from the file
      const buffer = await file.arrayBuffer();
      const uint8 = new Uint8Array(buffer);
      // Simple XML text extraction from docx
      const decoder = new TextDecoder("utf-8");
      const rawText = decoder.decode(uint8);
      // Extract text between XML tags
      text = rawText.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
    } else {
      // Try to read as text
      text = await file.text();
    }

    if (!text || text.trim().length < 20) {
      return NextResponse.json(
        { error: "Could not extract text from resume. Please upload a PDF or TXT file." },
        { status: 400 }
      );
    }

    // Extract skills
    const skills = extractSkills(text);

    return NextResponse.json({
      skills,
      resumeLength: text.length,
      fileName: file.name,
    });
  } catch (error) {
    console.error("Resume parse error:", error);
    return NextResponse.json(
      { error: "Failed to parse resume" },
      { status: 500 }
    );
  }
}
