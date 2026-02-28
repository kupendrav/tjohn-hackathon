"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { mockJobs } from "@/data/jobs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/animations/AnimatedText";
import FadeInView from "@/components/animations/FadeInView";
import StaggerGrid from "@/components/animations/StaggerGrid";
import MagneticButton from "@/components/animations/MagneticButton";

export default function JobsSection() {
  const displayedJobs = mockJobs.slice(0, 6);

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
        <div>
          <AnimatedText
            text="Latest Job Openings"
            tag="h2"
            className="text-2xl sm:text-3xl font-bold"
          />
          <FadeInView direction="up" delay={0.1}>
            <p className="text-muted-foreground mt-2">
              Explore fresh opportunities from leading companies worldwide.
            </p>
          </FadeInView>
        </div>
        <FadeInView direction="right" delay={0.2}>
          <Link href="/jobs">
            <Button variant="outline" size="sm">
              View All Jobs &rarr;
            </Button>
          </Link>
        </FadeInView>
      </div>

      <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {displayedJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </StaggerGrid>
    </section>
  );
}

function JobCard({ job }: { job: (typeof mockJobs)[0] }) {
  return (
    <Link href={`/job/${job.id}`} className="block group">
      <div className="h-full border rounded-xl p-5 bg-card hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300 group-hover:-translate-y-1 flex flex-col">
        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0 overflow-hidden">
            <Image
              src={job.logo}
              width={40}
              height={40}
              alt={job.company}
              className="object-contain p-1"
            />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-base group-hover:text-primary transition-colors truncate">
              {job.title}
            </h3>
            <p className="text-sm text-muted-foreground">{job.company}</p>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          <Badge variant="secondary" className="text-xs">
            {job.mode}
          </Badge>
          <Badge variant="secondary" className="text-xs">
            {job.type}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {job.salary}
          </Badge>
        </div>

        {/* Description */}
        <p className="text-xs text-muted-foreground line-clamp-2 mb-4 flex-1">
          {job.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t">
          <span className="text-xs text-muted-foreground">{job.location}</span>
          <span className="text-xs text-muted-foreground">{job.postedDate}</span>
        </div>
      </div>
    </Link>
  );
}
