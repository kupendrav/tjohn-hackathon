"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import GSAPProvider from "@/components/animations/GSAPProvider";

export default function SignupPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      formRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8 }
    ).fromTo(
      imageRef.current,
      { opacity: 0, x: 50, scale: 0.9 },
      { opacity: 1, x: 0, scale: 1, duration: 0.8 },
      "-=0.5"
    );
  }, []);

  return (
    <GSAPProvider>
      <div className="flex flex-col md:flex-row w-full min-h-screen items-center justify-center gap-8 md:gap-20 px-4 py-10">
        <div ref={formRef} style={{ opacity: 0 }}>
          <section className="w-full max-w-sm flex flex-col gap-3">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-2">
              &larr; Back to Home
            </Link>
            <h1 className="text-3xl font-cal text-center mb-1">Create Account</h1>
            <p className="text-sm text-muted-foreground text-center mb-4">
              Join JobSeekz and start your journey
            </p>

            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <Input placeholder="Full name" type="text" className="h-11" />
              <Input placeholder="Email address" type="email" className="h-11" />
              <Input placeholder="Password" type="password" className="h-11" />

              <div className="space-y-2">
                <Label className="text-sm font-medium">Register as</Label>
                <RadioGroup defaultValue="individual" className="flex gap-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="individual" id="individual" />
                    <Label htmlFor="individual" className="cursor-pointer">Individual</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="company" id="company" />
                    <Label htmlFor="company" className="cursor-pointer">Company</Label>
                  </div>
                </RadioGroup>
              </div>

              <Button className="h-11 font-semibold mt-2">Create Account</Button>
            </form>

            <div className="flex items-center gap-3 py-3">
              <Separator className="flex-1" />
              <span className="text-xs text-muted-foreground">or</span>
              <Separator className="flex-1" />
            </div>

            <Button variant="outline" className="h-11 gap-3 font-medium">
              Continue with Google
            </Button>

            <p className="text-sm text-center text-muted-foreground mt-4">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </section>
        </div>

        <div ref={imageRef} className="hidden md:block" style={{ opacity: 0 }}>
          <Image
            src="/imgs/job_hunt_re_q203.svg"
            width={350}
            height={350}
            alt="Job searching illustration"
            className="drop-shadow-lg"
          />
        </div>
      </div>
    </GSAPProvider>
  );
}
