"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import FadeInView from "@/components/animations/FadeInView";
import AnimatedText from "@/components/animations/AnimatedText";
import MagneticButton from "@/components/animations/MagneticButton";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-primary p-8 sm:p-12 lg:p-16 text-center">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

        <div className="relative z-10">
          <AnimatedText
            text="Ready to Land Your Next Role?"
            tag="h2"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground"
          />
          <FadeInView direction="up" delay={0.2}>
            <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto text-sm sm:text-base">
              Join thousands of professionals who found their perfect career match
              through JobSeekz. Create your profile and start applying today.
            </p>
          </FadeInView>
          <FadeInView direction="up" delay={0.4}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <MagneticButton>
                <Link href="/signup">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="font-semibold px-8"
                  >
                    Create Free Account
                  </Button>
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link href="/jobs">
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-semibold px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Browse Jobs
                  </Button>
                </Link>
              </MagneticButton>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
