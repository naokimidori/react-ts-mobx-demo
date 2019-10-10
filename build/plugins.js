const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = [
    new HtmlWebpackPlugin({
        template: "public/index.html",
        minify: {
            /**
             * @description
             * 删除注释 空格 尽可能删除属性的引号
             */
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
        }
    }),
    // 分离css
    new MiniCssExtractPlugin({
        filename: "css/[name].css"
    })
];
