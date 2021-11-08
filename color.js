const path = require('path')
const { generateTheme } = require('antd-theme-generator')
const options = {
  antDir: path.join(__dirname, './node_modules/ant-design-vue'),
  stylesDir: path.join(__dirname, './src/colorless'),
  varFile: path.join(__dirname, './src/colorless/variables.less'),
  mainLessFile: path.join(__dirname, './src/colorless/index.less'),
  themeVariables: [
    '@primary-color',
    '@secondary-color',
    '@text-color',
    '@text-color-secondary',
    '@heading-color',
    '@layout-body-background',
    '@btn-primary-bg',
    '@layout-header-background',
  ],
  indexFileName: 'index.html',
  outputFilePath: path.join(__dirname, './public/color.less'),
}
generateTheme(options)
  .then(() => {
    console.log('Theme generated successfully')
  })
  .catch((error) => {
    console.log('Error', error + '生成错误')
  })