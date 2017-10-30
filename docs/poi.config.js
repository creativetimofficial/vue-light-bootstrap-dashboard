module.exports = {
  autoprefixer: {
    browsers: ['> 5%']
  },
  html: {
    template: 'documentation.html'
  },
  webpack (config) {
    return config
  }
}
