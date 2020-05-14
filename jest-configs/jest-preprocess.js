const babelOptions = {
  presets: ['@babel/preset-react', 'babel-preset-gatsby'],
};

module.exports = require('babel-jest').createTransformer(babelOptions);
