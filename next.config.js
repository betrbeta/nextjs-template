const withPWAInit = require("next-pwa");

/** @type {import('next-pwa').PWAConfig} */
const withPWA = withPWAInit({
  dest: "public",
  // Solution: https://github.com/shadowwalker/next-pwa/issues/424#issuecomment-1399683017
  buildExcludes: ["app-build-manifest.json"],
});

/** @type {import('next').NextConfig} */

module.exports = withPWA({
  reactStrictMode: true,
});

const nextConfig = {};

module.exports = withPWA(nextConfig);
