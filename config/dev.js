module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  weapp: {},
  h5: {
    devServer: {
      proxy: {
        '/movies/': {
          target: 'https://www.lechan.xyz/movies/',
          pathRewrite: {
            '^/movies/': '/'
          },
          changeOrigin: true
        }
      }
    }
  }
}
