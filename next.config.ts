import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/company",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/demo",
        destination: "/nexora-engine/demo",
        permanent: true,
      },
      {
        source: "/nexora-engine/docs",
        destination: "/docs/nexora-engine/getting-started",
        permanent: true,
      },
      {
        source: "/nexora-engine/docs/:path*",
        destination: "/docs/nexora-engine/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
