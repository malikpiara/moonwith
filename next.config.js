module.exports = {
    async rewrites() {
      return [
        {
          source: '/cobra/:path*',
          destination: 'https://cobra.moonwith.com/:path*',
        },
      ]
    },
  }