"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import GSAPProvider from "@/components/animations/GSAPProvider";

export default function LoginPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(formRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.8 })
      .fromTo(imageRef.current, { opacity: 0, x: 50, scale: 0.9 }, { opacity: 1, x: 0, scale: 1, duration: 0.8 }, "-=0.5");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid email or password. Please try again.");
      } else {
        router.push("/jobs");
        router.refresh();
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <GSAPProvider>
      <div className="flex flex-col md:flex-row w-full min-h-screen items-center justify-center gap-8 md:gap-20 px-4 py-10">
        <div ref={formRef} style={{ opacity: 0 }}>
          <section className="w-full max-w-sm flex flex-col gap-3">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-2">&larr; Back to Home</Link>
            <h1 className="text-3xl font-cal text-center mb-2">Welcome Back</h1>
            <p className="text-sm text-muted-foreground text-center mb-4">Sign in to your JobSeekz account</p>

            {error && (
              <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-lg text-center">{error}</div>
            )}

            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <Input placeholder="Email address" type="email" className="h-11" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <Input placeholder="Password" type="password" className="h-11" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <Button className="h-11 font-semibold" disabled={loading}>
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <div className="flex items-center gap-3 py-4">
              <Separator className="flex-1" />
              <span className="text-xs text-muted-foreground">new here?</span>
              <Separator className="flex-1" />
            </div>

            <p className="text-sm text-center text-muted-foreground mt-2">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-primary hover:underline font-medium">Sign up</Link>
            </p>
          </section>
        </div>
        <div ref={imageRef} className="hidden md:block" style={{ opacity: 0 }}>
          <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/imgs/job_hunt_re_q203.svg`} width={350} height={350} alt="Job searching illustration" className="drop-shadow-lg" />
        </div>
      </div>
    </GSAPProvider>
  );
}
