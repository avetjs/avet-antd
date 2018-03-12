import React from 'react';
import config from 'avet/config';

const AntdHead = { content: [] };

let filepath;
if (config.antd.mode === 'cdn') {
  filepath = config.antd.cssCdn;
} else if (config.antd.mode === 'static') {
  filepath = '/static/antd.min.css';
}

if (filepath) {
  AntdHead.content = [<link rel="stylesheet" href={filepath} />];
}

export default {
  head: AntdHead,
};
