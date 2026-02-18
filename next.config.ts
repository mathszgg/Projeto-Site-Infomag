import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 👈 ESSENCIAL para gerar site estático
  trailingSlash: true,
  images: {
    unoptimized: true, // 👈 NECESSÁRIO para funcionar com export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;