"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/animations/AnimatedText";
import FadeInView from "@/components/animations/FadeInView";
import StaggerGrid from "@/components/animations/StaggerGrid";
import type { RealJob } from "@/lib/jobs";

export default function JobsSection() {
  const [jobs, setJobs] = useState<RealJob[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/jobs")
      .then((r) => r.json())
      .then((data) => {
        setJobs((data.jobs || []).slice(0, 6));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
        <div>
          <AnimatedText text="Latest Job Openings" tag="h2" className="text-2xl sm:text-3xl font-bold" />
          <FadeInView direction="up" delay={0.1}>
            <p className="text-muted-foreground mt-2">Real-time opportunities from top companies and job platforms.</p>
          </FadeInView>
        </div>
        <FadeInView direction="right" delay={0.2}>
          <Link href="/jobs"><Button variant="outline" size="sm">View All Jobs &rarr;</Button></Link>
        </FadeInView>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-48 border rounded-xl bg-muted/50 animate-pulse" />
          ))}
        </div>
      ) : (
        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {jobs.map((job) => (
            <div key={job.id} className="block group">
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
                </div>
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
    </section>
  );
}
