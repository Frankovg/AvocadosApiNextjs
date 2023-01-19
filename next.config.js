module.exports = {
  async rewrite() {
    return [
      {
        source: '/avo/:path*',
        destination: '/product/:path*/',
      },
    ]
  },
}
