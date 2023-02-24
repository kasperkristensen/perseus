const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin({
  loader: { ".css": "empty" },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@medusa-ui/core"],
};

module.exports = withVanillaExtract(nextConfig);
