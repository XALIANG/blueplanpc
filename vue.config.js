const path = require('path');
const defaultSettings = require('./src/settings.js');
const webpack = require('webpack')
const createThemeColorReplacerPlugin = require("./src/config/plugin.config")
function currentDir(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    publicPath: '/',
    outputDir: 'blueDist',
    assetsDir: 'static',
    lintOnSave: false,
    productionSourceMap: false,
    runtimeCompiler: true,
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/styles/variables.scss";`
            },
            less: {
                modifyVars: {
                  // less vars，customize ant design theme
        
                  // 'primary-color': '#F5222D',
                  // 'link-color': '#F5222D',
                  // 'border-radius-base': '4px'
                },
                // DO NOT REMOVE THIS LINE
                javascriptEnabled: true
              }
        }
    },
    devServer: {
        // proxy: {
        //     '/api': {
        //         target: 'http://localhost:9999/conviction',  // 测试
        //         changeOrigin: true,  //是否跨域
        //         pathRewrite: {
        //             '^/api': '/'
        //         }
        //     }
        // }
    },
    configureWebpack: {
        name: defaultSettings.title,
        resolve: {
            alias: {
                '@': currentDir('src')
            }
        },
        plugins:[createThemeColorReplacerPlugin()]
    },
}