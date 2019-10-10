const path = require("path");

module.exports = [
    {
        test: /\.ts(x?)$/,
        use: [
            {
                loader: "awesome-typescript-loader",
                options: {
                    // 开启快速增量构建
                    transpileOnly: true
                    // 开启缓存
                    // useCache: true,
                    // cacheDirectory: path.join(__dirname, "../../", "caches"),
                    // babelOptions: {
                    //     // 不需要babelrc文件
                    //     babelrc: false,
                    //     plugins: [
                    //         "react-hot-loader/babel",
                    //         "@babel/plugin-syntax-dynamic-import"
                    //     ]
                    // }
                }
            }
        ]
    }
];
