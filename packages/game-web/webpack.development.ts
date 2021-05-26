const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const meta = require("../../static/meta.json");

module.exports = merge(commonConfig, {
  devtool: "eval-source-map",
  mode: "development",
  output: {
    filename: "[name].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html",
      templateParameters: {
        title: `${meta.name} (Development)`,
      },
    }),
  ],
});
