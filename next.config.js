/** @type {import('next').NextConfig} */

// const withPWA = require("next-pwa")({
//   disable: process.env.NODE_ENV === "development",
//   dest: "public",
//   register: true,
//   skipWaiting: true,
//   scope: "/app",
// });

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA({
  reactStrictMode: process.env.NODE_ENV === "development" ? false : true,
});
