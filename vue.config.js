const path = require('path');
const defaultSettings = require('./src/settings.js');

function currentDir(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    publicPath: '/',
    outputDir: '/blueDist',
    assetsDir: 'static',
    lintOnSave: false,
    productionSourceMap: false,
    devServer: {},
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/styles/variables.scss";`  
            },
        }
    },
    configureWebpack: {
        name: defaultSettings.title,
        resolve: {
            alias: {
                '@': currentDir('src')
            }
        }
    },
    chainWebpack(config) {}
}