const markdownParser = require('./markdownParser')
const path = require('path');

module.exports = {
  base: process.env.NODE_ENV ? '/vue-black-dashboard/documentation/' : '',
  markdown: {
    config: markdownParser
  },
  configureWebpack: (config, isServer) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../../src')
    config.resolve.alias['assets'] = path.resolve(__dirname, '../../src/assets')
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
          options.optimizeSSR = false
          return options;
        }
      )
  },
  head: [
    ['link', { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800" }],
    ['link', { rel: 'stylesheet', href: "https://use.fontawesome.com/releases/v5.0.6/css/all.css" }],
  ],
  themeConfig: {
    sidebarDepth: 1,

    sidebar: [{
      title: 'Getting Started',
      collapsable: false,
      children: [
        '/',
        '/quick-start',
        '/licence',
        '/contents',
        '/build-tools'
      ]
    },
    {
      title: 'Components',
      collapsable: false,
      children: [
        '/components/alerts',
        '/components/breadcrumb',
        '/components/buttons',
        '/components/cards',
        '/components/dropdowns',
        '/components/forms',
        '/components/google-maps',
        '/components/modal',
        // '/components/navbar',
        '/components/nucleo-icons',
        '/components/tables',
        '/components/typography',
      ]
    },
    {
      title: 'Plugins',
      collapsable: false,
      children: [
        //'/components/plugin-perfect-scrollbar',
        '/components/plugin-chartjs',
        '/components/plugin-notify',
      ]
    }
    ],
    nav: [
      { text: 'Home', link: '/' },
    ]
  }
};
