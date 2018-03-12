const { writeFileSync, readFileSync } = require('fs');
const { join } = require('path');

module.exports = app => {
  const config = app.config.antd;
  const appConfig = app.config.app;

  if (config.mode === 'static') {
    const cssfile = require.resolve('antd/dist/antd.min.css');
    const output = join(appConfig.dir, 'static', 'antd.min.css');
    writeFileSync(output, readFileSync(cssfile), 'utf8');
  }
};
