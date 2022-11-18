module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://piara.li/:path*',
        },
      ]
    },
  }