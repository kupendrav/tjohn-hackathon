// Client-side job fetching utility for static export (GitHub Pages)
// Calls external APIs directly instead of going through /api/jobs

import type { RealJob } from "./jobs";

// Curated listings from major companies (same as server-side)
function getCuratedListings(): RealJob[] {
  return [
    {
      id: "curated-google-swe",
      title: "Software Engineer III",
      company: "Google",
      location: "Mountain View, CA",
      salary: "$150,000 - $230,000",
      mode: "Hybrid",
      type: "Full Time",
      description:
        "Design, develop, test, deploy, maintain, and improve software across Google's vast product portfolio. Work on systems of high complexity and scale. Strong CS fundamentals and proficiency in one or more languages (Python, Java, Go, C++) required.",
      tags: ["Python", "Java", "Go", "C++", "Distributed Systems"],
      postedDate: "Recently",
      applyUrl: "https://careers.google.com",
      source: "Google Careers",
      logo: "/logos/logo-base-32x32.png",
    },
    {
      id: "curated-microsoft-sde",
      title: "Software Development Engineer",
      company: "Microsoft",
      location: "Redmond, WA",
      salary: "$130,000 - $200,000",
      mode: "Hybrid",
      type: "Full Time",
      description:
        "Build and ship software that reaches billions of users. Work on Azure, Microsoft 365, or Windows. Strong problem-solving skills and experience with cloud-native development, CI/CD pipelines, and agile methodologies.",
      tags: ["C#", ".NET", "Azure", "TypeScript", "React"],
      postedDate: "Recently",
      applyUrl: "https://careers.microsoft.com",
      source: "Microsoft Careers",
      logo: "/logos/logo-base-32x32.png",
    },
    {
      id: "curated-amazon-sde2",
      title: "Software Development Engineer II",
      company: "Amazon",
      location: "Seattle, WA",
      salary: "$140,000 - $210,000",
      mode: "On-site",
      type: "Full Time",
      description:
        "Own and deliver end-to-end software solutions that impact millions of customers. Work with distributed systems at massive scale. Proficiency in Java, Python, or C++ with strong system design skills required.",
      tags: ["Java", "AWS", "Distributed Systems", "Python"],
      postedDate: "Recently",
      applyUrl: "https://www.amazon.jobs",
      source: "Amazon Jobs",
      logo: "/logos/logo-base-32x32.png",
    },
    {
      id: "curated-meta-frontend",
      title: "Frontend Engineer",
      company: "Meta",
      location: "Menlo Park, CA",
      salary: "$145,000 - $220,000",
      mode: "Remote",
      type: "Full Time",
      description:
        "Build large-scale user-facing products that serve billions of users. Deep expertise in React, JavaScript/TypeScript, and modern frontend tooling. Collaborate with product, design, and backend teams.",
      tags: ["React", "JavaScript", "TypeScript", "GraphQL"],
      postedDate: "Recently",
      applyUrl: "https://www.metacareers.com",
      source: "Meta Careers",
      logo: "/logos/logo-base-32x32.png",
    },
    {
      id: "curated-apple-ios",
      title: "iOS Software Engineer",
      company: "Apple",
      location: "Cupertino, CA",
      salary: "$155,000 - $235,000",
      mode: "On-site",
      type: "Full Time",
      description:
        "Create exceptional iOS experiences used by millions. Deep knowledge of Swift, UIKit/SwiftUI, and Apple design principles. Work on features across iOS, iPadOS, and watchOS platforms.",
      tags: ["Swift", "iOS", "SwiftUI", "UIKit", "Objective-C"],
      postedDate: "Recently",
      applyUrl: "https://jobs.apple.com",
      source: "Apple Jobs",
      logo: "/logos/logo-base-32x32.png",
    },
    {
      id: "curated-netflix-backend",
      title: "Senior Backend Engineer",
      company: "Netflix",
      location: "Los Gatos, CA",
      salary: "$170,000 - $300,000",
      mode: "Hybrid",
      type: "Full Time",
      description:
        "Build and scale microservices powering the Netflix streaming platform. Work with Java, Spring Boot, and cloud-native technologies on one of the most advanced distributed architectures in the industry.",
      tags: ["Java", "Spring Boot", "Microservices", "AWS", "Kafka"],
      postedDate: "Recently",
      applyUrl: "https://jobs.netflix.com",
      source: "Netflix Jobs",
      logo: "/logos/logo-base-32x32.png",
    },
    {
      id: "curated-stripe-fullstack",
      title: "Full Stack Engineer",
      company: "Stripe",
      location: "San Francisco, CA",
      salary: "$160,000 - $250,000",
      mode: "Remote",
      type: "Full Time",
      description:
        "Build the economic infrastructure of the internet. Work across the stack with Ruby, Go, TypeScript, and React to create fast, reliable payment systems used by millions of businesses worldwide.",
      tags: ["Ruby", "Go", "TypeScript", "React", "PostgreSQL"],
      postedDate: "Recently",
      applyUrl: "https://stripe.com/jobs",
      source: "Stripe Jobs",
      logo: "/logos/logo-base-32x32.png",
    },
    {
      id: "curated-tesla-ml",
      title: "Machine Learning Engineer - Autopilot",
      company: "Tesla",
      location: "Palo Alto, CA",
      salary: "$145,000 - $225,000",
      mode: "On-site",
      type: "Full Time",
      description:
        "Develop and deploy deep learning models for Tesla Autopilot and Full Self-Driving. Work on computer vision, neural networks, and real-time inference at scale. Experience with PyTorch and CUDA required.",
      tags: ["Python", "PyTorch", "Computer Vision", "CUDA", "Deep Learning"],
      postedDate: "Recently",
      applyUrl: "https://www.tesla.com/careers",
      source: "Tesla Careers",
      logo: "/logos/logo-base-32x32.png",
    },
    {
      id: "curated-tcs-java",
      title: "Java Developer",
      company: "Tata Consultancy Services",
      location: "Hyderabad, India",
      salary: "\u20B98,00,000 - \u20B915,00,000",
      mode: "Hybrid",
      type: "Full Time",
      description:
        "Develop enterprise Java applications for global clients. Experience with Spring Boot, Oracle DB, REST APIs, and agile delivery methodologies. Good communication skills required for client interactions.",
      tags: ["Java", "Spring Boot", "Oracle", "REST API", "Microservices"],
      postedDate: "Recently",
      applyUrl: "https://www.tcs.com/careers",
      source: "TCS Careers",
      logo: "/logos/logo-base-32x32.png",
    },
    {
      id: "curated-infosys-fullstack",
      title: "Full Stack Developer",
      company: "Infosys",
      location: "Bangalore, India",
      salary: "\u20B97,00,000 - \u20B914,00,000",
      mode: "Hybrid",
      type: "Full Time",
      description:
        "Build end-to-end web applications using React, Node.js, and cloud technologies. Work with cross-functional teams on digital transformation projects for enterprise clients.",
      tags: ["React", "Node.js", "AWS", "MongoDB", "TypeScript"],
      postedDate: "Recently",
      applyUrl: "https://www.infosys.com/careers",
      source: "Infosys Careers",
      logo: "/logos/logo-base-32x32.png",
    },
  ];
}

// Helper: strip HTML tags
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 500);
}

// Helper: format date string
function formatDate(dateStr?: string): string {
  if (!dateStr) return "Recently";
  try {
    const d = new Date(dateStr);
    const now = new Date();
    const diffMs = now.getTime() - d.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  } catch {
    return "Recently";
  }
}

function formatJobType(type: string): string {
  const map: Record<string, string> = {
    full_time: "Full Time",
    part_time: "Part Time",
    contract: "Contract",
    freelance: "Freelance",
    internship: "Internship",
  };
  return map[type] || type;
}

// Fetch from Remotive API (supports CORS)
async function fetchRemotiveJobs(query?: string): Promise<RealJob[]> {
  try {
    const url = query
      ? `https://remotive.com/api/remote-jobs?search=${encodeURIComponent(query)}&limit=20`
      : "https://remotive.com/api/remote-jobs?limit=20";
    const res = await fetch(url);
    if (!res.ok) return [];
    const data = await res.json();
    return (data.jobs || []).map((job: any) => ({
      id: `remotive-${job.id}`,
      title: job.title || "Untitled",
      company: job.company_name || "Unknown",
      location: job.candidate_required_location || "Remote",
      salary: job.salary || "Not disclosed",
      mode: "Remote",
      type: job.job_type ? formatJobType(job.job_type) : "Full Time",
      description: stripHtml(job.description || ""),
      tags: (job.tags || []).slice(0, 6),
      postedDate: formatDate(job.publication_date),
      applyUrl: job.url || "#",
      source: "Remotive",
      logo: job.company_logo || "/logos/logo-base-32x32.png",
    }));
  } catch (err) {
    console.error("Remotive fetch error:", err);
    return [];
  }
}

// Fetch from Arbeitnow API
async function fetchArbeitnowJobs(query?: string): Promise<RealJob[]> {
  try {
    const url = query
      ? `https://www.arbeitnow.com/api/job-board-api?search=${encodeURIComponent(query)}`
      : "https://www.arbeitnow.com/api/job-board-api";
    const res = await fetch(url);
    if (!res.ok) return [];
    const data = await res.json();
    return (data.data || []).slice(0, 15).map((job: any) => ({
      id: `arbeitnow-${job.slug || Math.random().toString(36).slice(2)}`,
      title: job.title || "Untitled",
      company: job.company_name || "Unknown",
      location: job.location || "Not specified",
      salary: "Competitive",
      mode: job.remote ? "Remote" : "On-site",
      type: "Full Time",
      description: stripHtml(job.description || ""),
      tags: (job.tags || []).slice(0, 6),
      postedDate: formatDate(job.created_at),
      applyUrl: job.url || "#",
      source: "Arbeitnow",
      logo: "/logos/logo-base-32x32.png",
    }));
  } catch (err) {
    console.error("Arbeitnow fetch error:", err);
    return [];
  }
}

// Main client-side aggregation function
export async function fetchAllJobsClient(query?: string): Promise<RealJob[]> {
  const [remotiveJobs, arbeitnowJobs] = await Promise.all([
    fetchRemotiveJobs(query),
    fetchArbeitnowJobs(query),
  ]);

  const curated = getCuratedListings();
  const allJobs = [...curated, ...remotiveJobs, ...arbeitnowJobs];

  if (query) {
    const q = query.toLowerCase();
    return allJobs.filter(
      (job) =>
        job.title.toLowerCase().includes(q) ||
        job.company.toLowerCase().includes(q) ||
        job.tags.some((t) => t.toLowerCase().includes(q)) ||
        job.location.toLowerCase().includes(q) ||
        job.description.toLowerCase().includes(q)
    );
  }

  return allJobs;
}

// Client-side filter function
export function filterJobsClient(
  jobs: RealJob[],
  filters: {
    query?: string;
    location?: string;
    mode?: string;
    skills?: string[];
  }
): RealJob[] {
  return jobs.filter((job) => {
    if (filters.query) {
      const q = filters.query.toLowerCase();
      const matchesQuery =
        job.title.toLowerCase().includes(q) ||
        job.company.toLowerCase().includes(q) ||
        job.tags.some((t) => t.toLowerCase().includes(q)) ||
        job.description.toLowerCase().includes(q);
      if (!matchesQuery) return false;
    }
    if (filters.location) {
      if (!job.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
    }
    if (filters.mode && filters.mode !== "all") {
      if (!job.mode.toLowerCase().includes(filters.mode.toLowerCase())) return false;
    }
    if (filters.skills && filters.skills.length > 0) {
      const hasSkill = filters.skills.some((skill) =>
        job.tags.some(
          (tag) =>
            tag.toLowerCase().includes(skill.toLowerCase()) ||
            job.title.toLowerCase().includes(skill.toLowerCase())
        )
      );
      if (!hasSkill) return false;
    }
    return true;
  });
}
