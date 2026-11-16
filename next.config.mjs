/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // fully static: no server, no database, lasts for years
  images: { unoptimized: true },
  trailingSlash: true,
};
export default nextConfig;
