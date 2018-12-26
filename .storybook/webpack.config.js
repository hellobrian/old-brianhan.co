const path = require('path');

module.exports = (storybookBaseConfig) => {
  storybookBaseConfig.resolve.alias = {
    ...storybookBaseConfig.resolve.alias,
    src: path.resolve(__dirname, '../src'),
  };

  storybookBaseConfig.module.rules.push({
    test: /\.css$/,
    loaders: ['style-loader', 'css-loader'],
    include: path.resolve(__dirname, '../'),
  });

  return storybookBaseConfig;
};
