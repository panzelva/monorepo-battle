const path = require("path")
const webpack = require("webpack")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin")

const smp = new SpeedMeasurePlugin()

const config = (env, argv) => {
  const isDev = argv.mode !== "production"

  return {
    entry: "./src/main.tsx",
    output: {
      path: path.resolve("./dist"),
      publicPath: "/",
      filename: "[name][fullhash].js",
    },
    module: {
      rules: [
        {
          test: /\.(jsx|tsx|js|ts)$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            plugins: [isDev && "react-refresh/babel"].filter(Boolean),
          },
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin(),
      new HtmlWebPackPlugin({ template: "./public/index.html" }),
      new CleanWebpackPlugin(),
      isDev && new webpack.HotModuleReplacementPlugin(),
      isDev && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
    devServer: {
      historyApiFallback: true,
    },
  }
}

module.exports = smp.wrap(config)
