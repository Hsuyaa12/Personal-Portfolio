/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Personal-Portfolio',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  assetPrefix: '/Personal-Portfolio',
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
}

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      }
    } else {
      nextConfig[key] = userConfig[key]
    }
  }
}

// Try to load user config
let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
  mergeConfig(nextConfig, userConfig)
} catch (e) {
  // ignore error
}

export default nextConfig
