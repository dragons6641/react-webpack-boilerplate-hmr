const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const commonPaths = require("./common-paths");

const config = {
  mode: "production",
  entry: {
    app: [`${commonPaths.appEntry}/index.js`],
  },
  output: {
    filename: "static/[name].[fullhash].js",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              config: {
                ctx: {
                  autoprefixer: {
                    browsers: "last 2 versions",
                  },
                },
              },
            },
          },
        ],
        test: /(\.scss|\.sass)$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              config: {
                ctx: {
                  autoprefixer: {
                    browsers: "last 2 versions",
                  },
                },
              },
            },
          },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/styles.[name].css",
      chunkFilename: "styles/styles.[id].css",
    }),
  ],
};

module.exports = config;
