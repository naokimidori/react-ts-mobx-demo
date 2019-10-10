const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = [
    {
        test: /\.scss$/,
        use: [
            // "style-loader", // 将 JS 字符串生成为 style 节点
            MiniCssExtractPlugin.loader,
            "css-loader", // 将 CSS 转化成 CommonJS 模块
            // {
            // 避免css类名全局污染 将类名转换为hash值
            //     loader: "typings-for-css-modules-loader",
            //     options: {
            //         //是否使用css modules
            //         modules: true,
            //         // 类名导出
            //         nameExport: true,
            //         // 支持驼峰
            //         camelCase: true,
            //         // 是否使用Sass
            //         sass: true
            //     }
            // },
            // "sass-loader" // 将 Sass 编译成 CSS
            {
                loader: "sass-loader",
                options: {
                    // css官方git近期（2019年9月中旬）更新了配置：真鸡儿坑
                    sassOptions: {
                        // 在原来的基础上增加了sassOptions属性，并且把includePaths放在了该属性内
                        includePaths: [
                            path.join(__dirname, "../../", "src/assets/css")
                        ]
                    }
                }
            }
        ]
    }
];
