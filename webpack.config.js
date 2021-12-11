const path = require("path");
const webpack = require("webpack");
require("dotenv").config({ path: ".env" });

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public", "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.API_KEY": JSON.stringify(process.env.API_KEY),
    }),
  ],
  devtool: "cheap-module-eval-source-map",
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "public"),
    publicPath: "/dist/",
  },
};
