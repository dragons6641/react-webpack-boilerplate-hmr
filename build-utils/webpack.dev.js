const webpack = require("webpack");

const commonPaths = require("./common-paths");
const banner = require("./banner.js");

const port = process.env.PORT || 3000;
const config = {
  mode: "development",
  entry: {
    app: `${commonPaths.appEntry}/index.jsx`,
  },
  output: {
    filename: "[name].[fullhash].js",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
            },
          },
        ],
        test: /(\.scss|\.sass)$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
            },
          },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
  optimization: {
    usedExports: true,
  },
  plugins: [new webpack.BannerPlugin(banner), new webpack.DefinePlugin({})],
  devServer: {
    host: "localhost",
    port: port,
    historyApiFallback: true,
    hot: true,
    open: true,
  },
};

module.exports = config;
