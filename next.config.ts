import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  swcMinify: true,
  transpilePackages: [], // Empty array means no packages will be transpiled
};

export default nextConfig;
