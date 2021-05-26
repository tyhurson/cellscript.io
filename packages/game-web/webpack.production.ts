const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const IgnoreEmitWebpackPlugin = require("ignore-emit-webpack-plugin");
const meta = require("../../static/meta.json");

module.exports = merge(commonConfig, {
  mode: "production",
  output: {
    filename: "bundle.[contenthash].js",
    publicPath: "static",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      hash: true,
      meta: {
        author: meta.author,
        charset: "utf-8",
        copyright: meta.author,
        description: meta.description,
        robots: "index,follow",
        viewport: "width=device-width",
      },
      template: "./public/index.html",
      templateParameters: {
        title: meta.name,
      },
    }),
    new IgnoreEmitWebpackPlugin(/\.d\.ts$/),
  ],
});
