/* eslint-disable */
const WithCSS = require('@zeit/next-css');
const antdLessLoader = require("next-antd-aza-less")

if (typeof require !== "undefined") {
  require.extensions[".less"] = () => { };
  require.extensions[".css"] = file => { };
}

/* Without CSS Modules, with PostCSS */
module.exports = WithCSS(antdLessLoader({
  // cssModules: true,
  cssModules: false,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
  }
})
)