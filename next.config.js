/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // necessário pra funcionar no GitHub Pages
  },
  trailingSlash: true, // importante para rotas funcionarem no GitHub Pages
};

module.exports = nextConfig;
