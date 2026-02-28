import { mockJobs } from "@/data/jobs";
import JobDetailClient from "./JobDetailClient";

export function generateStaticParams() {
  return mockJobs.map((job) => ({
    slug: job.id,
  }));
}

export default function JobDetailPage({ params }: { params: { slug: string } }) {
  return <JobDetailClient slug={params.slug} />;
}
