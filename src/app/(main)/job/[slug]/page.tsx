export const dynamic = "force-dynamic";

export default function JobDetailPage({ params }: { params: { slug: string } }) {
  return <JobDetailClient slug={params.slug} />;
}

import JobDetailClient from "./JobDetailClient";
