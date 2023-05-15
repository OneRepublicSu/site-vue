const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // transpileDependencies: true,
  publicPath: './',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    // 此处开启 https
    https: true
  }

})
