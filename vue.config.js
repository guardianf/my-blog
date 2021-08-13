'use strict';
const path = require('path');
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  pages: {
    page1: {
      // page 的入口
      entry: 'src/love.js',
      // 模板来源
      template: 'public/love.html',
      // 在 dist/index.html 的输出
      filename: 'love.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'love'
    }
  },
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
