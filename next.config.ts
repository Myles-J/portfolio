import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
  reactCompiler: true,
	typescript: {
		ignoreBuildErrors: true,
	},
};

export default nextConfig;
