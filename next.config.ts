import type { NextConfig } from "next";

// Die Planwerk-Webseite ist ein eigenes Next.js-Projekt (Zone mit basePath "/planwerk").
// Lokal: `npm run dev` in planwerk-webseite (Port 3001). Produktiv: PLANWERK_URL auf die Deployment-Adresse setzen.
const planwerkUrl = process.env.PLANWERK_URL ?? "http://localhost:3001";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/planwerk", destination: `${planwerkUrl}/planwerk` },
      { source: "/planwerk/:path*", destination: `${planwerkUrl}/planwerk/:path*` },
    ];
  },
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
