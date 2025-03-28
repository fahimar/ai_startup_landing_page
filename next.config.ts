import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // Configure SVGR
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  // Your other configurations...
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["example.com"],
  },
};

export default nextConfig;
