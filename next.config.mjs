/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/tjohn-hackathon",
  images: {
    unoptimized: true,
  },
  experimental: {
    serverComponentsExternalPackages: ["mongoose", "pdf-parse"],
  },
};

export default nextConfig;
