import JobDetailClient from "./JobDetailClient";

export const dynamicParams = false;

export async function generateStaticParams() {
  // Return curated job IDs for static generation
  return [
    { slug: "curated-google-swe" },
    { slug: "curated-microsoft-sde" },
    { slug: "curated-amazon-sde2" },
    { slug: "curated-meta-frontend" },
    { slug: "curated-apple-ios" },
    { slug: "curated-netflix-backend" },
    { slug: "curated-stripe-fullstack" },
    { slug: "curated-tesla-ml" },
    { slug: "curated-tcs-java" },
    { slug: "curated-infosys-fullstack" },
  ];
}

export default function JobDetailPage({ params }: { params: { slug: string } }) {
  return <JobDetailClient slug={params.slug} />;
}
