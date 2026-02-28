/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/tjohn-hackathon",
  assetPrefix: "/tjohn-hackathon/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
