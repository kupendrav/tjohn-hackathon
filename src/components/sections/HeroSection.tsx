"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import MagneticButton from "@/components/animations/MagneticButton";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const searchRef = useRef<HTMLFormElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 60, clipPath: "inset(100% 0 0 0)" },
        { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)", duration: 1 }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.4"
        )
        .fromTo(
          searchRef.current,
          { opacity: 0, y: 30, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8 },
          "-=0.4"
        )
        .fromTo(
          badgesRef.current?.children ? Array.from(badgesRef.current.children) : [],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
          "-=0.3"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden py-16 sm:py-24 lg:py-32"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
          style={{ opacity: 0 }}
        >
          Find Your{" "}
          <span className="text-primary relative">
            Dream Job
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8 Q50 2 100 6 T198 4"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          Today
        </h1>

        <p
          ref={subtitleRef}
          className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          style={{ opacity: 0 }}
        >
          Discover thousands of opportunities from top companies. Your next
          career move is just a search away.
        </p>

        <form
          ref={searchRef}
          className="mt-10 flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto"
          style={{ opacity: 0 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <Input
            placeholder="Job title, keyword, or company"
            className="h-12 text-base flex-1"
          />
          <Input
            placeholder='City, state, or "remote"'
            className="h-12 text-base flex-1"
          />
          <MagneticButton>
            <Button size="lg" className="h-12 px-8 font-semibold">
              Search Jobs
            </Button>
          </MagneticButton>
        </form>

        <div
          ref={badgesRef}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="text-xs text-muted-foreground">Popular:</span>
          {["React", "Python", "Remote", "Full Stack", "UI/UX"].map((tag) => (
            <Link
              key={tag}
              href="/jobs"
              className="px-3 py-1 text-xs font-medium rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-200 hover:scale-105"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
