import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  async rewrites() {
    return [
      {
        source: "/cashbook-api/:path*",
        destination: "http://34.101.77.135:8002/api/v1/:path*",
      },
    ];
  },
};

export default nextConfig;
