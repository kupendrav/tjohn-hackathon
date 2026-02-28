"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GSAPProvider from "@/components/animations/GSAPProvider";
import FadeInView from "@/components/animations/FadeInView";
import MagneticButton from "@/components/animations/MagneticButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { RealJob } from "@/lib/jobs";
import { fetchAllJobsClient } from "@/lib/jobs-client";

export default function JobDetailClient({ slug }: { slug: string }) {
  const [job, setJob] = useState<RealJob | null>(null);
  const [loading, setLoading] = useState(true);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchJob() {
      try {
        const allJobs = await fetchAllJobsClient();
        const found = allJobs.find((j: RealJob) => j.id === slug);
        setJob(found || null);
      } catch {
        setJob(null);
      } finally {
        setLoading(false);
      }
    }
    fetchJob();
  }, [slug]);

  useEffect(() => {
    if (job && headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }
  }, [job]);

  if (loading) {
    return (
      <GSAPProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 flex items-center justify-center">
            <div className="animate-pulse text-center">
              <div className="h-8 w-48 bg-muted rounded mb-4 mx-auto" />
              <div className="h-4 w-32 bg-muted rounded mx-auto" />
            </div>
          </main>
          <Footer />
        </div>
      </GSAPProvider>
    );
  }

  if (!job) {
    return (
      <GSAPProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Job Not Found</h1>
              <p className="text-muted-foreground mb-6">
                The job listing you&apos;re looking for doesn&apos;t exist or has expired.
              </p>
              <Link href="/jobs">
                <Button>Browse Jobs</Button>
              </Link>
            </div>
          </main>
          <Footer />
        </div>
      </GSAPProvider>
    );
  }

  return (
    <GSAPProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <FadeInView direction="left">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link
                href="/jobs"
                className="hover:text-foreground transition-colors"
              >
                Jobs
              </Link>
              <span>/</span>
              <span className="text-foreground font-medium truncate">
                {job.title}
              </span>
            </nav>
          </FadeInView>

          {/* Job Header */}
          <div ref={headerRef} style={{ opacity: 0 }}>
            <div className="border rounded-2xl p-6 sm:p-8 bg-card shadow-sm">
              <div className="flex flex-col sm:flex-row gap-4 sm:items-start">
                <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center shrink-0 text-2xl">
                  {job.logo ? (
                    <Image
                      src={job.logo}
                      width={56}
                      height={56}
                      alt={job.company}
                      className="object-contain p-2 rounded-xl"
                      unoptimized
                    />
                  ) : (
                    "💼"
                  )}
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl sm:text-3xl font-bold">
                    {job.title}
                  </h1>
                  <p className="text-lg text-muted-foreground mt-1">
                    {job.company}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge variant="secondary">{job.mode}</Badge>
                    <Badge variant="secondary">{job.type}</Badge>
                    <Badge variant="outline">{job.salary}</Badge>
                    <Badge variant="secondary" className="text-xs">{job.source}</Badge>
                  </div>
                </div>
                <MagneticButton>
                  <a href={job.applyUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="font-semibold shrink-0">
                      Apply Now &rarr;
                    </Button>
                  </a>
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* Job Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            <div className="lg:col-span-2 space-y-6">
              <FadeInView direction="up" delay={0.1}>
                <div className="border rounded-xl p-6 bg-card">
                  <h2 className="text-xl font-semibold mb-4">
                    Job Description
                  </h2>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {job.description}
                  </p>
                </div>
              </FadeInView>

              {job.tags.length > 0 && (
                <FadeInView direction="up" delay={0.2}>
                  <div className="border rounded-xl p-6 bg-card">
                    <h2 className="text-xl font-semibold mb-4">
                      Required Skills
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="px-3 py-1">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </FadeInView>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <FadeInView direction="right" delay={0.2}>
                <div className="border rounded-xl p-6 bg-card">
                  <h3 className="font-semibold mb-4">Job Overview</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location</span>
                      <span className="font-medium text-right max-w-[60%]">{job.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Job Type</span>
                      <span className="font-medium">{job.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Work Mode</span>
                      <span className="font-medium">{job.mode}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Salary</span>
                      <span className="font-medium">{job.salary}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Posted</span>
                      <span className="font-medium">{job.postedDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Source</span>
                      <span className="font-medium">{job.source}</span>
                    </div>
                  </div>
                </div>
              </FadeInView>

              <FadeInView direction="right" delay={0.3}>
                <div className="border rounded-xl p-6 bg-card">
                  <h3 className="font-semibold mb-3">Actions</h3>
                  <div className="flex flex-col gap-2">
                    <a href={job.applyUrl} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full">Apply Now &rarr;</Button>
                    </a>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                      }}
                    >
                      Copy Link
                    </Button>
                  </div>
                </div>
              </FadeInView>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </GSAPProvider>
  );
}
