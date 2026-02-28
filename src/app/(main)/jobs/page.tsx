"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { mockJobs } from "@/data/jobs";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GSAPProvider from "@/components/animations/GSAPProvider";
import FadeInView from "@/components/animations/FadeInView";
import AnimatedText from "@/components/animations/AnimatedText";
import StaggerGrid from "@/components/animations/StaggerGrid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function JobsPage() {
  const [search, setSearch] = useState("");

  const filteredJobs = mockJobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <GSAPProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <FadeInView direction="left">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link
                href="/"
                className="hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <span>/</span>
              <span className="text-foreground font-medium">Jobs</span>
            </nav>
          </FadeInView>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <AnimatedText
              text="All Job Openings"
              tag="h1"
              className="text-3xl sm:text-4xl font-bold"
            />
            <FadeInView direction="right">
              <Input
                placeholder="Search jobs, skills, companies..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full sm:w-72 h-10"
              />
            </FadeInView>
          </div>

          {filteredJobs.length === 0 ? (
            <FadeInView direction="up">
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">
                  No jobs found matching &quot;{search}&quot;
                </p>
              </div>
            </FadeInView>
          ) : (
            <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredJobs.map((job) => (
                <Link
                  key={job.id}
                  href={`/job/${job.id}`}
                  className="block group"
                >
                  <div className="h-full border rounded-xl p-5 bg-card hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300 group-hover:-translate-y-1 flex flex-col">
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
                        <p className="text-sm text-muted-foreground">
                          {job.company}
                        </p>
                      </div>
                    </div>
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
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-4 flex-1">
                      {job.description}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t">
                      <span className="text-xs text-muted-foreground">
                        {job.location}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {job.postedDate}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </StaggerGrid>
          )}
        </main>
        <Footer />
      </div>
    </GSAPProvider>
  );
}