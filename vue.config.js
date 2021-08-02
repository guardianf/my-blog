'use strict';
const path = require('path');
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  configureWebpack: {
    name: 'Blog',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  chainWebpack(config) {
    // config
    //   .when(process.env.NODE_ENV !== 'development')
    //   .after('html')
    //   .use('script-ext-html-webpack-plugin', [{
    //     inline: /runtime\..*\.js$/
    //   }])
    //   .end();
  }
}
