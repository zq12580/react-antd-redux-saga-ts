const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
              // '@primary-color': '#1DA57A',// 全局主色 
              // '@text-color': '#000',//默认字体颜色
              // '@success-color': '#52c41a', // 成功色 
              // '@warning-color': '#faad14', // 警告色 
              // '@error-color': '#f5222d', // 错误色 
              // '@link-color': '@text-color', // 链接色
              // '@font-size-base': '14px', // 主字号 
              // '@heading-color': 'rgba(0, 0, 0, 0.85)', // 标题色 
              // '@text-color-secondary': 'rgba(0, 0, 0, 0.45)', // 次文本色 
              // '@disabled-color': 'rgba(0, 0, 0, 0.25)', // 失效色 
              // '@border-radius-base': '4px', // 组件/浮层圆角 
              // '@border-color-base': '#d9d9d9', // 边框色 
              // '@box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)', // 浮层阴影
              // '@link-hover-color': '@primary-color',//a触摸颜色
              // '@layout-body-background': '#fff',//layout背景色
              // '@layout-header-background': '@primary-color',//头部背景色
              // '@layout-header-height': '40px',//头部高
              // '@layout-header-padding': '0 15px',//头部padding
              // '@layout-header-color': '#fff',//头部字体颜色
              // '@tabs-card-height': '30px',//tab导航高度
              // '@tabs-bar-margin': '0 0 0 0',//tab导航margin
              // '@item-hover-bg': 'lighten(@primary-color, 35%)',//item的触摸颜色
            },
          },
        },
      },
    },
  ],
};