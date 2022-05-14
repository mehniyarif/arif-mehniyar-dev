const { defineConfig } = require('@vue/cli-service')
process.env.VUE_APP_VERSION = require('./package.json').version
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'Arif Mehniyar',
    themeColor: '#9CE3FFAD',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

  }
})
