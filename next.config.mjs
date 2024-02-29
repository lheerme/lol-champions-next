/** @type {import('next').NextConfig} */
import withPlaiceholder from '@plaiceholder/next'
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ddragon.leagueoflegends.com',
      },
    ],
  },
}

export default withPlaiceholder(nextConfig)
