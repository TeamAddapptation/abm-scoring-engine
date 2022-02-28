const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/app.js"),
    formDemo: path.resolve(__dirname, "./src/pages/formDemo.js"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "./dist"),
    },
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      inject: "body",
      template: "./src/pages/index.html",
      chunks: ["main"],
      title: "Addapptation",
    }),
    new HtmlWebpackPlugin({
      filename: "formDemo.html",
      inject: "body",
      template: "./src/pages/formDemo.html",
      chunks: ["main", "formDemo"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_module/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg)$/i,
        type: "assets/resources",
      },
    ],
  },
};
