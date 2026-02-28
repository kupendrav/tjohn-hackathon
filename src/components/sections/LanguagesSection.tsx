"use client";

import React from "react";
import Image from "next/image";
import { programmingLanguages } from "@/data/languages";
import FadeInView from "@/components/animations/FadeInView";
import AnimatedText from "@/components/animations/AnimatedText";
import StaggerGrid from "@/components/animations/StaggerGrid";

export default function LanguagesSection() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedText
        text="Popular Technologies"
        tag="h2"
        className="text-2xl sm:text-3xl font-bold"
      />
      <FadeInView direction="up" delay={0.1}>
        <p className="text-muted-foreground mt-2 mb-8 max-w-lg">
          Browse jobs by the technologies and tools you love working with.
        </p>
      </FadeInView>

      <StaggerGrid className="flex flex-wrap gap-6 sm:gap-10 justify-center sm:justify-start">
        {programmingLanguages.map(({ src, title, jobCount }) => (
          <div
            key={title}
            className="flex flex-col items-center gap-3 group cursor-pointer"
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-card border shadow-sm group-hover:shadow-lg group-hover:shadow-primary/10 group-hover:border-primary/30 transition-all duration-300 flex items-center justify-center overflow-hidden">
              <Image
                className="object-contain p-3 group-hover:scale-110 transition-transform duration-300"
                src={src}
                width={80}
                height={80}
                alt={`${title} icon`}
              />
            </div>
            <div className="text-center">
              <h3 className="text-sm font-medium">{title}</h3>
              <p className="text-xs text-muted-foreground">
                {jobCount.toLocaleString()} jobs
              </p>
            </div>
          </div>
        ))}
      </StaggerGrid>
    </section>
  );
}
