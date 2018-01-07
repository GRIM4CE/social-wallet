module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Social Wallet',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Social Wallet Cryptocurrency Website'
      }
    ]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.module.rules.forEach((rule) => {
        if (rule.test.toString() === '/\\.vue$/') {
          rule.options.loaders.scss[2].options.data = '@import "./assets/variables";'
        }
      })
    }
  }
}
