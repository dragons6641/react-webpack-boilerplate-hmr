const HtmlWebpackPlugin = require("html-webpack-plugin");

const commonPaths = require("./common-paths");

const URL_LOADER_LIMIT = 10000;
const config = {
  entry: {
    app: [`${commonPaths.appEntry}/index.jsx`],
    vendor: ["semantic-ui-react"],
  },
  output: {
    path: commonPaths.outputPath,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: commonPaths.outputPath,
              name: "[name].[ext]?[fullhash]",
            },
          },
          {
            loader: "url-loader",
            options: {
              publicPath: commonPaths.outputPath,
              name: "[name].[ext]?[fullhash]",
              limit: URL_LOADER_LIMIT,
            },
          },
        ],
      },
      {
        test: /\.txt$/,
        use: [
          {
            loader: "raw-loader",
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          test: "vendor",
          name: "vendor",
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/favicon.ico",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", "..."],
  },
};

module.exports = config;
