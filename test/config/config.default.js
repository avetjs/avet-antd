const { join } = require('path');

exports.app = {
  dir: join(__dirname, '..'),
};

exports.build = {
  webpackDevMiddleware: {
    noInfo: true,
    quiet: true,
  },
};
