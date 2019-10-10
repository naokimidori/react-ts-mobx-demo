const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const rootPath = path.join(__dirname, "../src");
const jsRules = require("./rules/jsRules");
const styleRules = require("./rules/styleRules");
const plugins = require("./plugins");

console.log("路径", path.join(__dirname, "../tsconfig.json"));

let entries = {};
entries.app = [path.resolve(rootPath, "index.tsx")];

module.exports = {
    entry: entries,
    output: {
        path: path.join(__dirname, "./../", "dist"),
        filename: "js/[name].js"
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".tsx", ".ts", ".scss", ".css"],
        alias: {
            // "@img": path.resolve(rootPath, "./assets/images"),
            // "@js": path.resolve(rootPath, "./assets/js"),
            "@views": path.resolve(rootPath, "./containers/views"),
            "@shared": path.resolve(rootPath, "./containers/shared"),
            "@css": path.resolve(rootPath, "./assets/css"),
            "@components": path.resolve(rootPath, "./components")
            // "@base": path.resolve(rootPath, "./basecomponent"),
            // "@models": path.resolve(rootPath, "./models")
        },
        plugins: [
            new TsconfigPathsPlugin({
                configFile: path.join(__dirname, "../tsconfig.json")
            })
        ]
    },
    module: {
        rules: [...jsRules, ...styleRules]
    },
    plugins: [...plugins]
};
