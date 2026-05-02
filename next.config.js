import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  cache: {
    type: 'filesystem',
  },
  webpack(config) {
    const originalEmitWarning = process.emitWarning

    process.emitWarning = (warning, ...args) => {
      if (typeof warning === 'string' && warning.includes('color-adjust')) return

      return originalEmitWarning(warning, ...args)
    }

    return config
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default withBundleAnalyzer(nextConfig)
