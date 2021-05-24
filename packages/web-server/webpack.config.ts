const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("../../webpack.config");

module.exports = merge(commonConfig, {
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  target: "node",
});
