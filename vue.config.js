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
    //Solution For Issue:You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
    //zhengkai.blog.csdn.net
    runtimeCompiler: true,
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