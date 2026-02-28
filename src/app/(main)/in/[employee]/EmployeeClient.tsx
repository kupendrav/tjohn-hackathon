"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GSAPProvider from "@/components/animations/GSAPProvider";
import FadeInView from "@/components/animations/FadeInView";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function EmployeeClient({ employee }: { employee: string }) {
  const displayName = employee.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <GSAPProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-8">
          <FadeInView direction="left">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <span className="text-foreground font-medium">{displayName}</span>
            </nav>
          </FadeInView>

          <FadeInView direction="up">
            <div className="border rounded-2xl p-8 bg-card text-center">
              <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center text-3xl">
                &#128100;
              </div>
              <h1 className="text-2xl font-bold">{displayName}</h1>
              <p className="text-muted-foreground mt-1">Software Developer</p>
              <div className="flex flex-wrap gap-2 justify-center mt-4">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Node.js</Badge>
              </div>
              <Button className="mt-6">Connect</Button>
            </div>
          </FadeInView>
        </main>
        <Footer />
      </div>
    </GSAPProvider>
  );
}
