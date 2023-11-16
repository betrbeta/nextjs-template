/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  disable: process.env.NODE_ENV === "development",
  dest: "public",
  register: true,
  skipWaiting: true,
  sw: "service-worker.js",
  scope: "/app",
});

module.exports = withPWA({
  reactStrictMode: true,
});
