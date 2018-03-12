import pxtorem from 'postcss-px2rem'

export default {
  extraBabelPlugins: [
    ["import", { libraryName: "antd-mobile", style: true }]
  ],
  extraPostCSSPlugins: [
    pxtorem({
      rootValue: 75,
      propWhiteList: [],
    }),
  ],
  theme: {
    hd: '2px'
  }
}
