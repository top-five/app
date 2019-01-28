const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

// Try out docZ - https://github.com/pedronauck/docz/releases/tag/v0.11.0

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx', '.json'];
  storybookBaseConfig.plugins.push(
    new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true, tsconfig: './tsconfig.json' })
  );
  // storybookBaseConfig.module.rules.push({
  //   test: /\.(j|t)sx?$/,
  //   exclude: /node_modules/,
  //   use: [
  //     {
  //       loader: 'babel-loader',
  //       options: {
  //         cacheDirectory: true,
  //         babelrc: false,
  //         presets: [
  //           "modern-browsers",
  //           "@babel/typescript",
  //           "@babel/react"
  //         ],
  //         plugins: [
  //           ['@babel/plugin-proposal-class-properties', { loose: false }],
  //           '@babel/plugin-proposal-object-rest-spread',
  //           'react-hot-loader/babel'
  //         ]
  //       }
  //     }
  //   ]
  // }, {
  //   test: /\.(gif|jpe?g|png|svg)$/,
  //   use: {
  //     loader: 'url-loader',
  //     options: { name: '[name].[ext]' }
  //   }
  // });

  return storybookBaseConfig;
};
