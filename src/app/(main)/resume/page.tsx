"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GSAPProvider from "@/components/animations/GSAPProvider";
import FadeInView from "@/components/animations/FadeInView";
import AnimatedText from "@/components/animations/AnimatedText";
import StaggerGrid from "@/components/animations/StaggerGrid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { RealJob } from "@/lib/jobs";

export default function ResumePage() {
  const [file, setFile] = useState<File | null>(null);
  const [skills, setSkills] = useState<string[]>([]);
  const [jobs, setJobs] = useState<RealJob[]>([]);
  const [loading, setLoading] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState("");
  const dropRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleFile = (f: File) => {
    const allowed = [
      "application/pdf",
      "text/plain",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowed.includes(f.type) && !f.name.endsWith(".txt") && !f.name.endsWith(".pdf") && !f.name.endsWith(".docx")) {
      setError("Please upload a PDF, DOCX, or TXT file");
      return;
    }
    setFile(f);
    setFileName(f.name);
    setError("");
  };

  const analyzeResume = async () => {
    if (!file) return;
    setLoading(true);
    setError("");
    setAnalyzed(false);

    try {
      // Step 1: Extract skills from resume
      const formData = new FormData();
      formData.append("resume", file);

      const parseRes = await fetch("/api/resume", {
        method: "POST",
        body: formData,
      });
      const parseData = await parseRes.json();

      if (!parseRes.ok) {
        setError(parseData.error || "Failed to parse resume");
        setLoading(false);
        return;
      }

      const extractedSkills = parseData.skills || [];
      setSkills(extractedSkills);

      // Step 2: Fetch matching jobs based on skills
      if (extractedSkills.length > 0) {
        const jobsRes = await fetch(
          `/api/jobs?skills=${encodeURIComponent(extractedSkills.join(","))}`
        );
        const jobsData = await jobsRes.json();
        setJobs(jobsData.jobs || []);
      } else {
        setJobs([]);
      }

      setAnalyzed(true);
    } catch {
      setError("Failed to analyze resume. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (analyzed && resultsRef.current) {
      gsap.fromTo(
        resultsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
      resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [analyzed]);

  return (
    <GSAPProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-8">
          <FadeInView direction="left">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <span className="text-foreground font-medium">Resume Analyzer</span>
            </nav>
          </FadeInView>

          <AnimatedText
            text="Resume Skill Analyzer"
            tag="h1"
            className="text-3xl sm:text-4xl font-bold mb-3"
          />
          <FadeInView direction="up" delay={0.1}>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Upload your resume and we&apos;ll analyze your skills, then recommend
              matching job openings from top companies and platforms in real-time.
            </p>
          </FadeInView>

          {/* Upload Area */}
          <FadeInView direction="up" delay={0.2}>
            <div
              ref={dropRef}
              className="border-2 border-dashed rounded-2xl p-8 sm:p-12 text-center bg-card hover:border-primary/50 transition-colors cursor-pointer"
              onDragOver={(e) => {
                e.preventDefault();
                dropRef.current?.classList.add("border-primary");
              }}
              onDragLeave={() => {
                dropRef.current?.classList.remove("border-primary");
              }}
              onDrop={(e) => {
                e.preventDefault();
                dropRef.current?.classList.remove("border-primary");
                if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
              }}
              onClick={() => document.getElementById("resume-input")?.click()}
            >
              <div className="text-5xl mb-4">📄</div>
              <h3 className="text-lg font-semibold mb-2">
                {fileName || "Drop your resume here or click to browse"}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Supports PDF, DOCX, and TXT files
              </p>
              <Input
                id="resume-input"
                type="file"
                accept=".pdf,.txt,.docx"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files?.[0]) handleFile(e.target.files[0]);
                }}
              />
              {fileName && (
                <Badge variant="secondary" className="text-sm">
                  ✓ {fileName}
                </Badge>
              )}
            </div>
          </FadeInView>

          {error && (
            <div className="mt-4 bg-destructive/10 text-destructive text-sm p-3 rounded-lg text-center">
              {error}
            </div>
          )}

          <FadeInView direction="up" delay={0.3}>
            <div className="mt-6 flex justify-center">
              <Button
                size="lg"
                className="font-semibold px-10"
                onClick={analyzeResume}
                disabled={!file || loading}
              >
                {loading ? "Analyzing..." : "Analyze Resume & Find Jobs"}
              </Button>
            </div>
          </FadeInView>

          {/* Results */}
          {analyzed && (
            <div ref={resultsRef} className="mt-12 space-y-8" style={{ opacity: 0 }}>
              {/* Extracted Skills */}
              <div className="border rounded-xl p-6 bg-card">
                <h2 className="text-xl font-semibold mb-4">
                  🎯 Skills Found in Your Resume ({skills.length})
                </h2>
                {skills.length === 0 ? (
                  <p className="text-muted-foreground">
                    No specific technical skills were detected. Try uploading a
                    more detailed resume with your technical skills listed.
                  </p>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill: string) => (
                      <Badge key={skill} variant="default" className="text-sm px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              {/* Matching Jobs */}
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  💼 Recommended Jobs ({jobs.length})
                </h2>
                {jobs.length === 0 ? (
                  <div className="text-center py-12 border rounded-xl bg-card">
                    <p className="text-muted-foreground">
                      No matching jobs found for your current skill set. Try
                      browsing all jobs instead.
                    </p>
                    <Link href="/jobs">
                      <Button variant="outline" className="mt-4">
                        Browse All Jobs
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {jobs.map((job: RealJob) => (
                      <div key={job.id} className="group">
                        <div className="h-full border rounded-xl p-5 bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300 group-hover:-translate-y-1 flex flex-col">
                          <div className="flex items-start justify-between mb-2">
                            <div className="min-w-0 flex-1">
                              <h3 className="font-semibold text-base group-hover:text-primary transition-colors line-clamp-1">
                                {job.title}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {job.company}
                              </p>
                            </div>
                            <Badge
                              variant="secondary"
                              className="text-[10px] ml-2 shrink-0"
                            >
                              {job.source}
                            </Badge>
                          </div>
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            <Badge variant="secondary" className="text-xs">
                              {job.mode}
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              {job.type}
                            </Badge>
                            {job.salary !== "Not disclosed" &&
                              job.salary !== "Competitive" && (
                                <Badge variant="outline" className="text-xs">
                                  {job.salary}
                                </Badge>
                              )}
                          </div>
                          {job.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1 mb-3">
                              {job.tags.slice(0, 5).map((tag: string) => (
                                <span
                                  key={tag}
                                  className={`text-[10px] px-1.5 py-0.5 rounded ${
                                    skills.includes(tag)
                                      ? "bg-primary/20 text-primary font-medium"
                                      : "bg-muted"
                                  }`}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                          <p className="text-xs text-muted-foreground line-clamp-2 mb-4 flex-1">
                            {job.description}
                          </p>
                          <div className="flex items-center justify-between pt-3 border-t mb-3">
                            <span className="text-xs text-muted-foreground truncate mr-2">
                              {job.location}
                            </span>
                            <span className="text-xs text-muted-foreground shrink-0">
                              {job.postedDate}
                            </span>
                          </div>
                          <a
                            href={job.applyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button size="sm" className="w-full text-xs">
                              Apply Now &rarr;
                            </Button>
                          </a>
                        </div>
                      </div>
                    ))}
                  </StaggerGrid>
                )}
              </div>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </GSAPProvider>
  );
}
