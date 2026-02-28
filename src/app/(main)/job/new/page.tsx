"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GSAPProvider from "@/components/animations/GSAPProvider";
import FadeInView from "@/components/animations/FadeInView";
import AnimatedText from "@/components/animations/AnimatedText";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function NewJobPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 30, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
      );
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <GSAPProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 flex items-center justify-center px-4">
            <FadeInView direction="up">
              <div className="text-center">
                <div className="text-5xl mb-4">&#10003;</div>
                <h1 className="text-3xl font-bold mb-3">Job Posted!</h1>
                <p className="text-muted-foreground mb-6">
                  Your job listing has been successfully created.
                </p>
                <Link href="/jobs">
                  <Button>View All Jobs</Button>
                </Link>
              </div>
            </FadeInView>
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
        <main className="flex-1 max-w-xl mx-auto w-full px-4 sm:px-6 py-8">
          <FadeInView direction="left">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-foreground font-medium">Post a Job</span>
            </nav>
          </FadeInView>

          <AnimatedText
            text="Create a New Job"
            tag="h1"
            className="text-3xl font-bold mb-8"
          />

          <form
            ref={formRef}
            className="space-y-5 border rounded-2xl p-6 sm:p-8 bg-card shadow-sm"
            style={{ opacity: 0 }}
            onSubmit={handleSubmit}
          >
            <div className="space-y-2">
              <Label htmlFor="title">Job Title</Label>
              <Input id="title" placeholder="e.g. Senior React Developer" name="title" required />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="e.g. San Francisco, CA" name="location" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="salary">Salary</Label>
                <Input id="salary" placeholder="e.g. $120,000" name="salary" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Describe the role, responsibilities, and requirements..."
                name="description"
                rows={5}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Skills / Tags</Label>
              <Input
                id="tags"
                placeholder="e.g. React, TypeScript, Node.js (comma-separated)"
                name="tags"
              />
            </div>

            <div className="space-y-2">
              <Label>Work Mode</Label>
              <div className="flex flex-wrap gap-4">
                {["Full Time", "Part Time", "Remote", "Hybrid"].map((mode) => (
                  <label
                    key={mode}
                    className="flex items-center gap-2 text-sm cursor-pointer"
                  >
                    <input type="radio" name="mode" value={mode} className="accent-primary" />
                    {mode}
                  </label>
                ))}
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full font-semibold">
              Publish Job
            </Button>
          </form>
        </main>
        <Footer />
      </div>
    </GSAPProvider>
  );
}
