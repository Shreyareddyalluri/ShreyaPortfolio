const path = require('path')

module.exports = {
  async redirects() {
    return [
      { source: '/home', destination: '/', permanent: false },
      { source: '/index', destination: '/', permanent: false },
      { source: '/favicon.ico', destination: '/favicon.svg', permanent: false },
    ]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
        pathname: '**',
      },
    ],
  },
}