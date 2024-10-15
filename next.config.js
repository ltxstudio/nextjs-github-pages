const dotenv = require('dotenv');
dotenv.config();
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/nextjs-github-pages",
};

module.exports = {
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    APIRONE_API_KEY: process.env.APIRONE_API_KEY,
  },
};
