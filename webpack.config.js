const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: ["./src/main.js", "./public/style.css"],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
        ],
      },

      plugins: [
        new MiniCssExtractPlugin({
          filename: 'index.css'
        })
      ]
};