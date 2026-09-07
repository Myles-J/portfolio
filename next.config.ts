import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	distDir: process.env.NEXT_DIST_DIR || ".next",
	reactStrictMode: true,
  typedRoutes:true,
  reactCompiler: true,
	typescript: {
		ignoreBuildErrors: true,
	},
};

export default nextConfig;
