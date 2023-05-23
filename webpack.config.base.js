const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    target: ["web", "es2022"],
    module: {
        rules: [
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, "src/main/javascript"),
                use: [
                    "lit-scss-loader",
                    "extract-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            }, {
                test: /\.scss$/i,
                include: path.resolve(__dirname, "src/main/sass"),
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            }, {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {sources: false, minimize: false, esModule: false}
                    }
                ]
            }, {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true
                    }
                }
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    mode: "production",
    cache: true,
    entry: {
        "code.js": {
            import: path.resolve(__dirname, "src/main/index.ts"),
            filename: "code.js",
        },
        "styles.css": {
            import: path.resolve(__dirname, "src/main/sass/styles.scss"),
            filename: "styles.css",
        }
    },
};