module.exports = {
  cache: true,
  devtool: "inline-source-map",
  entry: "./src/index.ts",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: "bundle.[contenthash].js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
