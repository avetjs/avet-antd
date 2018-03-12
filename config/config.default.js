exports.antd = {
  mode: 'static', // normal、cdn、static
  // 可以切换到一个支持 latest 的 cdn 上
  cssCdn: '//cdnjs.cloudflare.com/ajax/libs/antd/3.0.0/antd.min.css',
};

exports.build = {
  babel: babelConfig => {
    babelConfig.plugins.push([
      require.resolve('babel-plugin-import'),
      { libraryName: 'antd', style: false },
    ]);
    return babelConfig;
  },
};
