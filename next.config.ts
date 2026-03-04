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
        destination: `${process.env.API_SERVER}:path*`,
      },
    ];
  },
};

export default nextConfig;
