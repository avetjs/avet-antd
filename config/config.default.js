'use strict';

exports.build = {
  babel: (babelConfig) => {
    babelConfig.plugins.push(
      [
        require.resolve('babel-plugin-import'),
        {
          "libraryName": "antd",
          "style": false
        }
      ]
    );
    return babelConfig;
  }
}
