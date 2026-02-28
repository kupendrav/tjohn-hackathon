"use client";

import React from "react";
import { stats } from "@/data/stats";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import FadeInView from "@/components/animations/FadeInView";

export default function StatsSection() {
  return (
    <section className="py-16 border-y bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView direction="up">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-card border shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
