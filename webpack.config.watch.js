const path = require("path");
const {merge} = require("webpack-merge");
const baseConfig = require("./webpack.config.base");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(baseConfig, {
    plugins: [
      new MiniCssExtractPlugin({
        filename: (pathData) => pathData.chunk.filenameTemplate.replace(".css", ".min.css")
      }),
    ],
    devtool: "source-map",
    optimization: {
        minimize: false,
    },
    performance: {
        hints: false
    },
    devServer: {
        static: path.join(__dirname, "src/content/"),
        compress: true,
        port: 8082,
        host: "0.0.0.0",
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
        },
    },
});