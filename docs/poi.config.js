module.exports = {
  autoprefixer: {
    browsers: ['> 5%']
  },
  html: {
    template: 'index.html'
  },
  staticFolder: 'component-docs',
  devServer: {
    contentBase: 'component-docs',
    hot: true,
    watchContentBase: true
  },
  webpack (config) {
    config.output.publicPath = ''
    return config
  }
}
