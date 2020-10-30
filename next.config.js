module.exports = {
  esModule: true,
  trailingSlash: true,
  async headers() {
    return [
      {
        source: '/:path*/',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          }
        ]
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/irlanda/home/',
        permanent: true,
      },
    ]
  }
}
