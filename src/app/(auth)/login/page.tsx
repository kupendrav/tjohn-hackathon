"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";
import GSAPProvider from "@/components/animations/GSAPProvider";

export default function LoginPage() {
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
            <h1 className="text-3xl font-cal text-center mb-2">Welcome Back</h1>
            <p className="text-sm text-muted-foreground text-center mb-4">
              Sign in to your JobSeekz account
            </p>

            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <Input placeholder="Email address" type="email" className="h-11" />
              <Input placeholder="Password" type="password" className="h-11" />
              <Button className="h-11 font-semibold">Sign In</Button>
            </form>

            <div className="flex items-center gap-3 py-4">
              <Separator className="flex-1" />
              <span className="text-xs text-muted-foreground">or continue with</span>
              <Separator className="flex-1" />
            </div>

            <div className="flex flex-col gap-2">
              <Button variant="outline" className="h-11 gap-3 font-medium">
                <FaGoogle size={18} />
                Google
              </Button>
              <Button variant="outline" className="h-11 gap-3 font-medium" disabled>
                <FaGithub size={18} />
                GitHub
              </Button>
              <Button variant="outline" className="h-11 gap-3 font-medium" disabled>
                <FaLinkedin size={18} />
                LinkedIn
              </Button>
            </div>

            <p className="text-sm text-center text-muted-foreground mt-4">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-primary hover:underline font-medium">
                Sign up
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
