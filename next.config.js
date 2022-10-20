/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png']
  }
}

module.exports = nextConfig
