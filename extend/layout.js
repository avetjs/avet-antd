import React from 'react';

export default ({ config }) => {
  const AntdHead = {
    content: [ <link rel="stylesheet" href={config.antd.cssCdn} /> ],
  };

  return {
    head: AntdHead,
  };
};
