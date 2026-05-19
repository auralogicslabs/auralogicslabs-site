import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/demo",
        destination: "/nexora-engine/demo",
        permanent: true,
      },
      {
        source: "/docs",
        destination: "/nexora-engine/docs",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
