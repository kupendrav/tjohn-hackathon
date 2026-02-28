"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GSAPProvider from "@/components/animations/GSAPProvider";
import FadeInView from "@/components/animations/FadeInView";
import AnimatedText from "@/components/animations/AnimatedText";
import StaggerGrid from "@/components/animations/StaggerGrid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { RealJob } from "@/lib/jobs";

interface CompanyData {
  name: string;
  jobs: RealJob[];
  roles: string[];
  locations: Set<string>;
}

export default function CompanyPage() {
  const [companies, setCompanies] = useState<CompanyData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCompanies() {
      try {
        const res = await fetch("/api/jobs");
        const data = await res.json();
        const jobsList: RealJob[] = data.jobs || [];

        // Group jobs by company
        const companyMap = new Map<string, CompanyData>();
        for (const job of jobsList) {
          const name = job.company;
          if (!companyMap.has(name)) {
            companyMap.set(name, {
              name,
              jobs: [],
              roles: [],
              locations: new Set<string>(),
            });
          }
          const cd = companyMap.get(name)!;
          cd.jobs.push(job);
          if (!cd.roles.includes(job.title)) cd.roles.push(job.title);
          if (job.location) cd.locations.add(job.location.split(",")[0].trim());
        }

        // Sort by number of openings descending
        const sorted = Array.from(companyMap.values()).sort(
          (a, b) => b.jobs.length - a.jobs.length
        );
        setCompanies(sorted);
      } catch {
        setCompanies([]);
      } finally {
        setLoading(false);
      }
    }
    fetchCompanies();
  }, []);

  return (
    <GSAPProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
          <FadeInView direction="left">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <span className="text-foreground font-medium">Companies</span>
            </nav>
          </FadeInView>

          <AnimatedText
            text="Companies Hiring Now"
            tag="h1"
            className="text-3xl sm:text-4xl font-bold mb-2"
          />
          <FadeInView direction="up" delay={0.1}>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Real-time company listings aggregated from Remotive, Arbeitnow, and
              curated sources. Click a company to see matching jobs.
            </p>
          </FadeInView>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="h-44 border rounded-xl bg-muted/50 animate-pulse"
                />
              ))}
            </div>
          ) : companies.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">
                No companies found. Please try again later.
              </p>
            </div>
          ) : (
            <>
              <FadeInView direction="up" delay={0.15}>
                <p className="text-sm text-muted-foreground mb-4">
                  {companies.length} companies with open positions
                </p>
              </FadeInView>
              <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {companies.map((company) => (
                  <Link
                    key={company.name}
                    href={`/jobs?query=${encodeURIComponent(company.name)}`}
                    className="group"
                  >
                    <div className="h-full border rounded-xl p-6 bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300 group-hover:-translate-y-1 flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors line-clamp-1">
                          {company.name}
                        </h3>
                        <Badge variant="default" className="text-xs shrink-0 ml-2">
                          {company.jobs.length} {company.jobs.length === 1 ? "job" : "jobs"}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {Array.from(company.locations)
                          .slice(0, 3)
                          .map((loc) => (
                            <Badge key={loc} variant="secondary" className="text-[10px]">
                              {loc}
                            </Badge>
                          ))}
                        {company.locations.size > 3 && (
                          <Badge variant="outline" className="text-[10px]">
                            +{company.locations.size - 3} more
                          </Badge>
                        )}
                      </div>

                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground mb-1 font-medium">
                          Open Roles:
                        </p>
                        <ul className="space-y-0.5">
                          {company.roles.slice(0, 3).map((role) => (
                            <li
                              key={role}
                              className="text-xs text-muted-foreground line-clamp-1"
                            >
                              • {role}
                            </li>
                          ))}
                          {company.roles.length > 3 && (
                            <li className="text-xs text-primary font-medium">
                              +{company.roles.length - 3} more roles
                            </li>
                          )}
                        </ul>
                      </div>

                      <div className="mt-4 pt-3 border-t">
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full text-xs group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        >
                          View All Jobs &rarr;
                        </Button>
                      </div>
                    </div>
                  </Link>
                ))}
              </StaggerGrid>
            </>
          )}
        </main>
        <Footer />
      </div>
    </GSAPProvider>
  );
}