module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://cobra.moonwith.com/:path*',
        },
      ]
    },
  }