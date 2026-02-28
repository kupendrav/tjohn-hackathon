"use client";

import React, { Suspense, useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
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

const MODES = ["All", "Remote", "Hybrid", "On-site"];
const SKILLS = ["React", "Python", "Java", "TypeScript", "Node.js", "AWS", "Machine Learning", "DevOps", "UI/UX", "Go", "Swift", "C#"];

export default function JobsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading jobs...</div>
      </div>
    }>
      <JobsContent />
    </Suspense>
  );
}

function JobsContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("query") || "";
  const initialLocation = searchParams.get("location") || "";
  const initialMode = searchParams.get("mode") || "All";

  const [jobs, setJobs] = useState<RealJob[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState(initialQuery);
  const [location, setLocation] = useState(initialLocation);
  const [mode, setMode] = useState(initialMode);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [total, setTotal] = useState(0);

  const fetchJobs = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (query) params.set("query", query);
      if (location) params.set("location", location);
      if (mode !== "All") params.set("mode", mode);
      if (selectedSkills.length > 0) params.set("skills", selectedSkills.join(","));

      const res = await fetch("/api/jobs?" + params.toString());
      const data = await res.json();
      setJobs(data.jobs || []);
      setTotal(data.total || 0);
    } catch (err) {
      console.error("Failed to fetch jobs:", err);
    } finally {
      setLoading(false);
    }
  }, [query, location, mode, selectedSkills]);

  useEffect(() => {
    const timer = setTimeout(fetchJobs, 400);
    return () => clearTimeout(timer);
  }, [fetchJobs]);

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  return (
    <GSAPProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
          <FadeInView direction="left">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <span className="text-foreground font-medium">Jobs</span>
            </nav>
          </FadeInView>

          <AnimatedText text="Job Openings" tag="h1" className="text-3xl sm:text-4xl font-bold mb-6" />

          {/* Search & Filters */}
          <FadeInView direction="up">
            <div className="border rounded-xl p-4 sm:p-6 bg-card mb-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <Input placeholder="Search by title, skill, company..." value={query} onChange={(e) => setQuery(e.target.value)} className="h-11" />
                <Input placeholder="Filter by location..." value={location} onChange={(e) => setLocation(e.target.value)} className="h-11" />
                <div className="flex gap-2 flex-wrap">
                  {MODES.map((m) => (
                    <Button key={m} variant={mode === m ? "default" : "outline"} size="sm" onClick={() => setMode(m)} className="text-xs">
                      {m}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs text-muted-foreground mb-2">Filter by skills:</p>
                <div className="flex flex-wrap gap-1.5">
                  {SKILLS.map((skill) => (
                    <Badge
                      key={skill}
                      variant={selectedSkills.includes(skill) ? "default" : "outline"}
                      className="cursor-pointer hover:scale-105 transition-transform text-xs"
                      onClick={() => toggleSkill(skill)}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </FadeInView>

          {/* Results count */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-muted-foreground">
              {loading ? "Loading jobs..." : `${total} jobs found`}
              {(query || location || mode !== "All" || selectedSkills.length > 0) && !loading && " (filtered)"}
            </p>
            {(query || location || mode !== "All" || selectedSkills.length > 0) && (
              <Button variant="ghost" size="sm" className="text-xs" onClick={() => { setQuery(""); setLocation(""); setMode("All"); setSelectedSkills([]); }}>
                Clear Filters
              </Button>
            )}
          </div>

          {/* Job Listings */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-48 border rounded-xl bg-muted/50 animate-pulse" />
              ))}
            </div>
          ) : jobs.length === 0 ? (
            <FadeInView direction="up">
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg mb-2">No jobs found</p>
                <p className="text-sm text-muted-foreground">Try adjusting your search or filters</p>
              </div>
            </FadeInView>
          ) : (
            <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {jobs.map((job) => (
                <div key={job.id} className="group">
                  <div className="h-full border rounded-xl p-5 bg-card hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300 group-hover:-translate-y-1 flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-base group-hover:text-primary transition-colors line-clamp-1">{job.title}</h3>
                        <p className="text-sm text-muted-foreground">{job.company}</p>
                      </div>
                      <Badge variant="secondary" className="text-[10px] ml-2 shrink-0">{job.source}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      <Badge variant="secondary" className="text-xs">{job.mode}</Badge>
                      <Badge variant="secondary" className="text-xs">{job.type}</Badge>
                      {job.salary !== "Not disclosed" && job.salary !== "Competitive" && (
                        <Badge variant="outline" className="text-xs">{job.salary}</Badge>
                      )}
                    </div>
                    {job.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {job.tags.slice(0, 4).map((tag) => (
                          <span key={tag} className="text-[10px] bg-muted px-1.5 py-0.5 rounded">{tag}</span>
                        ))}
                      </div>
                    )}
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-4 flex-1">{job.description}</p>
                    <div className="flex items-center justify-between pt-3 border-t">
                      <span className="text-xs text-muted-foreground truncate mr-2">{job.location}</span>
                      <span className="text-xs text-muted-foreground shrink-0">{job.postedDate}</span>
                    </div>
                    <a href={job.applyUrl} target="_blank" rel="noopener noreferrer" className="mt-3">
                      <Button size="sm" className="w-full text-xs">Apply &rarr;</Button>
                    </a>
                  </div>
                </div>
              ))}
            </StaggerGrid>
          )}
        </main>
        <Footer />
      </div>
    </GSAPProvider>
  );
}
