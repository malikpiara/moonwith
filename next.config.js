module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://cobra-api-mw.herokuapp.com/:path*',
        },
      ]
    },
  }