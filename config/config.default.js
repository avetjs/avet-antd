'use strict';

exports.build = {
  babel: {
    plugins: [
      [
        require.resolve('babel-plugin-import'),
        {
          "libraryName": "antd",
          "style": false
        }
      ]
    ]
  }
}
