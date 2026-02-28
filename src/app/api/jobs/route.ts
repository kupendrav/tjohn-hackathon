import { NextRequest, NextResponse } from "next/server";
import { fetchAllJobs, filterJobs } from "@/lib/jobs";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query") || undefined;
    const location = searchParams.get("location") || undefined;
    const mode = searchParams.get("mode") || undefined;
    const skills = searchParams.get("skills")
      ? searchParams.get("skills")!.split(",")
      : undefined;

    // Fetch from all sources
    const allJobs = await fetchAllJobs(query);

    // Apply additional filters
    const filtered = filterJobs(allJobs, { query, location, mode, skills });

    return NextResponse.json({
      jobs: filtered,
      total: filtered.length,
      sources: ["Remotive", "Arbeitnow", "Google Careers", "Microsoft Careers", "Amazon Jobs", "Meta Careers", "Netflix Jobs"],
    });
  } catch (error) {
    console.error("Jobs API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch jobs", jobs: [], total: 0 },
      { status: 500 }
    );
  }
}
